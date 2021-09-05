---
lang: zh-CN
sidebar: auto
meta:
  - name: description
    content: 从零配置前端开发环境-Mac
  - name: keywords
    content: 前端一锅煮,js,从零配置前端开发环境-Mac
---

# 从零配置前端开发环境-Mac

自用 mac 电脑以来陆陆续续配置了有 6 台新电脑环境，通过迁移助手、账号同步等可以较为方便的迁移。下面记录下从零开始配置的方法。

## 电脑初始化

新电脑到手后开始一系列初始化配置，设置开机密码，登录电脑。

Mac M1芯片电脑开机密码重置方法：

- 关机状态下，先短按下开机键放开，然后-迅速-【划重点】-长-按，如果关机了就说明你不够迅速间隔时间太长了，出现选项就成功了。

- 选择 options 以后找到左上的实用工具选项，选择【终端】输入 resetpassword 按回车，解锁一个重设密码的框框，按下【取消激活Mac】。

- 然后你就可以输入新密码了，也许就是以前的密码，因为这可能是 M1 的 bug 不是你得了阿兹海默，我为质疑自己的十分钟（不断输入可能设定的密码）感到抱歉。然后按【下一步】。

## 软件安装途径

1. 应用商店下载部分常用免费软件，如果连不上就算了

2. [Mac 开发配置入门文档](https://aaaaaashu.gitbooks.io/mac-dev-setup/content/index.html)（先粗略瞄一眼）

3. **最好的最详细的安全免费破解 mac 软件下载平台** [MacWk](https://www.macwk.com/soft/development/p1?cid=39,16,40)

4. [腾讯柠檬](https://lemon.qq.com/lab)（供参考）

5. [玩法儿](https://www.waerfa.com/category/download)（供参考）

## 软件安装

### 安装以下 28 款软件

应用商店或者百度搜索官网下载 12 款：

- 谷歌浏览器、火狐浏览器、向日葵远程控制

- 微信、QQ、企业微信、微信开发者工具、HBuilderX、腾讯会议

- ApiPost、Robo 3T、vscode

MacWk 平台下载 16 款：

- XMind、Sketch、Axure、Ps、Microsoft Word 套件

- PPDuck-图片保真压缩、ColorSnapper2-吸颜色、iShot-截图

- Sourcetree、SnailSVN、SwitchHosts-修改 host、CheatSheet-查看快捷命令

- iTerm2、RDM、Navicat Premium-各类数据库查看、Charles

不要用百度网盘，选择天翼云盘下载速度会很快

### 谷歌浏览器配置

书签：从原电脑下载书签然后传给新电脑，或者账号登录同步

扩展程序：草料二维码、Proxy SwitchyOmega、Vue.js devtools、React Developer Tools、谷歌访问助手（应用商店连不上就百度搜对应扩展程序）

### vscode 配置

- 插件安装 27 个

Debugger for Chrome、Apollo GraphQL、Auto Rename Tag 3

Chinese (Simplified) Language Pack for Visual Studio Code 1

Code Runner、EditorConfig for Visual Studio Code 2

ESLint、filesize、HTML Snippets、Image Preview、Import Cost 5

JavaScript (ES6) snippets、JSON Tools、JSON Viewer、koroFileHeader 4

Minify、Monokai Theme、npm (npm support for VS Code) 3

Open in Browser、Path Intellisense、Prettier - Code formatter 3

Prettify JSON、Todo Tree、Vetur、View Node Package、vscode-icons 5

Sass/Less/Stylus/Pug/Jade/Typescript/Javascript Compile Hero Pro 1

- 设置调整

打开新文件而不是覆盖 Workbench enablePreview - true

选中文件不自动展开 Auto Reveal - false

comd + n 新建文件时文件格式 defaultLanguage - html

文件保存时去除末尾的空格 Trim Trailing Whitespace - true

修复 vscode 造成 git.exe 内存占用过大的问题
  git.enabled: false
  git.autorefresh: false

折叠空白文件夹 Compact Folders - false

Trigger Expansion On Tab - true

includeLanguages - "javascript": "javascriptreact"

其他设置

```js
  Auto Save - onFocusChange
  Tab Size - 2
  Cursor Blinking - smooth
  Cursor Style - line-thin
  Word Wrap - on
  Auto Indent - advanced 粘贴保留格式
  Folding Strategy - indentation 按空格缩进收起
  Highlight Active Indent Guide - false
  Match Brackets - never 突出显示匹配的括号
  Max Tokenization Line Length - 100000
  Render Control Characters - true
  Render Whitespace - none

  Tree: Indent - 10
  Tree: Render Indent Guides - none
  Initial Indent - true
  Use Tabs - true

  Minimap: Enabled - false
  Update Imports On File Move: Enabled - never
  Surveys: Enabled - false
  Breadcrumbs: Enabled - true
  Enable Crash Reporter - false
  Enable Telemetry - false
  Eslint: Enable - false

  Max Column - 40
  Activity Bar: Visible - true
  Side Bar: Location - left
  Confirm Delete - false
  Confirm Drag And Drop - false
  Integrated: Split Cwd - initial
  Page Size - 0
  Show Scan Mode Button - false
  Package Manager - yarn
  Autorefresh - false
  Validate: Scripts - false
  Prettier: Semi - false
  Prettier: Single Quote - true
  Quote Style - single
  Default Formatter: HTML - prettyhtml
  Default Formatter: JS - prettier-eslint
  Save File Before Run - true
  Ignore Project Warning - true
  Dont Show New Version Message - true
  JS Official - true
```

### 终端安装

1. Homebrew 安装

```bash
允许所有访问：sudo spctl --master-disable

终端执行 /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"
网络连接失败就换国内地址 /bin/zsh -c "$(curl -fsSL https://gitee.com/cunkai/HomebrewCN/raw/master/Homebrew.sh)"
查看版本 brew -v

切换源 brew 下载源提高下载速度
  brew.git:
    cd "$(brew --repo)"
    git remote set-url origin https://mirrors.ustc.edu.cn/brew.git
  homebrew-core.git:
    cd "$(brew --repo)/Library/Taps/homebrew/homebrew-core"
    git remote set-url origin https://mirrors.ustc.edu.cn/homebrew-core.git
  替换 Homebrew Bottles 源
    cd ~
    echo 'export HOMEBREW_BOTTLE_DOMAIN=https://mirrors.ustc.edu.cn/homebrew-bottles' >> ~/.bash_profile
    source ~/.bash_profile

brew install git
brew install nginx
```

2. xcode-select 安装

```bash
xcode-select --install 下载安装
xcode-select -p 查看安装目录
xcode-select -v 查看版本

删除 xcode-select
sudo rm -rf $(xcode-select --print-path)
rm -rf /Library/Developer/CommandLineTools
```

3. nvm 安装

```bash
wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash

touch ~/.bash_profile

vim ~/.bash_profile 输入提示的三行
  export NVM_DIR="$HOME/.nvm"
  [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
  [ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion

source ~/.bash_profile

nvm 换源：export NVM_NODEJS_ORG_MIRROR=https://npm.taobao.org/mirrors/node
新电脑默认全局安装了 v16 版本的，要先卸载掉

nvm install v12.22.6         安装指定版本
nvm use v12.22.6             切换 node 版本
nvm alias default v12.22.6   设置默认版本

安装 cnpm
  npm install -g cnpm --registry=https://registry.npm.taobao.org
  cnpm config get registry // 查看 cnpm 源
  cnpm set registry https://registry.npm.taobao.org // 用淘宝源

下载 pm2
  cnpm install -g pm2
```

4. zsh 安装 oh-my-zsh 插件

```bash
zsh 安装完成之后退出当前会话重新打开一个终端窗口
wget https://github.com/robbyrussell/oh-my-zsh/raw/master/tools/install.sh -O - | sh
```

5. 全局变量设置

.bashrc：被非登录用户读取

.bash_profile：只能被登录用户读取，修改后执行 source ~/.bash_profile 才生效

.zshrc：无论登录和非登录用户都可以读取，修改环境变量，保存修改重启终端即可

Mac OS X 的终端 Terminal.app 实际上运行了『登录Shell』而不是『非登录shell』，默认调用 .bash_profile 而不是 .bashrc

Mac 安装 omyzsh 后，terminal init 的时候并不会执行 ~/.bash_profile、~/.bashrc 等脚本，默认启动执行脚本变为了 ～/.zshrc

为了统一管理，做一下设置：

**.zshrc 最后一行加此代码 source ~/.bash_profile**

**然后所有变量都加在 .bash_profile 中**

.bash_profile 变量参考：

```bash
# nvm path
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion

# deno path
export DENO_PATH="/Users/qianduanyiguozhu/.deno"
export PATH="$DENO_PATH/bin:$PATH"

# mongodb path
export PATH="/usr/local/mongodb/bin:$PATH"

# redis path
export PATH="/usr/local/opt/redis/bin:$PATH"

# homebrew
export HOMEBREW_BOTTLE_DOMAIN=https://mirrors.ustc.edu.cn/homebrew-bottles

# Created by mirror-config-china
export IOJS_ORG_MIRROR=https://npm.taobao.org/mirrors/iojs
export NODIST_IOJS_MIRROR=https://npm.taobao.org/mirrors/iojs
export NVM_IOJS_ORG_MIRROR=https://npm.taobao.org/mirrors/iojs
export NVMW_IOJS_ORG_MIRROR=https://npm.taobao.org/mirrors/iojs

export NODEJS_ORG_MIRROR=https://npm.taobao.org/mirrors/node
export NODIST_NODE_MIRROR=https://npm.taobao.org/mirrors/node
export NVM_NODEJS_ORG_MIRROR=https://npm.taobao.org/mirrors/node
export NVMW_NODEJS_ORG_MIRROR=https://npm.taobao.org/mirrors/node

export NVMW_NPM_MIRROR=https://npm.taobao.org/mirrors/npm
```