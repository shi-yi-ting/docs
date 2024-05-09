import{_ as s,c as a,o as n,U as p}from"./chunks/framework.zpeVKxWT.js";const g=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"docs/frontend/HTML+CSS/CSS/rem.md","filePath":"docs/frontend/HTML+CSS/CSS/rem.md"}'),e={name:"docs/frontend/HTML+CSS/CSS/rem.md"},l=p(`<h2 id="依赖安装" tabindex="-1">依赖安装 <a class="header-anchor" href="#依赖安装" aria-label="Permalink to &quot;依赖安装&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>npm install postcss-pxtorem --save</span></span>
<span class="line"><span>npm install lib-flexible --save</span></span>
<span class="line"><span>npm install postcss-loader --save // ???</span></span></code></pre></div><h2 id="postcss-config-js" tabindex="-1">postcss.config.js <a class="header-anchor" href="#postcss-config-js" aria-label="Permalink to &quot;postcss.config.js&quot;">​</a></h2><p>新建一个postcss.config.js文件</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>module.exports = {</span></span>
<span class="line"><span>		&#39;plugins&#39;: {</span></span>
<span class="line"><span>        &#39;autoprefixer&#39;: {</span></span>
<span class="line"><span>            overrideBrowserslist: [</span></span>
<span class="line"><span>                &#39;Android 4.1&#39;,</span></span>
<span class="line"><span>                &#39;iOS 7.1&#39;,</span></span>
<span class="line"><span>                &#39;Chrome &gt; 31&#39;,</span></span>
<span class="line"><span>                &#39;not ie &lt;= 11&#39;,  //不考虑IE浏览器</span></span>
<span class="line"><span>                &#39;ff &gt;= 30&#39;, //仅新版本用“ff&gt;=30</span></span>
<span class="line"><span>                &#39;&gt; 1%&#39;,//  全球统计有超过1%的使用率使用“&gt;1%”;</span></span>
<span class="line"><span>                &#39;last 2 versions&#39;, // 所有主流浏览器最近2个版本</span></span>
<span class="line"><span>            ],</span></span>
<span class="line"><span>            grid: true ,// 开启grid布局的兼容(浏览器IE除外其他都能兼容grid，可以关闭开启)</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        &#39;postcss-pxtorem&#39;: {</span></span>
<span class="line"><span>            rootValue: 75, //75表示750设计稿，37.5表示375设计稿</span></span>
<span class="line"><span>            unitPrecision: 6, // 计算结果保留 6 位小数</span></span>
<span class="line"><span>            selectorBlackList: [&#39;.no-rem&#39;, &#39;no-rem&#39;], // 要忽略的选择器并保留为px。</span></span>
<span class="line"><span>            propList: [&#39;*&#39;], // 可以从px更改为rem的属性  感叹号开头的不转换</span></span>
<span class="line"><span>            replace: true, // 转换成 rem 以后，不保留原来的 px 单位属性</span></span>
<span class="line"><span>            mediaQuery: true, // 允许在媒体查询中转换px。</span></span>
<span class="line"><span>            minPixelValue: 2, // 设置要替换的最小像素值。</span></span>
<span class="line"><span>            exclude: /node_modules/i // 排除 node_modules 文件(node_modules 内文件禁止转换)</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="main-js-中引用" tabindex="-1">main.js 中引用 <a class="header-anchor" href="#main-js-中引用" aria-label="Permalink to &quot;main.js 中引用&quot;">​</a></h2><p>在main.js中引入lib-flexible</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>import &#39;lib-flexible/flexible&#39;</span></span></code></pre></div>`,8),i=[l];function t(o,c,r,d,m,h){return n(),a("div",null,i)}const _=s(e,[["render",t]]);export{g as __pageData,_ as default};
