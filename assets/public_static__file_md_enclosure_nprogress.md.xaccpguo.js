import{_ as s,c as a,o as n,U as p}from"./chunks/framework.zpeVKxWT.js";const m=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"public/static/_file/md/enclosure/nprogress.md","filePath":"public/static/_file/md/enclosure/nprogress.md"}'),e={name:"public/static/_file/md/enclosure/nprogress.md"},r=p(`<h2 id="进度条使用" tabindex="-1">进度条使用 <a class="header-anchor" href="#进度条使用" aria-label="Permalink to &quot;进度条使用&quot;">​</a></h2><h3 id="安装依赖" tabindex="-1">安装依赖 <a class="header-anchor" href="#安装依赖" aria-label="Permalink to &quot;安装依赖&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>npm install nprogress</span></span></code></pre></div><h3 id="使用方式-创建一个自定义nprogress插件" tabindex="-1">使用方式-创建一个自定义NProgress插件 <a class="header-anchor" href="#使用方式-创建一个自定义nprogress插件" aria-label="Permalink to &quot;使用方式-创建一个自定义NProgress插件&quot;">​</a></h3><p>你可以创建一个自定义插件来集成NProgress到你的Vue 3应用中。创建一个新的JavaScript文件，比如<code>nprogress.js</code>，然后添加以下代码：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>importNProgressfrom&#39;nprogress&#39;</span></span>
<span class="line"><span>import&#39;nprogress/nprogress.css&#39;// 导入NProgress的样式</span></span>
<span class="line"><span></span></span>
<span class="line"><span>NProgress.configure({ showSpinner: false }) // 隐藏NProgress自带的小旋转图标</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const nprogress = {</span></span>
<span class="line"><span>  install(app) {</span></span>
<span class="line"><span>    app.config.globalProperties.$nprogress = NProgress</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>exportdefault nprogress</span></span></code></pre></div><p>在你的Vue 3应用中，你需要使用自定义NProgress插件。在你的<code>main.js</code>或者<code>main.ts</code>文件中，使用以下代码安装插件：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>import { createApp } from&#39;vue&#39;</span></span>
<span class="line"><span>importAppfrom&#39;./App.vue&#39;</span></span>
<span class="line"><span>importNProgressfrom&#39;./nprogress&#39;// 引入自定义NProgress插件</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const app = createApp(App)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>app.use(NProgress) // 使用自定义NProgress插件</span></span>
<span class="line"><span></span></span>
<span class="line"><span>app.mount(&#39;#app&#39;)</span></span></code></pre></div><h3 id="使用方式-在路由导航守卫中使用" tabindex="-1">使用方式-在路由导航守卫中使用 <a class="header-anchor" href="#使用方式-在路由导航守卫中使用" aria-label="Permalink to &quot;使用方式-在路由导航守卫中使用&quot;">​</a></h3><p>如果你想在路由切换时显示加载进度条，你可以在Vue Router的导航守卫中使用NProgress。在你的路由配置文件中，比如<code>router.js</code>，添加以下代码</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>import { createRouter, createWebHistory } from&#39;vue-router&#39;</span></span>
<span class="line"><span>import NProgress from &#39;nprogress&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const routes = [</span></span>
<span class="line"><span>  // Your route configurations here</span></span>
<span class="line"><span>]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const router = createRouter({</span></span>
<span class="line"><span>  history: createWebHistory(),</span></span>
<span class="line"><span>  routes</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span></span></span>
<span class="line"><span>router.beforeEach((to, from, next) =&gt; {</span></span>
<span class="line"><span>  NProgress.start() // 在路由切换前开始进度条</span></span>
<span class="line"><span>  next()</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span></span></span>
<span class="line"><span>router.afterEach(() =&gt; {</span></span>
<span class="line"><span>  NProgress.done() // 在路由切换完成后结束进度条</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span></span></span>
<span class="line"><span>exportdefault router</span></span></code></pre></div>`,11),l=[r];function o(t,i,c,d,g,u){return n(),a("div",null,l)}const b=s(e,[["render",o]]);export{m as __pageData,b as default};
