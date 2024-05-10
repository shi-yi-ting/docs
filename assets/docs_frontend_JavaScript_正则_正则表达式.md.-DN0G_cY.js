import{_ as s,c as n,o as a,U as p,cI as l,cJ as e,cK as i,cL as t,cM as c,cN as o}from"./chunks/framework.FpOEJISx.js";const _=JSON.parse('{"title":"一. 正则表达式","description":"","frontmatter":{},"headers":[],"relativePath":"docs/frontend/JavaScript/正则/正则表达式.md","filePath":"docs/frontend/JavaScript/正则/正则表达式.md"}'),r={name:"docs/frontend/JavaScript/正则/正则表达式.md"},g=p('<h1 id="一-正则表达式" tabindex="-1">一. 正则表达式 <a class="header-anchor" href="#一-正则表达式" aria-label="Permalink to &quot;一. 正则表达式&quot;">​</a></h1><h2 id="_1-1-什么正则表达式" tabindex="-1">1.1 什么正则表达式 <a class="header-anchor" href="#_1-1-什么正则表达式" aria-label="Permalink to &quot;1.1 什么正则表达式&quot;">​</a></h2><p>正则表达式（Regular Expression ）是用于匹配字符串中字符组合的模式。在JavaScript中，正则表达式也是对象。</p><p>正则表通常被用来检索、替换那些符合某个模式（规则）的文本，例如验证表单：用户名表单只能输入英文字母、数字或者下划线，昵称输入框中可以输入中文(匹配)。此外，正则表达式还常用于过滤掉页面内容中的一些敏感词(替换)，或从字符串中获取我们想要的特定部分(提取)等。</p><p>其他语言也会使用正则表达式，本阶段我们主要是利用JavaScript 正则表达式完成表单验证。</p><h2 id="_1-2-正则表达式的特点" tabindex="-1">1.2 正则表达式的特点 <a class="header-anchor" href="#_1-2-正则表达式的特点" aria-label="Permalink to &quot;1.2 正则表达式的特点&quot;">​</a></h2><ol><li>灵活性、逻辑性和功能性非常的强。</li><li>可以迅速地用极简单的方式达到字符串的复杂控制。</li><li>对于刚接触的人来说，比较晦涩难懂。比如：^\\w+([-+.]\\w+)<em>@\\w+([-.]\\w+)</em>.\\w+([-.]\\w+)*$</li><li>实际开发,一般都是直接复制写好的正则表达式. 但是要求会使用正则表达式并且根据实际情况修改正则表达式. 比如用户名: /^[a-z0-9_-]{3,16}$/</li></ol><h2 id="_1-3正则表达式的作用" tabindex="-1">1.3正则表达式的作用 <a class="header-anchor" href="#_1-3正则表达式的作用" aria-label="Permalink to &quot;1.3正则表达式的作用&quot;">​</a></h2><p>正则表达式是匹配模式，要么匹配字符，要么匹配位置</p><h3 id="_1-3-1什么是位置" tabindex="-1">1.3.1什么是位置 <a class="header-anchor" href="#_1-3-1什么是位置" aria-label="Permalink to &quot;1.3.1什么是位置&quot;">​</a></h3><p>咱们可以和空字符串进行类比, 字符的首尾、间隙都可以用空字符串进行连接。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&#39;hello&#39; === &#39;&#39; + &#39;h&#39; + &#39;&#39; + &#39;e&#39; + &#39;&#39; + &#39;l&#39; + &#39;&#39; +  &#39;l&#39; + &#39;&#39; + &#39;o&#39; + &#39;&#39;</span></span></code></pre></div><p><img src="'+l+'" alt="Alt Text"></p><p><img src="'+e+'" alt="Alt Text"></p><h3 id="_1-3-2有哪些位置" tabindex="-1">1.3.2有哪些位置 <a class="header-anchor" href="#_1-3-2有哪些位置" aria-label="Permalink to &quot;1.3.2有哪些位置&quot;">​</a></h3><ol><li>正则中常用来表示位置的符号主要有：^、$、（?=p）、(?!p)、(?&lt;=p)、(?&lt;!p)、\\b、\\B</li></ol><ul><li>^：匹配开头</li><li>$：匹配结尾</li><li>（?=p）：符合p子模式前面的那个位置</li><li>(?!p)：（?=p）匹配到的位置之外的位置都属于(?!p)</li><li>(?&lt;=p)：符合p子模式后面的那个位置</li><li>(?&lt;!p)：除了(?&lt;=p)位置之外的所有位置</li><li>\\b：单词的边界，具体讲有三点规则：① \\w和\\W之间的位置，② ^与\\w之间的位置，③ \\w与$之间的位置</li></ul><p><img src="'+i+'" alt="Alt Text"></p><ul><li>\\B：也就是\\b反着来的意思：① \\w与\\w之间的位置，② \\W与\\W之间的位置，③^与\\W之间的位置，④\\W与$之间的位置</li></ul><p><img src="'+t+`" alt="Alt Text"></p><h1 id="二-正则表达式在js中的使用" tabindex="-1">二. 正则表达式在js中的使用 <a class="header-anchor" href="#二-正则表达式在js中的使用" aria-label="Permalink to &quot;二. 正则表达式在js中的使用&quot;">​</a></h1><h2 id="_2-1通过构造函数的形式创建一个正则规则" tabindex="-1">2.1通过构造函数的形式创建一个正则规则 <a class="header-anchor" href="#_2-1通过构造函数的形式创建一个正则规则" aria-label="Permalink to &quot;2.1通过构造函数的形式创建一个正则规则&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>通过构造函数的形式创建一个正则规则</span></span>
<span class="line"><span>var reg = new RegExp(&#39;houdun&#39;);</span></span>
<span class="line"><span>var str = &#39;www.houdunren.com&#39;;</span></span>
<span class="line"><span>var result = reg.test(str); // true</span></span></code></pre></div><h2 id="_2-2通过字面量形式创建" tabindex="-1">2.2通过字面量形式创建 <a class="header-anchor" href="#_2-2通过字面量形式创建" aria-label="Permalink to &quot;2.2通过字面量形式创建&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>通过字面量的形式创建正则规则</span></span>
<span class="line"><span>var reg = /houdun/;</span></span>
<span class="line"><span>var str = &#39;www.houdunren.com&#39;;</span></span>
<span class="line"><span>// 用正则规则去匹配字符串</span></span>
<span class="line"><span>var result = reg.test(str);</span></span>
<span class="line"><span>console.log(&#39;result&#39;, result)</span></span></code></pre></div><h2 id="_2-3栗子" tabindex="-1">2.3栗子 <a class="header-anchor" href="#_2-3栗子" aria-label="Permalink to &quot;2.3栗子&quot;">​</a></h2><h3 id="_2-3-1小栗子" tabindex="-1">2.3.1小栗子 <a class="header-anchor" href="#_2-3-1小栗子" aria-label="Permalink to &quot;2.3.1小栗子&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// 正则表达式里面不需要加引号，不管是数字型还是字符串型</span></span>
<span class="line"><span>// 只要字符串中有三位字符链接在一起且满足：</span></span>
<span class="line"><span>// 只要包含有abc这个字符串返回的都是true</span></span>
<span class="line"><span>let reg01 = /abc/</span></span>
<span class="line"><span>console.log(reg01.test(&#39;a&#39;)) // false</span></span>
<span class="line"><span>console.log(reg01.test(&#39;b&#39;)) // false</span></span>
<span class="line"><span>console.log(reg01.test(&#39;c&#39;)) // false</span></span>
<span class="line"><span>console.log(reg01.test(&#39;abc&#39;)) // true</span></span>
<span class="line"><span>console.log(reg01.test(&#39;abcdef&#39;)) // true</span></span>
<span class="line"><span>console.log(&#39;---------------------------&#39;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 只要字符串中有三位字符链接在一起且满足：</span></span>
<span class="line"><span>// 只要包含有123这个字符串返回的都是true</span></span>
<span class="line"><span>let reg02 = /123/</span></span>
<span class="line"><span>console.log(reg02.test(&#39;1&#39;)) // false</span></span>
<span class="line"><span>console.log(reg02.test(&#39;2&#39;)) // false</span></span>
<span class="line"><span>console.log(reg02.test(&#39;123&#39;)) // false</span></span>
<span class="line"><span>console.log(reg02.test(&#39;81239&#39;)) // true</span></span>
<span class="line"><span>console.log(&#39;---------------------------&#39;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 只要字符串中有四位字符链接在一起且满足：</span></span>
<span class="line"><span>// 只要包含 b 且后面连接三个数字返回的都是true</span></span>
<span class="line"><span>let reg03 = /b\\d\\d\\d/</span></span>
<span class="line"><span>console.log(reg03.test(&#39;b&#39;)) // false</span></span>
<span class="line"><span>console.log(reg03.test(&#39;b2&#39;)) // false</span></span>
<span class="line"><span>console.log(reg03.test(&#39;b123&#39;)) // true</span></span>
<span class="line"><span>console.log(reg03.test(&#39;8b1239&#39;)) // true</span></span>
<span class="line"><span>console.log(reg03.test(&#39;8ba1239&#39;)) // false</span></span>
<span class="line"><span>console.log(&#39;---------------------------&#39;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 只要字符串中有三位字符链接在一起且满足：</span></span>
<span class="line"><span>// 只要包含[a-zA-z0-9_]中的一个 且后面跟两个数字的都是true</span></span>
<span class="line"><span>let reg04 = /\\w\\d\\d/</span></span>
<span class="line"><span>console.log(reg04.test(&#39;123&#39;)) // true</span></span>
<span class="line"><span>console.log(reg04.test(&#39;b12&#39;)) // true</span></span>
<span class="line"><span>console.log(reg04.test(&#39;_12&#39;)) // true</span></span>
<span class="line"><span>console.log(reg04.test(&#39;a@b12&#39;)) // true</span></span>
<span class="line"><span>console.log(reg04.test(&#39;1239@&#39;)) // true</span></span>
<span class="line"><span>console.log(reg04.test(&#39;!19b&#39;)) // false</span></span>
<span class="line"><span>console.log(&#39;---------------------------&#39;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 只要字符串中有四位字符链接在一起且满足：</span></span>
<span class="line"><span>// 包含[a-zA-z0-9_]中的一个 且后面跟一个2 且后面跟两个数字的都是true</span></span>
<span class="line"><span>let reg05 = /\\w2\\d\\d/</span></span>
<span class="line"><span>console.log(reg05.test(&#39;123&#39;)) // false</span></span>
<span class="line"><span>console.log(reg05.test(&#39;1234&#39;)) // true</span></span>
<span class="line"><span>console.log(reg05.test(&#39;_1234&#39;)) // true // _123 它不包含，但是1234满足所以为true</span></span>
<span class="line"><span>console.log(reg05.test(&#39;12ad&#39;)) // false</span></span>
<span class="line"><span>console.log(reg05.test(&#39;@254&#39;)) // false</span></span>
<span class="line"><span>console.log(reg05.test(&#39;a265dasda&#39;)) // true</span></span>
<span class="line"><span>console.log(&#39;---------------------------&#39;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 只要字符串中有三位字符链接在一起且满足：</span></span>
<span class="line"><span>// 非空格 空格 非空格 的都是true</span></span>
<span class="line"><span>let reg06 = /\\S\\s\\S/ //</span></span>
<span class="line"><span>console.log(reg06.test(&#39;后盾人20 18&#39;)); // true</span></span>
<span class="line"><span>console.log(&#39;后盾人20 18&#39;.match(reg06)); // [ &#39;0 1&#39;, index: 4, input: &#39;后盾人20 18&#39;, groups: undefined ]</span></span></code></pre></div><h3 id="_2-3-2-边界符" tabindex="-1">2.3.2.边界符 ^ $ <a class="header-anchor" href="#_2-3-2-边界符" aria-label="Permalink to &quot;2.3.2.边界符  ^  $&quot;">​</a></h3><ul><li>^：表示匹配行首的文本（以谁开始）</li><li>$：表示匹配行尾的文本（以谁结束）</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// 边界符 ^ $</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 只要包含有abc这个字符串（三个字符必须挨在一起）返回的都是true</span></span>
<span class="line"><span>var reg01 = /abc/</span></span>
<span class="line"><span>console.log(reg01.test(&#39;abc&#39;)); // true</span></span>
<span class="line"><span>console.log(reg01.test(&#39;abcd&#39;)); // true</span></span>
<span class="line"><span>console.log(reg01.test(&#39;aabcd&#39;)); // true</span></span>
<span class="line"><span>console.log(reg01.test(&#39;absc&#39;)); // false</span></span>
<span class="line"><span>console.log(&#39;---------------------------&#39;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 表示必须以abc开头，三个字符必须挨在一起</span></span>
<span class="line"><span>let reg02 = /^abc/</span></span>
<span class="line"><span>console.log(reg02.test(&#39;abc&#39;)); // true</span></span>
<span class="line"><span>console.log(reg02.test(&#39;abcd&#39;)); // true</span></span>
<span class="line"><span>console.log(reg02.test(&#39;ab2cd&#39;)); // false</span></span>
<span class="line"><span>console.log(reg02.test(&#39;aabcd&#39;)); // false</span></span>
<span class="line"><span>console.log(&#39;---------------------------&#39;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 表示必须以abc开头，三个字符必须挨在一起</span></span>
<span class="line"><span>let reg03 = /abc$/</span></span>
<span class="line"><span>console.log(reg03.test(&#39;abc&#39;)); // true</span></span>
<span class="line"><span>console.log(reg03.test(&#39;abcd&#39;)); // false</span></span>
<span class="line"><span>console.log(reg03.test(&#39;ada3bc&#39;)); // false</span></span>
<span class="line"><span>console.log(reg03.test(&#39;adabc&#39;)); // true</span></span>
<span class="line"><span>console.log(&#39;---------------------------&#39;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 表示必须以abc开头，且以abc结束三个字符必须挨在一起，也就是只能是abc</span></span>
<span class="line"><span>let reg04 = /^abc$/</span></span>
<span class="line"><span>console.log(reg03.test(&#39;abc&#39;)); // true</span></span>
<span class="line"><span>console.log(reg03.test(&#39;abcd&#39;)); // false</span></span>
<span class="line"><span>console.log(reg03.test(&#39;ada3bc&#39;)); // false</span></span>
<span class="line"><span>console.log(reg03.test(&#39;adabc&#39;)); // false</span></span>
<span class="line"><span>console.log(&#39;---------------------------&#39;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 第一位数字是 1 且必须是11位数字</span></span>
<span class="line"><span>let reg05 = /^1\\d{10}/</span></span>
<span class="line"><span>console.log(reg05.test(&#39;18666666666&#39;)); // true</span></span>
<span class="line"><span>console.log(reg05.test(&#39;28666666666&#39;)); // false</span></span>
<span class="line"><span>console.log(reg05.test(&#39;186666666&#39;)); // false</span></span>
<span class="line"><span>console.log(reg05.test(&#39;18666666666adada&#39;)); // true</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 当不写任何字符时，这时的 /^/ 表示字符串最前面的空格，如下</span></span>
<span class="line"><span>let reg06 = /^/</span></span>
<span class="line"><span>console.log(&#39;hello&#39;.replace(reg06, &#39;我是替换的内容&#39;)); // 我是替换的内容hello</span></span>
<span class="line"><span></span></span>
<span class="line"><span>let reg07 = /$/</span></span>
<span class="line"><span>console.log(&#39;hello&#39;.replace(reg07, &#39;我是替换的内容&#39;)); // hello我是替换的内容</span></span>
<span class="line"><span>console.log(&#39;---------------------------&#39;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>let str2 = &#39;ab&#39;</span></span>
<span class="line"><span>let str4 = &#39;abcd&#39;</span></span>
<span class="line"><span>let str7 = &#39;abcdefgh&#39;</span></span>
<span class="line"><span>let reg = /[a-z]{3,6}/</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 加上开始和结束边界之后，它的意思是整个字符串就3-6位，也就是说可限定长度</span></span>
<span class="line"><span>let reg02 = /^[a-z]{3,6}$/</span></span>
<span class="line"><span></span></span>
<span class="line"><span>console.log(str2.match(reg)) // null</span></span>
<span class="line"><span>console.log(str4.match(reg)) // [ &#39;abcd&#39;]</span></span>
<span class="line"><span>// 虽然是8但是只会展示6位置，也就是找到满足条件的之后我就认为是成功了后面的就不管了</span></span>
<span class="line"><span>console.log(str7.match(reg)) // [ &#39;abcdef&#39;]</span></span></code></pre></div><h3 id="_2-3-3-字符类" tabindex="-1">2.3.3.字符类 <a class="header-anchor" href="#_2-3-3-字符类" aria-label="Permalink to &quot;2.3.3.字符类&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// var rg = /abc/;  只要包含abc,且三个字符必须连接在一起</span></span>
<span class="line"><span>// 字符类: [] 表示有一系列字符可供选择，只要匹配其中一个就可以了</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 只要字符串中包含 a 或者 b 或者 c 中的一个会多个都返回 true</span></span>
<span class="line"><span>let reg01 = /[abc]/</span></span>
<span class="line"><span>console.log(reg01.test(&#39;andy&#39;)); // true</span></span>
<span class="line"><span>console.log(reg01.test(&#39;baby&#39;)); // true</span></span>
<span class="line"><span>console.log(reg01.test(&#39;color&#39;)); // true</span></span>
<span class="line"><span>console.log(reg01.test(&#39;red&#39;)); // false</span></span>
<span class="line"><span>console.log(&#39;------------------&#39;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 只要字符串以 a 或者 b 或者 c 中的一个开头都返回 true</span></span>
<span class="line"><span>let reg02 = /^[abc]/</span></span>
<span class="line"><span>console.log(reg02.test(&#39;andy&#39;)); // true</span></span>
<span class="line"><span>console.log(reg02.test(&#39;baby&#39;)); // true</span></span>
<span class="line"><span>console.log(reg02.test(&#39;color&#39;)); // true</span></span>
<span class="line"><span>console.log(reg02.test(&#39;red&#39;)); // false</span></span>
<span class="line"><span>console.log(reg02.test(&#39;raed&#39;)); // false</span></span>
<span class="line"><span>console.log(&#39;------------------&#39;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 只要字符串以 a 或者 b 或者 c 中的一个结尾都返回 true</span></span>
<span class="line"><span>let reg03 = /[abc]$/</span></span>
<span class="line"><span>console.log(reg03.test(&#39;ndya&#39;)); // true</span></span>
<span class="line"><span>console.log(reg03.test(&#39;abyb&#39;)); // true</span></span>
<span class="line"><span>console.log(reg03.test(&#39;olorc&#39;)); // true</span></span>
<span class="line"><span>console.log(reg03.test(&#39;red&#39;)); // false</span></span>
<span class="line"><span>console.log(reg03.test(&#39;raed&#39;)); // false</span></span>
<span class="line"><span>console.log(&#39;------------------&#39;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 字符串只能是 a 或者 b 或者 c 中的一个都返回 true</span></span>
<span class="line"><span>let reg04 = /^[abc]$/</span></span>
<span class="line"><span>console.log(reg04.test(&#39;a&#39;)); // true</span></span>
<span class="line"><span>console.log(reg04.test(&#39;aa&#39;)); // false</span></span>
<span class="line"><span>console.log(reg04.test(&#39;b&#39;)); // true</span></span>
<span class="line"><span>console.log(reg04.test(&#39;c&#39;)); // true</span></span>
<span class="line"><span>console.log(reg04.test(&#39;abc&#39;)); // false</span></span>
<span class="line"><span>console.log(&#39;------------------&#39;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 26个英文字母任何一个字母返回 true  - 表示的是a 到z 的范围</span></span>
<span class="line"><span>// 只要字符串中包含26个小写字母中的一个都返回true</span></span>
<span class="line"><span>// 扩展01：/^[a-z]/ 表示字符串中只要以26个小写字母中的任何一个开头都是true</span></span>
<span class="line"><span>// 扩展02：/^[a-z$]/ 表示字符串中只要以26个小写字母中的任何一个结尾都是true</span></span>
<span class="line"><span>let reg05 = /[a-z]/</span></span>
<span class="line"><span>console.log(reg05.test(&#39;1a434&#39;)); // true</span></span>
<span class="line"><span>console.log(reg05.test(&#39;a0615bc&#39;)); // true</span></span>
<span class="line"><span>console.log(reg05.test(&#39;b&#39;)); // true</span></span>
<span class="line"><span>console.log(reg05.test(&#39;8&#39;)); // false</span></span>
<span class="line"><span>console.log(&#39;------------------&#39;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 有且只能是26个小写字母中的一个，只要有一个则都返回true</span></span>
<span class="line"><span>let reg06 = /^[a-z]$/</span></span>
<span class="line"><span>console.log(reg06.test(&#39;a&#39;)); // true</span></span>
<span class="line"><span>console.log(reg06.test(&#39;z&#39;)); // true</span></span>
<span class="line"><span>console.log(reg06.test(1)); // false</span></span>
<span class="line"><span>console.log(reg06.test(&#39;A&#39;)); // false</span></span>
<span class="line"><span>console.log(&#39;------------------&#39;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 26个英文字母(大写和小写都可以)任何一个字母,- _ 等都返回 true</span></span>
<span class="line"><span>let reg07 = /^[a-zA-Z0-9_-]$/</span></span>
<span class="line"><span>console.log(reg07.test(&#39;a&#39;)); // true</span></span>
<span class="line"><span>console.log(reg07.test(&#39;B&#39;)); // true</span></span>
<span class="line"><span>console.log(reg07.test(8)); // true</span></span>
<span class="line"><span>console.log(reg07.test(&#39;-&#39;)); // true</span></span>
<span class="line"><span>console.log(reg07.test(&#39;_&#39;)); // true</span></span>
<span class="line"><span>console.log(reg07.test(&#39;!&#39;)); // false</span></span>
<span class="line"><span>console.log(&#39;----------------&#39;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 如果中括号里面有^ 表示取反的意思 千万和 我们边界符 ^ 别混淆</span></span>
<span class="line"><span>let reg08 = /^[^a-zA-Z0-9_-]$/</span></span>
<span class="line"><span>console.log(reg08.test(&#39;a&#39;)); // false</span></span>
<span class="line"><span>console.log(reg08.test(&#39;B&#39;)); // false</span></span>
<span class="line"><span>console.log(reg08.test(8)); // false</span></span>
<span class="line"><span>console.log(reg08.test(&#39;-&#39;)); // false</span></span>
<span class="line"><span>console.log(reg08.test(&#39;_&#39;)); // false</span></span>
<span class="line"><span>console.log(reg08.test(&#39;!&#39;)); // true</span></span></code></pre></div><h3 id="_2-3-4-量词" tabindex="-1">2.3.4.量词 <a class="header-anchor" href="#_2-3-4-量词" aria-label="Permalink to &quot;2.3.4.量词&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>1. {m}： 出现m次</span></span>
<span class="line"><span>2. {m,}：至少出现m次</span></span>
<span class="line"><span>3. {m,n}：出现m-n次</span></span>
<span class="line"><span>4. ?：出现0次或者1次，等价于{0,1}</span></span>
<span class="line"><span>5. *：出现&gt;=0次,等价于{0,}</span></span>
<span class="line"><span>6. +：至少出现1次,等价于{1,}</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// 量词是设定某个模式出现的次数</span></span>
<span class="line"><span>// {3,6} 中间不要有空格</span></span>
<span class="line"><span>// 这个模式用户输入的字符串长度可以任意但是[a-zA-Z0-9_-]这种模式必须是重复3-6次,找到一个即停止</span></span>
<span class="line"><span>let reg01 = /[a-zA-Z0-9_-]{3,6}/</span></span>
<span class="line"><span>console.log(reg01.test(&#39;a&#39;)); // false</span></span>
<span class="line"><span>console.log(reg01.test(&#39;8&#39;)); // false</span></span>
<span class="line"><span>console.log(reg01.test(&#39;andy-red&#39;)); // true</span></span>
<span class="line"><span>console.log(reg01.test(&#39;####d###&#39;)); // false</span></span>
<span class="line"><span>console.log(reg01.test(&#39;abcdefg#######&#39;)); // true</span></span>
<span class="line"><span>console.log(&#39;abcdefg#######&#39;.match(reg01)); // [ &#39;abcdef&#39;, index: 0, input: &#39;abcdefg#######&#39;, groups: undefined ]</span></span>
<span class="line"><span>console.log(&#39;abfg###dsa####&#39;.match(reg01)); // [ &#39;abfg&#39;, index: 0, input: &#39;abfg###dsa####&#39;, groups: undefined ]</span></span>
<span class="line"><span>console.log(&#39;fg###dsa####&#39;.match(reg01)) // [ &#39;dsa&#39;, index: 5, input: &#39;fg###dsa####&#39;, groups: undefined ]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 这个模式用户输入的字符串长度可以任意但是必须以[a-zA-Z0-9_-]这种模式的字符串连续重复3-6次来开头</span></span>
<span class="line"><span>let reg02 = /^[a-zA-Z0-9_-]{3,6}/</span></span>
<span class="line"><span>console.log(&#39;abc#######&#39;.match(reg02)); // [ &#39;abc&#39;, index: 0, input: &#39;abc#######&#39;, groups: undefined ]</span></span>
<span class="line"><span>console.log(&#39;abcdefg#######&#39;.match(reg02)); // [ &#39;abcdef&#39;, index: 0, input: &#39;abcdefg#######&#39;, groups: undefined ]</span></span>
<span class="line"><span>console.log(&#39;abcdefghj#######&#39;.match(reg02)); // [ &#39;abcdef&#39;, index: 0, input: &#39;abcdefg#######&#39;, groups: undefined ],截取了前六个</span></span>
<span class="line"><span>console.log(&#39;ab##cdefg#####&#39;.match(reg02)); // null</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 这个模式用户输入的字符串长度可以任意但是必须以[a-zA-Z0-9_-]这种模式的字符串连续重复3-6次来结尾</span></span>
<span class="line"><span>let reg03 = /[a-zA-Z0-9_-]{3,6}$/</span></span>
<span class="line"><span>console.log(&#39;#######abc&#39;.match(reg03)); // [ &#39;abc&#39;, index: 7, input: &#39;#######abc&#39;, groups: undefined ]</span></span>
<span class="line"><span>console.log(&#39;g#######abcdef&#39;.match(reg03)); // [ &#39;abcdef&#39;, index: 8, input: &#39;g#######abcdef&#39;, groups: undefined ]</span></span>
<span class="line"><span>console.log(&#39;#######abcdefghj&#39;.match(reg03)); // [ &#39;defghj&#39;, index: 10, input: &#39;#######abcdefghj&#39;, groups: undefined ],截取了后六个</span></span>
<span class="line"><span>console.log(&#39;ab##cdefg#####&#39;.match(reg03)); // null</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 这个模式用户只能输入的字符串是3-6位且只能输入英文字母 数字 下划线 短横线</span></span>
<span class="line"><span>let reg04 = /^[a-zA-Z0-9_-]{3,6}$/</span></span>
<span class="line"><span>console.log(&#39;ab_1-2&#39;.match(reg04)); // [ &#39;ab_1-2&#39;, index: 0, input: &#39;ab_1-2&#39;, groups: undefined ]</span></span>
<span class="line"><span>console.log(&#39;abc&#39;.match(reg04)) // [ &#39;abc&#39;, index: 0, input: &#39;abc&#39;, groups: undefined ]</span></span>
<span class="line"><span>console.log(&#39;ac&#39;.match(reg04)) // null</span></span>
<span class="line"><span>console.log(&#39;1234567&#39;.match(reg04)) // null</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 字符串中必须是 验证码是(这中间是数字)请尽快输入 这种连续在一起的内容</span></span>
<span class="line"><span>let reg05 = /验证码是\\d+请尽快输入/</span></span>
<span class="line"><span>console.log(&#39;验证码是123请尽快输入&#39;.match(reg05)) // [ &#39;验证码是123请尽快输入&#39;, index: 0, input: &#39;验证码是123请尽快输入&#39;, groups: undefined ]</span></span>
<span class="line"><span>console.log(&#39;验证码123请尽快输入&#39;.match(reg05)) // null</span></span>
<span class="line"><span>console.log(&#39;验证码123请尽快输入123&#39;.match(reg05)) // null</span></span></code></pre></div><h3 id="_2-3-5-贪婪匹配-vs-惰性匹配" tabindex="-1">2.3.5.贪婪匹配 VS 惰性匹配 <a class="header-anchor" href="#_2-3-5-贪婪匹配-vs-惰性匹配" aria-label="Permalink to &quot;2.3.5.贪婪匹配 VS 惰性匹配&quot;">​</a></h3><p>正则本身是贪婪的，会尽可能的多匹配符合模式的字符</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// 不加 g 时，只要匹配一个符合即停止</span></span>
<span class="line"><span>let reg01 = /\\d{2,5}/</span></span>
<span class="line"><span>console.log(&#39;123 1234 12345 123456&#39;.match(reg01)); // [ &#39;123&#39;, index: 0, input: &#39;123 1234 12345 123456&#39;, groups: undefined ]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 加 g 时，会全局去匹配,匹配到一个合适就将其放入数组中（贪婪匹配，将所有符合的都收集起来）</span></span>
<span class="line"><span>// 因为123 1234中间是一个空格是不符合条件的这个时候，就会分批次压入数组</span></span>
<span class="line"><span>let reg02 = /\\d{2,5}/g</span></span>
<span class="line"><span>console.log(&#39;123 1234 12345 123456&#39;.match(reg02)); // [ &#39;123&#39;, &#39;1234&#39;, &#39;12345&#39;, &#39;12345&#39; ]</span></span>
<span class="line"><span>console.log(&#39;123 1234 12345 12 3456&#39;.match(reg02)); // [ &#39;123&#39;, &#39;1234&#39;, &#39;12345&#39;, &#39;12&#39;, &#39;3456&#39; ]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 以最小匹配度返回，如当有12345符合时，会以 [12 34]拿取最后的5丢失了（惰性匹配，也叫禁止贪婪）</span></span>
<span class="line"><span>let reg03 = /\\d{2,5}?/g</span></span>
<span class="line"><span>console.log(&#39;123 1234 12345 123456&#39;.match(reg03)); // [&#39;12&#39;, &#39;12&#39;, &#39;34&#39;,&#39;12&#39;, &#39;34&#39;, &#39;12&#39;,&#39;34&#39;, &#39;56&#39;]</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>let reg04 = /n\\d{3,6}?/</span></span>
<span class="line"><span>console.log(reg04.exec(&#39;houdun2018123&#39;)); // [ &#39;n201&#39;, index: 5, input: &#39;houdun2018123&#39;, groups: undefined ]</span></span></code></pre></div><p>量词后面加个 ？，即变成了惰性匹配</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>贪婪量词        惰性量词</span></span>
<span class="line"><span>{m,n}            {m,n}?</span></span>
<span class="line"><span>{m,}             {m,}?</span></span>
<span class="line"><span>?                 ??</span></span>
<span class="line"><span>+                 +?</span></span>
<span class="line"><span>*                 *?</span></span></code></pre></div><h3 id="_2-3-6-多选分支" tabindex="-1">2.3.6.多选分支 <a class="header-anchor" href="#_2-3-6-多选分支" aria-label="Permalink to &quot;2.3.6.多选分支&quot;">​</a></h3><p>一个模式可以实现横向和纵向的模糊匹配，而多选分支可以支持多个子模式任选其一，形式是(p1|p2|p3)</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>let reg01 = /good|nice/g</span></span>
<span class="line"><span>let str = &#39;good idea, nice try&#39;</span></span>
<span class="line"><span>console.log(str.match(reg01)); // [ &#39;good&#39;, &#39;nice&#39; ]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 注意，用/good|goodbye/去匹配&#39;goodbye&#39; 匹配到的是good</span></span>
<span class="line"><span>// 因为分支结构是惰性的，前面的匹配上了，后面的就不再尝试了</span></span>
<span class="line"><span>let reg02 = /good|goodbye/g</span></span>
<span class="line"><span>console.log(&#39;goodbye&#39;.match(reg02)); // [ &#39;good&#39; ]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>let reg = /I love (JavaScript|Regular Expression)/</span></span>
<span class="line"><span>console.log(reg.test(&#39;I love JavaScript&#39;)) // true</span></span>
<span class="line"><span>console.log(reg.test(&#39;I love Regular Expression&#39;)) // true</span></span></code></pre></div><h3 id="_2-3-7-模式修正符-g-i-m-s" tabindex="-1">2.3.7.模式修正符（g i m s） <a class="header-anchor" href="#_2-3-7-模式修正符-g-i-m-s" aria-label="Permalink to &quot;2.3.7.模式修正符（g  i  m  s）&quot;">​</a></h3><ul><li>i：正则表达式默认是区分大小写，加 i 表示不区分大小写</li><li>g：全局匹配</li><li>gi（ig）：全局匹配且不区分大小写</li><li>gm：全局匹配，并且每一行单独处理</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>let reg01 = /hou/i</span></span>
<span class="line"><span>console.log(&#39;HouDunRen&#39;.match(reg01)); // [ &#39;Hou&#39;, index: 0, input: &#39;HouDunRen&#39;, groups: undefined ]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>let str = &#39;houdUnre&#39;</span></span>
<span class="line"><span>// 全局匹配并且不区分大小写，没有顺序关系可写成 ig</span></span>
<span class="line"><span>console.log(str.match(/u/gi)); // [ &#39;u&#39;, &#39;U&#39; ]</span></span>
<span class="line"><span>console.log(str.replace(/u/gi, &#39;@&#39;)); // ho@d@nre</span></span></code></pre></div><p>gm：全局匹配，并且每一行单独处理</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>let str = \`</span></span>
<span class="line"><span>#1 js,200元 #</span></span>
<span class="line"><span>#2 php,300元 #</span></span>
<span class="line"><span>#1 houdunren.com # 后盾人</span></span>
<span class="line"><span>#1 node.js,180元 #</span></span>
<span class="line"><span>\`</span></span>
<span class="line"><span>let reg = /^\\s*#\\d+\\s+.+\\s+#$/gm // m：每一行单独处理</span></span>
<span class="line"><span></span></span>
<span class="line"><span>console.log(str.match(reg));</span></span>
<span class="line"><span></span></span>
<span class="line"><span>let lessons = str.match(reg).map((item) =&gt; {</span></span>
<span class="line"><span>    let v = item.replace(/\\s*#\\d+\\s*/, &#39;&#39;).replace(/\\s+#/, &#39;&#39;)</span></span>
<span class="line"><span>    console.log(&#39;v&#39;, v)</span></span>
<span class="line"><span>    console.log(v.split(&#39;,&#39;))</span></span>
<span class="line"><span>    // [name, price] = v.split(&#39;,&#39;) // 这样写不行，疑惑</span></span>
<span class="line"><span>    // return { name, price }</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// console.log(&#39;lessons&#39;, lessons)</span></span>
<span class="line"><span>// console.log(JSON.stringify(lessons, null, 2)) // 这是什么打印 疑惑</span></span></code></pre></div><h3 id="_2-3-8分组" tabindex="-1">2.3.8分组 <a class="header-anchor" href="#_2-3-8分组" aria-label="Permalink to &quot;2.3.8分组&quot;">​</a></h3><p>如何让量词作用于一个整体？</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// 字符串中ab连在一起，b至少出现一次</span></span>
<span class="line"><span>let reg01 = /ab+/</span></span>
<span class="line"><span>console.log(&#39;ab&#39;.match(reg01)); // [ &#39;ab&#39;, index: 0, input: &#39;ab&#39;, groups: undefined ]</span></span>
<span class="line"><span>console.log(&#39;abb&#39;.match(reg01)); // [ &#39;abb&#39;, index: 0, input: &#39;abb&#39;, groups: undefined ]</span></span>
<span class="line"><span>console.log(&#39;sfabgabb&#39;.match(reg01)); // [ &#39;ab&#39;, index: 2, input: &#39;sfabgabb&#39;, groups: undefined ]</span></span>
<span class="line"><span>console.log(&#39;sfabbbgab&#39;.match(reg01)) // [ &#39;abbb&#39;, index: 2, input: &#39;sfabbbgab&#39;, groups: undefined ]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 以ab开头 b至少出现一次</span></span>
<span class="line"><span>let reg02 = /^ab+/</span></span>
<span class="line"><span>console.log(&#39;ab&#39;.match(reg02)); // [ &#39;ab&#39;, index: 0, input: &#39;ab&#39;, groups: undefined ]</span></span>
<span class="line"><span>console.log(&#39;abb&#39;.match(reg02)); // [ &#39;abb&#39;, index: 0, input: &#39;abb&#39;, groups: undefined ]</span></span>
<span class="line"><span>console.log(&#39;sab&#39;.match(reg02)); // null</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 以ab结尾，且b至少出现一次</span></span>
<span class="line"><span>let reg03 = /ab+$/</span></span>
<span class="line"><span>console.log(&#39;ab&#39;.match(reg03)); // [ &#39;ab&#39;, index: 0, input: &#39;ab&#39;, groups: undefined ]</span></span>
<span class="line"><span>console.log(&#39;sab&#39;.match(reg03)); // [ &#39;ab&#39;, index: 1, input: &#39;sab&#39;, groups: undefined ]</span></span>
<span class="line"><span>console.log(&#39;sabb&#39;.match(reg03)); // [ &#39;abb&#39;, index: 1, input: &#39;sabb&#39;, groups: undefined ]</span></span>
<span class="line"><span>console.log(&#39;abcs&#39;.match(reg03)); // null</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 字符串中有连续的ab,且至少出现一次</span></span>
<span class="line"><span>let reg04 = /(ab)+/</span></span>
<span class="line"><span>console.log(&#39;ab&#39;.match(reg04)); // [ &#39;ab&#39;, &#39;ab&#39;, index: 0, input: &#39;ab&#39;, groups: undefined ]</span></span>
<span class="line"><span>console.log(&#39;ababab&#39;.match(reg04)); // [ &#39;ababab&#39;, &#39;ab&#39;, index: 0, input: &#39;ababab&#39;, groups: undefined ]</span></span>
<span class="line"><span>console.log(&#39;absab&#39;.match(reg04)); // [ &#39;ab&#39;, &#39;ab&#39;, index: 0, input: &#39;absab&#39;, groups: undefined ]</span></span>
<span class="line"><span>console.log(&#39;acb&#39;.match(reg04)); // null</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 全局匹配</span></span>
<span class="line"><span>let reg05 = /(ab)+/g</span></span>
<span class="line"><span>console.log(&#39;ababa abbb ababab&#39;.match(reg05)); // [ &#39;abab&#39;, &#39;ab&#39;, &#39;ababab&#39; ]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// b前面得有连续三个数字</span></span>
<span class="line"><span>// \\1: 代表的就是第一个 （）的内容，得一模一样</span></span>
<span class="line"><span>// 也就是字符传中必须有 666b666 这种连在一起的模式</span></span>
<span class="line"><span>let reg06 = /(\\d{3})b\\1/;</span></span>
<span class="line"><span>console.log(&#39;a666b777c&#39;.match(reg06)); // null</span></span>
<span class="line"><span>console.log(&#39;a666b666c&#39;.match(reg06)); // [ &#39;666b666&#39;, &#39;666&#39;, index: 1, input: &#39;a666b666c&#39;, groups: undefined ]</span></span>
<span class="line"><span>console.log(&#39;a123b456c&#39;.match(reg06)); // null</span></span>
<span class="line"><span>console.log(&#39;a123b123c&#39;.match(reg06)); // [ &#39;123b123&#39;, &#39;123&#39;, index: 1, input: &#39;a123b123c&#39;, groups: undefined ]</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>// . 表示匹配所有的字符(除了换行符之外)</span></span>
<span class="line"><span>// 没有加边界,则字符长度任意，只要找到第一个出现即可</span></span>
<span class="line"><span>var reg07 = /(.{2}银行).+验证码(\\d{3,6})/;</span></span>
<span class="line"><span>var str = &#39;尊贵的vip用户您好，工商银行友情提示您，您本次登录的验证码562389，请在5分钟内输入，否则失效&#39;;</span></span>
<span class="line"><span>console.log(reg07.test(str)); // true</span></span>
<span class="line"><span>console.log(str.match(reg07)); // 输入如下:</span></span>
<span class="line"><span>// [</span></span>
<span class="line"><span>//     &#39;工商银行友情提示您，您本次登录的验证码562389&#39;,</span></span>
<span class="line"><span>//     &#39;工商银行&#39;,</span></span>
<span class="line"><span>//     &#39;562389&#39;,</span></span>
<span class="line"><span>//     index: 11,</span></span>
<span class="line"><span>//     input: &#39;尊贵的vip用户您好，工商银行友情提示您，您本次登录的验证码562389，请在5分钟内输入，否则失效&#39;,</span></span>
<span class="line"><span>//     groups: undefined</span></span>
<span class="line"><span>// ]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 字符串长度11</span></span>
<span class="line"><span>let reg08 = /^1(33|35|80|88|86|70|71)\\d{8}$/</span></span>
<span class="line"><span>console.log(reg08.test(&#39;18888888888&#39;)); // true</span></span></code></pre></div><h3 id="_2-3-9分组引用" tabindex="-1">2.3.9分组引用 <a class="header-anchor" href="#_2-3-9分组引用" aria-label="Permalink to &quot;2.3.9分组引用&quot;">​</a></h3><p>通过括号创建子表达式，可以进行数据提取和强大的替换操作，也可以通过js来引用分组内容</p><h4 id="_1-3-9-1-提取数据" tabindex="-1">1.3.9.1.提取数据 <a class="header-anchor" href="#_1-3-9-1-提取数据" aria-label="Permalink to &quot;1.3.9.1.提取数据&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>/*</span></span>
<span class="line"><span>提取年月日</span></span>
<span class="line"><span>2021-08-14</span></span>
<span class="line"><span>*/</span></span>
<span class="line"><span></span></span>
<span class="line"><span>let reg01 = /(\\d{4})-(\\d{2})-(\\d{2})/</span></span>
<span class="line"><span>console.log(&#39;2021-08-14&#39;.match(reg01))</span></span>
<span class="line"><span>//  [&quot;2021-08-14&quot;, &quot;2021&quot;, &quot;08&quot;, &quot;14&quot;, index: 0, input: &quot;2021-08-14&quot;, groups: undefined]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 第二种解法,通过全局的$1...$9读取 引用的括号数据</span></span>
<span class="line"><span>let reg02 = /(\\d{4})-(\\d{2})-(\\d{2})/</span></span>
<span class="line"><span>let string = &#39;2021-08-14&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>reg02.test(string)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>console.log(RegExp.$1) // 2021</span></span>
<span class="line"><span>console.log(RegExp.$2) // 08</span></span>
<span class="line"><span>console.log(RegExp.$3) // 14</span></span></code></pre></div><h4 id="_1-3-9-2数据替换" tabindex="-1">1.3.9.2数据替换 <a class="header-anchor" href="#_1-3-9-2数据替换" aria-label="Permalink to &quot;1.3.9.2数据替换&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>/*</span></span>
<span class="line"><span>将以下格式替换为mm/dd/yyy</span></span>
<span class="line"><span>2021-08-14</span></span>
<span class="line"><span>*/</span></span>
<span class="line"><span>// 第一种解法</span></span>
<span class="line"><span>let reg = /(\\d{4})-(\\d{2})-(\\d{2})/</span></span>
<span class="line"><span>let string = &#39;2021-08-14&#39;</span></span>
<span class="line"><span>// 第一种写法</span></span>
<span class="line"><span>let result1 = string.replace(reg, &#39;$2/$3/$1&#39;)</span></span>
<span class="line"><span>console.log(result1) // 08/14/2021</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 第二种写法</span></span>
<span class="line"><span>let result2 = string.replace(reg, () =&gt; {</span></span>
<span class="line"><span>    return RegExp.$2 + &#39;/&#39; + RegExp.$3 + &#39;/&#39; + RegExp.$1</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span>console.log(result2) // 08/14/2021</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 第三种写法</span></span>
<span class="line"><span>let result3 = string.replace(reg, ($0, $1, $2, $3) =&gt; {</span></span>
<span class="line"><span>    console.log(&#39;$0&#39;, $0); // 2021-08-14</span></span>
<span class="line"><span>    return $2 + &#39;/&#39; + $3 + &#39;/&#39; + $1</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span>console.log(result3) // 08/14/2021</span></span></code></pre></div><h3 id="_2-3-10-反向引用" tabindex="-1">2.3.10.反向引用 <a class="header-anchor" href="#_2-3-10-反向引用" aria-label="Permalink to &quot;2.3.10.反向引用&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>/*</span></span>
<span class="line"><span>    写一个正则支持以下三种格式</span></span>
<span class="line"><span>  2016-06-12</span></span>
<span class="line"><span>  2016/06/12</span></span>
<span class="line"><span>  2016.06-12</span></span>
<span class="line"><span>*/</span></span>
<span class="line"><span>let regex = /(\\d{4})([-/.])\\d{2}\\2\\d{2}/</span></span>
<span class="line"><span></span></span>
<span class="line"><span>var string1 = &quot;2017-06-12&quot;;</span></span>
<span class="line"><span>var string2 = &quot;2017/06/12&quot;;</span></span>
<span class="line"><span>var string3 = &quot;2017.06.12&quot;;</span></span>
<span class="line"><span>var string4 = &quot;2016-06/12&quot;; // 当[-/.]的内容确定之后则 \\2 对用的内容也就确定了</span></span>
<span class="line"><span></span></span>
<span class="line"><span>console.log( regex.test(string1) ); // true</span></span>
<span class="line"><span>console.log( regex.test(string2) ); // true</span></span>
<span class="line"><span>console.log( regex.test(string3) ); // true</span></span>
<span class="line"><span>console.log( regex.test(string4) ); // false</span></span></code></pre></div><p>注意：</p><ol><li>引用不存在的分组会怎样？ a. 即匹配的就是\\1 \\2本身</li><li>分组后面有量词会怎样？ a. 分组后面如果有量词，分组最终(注意是分组，不是说整体)捕获的数据是最后一次的匹配</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&#39;12345&#39;.match(/(\\d)+/) // [&quot;12345&quot;, &quot;5&quot;, index: 0, input: &quot;12345&quot;, groups: undefined]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// /1 的值和12345的最后以为 5 应该保持一致</span></span>
<span class="line"><span>let reg = /(\\d)+ \\1/</span></span>
<span class="line"><span>console.log(reg.test(&#39;12345 1&#39;)); // false</span></span>
<span class="line"><span>console.log(reg.test(&#39;12345 5&#39;)); // true</span></span></code></pre></div><h3 id="_2-3-11-非捕获性括号" tabindex="-1">2.3.11.非捕获性括号 <a class="header-anchor" href="#_2-3-11-非捕获性括号" aria-label="Permalink to &quot;2.3.11.非捕获性括号&quot;">​</a></h3><ul><li>上面使用的括号都会匹配他们匹配到的数据，以便后续引用，所以也可以称为捕获型分组和捕获型分支。</li><li>如果想要括号最原始的功能，但不会引用它，也就是既不会出现在API引用里，也不会出现在正则引用里，可以使用</li><li>非捕获性括号（?:p）</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>let reg01 = /ab/g</span></span>
<span class="line"><span>console.log(&#39;ababa abbb ababab&#39;.match(reg01)); // [ &#39;ab&#39;, &#39;ab&#39;, &#39;ab&#39;, &#39;ab&#39;, &#39;ab&#39;, &#39;ab&#39; ]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 非捕获型引用，注意与reg01对比</span></span>
<span class="line"><span>let reg02 = /(?:ab)+/g</span></span>
<span class="line"><span>console.log(&#39;ababa abbb ababab&#39;.match(reg02)) // [&quot;abab&quot;, &quot;ab&quot;, &quot;ababab&quot;]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 注意这里，因为是非捕获型分组，所以使用match方法时，不会出现在数组的1位置了</span></span>
<span class="line"><span>let reg03 = /(ab)+/</span></span>
<span class="line"><span>console.log(&#39;ababa abbb ababab&#39;.match(reg03)) // [&#39;abab&#39;,&#39;ab&#39;,index: 0,input: &#39;ababa abbb ababab&#39;,groups: undefined]</span></span>
<span class="line"><span>let reg04 = /(?:ab)+/</span></span>
<span class="line"><span>console.log(&#39;ababa abbb ababab&#39;.match(reg04)) // [&quot;abab&quot;, index: 0, input: &quot;ababa abbb ababab&quot;, groups: undefined]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>let reg05 = /(?:.{2}银行).+验证码(?:\\d{3,6})/;</span></span>
<span class="line"><span>var str = &#39;尊贵的vip用户您好，工商银行友情提示您，您本次登录的验证码562389，请在5分钟内输入，否则失效&#39;;</span></span>
<span class="line"><span>var result = reg05.exec(str);</span></span>
<span class="line"><span>console.log(result); // 输出如下</span></span>
<span class="line"><span>// [</span></span>
<span class="line"><span>//     &#39;工商银行友情提示您，您本次登录的验证码562389&#39;,</span></span>
<span class="line"><span>//     index: 11,</span></span>
<span class="line"><span>//     input: &#39;尊贵的vip用户您好，工商银行友情提示您，您本次登录的验证码562389，请在5分钟内输入，否则失效&#39;,</span></span>
<span class="line"><span>//     groups: undefined</span></span>
<span class="line"><span>// ]</span></span></code></pre></div><h3 id="_2-3-12-先行断言-p" tabindex="-1">2.3.12.先行断言（?=p） <a class="header-anchor" href="#_2-3-12-先行断言-p" aria-label="Permalink to &quot;2.3.12.先行断言（?=p）&quot;">​</a></h3><p>符合p子模式前面的那个位置：有一个位置，紧跟其后需要满足p子模式。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>let reg01 = /(?=xxx)/</span></span>
<span class="line"><span>let str01 = &#39;xxx_love_study_1.mp4&#39;</span></span>
<span class="line"><span>console.log(str01.replace(reg01, &#39;❤️&#39;)); // // ❤️xxx_love_study_1.mp4</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 效果和reg01一样</span></span>
<span class="line"><span>let reg02 = /(?=xxx)/g</span></span>
<span class="line"><span>let str02 = &#39;xxx_love_study_1.mp4&#39;</span></span>
<span class="line"><span>console.log(str02.replace(reg02, &#39;❤️&#39;)); // // ❤️xxx_love_study_1.mp4</span></span>
<span class="line"><span></span></span>
<span class="line"><span>let reg03 = /(?=xxx)/</span></span>
<span class="line"><span>let str03 = &#39;xxx_love_study_1.mp4&#39;</span></span>
<span class="line"><span>console.log(str03.match(reg03)) // [ &#39;&#39;, index: 0, input: &#39;xxx_love_study_1.mp4&#39;, groups: undefined ]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>let reg04 = /(?=xxx)/g</span></span>
<span class="line"><span>let str04 = &#39;xxx_love_study_1.mp4&#39;</span></span>
<span class="line"><span>console.log(str04.match(reg04)) // [ &#39;&#39; ]</span></span>
<span class="line"><span>console.log(reg04.test(str04)) // true</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// \\. 表示对 . 的转义</span></span>
<span class="line"><span>let reg05 = /\\w+(?=\\.jpg)/</span></span>
<span class="line"><span>var str05 = &#39;houdun.doc,a.gif,hd.jpg,2018.png&#39;;</span></span>
<span class="line"><span>console.log(reg05.exec(str05)); // [&#39;hd&#39;,index: 17,input: &#39;houdun.doc,a.gif,hd.jpg,2018.png&#39;,groups: undefined]</span></span></code></pre></div><p><img src="`+c+`" alt="Alt Text"></p><h3 id="_2-3-13-负先行断言-p" tabindex="-1">2.3.13.负先行断言（?!p） <a class="header-anchor" href="#_2-3-13-负先行断言-p" aria-label="Permalink to &quot;2.3.13.负先行断言（?!p）&quot;">​</a></h3><p>反过来的意思，可以理解为(?=p)匹配到的位置之外的位置都是属于(?!p)的，</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&#39;xxx_love_study_1.mp4&#39;.replace(/(?!xxx)/g, &#39;❤️&#39;)</span></span>
<span class="line"><span>// (?=xxx)的输出： ❤️xxx_love_study_1.mp4</span></span>
<span class="line"><span>// (?!xxx)的输出：x❤️x❤️x❤️_❤️l❤️o❤️v❤️e❤️_❤️s❤️t❤️u❤️d❤️y❤️_❤️1❤️.❤️m❤️p❤️4❤️</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// \\. 表示对 . 的转义，不加 g</span></span>
<span class="line"><span>let reg02 = /\\w+(?!\\.jpg)/</span></span>
<span class="line"><span>var str = &#39;houdun.doc,a.gif,hd.jpg,2018.png&#39;;</span></span>
<span class="line"><span>console.log(reg02.exec(str)); // [&#39;houdun&#39;,index: 0,input: &#39;houdun.doc,a.gif,hd.jpg,2018.png&#39;,groups: undefined]</span></span>
<span class="line"><span>console.log(str.match(reg02)); // [&#39;houdun&#39;,index: 0,input: &#39;houdun.doc,a.gif,hd.jpg,2018.png&#39;,</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 加 g</span></span>
<span class="line"><span>let reg03 = /\\w(?!\\.jpg)/g</span></span>
<span class="line"><span>var str = &#39;houdun.doc,a.gif,hd.jpg,2018.png&#39;;</span></span>
<span class="line"><span>console.log(reg03.exec(str)); // [&#39;h&#39;,index: 0,input: &#39;houdun.doc,a.gif,hd.jpg,2018.png&#39;,groups: undefined]</span></span>
<span class="line"><span>console.log(str.match(reg03)); // 输出入下：</span></span>
<span class="line"><span>// [</span></span>
<span class="line"><span>//     &#39;h&#39;, &#39;o&#39;, &#39;u&#39;, &#39;d&#39;, &#39;u&#39;,</span></span>
<span class="line"><span>//     &#39;n&#39;, &#39;d&#39;, &#39;o&#39;, &#39;c&#39;, &#39;a&#39;,</span></span>
<span class="line"><span>//     &#39;g&#39;, &#39;i&#39;, &#39;f&#39;, &#39;h&#39;, &#39;j&#39;,</span></span>
<span class="line"><span>//     &#39;p&#39;, &#39;g&#39;, &#39;2&#39;, &#39;0&#39;, &#39;1&#39;,</span></span>
<span class="line"><span>//     &#39;8&#39;, &#39;p&#39;, &#39;n&#39;, &#39;g&#39;</span></span>
<span class="line"><span>// ]</span></span></code></pre></div><h3 id="_2-3-14-后行断言-p" tabindex="-1">2.3.14.后行断言（?&lt;=p） <a class="header-anchor" href="#_2-3-14-后行断言-p" aria-label="Permalink to &quot;2.3.14.后行断言（?&lt;=p）&quot;">​</a></h3><p>符合p子模式后面(注意(?=p)表示的是前面)的那个位置。换句话说是，有一个位置，其前面的部分需要满足p子模式。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>let reg01 = /(?&lt;=xxx)/</span></span>
<span class="line"><span>let str01 = &#39;xxx_love_study_1.mp4&#39;</span></span>
<span class="line"><span>console.log(str01.replace(reg01, &#39;❤️&#39;)); //xxx❤️_love_study_1.mp4</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 效果和reg01一样</span></span>
<span class="line"><span>let reg02 = /(?&lt;=xxx)/g</span></span>
<span class="line"><span>let str02 = &#39;xxx_love_study_1.mp4&#39;</span></span>
<span class="line"><span>console.log(str02.replace(reg02, &#39;❤️&#39;)); //xxx❤️_love_study_1.mp4</span></span>
<span class="line"><span></span></span>
<span class="line"><span>let reg03 = /(?&lt;=xxx)/</span></span>
<span class="line"><span>let str03 = &#39;xxx_love_study_1.mp4&#39;</span></span>
<span class="line"><span>console.log(str03.match(reg03)) // [ &#39;&#39;, index: 3, input: &#39;xxx_love_study_1.mp4&#39;, groups: undefined ]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>let reg04 = /(?&lt;=xxx)/g</span></span>
<span class="line"><span>let str04 = &#39;xxx_love_study_1.mp4&#39;</span></span>
<span class="line"><span>console.log(str04.match(reg04)) // [ &#39;&#39; ]</span></span>
<span class="line"><span>console.log(reg04.test(str04)) // true</span></span></code></pre></div><p>画图解释：</p><p><img src="`+o+`" alt="Alt Text"></p><h3 id="_2-3-8-负后行断言-p" tabindex="-1">2.3.8.负后行断言 （?&lt;!=p） <a class="header-anchor" href="#_2-3-8-负后行断言-p" aria-label="Permalink to &quot;2.3.8.负后行断言  （?&lt;!=p）&quot;">​</a></h3><p>(?&lt;=p)反过来的意思，可以理解为(?&lt;=p)匹配到的位置之外的位置都是属于(?&lt;!p)的，</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&#39;xxx_love_study_1.mp4&#39;.replace(/(?&lt;!xxx)/g, &#39;❤️&#39;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// (?&lt;=xxx)的输出</span></span>
<span class="line"><span>xxx❤️_love_study_1.mp4</span></span>
<span class="line"><span>// (?&lt;!xxx)的输出</span></span>
<span class="line"><span>❤️x❤️x❤️x_❤️l❤️o❤️v❤️e❤️_❤️s❤️t❤️u❤️d❤️y❤️_❤️1❤️.❤️m❤️p❤️4❤️</span></span></code></pre></div><h3 id="_2-3-9-取反-这个符号得放在-里面" tabindex="-1">2.3.9.取反 ^ 这个符号得放在 [] 里面 <a class="header-anchor" href="#_2-3-9-取反-这个符号得放在-里面" aria-label="Permalink to &quot;2.3.9.取反 ^ 这个符号得放在 [] 里面&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>let str = &#39;张三:010-9999999,李四:020-8888888&#39;</span></span>
<span class="line"><span>let reg01 = /[-\\d:,]/ // []里面放自己想要得</span></span>
<span class="line"><span>let reg02 = /[-\\d:,]/g</span></span>
<span class="line"><span>let reg03 = /[^-\\d:,]/ // 与05结果相同</span></span>
<span class="line"><span>let reg04 = /[^-\\d:,]/g</span></span>
<span class="line"><span>let reg05 = /[^-\\d:,]+/ // 与03结果相同</span></span>
<span class="line"><span>let reg06 = /[^-\\d:,\\s]+/g // \\s空格</span></span>
<span class="line"><span></span></span>
<span class="line"><span>console.log(str.match(reg01)); // [&#39;:&#39;,index: 2,input: &#39;张三：010-9999999，李四：020-8888888&#39;,groups: undefined]</span></span>
<span class="line"><span>console.log(str.match(reg02)); // [&#39;:&#39;, &#39;0&#39;, &#39;1&#39;, &#39;0&#39;, &#39;-&#39;, &#39;9&#39;,&#39;9&#39;, &#39;9&#39;, &#39;9&#39;, &#39;9&#39;, &#39;9&#39;, &#39;9&#39;,&#39;,&#39;, &#39;:&#39;, &#39;0&#39;, &#39;2&#39;, &#39;0&#39;, &#39;-&#39;,&#39;8&#39;, &#39;8&#39;, &#39;8&#39;, &#39;8&#39;, &#39;8&#39;, &#39;8&#39;,&#39;8&#39;]</span></span>
<span class="line"><span>console.log(str.match(reg03)); // [&#39;张&#39;,index: 0,input: &#39;张三：010-9999999，李四：020-8888888&#39;,groups: undefined]</span></span>
<span class="line"><span>console.log(str.match(reg04)); // [ &#39;张&#39;, &#39;三&#39;, &#39;李&#39;, &#39;四&#39; ]</span></span>
<span class="line"><span>console.log(str.match(reg05)); // [&#39;张&#39;,index: 0,input: &#39;张三：010-9999999，李四：020-8888888&#39;,groups: undefined]</span></span>
<span class="line"><span>console.log(str.match(reg06)); // [ &#39;张三&#39;, &#39;李四&#39; ]</span></span></code></pre></div><h3 id="_2-3-10汉字与字符属性" tabindex="-1">2.3.10汉字与字符属性 <a class="header-anchor" href="#_2-3-10汉字与字符属性" aria-label="Permalink to &quot;2.3.10汉字与字符属性&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>let str = &#39;houdunren2022.不断发布教程，加油！&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>console.log(str.match(/\\p{L}/gu)) // L：匹配字符  L：字符属性</span></span>
<span class="line"><span>console.log(str.match(/\\p{P}/gu)) // 匹配标点符号  P：标点符号属性</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// doc.houdunren.com</span></span>
<span class="line"><span></span></span>
<span class="line"><span>console.log(str.match(/\\p{sc=Han}/gu)) // 匹配中文  sc：用于匹配语言</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 有宽字节的时候加上u进行匹配</span></span></code></pre></div><h3 id="_2-3-11lastindex-属性的作用" tabindex="-1">2.3.11lastIndex 属性的作用 <a class="header-anchor" href="#_2-3-11lastindex-属性的作用" aria-label="Permalink to &quot;2.3.11lastIndex 属性的作用&quot;">​</a></h3><p>用来控制正则表达式开始搜索的位置， 主要用于查看主信息</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>let str = &#39;houdunren2022&#39;</span></span>
<span class="line"><span>let reg = /\\w/g</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 一步异步往下搜索知道搜索完，lastIndex依次递增，主要用于查看主信息</span></span>
<span class="line"><span>console.log(reg.lastIndex);  // 0</span></span>
<span class="line"><span>console.log(reg.exec(str));</span></span>
<span class="line"><span>console.log(reg.lastIndex);  // 1</span></span>
<span class="line"><span>console.log(reg.exec(str));</span></span>
<span class="line"><span></span></span>
<span class="line"><span>while ((res = reg.exec(str))) {</span></span>
<span class="line"><span>    console.log(res);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 打印如下：</span></span>
<span class="line"><span>// 0</span></span>
<span class="line"><span>// [ &#39;h&#39;, index: 0, input: &#39;houdunren2022&#39;, groups: undefined ]</span></span>
<span class="line"><span>// 1</span></span>
<span class="line"><span>// [ &#39;o&#39;, index: 1, input: &#39;houdunren2022&#39;, groups: undefined ]</span></span>
<span class="line"><span>// [ &#39;u&#39;, index: 2, input: &#39;houdunren2022&#39;, groups: undefined ]</span></span>
<span class="line"><span>// [ &#39;d&#39;, index: 3, input: &#39;houdunren2022&#39;, groups: undefined ]</span></span>
<span class="line"><span>// [ &#39;u&#39;, index: 4, input: &#39;houdunren2022&#39;, groups: undefined ]</span></span>
<span class="line"><span>// [ &#39;n&#39;, index: 5, input: &#39;houdunren2022&#39;, groups: undefined ]</span></span>
<span class="line"><span>// [ &#39;r&#39;, index: 6, input: &#39;houdunren2022&#39;, groups: undefined ]</span></span>
<span class="line"><span>// [ &#39;e&#39;, index: 7, input: &#39;houdunren2022&#39;, groups: undefined ]</span></span>
<span class="line"><span>// [ &#39;n&#39;, index: 8, input: &#39;houdunren2022&#39;, groups: undefined ]</span></span>
<span class="line"><span>// [ &#39;2&#39;, index: 9, input: &#39;houdunren2022&#39;, groups: undefined ]</span></span>
<span class="line"><span>// [ &#39;0&#39;, index: 10, input: &#39;houdunren2022&#39;, groups: undefined ]</span></span>
<span class="line"><span>// [ &#39;2&#39;, index: 11, input: &#39;houdunren2022&#39;, groups: undefined ]</span></span>
<span class="line"><span>// [ &#39;2&#39;, index: 12, input: &#39;houdunren2022&#39;, groups: undefined ]</span></span></code></pre></div><h3 id="_2-3-12-s-可以表示空格" tabindex="-1">2.3.12 \\s (可以表示空格) <a class="header-anchor" href="#_2-3-12-s-可以表示空格" aria-label="Permalink to &quot;2.3.12  \\s (可以表示空格)&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>let str = &#39;010 - 99999999&#39;</span></span>
<span class="line"><span>let reg01 = /\\d+ - \\d{8}/</span></span>
<span class="line"><span>let reg02 = /\\d+\\s-\\s\\d{8}/ // \\s可以表示空格</span></span>
<span class="line"><span></span></span>
<span class="line"><span>console.log(str.match(reg01)); // [&#39;010 - 99999999&#39;,index: 0,input: &#39;010 - 99999999&#39;,groups: undefined]</span></span>
<span class="line"><span>console.log(str.match(reg02)); // [&#39;010 - 99999999&#39;,index: 0,input: &#39;010 - 99999999&#39;,groups: undefined]</span></span></code></pre></div><h3 id="_2-3-13-点-包含除了换行符之外的任何字符" tabindex="-1">2.3.13. (点 包含除了换行符之外的任何字符) <a class="header-anchor" href="#_2-3-13-点-包含除了换行符之外的任何字符" aria-label="Permalink to &quot;2.3.13. (点 包含除了换行符之外的任何字符)&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>let str01 = &#39;aabb_-@&amp;*{&#39;</span></span>
<span class="line"><span>let str02 = &#39;https://www.baidu.com&#39;</span></span>
<span class="line"><span>let str03 = \`</span></span>
<span class="line"><span>baidu.com</span></span>
<span class="line"><span>aad.com</span></span>
<span class="line"><span>\`</span></span>
<span class="line"><span></span></span>
<span class="line"><span>let reg01 = /.+/</span></span>
<span class="line"><span>let reg02 = /https?:\\/\\/\\w+\\.\\w+\\.\\w+/ // 将点进行转义，则只针对点</span></span>
<span class="line"><span>let reg03 = /.+/ // 没有设置开始边界，对于str03的检验即使碰到换行了还会继续往后找,直到找到一个为止</span></span>
<span class="line"><span>let reg04 = /.+/s // s:单行匹配 这样写表示把里面的换行当普通空格处理，加s之后可完整匹配了</span></span>
<span class="line"><span></span></span>
<span class="line"><span>console.log(str01.match(reg01)); // [ &#39;aabb_-@&amp;*{&#39;, index: 0, input: &#39;aabb_-@&amp;*{&#39;, groups: undefined ]</span></span>
<span class="line"><span>console.log(str02.match(reg02)); // [&#39;https://www.baidu.com&#39;,index: 0,input: &#39;https://www.baidu.com&#39;,groups: undefined]</span></span>
<span class="line"><span>console.log(str03.match(reg03)[0]); // baidu.com</span></span>
<span class="line"><span>console.log(str03.match(reg04)[0]); // baidu.com   aad.com</span></span></code></pre></div><h3 id="_2-3-14-元字符" tabindex="-1">2.3.14. 元字符 <a class="header-anchor" href="#_2-3-14-元字符" aria-label="Permalink to &quot;2.3.14. 元字符&quot;">​</a></h3><ul><li>\\d // 数字 [0-9]</li><li>\\D // 非数字</li><li>\\w // [0-9a-zA-Z_]</li><li>\\W // [^0-9a-zA-Z_]</li><li>\\s // [\\t\\v\\n\\r\\f] 空格</li><li>\\S // [^\\t\\v\\n\\r\\f]</li><li>.：点 包含除了换行符之外的任何字符</li></ul><p><strong>\\d</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>let str = &#39;houdunren 2022&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// \\d：[0-9]，该正则表示找到字符串中0-9中的数字，找到一个就结束了，不会继续往后找</span></span>
<span class="line"><span>let reg01 = /\\d/</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 该正则表示找到字符串中0-9中的数字，会全局查找所有数字</span></span>
<span class="line"><span>let reg02 = /\\d/g</span></span>
<span class="line"><span></span></span>
<span class="line"><span>let reg03 = /\\d+/</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 该正则表示找到字符串中0-9中的数字，找四个就结束了，不会继续往后找</span></span>
<span class="line"><span>let reg04 = /\\d\\d\\d\\d/ // 也就是说 \\d 就代表一个数字</span></span>
<span class="line"><span></span></span>
<span class="line"><span>console.log(str.match(reg01)); // &#39;2&#39; 未加 g</span></span>
<span class="line"><span>console.log(str.match(reg02)); // [ &#39;2&#39;, &#39;0&#39;, &#39;2&#39;, &#39;2&#39; ]  加g</span></span>
<span class="line"><span>console.log(str.match(reg03)); // [ &#39;2022&#39;, index: 10, input: &#39;houdunren 2022&#39;, groups: undefined ]</span></span>
<span class="line"><span>console.log(str.match(reg04)); // [ &#39;2022&#39;, index: 10, input: &#39;houdunren 2022&#39;, groups: undefined ]</span></span>
<span class="line"><span>console.log(&#39;---------------------------&#39;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 获取字符串中的电话号码</span></span>
<span class="line"><span>let str = &#39;张三：010-9999999，李四：020-8888888&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 不加 g 只输出一组</span></span>
<span class="line"><span>let reg01 = /\\d{3}-\\d{7,8}/</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 找出所有满足条件的</span></span>
<span class="line"><span>let reg02 = /\\d{3}-\\d{7,8}/g</span></span>
<span class="line"><span></span></span>
<span class="line"><span>console.log(str.match(reg01)) // [ &#39;010-9999999&#39; ]</span></span>
<span class="line"><span>console.log(str.match(reg02)) // [ &#39;010-9999999&#39;, &#39;020-8888888&#39; ]</span></span></code></pre></div><p><strong>\\D</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>let str = &#39;aa3bb 2022&#39;</span></span>
<span class="line"><span>let reg01 = /\\D/</span></span>
<span class="line"><span>let reg02 = /\\D/g</span></span>
<span class="line"><span>let reg03 = /\\D+/</span></span>
<span class="line"><span>let reg04 = /\\D+/g</span></span>
<span class="line"><span>console.log(str.match(reg01)) // [ &#39;a&#39;, index: 0, input: &#39;aa3bb 2022&#39;, groups: undefined ]</span></span>
<span class="line"><span>console.log(str.match(reg02)) // [ &#39;a&#39;, &#39;a&#39;, &#39;b&#39;, &#39;b&#39;, &#39; &#39; ]</span></span>
<span class="line"><span>console.log(str.match(reg03)) // [ &#39;aa&#39;, index: 0, input: &#39;aa3bb 2022&#39;, groups: undefined ]</span></span>
<span class="line"><span>console.log(str.match(reg04)) // [ &#39;aa&#39;, &#39;bb &#39; ]</span></span></code></pre></div><p><strong>\\s（空格）</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>let reg01 = /\\s/</span></span>
<span class="line"><span>let reg02 = /\\s/g</span></span>
<span class="line"><span>let reg03 = /\\S/g</span></span>
<span class="line"><span></span></span>
<span class="line"><span>console.log(reg01.test(&#39;aa&#39;)); // false</span></span>
<span class="line"><span>console.log(reg02.test(&#39;a a&#39;)); // true</span></span>
<span class="line"><span>console.log(reg02.test(&#39;\\nab&#39;)); // true</span></span>
<span class="line"><span>console.log(reg03.test(&#39; \\nab&#39;)); // true</span></span></code></pre></div><p><strong>\\w：[a-zA-Z0-9_]</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>let email = &#39;2344232@qq.com&#39;</span></span>
<span class="line"><span>let reg01 = /\\w+@\\w+\\.\\w+/ // 这种时  ***&amp;&amp;&amp;2344232@qq.com  也会识别为true</span></span>
<span class="line"><span>let reg02 = /^\\w+@\\w+\\.\\w+$/ // 加开始和结束边界之后 只能是 2344232@qq.com这种结构的</span></span>
<span class="line"><span></span></span>
<span class="line"><span>console.log(&#39;***&amp;&amp;&amp;2344232@qq.com&#39;.match(reg01)); // [&#39;2344232@qq.com&#39;,index: 6,input: &#39;***&amp;&amp;&amp;2344232@qq.com&#39;,groups: undefined]</span></span>
<span class="line"><span>console.log(email.match(reg02)); // // [&#39;2344232@qq.com&#39;,index: 6,input: &#39;***&amp;&amp;&amp;2344232@qq.com&#39;,groups: undefined]</span></span></code></pre></div><p><strong>\\W：[a-zA-Z0-9_]取反</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>let email = &#39;2344232@qq.com&#39;</span></span>
<span class="line"><span>let reg = /\\W/</span></span>
<span class="line"><span>console.log(email.match(reg)); // [ &#39;@&#39;, index: 7, input: &#39;2344232@qq.com&#39;, groups: undefined ]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 表示以字母开头，后跟数字下划线</span></span>
<span class="line"><span>let reg02 = /[a-zA-Z]\\w{4,9}/ // 8shidajisd 也是正确的所以这里需要加边界</span></span>
<span class="line"><span>let reg03 = /^[a-zA-Z]\\w{4,9}$/</span></span></code></pre></div><h1 id="三-案例" tabindex="-1">三. 案例 <a class="header-anchor" href="#三-案例" aria-label="Permalink to &quot;三. 案例&quot;">​</a></h1><h2 id="_3-1用户名验证" tabindex="-1">3.1用户名验证 <a class="header-anchor" href="#_3-1用户名验证" aria-label="Permalink to &quot;3.1用户名验证&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;!DOCTYPE html&gt;</span></span>
<span class="line"><span>&lt;html lang=&quot;en&quot;&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;head&gt;</span></span>
<span class="line"><span>    &lt;meta charset=&quot;UTF-8&quot;&gt;</span></span>
<span class="line"><span>    &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;</span></span>
<span class="line"><span>    &lt;meta http-equiv=&quot;X-UA-Compatible&quot; content=&quot;ie=edge&quot;&gt;</span></span>
<span class="line"><span>    &lt;title&gt;Document&lt;/title&gt;</span></span>
<span class="line"><span>    &lt;style&gt;</span></span>
<span class="line"><span>        span {</span></span>
<span class="line"><span>            color: #aaa;</span></span>
<span class="line"><span>            font-size: 14px;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        .right {</span></span>
<span class="line"><span>            color: green;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        .wrong {</span></span>
<span class="line"><span>            color: red;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    &lt;/style&gt;</span></span>
<span class="line"><span>&lt;/head&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;body&gt;</span></span>
<span class="line"><span>    &lt;input type=&quot;text&quot; class=&quot;uname&quot;&gt; &lt;span&gt;请输入用户名&lt;/span&gt;</span></span>
<span class="line"><span>    &lt;script&gt;</span></span>
<span class="line"><span>        //  量词是设定某个模式出现的次数</span></span>
<span class="line"><span>        // 这个模式用户只能输入英文字母 数字 下划线 短横线但是有边界符和[] 这就限定了只能多选1</span></span>
<span class="line"><span>        var reg = /^[a-zA-Z0-9_-]{6,16}$/;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        var uname = document.querySelector(&#39;.uname&#39;);</span></span>
<span class="line"><span>        var span = document.querySelector(&#39;span&#39;);</span></span>
<span class="line"><span>        uname.onblur = function() {</span></span>
<span class="line"><span>            if (reg.test(this.value)) {</span></span>
<span class="line"><span>                console.log(&#39;正确的&#39;);</span></span>
<span class="line"><span>                span.className = &#39;right&#39;;</span></span>
<span class="line"><span>                span.innerHTML = &#39;用户名格式输入正确&#39;;</span></span>
<span class="line"><span>            } else {</span></span>
<span class="line"><span>                console.log(&#39;错误的&#39;);</span></span>
<span class="line"><span>                span.className = &#39;wrong&#39;;</span></span>
<span class="line"><span>                span.innerHTML = &#39;用户名格式输入不正确&#39;;</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    &lt;/script&gt;</span></span>
<span class="line"><span>&lt;/body&gt;</span></span>
<span class="line"><span>&lt;/html&gt;</span></span></code></pre></div><h2 id="_3-2数字的千分位分割法" tabindex="-1">3.2数字的千分位分割法 <a class="header-anchor" href="#_3-2数字的千分位分割法" aria-label="Permalink to &quot;3.2数字的千分位分割法&quot;">​</a></h2><p>将123456789 转化为 123，456，789 观察题目的规律就是从后往前，每三个数字前加一个逗号，（需要注意的是开头不需要加逗号，）。是不是很符合 (?=p)的规律呢？p可以表示每三个数字，要添加的逗号所处的位置正好是(?=p)匹配出来的位置。</p><ul><li>第一步，尝试先把后面第一个逗号弄出来</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>let price = &#39;123456789&#39;</span></span>
<span class="line"><span>let priceReg = /(?=\\d{3}$)/</span></span>
<span class="line"><span></span></span>
<span class="line"><span>console.log(price.replace(priceReg, &#39;,&#39;)) // 123456,789</span></span></code></pre></div><ul><li>第二步，把所有的逗号都弄出来 要把所有的逗号都弄出来，主要要解决的问题是怎么表示三个数字一组,也就是3的倍数。我们知道正则中括号可以把一个p模式变成一个小整体，所以利用括号的性质，可以这样写</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>let price = &#39;123456789&#39;</span></span>
<span class="line"><span>let priceReg = /(?=(\\d{3})+$)/g</span></span>
<span class="line"><span></span></span>
<span class="line"><span>console.log(price.replace(priceReg, &#39;,&#39;)) // ,123,456,789</span></span></code></pre></div><ul><li>第三步，去掉首位的逗号 上面已经基本上实现需求了，但是还不够，首位会出现,那怎么把首位的逗号去除呢？想想前面是不是有一个知识正好满足这个场景？ 没错(?!p)，就是他了，两者结合就是从后往前每三个数字的位置前添加逗号，但是这个位置不能是^首位。</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>let price = &#39;123456789&#39;</span></span>
<span class="line"><span>let priceReg = /(?!^)(?=(\\d{3})+$)/g</span></span>
<span class="line"><span></span></span>
<span class="line"><span>console.log(price.replace(priceReg, &#39;,&#39;)) // 123,456,789</span></span></code></pre></div><h2 id="_3-3-手机号3-4-4分割" tabindex="-1">3.3.手机号3-4-4分割 <a class="header-anchor" href="#_3-3-手机号3-4-4分割" aria-label="Permalink to &quot;3.3.手机号3-4-4分割&quot;">​</a></h2><p>将手机号 18379836654 转化为 183-7983-6654 也就是从后往前找到这样的位置：每四个数字前的位置，并把这个位置替换为-</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>let mobile = &#39;18379836654&#39;</span></span>
<span class="line"><span>let mobileReg = /(?=(\\d{4})+$)/g</span></span>
<span class="line"><span></span></span>
<span class="line"><span>console.log(mobile.replace(mobileReg, &#39;-&#39;)) // 183-7983-6654</span></span></code></pre></div><p><strong>手机号3-4-4分割扩展</strong> 将手机号11位以内的数字转化为3-4-4格式 回想一下这样的场景，有一个表单需要收集用户的手机号，用户是一个个数字输入的，我们需要在用户输入11位手机号的过程中把其转化为3-3-4格式。即</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>123 =&gt; 123</span></span>
<span class="line"><span>1234 =&gt; 123-4</span></span>
<span class="line"><span>12345 =&gt; 123-45</span></span>
<span class="line"><span>123456 =&gt; 123-456</span></span>
<span class="line"><span>1234567 =&gt; 123-4567</span></span>
<span class="line"><span>12345678 =&gt; 123-4567-8</span></span>
<span class="line"><span>123456789 =&gt; 123-4567-89</span></span>
<span class="line"><span>12345678911 =&gt; 123-4567-8911</span></span></code></pre></div><p>这样用(?=p)就不太合适了，例如1234就会变成-1234。 想想前面的知识点有适合处理这种场景的吗？是的(?&lt;=p)</p><p><strong>第一步, 将第一个-弄出来</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>const formatMobile = (mobile) =&gt; {</span></span>
<span class="line"><span>    return String(mobile).replace(/(?&lt;=\\d{3})\\d+/, &#39;-&#39;)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>console.log(formatMobile(123)) // 123</span></span>
<span class="line"><span>console.log(formatMobile(1234)) // 123-</span></span></code></pre></div><p><strong>将第二个-弄出来</strong> 将第一个-弄出来之后，字符的长度多了一位，原本1234567(这个位置插入-)8，要变成往后移一位</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>const formatMobile = (mobile) =&gt; {</span></span>
<span class="line"><span>    return String(mobile).slice(0,11)</span></span>
<span class="line"><span>        .replace(/(?&lt;=\\d{3})\\d+/, ($0) =&gt; &#39;-&#39; + $0)</span></span>
<span class="line"><span>        .replace(/(?&lt;=[\\d-]{8})\\d{1,4}/, ($0) =&gt; &#39;-&#39; + $0)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>console.log(formatMobile(123)) // 123</span></span>
<span class="line"><span>console.log(formatMobile(1234)) // 123-4</span></span>
<span class="line"><span>console.log(formatMobile(12345)) // 123-45</span></span>
<span class="line"><span>console.log(formatMobile(123456)) // 123-456</span></span>
<span class="line"><span>console.log(formatMobile(1234567)) // 123-4567</span></span>
<span class="line"><span>console.log(formatMobile(12345678)) // 123-4567-8</span></span>
<span class="line"><span>console.log(formatMobile(123456789)) // 123-4567-89</span></span>
<span class="line"><span>console.log(formatMobile(12345678911)) // 123-4567-8911</span></span></code></pre></div><h2 id="_3-4-验证密码的合法性" tabindex="-1">3.4：验证密码的合法性 <a class="header-anchor" href="#_3-4-验证密码的合法性" aria-label="Permalink to &quot;3.4：验证密码的合法性&quot;">​</a></h2><p>密码长度是6-12位，由数字、小写字符和大写字母组成，但必须至少包括2种字符 题目由三个条件组成 ① 密码长度是6-12位 ② 由数字、小写字符和大写字母组成 ③ 必须至少包括2种字符</p><p><strong>第一步写出条件①和②和正则</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>let reg = /^[a-zA-Z\\d]{6,12}$/</span></span></code></pre></div><p><strong>第二步，必须包含某种字符（数字、小写字母、大写字母）</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>let reg = /(?=.*\\d)/</span></span>
<span class="line"><span>// 这个正则的意思是，匹配的是一个位置，这个位置需要满足\`任意数量的符号，紧跟着是个数字\`，注意它最终得到的是个位置，而不是数字或者是数字前面有任意的东西</span></span>
<span class="line"><span></span></span>
<span class="line"><span>console.log(reg.test(&#39;hello&#39;)) // false</span></span>
<span class="line"><span>console.log(reg.test(&#39;hello1&#39;)) // true</span></span>
<span class="line"><span>console.log(reg.test(&#39;hel2lo&#39;)) // true</span></span></code></pre></div><p><strong>第三步，写出完整的正则</strong> 必须包含两种字符，有下面四种排列组合方式</p><p>① 数字和小写字母组合 ② 数字和大写字母组合 ③ 小写字母与大写字母组合 ④ 数字、小写字母、大写字母一起组合（但其实前面三种已经覆盖了第四种了）</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// 表示条件①和②</span></span>
<span class="line"><span>// let reg = /((?=.*\\d)((?=.*[a-z])|(?=.*[A-Z])))/</span></span>
<span class="line"><span>// 表示条件条件③</span></span>
<span class="line"><span>// let reg = /(?=.*[a-z])(?=.*[A-Z])/</span></span>
<span class="line"><span>// 表示条件①②③</span></span>
<span class="line"><span>// let reg = /((?=.*\\d)((?=.*[a-z])|(?=.*[A-Z])))|(?=.*[a-z])(?=.*[A-Z])/</span></span>
<span class="line"><span>// 表示题目所有条件</span></span>
<span class="line"><span>let reg = /((?=.*\\d)((?=.*[a-z])|(?=.*[A-Z])))|(?=.*[a-z])(?=.*[A-Z])^[a-zA-Z\\d]{6,12}$/</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>console.log(reg.test(&#39;123456&#39;)) // false</span></span>
<span class="line"><span>console.log(reg.test(&#39;aaaaaa&#39;)) // false</span></span>
<span class="line"><span>console.log(reg.test(&#39;AAAAAAA&#39;)) // false</span></span>
<span class="line"><span>console.log(reg.test(&#39;1a1a1a&#39;)) // true</span></span>
<span class="line"><span>console.log(reg.test(&#39;1A1A1A&#39;)) // true</span></span>
<span class="line"><span>console.log(reg.test(&#39;aAaAaA&#39;)) // true</span></span>
<span class="line"><span>console.log(reg.test(&#39;1aA1aA1aA&#39;)) // true</span></span></code></pre></div><h2 id="_3-5匹配id" tabindex="-1">3.5匹配id <a class="header-anchor" href="#_3-5匹配id" aria-label="Permalink to &quot;3.5匹配id&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// 1</span></span>
<span class="line"><span>let regex = /id=&quot;.*?&quot;/ // 想想为什么要加? 不加的话 连后面的class都会匹配到</span></span>
<span class="line"><span>let string = &#39;&lt;div id=&quot;container&quot; class=&quot;main&quot;&gt;&lt;/div&gt;&#39;;</span></span>
<span class="line"><span>console.log(string.match(regex)[0]);</span></span>
<span class="line"><span>// 2</span></span>
<span class="line"><span>let regex = /id=&quot;[^&quot;]*&quot;/</span></span>
<span class="line"><span>let string = &#39;&lt;div id=&quot;container&quot; class=&quot;main&quot;&gt;&lt;/div&gt;&#39;;</span></span>
<span class="line"><span>console.log(string.match(regex)[0]);</span></span></code></pre></div><h2 id="_3-6匹配16进制的颜色值" tabindex="-1">3.6匹配16进制的颜色值 <a class="header-anchor" href="#_3-6匹配16进制的颜色值" aria-label="Permalink to &quot;3.6匹配16进制的颜色值&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// 要求匹配如下颜色</span></span>
<span class="line"><span>/*</span></span>
<span class="line"><span>#ffbbad</span></span>
<span class="line"><span>#Fc01DF</span></span>
<span class="line"><span>#FFF</span></span>
<span class="line"><span>#ffE</span></span>
<span class="line"><span>*/</span></span>
<span class="line"><span></span></span>
<span class="line"><span>let regex = /#([a-fA-F\\d]{6}|[a-fA-F\\d]{3})/g</span></span>
<span class="line"><span>let string = &quot;#ffbbad #Fc01DF #FFF #ffE&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>console.log(string.match(regex))</span></span>
<span class="line"><span>//  [&quot;#ffbbad&quot;, &quot;#Fc01DF&quot;, &quot;#FFF&quot;, &quot;#ffE&quot;]</span></span></code></pre></div><h2 id="_3-7匹配24小时制时间" tabindex="-1">3.7匹配24小时制时间 <a class="header-anchor" href="#_3-7匹配24小时制时间" aria-label="Permalink to &quot;3.7匹配24小时制时间&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>/*</span></span>
<span class="line"><span>    要求匹配</span></span>
<span class="line"><span>  23:59</span></span>
<span class="line"><span>  02:07</span></span>
<span class="line"><span>*/</span></span>
<span class="line"><span>// 解析：</span></span>
<span class="line"><span>// 第一位：可以是0、1、2</span></span>
<span class="line"><span>// 第二位：当第一位位0或者1的时候，可以是0到9、第一位是2的时候，只可以是0到3</span></span>
<span class="line"><span>// 第三位：固定是冒号：</span></span>
<span class="line"><span>// 第四位：可以是0到5</span></span>
<span class="line"><span>// 第五位：0到9</span></span>
<span class="line"><span></span></span>
<span class="line"><span>let regex = /^([01]\\d|2[0-3]):[0-5]\\d$/</span></span>
<span class="line"><span></span></span>
<span class="line"><span>console.log(regex.test(&#39;23:59&#39;)) // true</span></span>
<span class="line"><span>console.log(regex.test(&#39;02:07&#39;))// true</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 衍生题，可以是非0</span></span>
<span class="line"><span>let regex = /^(0?\\d|1\\d|2[0-3]):(0?|[1-5])\\d/</span></span>
<span class="line"><span></span></span>
<span class="line"><span>console.log( regex.test(&quot;23:59&quot;) ) // true</span></span>
<span class="line"><span>console.log( regex.test(&quot;02:07&quot;) ) // true</span></span>
<span class="line"><span>console.log( regex.test(&quot;7:09&quot;) ) // true</span></span></code></pre></div><h2 id="_3-8匹配日期" tabindex="-1">3.8匹配日期 <a class="header-anchor" href="#_3-8匹配日期" aria-label="Permalink to &quot;3.8匹配日期&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>/*</span></span>
<span class="line"><span>    要求匹配</span></span>
<span class="line"><span>  yyyy-mm-dd格式的日期</span></span>
<span class="line"><span>  注意月份、和日的匹配</span></span>
<span class="line"><span>*/</span></span>
<span class="line"><span></span></span>
<span class="line"><span>let regex = /\\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\\d|3[01])/</span></span>
<span class="line"><span></span></span>
<span class="line"><span>console.log( regex.test(&quot;2017-06-10&quot;) ) // true</span></span>
<span class="line"><span>console.log( regex.test(&quot;2017-11-10&quot;) ) // true</span></span>
<span class="line"><span>console.log( regex.test(&quot;2017-00-10&quot;) ) // false</span></span></code></pre></div><h2 id="_3-9trim方法模拟" tabindex="-1">3.9trim方法模拟 <a class="header-anchor" href="#_3-9trim方法模拟" aria-label="Permalink to &quot;3.9trim方法模拟&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// 1. 提取中间关键字符, 使用的分组引用</span></span>
<span class="line"><span>const trim1 = (str) =&gt; {</span></span>
<span class="line"><span>    return str.replace(/^\\s*(.*?)\\s*$/, &#39;$1&#39;)</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  // 2. 去掉开头和结尾的空字符</span></span>
<span class="line"><span>  const trim2 = (str) =&gt; {</span></span>
<span class="line"><span>      return str.replace(/^\\s*|\\s*$/g, &#39;&#39;)</span></span>
<span class="line"><span>  }</span></span></code></pre></div><h2 id="_3-10将每个单词的首字母大写" tabindex="-1">3.10将每个单词的首字母大写 <a class="header-anchor" href="#_3-10将每个单词的首字母大写" aria-label="Permalink to &quot;3.10将每个单词的首字母大写&quot;">​</a></h2><p>关键是要找到每个单词的首字母</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// my name is epeli</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const titleize = (str) =&gt; {</span></span>
<span class="line"><span>    return str.toLowerCase().replace(/(?:^|\\s)\\w/g, (c) =&gt; c.toUpperCase())</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  console.log(titleize(&#39;my name is epeli&#39;)) // My Name Is Epeli</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // 拓展，横向转驼峰，例如base-act-tab =&gt; BaseActTab</span></span>
<span class="line"><span>  &#39;base-act-tab&#39;.replace(/(?:^|-)(\\w)/g, ($0, $1) =&gt; $1.toUpperCase()) // BaseActTab</span></span></code></pre></div><h2 id="_3-11驼峰化" tabindex="-1">3.11驼峰化 <a class="header-anchor" href="#_3-11驼峰化" aria-label="Permalink to &quot;3.11驼峰化&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// -moz-transform =&gt; MozTransform</span></span>
<span class="line"><span>const camelize = (str) =&gt; {</span></span>
<span class="line"><span>    return str.replace(/[-_\\s]+(\\w)/g, (_, $1) =&gt; $1.toUpperCase())</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>console.log(camelize(&#39;-moz-transform&#39;)) // MozTransform</span></span></code></pre></div><h2 id="_3-12中划线化" tabindex="-1">3.12中划线化 <a class="header-anchor" href="#_3-12中划线化" aria-label="Permalink to &quot;3.12中划线化&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// MozTransform =&gt; -moz-transform</span></span>
<span class="line"><span>const dasherize = (str) =&gt; {</span></span>
<span class="line"><span>    return str.replace(/[A-Z]/g, ($0) =&gt; (&#39;-&#39; + $0).toLowerCase())</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>console.log(dasherize(&#39;MozTransform&#39;)) // -moz-transform</span></span></code></pre></div><h2 id="_3-13html转义和反转义" tabindex="-1">3.13HTML转义和反转义 <a class="header-anchor" href="#_3-13html转义和反转义" aria-label="Permalink to &quot;3.13HTML转义和反转义&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// html转义规则见https://blog.wpjam.com/m/character-entity/</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const escapeHTML = (str) =&gt; {</span></span>
<span class="line"><span>    const escapeChars = {</span></span>
<span class="line"><span>    &#39;&lt;&#39;: &#39;lt&#39;,</span></span>
<span class="line"><span>    &#39;&gt;&#39;: &#39;gt&#39;,</span></span>
<span class="line"><span>    &#39;&quot;&#39;: &#39;quot&#39;,</span></span>
<span class="line"><span>    &#39;&#39;&#39;: &#39;#39&#39;,</span></span>
<span class="line"><span>    &#39;&amp;&#39;: &#39;amp&#39;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  let regexp = new RegExp(\`[\${Object.keys(escapeChars).join(&#39;&#39;)}]\`, &#39;g&#39;) // 为了得到字符组[&lt;&gt;&quot;&#39;&amp;]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    return str.replace(regexp, (c) =&gt; \`&amp;\${escapeChars[ c ]};\`)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>console.log( escapeHTML(&#39;&lt;div&gt;Blah blah blah&lt;/div&gt;&#39;)) // &amp;lt;div&amp;gt;Blah blah blah&amp;lt;/div&amp;gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 反转义</span></span>
<span class="line"><span>const unescapseHTML = (str) =&gt; {</span></span>
<span class="line"><span>    const htmlEntities = {</span></span>
<span class="line"><span>    nbsp: &#39; &#39;,</span></span>
<span class="line"><span>    lt: &#39;&lt;&#39;,</span></span>
<span class="line"><span>    gt: &#39;&gt;&#39;,</span></span>
<span class="line"><span>    quot: &#39;&quot;&#39;,</span></span>
<span class="line"><span>    amp: &#39;&amp;&#39;,</span></span>
<span class="line"><span>    apos: &#39;&#39;&#39;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  return str.replace(/&amp;([^;]+);/g, ($0, $1) =&gt; {</span></span>
<span class="line"><span>        return htmlEntities[ $1 ] || &#39;&#39;</span></span>
<span class="line"><span>    })</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>console.log(unescapseHTML(&#39;&amp;lt;div&amp;gt;Blah blah blah&amp;lt;/div&amp;gt;&#39;)) // &lt;div&gt;Blah blah blah&lt;/div&gt;</span></span></code></pre></div><h2 id="_3-14匹配成对的标签" tabindex="-1">3.14匹配成对的标签 <a class="header-anchor" href="#_3-14匹配成对的标签" aria-label="Permalink to &quot;3.14匹配成对的标签&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>/*</span></span>
<span class="line"><span>    匹配</span></span>
<span class="line"><span>      &lt;title&gt;regular expression&lt;/title&gt;</span></span>
<span class="line"><span>        &lt;p&gt;laoyao bye bye&lt;/p&gt;</span></span>
<span class="line"><span>  不匹配</span></span>
<span class="line"><span>    &lt;title&gt;wrong!&lt;/p&gt;</span></span>
<span class="line"><span>*/</span></span>
<span class="line"><span>let reg = /&lt;([^&gt;]+)&gt;.*?&lt;/\\1&gt;/g</span></span>
<span class="line"><span></span></span>
<span class="line"><span>console.log(reg.test(&#39;&lt;title&gt;regular expression&lt;/title&gt;&#39;)) // true</span></span>
<span class="line"><span>console.log(reg.test(&#39;&lt;p&gt;laoyao bye bye&lt;/div&gt;&#39;)) // false</span></span></code></pre></div><h2 id="_3-15-转义" tabindex="-1">3.15.转义 <a class="header-anchor" href="#_3-15-转义" aria-label="Permalink to &quot;3.15.转义&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// 转义</span></span>
<span class="line"><span>let price = 23.43</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 想匹配字符串是否是  数字.数字的场景</span></span>
<span class="line"><span>// \\d: 表示[0-9]   +：表示重复 &gt;= 1次</span></span>
<span class="line"><span>// \\d+ 表示匹配一个或多个数字</span></span>
<span class="line"><span>// /\\d+.\\d/ 这样写是错误的原因是 . 有两层含义</span></span>
<span class="line"><span>// 1优先级高的含义是：除换行外任何字符，所以 34@34在 /\\d+.\\d/ 中也是真</span></span>
<span class="line"><span>// 2第二层含义就是普通的点，那么这个时候就需要进行转义，即：/\\d+\\.\\d/</span></span>
<span class="line"><span></span></span>
<span class="line"><span>let reg = /\\d+\\.\\d/ // 想匹配  数字.数字的场景</span></span>
<span class="line"><span>console.log(reg.test(price))</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 这个正则和上面的正则是一样的</span></span>
<span class="line"><span>    // 用new RegExp时需要用 \\\\</span></span>
<span class="line"><span>    console.log(&#39;\\\\d+\\\\.\\\\d+&#39;);</span></span>
<span class="line"><span>let reg2 = new RegExp(&#39;\\\\d+\\\\.\\\\d+&#39;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>let url = &#39;https://www.houdunren.com&#39;</span></span>
<span class="line"><span>console.log(/https?:\\/\\/\\w+\\.\\w+\\.\\w+/.test(url)))</span></span></code></pre></div><h2 id="_3-16-如何精巧匹配所有字符" tabindex="-1">3.16.如何精巧匹配所有字符 <a class="header-anchor" href="#_3-16-如何精巧匹配所有字符" aria-label="Permalink to &quot;3.16.如何精巧匹配所有字符&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// \\s：空白字符</span></span>
<span class="line"><span>// \\S：除了空白字符</span></span>
<span class="line"><span>// [\\s\\S]：匹配所有字符</span></span>
<span class="line"><span>// .+后面加s模式：匹配所有字符</span></span>
<span class="line"><span>// [\\d\\D]：匹配所有字符</span></span>
<span class="line"><span>let str = \`</span></span>
<span class="line"><span>&lt;span&gt;</span></span>
<span class="line"><span>    houdunren @@@</span></span>
<span class="line"><span>    hdcms</span></span>
<span class="line"><span>&lt;/span&gt;</span></span>
<span class="line"><span>\`</span></span>
<span class="line"><span></span></span>
<span class="line"><span>let reg01 = /&lt;span&gt;[\\s\\S]+&lt;\\/span&gt;/</span></span>
<span class="line"><span>let reg02 = /&lt;span&gt;.+&lt;\\/span&gt;/s</span></span>
<span class="line"><span>let reg03 = /&lt;span&gt;[\\d\\D]+&lt;\\/span&gt;/</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>console.log(str.match(reg01)); // 打印如下：</span></span>
<span class="line"><span>console.log(str.match(reg02)); // 打印如下：</span></span>
<span class="line"><span>console.log(str.match(reg03)); // 打印如下：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// [</span></span>
<span class="line"><span>//     &#39;&lt;span&gt;\\n    houdunren @@@\\n    hdcms\\n&lt;/span&gt;&#39;,</span></span>
<span class="line"><span>//     index: 1,</span></span>
<span class="line"><span>//     input: &#39;\\n&lt;span&gt;\\n    houdunren @@@\\n    hdcms\\n&lt;/span&gt;\\n&#39;,</span></span>
<span class="line"><span>//     groups: undefined</span></span>
<span class="line"><span>// ]</span></span></code></pre></div><h1 id="四-总结" tabindex="-1">四. 总结 <a class="header-anchor" href="#四-总结" aria-label="Permalink to &quot;四. 总结&quot;">​</a></h1><h2 id="_4-1常见简写形式" tabindex="-1">4.1常见简写形式 <a class="header-anchor" href="#_4-1常见简写形式" aria-label="Permalink to &quot;4.1常见简写形式&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>\\d // 数字 [0-9]</span></span>
<span class="line"><span>\\D // 非数字</span></span>
<span class="line"><span>\\w // [0-9a-zA-Z_]</span></span>
<span class="line"><span>\\W // [^0-9a-zA-Z_]</span></span>
<span class="line"><span>\\s // [\\t\\v\\n\\r\\f] 空格</span></span>
<span class="line"><span>\\S // [^\\t\\v\\n\\r\\f]</span></span>
<span class="line"><span>.：点 包含除了换行符之外的任何字符</span></span></code></pre></div><h2 id="_4-2量词-简写" tabindex="-1">4.2量词&amp;简写 <a class="header-anchor" href="#_4-2量词-简写" aria-label="Permalink to &quot;4.2量词&amp;简写&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>1. {m,} // 至少出现m次</span></span>
<span class="line"><span>2. {m} // 出现m次</span></span>
<span class="line"><span>3. ? // 出现0次或者1次，等价于{0,1}</span></span>
<span class="line"><span>4. + // 至少出现1次,等价于{1,}</span></span>
<span class="line"><span>5. * // 出现&gt;=0次,等价于{0,}</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>贪婪量词        惰性量词</span></span>
<span class="line"><span>{m,n}            {m,n}?</span></span>
<span class="line"><span>{m,}             {m,}?</span></span>
<span class="line"><span>?                 ??</span></span>
<span class="line"><span>+                 +?</span></span>
<span class="line"><span>*                 *?</span></span></code></pre></div><h2 id="_4-3括号" tabindex="-1">4.3括号 <a class="header-anchor" href="#_4-3括号" aria-label="Permalink to &quot;4.3括号&quot;">​</a></h2><p>括号的作用是提供了分组(括号内的正则是一个整体，即提供子表达式)，便于我们引用它</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;!DOCTYPE html&gt;</span></span>
<span class="line"><span>&lt;html lang=&quot;en&quot;&gt;</span></span>
<span class="line"><span>&lt;head&gt;</span></span>
<span class="line"><span>    &lt;meta charset=&quot;UTF-8&quot;&gt;</span></span>
<span class="line"><span>    &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;</span></span>
<span class="line"><span>    &lt;meta http-equiv=&quot;X-UA-Compatible&quot; content=&quot;ie=edge&quot;&gt;</span></span>
<span class="line"><span>    &lt;title&gt;Document&lt;/title&gt;</span></span>
<span class="line"><span>&lt;/head&gt;</span></span>
<span class="line"><span>&lt;body&gt;</span></span>
<span class="line"><span>    &lt;script&gt;</span></span>
<span class="line"><span>        // 中括号 字符集合.匹配方括号中的任意字符.</span></span>
<span class="line"><span>        // var reg = /^[abc]$/;</span></span>
<span class="line"><span>        // a 也可以 b 也可以 c 可以  a ||b || c</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 大括号  量词符. 里面表示重复次数</span></span>
<span class="line"><span>        // var reg = /^abc{3}$/; // 它只是让c重复三次   abccc</span></span>
<span class="line"><span>        // console.log(reg.test(&#39;abc&#39;));</span></span>
<span class="line"><span>        // console.log(reg.test(&#39;abcabcabc&#39;));</span></span>
<span class="line"><span>        // console.log(reg.test(&#39;abccc&#39;));</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 小括号 表示优先级</span></span>
<span class="line"><span>        var reg = /^(abc){3}$/; // 它是让abcc重复三次</span></span>
<span class="line"><span>        console.log(reg.test(&#39;abc&#39;));</span></span>
<span class="line"><span>        console.log(reg.test(&#39;abcabcabc&#39;));</span></span>
<span class="line"><span>        console.log(reg.test(&#39;abccc&#39;));</span></span>
<span class="line"><span>    &lt;/script&gt;</span></span>
<span class="line"><span>&lt;/body&gt;</span></span>
<span class="line"><span>&lt;/html&gt;</span></span></code></pre></div>`,168),d=[g];function u(h,b,m,v,x,f){return a(),n("div",null,d)}const q=s(r,[["render",u]]);export{_ as __pageData,q as default};
