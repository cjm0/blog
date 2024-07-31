---
sidebar: auto
description: 挑战大厂第2篇-手动实现promise.all
head:
  - - meta
    - name: keywords
      content: 前端一锅煮,挑战大厂第2篇-手动实现promise.all
---

# 挑战大厂第2篇-手动实现 promise.all

> 挑战大厂系列文章，转载请注明来源

“多个异步函数调用怎么实现返回值是按顺序的？”

“promise.all”

“请说下 promise.all 的实现原理？”

不废话，直接上代码

## 原始版

回调函数，利用闭包贮存返回顺序

```js
function all(fns) {
    let result = []
    fns.forEach((fn, index) => {
        fn(res => {
            result[index] = res
            if (result.length === fns.length) {
                console.log(result);
                // [ 'fn1', 'fn2' ] 保持返回数据的顺序和函数调用的顺序一致
            }
        })
    })
}
// 先执行但是后返回
let fn1 = function(fn) {
    setTimeout(() => {
       fn('fn1')
    }, 400)
}
let fn2 = function(fn) {
    setTimeout(() => {
        fn('fn2')
    }, 200)
}

all([fn1, fn2])
```

### Promise.all 版

resolve 返回结果，利用闭包贮存返回顺序

```js
function all(fns) {
    return new Promise((resolve, reject) => {
        let result = []
        fns.forEach((fn, index) => {
            fn().then(res => {
                result[index] = res
                if (result.length === fns.length) {
                    resolve(result)
                }
            })
        })
    })
}
// 函数返回的是一个 promise
let fn1 = function() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('fn1')
        }, 400)
    })
}
let fn2 = function(fn) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('fn2')
        }, 200)
    })
}

all([fn1, fn2]).then(res => {
    console.log(res); // [ 'fn1', 'fn2' ]
})
```

一时没想到的话可能真搞不出来，想到了这个点就简单了~