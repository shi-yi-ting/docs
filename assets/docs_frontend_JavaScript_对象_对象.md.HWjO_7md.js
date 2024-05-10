import{_ as s,c as a,o as n,U as p}from"./chunks/framework.FpOEJISx.js";const g=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"docs/frontend/JavaScript/对象/对象.md","filePath":"docs/frontend/JavaScript/对象/对象.md"}'),e={name:"docs/frontend/JavaScript/对象/对象.md"},t=p(`<h2 id="检查属性是否存在对象中" tabindex="-1">检查属性是否存在对象中 <a class="header-anchor" href="#检查属性是否存在对象中" aria-label="Permalink to &quot;检查属性是否存在对象中&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>const person = { name: &quot;dby&quot;, salary: 1000 };</span></span>
<span class="line"><span>console.log(&#39;salary&#39; in person); // true</span></span>
<span class="line"><span>console.log(&#39;age&#39; in person); // false</span></span></code></pre></div><p>但是 in 关键字其实并不安全，会把原型上的属性也包括进去，例如：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&quot;hasOwnProperty&quot; in {}; // true</span></span>
<span class="line"><span>&quot;toString&quot; in {}; // true</span></span></code></pre></div><p>所以推荐使用下面的方法进行判断：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>Object.prototype.hasOwnProperty.call(person, &quot;salary&quot;); // true</span></span></code></pre></div><p>不过上面这样的问题就是太长了，每次使用都要这样写很麻烦。ECMA 有一个新的提案 Object.hasOwn() ，相当于 Object.prototype.hasOwnProperty.call() 的别名：</p><p>需要注意这个语法存在兼容性问题（Chrome &gt; 92），不过只要正确配置 polyfill 就可以放心使用。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>Object.hasOwn(person, &quot;salary&quot;); // true</span></span></code></pre></div><p><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwn" target="_blank" rel="noreferrer">参考链接</a></p><h2 id="对象的遍历" tabindex="-1">对象的遍历 <a class="header-anchor" href="#对象的遍历" aria-label="Permalink to &quot;对象的遍历&quot;">​</a></h2><p>项目中很多同事都会这样写：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>for (let key in obj) {</span></span>
<span class="line"><span>    if (Object.prototype.hasOwnProperty.call(obj, key)) {</span></span>
<span class="line"><span>      // ...</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>用 Object.keys 或者 Object.entries 转成数组就可以用数组方法遍历了，而且遍历的是自身属性，不会遍历到原型上。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>Object.keys(obj).forEach(key =&gt; {</span></span>
<span class="line"><span>    // ...</span></span>
<span class="line"><span>  })</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Object.entries(obj).forEach(([key, val]) =&gt; {</span></span>
<span class="line"><span>// ...</span></span>
<span class="line"><span>})</span></span></code></pre></div><p>举个例子，将对象的 key、value 拼接为查询字符串：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>const _stringify = (obj) =&gt; Object.entries(obj).map(([key, val]) =&gt; \`\${key}=\${val}\`).join(&quot;&amp;&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>_stringify({</span></span>
<span class="line"><span>    a: 1,</span></span>
<span class="line"><span>    b: 2,</span></span>
<span class="line"><span>    c: &quot;2333&quot;</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span>// &#39;a=1&amp;b=2&amp;c=2333&#39;</span></span></code></pre></div><p>反驳：有时候不想遍历整个对象，数组方法不能用 break 终止循环呀。 吐槽：看来你对数组方法掌握还是不够彻底，使用 find 方法找到符合条件的项就不会继续遍历。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>Object.keys(obj).find(key =&gt; key === &quot;name&quot;);</span></span></code></pre></div><p>总结：在开发中尽量不要写 for 循环，无论数组和对象。对象就通过 Object.keys 、Object.values 、Object.entries 转为数组进行遍历。这样可以写成 JS 表达式，充分利用函数式编程。</p><h2 id="创建计数器对象或映射" tabindex="-1">创建计数器对象或映射 <a class="header-anchor" href="#创建计数器对象或映射" aria-label="Permalink to &quot;创建计数器对象或映射&quot;">​</a></h2><p>大多数情况下，需要通过创建计数器对象或映射来解决问题，该对象或映射将变量作为键进行跟踪，并将其频率/出现次数作为值进行跟踪。</p><p>方式一：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>let string = &#39;kapilalipak&#39;;</span></span>
<span class="line"><span>const table={};</span></span>
<span class="line"><span>for(let char of string) {</span></span>
<span class="line"><span>    table[char] = table[char] + 1 || 1; ???</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>console.log(&#39;table&#39;, table) // 输出 { k: 2, a: 3, p: 2, i: 2, l: 2 }</span></span></code></pre></div><p>方式二：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>const countMap = new Map();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>for (let i = 0; i &lt; string.length; i++) {</span></span>
<span class="line"><span>    if (countMap.has(string[i])) {</span></span>
<span class="line"><span>        countMap.set(string[i], countMap.get(string[i]) + 1);</span></span>
<span class="line"><span>    } else {</span></span>
<span class="line"><span>        countMap.set(string[i], 1);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>console.log(&#39;countMap&#39;, countMap) // 输出 Map(5) {&quot;k&quot; =&gt; 2, &quot;a&quot; =&gt; 3, &quot;p&quot; =&gt; 2, &quot;i&quot; =&gt; 2, &quot;l&quot; =&gt; 2}</span></span></code></pre></div><h2 id="将object属性转成属性数组" tabindex="-1">将Object属性转成属性数组 <a class="header-anchor" href="#将object属性转成属性数组" aria-label="Permalink to &quot;将Object属性转成属性数组&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>使用Object.entries(),Object.keys()和Object.values()</span></span>
<span class="line"><span>const obj = { a: 1, b: 2, c: 3 };</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Object.entries(obj);</span></span>
<span class="line"><span>// 输出</span></span>
<span class="line"><span>(3) [Array(2), Array(2), Array(2)]</span></span>
<span class="line"><span>0: (2) [&quot;a&quot;, 1]</span></span>
<span class="line"><span>1: (2) [&quot;b&quot;, 2]</span></span>
<span class="line"><span>2: (2) [&quot;c&quot;, 3]</span></span>
<span class="line"><span>length: 3</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Object.keys(obj);</span></span>
<span class="line"><span>(3) [&quot;a&quot;, &quot;b&quot;, &quot;c&quot;]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Object.values(obj);</span></span>
<span class="line"><span>(3) [1, 2, 3]</span></span></code></pre></div><h2 id="object-entries" tabindex="-1">Object.entries <a class="header-anchor" href="#object-entries" aria-label="Permalink to &quot;Object.entries&quot;">​</a></h2><p>大多数开发人员使用 Object.keys 方法来迭代对象。 此方法仅返回对象键的数组，而不返回值。 我们可以使用 Object.entries 来获取键和值。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>const person = {</span></span>
<span class="line"><span>    name: &#39;前端小智&#39;,</span></span>
<span class="line"><span>    age: 20</span></span>
<span class="line"><span>  };</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Object.keys(person); // [&#39;name&#39;, &#39;age&#39;]</span></span>
<span class="line"><span>Object.entries(data); // [[&#39;name&#39;, &#39;前端小智&#39;], [&#39;age&#39;, 20]]</span></span></code></pre></div><p>为了迭代一个对象，我们可以执行以下操作：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>Object.keys(person).forEach((key) =&gt; {</span></span>
<span class="line"><span>    console.log(\`\${key} is \${person[key]}\`);</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 使用 entries 获取键和值</span></span>
<span class="line"><span>Object.entries(person).forEach(([key, value]) =&gt; {</span></span>
<span class="line"><span>console.log(\`\${key} is \${value}\`);</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// name is 前端小智</span></span>
<span class="line"><span>// age is 20</span></span></code></pre></div><p>上述两种方法都返回相同的结果，但 Object.entries 获取键值对更容易。 对象判空</p><h2 id="对象判空" tabindex="-1">对象判空 <a class="header-anchor" href="#对象判空" aria-label="Permalink to &quot;对象判空&quot;">​</a></h2><p><a href="https://juejin.cn/post/7064158174579949576" target="_blank" rel="noreferrer">参考链接</a></p>`,36),l=[t];function i(c,o,r,h,d,u){return n(),a("div",null,l)}const v=s(e,[["render",i]]);export{g as __pageData,v as default};
