---
sidebar: auto
description: 怎么安装免费 mac 软件？
head:
  - - meta
    - name: keywords
      content: 前端一锅煮,安装软件,免费软件,mac 软件,安装免费软件,怎么安装免费 mac 软件？
---

# 前言

mac 很多软件都是要收费的，不想花钱，如何安装免费版？

最好是**免费破解中文版**~

## 软件下载

1. 应用商店下载部分常用免费软件，如果打不开应用商店（网络受限）就算了。

2. **mac 软件免费下载平台**
- [MacWk](https://macwk.com.cn/soft/all/p1)
- [macw](https://www.macw.com/mac/61.html)
- [元婴 MAC 软件站](https://maczz.net/)
- [appstorrent](https://appstorrent.ru/162-transmit.html)
- [马可波罗](https://www.macbl.com/app/top/all)
- [Mac618](https://www.mac618.com/)
- [MAC 青桔](https://www.macqj.com/)
- [苹果软件盒子](https://www.macappbox.com)

3. 以下仅供参考补充
- [腾讯柠檬](https://lemon.qq.com/lab)
- [玩法儿](https://www.waerfa.com/category/download)
- [XMac](https://xmac.app/)
- [佛系软件](https://foxirj.com/category/macos)
- [Xclient](https://xclient.info/s/c/dev/)
- [digit77](https://www.digit77.com/categories/macapps?page=11)
- [XMAC](https://www.xmac.im/16_837.html)

以上途径按照从上到下优先级尝试，想要的软件基本都能下载到。

## 软件安装

软件下载好了，因为是破解版，安装的时候会出现各种问题，常见解决办法如下：

上面网址下载的软件，很多带有修复命令，**点击即可自行修复**：运行安装包内的“已损坏修复”并输入电脑密码，根据提示完成后续步骤。如此软件也无法运行，请先开启电脑 任意来源 选项（向下找开启教程）！

### 第一种情况-无法打开

- 无法打开”xxx”，因为无法确认开发者的身份
- 无法打开”xxx”，因为 Apple 无法检查其是否包含恶意软件
- 无法打开”xxx”，因为它不是从App Store下载

**解决方法**：在「应用程序」里找到安装好的应用图标，右键再点击打开，弹窗会改变，再点击打开即可。

### 第二种情况-已损坏

- “xxx”已损坏，无法打开。您应该将它移到废纸篓
- “xxx”将对你的电脑造成伤害。您应该将它移到废纸篓

解决方法（分两步）

**1. 先启用「任何来源」选项**

- macOS 12 或更低版本：打开 系统偏好设置 -> 安全性与隐私 -> 通用，选择「任何来源」
- macOS 13 或更高版本：打开 系统设置 -> 隐私与安全性，选择「任何来源」

如果没有「任意来源」这个选项的电脑，需使用终端命令开启：
- 打开终端（command+空格 聚焦搜索：终端）
- 输入命令 `sudo spctl --master-disable` 回车，然后输入锁屏密码再回车（输入过程不可见）

**2. 绕过公证 Gatekeeper（绕过应用签名认证）**

打开系统应用「终端」，先复制命令粘贴到终端：`sudo xattr -rd com.apple.quarantine` 注意在最后 quarantine 后面加一个空格！然后在「应用程序」里找到提示“已损坏”的应用，拖放到终端窗口里，回车。

**以上两步操作后，通常已经可以正常打开**，如果还是提示移至废纸篓，打开「系统设置」-「隐私与安全性」看下「任何来源」下方有没有被阻止的说明，点击「仍要打开」并输入密码确认即可。

### 第三种情况-意外退出

「意外退出」及「崩溃闪退」

解决方法（分两步）

**1. 先安装xcode-select 已安装的请看第二步**

安装 **Command Line Tools** 工具，打开终端，复制以下命令粘贴到终端：
- `xcode-select --install`
- 按照提示下载安装 **xcode-select**

**2. 对应用进行签名**

打开终端，复制以下命令粘贴到终端：
- `sudo codesign --force --deep --sign -` 注意最后的 – 后面加一个空格！
- 然后打开Finder（访达），点击左侧的 应用程序，找到相关应用拖进终端，然后按下回车键，输入电脑的开机密码（输入过程中密码是看不到的）输入完成后再按下回车键即可。

**正常情况下只有一行提示，即成功：**
- /文件位置 : replacing existing signature

**如遇如下错误：**
- /文件位置 : replacing existing signature 
- /文件位置 : resource fork,Finder information,or similar detritus not allowed

先在终端执行：
- `xattr -cr 应用路径`（直接将应用拖进去）

然后再次执行如下指令即可：`codesign --force --deep --sign - 应用路径`（直接将应用拖进去）

完成，再次打开应用尝试。

### 第四种情况-M芯片软件闪退

M 芯片电脑运行部分软件闪退

解决方法（分两步）

**1. 查看应用架构**

右键单击应用程序里的 APP，选择 显示简介，种类中有三种类型：通用、Apple 芯片、Intel 

- 通用：表示 App 既支持 Apple 芯片也支持 Intel 处理器，并且在默认情况下使用 Apple 芯片。一般通用 App 不需要 Rosetta，若闪退可尝试使用 Rosetta 解决。

- Apple 芯片：表示 App 仅支持 Apple 芯片，不能在 Intel 处理器上安装。

- Intel：表示 App 仅支持 Intel 处理器，并且**需要 Rosetta 才能在搭载 Apple 芯片的 Mac** 上运行。

**2. 使用 Rosetta 打开**

在「显示简介」窗口中，手动勾选「使用Rosetta打开」重新打开软件尝试即可。

如果没有这个选项的的话，是电脑未安装 Rosetta2，需要执行以下命令安装一下：

我们打开终端（command+空格 聚焦搜索：终端），复制以下命令粘贴到终端并回车执行：`/usr/sbin/softwareupdate --install-rosetta --agree-to-license`

安装完成后，勾选「使用Rosetta打开」并重新打开应用就可以了

### 第五种情况-要求关闭SIP使用

部分软件要求关闭 SIP 使用，如何关闭 SIP

**解决方法（慎重！）**

**1. 关闭 SIP 的影响**

关闭 SIP 后运行应用将不会再提示：
- 常见报错一：无法打开xxx，因为 Apple 无法检查其是否包含恶意软件/因为它来自身份不明的开发者/因为无法验证开发者
- 常见报错二：xxx已损坏，无法打开，您应该将它移到废纸篓

也就是说，只要应用本身可以运行，那不管应用是否签名/公证，不管应用是不是恶意应用，你打开后它都会直接运行在你的系统中，此时你的电脑如同透明，毫无安全可言，它可以操作你系统的所有文件，如果这个应用是恶意应用，如果你不小心对它授权过，那它后面可以不经你允许在你系统上进行任何操作。

所以如非必要，不建议大家关闭 SIP！如果一定要使用某个需要关闭 SIP 的应用，那一定要自行判断一下应用的来源是否安全。

**2. 如何关闭 SIP**

- **检查 SIP 状态**

在 SIP 系统完整性关闭前，我们先检查是否启用了 SIP 系统完整性保护。

在终端（command+空格 聚焦搜索：终端）上输入以下命令然后回车：`csrutil status`

你会看到以下信息中的一个，指示 SIP 状态

未关闭 enabled  

`System Integrity Protection status: enabled`

已关闭 disabled

`System Integrity Protection status: disabled`

如果是未关闭状态就需要关闭 SIP 了!

- **关闭 SIP**

关机，然后重新启动你的 Mac 电脑，在开机时一直按住 Command+R 迸入 Recovery 模式（M1芯片改为长按电源键，如果系统询问，请选择要恢复的卷并单击下一步。点击「选项」，选择「你的管理员账户」并输入密码）

进入 Recovery 模式后在顶部菜单栏点击 实用工具 -> 终端

在终端上输入以下命令然后回车：`csrutil disable`

点击左上角苹果图标，点击重新启动

成功关闭 SIP

补充：

遇到这种路径直接根据路径找不到对应的文件夹，需要使用显示包内容

`/Applications/KeyShot12.app/Contents/MacOS`

在应用程序找到对应软件，然后「右键」-「显示包内容」

