import{_ as n,c as s,o as a,U as p}from"./chunks/framework.FpOEJISx.js";const b=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"docs/frontend/JavaScript/其它/其它.md","filePath":"docs/frontend/JavaScript/其它/其它.md"}'),e={name:"docs/frontend/JavaScript/其它/其它.md"},l=p(`<h2 id="动态处理年份下拉框" tabindex="-1">动态处理年份下拉框 <a class="header-anchor" href="#动态处理年份下拉框" aria-label="Permalink to &quot;动态处理年份下拉框&quot;">​</a></h2><p>场景： 下拉框年份切换获取某年份数据时, 2022年过完, 最新的年份应当为2023, 下拉框的选项应当更新, 前端不宜写成固定的, 下拉框选项年份值应该动态获取 1.从后台数据字典获取, 弊端是需要人为更新维护 2.前端动态生成, 一下案例就是前端动态生成, 该函数需提供一个计算参考值</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// vue3的方式定义变量</span></span>
<span class="line"><span>const year = reactive({</span></span>
<span class="line"><span>    list: [],</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 实现方法</span></span>
<span class="line"><span>const getYearList = (num) =&gt; {</span></span>
<span class="line"><span>    let date = new Date()</span></span>
<span class="line"><span>    let maxYear = date.getFullYear()</span></span>
<span class="line"><span>    let diff = maxYear - num + 1</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    let len = year.list.length</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    if (diff &gt; len) {</span></span>
<span class="line"><span>        for (let i = 0; i &lt; (diff - len); i++) {</span></span>
<span class="line"><span>            let val = num + i</span></span>
<span class="line"><span>            year.list.push({</span></span>
<span class="line"><span>                label: val,</span></span>
<span class="line"><span>                value: val,</span></span>
<span class="line"><span>            })</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    console.log(&#39;yearList&#39;, year.list)</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="获取dom距视窗的距离" tabindex="-1">获取DOM距视窗的距离 <a class="header-anchor" href="#获取dom距视窗的距离" aria-label="Permalink to &quot;获取DOM距视窗的距离&quot;">​</a></h2><p><a href="https://blog.csdn.net/gao_xu_520/article/details/80365799" target="_blank" rel="noreferrer">https://blog.csdn.net/gao_xu_520/article/details/80365799</a></p><ol><li>getBoundingClientRect()用于获得页面中某个元素的左，上，右和下分别相对浏览器视窗的位置。是DOM元素到浏览器可视范围的距离（不包含文档卷起的部分）。</li><li>该函数返回一个Object对象，该对象有6个属性：top,lef,right,bottom,width,height；</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;div id=&quot;box&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>var object=document.getElementById(&#39;box&#39;);</span></span>
<span class="line"><span>rectObject = object.getBoundingClientRect();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>rectObject.top：元素上边到视窗上边的距离;</span></span>
<span class="line"><span>rectObject.right：元素右边到视窗左边的距离;</span></span>
<span class="line"><span>rectObject.bottom：元素下边到视窗上边的距离;</span></span>
<span class="line"><span>rectObject.left：元素左边到视窗左边的距离;</span></span>
<span class="line"><span>rectObject.width：是元素自身的宽</span></span>
<span class="line"><span>rectObject.height是元素自身的高</span></span></code></pre></div><h2 id="数据类型判断" tabindex="-1">数据类型判断 <a class="header-anchor" href="#数据类型判断" aria-label="Permalink to &quot;数据类型判断&quot;">​</a></h2><p><a href="https://www.cnblogs.com/lmsblogs/p/11280821.html" target="_blank" rel="noreferrer">https://www.cnblogs.com/lmsblogs/p/11280821.html</a></p><p>在JavaScript里使用typeof判断数据类型，只能区分基本类型，即：number、string、undefined、boolean、object。</p><p>对于null、array、function、object来说，使用typeof都会统一返回object字符串。要想区分对象、数组、函数、单纯使用typeof是不行的。</p><p>在JS中，可以通过Object.prototype.toString方法，判断某个对象之属于哪种内置类型。</p><p>分为null、string、boolean、number、undefined、array、function、object、date、math。</p><h3 id="判断基本类型" tabindex="-1">判断基本类型 <a class="header-anchor" href="#判断基本类型" aria-label="Permalink to &quot;判断基本类型&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>Object.prototype.toString.call(null); // &quot;[object Null]&quot;</span></span>
<span class="line"><span>Object.prototype.toString.call(undefined); // &quot;[object Undefined]&quot;</span></span>
<span class="line"><span>Object.prototype.toString.call(“abc”);// &quot;[object String]&quot;</span></span>
<span class="line"><span>Object.prototype.toString.call(123);// &quot;[object Number]&quot;</span></span>
<span class="line"><span>Object.prototype.toString.call(true);// &quot;[object Boolean]&quot;</span></span></code></pre></div><p>案例</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>let a = &quot;b&quot;</span></span>
<span class="line"><span>let b = true</span></span>
<span class="line"><span>let c = &#39;123&#39;</span></span>
<span class="line"><span>let d = 123</span></span>
<span class="line"><span>function e(){}</span></span>
<span class="line"><span>let f = undefined</span></span>
<span class="line"><span>let g = null</span></span>
<span class="line"><span>let h = /[a-z]/</span></span>
<span class="line"><span>let i = {}</span></span>
<span class="line"><span>let k = [1,2,3]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const _toString = function(val){</span></span>
<span class="line"><span>    return Object.prototype.toString.call(val).slice(8,-1)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>_toString (a)   // &#39;String&#39;</span></span>
<span class="line"><span>_toString (b)   // &#39;Boolean&#39;</span></span>
<span class="line"><span>_toString (c)   // &#39;String&#39;</span></span>
<span class="line"><span>_toString (d)   // &#39;Number&#39;</span></span>
<span class="line"><span>_toString (e)   // &#39;Function&#39;</span></span>
<span class="line"><span>_toString (f)   // &#39;Undefined&#39;</span></span>
<span class="line"><span>_toString (g)   // &#39;Null&#39;</span></span>
<span class="line"><span>_toString (h)   // &#39;RegExp&#39;</span></span>
<span class="line"><span>_toString (i)   // &#39;Object&#39;</span></span>
<span class="line"><span>_toString (k)   // &#39;Array&#39;</span></span></code></pre></div><h3 id="判断原生引用类型" tabindex="-1">判断原生引用类型 <a class="header-anchor" href="#判断原生引用类型" aria-label="Permalink to &quot;判断原生引用类型&quot;">​</a></h3><h4 id="函数类型" tabindex="-1">函数类型 <a class="header-anchor" href="#函数类型" aria-label="Permalink to &quot;函数类型&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>Function fn(){</span></span>
<span class="line"><span>    console.log(“test”);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>Object.prototype.toString.call(fn); // &quot;[object Function]&quot;</span></span></code></pre></div><h4 id="日期类型" tabindex="-1">日期类型 <a class="header-anchor" href="#日期类型" aria-label="Permalink to &quot;日期类型&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>var date = new Date();</span></span>
<span class="line"><span>Object.prototype.toString.call(date); // &quot;[object Date]&quot;</span></span></code></pre></div><h4 id="数组类型" tabindex="-1">数组类型 <a class="header-anchor" href="#数组类型" aria-label="Permalink to &quot;数组类型&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>var arr = [1,2,3];</span></span>
<span class="line"><span>Object.prototype.toString.call(arr); // &quot;[object Array]&quot;</span></span></code></pre></div><h4 id="正则表达式" tabindex="-1">正则表达式 <a class="header-anchor" href="#正则表达式" aria-label="Permalink to &quot;正则表达式&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>var reg = /[hbc]at/gi;</span></span>
<span class="line"><span>Object.prototype.toString.call(reg); // &quot;[object RegExp]&quot;</span></span></code></pre></div><h4 id="自定义类型" tabindex="-1">自定义类型 <a class="header-anchor" href="#自定义类型" aria-label="Permalink to &quot;自定义类型&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>function Person(name, age) {</span></span>
<span class="line"><span>    this.name = name;</span></span>
<span class="line"><span>    this.age = age;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>var person = new Person(&quot;Rose&quot;, 18);</span></span>
<span class="line"><span>Object.prototype.toString.call(arr); // &quot;[object Object]&quot;</span></span>
<span class="line"><span>// 很明显这种方法不能准确判断person是Person类的实例，而只能用instanceof 操作符来进行判断，如下所示：</span></span>
<span class="line"><span>console.log(person instanceof Person); // true</span></span></code></pre></div><h4 id="判断原生json对象" tabindex="-1">判断原生JSON对象 <a class="header-anchor" href="#判断原生json对象" aria-label="Permalink to &quot;判断原生JSON对象&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>var isNativeJSON = window.JSON &amp;&amp; Object.prototype.toString.call(JSON);</span></span>
<span class="line"><span>console.log(isNativeJSON);// 输出结果为”[object JSON]”说明JSON是原生的，否则不是；</span></span></code></pre></div><p>注意：Object.prototype.toString()本身是允许被修改的，而我们目前所讨论的关于Object.prototype.toString()这个方法的应用都是假设toString()方法未被修改为前提的。</p><h2 id="数组处理成树结构" tabindex="-1">数组处理成树结构 <a class="header-anchor" href="#数组处理成树结构" aria-label="Permalink to &quot;数组处理成树结构&quot;">​</a></h2><h3 id="数组数据" tabindex="-1">数组数据: <a class="header-anchor" href="#数组数据" aria-label="Permalink to &quot;数组数据:&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>list: [</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        menuId: 1,</span></span>
<span class="line"><span>        name: &#39;系统管理1&#39;,</span></span>
<span class="line"><span>        parentMenu: null,</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        menuId: 2,</span></span>
<span class="line"><span>        name: &#39;系统管理2&#39;,</span></span>
<span class="line"><span>        parentMenu: null,</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        menuId: 3,</span></span>
<span class="line"><span>        name: &#39;系统管理1_0&#39;,</span></span>
<span class="line"><span>        parentMenu: 1,</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        menuId: 4,</span></span>
<span class="line"><span>        name: &#39;系统管理1_1&#39;,</span></span>
<span class="line"><span>        parentMenu: 1,</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        menuId: 5,</span></span>
<span class="line"><span>        name: &#39;系统管理2_0&#39;,</span></span>
<span class="line"><span>        parentMenu: 2,</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        menuId: 6,</span></span>
<span class="line"><span>        name: &#39;系统管理2_2_0&#39;,</span></span>
<span class="line"><span>        parentMenu: 5,</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        menuId: 7,</span></span>
<span class="line"><span>        name: &#39;系统管理3&#39;,</span></span>
<span class="line"><span>        parentMenu: null,</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        menuId: 8,</span></span>
<span class="line"><span>        name: &#39;系统管理1-1-2&#39;,</span></span>
<span class="line"><span>        parentMenu: 4,</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>],</span></span></code></pre></div><h3 id="递归" tabindex="-1">递归 <a class="header-anchor" href="#递归" aria-label="Permalink to &quot;递归&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>const tree = (parentA, childA) =&gt; {</span></span>
<span class="line"><span>    for (const item of parentA) {</span></span>
<span class="line"><span>        item.children = []</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        for (const i in childA) {</span></span>
<span class="line"><span>            const v = childA[i]</span></span>
<span class="line"><span>            if (item.menuId === v.parentMenu) {</span></span>
<span class="line"><span>                item.children.push(v)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                // 这一步递归 如果没有下面三行代码 只能找到第一级对应的children第二级目录</span></span>
<span class="line"><span>                let c = JSON.parse(JSON.stringify(childA)) // 简单深拷贝一下</span></span>
<span class="line"><span>                // 能走到这儿，说明这个娃 已经找到父亲了 不需要在遍历了 所以删了 你要是非的不删也可以</span></span>
<span class="line"><span>                // 注意这里是具体根据业务的，如果不同父目录下面可能有相同的子目录，这里就不能删除了</span></span>
<span class="line"><span>                c.splice(i, 1)</span></span>
<span class="line"><span>                // 这里需要把当前儿子 加上【】转为数组因为tree1接受的是父，子数组</span></span>
<span class="line"><span>                tree([v], c)</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const toTree = (arr) =&gt; {</span></span>
<span class="line"><span>    // 这个就是一级数组 最后上面的数组只有三个是一级的</span></span>
<span class="line"><span>    const parentA = arr.filter((item) =&gt; !item.parentMenu)</span></span>
<span class="line"><span>    const childA = arr.filter((item) =&gt; item.parentMenu)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /** 这个就是小蝌蚪找妈妈的具体实现,其实可以写在一个函数里面,</span></span>
<span class="line"><span>     但是为了易懂,就麻烦点儿摘出来一个函数 **/</span></span>
<span class="line"><span>    tree(parentA, childA)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    return parentA</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>onMounted(() =&gt; {</span></span>
<span class="line"><span>    let tree = toTree(arr.list)</span></span>
<span class="line"><span>    console.log(&#39;tree&#39;, tree)</span></span>
<span class="line"><span>})</span></span></code></pre></div>`,36),t=[l];function i(c,o,r,d,h,u){return a(),s("div",null,t)}const m=n(e,[["render",i]]);export{b as __pageData,m as default};
