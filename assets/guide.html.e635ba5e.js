import{_ as i,o,c as t,b as n,a,d as s,e as l,r as c}from"./app.544215b1.js";const d={},r=n("h1",{id:"\u4ECB\u7ECD",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u4ECB\u7ECD","aria-hidden":"true"},"#"),s(" \u4ECB\u7ECD")],-1),p=n("h2",{id:"\u524D\u8A00",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u524D\u8A00","aria-hidden":"true"},"#"),s(" \u524D\u8A00")],-1),u={href:"https://vuepress.vuejs.org/zh/guide/introduction.html",target:"_blank",rel:"noopener noreferrer"},v=s("VuePress2"),m=s(" \u662F\u4E00\u4E2A\u4EE5 Markdown \u4E3A\u4E2D\u5FC3\u7684\u9759\u6001\u7F51\u7AD9\u751F\u6210\u5668\u3002\u4F60\u53EF\u4EE5\u4F7F\u7528 Markdown \u6765\u4E66\u5199\u5185\u5BB9\uFF08\u5982\u6587\u6863\u3001\u535A\u5BA2\u7B49\uFF09\uFF0C\u7136\u540E VuePress \u4F1A\u5E2E\u52A9\u4F60\u751F\u6210\u4E00\u4E2A\u9759\u6001\u7F51\u7AD9\u6765\u5C55\u793A\u5B83\u4EEC\u3002"),b=n("p",null,"\u6BCF\u4E00\u4E2A\u7531 VuePress \u751F\u6210\u7684\u9875\u9762\u90FD\u5E26\u6709\u9884\u6E32\u67D3\u597D\u7684 HTML\uFF0C\u4E5F\u56E0\u6B64\u5177\u6709\u975E\u5E38\u597D\u7684\u52A0\u8F7D\u6027\u80FD\u548C\u641C\u7D22\u5F15\u64CE\u4F18\u5316\uFF08SEO\uFF09\u3002\u540C\u65F6\uFF0C\u4E00\u65E6\u9875\u9762\u88AB\u52A0\u8F7D\uFF0CVue \u5C06\u63A5\u7BA1\u8FD9\u4E9B\u9759\u6001\u5185\u5BB9\uFF0C\u5E76\u5C06\u5176\u8F6C\u6362\u6210\u4E00\u4E2A\u5B8C\u6574\u7684\u5355\u9875\u5E94\u7528\uFF08SPA\uFF09\uFF0C\u5176\u4ED6\u7684\u9875\u9762\u5219\u4F1A\u53EA\u5728\u7528\u6237\u6D4F\u89C8\u5230\u7684\u65F6\u5019\u624D\u6309\u9700\u52A0\u8F7D\u3002",-1),g=n("p",null,"VuePress \u8BDE\u751F\u7684\u521D\u8877\u662F\u4E3A\u4E86\u652F\u6301 Vue.js \u53CA\u5176\u5B50\u9879\u76EE\u7684\u6587\u6863\u9700\u6C42\uFF0C\u4F46\u662F\u73B0\u5728\u5B83\u5DF2\u7ECF\u5728\u5E2E\u52A9\u5927\u91CF\u7528\u6237\u6784\u5EFA\u4ED6\u4EEC\u7684\u6587\u6863\u3001\u535A\u5BA2\u548C\u5176\u4ED6\u9759\u6001\u7F51\u7AD9\u3002",-1),k={href:"https://vuepress.vuejs.org/zh/guide/introduction.html",target:"_blank",rel:"noopener noreferrer"},h=s("Vuepress2 \u5B98\u65B9\u6587\u6863"),_={href:"https://github.com/vuepress/core",target:"_blank",rel:"noopener noreferrer"},f=s("github"),x=l(`<h2 id="\u5FEB\u901F\u5F00\u59CB" tabindex="-1"><a class="header-anchor" href="#\u5FEB\u901F\u5F00\u59CB" aria-hidden="true">#</a> \u5FEB\u901F\u5F00\u59CB</h2><p><code>yarn</code> \u5E38\u7528\u547D\u4EE4</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">yarn</span> init // \u521D\u59CB\u5316\u5F97\u5230\u4E00\u4E2A package.json \u6587\u4EF6
<span class="token function">yarn</span> <span class="token function">add</span> // \u6DFB\u52A0\u65B0\u5305
<span class="token function">yarn</span> remove // \u5220\u9664\u5305
<span class="token function">yarn</span> upgrade // \u66F4\u65B0\u5305
<span class="token function">yarn</span> // \u4E0B\u8F7D\u5305\uFF0C\u7B49\u540C\u4E8E <span class="token function">yarn</span> <span class="token function">install</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6253\u5F00\u7EC8\u7AEF\u8F93\u5165\u4EE5\u4E0B\u547D\u4EE4</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">mkdir</span> vuepress
<span class="token builtin class-name">cd</span> vuepress
<span class="token function">yarn</span> init
<span class="token function">yarn</span> <span class="token function">add</span> -D vuepress@next
<span class="token function">mkdir</span> docs
<span class="token builtin class-name">cd</span> docs
<span class="token function">touch</span> README.md
<span class="token function">yarn</span> dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><p>Node.js v14.18.0+</p></div><p>\u63A5\u7740\uFF0C\u5728 <code>package.json</code> \u91CC\u52A0\u4E00\u4E9B\u811A\u672C:</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token property">&quot;dev&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vuepress dev docs&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;build&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vuepress build docs&quot;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u9879\u76EE\u7ED3\u6784" tabindex="-1"><a class="header-anchor" href="#\u9879\u76EE\u7ED3\u6784" aria-hidden="true">#</a> \u9879\u76EE\u7ED3\u6784</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>.
|- package.json
|- .gitignore
|- docs
    |- README.md
    |- .vuepress
        |- config.ts
        |- client.ts
        |- public (dir)
        |- components (dir)
        |- styles (dir)
    |- page
        |- img (dir)
        |- about
            |- README.md
        |- vuepress
            |- api.md
            |- guide.md
            |- config.md
            |- theme.md
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol><li><p>\u6DFB\u52A0 <code>.gitignore</code> \u6587\u4EF6\uFF0C\u7528\u4E8E\u63D0\u4EA4\u4EE3\u7801\u5230\u4ED3\u5E93\u65F6\u6392\u9664\u6307\u5B9A\u5185\u5BB9</p></li><li><p>\u6240\u6709\u5185\u5BB9\u653E\u5728\u81EA\u5DF1\u521B\u5EFA\u7684 docs \u76EE\u5F55</p></li><li><p>docs \u91CC\u9762\u7684 <code>README.md</code> \u6587\u4EF6\u4E3A\u9879\u76EE\u9996\u9875</p></li><li><p>\u521B\u5EFA\u4E00\u4E2A <code>.vuepress</code> \u6587\u4EF6\uFF0C\u91CC\u9762\u653E\u5404\u79CD\u914D\u7F6E\u6587\u4EF6</p></li><li><p>public \u6587\u4EF6</p></li></ol><p><code>.vuepress/public</code> \u6587\u4EF6\u91CC\u9762\u7684\u5185\u5BB9\u4F1A\u88AB\u590D\u5236\u5230\u751F\u6210\u7684\u9759\u6001\u6587\u4EF6\u5939\u4E2D\uFF0C\u4E00\u822C\u653E favicons \u548C PWA \u7684\u56FE\u6807\u3002\u5F15\u7528 public \u91CC\u9762\u8D44\u6E90\u7684\u65B9\u6CD5\u5982\u4E0B\uFF1A</p><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code><span class="token front-matter-block"><span class="token punctuation">---</span>
<span class="token front-matter yaml language-yaml"><span class="token key atrule">heroImage</span><span class="token punctuation">:</span> /img/logo.jpg</span>
<span class="token punctuation">---</span></span>
\u6216
<span class="token url"><span class="token operator">!</span>[<span class="token content">logo</span>](<span class="token url">/img/logo.jpg</span>)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="6"><li>img \u6587\u4EF6</li></ol><p><code>page/img</code> \u6587\u4EF6\u5939\u5B58\u653E\u9875\u9762\u6240\u6709\u56FE\u7247\u8D44\u6E90\uFF0C\u4F7F\u7528\u76F8\u5BF9\u8DEF\u5F84\u6765\u5F15\u7528\uFF1A</p><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code><span class="token url"><span class="token operator">!</span>[<span class="token content">img</span>](<span class="token url">../img/logo.jpg</span>)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="7"><li>\u57FA\u7840\u8DEF\u5F84</li></ol><p>\u5982\u679C\u4F60\u7684\u7F51\u7AD9\u4F1A\u88AB\u90E8\u7F72\u5230\u4E00\u4E2A<strong>\u975E\u6839\u8DEF\u5F84</strong>\uFF0C\u4F60\u5C06\u9700\u8981\u5728 <code>.vuepress/config.ts</code> \u4E2D\u8BBE\u7F6E <code>base</code>\u3002\u6BD4\u5982 <code>http://blog.bigqianduan.top/bar/</code>\uFF0C\u90A3\u4E48 <code>base</code> \u7684\u503C\u5C31\u5E94\u8BE5\u88AB\u8BBE\u7F6E\u4E3A <code>&quot;/bar/&quot;</code> (\u5E94\u5F53\u603B\u662F\u4EE5\u659C\u6760\u5F00\u59CB\uFF0C\u5E76\u4EE5\u659C\u6760\u7ED3\u675F)\u3002</p><p>\u6B64\u65F6\u5F15\u7528 public \u6587\u4EF6\u5939\u8D44\u6E90\u8DEF\u5F84\uFF1A<code>/bar/img/logo.jpg</code>\u3002\u6216\u8005\u4F7F\u7528 VuePress \u5185\u7F6E\u7684\u4E00\u4E2A\u65B9\u6CD5 <code>$withBase</code> \uFF08\u5B83\u88AB\u6CE8\u5165\u5230\u4E86 Vue \u7684\u539F\u578B\u4E0A\uFF09\uFF1A</p><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">:src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>$withBase(<span class="token punctuation">&#39;</span>/images/hero.png<span class="token punctuation">&#39;</span>)<span class="token punctuation">&quot;</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>VuePress Logo<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>base</code> \u8DEF\u5F84\u4E00\u65E6\u88AB\u8BBE\u7F6E\uFF0C\u5B83\u5C06\u4F1A\u81EA\u52A8\u5730\u4F5C\u4E3A\u524D\u7F00\u63D2\u5165\u5230 <code>.vuepress/config.ts</code> \u4E2D\u6240\u6709\u4EE5 <code>/</code> \u5F00\u59CB\u7684\u8D44\u6E90\u8DEF\u5F84\u4E2D\u3002</p>`,21);function q(y,j){const e=c("ExternalLinkIcon");return o(),t("div",null,[r,p,n("p",null,[n("a",u,[v,a(e)]),m]),b,g,n("p",null,[n("a",k,[h,a(e)])]),n("p",null,[n("a",_,[f,a(e)])]),x])}var E=i(d,[["render",q],["__file","guide.html.vue"]]);export{E as default};
