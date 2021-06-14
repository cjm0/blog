---
lang: zh-CN
sidebar: auto
meta:
  - name: description
    content: Koa 洋葱模型
  - name: keywords
    content: 前端一锅煮,Koa 洋葱模型
---

# Koa 洋葱模型

前言：Koa 是一个新的 web 框架，由 Express 幕后的原班人马打造， 致力于成为 web 应用和 API 开发领域中的一个更小、更富有表现力、更健壮的基石。 通过利用 async 函数，Koa 帮你丢弃回调函数，并有力地增强错误处理。 Koa 并没有捆绑任何中间件， 而是提供了一套优雅的方法，帮助您快速而愉快地编写服务端应用程序。

## 什么是洋葱模型？

我们先来看一个 demo：

```js
const Koa = require('koa')
const app = new Koa() // 应用程序

// 中间件1
app.use((ctx, next) => {
  console.log(1)
  next()
  console.log(2)
})
// 中间件2
app.use((ctx, next) => {
  console.log(3)
  next()
  console.log(4)
})

app.listen(9000, '0.0.0.0', () => {
  console.log(`Server is starting`)
})
```

浏览器输入 localhost:9000，控制台会有如下打印：

```
1
3
4
2
```

很明显，在 koa 的中间件中，通过 next 函数，将中间件分成了两部分，next 上面的一部分会首先执行，而下面的一部分则会在所有后续的中间件调用之后执行。

Koa 中间件执行顺序：

- 外层中间件进行前期处理（next 前的逻辑）；

- 调用 next，将控制流交给下个中间件，并 await 其完成，直到后面没有中间件或者没有 next 函数执行为止；

- 完成后，一层层回溯执行各个中间件的后期处理（next 后的逻辑）。

## 自定义实现

从本质上来说，洋葱模型实际上就是一个实现以下效果的函数调用方法。

```js
async function f(){
  console.log(1);
  await f2()
  console.log(2);
}
async function f2() {
  console.log(3);
  await f3()
  console.log(4);
}
async function f3() {
  console.log(5);
  console.log(6);
}
f()
```

输出：

```
1
3
5
6
4
2
```

这里你会发现实际效果是实现类似这样的结构。

```js
function f(){
  console.log(1);
  new Promise((resolve) => {
      console.log(3);
      new Promise((resolve) => {
          console.log(5);
          console.log(6);
      })
      console.log(4);
  })
  console.log(2);
}
f()
```

从第一个父函数开始，往里面塞子函数，子函数塞孙函数。这个时候调用父函数，就会依次往里走，先执行同步代码，遇到异步代码放到队列中，同步代码执行完毕再依次取出队列中的代码执行，本质上是利用了 js 的事件循环机制。

下面我们来看下简版的实现：

```js
const middleware = []
let f1 = async function (next) {
  console.log(1)
  await next()
  console.log(2)
}
let f2 = async function (next) {
  console.log(3)
  await next()
  console.log(4)
}
let f3 = async function (next) {
  console.log(5)
  console.log(6)
}

function use(fn) {
  middleware.push(fn)
}
use(f1)
use(f2)
use(f3)

// 核心代码
function compose() {
  return dispatch(0)
  function dispatch(i) {
    let fn = middleware[i]
    if(!fn) return
    return fn(dispatch.bind(null, i + 1))
  }
}
compose()
```

从第一个函数开始，依次把下一个函数当做参数塞进去。

## koa-compose 源码

以下是 Koa 洋葱模型的源码：

```js
function compose(middleware) {
  if (!Array.isArray(middleware))
    throw new TypeError('Middleware stack must be an array!')
  for (const fn of middleware) {
    if (typeof fn !== 'function')
      throw new TypeError('Middleware must be composed of functions!')
  }

  //  传入对象 context 返回Promise
  return function(context, next) {
    // last called middleware #
    let index = -1
    return dispatch(0)
    function dispatch(i) {
      if (i <= index)
        return Promise.reject(new Error('next() called multiple times'))
      index = i
      let fn = middleware[i]
      if (i === middleware.length) fn = next
      if (!fn) return Promise.resolve()
      try {
        return Promise.resolve(fn(context, dispatch.bind(null, i + 1)))
      } catch (err) {
        return Promise.reject(err)
      }
    }
  }
}
```

代码最核心的两点：

1. 将 `context` 一路传下去给中间件

2. 将 `middleware` 中的下一个中间件 `fn` 作为未来 `next` 的返回值

## 另一种实现方法

```js
function compose(middlewares) {
  return async (ctx) => {
    function createNext(middleware, oldNext) {
      return async () => {
        await middleware(ctx, oldNext)
      }
    }
    let len = middlewares.length
    let next = async () => {
      return Promise.resolve()
    }
    for (let i = len - 1; i >= 0; i--) {
      let currentMiddleware = middlewares[i]
      next = createNext(currentMiddleware, next)
    }
    await next()
  }
}
```

将中间件从最后一个开始封装，每一次都是将自己的执行函数封装成 next 当做上一个中间件的 next 参数，这样当循环到第一个中间件的时候，只需要执行一次 next()，就能链式的递归调用所有中间件。
