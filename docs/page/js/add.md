---
sidebar: auto
description: JS 加法知多少？
head:
  - - meta
    - name: keywords
      content: 前端一锅煮,JS 加法知多少？
---

# JS 加法知多少？

今天收到一个问题

`var a = +[]`

别用控制台，能说出来是多少？

一下没反应过来，不知道你说对了没

反正我说错了，哈哈哈~

好了，先公布结果

``` js
console.log(+[]) // 0
console.log(0 + []) // '0'
console.log(0 - []) // 0
console.log([] + []) // ''
console.log({} + []) // '[object Object]'
```

下面好好分析分析到底是啥原理。

## 加法运算

1、加号运算符只能用于原始数据类型，对于对象类型的值，需要进行数据转换

2、在转换后，如果其中一个运算元出现原始数据类型是“字符串”类型值时，则另一运算元强制转换为字符串，然后做字符串的连接运算

3、在其他情况时，所有运算元都会转换为原始数据类型的“数字”类型值，然后作数字的相加

## Number() 转换规则

1. 如果是 `Boolean` 值，`true` 和 `false` 将分别转换为 1 和 0。

2. 如果是数字值，只是简单的传入和返回。

3. 如果是 `null` 值，返回 0。

4. 如果是 `undefined` ,返回 `NaN`。

5. 如果是字符串，遵循下列规则：

        (1) 如果字符串截去开头和结尾的空白字符后，不是纯数字字符串，那么最终返回结果为 `NaN`；

        (2) 如果是字符串中只包含数字（包括前面带正号或负号的情况），则将其转换为十进制数值，即“1”变成1，“123”会变成123，而“011”会变成11（前导的零被忽略了）；

        (3) 如果字符串中包含有效的浮点格式，如“1.1”，则将其转换为对应的浮点数值（同样也会忽略前导零）；

        (4) 如果字符串中包含有效的十六进制格式，例如 `0xf`，则将其他转换为相同大小的十进制整数值；

        (5) 如果字符串是空的（不包含任何字符），则将其转换为 0；

        (6) 如果字符串中包含除上述格式之外的字符，则将其他转换成 `NaN`。

6. 如果是对象，则调用对象的 `valueOf()` 方法，然后依照前面的规则转换返回的值。如果转换的结果是 `NaN`，则调用对象的 `toString()`
 方法，然后再次依照前面的规则转换返回的字符串值。

## 示例
```js
console.log(Number(undefined)) // NaN
console.log(Number(null)) // 0
console.log(Number(NaN)) // NaN
console.log(Number('')) // 0
console.log(Number({})) // NaN
console.log(Number({a:1})) // NaN
console.log(Number([])) // 0
console.log(Number([1])) // 1
console.log(Number([1,2])) // NaN

console.log(String(undefined)) // 'undefined'
console.log(String(null)) // 'null'
console.log(String(NaN)) // 'NaN'
console.log(String({})) // '[object Object]'
console.log(String({a:1})) // '[object Object]'
console.log(String([])) // ''
console.log(String([1])) // '1'
console.log(String([1,2])) // '1,2'
```

## 分析
1. `+[]`，`[]` 是对象，依据第六条规则，转换的结果是 `NaN`，然后调用对象的 `toString()` 方法，得到 `''` 空字符串，`Number('') => 0`，所以 `+[] => 0`，结果为数字 0

2. `0 + []`，得到 `0 + '' => '0'` ，结果为字符串 0

3. `{} + []`，得到 `'[object Object]' + '' => '[object Object]'`，结果为字符串 `[object Object]`

其他以此类推可得。

懂了没~