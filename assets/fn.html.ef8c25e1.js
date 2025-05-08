import{_ as n,o as s,c as a,e}from"./app.6da7124e.js";const t={},p=e(`<h1 id="\u6311\u6218\u5927\u5382\u7B2C3\u7BC7-new\u3001call\u3001create\u7B49\u5E38\u89C1\u51FD\u6570\u7684\u5185\u90E8\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#\u6311\u6218\u5927\u5382\u7B2C3\u7BC7-new\u3001call\u3001create\u7B49\u5E38\u89C1\u51FD\u6570\u7684\u5185\u90E8\u5B9E\u73B0" aria-hidden="true">#</a> \u6311\u6218\u5927\u5382\u7B2C3\u7BC7-new\u3001call\u3001create\u7B49\u5E38\u89C1\u51FD\u6570\u7684\u5185\u90E8\u5B9E\u73B0</h1><blockquote><p>\u6311\u6218\u5927\u5382\u7CFB\u5217\u6587\u7AE0\uFF0C\u8F6C\u8F7D\u8BF7\u6CE8\u660E\u6765\u6E90</p></blockquote><p>\u89E3\u6790 new()\u3001Object.create()\u3001instanceof\u3001call()\u3001apply()\u3001bind()\u7B496\u4E2A\u65B9\u6CD5\u51FD\u6570\u7684\u539F\u7406\u548C\u5185\u90E8\u5B9E\u73B0</p><h2 id="new" tabindex="-1"><a class="header-anchor" href="#new" aria-hidden="true">#</a> new()</h2><p>\u601D\u8DEF\uFF1A\u628A\u539F\u578B\u6307\u5411\u539F\u578B\u5BF9\u8C61\u53BB\u83B7\u53D6\u65B9\u6CD5\uFF0C\u7528 call/apply \u53BB\u6539 this \u6307\u5411\u83B7\u53D6\u5C5E\u6027</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token keyword">new</span><span class="token punctuation">(</span><span class="token parameter">fn<span class="token punctuation">,</span> <span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">/*
    \u539F\u578B\uFF1A__proto__
    \u539F\u578B\u5BF9\u8C61\uFF1Aprototype
    \u53EF\u7528\u6B64\u65B9\u6CD5\u66FF\u4EE3\uFF1Alet obj = Object.create(fn.prototype)
  */</span>
  <span class="token comment">// 1. \u521B\u5EFA\u4E00\u4E2A\u7A7A\u5BF9\u8C61\uFF0C\u5C06\u8FD9\u4E2A\u5BF9\u8C61\u7684\u539F\u578B\u6307\u5411\u6784\u9020\u51FD\u6570\u7684\u539F\u578B\u5BF9\u8C61</span>
  <span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">__proto__</span><span class="token operator">:</span> fn<span class="token punctuation">.</span>prototype
  <span class="token punctuation">}</span>

  <span class="token comment">// 2. \u6267\u884C\u6784\u9020\u51FD\u6570\uFF0C\u628A\u91CC\u9762\u7684 this \u6307\u5230\u8FD9\u4E2A\u5BF9\u8C61</span>
  <span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token function">fn</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> args<span class="token punctuation">)</span>

  <span class="token comment">// 3. \u8FD4\u56DE\u503C\u4E3A object \u7C7B\u578B\u5219\u4F5C\u4E3A new \u65B9\u6CD5\u7684\u8FD4\u56DE\u503C\u8FD4\u56DE\uFF0C\u5426\u5219\u8FD4\u56DE\u8FD9\u4E2A\u7A7A\u5BF9\u8C61</span>
  <span class="token keyword">return</span> res <span class="token keyword">instanceof</span> <span class="token class-name">Object</span> <span class="token operator">?</span> res <span class="token operator">:</span> obj
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="object-create" tabindex="-1"><a class="header-anchor" href="#object-create" aria-hidden="true">#</a> Object.create()</h2><p>\u601D\u8DEF\uFF1A\u521B\u5EFA\u4E00\u4E2A\u7A7A\u51FD\u6570 F \u4F5C\u4E3A\u4E2D\u4ECB\u53BB\u627F\u63A5\u539F\u578B\u5BF9\u8C61\u7684\u65B9\u6CD5\uFF0Cobj.<strong>proto</strong> = F.prototype = fn.prototype</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">/*
  constructor \u6302\u5728\u539F\u578B\u5BF9\u8C61 prototype \u7684\u5C5E\u6027\u4E0A
  F.prototype = {
    constructor: F
  }

  \u628A fn.prototype \u5F53\u505A\u53C2\u6570\u4F20\u8FDB\u6765
  F.prototype = proto
  F.prototype = fn.prototype = {
    constructor: fn
  }
  F.prototype = {
    constructor: fn
  }

  \u6240\u4EE5\u4FEE\u6539\u539F\u578B\u5BF9\u8C61\u540E\u9700\u8981\u91CD\u65B0\u628A constructor \u6307\u56DE\u53BB
*/</span>
<span class="token keyword">function</span> <span class="token function">create</span><span class="token punctuation">(</span><span class="token parameter">proto</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> <span class="token function-variable function">F</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token class-name">F</span><span class="token punctuation">.</span>prototype <span class="token operator">=</span> proto
  <span class="token class-name">F</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>constructor <span class="token operator">=</span> <span class="token constant">F</span>
  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">F</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="instanceof" tabindex="-1"><a class="header-anchor" href="#instanceof" aria-hidden="true">#</a> instanceof</h2><p>\u601D\u8DEF\uFF1A\u53F3\u8FB9\u53D8\u91CF\u7684\u539F\u578B\u5BF9\u8C61\u5B58\u5728\u4E8E\u5DE6\u8FB9\u53D8\u91CF\u7684\u539F\u578B\u94FE\u4E0A</p><p>\u539F\u578B\u94FE\uFF1Aobj.<strong>proto</strong>.<strong>proto</strong> \u8FD9\u6837\u4E00\u76F4\u5F80\u4E0A\u627E\u76F4\u5230 null \u4E3A\u6B62\u5F62\u6210\u7684\u94FE\u6761</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>  <span class="token keyword">function</span> <span class="token function">myInstanceof</span><span class="token punctuation">(</span><span class="token parameter">left<span class="token punctuation">,</span> right</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">/*
      let proto = left.__proto__
      es6 \u65B0\u5199\u6CD5\u7528 Object.getPrototypeOf(left) \u66FF\u4EE3 left.__proto__
    */</span>
    <span class="token keyword">let</span> proto <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">getPrototypeOf</span><span class="token punctuation">(</span>left<span class="token punctuation">)</span>

    <span class="token keyword">while</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>proto <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token boolean">false</span>
      <span class="token punctuation">}</span>
      <span class="token comment">// \u6B64\u65F6\u5DE6\u8FB9\u53D8\u91CF\u7684\u539F\u578B\u7B49\u4E8E\u53F3\u8FB9\u53D8\u91CF\u7684\u539F\u578B\u5BF9\u8C61</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>proto <span class="token operator">===</span> right<span class="token punctuation">.</span>prototype<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token boolean">true</span>
      <span class="token punctuation">}</span>
      <span class="token comment">// \u4E0D\u7B49\u4E8E\u5C31\u7EE7\u7EED\u5F80\u539F\u578B\u94FE\u4E0A\u627E\uFF0Cleft.__proto__ = left.__proto__.__proto__</span>
      proto <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">getPrototypeof</span><span class="token punctuation">(</span>proto<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="call" tabindex="-1"><a class="header-anchor" href="#call" aria-hidden="true">#</a> call</h2><p>\u601D\u8DEF\uFF1A\u5C06\u8981\u6539\u53D8 this \u6307\u5411\u7684\u65B9\u6CD5\u6302\u5230\u76EE\u6807 this \u4E0A\u6267\u884C\u5E76\u8FD4\u56DE</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>  <span class="token class-name">Function</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">call</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">context <span class="token operator">=</span> window<span class="token punctuation">,</span> <span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> fn <span class="token operator">=</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token string">&#39;fn&#39;</span><span class="token punctuation">)</span>
    context<span class="token punctuation">[</span>fn<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">this</span>
    <span class="token keyword">let</span> res <span class="token operator">=</span> context<span class="token punctuation">[</span>fn<span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token punctuation">)</span>
    <span class="token keyword">delete</span> context<span class="token punctuation">[</span>fn<span class="token punctuation">]</span>
    <span class="token keyword">return</span> res
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u89E3\u6790\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>  <span class="token comment">// \u539F\u7406</span>
  <span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;obj&#39;</span><span class="token punctuation">,</span>
    <span class="token function-variable function">fn</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  obj<span class="token punctuation">.</span><span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// \u6B64\u65F6\u91CC\u9762\u7684 this \u6307\u5411 obj</span>

  <span class="token class-name">Function</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">call</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">obj<span class="token punctuation">,</span> <span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    obj <span class="token operator">=</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">fn</span><span class="token operator">:</span> f
    <span class="token punctuation">}</span>
    <span class="token keyword">let</span> res <span class="token operator">=</span> obj<span class="token punctuation">.</span><span class="token function">fn</span><span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token punctuation">)</span>
    <span class="token keyword">delete</span> obj<span class="token punctuation">.</span>fn
    <span class="token keyword">return</span> res
  <span class="token punctuation">}</span>
  <span class="token function">f</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="apply" tabindex="-1"><a class="header-anchor" href="#apply" aria-hidden="true">#</a> apply</h2><p>apply \u548C call \u662F\u4E00\u6837\u7684\uFF0C\u53EA\u662F\u4F20\u7684\u53C2\u6570\u4E0D\u4E00\u6837\uFF0Capply \u4F20\u6570\u7EC4</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>  <span class="token class-name">Function</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">apply</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">context <span class="token operator">=</span> window<span class="token punctuation">,</span> arr</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> fn <span class="token operator">=</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token string">&#39;fn&#39;</span><span class="token punctuation">)</span>
    context<span class="token punctuation">[</span>fn<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span>

    <span class="token keyword">let</span> res<span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>arr<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      res <span class="token operator">=</span> context<span class="token punctuation">[</span>fn<span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      res <span class="token operator">=</span> context<span class="token punctuation">[</span>fn<span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token operator">...</span>arr<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">delete</span> context<span class="token punctuation">[</span>fn<span class="token punctuation">]</span>
    <span class="token keyword">return</span> res<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="bind" tabindex="-1"><a class="header-anchor" href="#bind" aria-hidden="true">#</a> bind</h2><p>\u601D\u8DEF\uFF1Abind \u5229\u7528 apply \u6765\u6539\u53D8\u6307\u9488\uFF0CObject.create \u6765\u514B\u9686\u539F\u65B9\u6CD5\u7684\u539F\u578B\u5BF9\u8C61\uFF0C\u6700\u540E\u8FD4\u56DE\u4E00\u4E2A\u65B0\u7684\u51FD\u6570</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>  <span class="token comment">/*
    1\u3001\u53EF\u4EE5\u6307\u5B9Athis
    2\u3001\u8FD4\u56DE\u4E00\u4E2A\u51FD\u6570
    3\u3001\u53EF\u4EE5\u4F20\u5165\u53C2\u6570
    4\u3001\u67EF\u91CC\u5316
    5\u3001\u4E00\u4E2A\u7ED1\u5B9A\u51FD\u6570\u4E5F\u80FD\u4F7F\u7528new\u64CD\u4F5C\u7B26\u521B\u5EFA\u5BF9\u8C61\uFF1A\u8FD9\u79CD\u884C\u4E3A\u5C31\u50CF\u628A\u539F\u51FD\u6570\u5F53\u6210\u6784\u9020\u5668\uFF0C\u63D0\u4F9B\u7684 this \u503C\u88AB\u5FFD\u7565\uFF0C\u540C\u65F6\u8C03\u7528\u65F6\u7684\u53C2\u6570\u88AB\u63D0\u4F9B\u7ED9\u6A21\u62DF\u51FD\u6570
  */</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token class-name">Function</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>bind<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">Function</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">bind</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">context<span class="token punctuation">,</span> <span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">let</span> fn <span class="token operator">=</span> <span class="token keyword">this</span>
      <span class="token keyword">let</span> <span class="token function-variable function">bound</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u6307\u5B9Athis</span>
        <span class="token keyword">return</span> <span class="token function">fn</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>
          <span class="token keyword">this</span> <span class="token keyword">instanceof</span> <span class="token class-name">bound</span> <span class="token operator">?</span> <span class="token keyword">this</span> <span class="token operator">:</span> context<span class="token punctuation">,</span> <span class="token comment">// new \u5FFD\u7565</span>
          args<span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span><span class="token operator">...</span>arguments<span class="token punctuation">)</span>
        <span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
      bound<span class="token punctuation">.</span>prototype <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>prototype<span class="token punctuation">)</span>
      <span class="token keyword">return</span> bound
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,24),o=[p];function c(l,i){return s(),a("div",null,o)}var r=n(t,[["render",c],["__file","fn.html.vue"]]);export{r as default};
