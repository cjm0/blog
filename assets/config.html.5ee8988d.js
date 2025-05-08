import{_ as n,o as s,c as a,e as p}from"./app.6da7124e.js";const t={},e=p(`<h1 id="\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E" aria-hidden="true">#</a> \u914D\u7F6E</h1><h2 id="\u914D\u7F6E\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E\u6587\u4EF6" aria-hidden="true">#</a> \u914D\u7F6E\u6587\u4EF6</h2><p>VuePress \u7AD9\u70B9\u7684\u57FA\u672C\u914D\u7F6E\u6587\u4EF6\u662F <code>.vuepress/config.ts</code> \uFF0C\u4F46\u4E5F\u540C\u6837\u652F\u6301 TypeScript \u914D\u7F6E\u6587\u4EF6\u3002\u4F60\u53EF\u4EE5\u4F7F\u7528 <code>.vuepress/config.ts</code> \u6765\u5F97\u5230\u66F4\u597D\u7684\u7C7B\u578B\u63D0\u793A\u3002</p><h3 id="config-ts" tabindex="-1"><a class="header-anchor" href="#config-ts" aria-hidden="true">#</a> config.ts</h3><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineUserConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vuepress&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> path <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@vuepress/utils&#39;</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> defaultTheme <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">require</span><span class="token punctuation">(</span><span class="token string">&#39;@vuepress/theme-default&#39;</span><span class="token punctuation">)</span> <span class="token comment">// \u9ED8\u8BA4\u4E3B\u9898</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> registerComponentsPlugin <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">require</span><span class="token punctuation">(</span><span class="token string">&#39;@vuepress/plugin-register-components&#39;</span><span class="token punctuation">)</span> <span class="token comment">// \u81EA\u52A8\u6CE8\u518C\u7EC4\u4EF6</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> googleAnalyticsPlugin <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">require</span><span class="token punctuation">(</span><span class="token string">&#39;@vuepress/plugin-google-analytics&#39;</span><span class="token punctuation">)</span> <span class="token comment">// \u8C37\u6B4C\u5206\u6790</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> docsearchPlugin <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">require</span><span class="token punctuation">(</span><span class="token string">&#39;@vuepress/plugin-docsearch&#39;</span><span class="token punctuation">)</span> <span class="token comment">// \u63D0\u4F9B\u641C\u7D22\u529F\u80FD</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> pwaPlugin <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">require</span><span class="token punctuation">(</span><span class="token string">&#39;@vuepress/plugin-pwa&#39;</span><span class="token punctuation">)</span> <span class="token comment">// pwa</span>

<span class="token comment">// \u7F51\u7AD9\u5730\u5740 blog.bigqianduan.top</span>
<span class="token keyword">let</span> <span class="token function-variable function">getIp</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> interfaces <span class="token operator">=</span> <span class="token keyword">require</span><span class="token punctuation">(</span><span class="token string">&#39;os&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">networkInterfaces</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> devName <span class="token keyword">in</span> interfaces<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> iface <span class="token operator">=</span> interfaces<span class="token punctuation">[</span>devName<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> iface<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">var</span> alias <span class="token operator">=</span> iface<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>alias<span class="token punctuation">.</span>family <span class="token operator">===</span> <span class="token string">&#39;IPv4&#39;</span> <span class="token operator">&amp;&amp;</span> alias<span class="token punctuation">.</span>address <span class="token operator">!==</span> <span class="token string">&#39;127.0.0.1&#39;</span> <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>alias<span class="token punctuation">.</span>internal<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> alias<span class="token punctuation">.</span>address<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// const isGitPages = process.argv[process.argv.length - 1] === &#39;pages&#39;;</span>
<span class="token keyword">const</span> isGitPages <span class="token operator">=</span> <span class="token boolean">true</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineUserConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  base<span class="token operator">:</span> isGitPages <span class="token operator">?</span> <span class="token string">&#39;/blog/&#39;</span> <span class="token operator">:</span> <span class="token string">&#39;/&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u90E8\u7F72\u7AD9\u70B9\u7684\u57FA\u7840\u8DEF\u5F84</span>
  open<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// \u662F\u5426\u5728\u5F00\u53D1\u670D\u52A1\u5668\u542F\u52A8\u540E\u6253\u5F00\u6D4F\u89C8\u5668</span>
  debug<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// \u662F\u5426\u542F\u7528 Debug \u6A21\u5F0F</span>
  host<span class="token operator">:</span> <span class="token string">&#39;localhost&#39;</span><span class="token punctuation">,</span>
  port<span class="token operator">:</span> <span class="token number">3009</span><span class="token punctuation">,</span>

  head<span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token comment">// \u6DFB\u52A0\u94FE\u63A5 pwa \u7684 manifest \u5982\u679C\u9700\u8981</span>
    <span class="token punctuation">[</span><span class="token string">&#39;link&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> rel<span class="token operator">:</span> <span class="token string">&#39;icon&#39;</span><span class="token punctuation">,</span> href<span class="token operator">:</span> <span class="token string">&#39;/img/logo.jpg&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span><span class="token string">&#39;meta&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">&#39;apple-mobile-web-app-capable&#39;</span><span class="token punctuation">,</span> content<span class="token operator">:</span> <span class="token string">&#39;yes&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span><span class="token string">&#39;meta&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">&#39;apple-mobile-web-app-status-bar-style&#39;</span><span class="token punctuation">,</span> content<span class="token operator">:</span> <span class="token string">&#39;black&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span><span class="token string">&#39;meta&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">&#39;msapplication-TileColor&#39;</span><span class="token punctuation">,</span> content<span class="token operator">:</span> <span class="token string">&#39;#000000&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">]</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  locales<span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">// \u9ED8\u8BA4\u6807\u9898</span>
    <span class="token string-property property">&#39;/&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      lang<span class="token operator">:</span> <span class="token string">&#39;zh-CN&#39;</span><span class="token punctuation">,</span>
      title<span class="token operator">:</span> <span class="token string">&#39;\u524D\u7AEF\u4E00\u9505\u716E&#39;</span><span class="token punctuation">,</span>
      description<span class="token operator">:</span> <span class="token string">&#39;\u8FD9\u662F\u4E00\u4E2A\u57FA\u4E8E VuePress2 \u6784\u5EFA\u7684\u7528\u4E8E\u524D\u7AEF\u5B66\u4E60\u3001\u7B14\u8BB0\u8BB0\u5F55\u3001\u8DA3\u6587\u63A8\u8350\u7684\u4E2A\u4EBA\u535A\u5BA2\u7F51\u7AD9&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// &#39;/en/&#39;: {</span>
    <span class="token comment">//   lang: &#39;en-US&#39;,</span>
    <span class="token comment">//   title: &#39;&#39;,</span>
    <span class="token comment">//   description: &#39;&#39;,</span>
    <span class="token comment">// }</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  dest<span class="token operator">:</span> <span class="token string">&#39;.vuepress/dist&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u6307\u5B9A vuepress build \u7684\u8F93\u51FA\u76EE\u5F55</span>
  temp<span class="token operator">:</span> <span class="token string">&#39;.vuepress/.temp&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u6307\u5B9A\u4E34\u65F6\u6587\u4EF6\u76EE\u5F55</span>
  cache<span class="token operator">:</span> <span class="token string">&#39;.vuepress/.cache&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u6307\u5B9A\u7F13\u5B58\u6587\u4EF6\u76EE\u5F55</span>
  pagePatterns<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;**/*.md&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;!.vuepress&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;!node_modules&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// \u6307\u5B9A\u9875\u9762\u6587\u4EF6\u7684 Patterns</span>

  plugins<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token function">registerComponentsPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token comment">// components: {</span>
      <span class="token comment">//     vHome: path.resolve(__dirname, &#39;./components/vHome.vue&#39;),</span>
      <span class="token comment">// },</span>
      componentsDir<span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;./components&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">googleAnalyticsPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      id<span class="token operator">:</span> <span class="token string">&#39;G-UA-109714208-2&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">docsearchPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      apiKey<span class="token operator">:</span> <span class="token string">&#39;&lt;API_KEY&gt;&#39;</span><span class="token punctuation">,</span>
      indexName<span class="token operator">:</span> <span class="token string">&#39;&lt;INDEX_NAME&gt;&#39;</span><span class="token punctuation">,</span>
      locales<span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string-property property">&#39;/&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          placeholder<span class="token operator">:</span> <span class="token string">&#39;\u641C\u7D22\u6587\u6863&#39;</span><span class="token punctuation">,</span>
          translations<span class="token operator">:</span> <span class="token punctuation">{</span>
            button<span class="token operator">:</span> <span class="token punctuation">{</span>
              buttonText<span class="token operator">:</span> <span class="token string">&#39;\u641C\u7D22\u6587\u6863&#39;</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token comment">// &#39;/en/&#39;: {</span>
        <span class="token comment">//   placeholder: &#39;Search Documentation&#39;,</span>
        <span class="token comment">//   translations: {</span>
        <span class="token comment">//     button: {</span>
        <span class="token comment">//       buttonText: &#39;Search Documentation&#39;,</span>
        <span class="token comment">//     },</span>
        <span class="token comment">//   },</span>
        <span class="token comment">// },</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">pwaPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>

  <span class="token comment">// \u4E3B\u9898\u914D\u7F6E</span>
  theme<span class="token operator">:</span> <span class="token function">defaultTheme</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token comment">// \u9ED8\u8BA4\u4E3B\u9898\u914D\u7F6E</span>
    colorMode<span class="token operator">:</span> <span class="token string">&#39;auto&#39;</span><span class="token punctuation">,</span> <span class="token comment">// &#39;auto&#39; | &#39;light&#39; | &#39;dark&#39; \u9ED8\u8BA4\u989C\u8272\u6A21\u5F0F</span>
    colorModeSwitch<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// \u5982\u679C\u8BBE\u7F6E\u4E3A true \uFF0C\u5C06\u4F1A\u5728\u5BFC\u822A\u680F\u5C55\u793A\u4E00\u4E2A\u5207\u6362\u989C\u8272\u6A21\u5F0F\u7684\u6309\u94AE</span>
    home<span class="token operator">:</span> <span class="token string">&#39;/&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u9996\u9875\u7684\u8DEF\u5F84</span>
    logo<span class="token operator">:</span> <span class="token string">&#39;/img/logo.jpg&#39;</span><span class="token punctuation">,</span> <span class="token comment">// Logo \u56FE\u7247\u5C06\u4F1A\u663E\u793A\u5728\u5BFC\u822A\u680F\u7684\u5DE6\u7AEF</span>
    logoDark<span class="token operator">:</span> <span class="token string">&#39;/img/logo.jpg&#39;</span><span class="token punctuation">,</span> <span class="token comment">// null \u53EF\u4EE5\u5728\u591C\u95F4\u6A21\u5F0F\u4E0B\u7981\u7528 Logo\uFF0C\u5728\u591C\u95F4\u6A21\u5F0F\u4E2D\u4F7F\u7528\u7684 Logo \u56FE\u7247\u7684 URL</span>

    repo<span class="token operator">:</span> <span class="token string">&#39;https://github.com/cjm0/blog.git&#39;</span><span class="token punctuation">,</span>
    repoLabel<span class="token operator">:</span> <span class="token string">&#39;Github&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u4ED3\u5E93\u94FE\u63A5 \u7684\u6587\u5B57</span>

    docsDir<span class="token operator">:</span> <span class="token string">&#39;docs&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u6587\u6863\u6E90\u6587\u4EF6\u5B58\u653E\u5728\u4ED3\u5E93\u4E2D\u7684\u76EE\u5F55\u540D</span>
    docsRepo<span class="token operator">:</span> <span class="token string">&#39;https://github.com/cjm0/blog.git&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u6587\u6863\u6E90\u6587\u4EF6\u7684\u4ED3\u5E93 URL</span>
    docsBranch<span class="token operator">:</span> <span class="token string">&#39;master&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u6587\u6863\u6E90\u6587\u4EF6\u7684\u4ED3\u5E93\u5206\u652F</span>
    editLinks<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// \u662F\u5426\u542F\u7528 \u7F16\u8F91\u6B64\u9875 \u94FE\u63A5</span>
    editLinkPattern<span class="token operator">:</span> <span class="token string">&#39;:repo/edit/:branch/:path&#39;</span><span class="token punctuation">,</span>

    lastUpdated<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// \u662F\u5426\u542F\u7528 \u6700\u8FD1\u66F4\u65B0\u65F6\u95F4\u6233</span>
    contributors<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// \u662F\u5426\u542F\u7528 \u8D21\u732E\u8005\u5217\u8868</span>
    <span class="token comment">// contributorsText: &#39;Contributors&#39;, // \u8D21\u732E\u8005\u5217\u8868 \u6807\u7B7E\u7684\u6587\u5B57</span>

    tip<span class="token operator">:</span> <span class="token string">&#39;TIP&#39;</span><span class="token punctuation">,</span> <span class="token comment">// Tip \u81EA\u5B9A\u4E49\u5BB9\u5668 \u7684\u9ED8\u8BA4\u6807\u9898</span>
    warning<span class="token operator">:</span> <span class="token string">&#39;WARNING&#39;</span><span class="token punctuation">,</span> <span class="token comment">// Warning \u81EA\u5B9A\u4E49\u5BB9\u5668 \u7684\u9ED8\u8BA4\u6807\u9898</span>
    danger<span class="token operator">:</span> <span class="token string">&#39;DANGER&#39;</span><span class="token punctuation">,</span> <span class="token comment">// Danger \u81EA\u5B9A\u4E49\u5BB9\u5668 \u7684\u9ED8\u8BA4\u6807\u9898</span>
    locales<span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string-property property">&#39;/&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        selectLanguageName<span class="token operator">:</span> <span class="token string">&#39;\u7B80\u4F53\u4E2D\u6587&#39;</span><span class="token punctuation">,</span>
        editLinkText<span class="token operator">:</span> <span class="token string">&#39;\u5728 GitHub \u4E0A\u7F16\u8F91\u6B64\u9875&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u7F16\u8F91\u6B64\u9875 \u94FE\u63A5\u7684\u6587\u5B57</span>
        lastUpdatedText<span class="token operator">:</span> <span class="token string">&#39;\u4E0A\u6B21\u66F4\u65B0&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u6700\u8FD1\u66F4\u65B0\u65F6\u95F4\u6233 \u6807\u7B7E\u7684\u6587\u5B57</span>
        toggleColorMode<span class="token operator">:</span> <span class="token string">&#39;\u5207\u6362\u989C\u8272\u6A21\u5F0F&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u5207\u6362\u989C\u8272\u6A21\u5F0F\u6309\u94AE\u7684\u6807\u9898\u6587\u5B57</span>
        notFound<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;\u770B\u8D77\u6765\u6211\u4EEC\u8FDB\u5165\u4E86\u9519\u8BEF\u7684\u94FE\u63A5&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// Not Found - 404 \u9875\u9762\u7684\u63D0\u793A\u4FE1\u606F\uFF0C\u4F1A\u4ECE\u6570\u7EC4\u4E2D\u968F\u673A\u9009\u53D6\u4E00\u6761\u4FE1\u606F\u8FDB\u884C\u5C55\u793A</span>
        backToHome<span class="token operator">:</span> <span class="token string">&#39;\u8FD4\u56DE\u9996\u9875&#39;</span><span class="token punctuation">,</span> <span class="token comment">// Back to home - 404 \u9875\u9762\u4E2D \u8FD4\u56DE\u9996\u9875 \u94FE\u63A5\u7684\u6587\u5B57</span>

        navbar<span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token comment">// \u9876\u90E8\u5BFC\u822A\u680F</span>
          <span class="token punctuation">{</span>
            text<span class="token operator">:</span> <span class="token string">&#39;\u9996\u9875&#39;</span><span class="token punctuation">,</span>
            link<span class="token operator">:</span> <span class="token string">&#39;/&#39;</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            text<span class="token operator">:</span> <span class="token string">&#39;\u5168\u90E8\u6587\u7AE0&#39;</span><span class="token punctuation">,</span>
            link<span class="token operator">:</span> <span class="token string">&#39;/page/list/&#39;</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            text<span class="token operator">:</span> <span class="token string">&#39;VuePress\u7B14\u8BB0&#39;</span><span class="token punctuation">,</span>
            children<span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token punctuation">{</span>
                  text<span class="token operator">:</span> <span class="token string">&#39;\u4ECB\u7ECD&#39;</span><span class="token punctuation">,</span>
                  link<span class="token operator">:</span> <span class="token string">&#39;/page/vuepress/guide&#39;</span><span class="token punctuation">,</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                  text<span class="token operator">:</span> <span class="token string">&#39;\u8BED\u6CD5&#39;</span><span class="token punctuation">,</span>
                  link<span class="token operator">:</span> <span class="token string">&#39;/page/vuepress/api&#39;</span><span class="token punctuation">,</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                  text<span class="token operator">:</span> <span class="token string">&#39;\u914D\u7F6E&#39;</span><span class="token punctuation">,</span>
                  link<span class="token operator">:</span> <span class="token string">&#39;/page/vuepress/config&#39;</span><span class="token punctuation">,</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                  text<span class="token operator">:</span> <span class="token string">&#39;\u4E3B\u9898&#39;</span><span class="token punctuation">,</span>
                  link<span class="token operator">:</span> <span class="token string">&#39;/page/vuepress/theme&#39;</span><span class="token punctuation">,</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            text<span class="token operator">:</span> <span class="token string">&#39;\u5173\u4E8E\u6211&#39;</span><span class="token punctuation">,</span>
            link<span class="token operator">:</span> <span class="token string">&#39;/page/about/&#39;</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token comment">/* {
            text: &#39;\u6D4B\u8BD5&#39;,
            children: [
              {
                text: &#39;Always active&#39;,
                link: &#39;/&#39;,
                activeMatch: &#39;/&#39;, // \u8BE5\u5143\u7D20\u5C06\u4E00\u76F4\u5904\u4E8E\u6FC0\u6D3B\u72B6\u6001
              },
              {
                text: &#39;Active on /foo/&#39;,
                link: &#39;/not-foo/&#39;,
                // \u8BE5\u5143\u7D20\u5728\u5F53\u524D\u8DEF\u7531\u8DEF\u5F84\u662F /foo/ \u5F00\u5934\u65F6\u6FC0\u6D3B
                // \u652F\u6301\u6B63\u5219\u8868\u8FBE\u5F0F
                activeMatch: &#39;^/foo/&#39;,
              },
            ],
          } */</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        sidebar<span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">// \u6587\u6863\u4FA7\u8FB9\u680F\uFF0C\u8DF3\u8F6C\u5230\u4E0D\u540C\u9875\u9762</span>
          <span class="token string-property property">&#39;/page/vuepress/&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
              text<span class="token operator">:</span> <span class="token string">&#39;VuePress\u7B14\u8BB0&#39;</span><span class="token punctuation">,</span>
              sidebarDepth<span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
              collapsable<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
              children<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;guide.md&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;api.md&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;config.md&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;theme.md&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token comment">// &#39;/en/&#39;: {</span>
      <span class="token comment">//   selectLanguageName: &#39;English&#39;,</span>
      <span class="token comment">// }</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="client-ts" tabindex="-1"><a class="header-anchor" href="#client-ts" aria-hidden="true">#</a> client.ts</h3><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineClientConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@vuepress/client&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineClientConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function">enhance</span><span class="token punctuation">(</span><span class="token punctuation">{</span> app<span class="token punctuation">,</span> router<span class="token punctuation">,</span> siteData <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// router.beforeEach((to) =&gt; {</span>
    <span class="token comment">//   console.log(&#39;before navigation&#39;)</span>
    <span class="token comment">// })</span>

    <span class="token comment">// router.afterEach((to) =&gt; {</span>
    <span class="token comment">//   console.log(&#39;after navigation&#39;)</span>
    <span class="token comment">// })</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// \u5168\u5C40\u7684 UI \u7EC4\u4EF6</span>
  rootComponents<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),o=[e];function c(i,l){return s(),a("div",null,o)}var r=n(t,[["render",c],["__file","config.html.vue"]]);export{r as default};
