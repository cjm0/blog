---
sidebar: auto
description: Node.js 多进程
head:
  - - meta
    - name: keywords
      content: 前端一锅煮,Node.js 多进程
---

# Node.js 多进程

Node.js 主线程是单线程的，如果我们使用 node app.js 方式运行，就启动了一个进程，只能在一个 CPU 中进行运算，无法应用服务器的多核 CPU。为了解决这个问题，我们可以使用多进程分发策略，即主进程接收所有请求，然后通过一定的负载均衡策略分发到不同的 Node.js 子进程中。

这一实现有 2 种不同的方案：

- 主进程监听一个端口，子进程不监听端口，主进程通过负载均衡技术分发请求到子进程；

- 主进程和子进程分别监听不同端口，通过主进程分发请求到子进程。

第一种方案多个 Node 进程去监听同一个端口，好处是进程间通信相对简单、减少了端口的资源浪费，但是这个时候就要保证服务进程的稳定性，特别是对 Master 进程稳定性要求会更高，编码也会复杂。

第二种方案存在的问题是占用多个端口，造成资源浪费，由于多个实例是独立运行的，进程间通信不太好做，好处是稳定性高，各实例之间无影响。


在 Node.js 中自带的 Cluster 模块使用的是第一种方案。

## cluster 模式

cluster 模式其实就是一个主进程和多个子进程，从而形成一个集群的概念。我们先来看看 cluster 模式的应用例子。

先实现一个简单的 app.js，代码如下：

```js
const http = require('http');
const cluster = require('cluster');
const instances = 2; // 启动进程数量

if (cluster.isMaster) {
  for (let i = 0; i < instances; i++) { // 使用 cluster.fork 创建子进程
    cluster.fork();
  }
} else {
  // 创建 http 服务，简单返回
  const server = http.createServer((req, res) => {
    res.write(`hello world, start with cluster ${process.pid}`);
    res.end();
  });

  // 启动服务
  server.listen(8000, () => {
    console.log('server start http://127.0.0.1:8000');
  });
  console.log(`Worker ${process.pid} started`);
}
```

首先判断是否为主进程：

- 如果是则使用 cluster.fork 创建子进程；

- 如果不是则为子进程 require 具体的 app.js。

然后运行下面命令启动服务。

`node cluster.js`

启动成功后，再打开另外一个命令行窗口，多次运行以下命令：

`curl "http://127.0.0.1:8000/"`

可以看到如下输出：

```js
hello world, start with cluster 8553
hello world, start with cluster 8552
hello world, start with cluster 8553
hello world, start with cluster 8552
```

后面的进程 ID 是比较有规律的随机数，有时候输出 8553，有时候输出 8552，8553 和 8552 就是上面 fork 出来的两个子进程，下面我们来看下为什么是这样的。

## 原理

首先我们需要搞清楚两个问题：

- Node.js 的 cluster 是如何做到多个进程监听一个端口的；

- Node.js 是如何进行负载均衡请求分发的。

### 主进程判断

在 cluster 模式中存在 master 和 worker 的概念，master 是主进程，worker 是子进程。

判断主进程还是子进程的逻辑在源码中，如下：

```js
'use strict';
const childOrPrimary = 'NODE_UNIQUE_ID' in process.env ? 'child' : 'primary';
module.exports = require(`internal/cluster/${childOrPrimary}`);
```

通过进程环境变量设置来判断：

- 如果没有设置则为 master 进程；

- 如果有设置则为子进程。

因此第一次调用 cluster 模块是 master 进程，而后都是子进程。

### 多进程端口问题

运行上面的 app.js，成功开启了 1 个 Master 进程、2 个 Worker 进程。

因为端口只有一个 8000，所以我们要来看下它是由哪些进程监听的。

```js
lsof -i:8000
node 8551 qianduanyiguozhu 23u IPv6 0xb5e3cbb6deb4d65d 0t0 TCP *:irdmi (LISTEN)
```

现在我们知道了，8000 端口它并不是被所有的进程监听，仅受到 Master 进程监听。下面让我们再看一个信息。

```js
ps -ef | grep 8551
501  8552  8551   0  5:53下午 ??  0:00.10
501  8553  8551   0  5:53下午 ??  0:00.10
```

这个清楚展示了 Worker 与 Master 的关系，Master 通过 cluster.fork() 这个方法创建的，怎么实现进程间端口共享呢？

在前面的例子中，多个 woker 中创建的 server 监听了同个端口 8000。通常来说，多个进程监听同个端口，系统会报错。为什么我们的例子没问题呢？

秘密在于，net 模块中，对 server.listen() 方法做了特殊处理。根据当前进程是 master 进程，还是 worker 进程：

- master 进程：在该端口上正常监听请求。（没做特殊处理）

- worker 进程：创建 server 实例。然后通过 send 方法，向 master 进程发送消息，让 master 进程也创建 server 实例，并在该端口上监听请求。当请求进来时，master 进程将请求转发给 worker 进程的 server 实例。

总结就是：端口只会被主进程绑定监听一次。master 进程监听特定端口，并通过负载均衡技术将客户请求转发给各 worker 进程。

### 负载均衡原理

Node.js cluster 模块使用的是主子进程方式，那么它是如何进行负载均衡处理的呢，这里主要涉及两个模块。

- round_robin_handle.js（非 Windows 平台应用模式），这是一个轮询处理模式，也就是轮询调度分发给空闲的子进程，处理完成后回到 worker 空闲池子中，这里要注意的就是如果绑定过就会复用该子进程，如果没有则会重新判断，这里可以通过上面的 app.js 代码来测试，用浏览器去访问，你会发现每次调用的子进程 ID 都会不变。

- shared_handle.js（ Windows 平台应用模式），通过将文件描述符、端口等信息传递给子进程，子进程通过信息创建相应的 SocketHandle / ServerHandle，然后进行相应的端口绑定和监听、处理请求。
