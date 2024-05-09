import{_ as s,c as a,o as n,U as p}from"./chunks/framework.zpeVKxWT.js";const b=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"docs/frontend/JavaScript/工具函数/解构赋值.md","filePath":"docs/frontend/JavaScript/工具函数/解构赋值.md"}'),e={name:"docs/frontend/JavaScript/工具函数/解构赋值.md"},l=p(`<h2 id="提取数据" tabindex="-1">提取数据 <a class="header-anchor" href="#提取数据" aria-label="Permalink to &quot;提取数据&quot;">​</a></h2><h3 id="简单案例" tabindex="-1">简单案例 <a class="header-anchor" href="#简单案例" aria-label="Permalink to &quot;简单案例&quot;">​</a></h3><p>先来看看如何在 JavaScript 中解构对象，可以从这个商品对象的简单示例开始。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>const product = {</span></span>
<span class="line"><span>    id: 1,</span></span>
<span class="line"><span>    title: &quot;Nike Air Zoom Pegasus 38&quot;,</span></span>
<span class="line"><span>    product_image: &quot;/resources/products/01.jpeg&quot;,</span></span>
<span class="line"><span>    shown: &quot;White/Pure Platinum/Midnight Navy/Wolf Grey&quot;,</span></span>
<span class="line"><span>    price: 120,</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span>const { id, price, title } = product;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 这样，就可以通过以下方式访问相应的属性：</span></span>
<span class="line"><span>console.log(id); // 1</span></span>
<span class="line"><span>console.log(price); // 120</span></span>
<span class="line"><span>console.log(title); // Nike Air Zoom Pegasus 38</span></span></code></pre></div><h3 id="复杂案例" tabindex="-1">复杂案例 <a class="header-anchor" href="#复杂案例" aria-label="Permalink to &quot;复杂案例&quot;">​</a></h3><p>解构一个更复杂的对象，即对象中的对象</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>const products = {</span></span>
<span class="line"><span>    1: {</span></span>
<span class="line"><span>        id: &#39;1&#39;,</span></span>
<span class="line"><span>        title: &quot;Nike Air Zoom Pegasus 38&quot;,</span></span>
<span class="line"><span>        price: 120,</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    2: {</span></span>
<span class="line"><span>        id: &#39;2&#39;,</span></span>
<span class="line"><span>        title: &quot;Nike Air Zoom Alphafly NEXT%&quot;,</span></span>
<span class="line"><span>        price: 275,</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    3: {</span></span>
<span class="line"><span>        id: &#39;3&#39;,</span></span>
<span class="line"><span>        title: &quot;Nike Zoom Fly 4&quot;,</span></span>
<span class="line"><span>        price: 89.0,</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const {</span></span>
<span class="line"><span>    2: { id, title, price },</span></span>
<span class="line"><span>} = products;</span></span>
<span class="line"><span>console.log(id); // 2</span></span>
<span class="line"><span>console.log(title); // Nike Air Zoom Alphafly NEXT%</span></span>
<span class="line"><span>console.log(price); // 275</span></span></code></pre></div><h3 id="使用在函数上" tabindex="-1">使用在函数上 <a class="header-anchor" href="#使用在函数上" aria-label="Permalink to &quot;使用在函数上&quot;">​</a></h3><p>在 JavaScript 中，数据可以是变量和方法，因此解构赋值也适合用在函数参数的定义，如下：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>const printArticle = ({ title, remark }) =&gt; {</span></span>
<span class="line"><span>    console.log(title);</span></span>
<span class="line"><span>    console.log(remark);</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span>printArticle({</span></span>
<span class="line"><span>    title: &quot;JavaScript 解构赋值&quot;,</span></span>
<span class="line"><span>    remark: &quot;解构赋值的实用场景介绍&quot;,</span></span>
<span class="line"><span>});</span></span></code></pre></div><h2 id="别名取值" tabindex="-1">别名取值 <a class="header-anchor" href="#别名取值" aria-label="Permalink to &quot;别名取值&quot;">​</a></h2><p>如果想创建与属性名称不同的变量，那么可以使用对象解构的别名功能。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>const { identifier: aliasIdentifier } = expression;</span></span></code></pre></div><p>identifier 是要访问的属性的名称，aliasIdentifier 是变量名称。具体用法如下：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>const obj = {</span></span>
<span class="line"><span>    // 这个键名太长了，我们希望把它换掉</span></span>
<span class="line"><span>    aaa_bbb_ccc: {</span></span>
<span class="line"><span>      name: &quot;dby&quot;,</span></span>
<span class="line"><span>      age: 12,</span></span>
<span class="line"><span>      sex: true</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>const { aaa_bbb_ccc: user } = obj;</span></span>
<span class="line"><span>console.log(user); // { name: &quot;dby&quot;, age: 12, sex: true }</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>const products = {</span></span>
<span class="line"><span>    1: {</span></span>
<span class="line"><span>        title: &quot;Nike Air Zoom Pegasus 38&quot;,</span></span>
<span class="line"><span>        price: 120,</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    2: {</span></span>
<span class="line"><span>        title: &quot;Nike Air Zoom Alphafly NEXT%&quot;,</span></span>
<span class="line"><span>        price: 275,</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    3: {</span></span>
<span class="line"><span>        title: &quot;Nike Zoom Fly 4&quot;,</span></span>
<span class="line"><span>        price: 89.0,</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span>const {</span></span>
<span class="line"><span>    2: { price: productPrice },</span></span>
<span class="line"><span>} = products;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>console.log(productPrice); // 275</span></span></code></pre></div><h2 id="动态属性" tabindex="-1">动态属性 <a class="header-anchor" href="#动态属性" aria-label="Permalink to &quot;动态属性&quot;">​</a></h2><p>可以使用动态名称提取到变量属性（属性名称在运行时已知）：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>const { [propName]: identifier } = expression;</span></span></code></pre></div><p>propName 表达式应计算为属性名称（通常是字符串），标识符应指示解构后创建的变量名称，用法如下：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>const products = {</span></span>
<span class="line"><span>    1: {</span></span>
<span class="line"><span>        title: &quot;Nike Air Zoom Pegasus 38&quot;,</span></span>
<span class="line"><span>        price: 120,</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    2: {</span></span>
<span class="line"><span>        title: &quot;Nike Air Zoom Alphafly NEXT%&quot;,</span></span>
<span class="line"><span>        price: 275,</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    3: {</span></span>
<span class="line"><span>        title: &quot;Nike Zoom Fly 4&quot;,</span></span>
<span class="line"><span>        price: 89.0,</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span>const productKey = &quot;1&quot;;</span></span>
<span class="line"><span>const { [productKey]: product } = products;</span></span>
<span class="line"><span>console.log(product); // { title: &#39;Nike Air Zoom Pegasus 38&#39;, price: 120 }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 上面代码中，可以通过更新 productKey 的值进而使得 product 的值也跟随变化。</span></span></code></pre></div><h2 id="对象解构中的-rest" tabindex="-1">对象解构中的 Rest <a class="header-anchor" href="#对象解构中的-rest" aria-label="Permalink to &quot;对象解构中的 Rest&quot;">​</a></h2><p>将 rest 语法添加到解构中，Rest 属性收集那些尚未被解构模式拾取的剩余可枚举属性键。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>const { identifier, ...rest } = expression;</span></span></code></pre></div><p>解构后，变量标识符包含属性值。 rest 变量是一个具有其余属性的普通对象。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>const product = {</span></span>
<span class="line"><span>    title: &quot;Nike Air Zoom Pegasus 38&quot;,</span></span>
<span class="line"><span>    price: 120,</span></span>
<span class="line"><span>    quantity: 5,</span></span>
<span class="line"><span>    category_id: 1,</span></span>
<span class="line"><span>    reviews: 9830,</span></span>
<span class="line"><span>    total: 45,</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span>const { title, ...others } = product;</span></span>
<span class="line"><span>console.log(others); // { price: 120, quantity: 5, category_id: 1, reviews: 9830, total: 45 }</span></span></code></pre></div><p>对于数组，可以通过 Rest 的实现首尾值的获取：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>const numbers = [1, 2, 3];</span></span>
<span class="line"><span>const [head, ...tail] = numbers;</span></span>
<span class="line"><span>console.log(head); // 1</span></span>
<span class="line"><span>console.log(tail); // [ 2, 3 ]</span></span></code></pre></div><h2 id="默认值" tabindex="-1">默认值 <a class="header-anchor" href="#默认值" aria-label="Permalink to &quot;默认值&quot;">​</a></h2><p>正如前面介绍的那样可以在解构数组时为其分配默认值：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>const RGBA = [255, 34];</span></span>
<span class="line"><span>const [R, G, B = 0, A = 1] = RGBA;</span></span>
<span class="line"><span>console.log(R); // 255</span></span>
<span class="line"><span>console.log(G); // 34</span></span>
<span class="line"><span>console.log(B); // 0</span></span>
<span class="line"><span>console.log(A); // 1</span></span></code></pre></div><p>这样，可以将确保在 B、A 未定义的情况下有一个默认值。</p><p>对象的解构可以使用默认值，默认值生效的条件是，对象的属性值严格等于 undefined ：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>fetchUserInfo()</span></span>
<span class="line"><span>  .then(({ aaa_bbb_ccc: user = {} }) =&gt; {</span></span>
<span class="line"><span>    // ...</span></span>
<span class="line"><span>})</span></span></code></pre></div><h2 id="使用短路避免报错" tabindex="-1">使用短路避免报错 <a class="header-anchor" href="#使用短路避免报错" aria-label="Permalink to &quot;使用短路避免报错&quot;">​</a></h2><p>解构赋值虽然好用，但是要注意解构的对象不能为 undefined 、null ，否则会报错，故要给被解构的对象一个默认值：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>const {a,b,c,d,e} = obj || {};</span></span></code></pre></div>`,37),i=[l];function t(c,o,r,d,u,h){return n(),a("div",null,i)}const v=s(e,[["render",t]]);export{b as __pageData,v as default};
