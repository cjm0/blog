import{_ as i,o as p,c as t,b as s,a as e,d as a,e as o,r as c}from"./app.544215b1.js";var r="/blog/assets/sh1.bff49fc5.jpg",d="/blog/assets/sh2.69819380.jpg",u="/blog/assets/sh3.d3bc77a2.jpg",l="/blog/assets/while.8159dde0.jpg",k="/blog/assets/for.0318d284.jpg",b="/blog/assets/sh4.29730505.jpg";const v={},m=s("h1",{id:"shell-\u811A\u672C\u7F16\u5199\u6559\u7A0B",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#shell-\u811A\u672C\u7F16\u5199\u6559\u7A0B","aria-hidden":"true"},"#"),a(" Shell \u811A\u672C\u7F16\u5199\u6559\u7A0B")],-1),h=s("p",null,"Shell \u811A\u672C\u4E0E Windows/Dos \u4E0B\u7684\u6279\u5904\u7406\u76F8\u4F3C\uFF0C\u4E5F\u5C31\u662F\u7528\u5404\u7C7B\u547D\u4EE4\u9884\u5148\u653E\u5165\u5230\u4E00\u4E2A\u6587\u4EF6\u4E2D\uFF0C\u65B9\u4FBF\u4E00\u6B21\u6027\u6267\u884C\u7684\u4E00\u4E2A\u7A0B\u5E8F\u6587\u4EF6\uFF0C\u4E3B\u8981\u662F\u65B9\u4FBF\u7BA1\u7406\u5458\u8FDB\u884C\u8BBE\u7F6E\u6216\u8005\u7BA1\u7406\u7528\u7684\u3002\u4F46\u662F\u5B83\u6BD4 Windows \u4E0B\u7684\u6279\u5904\u7406\u66F4\u5F3A\u5927\uFF0C\u6BD4\u7528\u5176\u4ED6\u7F16\u7A0B\u7A0B\u5E8F\u7F16\u8F91\u7684\u7A0B\u5E8F\u6548\u7387\u66F4\u9AD8\uFF0C\u5B83\u4F7F\u7528\u4E86 Linux/Unix \u4E0B\u7684\u547D\u4EE4\u3002",-1),g=a("\u66F4\u660E\u767D\u5730\u6765\u8BF4\uFF0Cshell script \u5C31\u50CF\u65E9\u671F dos \u5E74\u4EE3\u7684 "),f={href:"https://baike.baidu.com/item/%E6%89%B9%E5%A4%84%E7%90%86/1448600?fromtitle=.bat&fromid=6476412",target:"_blank",rel:"noopener noreferrer"},$=a(".bat"),q=a("\uFF0C\u6700\u7B80\u5355\u7684\u529F\u80FD\u5C31\u662F\u5C06\u8BB8\u591A\u6307\u4EE4\u6C47\u6574\u5199\u4E00\u8D77\uFF0C\u8BA9\u4F7F\u7528\u8005\u5F88\u5BB9\u6613\u5730\u5C31\u80FD\u591F\u4E00\u4E2A\u64CD\u4F5C\u6267\u884C\u591A\u4E2A\u547D\u4EE4\uFF0C\u800C shell script \u66F4\u662F\u63D0\u4F9B\u4E86\u6570\u7EC4\uFF0C\u5FAA\u73AF\uFF0C\u6761\u4EF6\u4EE5\u53CA\u903B\u8F91\u5224\u65AD\u7B49\u91CD\u8981\u529F\u80FD\uFF0C\u8BA9\u4F7F\u7528\u8005\u53EF\u4EE5\u76F4\u63A5\u4EE5 shell \u6765\u5199\u7A0B\u5E8F\uFF0C\u800C\u4E0D\u5FC5\u4F7F\u7528\u7C7B\u4F3C C \u7A0B\u5E8F\u8BED\u8A00\u7B49\u4F20\u7EDF\u7A0B\u5E8F\u7F16\u5199\u7684\u8BED\u6CD5\u3002"),_={href:"https://blog.csdn.net/qq_18297675/article/details/52693464",target:"_blank",rel:"noopener noreferrer"},w=a("\u8BED\u6CD5\u53C2\u8003"),x=o(`<h2 id="\u6267\u884C\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u6267\u884C\u547D\u4EE4" aria-hidden="true">#</a> \u6267\u884C\u547D\u4EE4</h2><p>\u65B9\u6CD5\u4E00\uFF1A <code>bash test.sh</code></p><p>\u65B9\u6CD5\u4E8C\uFF1A \u7ED9 test.sh \u6587\u4EF6\u589E\u52A0\u53EF\u6267\u884C\u6743\u9650</p><p><code>chmod 755 test.sh</code></p><p><code>./test.sh</code></p><h2 id="\u8BED\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u8BED\u6CD5" aria-hidden="true">#</a> \u8BED\u6CD5</h2><h3 id="\u57FA\u7840\u8BED\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u57FA\u7840\u8BED\u6CD5" aria-hidden="true">#</a> \u57FA\u7840\u8BED\u6CD5</h3><ol><li><p><code>#!/bin/bash</code> #! \u662F\u4E00\u4E2A\u7EA6\u5B9A\u7684\u6807\u8BB0\uFF0C\u5B83\u544A\u8BC9\u7CFB\u7EDF\u8FD9\u4E2A\u811A\u672C\u9700\u8981\u4EC0\u4E48\u89E3\u91CA\u5668\u6765\u6267\u884C\uFF0C\u5373\u4F7F\u7528\u54EA\u4E00\u79CD Shell</p></li><li><p><code>set -e</code> \u786E\u4FDD\u811A\u672C\u629B\u51FA\u9047\u5230\u7684\u9519\u8BEF</p></li><li><p>\u6570\u636E\u7C7B\u578B\uFF1A\u53EA\u6709\u5B57\u7B26\u4E32\u548C\u6574\u578B\u4E24\u79CD</p></li><li><p>\u4F7F\u7528\u53CC\u5F15\u53F7</p></li></ol><h3 id="\u53D8\u91CF" tabindex="-1"><a class="header-anchor" href="#\u53D8\u91CF" aria-hidden="true">#</a> \u53D8\u91CF</h3><p>shell \u7684\u53D8\u91CF\u8D4B\u503C\u7684\u65F6\u5019\u4E0D\u7528\u5E26 <code>$</code>\uFF0C\u800C\u4F7F\u7528\u6216\u8005\u8F93\u51FA\u7684\u65F6\u5019\u8981\u5E26 <code>$</code>\u3002\u52A0\u51CF\u4E58\u9664\u7684\u65F6\u5019\u8981\u52A0\u4E24\u5C42\u5C0F\u62EC\u53F7\u3002\u62EC\u53F7\u5916\u9762\u8981\u6709\u4E00\u4E2A <code>$</code>\uFF0C\u62EC\u53F7\u91CC\u9762\u7684\u53D8\u91CF\u53EF\u4EE5\u4E0D\u7528 <code>$</code>\u3002\u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0C\u53D8\u91CF\u8D4B\u503C\uFF0C\u7B49\u53F7\u4E24\u8FB9\u4E0D\u80FD\u6709\u7A7A\u683C\uFF0C\u5426\u5219\u4F1A\u88AB\u89E3\u6790\u6210\u547D\u4EE4\uFF0C\u62A5\u9519\u65E0\u6B64\u547D\u4EE4\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u53D8\u91CF</span>
<span class="token assign-left variable">a</span><span class="token operator">=</span><span class="token number">10</span>
<span class="token assign-left variable">b</span><span class="token operator">=</span><span class="token number">10</span>
<span class="token assign-left variable">c</span><span class="token operator">=</span><span class="token string">&quot;this is test&quot;</span>
<span class="token assign-left variable">d</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$((</span>a<span class="token operator">+</span>b<span class="token variable">))</span></span>

<span class="token builtin class-name">echo</span> <span class="token variable">$a</span>
<span class="token builtin class-name">echo</span> <span class="token variable">$c</span>
<span class="token builtin class-name">echo</span> <span class="token variable">$d</span>
<span class="token builtin class-name">echo</span> <span class="token variable"><span class="token variable">$((</span>a<span class="token operator">+</span>b<span class="token variable">))</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+r+`" alt="\u8F93\u51FA"></p><h3 id="\u8868\u8FBE\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u8868\u8FBE\u5F0F" aria-hidden="true">#</a> \u8868\u8FBE\u5F0F</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token assign-left variable">str</span><span class="token operator">=</span><span class="token string">&quot;a b c d e f g h i j&quot;</span>

<span class="token builtin class-name">echo</span> <span class="token variable">\${str}</span>          <span class="token comment">#\u6E90\u5B57\u7B26\u4E32</span>
<span class="token builtin class-name">echo</span> <span class="token variable">\${<span class="token operator">#</span>str}</span>         <span class="token comment">#\u5B57\u7B26\u4E32\u957F\u5EA6\uFF0C\u5305\u542B\u7A7A\u683C</span>
<span class="token builtin class-name">echo</span> <span class="token variable">\${str<span class="token operator">:</span>5}</span>        <span class="token comment">#\u622A\u53D6\u4ECE\u7B2C\u4E94\u4E2A\u540E\u9762\u5F00\u59CB\u5230\u6700\u540E\u7684\u5B57\u7B26</span>
<span class="token builtin class-name">echo</span> <span class="token variable">\${str<span class="token operator">:</span>5<span class="token operator">:</span>2}</span>      <span class="token comment">#\u622A\u53D6\u4ECE\u7B2C\u4E94\u4E2A\u540E\u9762\u5F00\u59CB\u76842\u4E2A\u5B57\u7B26</span>
<span class="token builtin class-name">echo</span> <span class="token variable">\${str<span class="token operator">#</span>a*f}</span>      <span class="token comment">#\u4ECE\u5F00\u5934\u5220\u9664a\u5230f\u7684\u5B57\u7B26</span>
<span class="token builtin class-name">echo</span> <span class="token variable">\${str<span class="token operator">##</span>a*}</span>      <span class="token comment">#\u4ECE\u5F00\u5934\u5220\u9664a\u4EE5\u540E\u7684\u5B57\u7B26</span>
<span class="token builtin class-name">echo</span> <span class="token variable">\${str<span class="token operator">%</span>f*j}</span>      <span class="token comment">#\u4ECE\u7ED3\u5C3E\u5220\u9664f\u5230j\u7684\u5B57\u7B26</span>
<span class="token builtin class-name">echo</span> <span class="token variable">\${str<span class="token operator">%%</span>*j}</span>      <span class="token comment">#\u4ECE\u7ED3\u5C3E\u5220\u9664j\u524D\u9762\u7684\u6240\u6709\u5B57\u7B26\u5305\u62ECj</span>
<span class="token builtin class-name">echo</span> <span class="token variable">\${str}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+d+`" alt="\u8F93\u51FA"></p><h3 id="\u5224\u65AD" tabindex="-1"><a class="header-anchor" href="#\u5224\u65AD" aria-hidden="true">#</a> \u5224\u65AD</h3><p>[ ] \u91CC\u9762\u6BCF\u4E2A\u53D8\u91CF\u4E4B\u95F4\u90FD\u8981\u6709\u7A7A\u683C</p><p><code>-gt &gt;</code> <code>-ge &gt;= </code> <code>-lt &lt; </code> <code>-le &lt;= </code> <code>-eq =</code> <code>-ne !=</code></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u5224\u65AD test \u6216 []</span>
<span class="token assign-left variable">num1</span><span class="token operator">=</span><span class="token number">10</span>
<span class="token assign-left variable">num2</span><span class="token operator">=</span><span class="token number">10</span>

<span class="token builtin class-name">test</span> <span class="token variable">$num1</span> -eq <span class="token variable">$num2</span> <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;num1 == num2&quot;</span> <span class="token operator">||</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;num1 != num2&quot;</span>

<span class="token punctuation">[</span> <span class="token variable">$num1</span> -eq <span class="token variable">$num2</span> <span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;num1 == num2&quot;</span> <span class="token operator">||</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;num1 != num2&quot;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+u+`" alt="\u8F93\u51FA"></p><h3 id="\u6761\u4EF6\u8BED\u53E5" tabindex="-1"><a class="header-anchor" href="#\u6761\u4EF6\u8BED\u53E5" aria-hidden="true">#</a> \u6761\u4EF6\u8BED\u53E5</h3><p>\u683C\u5F0F\uFF1Aif \u6761\u4EF6 ; then \u7ED3\u679C fi \uFF0C\u6700\u540E\u9762\u4E00\u5B9A\u8981\u6709 fi \u3002\u5728 shell \u811A\u672C\u91CC\u9762\uFF0C\u63A7\u5236\u5206\u652F\u7ED3\u6784\u7ED3\u675F\u90FD\u8981\u548C\u5F00\u5934\u7684\u5355\u8BCD\u76F8\u53CD\uFF0C\u4F8B\u5982\uFF0C<code>if &lt;\u2013&gt; fi</code>\uFF0C<code>case &lt;\u2013&gt; esac</code>\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token assign-left variable">grades</span><span class="token operator">=</span><span class="token number">70</span>

<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$grades</span> -ge <span class="token number">90</span> <span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">[</span> <span class="token variable">$grades</span> -le <span class="token number">100</span> <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;Your grade is excellent.&quot;</span>
<span class="token keyword">elif</span> <span class="token punctuation">[</span> <span class="token variable">$grades</span> -ge <span class="token number">80</span> <span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">[</span> <span class="token variable">$grades</span> -le <span class="token number">89</span> <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;Your grade is good.&quot;</span>
<span class="token keyword">elif</span> <span class="token punctuation">[</span> <span class="token variable">$grades</span> -ge <span class="token number">70</span> <span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">[</span> <span class="token variable">$grades</span> -le <span class="token number">79</span> <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;Your grade is middle.&quot;</span>
<span class="token keyword">elif</span> <span class="token punctuation">[</span> <span class="token variable">$grades</span> -ge <span class="token number">60</span> <span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">[</span> <span class="token variable">$grades</span> -le <span class="token number">69</span> <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;Your grade is passing.&quot;</span>
<span class="token keyword">else</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;Your grade is badly.&quot;</span>
<span class="token keyword">fi</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5FAA\u73AF\u8BED\u53E5" tabindex="-1"><a class="header-anchor" href="#\u5FAA\u73AF\u8BED\u53E5" aria-hidden="true">#</a> \u5FAA\u73AF\u8BED\u53E5</h3><h4 id="while-\u8BED\u53E5" tabindex="-1"><a class="header-anchor" href="#while-\u8BED\u53E5" aria-hidden="true">#</a> while \u8BED\u53E5</h4><p>while \u8BED\u53E5\u662F\u53EA\u8981\u6761\u4EF6\u4E3A\u771F\u5C31\u6267\u884C\u4E0B\u9762\u8BED\u53E5\u3002\u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0C\u8FD9\u91CC\u7684\u6761\u4EF6\u9664\u4E86 while true \u53EF\u4EE5\u8FD9\u6837\u5199\uFF0C\u5176\u5B83\u7684\u6761\u4EF6\u90FD\u8981\u7528 test \u6216\u8005 [ ] \u6765\u5224\u65AD</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token assign-left variable">i</span><span class="token operator">=</span><span class="token variable">$1</span>
<span class="token keyword">while</span> <span class="token punctuation">[</span> <span class="token variable">$i</span> -gt <span class="token number">0</span> <span class="token punctuation">]</span>
<span class="token keyword">do</span>
<span class="token builtin class-name">echo</span> <span class="token variable">$i</span>
<span class="token variable"><span class="token punctuation">((</span>i<span class="token operator">--</span><span class="token punctuation">))</span></span>
<span class="token keyword">done</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+l+`" alt="\u8F93\u51FA"></p><h4 id="until-\u8BED\u53E5" tabindex="-1"><a class="header-anchor" href="#until-\u8BED\u53E5" aria-hidden="true">#</a> until \u8BED\u53E5</h4><p>until \u8BED\u53E5\u662F\u53EA\u8981\u6761\u4EF6\u4E3A\u5047\u5C31\u6267\u884C\u4E0B\u5217\u8BED\u53E5\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token assign-left variable">i</span><span class="token operator">=</span><span class="token variable">$1</span>
<span class="token keyword">until</span> <span class="token punctuation">[</span> <span class="token variable">$i</span> -le <span class="token number">0</span> <span class="token punctuation">]</span>
<span class="token keyword">do</span>
<span class="token builtin class-name">echo</span> <span class="token variable">$i</span>
<span class="token variable"><span class="token punctuation">((</span>i<span class="token operator">--</span><span class="token punctuation">))</span></span>
<span class="token keyword">done</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+l+`" alt="\u8F93\u51FA"></p><h4 id="for-\u8BED\u53E5" tabindex="-1"><a class="header-anchor" href="#for-\u8BED\u53E5" aria-hidden="true">#</a> for \u8BED\u53E5</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token assign-left variable">a</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token function">seq</span> <span class="token number">4</span> <span class="token number">10</span><span class="token variable">\`</span></span>

<span class="token builtin class-name">echo</span> <span class="token variable">$a</span>

<span class="token keyword">for</span> <span class="token for-or-select variable">i</span> <span class="token keyword">in</span> <span class="token variable"><span class="token variable">\`</span><span class="token function">seq</span> <span class="token number">4</span> <span class="token number">10</span><span class="token variable">\`</span></span> <span class="token comment">#seq\u662F\u4E00\u4E2A\u547D\u4EE4\uFF0C\u987A\u5E8F\u751F\u6210\u4E00\u4E32\u6570\u5B57\u6216\u8005\u5B57\u7B26</span>
<span class="token keyword">do</span>
   <span class="token builtin class-name">echo</span> <span class="token variable">$i</span>
<span class="token keyword">done</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+k+`" alt="\u8F93\u51FA"></p><h3 id="\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#\u51FD\u6570" aria-hidden="true">#</a> \u51FD\u6570</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">funcName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    \u8BED\u53E5
    <span class="token punctuation">[</span><span class="token keyword">return</span> \u8FD4\u56DE\u503C<span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD4\u56DE\u503C\u662F\u53EF\u9009\u7684\uFF0C\u5982\u679C\u6CA1\u6709\u663E\u793A return \u5219\u9ED8\u8BA4\u8FD4\u56DE\u6700\u540E\u4E00\u6761\u8BED\u53E5\u6267\u884C\u7684\u7ED3\u679C\u3002</p><p>Shell \u51FD\u6570\u8FD4\u56DE\u503C\u53EA\u80FD\u662F\u6574\u6570\uFF0C\u4E00\u822C\u7528\u6765\u8868\u793A\u51FD\u6570\u6267\u884C\u6210\u529F\u4E0E\u5426\uFF0C0\u8868\u793A\u6210\u529F\uFF0C\u5176\u4ED6\u503C\u8868\u793A\u5931\u8D25\u3002\u5982\u679C return \u5176\u4ED6\u6570\u636E\uFF0C\u6BD4\u5982\u4E00\u4E2A\u5B57\u7B26\u4E32\uFF0C\u5F80\u5F80\u4F1A\u5F97\u5230\u9519\u8BEF\u63D0\u793A\uFF1A<code>numeric argument required</code>\u3002</p><p>\u5982\u679C\u4E00\u5B9A\u8981\u8BA9\u51FD\u6570\u8FD4\u56DE\u5B57\u7B26\u4E32\uFF0C\u90A3\u4E48\u53EF\u4EE5\u5148\u5B9A\u4E49\u4E00\u4E2A\u53D8\u91CF\uFF0C\u7528\u6765\u63A5\u6536\u51FD\u6570\u7684\u8BA1\u7B97\u7ED3\u679C\uFF0C\u811A\u672C\u5728\u9700\u8981\u7684\u65F6\u5019\u8BBF\u95EE\u8FD9\u4E2A\u53D8\u91CF\u6765\u83B7\u5F97\u51FD\u6570\u8FD4\u56DE\u503C\u3002</p><p>\u51FD\u6570\u53C2\u6570\u4ECE <code>$1</code> \u5230 <code>$n</code>\uFF0C<code>$0</code> \u662F\u6587\u4EF6\u540D\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u6253\u5370\u6570\u5B57</span>
<span class="token function-name function">printNum</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
   <span class="token builtin class-name">echo</span> <span class="token variable">$1</span>
<span class="token punctuation">}</span>

<span class="token keyword">for</span> <span class="token for-or-select variable">i</span> <span class="token keyword">in</span> <span class="token variable"><span class="token variable">\`</span><span class="token function">seq</span> <span class="token number">2</span> <span class="token number">8</span><span class="token variable">\`</span></span> <span class="token comment">#seq\u662F\u4E00\u4E2A\u547D\u4EE4\uFF0C\u987A\u5E8F\u751F\u6210\u4E00\u4E32\u6570\u5B57\u6216\u8005\u5B57\u7B26</span>
<span class="token keyword">do</span>
printNum <span class="token variable">$i</span>
<span class="token keyword">done</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u4F20\u53C2" tabindex="-1"><a class="header-anchor" href="#\u4F20\u53C2" aria-hidden="true">#</a> \u4F20\u53C2</h2><p>\u91C7\u7528 <code>$0</code> , <code>$1</code> , <code>$2</code> ...\u7B49\u65B9\u5F0F\u83B7\u53D6\u811A\u672C\u547D\u4EE4\u884C\u4F20\u5165\u7684\u53C2\u6570\uFF0C<code>$0</code> \u83B7\u53D6\u5230\u7684\u662F\u811A\u672C\u8DEF\u5F84\u4EE5\u53CA\u811A\u672C\u540D\uFF0C\u540E\u9762\u6309\u987A\u5E8F\u83B7\u53D6\u53C2\u6570\uFF0C\u5F53\u53C2\u6570\u8D85\u8FC710\u4E2A\u65F6(\u5305\u62EC10\u4E2A)\uFF0C\u9700\u8981\u4F7F\u7528 <code>\${10}</code>, <code>\${11}</code> ...\u624D\u80FD\u83B7\u53D6\u5230\u53C2\u6570\uFF0C\u4F46\u662F\u4E00\u822C\u5F88\u5C11\u4F1A\u8D85\u8FC710\u4E2A\u53C2\u6570\u7684\u60C5\u51B5\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;\u811A\u672C\u540D<span class="token variable">$0</span>&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;\u7B2C\u4E00\u4E2A\u53C2\u6570<span class="token variable">$1</span>&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;\u7B2C\u4E8C\u4E2A\u53C2\u6570<span class="token variable">$2</span>&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;\u7B2C\u4E09\u4E2A\u53C2\u6570<span class="token variable">$3</span>&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;\u7B2C\u56DB\u4E2A\u53C2\u6570<span class="token variable">$4</span>&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;\u7B2C\u4E94\u4E2A\u53C2\u6570<span class="token variable">$5</span>&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;\u7B2C\u516D\u4E2A\u53C2\u6570<span class="token variable">$6</span>&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;\u7B2C\u4E03\u4E2A\u53C2\u6570<span class="token variable">$7</span>&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;\u7B2C\u516B\u4E2A\u53C2\u6570<span class="token variable">$8</span>&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;\u7B2C\u4E5D\u4E2A\u53C2\u6570<span class="token variable">$9</span>&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;\u7B2C\u5341\u4E2A\u53C2\u6570<span class="token variable">$10</span>&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;\u7B2C\u5341\u4E2A\u53C2\u6570<span class="token variable">\${10}</span>&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+b+'" alt="\u8F93\u51FA"></p>',46);function y(j,N){const n=c("ExternalLinkIcon");return p(),t("div",null,[m,h,s("p",null,[g,s("a",f,[$,e(n)]),q,s("a",_,[w,e(n)])]),x])}var S=i(v,[["render",y],["__file","sh.html.vue"]]);export{S as default};
