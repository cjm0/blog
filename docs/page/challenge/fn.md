---
lang: zh-CN
sidebar: auto
meta:
  - name: description
    content: 挑战大厂第3篇-new、call、create等常见函数的内部实现
  - name: keywords
    content: 挑战大厂第3篇-new、call、create等常见函数的内部实现
---

# 挑战大厂第3篇-new、call、create等常见函数的内部实现

> 挑战大厂系列文章，转载请注明来源

解析 new()、Object.create()、instanceof、call()、apply()、bind()等6个方法函数的原理和内部实现

## new()

思路：把原型指向原型对象去获取方法，用 call/apply 去改 this 指向获取属性

```js
function new(fn, ...args) {
  /*
    原型：__proto__
    原型对象：prototype
    可用此方法替代：let obj = Object.create(fn.prototype)
  */
  // 1. 创建一个空对象，将这个对象的原型指向构造函数的原型对象
  let obj = {
    __proto__: fn.prototype
  }

  // 2. 执行构造函数，把里面的 this 指到这个对象
  let res = fn.apply(obj, args)

  // 3. 返回值为 object 类型则作为 new 方法的返回值返回，否则返回这个空对象
  return res instanceof Object ? res : obj
}
```

## Object.create()

思路：创建一个空函数 F 作为中介去承接原型对象的方法，obj.__proto__ = F.prototype = fn.prototype

```js
/*
  constructor 挂在原型对象 prototype 的属性上
  F.prototype = {
    constructor: F
  }

  把 fn.prototype 当做参数传进来
  F.prototype = proto
  F.prototype = fn.prototype = {
    constructor: fn
  }
  F.prototype = {
    constructor: fn
  }

  所以修改原型对象后需要重新把 constructor 指回去
*/
function create(proto) {
  let F = function () {}
  F.prototype = proto
  F.prototype.constructor = F
  return new F()
}
```

## instanceof

思路：右边变量的原型对象存在于左边变量的原型链上

原型链：obj.__proto__.__proto__ 这样一直往上找直到 null 为止形成的链条

```js
  function myInstanceof(left, right) {
    /*
      let proto = left.__proto__
      es6 新写法用 Object.getPrototypeOf(left) 替代 left.__proto__
    */
    let proto = Object.getPrototypeOf(left)

    while(true) {
      if (proto === null) {
        return false
      }
      // 此时左边变量的原型等于右边变量的原型对象
      if (proto === right.prototype) {
        return true
      }
      // 不等于就继续往原型链上找，left.__proto__ = left.__proto__.__proto__
      proto = Object.getPrototypeof(proto)
    }
  }
```

## call

思路：将要改变 this 指向的方法挂到目标 this 上执行并返回

```js
  Function.prototype.call = function (context = window, ...args) {
    let fn = Symbol('fn')
    context[fn] = this
    let res = context[fn](...args)
    delete context[fn]
    return res
  }
```

解析：

```js
  // 原理
  let obj = {
    name: 'obj',
    fn: function() {
      console.log(this.name)
    }
  }
  obj.fn() // 此时里面的 this 指向 obj

  Function.prototype.call = function (obj, ...args) {
    obj = {
      fn: f
    }
    let res = obj.fn(...args)
    delete obj.fn
    return res
  }
  f.call(obj)
```

## apply

apply 和 call 是一样的，只是传的参数不一样，apply 传数组

```js
  Function.prototype.apply = function (context = window, arr) {
    let fn = Symbol('fn')
    context[fn] = this;

    let res;
    if (!arr) {
      res = context[fn]();
    } else {
      res = context[fn](...arr);
    }

    delete context[fn]
    return res;
  }
```

## bind

思路：bind 利用 apply 来改变指针，Object.create 来克隆原方法的原型对象，最后返回一个新的函数

```js
  /*
    1、可以指定this
    2、返回一个函数
    3、可以传入参数
    4、柯里化
    5、一个绑定函数也能使用new操作符创建对象：这种行为就像把原函数当成构造器，提供的 this 值被忽略，同时调用时的参数被提供给模拟函数
  */
  if (!Function.prototype.bind) {
    Function.prototype.bind = function(context, ...args) {
      let fn = this
      let bound = function () {
        // 指定this
        return fn.apply(
          this instanceof bound ? this : context, // new 忽略
          args.concat(...arguments)
        )
      }
      bound.prototype = Object.create(this.prototype)
      return bound
    }
  }
```