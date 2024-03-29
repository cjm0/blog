---
sidebar: auto
description: 前后端上线必检清单
head:
  - - meta
    - name: keywords
      content: 前端一锅煮,前后端上线必检清单
---

# 前后端上线必检清单

## 前端上线必检清单

1. 回退、跳转是否正确 iOS android 浏览器

2. 节流防抖是否处理

3. 微信分享标题敏感字 红包 钱等

4. 是否适配 320~750 320 480 640 iphonex

5. 是否处理类型转换、非空判断

6. 转换页面加载 loading 处理

7. 无数据、异常、空白页展示处理

8. 移动端扩大点击区域

9. 合理的鼠标光标

10. 是否有做分页

11. 文字超出处理

12. 图片相关

- 图片是否有做无损压缩

- 最多使用 2x(两倍CSS像素分辨率)的图片

- 图片宽高都不超过实际显示宽高的3倍

- 移动端单张图片大小不超过 50Kb

- 大的图片统一上 OOS 对象存储，加 CDN 缓存加速

13. 网络相关

- 首屏时间不超过 3~5 秒

- 并发 4 个以内（Android 4，iOS 6）

- 每秒发起的图片请求数不超过 20 个

- 后端请求必须在 1s 内返回

- 域名解析数不能超过5个（主域名、API 域名、静态资源 CDN 域名、埋点分析域名）

- 数据在JSON.stringify后不超过 256KB

- 页面WXML节点少于 1000 个，节点树深度少于 30 层，子节点数不大于 60 个

- 所有图片均开启缓存，大图用对象存储加 CDN 缓存

14. 权衡

- 权衡内置代码带来的 HTTP 请求减少与通过使用外部文件进行缓存带来的好处的折中点

- 权衡减少 DNS 查找次数和保持较高程度并行下载两者之间的关系

- 权衡合并 img、CSS、JS 和合并后的文件体积过大问题

15. 不出现任何JS异常，所有网络请求都正常返回

## 后端上线必检清单

### 代码相关

1. 格式是否规范，代码是否有冗余，注释是否完善

2. 文件、变量命名是否规范统一

3. 是否有处理好计时器

4. 是否加错误处理机制 try catch

5. 大表查询是否有做优化，是否处理好缓存

6. 异常是否处理，返回给前端统一格式数据

7. 前端参数传任意字符，后端接口不允许报错中断

### git 相关

1. 分支创建是否分层，主干 master，开发分支 dev，个人功能分支 name_dev

2. 上线后分支是否清理干净，上线后删除清理 name_dev 远端和本地分支

3. 代码是否处于私密状态，成员是否加权限限制

4. commit 提交信息是否准确、规范

- feat： 新增feature

- fix: 修复bug

- perf: 优化相关，比如提升性能、体验

- refactor: 代码重构，没有加新功能或者修复bug

- docs: 仅仅修改了文档，比如README, CHANGELOG, CONTRIBUTE等等

- style: 仅仅修改了空格、格式缩进、都好等等，不改变代码逻辑

- test: 测试用例，包括单元测试、集成测试等

- chore: 改变构建流程、或者增加依赖库、工具等

- revert: 回滚到上一个版本

### 系统相关

1. 服务器资源分配是否合理（内存、核数、储存大小）

- 生产环境高配：16核 32g 200g

- 生产环境常规：8核 16g 150g

- 数据库机器：8核 16g 500g

- redis 机器：8核 64g 150g

- 测试环境机器：2核 4g 50g

2. 内存、cpu、硬盘存储是否有异常或者处于紧张状态（空闲率不足 30%）

3. node npm mongoodb 等版本是否过低，是否和开发环境保持一致，node v12.17.0 npm 6.14.4

4. nginx 配置是否合理，版本是否过低，nginx 1.16.0+

### 安全相关

1. 对于前端输入是否有做校验和过滤，不能信任任何前端输入，后端必须再次校验和过滤

2. 接口是否有防刷机制，验证码、token 凭证、ip 锁定、黑白名单

3. 对于不需要凭证的公开接口是否有做安全防护，是否验证该接口真的不需要凭证可被放开，是的话有没有加防刷机制

4. 秘钥、验证信息、私密信息是否保存在后端环境，不允许直接存在前端

