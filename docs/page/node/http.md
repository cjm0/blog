---
sidebar: auto
description: HTTP、HTTP2、HTTPS全解析
head:
  - - meta
    - name: keywords
      content: 前端一锅煮,HTTP、HTTP2、HTTPS全解析
---

# HTTP、HTTP2、HTTPS全解析

## UDP

UDP（User Data Protocol，用户数据报协议）是一个面向无连接的传输层协议。

1. UDP 是一个非连接的协议，传输数据之前源端和终端不建立连接，当它想传送时就简单地去抓取来自应用程序的数据，并尽可能快地把它扔到网络上。在发送端，UDP 传送数据的速度仅仅是受应用程序生成数据的速度、计算机的能力和传输带宽的限制。在接收端，UDP 把每个消息段放在队列中，应用程序每次从队列中读一个消息段。

2. 由于传输数据不建立连接，因此也就不需要维护连接状态，包括收发状态等，因此一台服务机可同时向多个客户机传输相同的消息。

3. UDP 信息包的标题很短，只有 8 个字节，相对于 TCP 的 20 个字节信息包的额外开销很小。

4. 吞吐量不受拥挤控制算法的调节，只受应用软件生成数据的速率、传输带宽、源端和终端主机性能的限制。

5. UDP 使用尽最大努力交付，即不保证可靠交付，因此主机不需要维持复杂的链接状态表（这里面有许多参数）。

6. UDP 是面向报文的。发送方的 UDP 对应用程序交下来的报文，在添加首部后就向下交付给 IP 层。既不拆分，也不合并，而是保留这些报文的边界，因此，应用程序需要选择合适的报文大小。

## TCP

TCP（Transmission Control Protocol，传输控制协议）是一个面向连接的、可靠的、基于字节流的传输层协议。在收发数据前，必须和对方建立可靠的连接。一个 TCP 连接必须经过三次握手才能建立起来，断开连接要经过四次挥手，其中的过程非常复杂。

### 三次握手

**名词解释：**

- SYN：表示建立一个连接，携带 SYN 的 tcp 报文段为同步报文段。

- FIN：表示告知对方本端要关闭连接了。

- ACK：表示确认好是否有效，携带 ack 标志的报文段也称确认报文段。只有当 ACK=1 时确认号才有效，当 ACK=0 时确认号无效，这时会要求重传数据，保证数据的完整性。

**三次握手过程：**

1. Client：通知 Server 我要连接，不含应用层数据（SYN1 => Server）

2. Server：收到 Client 通知，同意连接，不含应用层数据（SYN1+ACK1 => Client）

3. Client：收到了 Server 的同意（ACK1 => Server）

注意：

Client：没收到重发，只接受最后一次发 SYN 的 SYN+ACK 回应，忽略其他回应。

Server：没收到重发，一直没收到 ACK，释放资源。

**为什么要三次握手：**

为了防止无效的连接请求到达服务器。

因为有可能客户端先发了一个连接请求报文，但是由于网络的问题，迟迟没有到达服务器。这时候，客户端就超时重传了该报文，然后服务器响应了该请求报文。但是过一会，第一个报文居然又到了服务器，那么服务器就会把它作为新的连接请求。如果只有两次握手，那么服务器对于该连接请求也会建立连接，但如果是三次握手，服务器发出确认报文后，客户端不予理睬，这样就不会建立TCP连接了。

### 四次挥手

**四次挥手过程：**

1. Client 我要关闭连接（FIN1 => Server）

2. Server 收到确认，此时 Server 还未关闭（ACK1 => Client）

3. Server 我要关了（FIN1 => Client）

4. Client 收到确认（ACK1 => Server）

**为什么要四次挥手**

因为服务端在接收到 FIN, 往往不会立即返回 FIN, 必须等到服务端所有的报文都发送完毕了，才能发 FIN。因此先发一个 ACK 表示已经收到客户端的 FIN，延迟一段时间才发 FIN。这就造成了四次挥手。

**如果是三次挥手会有什么问题？**

等于说服务端将 ACK 和 FIN 的发送合并为一次挥手，这个时候长时间的延迟可能会导致客户端误以为 FIN 没有到达客户端，从而让客户端不断的重发 FIN。

总结：连接要快，关闭要等。连接不需要等待而要尽量快，所以第二次握手 SYN+ACK 和到一起发送。关闭连接要等，因为数据可能还没有传完，还在路上继续传，所以分开，先告诉客户端已经收到了通知不用再发第二遍了。等数据全传完了再通知客户端我也关闭了。

### 拥塞控制

tcp 用一系列方法来确保数据的可靠性：去错去重、失序重排、超时重发、应答机制、流量控制、拥塞控制。

1. 流量控制：通过接收缓存区的大小，控制发送端的发送。如果对方的接收缓存区满了，就不能再继续发送了。

2. 慢启动：拥塞窗口 cwnd 翻倍加大，由小到大根据反馈逐渐增大拥塞窗口。

3. 拥塞避免：加大到慢启动阈值的时候，每次加 1。

4. 快速重传：如果发生了丢包，即接收端发现数据段不是按序到达的时候，接收端的处理是重复发送之前的 ACK。发送方只要一连收到三个重复确认就应当立即重传对方尚未收到的报文段，而不必继续等待设置的重传计时器到期。

5. 选择性重传：SACK 记录一下哪些包到了，哪些没到，针对性地重传。

6. 快速恢复：拥塞阈值降低为 cwnd 的一半，cwnd 的大小变为拥塞阈值，cwnd 线性增加。

## HTTP

HTTP 协议，是 Hyper Text Transfer Protocol（超文本传输协议）的缩写，是用于从万维网（WWW:World Wide Web ）服务器传输超文本到本地浏览器的传送协议。

HTTP 是一个无状态的协议。无状态是指浏览器和服务器之间不需要建立持久的连接，这意味着当一个客户端向服务器端发出请求，然后服务器返回响应，连接就被关闭了，在服务器端不保留连接的有关信息。

HTTP1.0 最早在网页中使用是在 1996年，使用在一些较为简单的网页上和网络请求上，HTTP1.1 则在 1999年才开始广泛应用于现在的各大浏览器网络请求中，同时 HTTP1.1 也是当前使用最为广泛的 HTTP 协议。主要区别体现在：

1. **持久连接**：HTTP1.1 支持持久连接，默认开启 Connection: keep-alive，即 TCP 连接默认不关闭，可以被多个请求复用（对于同一个域名，大多数浏览器允许同时建立 6 个持久连接），一定程度上弥补了 HTTP1.0 每次请求都要创建连接的缺点。

2. **断点续传**：HTTP1.0 不支持断点续传功能，HTTP1.1 则在请求头引入了 range 头域，允许只请求资源的某个部分，返回码是 206。

3. **缓存处理**：在 HTTP1.0 中主要使用 header 里的 If-Modified-Since、Expires 来做为缓存判断的标准，HTTP1.1 则引入了更多的缓存控制策略如 Entity tag、If-Unmodified-Since、If-Match,、If-None-Match 等更多可供选择的缓存头来控制缓存策略。

4. **错误通知的管理**：HTTP1.1 新增了 24 个错误状态响应码，如 409 表示请求的资源与资源的当前状态发生冲突；410 表示服务器上的某个资源被永久性的删除。

5. **Host头处理**：HTTP1.0 中认为每台服务器都绑定一个唯一的 IP 地址，因此，请求消息中的 URL 并没有传递主机名（hostname）。但随着虚拟主机技术的发展，在一台物理服务器上可以存在多个虚拟主机（Multi-homed Web Servers），并且它们共享一个 IP 地址。HTTP1.1 的请求消息和响应消息都应支持 Host 头域，且请求消息中如果没有 Host 头域会报告一个错误（400 Bad Request）。

缺点：

虽然允许复用 TCP 连接，但是同一个 TCP 连接里面，所有的数据通信是按次序进行的。服务器只有处理完一个请求，才会接着处理下一个请求。如果前面的处理特别慢，后面就会有许多请求排队等着。这将导致“队头堵塞”。

避免方式：一是减少请求数，二是同时多开持久连接。

## HTTP/2

HTTP/2 是 HTTP 协议自 1999 年 HTTP 1.1 发布后的首个更新，主要基于 SPDY 协议，于 2015年5月以 RFC 7540 正式发表。

主要有以下改进：

1. **二进制协议**：HTTP/1.1 版的头信息肯定是文本（ASCII编码），数据体可以是文本，也可以是二进制。HTTP/2 则是一个彻底的二进制协议，头信息和数据体都是二进制，并且统称为”帧”：头信息帧和数据帧。二进制协议解析起来更高效、“线上”更紧凑，更重要的是错误更少。

2. **多路复用**：HTTP/2 复用 TCP 连接，在一个连接里，客户端和浏览器都可以同时发送多个请求或回应，而且不用按照顺序一一对应，这样就避免了”队头堵塞”。

3. **头信息压缩**：HTTP 协议是没有状态，导致每次请求都必须附上所有信息。请求的很多头字段都是重复的，比如 Cookie，一样的内容每次请求都必须附带，这会浪费很多带宽，也影响速度。HTTP/2 对这一点做了优化，引入了头信息压缩机制。一方面，头信息使用 gzip 或 compress 压缩后再发送。另一方面，客户端和服务器同时维护一张头信息表，所有字段都会存入这个表，产生一个索引号，之后就不发送同样字段了，只需发送索引号。这样对于相同的头部，不必再通过请求发送，只需发送一次。

4. **服务器推送**：HTTP/2 允许服务器未经请求，主动向客户端发送资源。

## HTTPS

HTTP 协议通常承载于 TCP 协议之上，在 HTTP 和 TCP 之间添加一个安全协议层（SSL或TSL），就成了我们常说的 HTTPS。

HTTPS 主要用到对称加密、非对称加密、证书，等技术进行客户端与服务器的数据加密传输，最终达到保证整个通信的安全性。

### 证书认证

服务端证书：SSL 客户端通过 TCP 和服务器建立连接之后(443 端口)，并且在一般的 tcp 连接协商(握 手)过程中请求证书。即客户端发出一个消息给服务器，这个消息里面包含了自己可实现的算法列表和其它一些需要的消息，SSL 的服务器端会回应一个数据包，这里面确定了这次通信所需要的算法，然后服务器向客户端返回证书（证书里面包含了域名、申请证书的公司、公共秘钥等信息）。

证书验证：客户端安装了第三方 CA 的根证书，该根证书下的所有证书都将被客户端信任。在收到服务器返回的证书后，使用这个机构的公共秘钥解密签名，得到服务端公钥及其他信息。做数字签名，如果一致，则确认证书合法即服务端被信任。客户端还会确保证书中列出的域名就是它正在连接的域名。

数字签名：第三方认证机构私钥加密给服务器的证书，浏览器获取第三方认证机构公钥解密，客户端利用签名生成规则进行签名生成，看两个签名是否匹配。

数据加密和传输：如果确认证书有效，那么生成对称秘钥并使用服务器的公共秘钥进行加密。然后发送给服务器，服务器使用它的私钥对它进行解密，这样两台计算机可以开始进行对称加密进行通信。

### 对称加密

对称密钥加密，是指加密和解密使用同一个密钥的方式，加密和解密的算法是公开的，密钥是隐秘的，流行的对称加密算法有：DES、AES。

AES：AES-128、AES-256、AES-192。

**缺点：**

1. 密钥分发问题，如何安全的把共享密钥在双方进行分享，这本身也是一个如何安全通信的问题。一种方法是提前双方约定好，不通过具体的通信进行协商，避免被监听和截获。另外一种方式，将是下面我们介绍的通过非对称加密信道进行对称密码的分发和共享，即混合加密系统。

2. 密钥管理的复杂度问题，对称加密的密钥是一对一的使用方式，若一方要跟n方通信，则需要维护 n 对密钥。

**优点：**

1. 加密和解密的速度要比非对称加密快很多。

2. 密钥 k 的长度越长，对应的密码空间就越大，暴力破解难度越大，就更加安全。

### 非对称加密

非对称加密，指使用一对非对称密钥，即公钥和私钥，公钥可以随意发布，但私钥只有自己知道。发送密文的一方使用对方的公钥进行加密处理，对方接收到加密信息后，使用自己的私钥进行解密。

常用的非对称加密算法有 RSA：md5、SHA-1，SHA-224，SHA-256，SHA-512，SHA-384。

**非对称加密过程：**

1. 服务端生成配对的公钥和私钥。

2. 私钥保存在服务端，公钥发送给客户端。

3. 客户端使用公钥加密明文传输给服务端。

4. 服务端使用私钥解密密文得到明文。

用公钥加密的密文，只有拥有私钥的一方才能解密，这样加密的各方统一使用一个公钥即可。

优点：不存在密钥分发的问题，解码方可以自己生成密钥对，一个做私钥存起来，另外一个作为公钥进行发布。解决了密钥管理的复杂度问题，多个加密方都可以使用一个已知的公钥进行加密，但只有拥有私钥的一方才能解密。

缺点: 加解密的速度没有对称加密快。

### 四次握手

HTTPS 要经过四次握手建立连接，双方生成会话密钥。

1. Client：一个随机数 Client.random。支持的协议版本，比如TLS 1.0版。支持的加密方法，比如 RSA 公钥加密。

2. Sever：一个随机数 Server.random。确认使用的加密方法，确认协议。服务器证书：携带服务器证书链，其中有两个证书，第一个是域名的证书，第二个是 CA 证书，用于验证第一个证书的正确性。那如何验证第二个 CA 证书是否被篡改过呢？使用浏览器内置的根证书去验证。

3. Client：一个随机数 pre-master，编码改变通知，表示随后的信息都将用双方商定的加密方法和密钥发送，客户端握手结束通知。

4. Sever：编码改变通知，表示随后的信息都将用双方商定的加密方法和密钥发送，服务器握手结束通知。

四次握手耗时大概是TCP的三倍，保密强度越高的数字证书耗时越长。经历以下过程：

版本+随机数+加密方法；

确认版本+随机数+确认加密方法+服务器证书（服务器证书+中间 CA 证书 根证书）；

公钥加密过的随机数+编码改变通知+结束通知；

编码改变通知+结束通知。

这样客户端和服务器就同时有了三个随机数，接着双方就用事先商定的加密方法，各自生成本次会话所用的同一把"会话密钥"。

### session ID

SSL 中的 session 会跟 HTTP 的 session 类似，都是用来保存客户端和服务端之间交互的一些记录。这里的 SSL 的 session 保存的是 SSL 的握手记录。

SSL 握手过程，因为多了几次 RTT，还有加解密的计算，是 HTTPS 的耗时大户，优化的重点。复用了握手记录，可以很显著地提高 HTTPS 的效率。

session ID：服务端保存握手记录，客户端 session ID 会话编号发给服务端验证，只有一台服务器有。

session ticket：客户端保存握手记录，客户端加密的 session ticket 给服务端解密得到上次会话信息，多服务器都可解密得到。

## 压缩方式

浏览器 Content-Encoding 值：

- gzip：表明实体采用 GUN zip 编码

- compress：表明实体采用 Unix 的文件压缩程序

- deflate：表明实体使用 zlib 的格式压缩

- identity：表明不对实体进行编码，当没有 Content-Encoding 首部的时候，就默认为这种情况

- br：表明实体采用 Brotli 算法编码 一种比 Gzip 压缩率更高的算法，只在 HTTPS 中生效，因为在 HTTP 请求中 request header 里的  Accept-Encoding 是没有 br 这个选项

使用 gzip 压缩文本非常合适，但 png、gif、jpg、jpeg 这类图片文件并不推荐使用 gzip 压缩（svg是个例外），因为经过本地压缩处理后的图片文件 gzip 能压缩的空间很小。事实上，添加标头，压缩字典，并校验响应体可能会让它更大。

## 优化网络请求

以下是浏览器中一个网络请求的完整过程。

### Stalled 检测有没有连接资源

浏览器得到要发出这个请求的指令，到请求可以发出的等待时间。一般是代理协商、以及等待可复用的 TCP 连接释放的时间，不包括 DNS 查询、建立 TCP 连接等时间等。

1. 单一服务发送时候 stalled 过长，往往是丢包所致，这也意味着网络或服务端有问题；

2. 多个服务并发导致 stalled 过长，是浏览器对同一个主机域名的并发连接数有限制，过长的请求是被阻塞了，处在队列中等待 tcp 连接。

### DNS Lookup（域名解析）
　　
在 DNS 查找完成之前，浏览器不能从主机名那里下载到任何东西。

1. 利用 DNS 缓存（设置TTL时间）；

2. 利用 Connection: keep-alive 特性建立持久连接，可以在当前连接上进行多个请求，无需再进行域名解析。

### Initial connection（初始化连接）
  　　
TCP 建立连接的三次握手时间。

### Request sent 请求发完

请求第一个字节发出前到最后一个字节发出后的时间，也就是上传时间。

1. 减少 HTTP 请求，可以使用 CSS Sprites、内联图片、合并脚本和样式表等；

2. 对不常变化的组件添加长久的 Expires 头（相当于设置久远的过期时间），在后续的页面浏览中可以避免不必要的 HTTP 请求。

### Waiting 等待服务器响应
　
请求发出后，到收到响应的第一个字节所花费的时间。通常是耗费时间最长的。从发送请求到收到响应之间的空隙，会受到线路、服务器距离等因素的影响。

1. 通过优化数据库查询条件、数据缓存到 redis 中来加快数据返回速度；

2. 使用 CDN，将用户的访问指向距离最近的工作正常的缓存服务器上，由缓存服务器直接响应用户请求，提高响应速度。

### Content Download 下载完

收到响应的第一个字节，到接受完最后一个字节的时间，就是下载时间。

1. 移除重复脚本，精简和压缩代码，如借助自动化构建工具 webpack、grunt、gulp 等；

2. 压缩响应内容，服务器端启用 gzip 压缩，可以减少下载时间。