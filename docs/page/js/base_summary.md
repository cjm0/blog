---
sidebar: auto
description: js 拾遗
head:
  - - meta
    - name: keywords
      content: 前端一锅煮,js 拾遗
---

# js 拾遗

最近复习 [JavaScript 教程](https://wangdoc.com/javascript/)，发现好多没记住的，特以此记~

## Date

Dtae() 和 new Date() 区别，Date() 函数不能带参数，属于静态方法

```js
new Date()*1 === new Date().getTime() === Date.now() // 获取时间戳
new Date(y, m, 0).getDate() // 获取这个月有多少天，传入年份和月份
new Date(y, m, 0).getDay() // 获取这个月最后一天是星期几
new Date(y, m-1, 1).getDay() // 获取这个月第一天是星期几
````

## RegExp

. 点字符匹配除回车(\r)、换行(\n) 、行分隔符(\u2028)和段分隔符(\u2029)以外的所有字符

[^] 表示匹配一切字符，其中包括换行符

`str.replace(/2/gi, '1')` 第二个参数可以使用美元符号$，用来指代所替换的内容
```js
$&：匹配子字符串
$`：匹配结果前面的文本
$'：匹配结果后面的文本
$n：匹配成功的第n组内容，n是从1开始的自然数。
$$：指代美元符号$。
'hello world'.replace(/(\w+)\s(\w+)/, '$2 $1')
// "world hello"
'abc'.replace('b', '[$`-$&-$\']')
// "a[a-b-c]c"
```

## JSON.stringify

`console.log(JSON.stringify(obj, null, 2))` 接受三个参数，打印对象格式化
- 参数一
    如果对象的属性是`undefined`、函数或 `XML` 对象，该属性会被`JSON.stringify`过滤
    如果数组的成员是`undefined`、函数或 `XML` 对象，则这些值被转成`null`
    正则对象会被转成空对象
    忽略对象的不可遍历的属性

- 参数二
    接受一个数组，作为第二个参数，指定需要转成字符串的属性，只对对象的属性有效
    还可以是一个函数，用来更改`JSON.stringify`的返回值

- 参数三
    如果是数字，表示每个属性前面添加的空格（最多不超过10个）
    如果是字符串（不超过10个字符），则该字符串会添加在每行前面
    `JSON.stringify`发现参数对象有toJSON方法，就直接使用这个方法的返回值作为参数，而忽略原对象的其他参数

## Error
```js
new Error() // 抛出一个错误
new SyntaxError() // 语法解析错误
new ReferenceError() // 非法或不能识别的引用值，使用未声明的变量
new TypeError() // 操作类型错误，使用自身没有的方法，let a = 22 a.sort() a 是 Number 类型而非数组
new RangeError() // 数值越界，Maximum call stack，调用一个不终止的递归函数，计算的值超出最大范围
new URIError() // encodeURIComponent() encodeURI() 等URI函数使用错误
```

## Array
```js
'a' in ['a', 1]
for in for of
arr.push(1, 2, 3)
[1, 2, 3, 4, 5].splice(2) 分离成两个数组 [1, 2] [3, 4, 5]
```

`es6` 明确把空位转成 `undefined`
`es5` 有的跳过(`forEach、filter、reduce、some、every`)
`map()` 会跳过空位，但会保留这个值
`join()` 和 `toString()` 会将空位视为 `undefined` ，而 `undefined` 和 `null` 会被处理成空字符串

## Number
```js
function rand(num) {
    let seed = Date() * 1;
    seed = (seed * 9301 + 49297) % 233280; // 为何使用这三个数?
    let rc = seed / (233280.0);
    return Math.ceil(rc * num);
}
rand(10) // 取1~10的随机数

0 / 0 NaN
0 / 1 0
1 / 0 Infinity

es6 分别用前缀 0b 0o 0x 表示 2 8 16 进制

base64
    0~9 a~z A~Z '+' '/'    10 + 26 + 26 + 2 = 64
    不足补\x00(零值字节)，然后在末尾加上1个或2个=号，表示补了多少个零值字节
```

`Number.MAX_SAFE_INTEGER` 9007199254740991 表示能够精确表示的最大整数
`Number.MIN_SAFE_INTEGER` -9007199254740991 表示能够精确表示的最小整数

## Math
ES6 在 Math 对象上新增了 17 个与数学相关的方法。所有这些方法都是静态方法，只能在 Math 对象上调用

```js
Math.trunc() // 去除一个数的小数部分，返回整数部分
Math.trunc(4.1) // 4
Math.trunc(-4.1) // -4
Math.hypot(3, 4) // 5 返回所有参数的平方和的平方根
Math.cbrt(8) // 2 计算一个数的立方根

es6 新增指数运算符 2 ** 2 ** 2 => Math.pow(2, 4)
这个运算符的一个特点是右结合，而不是常见的左结合。多个指数运算符连用时，是从最右边开始计算的。

'hello'[1] // "e" 直接对字符串使用方括号运算符，仅能获取操作
```

## String

substring 类似slice，但是使用规则违反直觉，因此不建议使用substring方法，应该优先使用slice

```js
str.charAt() // 下标
str.charCodeAt() // 十进制 Unicode 码点
String.fromCharCode(97) // 逆操作
str.substr(0, 4) // 从零开始取4个
str[0]
str.concat(str2)
str1.localeCompare(str2) // Unicode 码点比较大小
```

## 事件循环

[参考文章](https://www.cnblogs.com/jiasm/p/9482443.html)

```js
宏任务                   浏览器 Node
I/O                     ✅   ✅
setTimeout              ✅   ✅
setInterval             ✅   ✅
setImmediate            ❌   ✅
requestAnimationFrame   ✅   ❌

微任务                   浏览器 Node
process.nextTick        ❌   ✅
MutationObserver        ✅   ❌
Promise.then            ✅   ✅
```

## 严格模式

```js
1. 变量必须显示声明
2. 禁用 with
3. 禁止删除变量 // delete x => 语法错误
4. 禁用 fn.caller fn.arguments // 报错
5. 对象不能有重名的属性
6. 函数不能有重名的参数
7. 禁止八进制表示法 // 02
```

## Flex

`flex-grow flex-shrink flex-basis` 放大 缩小占据的空间大小

```js
flex: 0 1 auto; // 默认
flex: 0 0 auto; // flex: none;
flex: 1 1 auto; // flex: auto;
flex: 1 1 0%; // flex: 1;
```

## Babel

AST 抽象语法树

```js
babel-core
    通过 babylon 把 es6 解析成 AST
    babel-traverse 对 ATS树进行遍历转译得到新的 AST树
    babel-generator 读取 AST树并将其转换为代码和源码映射

对于新的 API、新的属性，两种处理方式
    babel-polyfill 把 es6环境整体引入到代码中
        regenerator-runtime、core-js

    babel-plugin-transform-runtime 按需引入
        babel-runtime
            regenerator-runtime、core-js
        babel-helpers 只引入单个，通过此插件可以把多次引入变成一个，减少代码体积
```

## Webpack

把项目看成一个整体，通过给定的主文件，webpack 从这个主文件的入口开始找到项目中的所有依赖文件，然后使用
各种 loader 转化、插件处理、文件处理，最后打包输出到一个指定的文件夹中

webpack 打包优化措施
```js
webpack.DllPlugin 拆分固定死的依赖文件，因为不会变化所以可以预先打包好，后面直接引用
HappyPack 多进程，默认开启三个
babel-loader 开启缓存 cacheDirectory: true
exclude include
noParse: /^(vue|vue-router|vuex|vuex-router-sync|axios)$/
css 用 contenthash
    hash 每次构建都会变
    chunkhash .vue 文件变了就会变
    contenthash 只有 css 变了才会变
```

## 快速排序、冒泡排序

```js
function fast(arr) { // 快速排序
    if (arr.length <= 1) { // 终止递归条件
        return arr
    }

    let index = Math.floor(arr.length / 2) // 获取中间值下标
    let val = arr.splice(index, 1)[0] // 删除且获取返回值
    let left = []
    let right = []

    for (let i = 0, len = arr.length; i < len; i++) { // 数组长度已经发生变化
        if (arr[i] < val) {
            left.push(arr[i]) // 小的放左边
        } else {
            right.push(arr[i]) // 大的放右边
        }
    }

    return fast(left).concat([val], fast(right)) // 合并数组
}

function maop(arr) { // 冒泡排序
    for (let i = 0, len = arr.length; i < len - 1; i++) {
        let flag = 0

        for (let j = 0; j < len - i - 1; j++) {
            if (arr[j] > arr[j+1]) {
                let temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
                flag = 1
            }
        }

        if (flag === 0) {
            return arr
        }
    }
}
```

## 斐波那契数列

```js
// 性能最好
function add(n) {
    let res1 = 1;
    let res2 = 1;
    let sum = res2
    for (let i = 2; i < n; i++) {
        sum = res1 + res2
        res1 = res2
        res2 = sum
    }
    return sum
}

// 把算过的存起来
var cache = []
function add(n) {
    if (n <= 2) {
        cache[n] = 1
        return 1
    }
    if (cache[n] !== undefined) {
        return cache[n]
    }
    cache.push(add(n-1) + add(n-2))
    return cache[n]
}

// 最简单，但是性能不行
function add() {
    if (n <= 2) {
        return 1
    }
    return add(n-1) + add(n-2)
}
```
