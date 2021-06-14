---
lang: zh-CN
sidebar: auto
meta:
  - name: description
    content: JS 原型链
  - name: keywords
    content: 前端一锅煮,JS 原型链
---

# JS 原型链

函数有原型对象 `prototype`，new 实例有隐式原型 `__proto__`

## 原理

```js
    let F = function(){}
    let f1 = new F()

    F:
    {
      constructor: Function,
      __proto__: Function.prototype
      prototype: {
        constructor: F
        __proto__: Object.prototype
      }
    }

    f1:
    {
      constructor: F,
      __proto__: F.prototype
    }
```

## 字面量的方式

```js
  let obj = {} // 相当于 let obj = new Object()

  obj.constructor === Object
  obj.__proto__ === Object.prototype
```

## Object.create() 方式

```js
  let obj1 = { a: 1 }
  let obj2 = Object.create(obj1)

  obj2.constructor === Object
  obj2.__proto__ === obj1
```

## 构造函数的方式

```js
var F = function(){}
var f1 = new F()

F.constructor === Function
F.__proto__ === Function.prototype
F.__proto__ === Function.__proto__
F.__proto__.__proto__ === Object.prototype
F.prototype.constructor === F
F.prototype.__proto__ === Object.prototype

f1.constructor === F
f1.__proto__ === F.prototype
```

## class

```js
class A {}
class B extends A {}

A.__proto__ === Function.prototype
A.prototype.constructor === A
A.prototype.__proto__ === Object.prototype

B.__proto__ === A
B.prototype.constructor === B
B.prototype.__proto__ === A.prototype

// B 的实例继承 A 的实例
Object.setPrototypeOf(B.prototype, A.prototype)
// B 继承 A 的静态属性
Object.setPrototypeOf(B, A)

Object.setPrototypeOf = function (obj, proto) {
  obj.__proto__ = proto;
  return obj;
}
```