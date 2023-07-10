---
sidebar: auto
description: serviceWorker 实战
head:
  - - meta
    - name: keywords
      content: 前端一锅煮,serviceWorker 实战
---

# serviceWorker 实战

- 用 serviceWorker 做了什么事情

- serviceWorker 介绍

- 为什么用 serviceWorker

- serviceWorker 怎么用

- 总结

## 用 serviceWorker 做了什么事情

小说阅读器页面以及资源缓存

加缓存之前：浏览器非首次跳阅读器 -> 请求网络资源 -> 渲染展示

加缓存之后：浏览器非首次跳阅读器 -> 直接从缓存取资源 -> 渲染展示

![4.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f2c06c7284ab453498832aeea8bba29a~tplv-k3u1fbpfcp-watermark.image?)

![5.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b48a59f74e5d4a98b47675ee84e83a5c~tplv-k3u1fbpfcp-watermark.image?)

## serviceWorker 介绍

## serviceWorker 是 PWA 重要的一部分

PWA：Progressive Web App, 渐进式增强 WEB 应用，包含以下几种技术：

1. App Manifest 网页加桌

2. Service Worker 缓存

3. Cache API、IndexedDB 离线缓存

4. Notifications API 通知

5. Push API 推送

6. Background Sync 后台同步（关闭网页后仍可发送请求，无网下维持请求待联网后请求）

### serviceWorker 特性

1. 浏览器在后台运行的事件驱动 worker 脚本

2. worker: 无法访问 DOM，不会对主进程造成阻塞，支持 indexedDB、postMessage

3. 有自己的生命周期：下载、安装、激活

4. 可以在浏览器和网络之间建立一个中间层，拦截和处理网络请求

5. 激活后可以拦截网络请求并返回缓存的响应，从而细粒度地控制缓存资源

6. 只能用在在 https 域名下，本地开发可以用 http:localhost 或者 http://127.0.0.1

## 为什么用 serviceWorker

### 后端接口缓存

HTTP 协议可以定义一个响应资源应该何时、如何被缓存以及缓存多长时间

后端接口返回对应相应头给到浏览器，浏览器根据相应规则去缓存对应资源

![6.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a370a7336f8a4ca6a12b29757861708a~tplv-k3u1fbpfcp-watermark.image?)

![7.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/70bc379e3293408fb81ed8d4fbe3d355~tplv-k3u1fbpfcp-watermark.image?)

### 浏览器自带缓存

浏览器会把请求过的资源放在内存、硬盘中缓存起来

重复刷新网站会直接用缓存资源

![8.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/08655f00a62b40c9acf7645037241b0f~tplv-k3u1fbpfcp-watermark.image?)

### 为什么用 serviceWorker

接口缓存由后端根据实际情况去加缓存策略；

- Nginx 静态资源缓存需要写死在 nginx 配置里，不够灵活；

- 浏览器自带缓存未提供控制接口，无法自由控制；

- serviceWorker 提供完整的编程接口和监听事件，可自由发挥实现任意资源的缓存，
灵活可控。

## serviceWorker 怎么用

![9.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/9d2355f733554a22bc4c20809ef43d35~tplv-k3u1fbpfcp-watermark.image?)

### serviceWorker 作用域

1. serviceWorker 默认作用域就是注册时候的 path
- 举例1：serviceWorker 注册的 path 为 http://127.0.0.1:8005/sw.js，则 scope 默认为 /
- 举例2：serviceWorker 注册的 path 为 http://127.0.0.1:8005/sw.js/read/sw.js，则 scope 默认为 /read/

2. 可以通过 register() 中传入 {scope: '/read/'} 指定作用域，指定作用域不允许超过最大作用域范围（注册 path）
- 举例1：注册 path 为 http://127.0.0.1:8005/sw.js，则 scope 可传任意目录
- 举例2：注册 path 为 http://127.0.0.1:8005/read/sw.js，则 scope 可传 /read/ /read/a/，不可传 /read2/

建议：注册 path 为根目录，根据需要指定 scope 参数

举例：相同域名的独立子站：https://xxx/a 和 https://xxx/b 是两个站点

### 指定作用域 scope / ./ /read/ 区别

1. / 根目录

serviceWorker http://127.0.0.1:8005/ 可控制域名下所有页面（控制：可以处理这些页面里面的资源请求和网络请求）

http://127.0.0.1:8005/read/22324417000586202 ✅

http://127.0.0.1:8005/blank/22324417000586202 ✅

http://127.0.0.1:8005/read ✅

http://127.0.0.1:8005 ✅

2. /read/ 指定目录

serviceWorker http://127.0.0.1:8005/read/ 可控制 read 目录下所有页面

http://127.0.0.1:8005/read/22324417000586202 ✅

http://127.0.0.1:8005/blank/22324417000586202 ❎

http://127.0.0.1:8005/read ✅

http://127.0.0.1:8005 ❎

3. ./ 当前访问目录

产生多个 serviceWorker

http://127.0.0.1:8005/read/22324417000586202 serviceWorker http://127.0.0.1:8005/read/

http://127.0.0.1:8005/blank/22324417000586202 serviceWorker http://127.0.0.1:8005/blank/

http://127.0.0.1:8005/read serviceWorker http://127.0.0.1:8005/

http://127.0.0.1:8005 serviceWorker http://127.0.0.1:8005/

![15.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/38073935856249c78f9466c45f6cba8d~tplv-k3u1fbpfcp-watermark.image?)

### 作用域污染

多个 serviceWorker 会产生作用域污染，即一个页面被多个 serviceWorker 控制。

Devtools 中，可以手动清除指定的 serviceWorker，在线上环境已经安装了如何处理？

可以先注销掉错误的 serviceWorker 再注册新的。

![16.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/72e52e4db45f4d108970cc74e34c31b2~tplv-k3u1fbpfcp-watermark.image?)

### 为什么放在 window.onload 内执行？

1. 启动这个额外的线程会增加对 CPU 时间和内存的争用

2. 如果该线程不是空闲的，会争用网络下载资源，不要通过同时下载次要资源来破坏关键资源。参考文章：https://web.dev/service-workers-registration

3. serviceWorker 第1次注册并不会拦截 fetch 请求

为什么第1次注册不拦截 fetch 请求？

因为在 serviceWorker 的注册是一个异步的过程，在激活完成后当前页面的请求都已经发送完成，时机太晚。

实际请求速度：
- 第 1 次进页面注册 serviceWorker - 请求速度无变化
- 第 2 次进页面 serviceWorker 拦截请求并且把请求缓存起来 - 请求速度无变化
- 第 3 次进页面 serviceWorker 拦截请求并直接使用上次的缓存 - 请求速度变快

### 安装激活

![11.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/0e238d0e10b74fddbfe545e8fd334aa7~tplv-k3u1fbpfcp-watermark.image?)

### 拦截请求

![12.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/11642bc23ad54588a4bc4e55ca62e065~tplv-k3u1fbpfcp-watermark.image?)

### 缓存策略

![13.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b81796e4204b423e9fcfb1720c96850a~tplv-k3u1fbpfcp-watermark.image?)

### fetch 请求拦截

![14.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/9544eab6d10347c3b1aea9ff128175b7~tplv-k3u1fbpfcp-watermark.image?)

### serviceWorker

![1.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/42a3be7a9d5e438db0f8a7a7a3061795~tplv-k3u1fbpfcp-watermark.image?)

### cache 缓存

![2.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/478f69d15b304067a417014cee675c11~tplv-k3u1fbpfcp-watermark.image?)

### 缓存的资源

![3.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/fa3fa95ee6374239948f25a242826df8~tplv-k3u1fbpfcp-watermark.image?)

### serviceWorker 怎么更新

1. 下载
- 每次进入页面会重新下载 serviceWorker.js
- 每 24 小时必定会下载一次 serviceWorker.js（自定义计时器调 update() 可定期更新）
- 在 service worker 上的一个事件被触发并且过去 24 小时没有被下载会触发新的下载

2. 安装更新
- 方法1：注册 path 地址的变更，navigator.serviceWorker.register('./sw.js?v=20190401235959')
- 方法2：下载后按照字节比对两次的 servicework.js，发现不一致就重新安装，修改版本标识更新

3. 激活
- 第1次注册 serviceWorker 激活后，页面的请求不会通过 worker，只有在刷新页面后才会通过 serviceWorker
代理请求。
- 安装完毕后如果有旧版 serviceWorker 在运行，会进入 waiting 状态，直到不再有页面使用旧的 serviceWorker 才激活。可以使用 skipWaiting() 跳过等待直接激活。
- 使用 self.clients.claim() 可同步激活全部终端。
- 激活后可根据策略删除旧版缓存。

### waitUntil()

作用：延长生命周期事件的执行时间，等待传递的 Promise 被成功 resolve。

在 install 事件回调被调用时，它把即将被激活的 worker 线程状态延迟为 installing 状态，直到传递的 Promise 被成功地 resolve。作用：等待核心静态资源缓存完毕。

在 activate 事件回调被调用时，它把即将被激活的 worker 线程状态延迟为 activating 状态，直到传递的 Promise 被成功地 resolve。作用：删除过期的缓存条目。

![17.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/962b459c91274229966db57e3dbb51e9~tplv-k3u1fbpfcp-watermark.image?)

### skipWaiting()

作用：同时打开多个网址，即存在多个终端。正常需要等所有的终端都关闭之后（全部关闭再新打开1个网站），才能激活新的 serviceWorker。如果不想等，检测到更新就直接激活新的 serviceWorker，用 skipWaiting。

风险：skipWaiting 意味着新 Service Worker 可能会控制使用较旧 serviceWorker 控制的页面。这意味着页面提取的部分数据将由旧 serviceWorker 处理，而新 serviceWorker 处理后来提取的数据。如果这会导致问题，则不要使用 skipWaiting()。

为什么用：监听 onload，时机很后面了，此次所有请求都由旧 serviceWorker 处理。但是我需要立马进入激活，让下次进来全部走新的（进入激活判断版本不一致删除缓存）。除非有需要否则一般不用更新。

### claim()

问题：使用 skipWaiting 直接激活 serviceWorker，可能会出现其他终端还没有受当前终端激活的serviceWorker 控制的情况，切回其他终端之后，serviceWorker 控制页面的效果可能不符合预期。

解决：调用 self.clients.claim() 立马作用于 scope 内的所有终端。

为啥没用：不是都要加这个，要看是否有激活 serviceWorker 后马上控制所有终端的需要。

用法：
```js
event.waitUntil(
  self.clients.claim().then(() => {})
)
```

## 总结

1. serviceWorker 特性：异步独立线程，生命周期监听，请求拦截，缓存读写 API

2. 网站资源缓存：
- 接口请求后端控制
- 浏览器自带缓存（图片资源）
- html、js、css等资源请求通过 serviceWorker 控制

3. serviceWorker 缓存：
- onload 里面执行注册
- 第3次刷新才会用到缓存加速
- skipWaiting 跳过等待
- serviceWorker 更新
- document、外部依赖 sdk 先用缓存后更新，js、css、font 一直用缓存
- 检测是否支持：https://html5test.com