import{_ as s,c as a,o as p,U as n}from"./chunks/framework.zpeVKxWT.js";const v=JSON.parse('{"title":"vue-tippy插件","description":"","frontmatter":{},"headers":[],"relativePath":"public/_file/other/tip.md","filePath":"public/_file/other/tip.md"}'),e={name:"public/_file/other/tip.md"},t=n(`<h1 id="vue-tippy插件" tabindex="-1">vue-tippy插件 <a class="header-anchor" href="#vue-tippy插件" aria-label="Permalink to &quot;vue-tippy插件&quot;">​</a></h1><p>使用可参考网址：<a href="https://madewith.cn/14" target="_blank" rel="noreferrer">https://madewith.cn/14</a></p><h2 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>npm install --save vue-tippy</span></span></code></pre></div><h2 id="注册-版本-vue-tippy-4-7-2" tabindex="-1">注册(版本：&quot;vue-tippy&quot;: &quot;4.7.2&quot;,) <a class="header-anchor" href="#注册-版本-vue-tippy-4-7-2" aria-label="Permalink to &quot;注册(版本：&quot;vue-tippy&quot;: &quot;4.7.2&quot;,)&quot;">​</a></h2><p>在plugins文件加中新建 base.js 对该组件进配置导入 在 main.js 入口文件中导入这个 base.js 文件</p><h2 id="vue2-base-js配置如下-版本-vue-tippy-4-7-2" tabindex="-1">vue2 base.js配置如下(版本：&quot;vue-tippy&quot;: &quot;4.7.2&quot;,) <a class="header-anchor" href="#vue2-base-js配置如下-版本-vue-tippy-4-7-2" aria-label="Permalink to &quot;vue2 base.js配置如下(版本：&quot;vue-tippy&quot;: &quot;4.7.2&quot;,)&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>import Vue from &#39;vue&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import VueTippy, { TippyComponent } from &#39;vue-tippy&#39;</span></span>
<span class="line"><span>import &#39;tippy.js/themes/light.css&#39;</span></span>
<span class="line"><span>import &#39;tippy.js/themes/light-border.css&#39;</span></span>
<span class="line"><span>import &#39;tippy.js/themes/google.css&#39;</span></span>
<span class="line"><span>import &#39;tippy.js/themes/translucent.css&#39;</span></span>
<span class="line"><span>Vue.use(VueTippy, {</span></span>
<span class="line"><span>    arrow: true, // 是否有箭头</span></span>
<span class="line"><span>    maxWidth: 500, // 悬浮框最大宽度</span></span>
<span class="line"><span>    boundary: &#39;viewport&#39;,</span></span>
<span class="line"><span>    onShow: (options) =&gt; {</span></span>
<span class="line"><span>        return !!options.props.content</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span>// Vue.use(VueTippy)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Vue.component(&#39;tippy&#39;, TippyComponent)</span></span></code></pre></div><h2 id="配置-版本-vue-tippy-6-4-1" tabindex="-1">配置（版本：&quot;vue-tippy&quot;: &quot;^6.4.1&quot;,） <a class="header-anchor" href="#配置-版本-vue-tippy-6-4-1" aria-label="Permalink to &quot;配置（版本：&quot;vue-tippy&quot;: &quot;^6.4.1&quot;,）&quot;">​</a></h2><p>主题配置待研究</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>import type { App } from &#39;vue&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// vue-tippy插件</span></span>
<span class="line"><span>import VueTippy from &#39;vue-tippy&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export function setupBaseComponents(app: App&lt;Element&gt;) {</span></span>
<span class="line"><span>    app.use(VueTippy);</span></span>
<span class="line"><span>}</span></span></code></pre></div>`,11),i=[t];function o(l,u,c,r,h,d){return p(),a("div",null,i)}const y=s(e,[["render",o]]);export{v as __pageData,y as default};
