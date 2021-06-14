---
lang: zh-CN
sidebar: auto
meta:
  - name: description
    content: ES2015~ES2021 各阶段新特性
  - name: keywords
    content: 前端一锅煮,ES2015~ES2021 各阶段新特性
---

# ES2015~ES2021 新特性

## 前言

ECMAScript 6.0（以下简称 ES6）是 JavaScript 语言的下一代标准，在 2015 年 6 月正式发布。

ES6 泛指 5.1 版以后的 JavaScript 的下一代标准，涵盖了 ES2015、ES2016、ES2017 等。

JS 标准在每年的 6 月份正式发布一次，作为当年的正式版本。

## ES2015

node 支持：node v6.17.1 以上支持 99%。

1. ES6 的第一个版本。

## ES2016

node 支持：node v7.5.0 以上支持 100%。

1. 新增规定只要函数参数使用了默认值、解构赋值、或者扩展运算符，那么函数内部就不能显式设定为严格模式，否则会报错。

2. 新增了数组实例的 includes 方法和指数运算符。

## ES2017

node 支持：node v9.11.2 以上支持 100%。

1. `Object.getOwnPropertyDescriptors()` 返回指定对象所有自身属性（非继承属性）的描述对象。

2. `Object.values` 和 `Object.entries` 供 `for...of` 循环使用。

3. `padStart()` 用于头部补全，`padEnd()` 用于尾部补全。

4. 引入了 async 函数。

5. 允许函数的最后一个参数有尾逗号。

6. 引入 SharedArrayBuffer，允许 Worker 线程与主线程共享同一块内存。

## ES2018

node 支持：node v12.4.0 以上支持 100%。

1. 正则：引入 s 修饰符，使得.可以匹配任意单个字符，后行断言。

2. 引入了“异步遍历器”（Async Iterator），为异步操作提供原生的遍历器接口。

3. 模板字符串：遇到不合法的字符串转义，就返回 `undefined`，而不是报错。

4. 对象引入扩展运算符。

5. `Promise.finally()` 不管 Promise 对象最后状态如何，都会执行的操作。

## ES2019

node 支持：node v12.4.0 以上支持 100%。

1. 新增 `trimStart()` 和 `trimEnd()`。

2. `toString()` 返回函数代码本身，以前会省略注释和空格，现在明确要求返回一模一样的原始代码。

3. 允许 catch 语句省略参数。

4. `Array.prototype.sort()` 的默认排序算法必须稳定。

5. Symbol 提供了一个实例属性 description，直接返回 Symbol 的描述。

## ES2020

node 支持：node v14.5.0 以上支持 100%。

1. import() 动态异步加载。

2. globalThis 打通所有环境。

3. `String.prototype.matchAll()` 可以一次性取出所有匹配。不过，它返回的是一个遍历器（Iterator），而不是数组。

4. BigInt 大整数计算保持精度，无位数限制 `BigInt('123') 123n typeof 123n === 'bigint'`。

5. `Promise.allSettled()` 只有等到所有这些参数实例都返回结果，不管是 fulfilled 还是 rejected，包装实例才会结束。

6. 链判断运算符 ?.

```js
  直接在链式调用的时候判断，左侧的对象是否为 null 或 undefined，如果是，就不再往下运算，而是返回 undefined

  可用
    obj?.prop // 对象属性
    obj?.[expr] // 同上
    func?.(...args) // 函数或对象方法的调用
  不可用，报错
    // 构造函数
    new a?.()
    new a?.b()

    // 链判断运算符的右侧有模板字符串
    a?.`{b}`
    a?.b`{c}`

    // 链判断运算符的左侧是 super
    super?.()
    super?.foo

    // 链运算符用于赋值运算符左侧
    a?.b = c

    右侧不得为十进制数值
```

7. Null 判断运算符 ??

```js
  只有运算符左侧的值为 null 或 undefined 时，才会返回右侧的值
  let num = person.n ?? 100
  ?? 和 && || 同时用必须用括号表明优先级否则会报错
  && 和 || 的优先级孰高孰低，如果多个逻辑运算符一起使用，必须用括号表明优先级，否则会报错
```

## ES2021

1. `Promise.any()` 只要参数实例有一个变成 fulfilled 状态，包装实例就会变成 fulfilled 状态；如果所有参数实例都变成 rejected 状态，包装实例就会变成 rejected 状态。

2. `replaceAll()` 一次性替换所有匹配 `'aabbcc'.replaceAll('b', '_') // 'aa__cc'`。

## 参考文档

[github 地址](https://github.com/ruanyf/es6tutorial/search?utf8=%E2%9C%93&q=ES2015)
