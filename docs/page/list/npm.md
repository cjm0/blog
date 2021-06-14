---
lang: zh-CN
sidebar: auto
meta:
  - name: description
    content: npm cnpm npx nvm 傻傻分不清
  - name: keywords
    content: 前端一锅煮,npm cnpm npx nvm
---

# npm cnpm npx nvm 傻傻分不清

用过 npm cnpm吗？知道 npx nvm 吗？

唔~

且看下文分解。

## npm 

npm 的全称是 Node Package Manager 是 JavaScript 世界的包管理工具，并且是 Node.js 平台的默认包管理工具，在安装的 nodejs 的时候，npm 会跟着一起安装。通过 npm 可以安装、共享、分发代码,管理项目依赖关系。

[常用命令](http://www.cnblogs.com/PeunZhang/p/5553574.html)：

```bash
npm -v 显示版本，检查npm 是否正确安装
npm help 可查看某条命令的详细帮助，例如npm help install
npm list -g  查看已经安装的模块
npm show express 查看已经安装的模块的详情 
npm cache clean --force 清除npm本地缓存

npm init 初始化
npm install xxx 下载包
npm uninstall xxx 卸载包
npm update xxx 更新包
npm outdated -g --depth=0 要找出需要更新的软件包
```

**发布一个 npm 包：**

1. 注册 && 查询：[https://www.npmjs.com](https://www.npmjs.com)  

2. 登录：`npm login`    

3. 查询确认成功：`npm whoami`   

4. 上传包：`npm publish`

5. 验证邮箱：`npm adduser`

6. 换源：`npm config set registry http://registry.npmjs.org`

7. 更新：修改 version 后 `npm publish`

## cnpm 

cnpm 淘宝镜像，可以看成是 npm 的国内版本，下载 npm 包的速度更快。
     
安装 `npm install cnpm -g --registry=https://registry.npm.taobao.org`。

## npx 

`npm` v5.2.0 引入的一条命令。

`npx` 会帮你执行依赖包里的二进制文件，引入这个命令的目的是为了提升开发者使用包内提供的命令行工具的体验。

把原来需要全局安装的包放到项目目录下安装。

```bash
old:

npm install -g create-react-app

create-react-app my-app

new:

npx create-react-app my-app
```

临时安装 `create-react-app` 包，命令完成后 `create-react-app` 会删掉，不会出现在 `global` 中，下次再执行，还是会重新临时安装。

## nvm

node 管理工具 

在开发中，有时候对 node 的版本有要求，有时候需要切换到指定的 node 版本来重现问题等。遇到这种需求的时候，我们需要能够灵活的切换 node 版本，nvm 就是为解决这个问题而产生的，他可以方便的在同一台设备上进行多个 node 版本之间切换。

nvm 不支持 Windows，但是有替代品，也就是 nvm-windows。

[安装 nvm](https://github.com/creationix/nvm/blob/master/README.md)：

```bash 
wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.34.0/install.sh | bash 
```

安装完成后关闭终端，重新打开终端输入 nvm 验证一下是否安装成功，当出现“Node Version Manager”时，说明已安装成功。

如果在新的终端输入 nvm 时提示：command not found: nvm，有可能是以下原因之一：

你的系统可能缺少一个 .bash_profile 文件，你可以创建一个此文件（可通过vi或vim命令），打开复制粘贴以下代码（安装nvm成功后终端的最好3行代码）进去，保存，然后再次运行安装命令；

```bash
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion
```

注意：如果你安装了 oh my zsh ，需要在 .zshrc 文件去添加以上配置信息，（一般安装成功都会自动写入这个文件最底部）。

如果上面没有解决问题，打开你的 .bash_profile 文件，并添加以下代码：
`source ~/.bashrc`，更改完记得保存更改。

常用命令：

```bash
nvm ls-remote               列出全部可以安装的版本号
nvm install stable          安装当前最新的稳定版
nvm install v10.14.0        安装指定版本
nvm ls                      显示所有安装的版本
nvm current                 查看当前版本
nvm use v10.14.0            切换node版本
nvm alias default v10.14.0  设置默认版本
```
         