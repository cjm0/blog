---
sidebar: auto
description: serviceWorker 更新方案
head:
  - - meta
    - name: keywords
      content: 前端一锅煮,serviceWorker 更新方案,阅读器排版引擎,
---

# serviceWorker 更新方案

目录

- 为什么加 serviceWorker 缓存

- 加缓存后引发的问题

- 探索强制更新方案

- 实现细节

## 为什么加 serviceWorker 缓存

serviceWorker 具体用法可参考文章 [serviceWorker 实战](https://cjm0.github.io/blog/page/list/serviceWorker.html)

下面通过几张图的对比来看下加缓存后的具体效果：

深圳请求广州服务器，请求**距离近，不加缓存 51ms**

![1.png](https://pic1.zhimg.com/80/v2-d32f24770e6ad31f70c3d17430ac0904_1440w.webp)

深圳请求广州服务器，请求**距离近，加缓存后 27ms**

![2.png](https://pic4.zhimg.com/80/v2-c4348712f8cce71bff219189058ef0d3_1440w.webp)

深圳请求南京服务器，请求**距离远，不加缓存 106ms**

![3.png](https://pic2.zhimg.com/80/v2-6e61b85f21890360633ae083876e8315_1440w.webp)

深圳请求南京服务器，请求**距离远，加缓存后 44ms**

![4.png](https://pic4.zhimg.com/80/v2-b083c00da593a4669893725b1323f9ff_1440w.webp)

用 3G 网络，**不加缓存 594ms**

![5.png](https://pic1.zhimg.com/80/v2-7480cecfb06c9388f067c65ee94e4290_1440w.webp)

用 3G 网络，**加缓存后 26ms**

![6.png](https://pic4.zhimg.com/80/v2-4bba8eaca1c6470b867f45cdbddf948b_1440w.webp)

对比后发现：

1. 不加缓存：html 请求时间，与服务器距离和网速有关，距离越远、网络越差耗时越多，在 50ms~600ms+

2. 加缓存：html 请求时间，与服务器距离和网速有无关，稳定在 50ms 以内

结论：

**加 serviceWorker 缓存可确保各地用户在网络不好的时候都能快速拿到 html**

## 加缓存后引发的问题

#### 缓存更新策略：

用户进入网页，没有缓存，通过网络请求 html，拿到结果后加入缓存

用户进入网页，有缓存后，**先读取缓存的 html 去渲染执行**，然后请求新的 html 去更新缓存

通过下面两张图来看下 serviceWorker 具体的更新机制：

![7.png](https://pic2.zhimg.com/80/v2-6e8ebd4a538fedc1f94a36217278a041_1440w.webp)

![8.png](https://pic4.zhimg.com/80/v2-52bbead3315e2a9f960510265d60cc37_1440w.webp)

#### 存在的问题：

**用户需要进 2 次网页才能看到最新的版本功能**

## 探索强制更新方案

如何实现按需更新网页？探索了以下几个方案：

### 方案1-文件变更

最开始想到的方法：

发版的时候更新 serviceWorker.js 里面的版本号引起文件的变更从而使 serviceWorker 重新安装激活

![9.png](https://pic4.zhimg.com/80/v2-a110133c94f8bcae2a604d37b9c34a8b_1440w.webp)

执行顺序：fetch 请求 html => serviceWorker.register() => 发现变更重新安装激活

**结论：方案行不通，html 的请求是最早的，而 serviceWorker 的注册、安装、激活更滞后**

### 方案2-监听更新事件

监听 serviceWorker 的更新事件：

1. 当 ServiceWorker installing 属性获取新的服务工作线程时，会触发 updatefound 事件

2. 更新 serviceWorker.js 里面的版本号，引发重新安装激活，同时监听 updatefound 事件

3. 发现有更新就出提示弹框，用户点击后，强制刷新浏览器更新

**结论：方案可行，但是用户体验不好，用户需要手动点击强制刷新**

### 方案3-自动刷页面

偷偷刷新页面：

用户进入页面后，出 loading，自动去刷新 1 次页面

可以前端自己强刷 1 次

内嵌在客户端的可以让客户端容器强刷 1 次

**结论：体验不好**

### 方案4-配置文件

在 fetch 里做拦截，比较远程配置：

![10.png](https://pic1.zhimg.com/80/v2-cdceeea26006c5f61add51edbb4b32e8_1440w.webp)

fetch 拦截时机最早，拦截 html 请求的时候，先去请求1个远程配置文件

然后比较配置文件里的版本号和缓存的版本号，一致走缓存，不一致走网络请求

请求远程配置文件会有一定耗时，耗时过久会抵消缓存产生的效益

**结论：方案可行，需要控制住配置文件请求耗时**

### 方案5-URL标识

在 fetch 里做拦截，比较 url：

![11.png](https://pic4.zhimg.com/80/v2-d4db3dd444115c96716827c7f12ccc67_1440w.webp)

fetch 拦截时机最早

需要强制刷新的时候，修改访问链接 url 携带的标识字段值

fetch 拦截 html 请求的时候，通过比较 url 标识和缓存标识，一致走缓存，不一致走网络请求

需要具备变更 url 的条件（比如由内嵌容器控制入口和变更）

**结论：方案可行，需要 url 具备可变更条件**

## 实现细节

因为项目内嵌在客户端容器里，支持动态拼接修改 url，所以用的是方案5

下面看下具体实现：

### 实现逻辑

1. 网站核心入口是 html，资源类型为 document

2. 客户端控制在跳对应网站的时候，url 上拼接 readerVersion=new1

3. serviceWorker fetch 拦截 html，判断缓存的 readerVersion 值和 url 上的值是否一致：

- 一致，走本地缓存，同时更新 serviceWorker 的缓存

- 不一致，走网络请求，请求成功后更新 serviceWorker 的缓存

- 网络请求失败走 serviceWorker 的旧缓存兜底

### 具体操作

1. 前端代码发布上线，此时 readerVersion => ''

2. 配置平台修改 readerVersion => new1+

3. 上线完毕，看数据大部分用户更新后，可恢复配置 readerVersion => ''，也可不恢复

### 注意事项

1. 强制更新客户端 readerVersion=new1 每次需要加 1，new1 => new2

2. fetch 拦截 html 请求需要排除 favicon.ico，服务器会自动请求此图标链接，同样返回 html

![13.png](https://pic4.zhimg.com/80/v2-acc28e3563e1a1ad90289f7fd10cd9e7_1440w.webp)

