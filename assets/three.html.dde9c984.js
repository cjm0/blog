import{_ as n,o as s,c as a,e as p}from"./app.544215b1.js";const t={},e=p(`<h1 id="\u6311\u6218\u5927\u5382\u7B2C1\u7BC7-js\u6811\u7ED3\u6784\u4E92\u8F6C" tabindex="-1"><a class="header-anchor" href="#\u6311\u6218\u5927\u5382\u7B2C1\u7BC7-js\u6811\u7ED3\u6784\u4E92\u8F6C" aria-hidden="true">#</a> \u6311\u6218\u5927\u5382\u7B2C1\u7BC7-js\u6811\u7ED3\u6784\u4E92\u8F6C</h1><blockquote><p>\u6311\u6218\u5927\u5382\u7CFB\u5217\u6587\u7AE0\uFF0C\u8F6C\u8F7D\u8BF7\u6CE8\u660E\u6765\u6E90</p></blockquote><p>\u9762\u8BD5\u7EDD\u6740\u9898\u4E4B\u4E00\uFF1A\u6570\u7EC4\u548C\u6811\u7ED3\u6784\u6570\u636E\u76F8\u4E92\u8F6C\u6362\u3002</p><p>\u9762\u8BD5\u7684\u65F6\u5019\u7ECF\u5E38\u4F1A\u88AB\u95EE\u9053\u8FD9\u4E2A\u9898\uFF0C\u5927\u591A\u6570\u4EBA\u5E73\u65F6\u6CA1\u7279\u610F\u53BB\u5B66\u4E5F\u6CA1\u6709\u7528\u8FC7\u5C31\u56DE\u7B54\u4E0D\u4E0A\u6765\u4E86\u3002</p><p>\u7136\u540E\uFF1F\u81EA\u7136\u5C31\u6CA1\u6709\u7136\u540E\u4E86\u3002</p><p>\u6B64\u9898\u4E00\u822C\u4F1A\u653E\u5728\u521D\u8BD5\u7684\u6700\u540E\u4F5C\u4E3A\u538B\u8F74\u9898\u4E4B\u4E00\u3002</p><p>\u7406\u89E3\u4E86\u91CC\u9762\u7684\u5173\u952E\u70B9\u5C31\u4F1A\u53D1\u73B0\u5176\u5B9E\u662F\u5F88\u7B80\u5355\u7684\u3002</p><h2 id="\u539F\u59CB\u6570\u636E" tabindex="-1"><a class="header-anchor" href="#\u539F\u59CB\u6570\u636E" aria-hidden="true">#</a> \u539F\u59CB\u6570\u636E</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>\u6570\u7EC4
<span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span><span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;\u90E8\u95E8B&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">pId</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span><span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;\u90E8\u95E8A&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">pId</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span><span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;\u90E8\u95E8C&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">pId</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span><span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;\u90E8\u95E8D&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">pId</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span><span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;\u90E8\u95E8E&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">pId</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>

\u6811\u7ED3\u6784
<span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u90E8\u95E8B&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;pId&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;children&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token string-property property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u90E8\u95E8A&quot;</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;pId&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;children&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token string-property property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u90E8\u95E8C&quot;</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;pId&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;children&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token string-property property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u90E8\u95E8D&quot;</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;pId&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;children&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token string-property property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u90E8\u95E8E&quot;</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;pId&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;children&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u4E00\u7EF4\u6570\u7EC4\u8F6C\u6210\u6811\u7ED3\u6784" tabindex="-1"><a class="header-anchor" href="#\u4E00\u7EF4\u6570\u7EC4\u8F6C\u6210\u6811\u7ED3\u6784" aria-hidden="true">#</a> \u4E00\u7EF4\u6570\u7EC4\u8F6C\u6210\u6811\u7ED3\u6784</h2><p>\u6838\u5FC3\u539F\u7406\u5229\u7528\u6570\u7EC4\u548C\u5BF9\u8C61\u76F8\u4E92\u5F15\u7528\u7684\u5173\u7CFB</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u975E\u9012\u5F52\u5B9E\u73B0\uFF0C\u65F6\u95F4\u590D\u6742\u5EA6O(n)</span>
<span class="token keyword">function</span> <span class="token function">toTree</span><span class="token punctuation">(</span><span class="token parameter">arr<span class="token punctuation">,</span> rootId</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u6D45\u590D\u5236\u51FA\u4E00\u4EFD\u6570\u636E\u5E76\u52A0\u4E0A children \u5B57\u6BB5</span>
    <span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    arr<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">v</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        obj<span class="token punctuation">[</span>v<span class="token punctuation">.</span>id<span class="token punctuation">]</span> <span class="token operator">=</span> v
        obj<span class="token punctuation">[</span>v<span class="token punctuation">.</span>id<span class="token punctuation">]</span><span class="token punctuation">.</span>children <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    arr<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">v</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>v<span class="token punctuation">.</span>pId <span class="token operator">==</span> rootId<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// \u62FF\u6B64\u523B\u5FAA\u73AF\u503C\u7684 pId \u53BB\u590D\u5236\u6570\u636E\u91CC\u9762\u627E\u5230\u5BF9\u5E94\u7236\u7EA7\u7136\u540E\u585E\u5230\u5B83\u7684 children \u4E2D</span>
        obj<span class="token punctuation">[</span>v<span class="token punctuation">.</span>pId<span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> obj<span class="token punctuation">[</span>v<span class="token punctuation">.</span>pId<span class="token punctuation">]</span><span class="token punctuation">.</span>children<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u9012\u5F52\u5B9E\u73B0</span>
<span class="token keyword">function</span> <span class="token function">toTree</span><span class="token punctuation">(</span><span class="token parameter">arr<span class="token punctuation">,</span> rootId</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    arr<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">v</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u9012\u5F52\u601D\u60F3\u5C31\u662F\u5148\u5904\u7406\u597D\u7B2C\u4E00\u4E2A\uFF0C\u7136\u540E\u5176\u4ED6\u7684\u90FD\u6309\u7167\u8FD9\u4E2A\u65B9\u6CD5\u5904\u7406</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>v<span class="token punctuation">.</span>pId <span class="token operator">==</span> rootId<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            v<span class="token punctuation">.</span>children <span class="token operator">=</span> <span class="token function">toTree</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span> v<span class="token punctuation">.</span>id<span class="token punctuation">)</span>
            res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> res
<span class="token punctuation">}</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span><span class="token function">toTree</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u6811\u7ED3\u6784\u8F6C\u6210\u4E00\u7EF4\u6570\u7EC4" tabindex="-1"><a class="header-anchor" href="#\u6811\u7ED3\u6784\u8F6C\u6210\u4E00\u7EF4\u6570\u7EC4" aria-hidden="true">#</a> \u6811\u7ED3\u6784\u8F6C\u6210\u4E00\u7EF4\u6570\u7EC4</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u9012\u5F52\u5B9E\u73B0\uFF0C\u6DF1\u5EA6\u4F18\u5148\uFF0C\u540E\u8FDB\u5148\u51FA</span>
<span class="token keyword">function</span> <span class="token function">toArr</span><span class="token punctuation">(</span><span class="token parameter">arr</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token parameter">childs</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        childs<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">v</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
                <span class="token literal-property property">id</span><span class="token operator">:</span> v<span class="token punctuation">.</span>id<span class="token punctuation">,</span>
                <span class="token literal-property property">name</span><span class="token operator">:</span> v<span class="token punctuation">.</span>name<span class="token punctuation">,</span>
                <span class="token literal-property property">pId</span><span class="token operator">:</span> v<span class="token punctuation">.</span>pId
            <span class="token punctuation">}</span><span class="token punctuation">)</span>
            <span class="token comment">// \u5FAA\u73AF\u4E00\u4E2A\u4E2A\u5206\u79BB\u51FA\u6765\u76F4\u5230 children \u4E3A\u7A7A\u4E3A\u6B62</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>v<span class="token punctuation">.</span>children<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token function">fn</span><span class="token punctuation">(</span>v<span class="token punctuation">.</span>children<span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token function">fn</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span>
    <span class="token keyword">return</span> res
<span class="token punctuation">}</span>

<span class="token comment">// \u975E\u9012\u5F52\u5B9E\u73B0\uFF0C\u5E7F\u5EA6\u4F18\u5148\uFF0C\u5148\u8FDB\u5148\u51FA</span>
<span class="token keyword">function</span> <span class="token function">toArr</span><span class="token punctuation">(</span><span class="token parameter">arr</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> stack <span class="token operator">=</span> arr
    <span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token comment">// stack \u968F\u7740\u5FAA\u73AF\u51CF\u5C0F\uFF0C\u800C\u968F\u7740 children \u7684\u52A0\u5165\u53D8\u5927</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span>stack<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> shift <span class="token operator">=</span> stack<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token literal-property property">id</span><span class="token operator">:</span> shift<span class="token punctuation">.</span>id<span class="token punctuation">,</span>
            <span class="token literal-property property">name</span><span class="token operator">:</span> shift<span class="token punctuation">.</span>name<span class="token punctuation">,</span>
            <span class="token literal-property property">pId</span><span class="token operator">:</span> shift<span class="token punctuation">.</span>pId
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token comment">// \u5206\u79BB\u4E00\u4E2A\u5C31\u5220\u6389\u4E00\u4E2A\uFF0C\u7136\u540E\u628A\u5206\u7406\u51FA\u6765\u6570\u636E\u7684 children \u4F9D\u6B21\u585E\u56DE\u53BB\u7EE7\u7EED\u5904\u7406</span>
        <span class="token keyword">let</span> child <span class="token operator">=</span> shift<span class="token punctuation">.</span>children
        <span class="token keyword">if</span> <span class="token punctuation">(</span>child<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            child<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">v</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
                stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> res
<span class="token punctuation">}</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">toArr</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4F60 get \u5230\u4E86\u5417\uFF1F</p>`,15),o=[e];function c(l,i){return s(),a("div",null,o)}var r=n(t,[["render",c],["__file","three.html.vue"]]);export{r as default};
