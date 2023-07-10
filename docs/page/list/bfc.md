---
sidebar: auto
description: BFC 揭秘与应用
head:
  - - meta
    - name: keywords
      content: 前端一锅煮,BFC 揭秘与应用
---

# BFC 揭秘与应用

- 什么是 BFC

- 怎么触发 BFC

- 利用 BFC 解决一些问题

- 总结

## 什么是 BFC ？

BFC - Block Formatting Context 块级格式化上下文，在官方文档中，是这么介绍BFC的。

A block formatting context contains everything inside of the element creating it that is not also inside a descendant element that creates a new block formatting context.

强行翻译一下，简单来说，这句话的意思就是：一个BFC区域包含创建该上下文元素的所有子元素，但是不包括创建了新的BFC的子元素的内部元素。

### 划重点

每一个BFC区域只包括其子元素，不包括其子元素的子元素。(这点比较容易理解)

每一个BFC区域都是独立互不影响的！(这点不太好理解，但是后续会使用代码验证)

![BFC](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ead1a0939aa148c8a50992b5083d8e5c~tplv-k3u1fbpfcp-watermark.image?)

## 怎么触发 BFC ？

### 触发 BFC 的条件：

浮动 (float: left、right)

定位 (position: absoulte、fixed)

flex grid 布局 (display: flex、grid)

overflow (overflow: hidden、auto、scroll)

inline-block (display: inline-block)

table (display: table、inline-table、table-row、table-column… 等系列)

display: flow-root (无副作用，兼容性还不够)

根元素 (body、html，整个页面就是一个大的  BFC)

### 划重点

满足上面任意 1 个条件，这个元素就成为 1 个 BFC

一个 BFC 区域，只包含其所有子元素，不包含子元素的子元素

每一个 BFC 区域都是独立互不影响的

## 利用 BFC 解决一些问题

### 垂直外边距重合问题

问题：两个兄弟元素之间垂直方向的 margin 是合并的

![垂直外边距重合问题](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/89002258a4614bb78fd64fde1944b202~tplv-k3u1fbpfcp-watermark.image?)

解决：各自加上 BFC 后，因为 BFC 互相独立性质，里面不会影响到外面

![垂直外边距重合解决](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/555018eafe9d4d2c92321e549cd6083e~tplv-k3u1fbpfcp-watermark.image?)

### 垂直外边距包含塌陷问题

问题：父子嵌套元素在垂直方向的 margin 结合在一起的，并取其中最大的值 50px

![垂直外边距包含塌陷问题](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/798f992212ed40658a38b67b36674e00~tplv-k3u1fbpfcp-watermark.image?)

解决：父标签加上 BFC 后，因为 BFC 的独立性，里面不会影响到外面了

![垂直外边距包含塌陷解决](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/695f227d516e4753a2125575e4b3e6be~tplv-k3u1fbpfcp-watermark.image?)

### 浮动元素父标签高度塌陷问题

问题：父元素未设定高度，子元素全部浮动，父元素高度为 0

![浮动元素父标签高度塌陷问题](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/425ef5454b4a46e6a7d5af3688bfb3f9~tplv-k3u1fbpfcp-watermark.image?)

解决：父元素加 BFC，将所有的浮动元素包裹起来

![浮动元素父标签高度塌陷解决](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/fe8e77d35511459596b154efee865a73~tplv-k3u1fbpfcp-watermark.image?)

### 标准流元素被浮动元素覆盖问题

问题：红色盒子浮动，child2 绿色盒子是标准流，红色盒子覆盖了 child2 绿色盒子

![标准流元素被浮动元素覆盖问题](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f616e1dee06d46e4b85c4302522c0f26~tplv-k3u1fbpfcp-watermark.image?)

解决：绿色盒子加 BFC，现在红色、绿色盒子都是 BFC，互相独立

![标准流元素被浮动元素覆盖解决](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/79b47538b1c64fd9a1b5ed42ebfe8bee~tplv-k3u1fbpfcp-watermark.image?)

## BFC 总结

特性：只包括子元素的独立块

触发：浮动 定位 flex，inline-block overflow table

作用：
- margin 兄弟元素重叠
- margin 父子元素包含
- 子元素全浮动导致父标签高度塌陷
- 兄弟元素浮动导致覆盖
