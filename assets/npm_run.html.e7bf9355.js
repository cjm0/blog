import{_ as p,o,c as r,b as n,a as e,e as s,d as t,r as l}from"./app.6da7124e.js";const i={},c=s(`<h1 id="\u4F18\u5316-npm-\u8FD0\u884C\u811A\u672C" tabindex="-1"><a class="header-anchor" href="#\u4F18\u5316-npm-\u8FD0\u884C\u811A\u672C" aria-hidden="true">#</a> \u4F18\u5316 NPM \u8FD0\u884C\u811A\u672C</h1><p>\u6709\u65F6\u5019\uFF0C\u8FD0\u884C\u4E00\u4E2A\u5DE5\u7A0B\uFF0C\u53EF\u80FD\u9700\u8981\u6267\u884C\u591A\u4E2A\u811A\u672C\u3002\u5982\u9700\u8981\u6267\u884C\u5BA2\u6237\u7AEF\u4EE3\u7801\u7684 webpack \u6253\u5305\uFF0C\u8FD8\u8981\u6267\u884C\u670D\u52A1\u7AEF\u4EE3\u7801\u7684 webpack \u6253\u5305\uFF0C\u5F53\u670D\u52A1\u7AEF\u4EE3\u7801\u8FDB\u884C webpack \u8FDB\u884C\u6253\u5305\u540E\uFF0C\u8FD8\u8981\u91CD\u65B0\u542F\u52A8\u670D\u52A1\u5668\u7B49\u3002</p><p>\u57FA\u4E8E\u8FD9\u6837\u4E00\u4E2A\u9700\u6C42\uFF0C\u53EF\u4EE5\u4F7F\u7528 npm \u94A9\u5B50\uFF0Ccross-env\uFF0Cbetter-npm-run \u548C npm-run-all \u6765\u4F18\u5316 NPM \u8FD0\u884C\u811A\u672C\u3002</p><h2 id="npm-\u94A9\u5B50" tabindex="-1"><a class="header-anchor" href="#npm-\u94A9\u5B50" aria-hidden="true">#</a> npm \u94A9\u5B50</h2><p>npm \u9ED8\u8BA4\u63D0\u4F9B\u4E0B\u9762\u8FD9\u4E9B\u94A9\u5B50</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>prepublish\uFF0Cpostpublish
preinstall\uFF0Cpostinstall
preuninstall\uFF0Cpostuninstall
preversion\uFF0Cpostversion
pretest\uFF0Cposttest
prestop\uFF0Cpoststop
prestart\uFF0Cpoststart
prerestart\uFF0Cpostrestart
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>npm run install \u9ED8\u8BA4\u6267\u884C\u987A\u5E8F\uFF1A<code>npm run preinstall &gt; npm run install &gt; npm run postinstall</code></p><h2 id="cross-env" tabindex="-1"><a class="header-anchor" href="#cross-env" aria-hidden="true">#</a> cross-env</h2>`,8),u={href:"https://github.com/kentcdodds/cross-env#readme",target:"_blank",rel:"noopener noreferrer"},d=t("cross-env \u8DE8\u5E73\u53F0\u73AF\u5883\u53D8\u91CF\u8BBE\u7F6E"),v=s(`<p>Mac Window node scripts \u8BBE\u7F6E\u73AF\u5883\u53D8\u91CF\u517C\u5BB9\u63D2\u4EF6</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code>Node.js10 \u4EE5\u53CA\u66F4\u9AD8\u7248\u672C\uFF0Cnpm install cross-env -D
Node.js8 \u4EE5\u53CA\u66F4\u4F4E\u7248\u672C\uFF0Cnpm install cross-env@<span class="token number">6</span> -D

<span class="token punctuation">{</span>
  <span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;build&quot;</span><span class="token operator">:</span> <span class="token string">&quot;cross-env NODE_ENV=production webpack --config build/webpack.config.js&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="better-npm-run" tabindex="-1"><a class="header-anchor" href="#better-npm-run" aria-hidden="true">#</a> better-npm-run</h2>`,3),m={href:"https://github.com/benoror/better-npm-run#readme",target:"_blank",rel:"noopener noreferrer"},b=t("better-npm-run \u957F\u547D\u4EE4\u5355\u72EC\u62CE\u51FA\u6765\u5199"),k=s(`<div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;build:dev&quot;</span><span class="token operator">:</span> <span class="token string">&quot;better-npm-run build-dev&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;build:prod&quot;</span><span class="token operator">:</span> <span class="token string">&quot;better-npm-run build-prod&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;test&quot;</span><span class="token operator">:</span> <span class="token string">&quot;better-npm-run test&quot;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token property">&quot;betterScripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;build-dev&quot;</span><span class="token operator">:</span> <span class="token string">&quot;webpack --config $npm_package_webpack --progress --colors&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;build-prod&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;command&quot;</span><span class="token operator">:</span> <span class="token string">&quot;webpack --config $npm_package_webpack --progress --colors&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;env&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;NODE_ENV&quot;</span><span class="token operator">:</span> <span class="token string">&quot;production&quot;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;test&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;command&quot;</span><span class="token operator">:</span> <span class="token string">&quot;karma start&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;env&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;NODE_ENV&quot;</span><span class="token operator">:</span> <span class="token string">&quot;test&quot;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="npm-run-all" tabindex="-1"><a class="header-anchor" href="#npm-run-all" aria-hidden="true">#</a> npm-run-all</h2>`,2),q={href:"https://www.npmjs.com/package/npm-run-all",target:"_blank",rel:"noopener noreferrer"},h=t("npm-run-all \u540C\u65F6\u7EC4\u7EC7\u6267\u884C\u591A\u4E2A\u811A\u672C"),g=s(`<p>\u8FD0\u884C npm run dev\uFF0C\u4F1A\u4E00\u6B21\u6267\u884C dev:start\u3001dev:build:client\u3001dev:build:server \u547D\u4EE4</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code>npm install npm-run-all -D

<span class="token punctuation">{</span>
    <span class="token property">&quot;dev&quot;</span><span class="token operator">:</span> <span class="token string">&quot;npm-run-all --serial dev:**&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;dev:start&quot;</span><span class="token operator">:</span> <span class="token string">&quot;nodemon --watch build exec node \\&quot;build/bundle.js\\&quot;&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;dev:build:client&quot;</span><span class="token operator">:</span> <span class="token string">&quot;webpack --config webpack.config.client.js --watch&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;dev:build:server&quot;</span><span class="token operator">:</span> <span class="token string">&quot;webpack --config webpack.config.server.js --watch&quot;</span>
<span class="token punctuation">}</span>

\u591A\u79CD\u8FD0\u884C\u591A\u4E2A\u547D\u4EE4\u7684\u65B9\u5F0F\uFF1A\u9ED8\u8BA4 --serial
    --parallel<span class="token operator">:</span> \u5E76\u884C\u8FD0\u884C\u591A\u4E2A\u547D\u4EE4
        npm-run-all --parallel lint build \u6216
        run-p lint build
    --serial<span class="token operator">:</span> \u591A\u4E2A\u547D\u4EE4\u6309\u6392\u5217\u987A\u5E8F\u6267\u884C
        npm-run-all --serial clean lint build<span class="token operator">:</span>** \u6216
        run-s clean lint build<span class="token operator">:</span>**
    --continue-on-error<span class="token operator">:</span>
        \u662F\u5426\u5FFD\u7565\u9519\u8BEF\uFF0C\u6DFB\u52A0\u6B64\u53C2\u6570 npm-run-all \u4F1A\u81EA\u52A8\u9000\u51FA\u51FA\u9519\u7684\u547D\u4EE4\uFF0C\u7EE7\u7EED\u8FD0\u884C\u6B63\u5E38\u7684
    --race<span class="token operator">:</span>
        \u6DFB\u52A0\u6B64\u53C2\u6570\u4E4B\u540E\uFF0C\u53EA\u8981\u6709\u4E00\u4E2A\u547D\u4EE4\u8FD0\u884C\u51FA\u9519\uFF0C\u90A3\u4E48 npm-run-all \u5C31\u4F1A\u7ED3\u675F\u6389\u5168\u90E8\u7684\u547D\u4EE4

Glob-like \u540D\u79F0\u5339\u914D
    \u4F60\u53EF\u4EE5\u4F7F\u7528 Glob \u901A\u914D\u7B26\u6765\u5339\u914D\u4EFB\u52A1\u540D\u79F0\uFF0C\u65B9\u4FBF\u6307\u5B9A\u591A\u4E2A\u540D\u79F0\u76F8\u4F3C\u7684\u4EFB\u52A1
    npm-run-all --parallel watch<span class="token operator">:</span>*
        \u4E0D\u5339\u914D\u5206\u9694\u7B26\uFF0C\u540C\u65F6\u8FD0\u884C watch<span class="token operator">:</span>html watch<span class="token operator">:</span>js \u4F46\u4E0D\u8FD0\u884C watch<span class="token operator">:</span>js<span class="token operator">:</span>index\u3002
    npm-run-all --parallel watch<span class="token operator">:</span>**
        \u5339\u914D\u5206\u9694\u7B26\uFF0C\u6240\u6709\u4EE5 watch<span class="token operator">:</span> \u5F00\u5934\u7684\u811A\u672C\u90FD\u4F1A\u88AB\u8FD0\u884C\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function _(f,w){const a=l("ExternalLinkIcon");return o(),r("div",null,[c,n("p",null,[n("a",u,[d,e(a)])]),v,n("p",null,[n("a",m,[b,e(a)])]),k,n("p",null,[n("a",q,[h,e(a)])]),g])}var y=p(i,[["render",_],["__file","npm_run.html.vue"]]);export{y as default};
