import{_ as s,c as a,o as n,U as e}from"./chunks/framework.zpeVKxWT.js";const f=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"docs/frontend/Vue/配置/postcss.config.js.md","filePath":"docs/frontend/Vue/配置/postcss.config.js.md"}'),p={name:"docs/frontend/Vue/配置/postcss.config.js.md"},t=e(`<h2 id="poetess的作用-参考链接" tabindex="-1">poetess的作用<a href="https://blog.csdn.net/lingshui147/article/details/96880944" target="_blank" rel="noreferrer">(参考链接)</a> <a class="header-anchor" href="#poetess的作用-参考链接" aria-label="Permalink to &quot;poetess的作用[(参考链接)](https://blog.csdn.net/lingshui147/article/details/96880944)&quot;">​</a></h2><p>postcss是帮我们后处理css, css已经编译完成了, 在 stylus - loader编译成css之后, 在通过postcss优化css, 通过一系列组件去优化, 比如以下, 通过autoprefixer添加css前缀</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>module.exports = {</span></span>
<span class="line"><span>    plugins: {</span></span>
<span class="line"><span>        &#39;postcss-px-to-viewport&#39;: {</span></span>
<span class="line"><span>            viewportWidth: 375, // 视窗的宽度,对应的是我们设计稿的宽度</span></span>
<span class="line"><span>            viewportHeight: 667, // 视窗的高度,对应的是我们设计稿的高度(也可以不配置)</span></span>
<span class="line"><span>            unitPrecision: 5, // 保留几位小数,指定&#39;px&#39;转换为视窗单位值的小数位数(很多时候无法整除)</span></span>
<span class="line"><span>            viewportUnit: &#39;vw&#39;, // 指定需要转换成的视窗单位,建议使用vw</span></span>
<span class="line"><span>            selectorBlackList: [&#39;tab-bar&#39;, &#39;tab-bar-item&#39;, &#39;shopping-cart-bottom-bar&#39;], // 指定不需要转换的类</span></span>
<span class="line"><span>            minPixelValue: 1, // 小于或等于&#39;1px&#39;不转换为视窗单位</span></span>
<span class="line"><span>            mediaQuery: false // 允许在媒体查询中转换&#39;px&#39;</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>照着配, 还有 autoprefixer还要配置支持的浏览器的版本范围.browserslistrc这个文件里面配置要支持的浏览器 PostCss插件, 用于解析CSS并使用 Can I Use中的值将供应商前缀添加到CSS规则中。它是Google推荐的， 并在Twitter和阿里巴巴中使用 Autoprefixer将基于当前浏览器的流行程度和属性支持使用数据为您应用前缀。您可以尝试 Autoprefixer的交互式演示。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>var autoprefixer = require(&quot;autoprefixer&quot;)</span></span>
<span class="line"><span>module.exports = {</span></span>
<span class="line"><span>    plugins: [</span></span>
<span class="line"><span>        autoprefixer({</span></span>
<span class="line"><span>            browsers: [&quot;last 5 version&quot;]</span></span>
<span class="line"><span>        })</span></span>
<span class="line"><span>    ]</span></span>
<span class="line"><span>}</span></span></code></pre></div><p><a href="https://github.com/postcss/autoprefixer" target="_blank" rel="noreferrer">(参考链接)</a></p>`,6),i=[t];function o(l,r,c,d,u,h){return n(),a("div",null,i)}const g=s(p,[["render",o]]);export{f as __pageData,g as default};
