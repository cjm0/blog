import{_ as n,o as s,c as a,e as p}from"./app.544215b1.js";const e={},t=p(`<h1 id="node-js-\u591A\u8FDB\u7A0B" tabindex="-1"><a class="header-anchor" href="#node-js-\u591A\u8FDB\u7A0B" aria-hidden="true">#</a> Node.js \u591A\u8FDB\u7A0B</h1><p>Node.js \u4E3B\u7EBF\u7A0B\u662F\u5355\u7EBF\u7A0B\u7684\uFF0C\u5982\u679C\u6211\u4EEC\u4F7F\u7528 node app.js \u65B9\u5F0F\u8FD0\u884C\uFF0C\u5C31\u542F\u52A8\u4E86\u4E00\u4E2A\u8FDB\u7A0B\uFF0C\u53EA\u80FD\u5728\u4E00\u4E2A CPU \u4E2D\u8FDB\u884C\u8FD0\u7B97\uFF0C\u65E0\u6CD5\u5E94\u7528\u670D\u52A1\u5668\u7684\u591A\u6838 CPU\u3002\u4E3A\u4E86\u89E3\u51B3\u8FD9\u4E2A\u95EE\u9898\uFF0C\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528\u591A\u8FDB\u7A0B\u5206\u53D1\u7B56\u7565\uFF0C\u5373\u4E3B\u8FDB\u7A0B\u63A5\u6536\u6240\u6709\u8BF7\u6C42\uFF0C\u7136\u540E\u901A\u8FC7\u4E00\u5B9A\u7684\u8D1F\u8F7D\u5747\u8861\u7B56\u7565\u5206\u53D1\u5230\u4E0D\u540C\u7684 Node.js \u5B50\u8FDB\u7A0B\u4E2D\u3002</p><p>\u8FD9\u4E00\u5B9E\u73B0\u6709 2 \u79CD\u4E0D\u540C\u7684\u65B9\u6848\uFF1A</p><ul><li><p>\u4E3B\u8FDB\u7A0B\u76D1\u542C\u4E00\u4E2A\u7AEF\u53E3\uFF0C\u5B50\u8FDB\u7A0B\u4E0D\u76D1\u542C\u7AEF\u53E3\uFF0C\u4E3B\u8FDB\u7A0B\u901A\u8FC7\u8D1F\u8F7D\u5747\u8861\u6280\u672F\u5206\u53D1\u8BF7\u6C42\u5230\u5B50\u8FDB\u7A0B\uFF1B</p></li><li><p>\u4E3B\u8FDB\u7A0B\u548C\u5B50\u8FDB\u7A0B\u5206\u522B\u76D1\u542C\u4E0D\u540C\u7AEF\u53E3\uFF0C\u901A\u8FC7\u4E3B\u8FDB\u7A0B\u5206\u53D1\u8BF7\u6C42\u5230\u5B50\u8FDB\u7A0B\u3002</p></li></ul><p>\u7B2C\u4E00\u79CD\u65B9\u6848\u591A\u4E2A Node \u8FDB\u7A0B\u53BB\u76D1\u542C\u540C\u4E00\u4E2A\u7AEF\u53E3\uFF0C\u597D\u5904\u662F\u8FDB\u7A0B\u95F4\u901A\u4FE1\u76F8\u5BF9\u7B80\u5355\u3001\u51CF\u5C11\u4E86\u7AEF\u53E3\u7684\u8D44\u6E90\u6D6A\u8D39\uFF0C\u4F46\u662F\u8FD9\u4E2A\u65F6\u5019\u5C31\u8981\u4FDD\u8BC1\u670D\u52A1\u8FDB\u7A0B\u7684\u7A33\u5B9A\u6027\uFF0C\u7279\u522B\u662F\u5BF9 Master \u8FDB\u7A0B\u7A33\u5B9A\u6027\u8981\u6C42\u4F1A\u66F4\u9AD8\uFF0C\u7F16\u7801\u4E5F\u4F1A\u590D\u6742\u3002</p><p>\u7B2C\u4E8C\u79CD\u65B9\u6848\u5B58\u5728\u7684\u95EE\u9898\u662F\u5360\u7528\u591A\u4E2A\u7AEF\u53E3\uFF0C\u9020\u6210\u8D44\u6E90\u6D6A\u8D39\uFF0C\u7531\u4E8E\u591A\u4E2A\u5B9E\u4F8B\u662F\u72EC\u7ACB\u8FD0\u884C\u7684\uFF0C\u8FDB\u7A0B\u95F4\u901A\u4FE1\u4E0D\u592A\u597D\u505A\uFF0C\u597D\u5904\u662F\u7A33\u5B9A\u6027\u9AD8\uFF0C\u5404\u5B9E\u4F8B\u4E4B\u95F4\u65E0\u5F71\u54CD\u3002</p><p>\u5728 Node.js \u4E2D\u81EA\u5E26\u7684 Cluster \u6A21\u5757\u4F7F\u7528\u7684\u662F\u7B2C\u4E00\u79CD\u65B9\u6848\u3002</p><h2 id="cluster-\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#cluster-\u6A21\u5F0F" aria-hidden="true">#</a> cluster \u6A21\u5F0F</h2><p>cluster \u6A21\u5F0F\u5176\u5B9E\u5C31\u662F\u4E00\u4E2A\u4E3B\u8FDB\u7A0B\u548C\u591A\u4E2A\u5B50\u8FDB\u7A0B\uFF0C\u4ECE\u800C\u5F62\u6210\u4E00\u4E2A\u96C6\u7FA4\u7684\u6982\u5FF5\u3002\u6211\u4EEC\u5148\u6765\u770B\u770B cluster \u6A21\u5F0F\u7684\u5E94\u7528\u4F8B\u5B50\u3002</p><p>\u5148\u5B9E\u73B0\u4E00\u4E2A\u7B80\u5355\u7684 app.js\uFF0C\u4EE3\u7801\u5982\u4E0B\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> http <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;http&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> cluster <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;cluster&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> instances <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span> <span class="token comment">// \u542F\u52A8\u8FDB\u7A0B\u6570\u91CF</span>

<span class="token keyword">if</span> <span class="token punctuation">(</span>cluster<span class="token punctuation">.</span>isMaster<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> instances<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// \u4F7F\u7528 cluster.fork \u521B\u5EFA\u5B50\u8FDB\u7A0B</span>
    cluster<span class="token punctuation">.</span><span class="token function">fork</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u521B\u5EFA http \u670D\u52A1\uFF0C\u7B80\u5355\u8FD4\u56DE</span>
  <span class="token keyword">const</span> server <span class="token operator">=</span> http<span class="token punctuation">.</span><span class="token function">createServer</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    res<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">hello world, start with cluster </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>process<span class="token punctuation">.</span>pid<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    res<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// \u542F\u52A8\u670D\u52A1</span>
  server<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">8000</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;server start http://127.0.0.1:8000&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Worker </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>process<span class="token punctuation">.</span>pid<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> started</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u9996\u5148\u5224\u65AD\u662F\u5426\u4E3A\u4E3B\u8FDB\u7A0B\uFF1A</p><ul><li><p>\u5982\u679C\u662F\u5219\u4F7F\u7528 cluster.fork \u521B\u5EFA\u5B50\u8FDB\u7A0B\uFF1B</p></li><li><p>\u5982\u679C\u4E0D\u662F\u5219\u4E3A\u5B50\u8FDB\u7A0B require \u5177\u4F53\u7684 app.js\u3002</p></li></ul><p>\u7136\u540E\u8FD0\u884C\u4E0B\u9762\u547D\u4EE4\u542F\u52A8\u670D\u52A1\u3002</p><p><code>node cluster.js</code></p><p>\u542F\u52A8\u6210\u529F\u540E\uFF0C\u518D\u6253\u5F00\u53E6\u5916\u4E00\u4E2A\u547D\u4EE4\u884C\u7A97\u53E3\uFF0C\u591A\u6B21\u8FD0\u884C\u4EE5\u4E0B\u547D\u4EE4\uFF1A</p><p><code>curl &quot;http://127.0.0.1:8000/&quot;</code></p><p>\u53EF\u4EE5\u770B\u5230\u5982\u4E0B\u8F93\u51FA\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>hello world<span class="token punctuation">,</span> start <span class="token keyword">with</span> cluster <span class="token number">8553</span>
hello world<span class="token punctuation">,</span> start <span class="token keyword">with</span> cluster <span class="token number">8552</span>
hello world<span class="token punctuation">,</span> start <span class="token keyword">with</span> cluster <span class="token number">8553</span>
hello world<span class="token punctuation">,</span> start <span class="token keyword">with</span> cluster <span class="token number">8552</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u540E\u9762\u7684\u8FDB\u7A0B ID \u662F\u6BD4\u8F83\u6709\u89C4\u5F8B\u7684\u968F\u673A\u6570\uFF0C\u6709\u65F6\u5019\u8F93\u51FA 8553\uFF0C\u6709\u65F6\u5019\u8F93\u51FA 8552\uFF0C8553 \u548C 8552 \u5C31\u662F\u4E0A\u9762 fork \u51FA\u6765\u7684\u4E24\u4E2A\u5B50\u8FDB\u7A0B\uFF0C\u4E0B\u9762\u6211\u4EEC\u6765\u770B\u4E0B\u4E3A\u4EC0\u4E48\u662F\u8FD9\u6837\u7684\u3002</p><h2 id="\u539F\u7406" tabindex="-1"><a class="header-anchor" href="#\u539F\u7406" aria-hidden="true">#</a> \u539F\u7406</h2><p>\u9996\u5148\u6211\u4EEC\u9700\u8981\u641E\u6E05\u695A\u4E24\u4E2A\u95EE\u9898\uFF1A</p><ul><li><p>Node.js \u7684 cluster \u662F\u5982\u4F55\u505A\u5230\u591A\u4E2A\u8FDB\u7A0B\u76D1\u542C\u4E00\u4E2A\u7AEF\u53E3\u7684\uFF1B</p></li><li><p>Node.js \u662F\u5982\u4F55\u8FDB\u884C\u8D1F\u8F7D\u5747\u8861\u8BF7\u6C42\u5206\u53D1\u7684\u3002</p></li></ul><h3 id="\u4E3B\u8FDB\u7A0B\u5224\u65AD" tabindex="-1"><a class="header-anchor" href="#\u4E3B\u8FDB\u7A0B\u5224\u65AD" aria-hidden="true">#</a> \u4E3B\u8FDB\u7A0B\u5224\u65AD</h3><p>\u5728 cluster \u6A21\u5F0F\u4E2D\u5B58\u5728 master \u548C worker \u7684\u6982\u5FF5\uFF0Cmaster \u662F\u4E3B\u8FDB\u7A0B\uFF0Cworker \u662F\u5B50\u8FDB\u7A0B\u3002</p><p>\u5224\u65AD\u4E3B\u8FDB\u7A0B\u8FD8\u662F\u5B50\u8FDB\u7A0B\u7684\u903B\u8F91\u5728\u6E90\u7801\u4E2D\uFF0C\u5982\u4E0B\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token string">&#39;use strict&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> childOrPrimary <span class="token operator">=</span> <span class="token string">&#39;NODE_UNIQUE_ID&#39;</span> <span class="token keyword">in</span> process<span class="token punctuation">.</span>env <span class="token operator">?</span> <span class="token string">&#39;child&#39;</span> <span class="token operator">:</span> <span class="token string">&#39;primary&#39;</span><span class="token punctuation">;</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">internal/cluster/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>childOrPrimary<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u901A\u8FC7\u8FDB\u7A0B\u73AF\u5883\u53D8\u91CF\u8BBE\u7F6E\u6765\u5224\u65AD\uFF1A</p><ul><li><p>\u5982\u679C\u6CA1\u6709\u8BBE\u7F6E\u5219\u4E3A master \u8FDB\u7A0B\uFF1B</p></li><li><p>\u5982\u679C\u6709\u8BBE\u7F6E\u5219\u4E3A\u5B50\u8FDB\u7A0B\u3002</p></li></ul><p>\u56E0\u6B64\u7B2C\u4E00\u6B21\u8C03\u7528 cluster \u6A21\u5757\u662F master \u8FDB\u7A0B\uFF0C\u800C\u540E\u90FD\u662F\u5B50\u8FDB\u7A0B\u3002</p><h3 id="\u591A\u8FDB\u7A0B\u7AEF\u53E3\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#\u591A\u8FDB\u7A0B\u7AEF\u53E3\u95EE\u9898" aria-hidden="true">#</a> \u591A\u8FDB\u7A0B\u7AEF\u53E3\u95EE\u9898</h3><p>\u8FD0\u884C\u4E0A\u9762\u7684 app.js\uFF0C\u6210\u529F\u5F00\u542F\u4E86 1 \u4E2A Master \u8FDB\u7A0B\u30012 \u4E2A Worker \u8FDB\u7A0B\u3002</p><p>\u56E0\u4E3A\u7AEF\u53E3\u53EA\u6709\u4E00\u4E2A 8000\uFF0C\u6240\u4EE5\u6211\u4EEC\u8981\u6765\u770B\u4E0B\u5B83\u662F\u7531\u54EA\u4E9B\u8FDB\u7A0B\u76D1\u542C\u7684\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>lsof <span class="token operator">-</span>i<span class="token operator">:</span><span class="token number">8000</span>
node <span class="token number">8551</span> qianduanyiguozhu 23u IPv6 <span class="token number">0xb5e3cbb6deb4d65d</span> 0t0 <span class="token constant">TCP</span> <span class="token operator">*</span><span class="token operator">:</span><span class="token function">irdmi</span> <span class="token punctuation">(</span><span class="token constant">LISTEN</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u73B0\u5728\u6211\u4EEC\u77E5\u9053\u4E86\uFF0C8000 \u7AEF\u53E3\u5B83\u5E76\u4E0D\u662F\u88AB\u6240\u6709\u7684\u8FDB\u7A0B\u76D1\u542C\uFF0C\u4EC5\u53D7\u5230 Master \u8FDB\u7A0B\u76D1\u542C\u3002\u4E0B\u9762\u8BA9\u6211\u4EEC\u518D\u770B\u4E00\u4E2A\u4FE1\u606F\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>ps <span class="token operator">-</span>ef <span class="token operator">|</span> grep <span class="token number">8551</span>
<span class="token number">501</span>  <span class="token number">8552</span>  <span class="token number">8551</span>   <span class="token number">0</span>  <span class="token number">5</span><span class="token operator">:</span><span class="token number">53</span>\u4E0B\u5348 <span class="token operator">??</span>  <span class="token number">0</span><span class="token operator">:</span><span class="token number">00.10</span>
<span class="token number">501</span>  <span class="token number">8553</span>  <span class="token number">8551</span>   <span class="token number">0</span>  <span class="token number">5</span><span class="token operator">:</span><span class="token number">53</span>\u4E0B\u5348 <span class="token operator">??</span>  <span class="token number">0</span><span class="token operator">:</span><span class="token number">00.10</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u4E2A\u6E05\u695A\u5C55\u793A\u4E86 Worker \u4E0E Master \u7684\u5173\u7CFB\uFF0CMaster \u901A\u8FC7 cluster.fork() \u8FD9\u4E2A\u65B9\u6CD5\u521B\u5EFA\u7684\uFF0C\u600E\u4E48\u5B9E\u73B0\u8FDB\u7A0B\u95F4\u7AEF\u53E3\u5171\u4EAB\u5462\uFF1F</p><p>\u5728\u524D\u9762\u7684\u4F8B\u5B50\u4E2D\uFF0C\u591A\u4E2A woker \u4E2D\u521B\u5EFA\u7684 server \u76D1\u542C\u4E86\u540C\u4E2A\u7AEF\u53E3 8000\u3002\u901A\u5E38\u6765\u8BF4\uFF0C\u591A\u4E2A\u8FDB\u7A0B\u76D1\u542C\u540C\u4E2A\u7AEF\u53E3\uFF0C\u7CFB\u7EDF\u4F1A\u62A5\u9519\u3002\u4E3A\u4EC0\u4E48\u6211\u4EEC\u7684\u4F8B\u5B50\u6CA1\u95EE\u9898\u5462\uFF1F</p><p>\u79D8\u5BC6\u5728\u4E8E\uFF0Cnet \u6A21\u5757\u4E2D\uFF0C\u5BF9 server.listen() \u65B9\u6CD5\u505A\u4E86\u7279\u6B8A\u5904\u7406\u3002\u6839\u636E\u5F53\u524D\u8FDB\u7A0B\u662F master \u8FDB\u7A0B\uFF0C\u8FD8\u662F worker \u8FDB\u7A0B\uFF1A</p><ul><li><p>master \u8FDB\u7A0B\uFF1A\u5728\u8BE5\u7AEF\u53E3\u4E0A\u6B63\u5E38\u76D1\u542C\u8BF7\u6C42\u3002\uFF08\u6CA1\u505A\u7279\u6B8A\u5904\u7406\uFF09</p></li><li><p>worker \u8FDB\u7A0B\uFF1A\u521B\u5EFA server \u5B9E\u4F8B\u3002\u7136\u540E\u901A\u8FC7 send \u65B9\u6CD5\uFF0C\u5411 master \u8FDB\u7A0B\u53D1\u9001\u6D88\u606F\uFF0C\u8BA9 master \u8FDB\u7A0B\u4E5F\u521B\u5EFA server \u5B9E\u4F8B\uFF0C\u5E76\u5728\u8BE5\u7AEF\u53E3\u4E0A\u76D1\u542C\u8BF7\u6C42\u3002\u5F53\u8BF7\u6C42\u8FDB\u6765\u65F6\uFF0Cmaster \u8FDB\u7A0B\u5C06\u8BF7\u6C42\u8F6C\u53D1\u7ED9 worker \u8FDB\u7A0B\u7684 server \u5B9E\u4F8B\u3002</p></li></ul><p>\u603B\u7ED3\u5C31\u662F\uFF1A\u7AEF\u53E3\u53EA\u4F1A\u88AB\u4E3B\u8FDB\u7A0B\u7ED1\u5B9A\u76D1\u542C\u4E00\u6B21\u3002master \u8FDB\u7A0B\u76D1\u542C\u7279\u5B9A\u7AEF\u53E3\uFF0C\u5E76\u901A\u8FC7\u8D1F\u8F7D\u5747\u8861\u6280\u672F\u5C06\u5BA2\u6237\u8BF7\u6C42\u8F6C\u53D1\u7ED9\u5404 worker \u8FDB\u7A0B\u3002</p><h3 id="\u8D1F\u8F7D\u5747\u8861\u539F\u7406" tabindex="-1"><a class="header-anchor" href="#\u8D1F\u8F7D\u5747\u8861\u539F\u7406" aria-hidden="true">#</a> \u8D1F\u8F7D\u5747\u8861\u539F\u7406</h3><p>Node.js cluster \u6A21\u5757\u4F7F\u7528\u7684\u662F\u4E3B\u5B50\u8FDB\u7A0B\u65B9\u5F0F\uFF0C\u90A3\u4E48\u5B83\u662F\u5982\u4F55\u8FDB\u884C\u8D1F\u8F7D\u5747\u8861\u5904\u7406\u7684\u5462\uFF0C\u8FD9\u91CC\u4E3B\u8981\u6D89\u53CA\u4E24\u4E2A\u6A21\u5757\u3002</p><ul><li><p>round_robin_handle.js\uFF08\u975E Windows \u5E73\u53F0\u5E94\u7528\u6A21\u5F0F\uFF09\uFF0C\u8FD9\u662F\u4E00\u4E2A\u8F6E\u8BE2\u5904\u7406\u6A21\u5F0F\uFF0C\u4E5F\u5C31\u662F\u8F6E\u8BE2\u8C03\u5EA6\u5206\u53D1\u7ED9\u7A7A\u95F2\u7684\u5B50\u8FDB\u7A0B\uFF0C\u5904\u7406\u5B8C\u6210\u540E\u56DE\u5230 worker \u7A7A\u95F2\u6C60\u5B50\u4E2D\uFF0C\u8FD9\u91CC\u8981\u6CE8\u610F\u7684\u5C31\u662F\u5982\u679C\u7ED1\u5B9A\u8FC7\u5C31\u4F1A\u590D\u7528\u8BE5\u5B50\u8FDB\u7A0B\uFF0C\u5982\u679C\u6CA1\u6709\u5219\u4F1A\u91CD\u65B0\u5224\u65AD\uFF0C\u8FD9\u91CC\u53EF\u4EE5\u901A\u8FC7\u4E0A\u9762\u7684 app.js \u4EE3\u7801\u6765\u6D4B\u8BD5\uFF0C\u7528\u6D4F\u89C8\u5668\u53BB\u8BBF\u95EE\uFF0C\u4F60\u4F1A\u53D1\u73B0\u6BCF\u6B21\u8C03\u7528\u7684\u5B50\u8FDB\u7A0B ID \u90FD\u4F1A\u4E0D\u53D8\u3002</p></li><li><p>shared_handle.js\uFF08 Windows \u5E73\u53F0\u5E94\u7528\u6A21\u5F0F\uFF09\uFF0C\u901A\u8FC7\u5C06\u6587\u4EF6\u63CF\u8FF0\u7B26\u3001\u7AEF\u53E3\u7B49\u4FE1\u606F\u4F20\u9012\u7ED9\u5B50\u8FDB\u7A0B\uFF0C\u5B50\u8FDB\u7A0B\u901A\u8FC7\u4FE1\u606F\u521B\u5EFA\u76F8\u5E94\u7684 SocketHandle / ServerHandle\uFF0C\u7136\u540E\u8FDB\u884C\u76F8\u5E94\u7684\u7AEF\u53E3\u7ED1\u5B9A\u548C\u76D1\u542C\u3001\u5904\u7406\u8BF7\u6C42\u3002</p></li></ul>`,44),o=[t];function c(l,i){return s(),a("div",null,o)}var u=n(e,[["render",c],["__file","process.html.vue"]]);export{u as default};
