import{_ as i,o as t,c,b as e,a as s,e as r,d as p,r as h}from"./app.544215b1.js";const o={},n=r('<h1 id="serviceworker-\u66F4\u65B0\u65B9\u6848" tabindex="-1"><a class="header-anchor" href="#serviceworker-\u66F4\u65B0\u65B9\u6848" aria-hidden="true">#</a> serviceWorker \u66F4\u65B0\u65B9\u6848</h1><p>\u76EE\u5F55</p><ul><li><p>\u4E3A\u4EC0\u4E48\u52A0 serviceWorker \u7F13\u5B58</p></li><li><p>\u52A0\u7F13\u5B58\u540E\u5F15\u53D1\u7684\u95EE\u9898</p></li><li><p>\u63A2\u7D22\u5F3A\u5236\u66F4\u65B0\u65B9\u6848</p></li><li><p>\u5B9E\u73B0\u7EC6\u8282</p></li></ul><h2 id="\u4E3A\u4EC0\u4E48\u52A0-serviceworker-\u7F13\u5B58" tabindex="-1"><a class="header-anchor" href="#\u4E3A\u4EC0\u4E48\u52A0-serviceworker-\u7F13\u5B58" aria-hidden="true">#</a> \u4E3A\u4EC0\u4E48\u52A0 serviceWorker \u7F13\u5B58</h2>',4),d=p("serviceWorker \u5177\u4F53\u7528\u6CD5\u53EF\u53C2\u8003\u6587\u7AE0 "),l={href:"https://cjm0.github.io/blog/page/list/serviceWorker.html",target:"_blank",rel:"noopener noreferrer"},g=p("serviceWorker \u5B9E\u6218"),m=r('<p>\u4E0B\u9762\u901A\u8FC7\u51E0\u5F20\u56FE\u7684\u5BF9\u6BD4\u6765\u770B\u4E0B\u52A0\u7F13\u5B58\u540E\u7684\u5177\u4F53\u6548\u679C\uFF1A</p><p>\u6DF1\u5733\u8BF7\u6C42\u5E7F\u5DDE\u670D\u52A1\u5668\uFF0C\u8BF7\u6C42<strong>\u8DDD\u79BB\u8FD1\uFF0C\u4E0D\u52A0\u7F13\u5B58 51ms</strong></p><p><img src="https://pic1.zhimg.com/80/v2-d32f24770e6ad31f70c3d17430ac0904_1440w.webp" alt="1.png"></p><p>\u6DF1\u5733\u8BF7\u6C42\u5E7F\u5DDE\u670D\u52A1\u5668\uFF0C\u8BF7\u6C42<strong>\u8DDD\u79BB\u8FD1\uFF0C\u52A0\u7F13\u5B58\u540E 27ms</strong></p><p><img src="https://pic4.zhimg.com/80/v2-c4348712f8cce71bff219189058ef0d3_1440w.webp" alt="2.png"></p><p>\u6DF1\u5733\u8BF7\u6C42\u5357\u4EAC\u670D\u52A1\u5668\uFF0C\u8BF7\u6C42<strong>\u8DDD\u79BB\u8FDC\uFF0C\u4E0D\u52A0\u7F13\u5B58 106ms</strong></p><p><img src="https://pic2.zhimg.com/80/v2-6e61b85f21890360633ae083876e8315_1440w.webp" alt="3.png"></p><p>\u6DF1\u5733\u8BF7\u6C42\u5357\u4EAC\u670D\u52A1\u5668\uFF0C\u8BF7\u6C42<strong>\u8DDD\u79BB\u8FDC\uFF0C\u52A0\u7F13\u5B58\u540E 44ms</strong></p><p><img src="https://pic4.zhimg.com/80/v2-b083c00da593a4669893725b1323f9ff_1440w.webp" alt="4.png"></p><p>\u7528 3G \u7F51\u7EDC\uFF0C<strong>\u4E0D\u52A0\u7F13\u5B58 594ms</strong></p><p><img src="https://pic1.zhimg.com/80/v2-7480cecfb06c9388f067c65ee94e4290_1440w.webp" alt="5.png"></p><p>\u7528 3G \u7F51\u7EDC\uFF0C<strong>\u52A0\u7F13\u5B58\u540E 26ms</strong></p><p><img src="https://pic4.zhimg.com/80/v2-4bba8eaca1c6470b867f45cdbddf948b_1440w.webp" alt="6.png"></p><p>\u5BF9\u6BD4\u540E\u53D1\u73B0\uFF1A</p><ol><li><p>\u4E0D\u52A0\u7F13\u5B58\uFF1Ahtml \u8BF7\u6C42\u65F6\u95F4\uFF0C\u4E0E\u670D\u52A1\u5668\u8DDD\u79BB\u548C\u7F51\u901F\u6709\u5173\uFF0C\u8DDD\u79BB\u8D8A\u8FDC\u3001\u7F51\u7EDC\u8D8A\u5DEE\u8017\u65F6\u8D8A\u591A\uFF0C\u5728 50ms~600ms+</p></li><li><p>\u52A0\u7F13\u5B58\uFF1Ahtml \u8BF7\u6C42\u65F6\u95F4\uFF0C\u4E0E\u670D\u52A1\u5668\u8DDD\u79BB\u548C\u7F51\u901F\u6709\u65E0\u5173\uFF0C\u7A33\u5B9A\u5728 50ms \u4EE5\u5185</p></li></ol><p>\u7ED3\u8BBA\uFF1A</p><p><strong>\u52A0 serviceWorker \u7F13\u5B58\u53EF\u786E\u4FDD\u5404\u5730\u7528\u6237\u5728\u7F51\u7EDC\u4E0D\u597D\u7684\u65F6\u5019\u90FD\u80FD\u5FEB\u901F\u62FF\u5230 html</strong></p><h2 id="\u52A0\u7F13\u5B58\u540E\u5F15\u53D1\u7684\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#\u52A0\u7F13\u5B58\u540E\u5F15\u53D1\u7684\u95EE\u9898" aria-hidden="true">#</a> \u52A0\u7F13\u5B58\u540E\u5F15\u53D1\u7684\u95EE\u9898</h2><h4 id="\u7F13\u5B58\u66F4\u65B0\u7B56\u7565" tabindex="-1"><a class="header-anchor" href="#\u7F13\u5B58\u66F4\u65B0\u7B56\u7565" aria-hidden="true">#</a> \u7F13\u5B58\u66F4\u65B0\u7B56\u7565\uFF1A</h4><p>\u7528\u6237\u8FDB\u5165\u7F51\u9875\uFF0C\u6CA1\u6709\u7F13\u5B58\uFF0C\u901A\u8FC7\u7F51\u7EDC\u8BF7\u6C42 html\uFF0C\u62FF\u5230\u7ED3\u679C\u540E\u52A0\u5165\u7F13\u5B58</p><p>\u7528\u6237\u8FDB\u5165\u7F51\u9875\uFF0C\u6709\u7F13\u5B58\u540E\uFF0C<strong>\u5148\u8BFB\u53D6\u7F13\u5B58\u7684 html \u53BB\u6E32\u67D3\u6267\u884C</strong>\uFF0C\u7136\u540E\u8BF7\u6C42\u65B0\u7684 html \u53BB\u66F4\u65B0\u7F13\u5B58</p><p>\u901A\u8FC7\u4E0B\u9762\u4E24\u5F20\u56FE\u6765\u770B\u4E0B serviceWorker \u5177\u4F53\u7684\u66F4\u65B0\u673A\u5236\uFF1A</p><p><img src="https://pic2.zhimg.com/80/v2-6e8ebd4a538fedc1f94a36217278a041_1440w.webp" alt="7.png"></p><p><img src="https://pic4.zhimg.com/80/v2-52bbead3315e2a9f960510265d60cc37_1440w.webp" alt="8.png"></p><h4 id="\u5B58\u5728\u7684\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#\u5B58\u5728\u7684\u95EE\u9898" aria-hidden="true">#</a> \u5B58\u5728\u7684\u95EE\u9898\uFF1A</h4><p><strong>\u7528\u6237\u9700\u8981\u8FDB 2 \u6B21\u7F51\u9875\u624D\u80FD\u770B\u5230\u6700\u65B0\u7684\u7248\u672C\u529F\u80FD</strong></p><h2 id="\u63A2\u7D22\u5F3A\u5236\u66F4\u65B0\u65B9\u6848" tabindex="-1"><a class="header-anchor" href="#\u63A2\u7D22\u5F3A\u5236\u66F4\u65B0\u65B9\u6848" aria-hidden="true">#</a> \u63A2\u7D22\u5F3A\u5236\u66F4\u65B0\u65B9\u6848</h2><p>\u5982\u4F55\u5B9E\u73B0\u6309\u9700\u66F4\u65B0\u7F51\u9875\uFF1F\u63A2\u7D22\u4E86\u4EE5\u4E0B\u51E0\u4E2A\u65B9\u6848\uFF1A</p><h3 id="\u65B9\u68481-\u6587\u4EF6\u53D8\u66F4" tabindex="-1"><a class="header-anchor" href="#\u65B9\u68481-\u6587\u4EF6\u53D8\u66F4" aria-hidden="true">#</a> \u65B9\u68481-\u6587\u4EF6\u53D8\u66F4</h3><p>\u6700\u5F00\u59CB\u60F3\u5230\u7684\u65B9\u6CD5\uFF1A</p><p>\u53D1\u7248\u7684\u65F6\u5019\u66F4\u65B0 serviceWorker.js \u91CC\u9762\u7684\u7248\u672C\u53F7\u5F15\u8D77\u6587\u4EF6\u7684\u53D8\u66F4\u4ECE\u800C\u4F7F serviceWorker \u91CD\u65B0\u5B89\u88C5\u6FC0\u6D3B</p><p><img src="https://pic4.zhimg.com/80/v2-a110133c94f8bcae2a604d37b9c34a8b_1440w.webp" alt="9.png"></p><p>\u6267\u884C\u987A\u5E8F\uFF1Afetch \u8BF7\u6C42 html =&gt; serviceWorker.register() =&gt; \u53D1\u73B0\u53D8\u66F4\u91CD\u65B0\u5B89\u88C5\u6FC0\u6D3B</p><p><strong>\u7ED3\u8BBA\uFF1A\u65B9\u6848\u884C\u4E0D\u901A\uFF0Chtml \u7684\u8BF7\u6C42\u662F\u6700\u65E9\u7684\uFF0C\u800C serviceWorker \u7684\u6CE8\u518C\u3001\u5B89\u88C5\u3001\u6FC0\u6D3B\u66F4\u6EDE\u540E</strong></p><h3 id="\u65B9\u68482-\u76D1\u542C\u66F4\u65B0\u4E8B\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u65B9\u68482-\u76D1\u542C\u66F4\u65B0\u4E8B\u4EF6" aria-hidden="true">#</a> \u65B9\u68482-\u76D1\u542C\u66F4\u65B0\u4E8B\u4EF6</h3><p>\u76D1\u542C serviceWorker \u7684\u66F4\u65B0\u4E8B\u4EF6\uFF1A</p><ol><li><p>\u5F53 ServiceWorker installing \u5C5E\u6027\u83B7\u53D6\u65B0\u7684\u670D\u52A1\u5DE5\u4F5C\u7EBF\u7A0B\u65F6\uFF0C\u4F1A\u89E6\u53D1 updatefound \u4E8B\u4EF6</p></li><li><p>\u66F4\u65B0 serviceWorker.js \u91CC\u9762\u7684\u7248\u672C\u53F7\uFF0C\u5F15\u53D1\u91CD\u65B0\u5B89\u88C5\u6FC0\u6D3B\uFF0C\u540C\u65F6\u76D1\u542C updatefound \u4E8B\u4EF6</p></li><li><p>\u53D1\u73B0\u6709\u66F4\u65B0\u5C31\u51FA\u63D0\u793A\u5F39\u6846\uFF0C\u7528\u6237\u70B9\u51FB\u540E\uFF0C\u5F3A\u5236\u5237\u65B0\u6D4F\u89C8\u5668\u66F4\u65B0</p></li></ol><p><strong>\u7ED3\u8BBA\uFF1A\u65B9\u6848\u53EF\u884C\uFF0C\u4F46\u662F\u7528\u6237\u4F53\u9A8C\u4E0D\u597D\uFF0C\u7528\u6237\u9700\u8981\u624B\u52A8\u70B9\u51FB\u5F3A\u5236\u5237\u65B0</strong></p><h3 id="\u65B9\u68483-\u81EA\u52A8\u5237\u9875\u9762" tabindex="-1"><a class="header-anchor" href="#\u65B9\u68483-\u81EA\u52A8\u5237\u9875\u9762" aria-hidden="true">#</a> \u65B9\u68483-\u81EA\u52A8\u5237\u9875\u9762</h3><p>\u5077\u5077\u5237\u65B0\u9875\u9762\uFF1A</p><p>\u7528\u6237\u8FDB\u5165\u9875\u9762\u540E\uFF0C\u51FA loading\uFF0C\u81EA\u52A8\u53BB\u5237\u65B0 1 \u6B21\u9875\u9762</p><p>\u53EF\u4EE5\u524D\u7AEF\u81EA\u5DF1\u5F3A\u5237 1 \u6B21</p><p>\u5185\u5D4C\u5728\u5BA2\u6237\u7AEF\u7684\u53EF\u4EE5\u8BA9\u5BA2\u6237\u7AEF\u5BB9\u5668\u5F3A\u5237 1 \u6B21</p><p><strong>\u7ED3\u8BBA\uFF1A\u4F53\u9A8C\u4E0D\u597D</strong></p><h3 id="\u65B9\u68484-\u914D\u7F6E\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u65B9\u68484-\u914D\u7F6E\u6587\u4EF6" aria-hidden="true">#</a> \u65B9\u68484-\u914D\u7F6E\u6587\u4EF6</h3><p>\u5728 fetch \u91CC\u505A\u62E6\u622A\uFF0C\u6BD4\u8F83\u8FDC\u7A0B\u914D\u7F6E\uFF1A</p><p><img src="https://pic1.zhimg.com/80/v2-cdceeea26006c5f61add51edbb4b32e8_1440w.webp" alt="10.png"></p><p>fetch \u62E6\u622A\u65F6\u673A\u6700\u65E9\uFF0C\u62E6\u622A html \u8BF7\u6C42\u7684\u65F6\u5019\uFF0C\u5148\u53BB\u8BF7\u6C421\u4E2A\u8FDC\u7A0B\u914D\u7F6E\u6587\u4EF6</p><p>\u7136\u540E\u6BD4\u8F83\u914D\u7F6E\u6587\u4EF6\u91CC\u7684\u7248\u672C\u53F7\u548C\u7F13\u5B58\u7684\u7248\u672C\u53F7\uFF0C\u4E00\u81F4\u8D70\u7F13\u5B58\uFF0C\u4E0D\u4E00\u81F4\u8D70\u7F51\u7EDC\u8BF7\u6C42</p><p>\u8BF7\u6C42\u8FDC\u7A0B\u914D\u7F6E\u6587\u4EF6\u4F1A\u6709\u4E00\u5B9A\u8017\u65F6\uFF0C\u8017\u65F6\u8FC7\u4E45\u4F1A\u62B5\u6D88\u7F13\u5B58\u4EA7\u751F\u7684\u6548\u76CA</p><p><strong>\u7ED3\u8BBA\uFF1A\u65B9\u6848\u53EF\u884C\uFF0C\u9700\u8981\u63A7\u5236\u4F4F\u914D\u7F6E\u6587\u4EF6\u8BF7\u6C42\u8017\u65F6</strong></p><h3 id="\u65B9\u68485-url\u6807\u8BC6" tabindex="-1"><a class="header-anchor" href="#\u65B9\u68485-url\u6807\u8BC6" aria-hidden="true">#</a> \u65B9\u68485-URL\u6807\u8BC6</h3><p>\u5728 fetch \u91CC\u505A\u62E6\u622A\uFF0C\u6BD4\u8F83 url\uFF1A</p><p><img src="https://pic4.zhimg.com/80/v2-d4db3dd444115c96716827c7f12ccc67_1440w.webp" alt="11.png"></p><p>fetch \u62E6\u622A\u65F6\u673A\u6700\u65E9</p><p>\u9700\u8981\u5F3A\u5236\u5237\u65B0\u7684\u65F6\u5019\uFF0C\u4FEE\u6539\u8BBF\u95EE\u94FE\u63A5 url \u643A\u5E26\u7684\u6807\u8BC6\u5B57\u6BB5\u503C</p><p>fetch \u62E6\u622A html \u8BF7\u6C42\u7684\u65F6\u5019\uFF0C\u901A\u8FC7\u6BD4\u8F83 url \u6807\u8BC6\u548C\u7F13\u5B58\u6807\u8BC6\uFF0C\u4E00\u81F4\u8D70\u7F13\u5B58\uFF0C\u4E0D\u4E00\u81F4\u8D70\u7F51\u7EDC\u8BF7\u6C42</p><p>\u9700\u8981\u5177\u5907\u53D8\u66F4 url \u7684\u6761\u4EF6\uFF08\u6BD4\u5982\u7531\u5185\u5D4C\u5BB9\u5668\u63A7\u5236\u5165\u53E3\u548C\u53D8\u66F4\uFF09</p><p><strong>\u7ED3\u8BBA\uFF1A\u65B9\u6848\u53EF\u884C\uFF0C\u9700\u8981 url \u5177\u5907\u53EF\u53D8\u66F4\u6761\u4EF6</strong></p><h2 id="\u5B9E\u73B0\u7EC6\u8282" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u73B0\u7EC6\u8282" aria-hidden="true">#</a> \u5B9E\u73B0\u7EC6\u8282</h2><p>\u56E0\u4E3A\u9879\u76EE\u5185\u5D4C\u5728\u5BA2\u6237\u7AEF\u5BB9\u5668\u91CC\uFF0C\u652F\u6301\u52A8\u6001\u62FC\u63A5\u4FEE\u6539 url\uFF0C\u6240\u4EE5\u7528\u7684\u662F\u65B9\u68485</p><p>\u4E0B\u9762\u770B\u4E0B\u5177\u4F53\u5B9E\u73B0\uFF1A</p><h3 id="\u5B9E\u73B0\u903B\u8F91" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u73B0\u903B\u8F91" aria-hidden="true">#</a> \u5B9E\u73B0\u903B\u8F91</h3><ol><li><p>\u7F51\u7AD9\u6838\u5FC3\u5165\u53E3\u662F html\uFF0C\u8D44\u6E90\u7C7B\u578B\u4E3A document</p></li><li><p>\u5BA2\u6237\u7AEF\u63A7\u5236\u5728\u8DF3\u5BF9\u5E94\u7F51\u7AD9\u7684\u65F6\u5019\uFF0Curl \u4E0A\u62FC\u63A5 readerVersion=new1</p></li><li><p>serviceWorker fetch \u62E6\u622A html\uFF0C\u5224\u65AD\u7F13\u5B58\u7684 readerVersion \u503C\u548C url \u4E0A\u7684\u503C\u662F\u5426\u4E00\u81F4\uFF1A</p></li></ol><ul><li><p>\u4E00\u81F4\uFF0C\u8D70\u672C\u5730\u7F13\u5B58\uFF0C\u540C\u65F6\u66F4\u65B0 serviceWorker \u7684\u7F13\u5B58</p></li><li><p>\u4E0D\u4E00\u81F4\uFF0C\u8D70\u7F51\u7EDC\u8BF7\u6C42\uFF0C\u8BF7\u6C42\u6210\u529F\u540E\u66F4\u65B0 serviceWorker \u7684\u7F13\u5B58</p></li><li><p>\u7F51\u7EDC\u8BF7\u6C42\u5931\u8D25\u8D70 serviceWorker \u7684\u65E7\u7F13\u5B58\u515C\u5E95</p></li></ul><h3 id="\u5177\u4F53\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#\u5177\u4F53\u64CD\u4F5C" aria-hidden="true">#</a> \u5177\u4F53\u64CD\u4F5C</h3><ol><li><p>\u524D\u7AEF\u4EE3\u7801\u53D1\u5E03\u4E0A\u7EBF\uFF0C\u6B64\u65F6 readerVersion =&gt; &#39;&#39;</p></li><li><p>\u914D\u7F6E\u5E73\u53F0\u4FEE\u6539 readerVersion =&gt; new1+</p></li><li><p>\u4E0A\u7EBF\u5B8C\u6BD5\uFF0C\u770B\u6570\u636E\u5927\u90E8\u5206\u7528\u6237\u66F4\u65B0\u540E\uFF0C\u53EF\u6062\u590D\u914D\u7F6E readerVersion =&gt; &#39;&#39;\uFF0C\u4E5F\u53EF\u4E0D\u6062\u590D</p></li></ol><h3 id="\u6CE8\u610F\u4E8B\u9879" tabindex="-1"><a class="header-anchor" href="#\u6CE8\u610F\u4E8B\u9879" aria-hidden="true">#</a> \u6CE8\u610F\u4E8B\u9879</h3><ol><li><p>\u5F3A\u5236\u66F4\u65B0\u5BA2\u6237\u7AEF readerVersion=new1 \u6BCF\u6B21\u9700\u8981\u52A0 1\uFF0Cnew1 =&gt; new2</p></li><li><p>fetch \u62E6\u622A html \u8BF7\u6C42\u9700\u8981\u6392\u9664 favicon.ico\uFF0C\u670D\u52A1\u5668\u4F1A\u81EA\u52A8\u8BF7\u6C42\u6B64\u56FE\u6807\u94FE\u63A5\uFF0C\u540C\u6837\u8FD4\u56DE html</p></li></ol><p><img src="https://pic4.zhimg.com/80/v2-acc28e3563e1a1ad90289f7fd10cd9e7_1440w.webp" alt="13.png"></p>',70);function f(b,u){const a=h("ExternalLinkIcon");return t(),c("div",null,[n,e("p",null,[d,e("a",l,[g,s(a)])]),m])}var _=i(o,[["render",f],["__file","updateService.html.vue"]]);export{_ as default};
