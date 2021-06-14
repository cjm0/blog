---
lang: zh-CN
sidebar: auto
meta:
  - name: description
    content: 挑战大厂第1篇-js树结构互转
  - name: keywords
    content: 前端一锅煮,挑战大厂第1篇-js树结构互转
---

# 挑战大厂第1篇-js树结构互转

> 挑战大厂系列文章，转载请注明来源

面试绝杀题之一：数组和树结构数据相互转换。

面试的时候经常会被问道这个题，大多数人平时没特意去学也没有用过就回答不上来了。

然后？自然就没有然后了。

此题一般会放在初试的最后作为压轴题之一。

理解了里面的关键点就会发现其实是很简单的。

## 原始数据

```js
数组
let arr = [
    {id: 2, name: '部门B', pId: 0},
    {id: 1, name: '部门A', pId: 2},
    {id: 3, name: '部门C', pId: 1},
    {id: 4, name: '部门D', pId: 1},
    {id: 5, name: '部门E', pId: 2},
]

树结构
[
  {
    "id": 2,
    "name": "部门B",
    "pId": 0,
    "children": [
      {
        "id": 1,
        "name": "部门A",
        "pId": 2,
        "children": [
          {
            "id": 3,
            "name": "部门C",
            "pId": 1,
            "children": []
          },
          {
            "id": 4,
            "name": "部门D",
            "pId": 1,
            "children": []
          }
        ]
      },
      {
        "id": 5,
        "name": "部门E",
        "pId": 2,
        "children": []
      }
    ]
  }
]
```

## 一维数组转成树结构

核心原理利用数组和对象相互引用的关系

```js
// 非递归实现，时间复杂度O(n)
function toTree(arr, rootId) {
    // 浅复制出一份数据并加上 children 字段
    let obj = {}
    arr.forEach(v => {
        obj[v.id] = v
        obj[v.id].children = []
    })

    let res = []
    arr.forEach(v => {
        if (v.pId == rootId) {
            res.push(v)
        }
        // 拿此刻循环值的 pId 去复制数据里面找到对应父级然后塞到它的 children 中
        obj[v.pId] && obj[v.pId].children.push(v)
    })
    return res;
}

// 递归实现
function toTree(arr, rootId) {
    let res = []
    arr.forEach(v => {
        // 递归思想就是先处理好第一个，然后其他的都按照这个方法处理
        if (v.pId == rootId) {
            v.children = toTree(arr, v.id)
            res.push(v)
        }
    })
    return res
}

console.log(JSON.stringify(toTree(arr, 0), null, 2))
```

## 树结构转成一维数组

```js
// 递归实现，深度优先，后进先出
function toArr(arr) {
    let res = []
    function fn(childs) {
        childs.forEach(v => {
            res.push({
                id: v.id,
                name: v.name,
                pId: v.pId
            })
            // 循环一个个分离出来直到 children 为空为止
            if (v.children.length) {
                fn(v.children)
            }
        })
    }
    fn(arr)
    return res
}

// 非递归实现，广度优先，先进先出
function toArr(arr) {
    let stack = arr
    let res = []
    // stack 随着循环减小，而随着 children 的加入变大
    while(stack.length) {
        let shift = stack.shift()
        res.push({
            id: shift.id,
            name: shift.name,
            pId: shift.pId
        })
        // 分离一个就删掉一个，然后把分理出来数据的 children 依次塞回去继续处理
        let child = shift.children
        if (child.length > 0) {
            child.forEach(v => {
                stack.push(v)
            })
        }
    }
    return res
}

console.log(toArr(arr)
```

你 get 到了吗？
