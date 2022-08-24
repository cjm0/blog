---
sidebar: auto
description: 二论命名之下划线
head:
  - - meta
    - name: keywords
      content: 前端一锅煮,js,下划线,命名,二论命名之下划线
---

# 二论命名之下划线

以前写过一篇 [前后端命名最佳实践](https://cjm0.github.io/blog/page/list/fe_server_name.html)

前几天遇到一位小伙伴对此有所疑问，在此详述一番

**结论：前端、后端、服务器文件名全部统一成小写加下划线分割**

## 小写命名

### 数据库

MySQL 建库的过程中发现一个问题，无论怎么创建库，创建出来的库名都是小写的

如果 SQL 语句中写的数据库名称为大写，自动转换成小写进行使用

数据库名和表名统一用小写

### 文件名

Linux 系统对文件名大小写敏感，而 Windows 系统和 Mac 系统对文件名大小写不敏感

某些系统（Ubuntu）的用户目录首字母大写（早期 Unix 系统 ls 大写的排前面），便于区分

### CSS

css 对大小写不敏感

元素名选择器大小写不敏感 `P{ font-size: 12px; }` 和 `p{ font-size: 12px; }` 一样

但是 class 和 id 选择器对大小写敏感 `.list{ font-size: 12px; }` 和 `.LIST{ font-size: 12px; }` 不一样

css 里写的样式对大小写不敏感 `COLOR: RED` 和 `color: red` 一样

### HTML

html 标签对大小写不敏感

标签属性统一使用小写形式，固有属性也一律使用小写，自定义属性或标签中含有的大写均会被转换成小写

### JS

js 中变量名，函数，关键字都区分大小写

变量用驼峰，构造类名首字母大写

### 总结

**除了 js 变量用驼峰，其他全部统一成小写**

## 用下划线

中划线看着熟悉、顺眼

下划线点击一次即可选中，复制方便

### 数据库

数据库名：mysql 插入数据时，引带中划线数据库名，会提示错误

数据库表名：用下划线

字段名：不支持中划线，可以通过驼峰，混着用降低查找性能

全部统一成下划线

### 文件名

文件夹名和文件名，数据库表也是文件，用下划线实现全局各端的统一

### HTML

标签名和组件名，用下划线实现全局各端的统一

### CSS

类名支持中划线和下划线，用下划线实现全局各端的统一

### JS

js 变量不支持中划线，用下划线

### 总结

懒得记那么多了，**全部统一成小写加下划线不香吗**

### 举例

vue 页面

![vue 页面](https://pic3.zhimg.com/80/v2-e01c7309feec1e320ee0c3483a29fb84_1440w.jpg?source=3af55fa1)

前端路由

![本地图片 public 文件夹](https://pic3.zhimg.com/80/v2-1b3a7d80a0ae06032225d73616c0b089_1440w.jpg?source=3af55fa1)

后端接口路由

![本地图片 public 文件夹](https://pic2.zhimg.com/80/v2-e48ae2ab4a6dafff97cfd9fddd702f42_1440w.jpg?source=3af55fa1)

后端 controller 控制器

![本地图片 public 文件夹](https://pica.zhimg.com/80/v2-62ac06f1566328f2ab50e32afaf152d0_1440w.jpg?source=3af55fa1)

后端 service 中转服务

![本地图片 public 文件夹](https://pic4.zhimg.com/80/v2-d0930045f62972995c0212bf8d3075c5_1440w.jpg?source=3af55fa1)

后端 model 数据库表（model 的 Admin 之所以大写是因为 Egg.js 框架对此有要求）

![本地图片 public 文件夹](https://pic1.zhimg.com/80/v2-1a0f08905a7514860a9718118d329b96_1440w.jpg?source=3af55fa1)