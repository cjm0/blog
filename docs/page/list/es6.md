---
sidebar: auto
description: ES2015~ES2021 新特性
head:
  - - meta
    - name: keywords
      content: 前端一锅煮,ES2015~ES2021 新特性
---

# ES2015~ES2021 新特性

## 前言

ECMAScript 6.0（以下简称 ES6）是 JavaScript 语言的下一代标准，在 2015 年 6 月正式发布。

ES6 泛指 5.1 版以后的 JavaScript 的下一代标准，涵盖了 ES2015、ES2016、ES2017 等。

JS 标准在每年的 6 月份正式发布一次，作为当年的正式版本。

## ES2015

node 支持：node v6.17.1 以上支持 99%

1. ES6 的第一个版本。

## ES2016

node 支持：node v7.5.0 以上支持 100%

1. 新增规定只要函数参数使用了默认值、解构赋值、或者扩展运算符，那么函数内部就不能显式设定为严格模式，否则会报错

2. Array.includes()

3. 指数操作符 **

## ES2017

node 支持：node v9.11.2 以上支持 98%

1. `Object.getOwnPropertyDescriptors()` 返回指定对象所有自身属性（非继承属性）的描述对象。

2. `Object.values` 和 `Object.entries` 供 `for...of` 循环使用。

3. `padStart()` 用于头部补全，`padEnd()` 用于尾部补全。

4. 引入了 async 函数。

5. 允许函数的最后一个参数有尾逗号。

6. 引入 SharedArrayBuffer，允许 Worker 线程与主线程共享同一块内存。

## ES2018

node 支持：node v14.21.3 以上支持 90%

1. 正则：引入 s 修饰符，使得.可以匹配任意单个字符，后行断言

2. 引入了“异步遍历器”（Async Iterator），为异步操作提供原生的遍历器接口

3. 模板字符串：遇到不合法的字符串转义，就返回 `undefined`，而不是报错

4. 对象引入扩展运算符

5. `Promise.finally()` 不管 Promise 对象最后状态如何，都会执行的操作

## ES2019

node 支持：node v12.0.0 以上支持 100%

1. Array.flat() Array.flatMap()

2. trimStart() trimEnd()

3. Object.fromEntries()

4. matchAll 为所有匹配的匹配对象返回一个迭代器

5. `toString()` 返回函数代码本身，以前会省略注释和空格，现在明确要求返回一模一样的原始代码

6. `Array.prototype.sort()` 的默认排序算法必须稳定

7. 允许 catch 语句省略参数

8. Symbol 提供了一个实例属性 description，直接返回 Symbol 的描述

## ES2020

node 支持：node v14.5.0 以上支持 94%

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

node 支持：node v15.14.0 以上支持 100%

1. `Promise.any()` 只要参数实例有一个变成 fulfilled 状态，包装实例就会变成 fulfilled 状态；如果所有参数实例都变成 rejected 状态，包装实例就会变成 rejected 状态。

2. `replaceAll()` 一次性替换所有匹配 `'aabbcc'.replaceAll('b', '_') // 'aa__cc'`。

3. 数字分隔符
```js
const money = 1_000_000_000; // 1000000000
1_000_000_000 === 1000000000; // true
```

4. 逻辑运算符
```js
a ||= b // a = a || (a = b)
a &&= b // a = a && (a = b)
a ??= b // a = a ?? (a = b)
```

5. WeakRefs

## ES2022

node 支持：node v16.13.2 以上支持 97%

1. 顶层 await

2. class
```js
#name = 'cjm' // 私有属性
#getName() // 私有方法

static name = 'cjm' // 静态属性
static getName() // 静态方法

static #name = 'cjm' // 静态私有属性
只有定义私有静态字段的类才能访问该字段
static #getName() // 静态私有方法
```

3. Object.hasOwn(obj, key) 是否对象自有指定属性，替代 Object.prototype.hasOwnProperty.call(obj, key)

4. arr.at() str.at() 数组、字符串负索引访问器

5. error.cause new Error(`While processing ${filePath}`,{cause: error}) 指定导致错误的原因

6. 正则 d 修饰符
```js
exec() 多返回一个indices属性，用来表示匹配结果在原字符串中的起始 index 值
const m = 'JavaScript'.exec(/a/d)
m.indices[0] // [ 1, 2 ]
```

## ES2023

node 支持：node v20.11.1 以上支持 97%

1. arr.with(2, 'a') 替换指定索引处的元素，返回一个新数组，不改变原数组

2. arr.toSorted 排序，返回一个新数组，不改变原数组

3. arr.toReversed 反向排序，返回一个新数组，不改变原数组

4. arr.toSpliced() 删除，返回一个新数组，不改变原数组

5. arr.findLast()

6. arr.findLastIndex() 从数组结尾开始

7. WeakMap 支持 Symbol

8. Hashbang 语法支持，#!/usr/bin/env node

## ES2024

node 支持：node v21.7.3 以上支持 85%

1. 数据分组：Map.groupBy、Object.groupBy

2. str.isWellFormed
```js
判断字符串格式是否正确，不包含单独代理字符
'ab\uD800'.isWellFormed() // false
'ab\uD83D\uDE04c'.isWellFormed() // true
```

3. str.toWellFormed
```js
用正常字符替换 U+FFFD 字符
'ab\uD800'.toWellFormed() // 'ab�'
'ab\uD83D\uDE04c'.toWellFormed() // 'ab😀c
```

4. Promise.withResolvers

const { promise, resolve, reject } = Promise.withResolvers();

5. 正则 v 修饰符
```js
RegExp.prototype.uniodeSets = true
v 支持字符串集合操作：交集&&、差异--、联合）
'My name is nanjiu'.match(/[[a-z]&&[^aeiou]]/gv)
"😁,😍,😴,☉‿⊙,:O".match(/[\p{Emoji}--\p{ASCII}]/gv)
```

6. buffer
```js
ArrayBuffer.transfer() 将当前 buffer 复制转移到一个新的 buffer 中
ArrayBuffer.resize() 调整 buffer 大小
Atomics.waitAsync() 异步等待共享 buffer 的特定位置并返回一个 Promise
```

## 参考文档

[github 地址](https://github.com/ruanyf/es6tutorial/search?utf8=%E2%9C%93&q=ES2015)
