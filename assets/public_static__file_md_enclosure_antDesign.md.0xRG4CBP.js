import{_ as s,c as n,o as a,U as p}from"./chunks/framework.FpOEJISx.js";const g=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"public/static/_file/md/enclosure/antDesign.md","filePath":"public/static/_file/md/enclosure/antDesign.md"}'),e={name:"public/static/_file/md/enclosure/antDesign.md"},l=p(`<h2 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h2><p><a href="https://antdv.com/docs/vue/getting-started-cn" target="_blank" rel="noreferrer">官网链接</a></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>npm i --save ant-design-vue@4.x</span></span></code></pre></div><h2 id="注册" tabindex="-1">注册 <a class="header-anchor" href="#注册" aria-label="Permalink to &quot;注册&quot;">​</a></h2><p>使用 <code>unplugin-auto-import</code>，<code>unplugin-vue-components</code>按需自动导入</p><h3 id="安装相关依赖" tabindex="-1">安装相关依赖 <a class="header-anchor" href="#安装相关依赖" aria-label="Permalink to &quot;安装相关依赖&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>npm install unplugin-auto-import -D</span></span>
<span class="line"><span>npm install unplugin-vue-components -D</span></span></code></pre></div><h3 id="在vite-config-js中进行配置" tabindex="-1">在vite.config.js中进行配置 <a class="header-anchor" href="#在vite-config-js中进行配置" aria-label="Permalink to &quot;在vite.config.js中进行配置&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>/* eslint-disable new-cap */</span></span>
<span class="line"><span>import path from &#39;path&#39;</span></span>
<span class="line"><span>const pathSrc = path.resolve(__dirname, &#39;src&#39;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import AutoImport from &#39;unplugin-auto-import/vite&#39; // 按需自动导入API</span></span>
<span class="line"><span>import Components from &#39;unplugin-vue-components/vite&#39; // 按需自动导入组件</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 这里导入了两个一个是ElementPlusResolver，一个是AntDesignVueResolver</span></span>
<span class="line"><span>import { ElementPlusResolver, AntDesignVueResolver } from &#39;unplugin-vue-components/resolvers&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import { defineConfig } from &#39;vite&#39;</span></span>
<span class="line"><span>import vue from &#39;@vitejs/plugin-vue&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// https://vitejs.dev/config/</span></span>
<span class="line"><span>export default defineConfig({</span></span>
<span class="line"><span>    server: {</span></span>
<span class="line"><span>        host: &#39;0.0.0.0&#39;, // ip地址</span></span>
<span class="line"><span>        port: 8080, // 端口</span></span>
<span class="line"><span>        // open: true, // 服务启动时自动在浏览器中打开应用</span></span>
<span class="line"><span>        // https: false,//是否启用 http 2</span></span>
<span class="line"><span>        // cors: true,//为开发服务器配置 CORS , 默认启用并允许任何源</span></span>
<span class="line"><span>        // strictPort: false, //设为true时端口被占用则直接退出，不会尝试下一个可用端口</span></span>
<span class="line"><span>        // force: true,//是否强制依赖预构建</span></span>
<span class="line"><span>        // hmr: true,//禁用或配置 HMR 连接</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    plugins: [</span></span>
<span class="line"><span>        vue(),</span></span>
<span class="line"><span>        AutoImport({ // 自动导入 Vue 相关函数，如：ref, reactive, toRef 等</span></span>
<span class="line"><span>            imports: [&#39;vue&#39;],</span></span>
<span class="line"><span>            resolvers: [</span></span>
<span class="line"><span>                ElementPlusResolver(),</span></span>
<span class="line"><span>            ],</span></span>
<span class="line"><span>        }),</span></span>
<span class="line"><span>        Components({ // 按需加载自定义组件</span></span>
<span class="line"><span>            resolvers: [</span></span>
<span class="line"><span>                ElementPlusResolver(), // ElementPlus按需加载</span></span>
<span class="line"><span>                AntDesignVueResolver(), // 貌似这种还无法 4 版本的样式</span></span>
<span class="line"><span>            ],</span></span>
<span class="line"><span>        }),</span></span>
<span class="line"><span>    ]</span></span>
<span class="line"><span>})</span></span></code></pre></div><h3 id="使用" tabindex="-1">使用 <a class="header-anchor" href="#使用" aria-label="Permalink to &quot;使用&quot;">​</a></h3><p>在组件中直接可通过a-xxx的形式使用，不用在main导入\`import &#39;ant-design-vue/dist/antd.css&#39;，但是有遇到样式出不来的情况，建议可以在main中导入；因为在使用antDesign的icon的时候还是需要导入这个，不然样式出不来</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;a-space&gt;</span></span>
<span class="line"><span>    &lt;a-popconfirm title=&quot;确定删除?&quot; okText=&quot;删除&quot; @confirm=&quot;deleteItem(record.id)&quot;&gt;</span></span>
<span class="line"><span>        &lt;a-button size=&quot;small&quot; danger @click.stop&gt;删除&lt;/a-button&gt;</span></span>
<span class="line"><span>    &lt;/a-popconfirm&gt;</span></span>
<span class="line"><span>&lt;/a-space&gt;</span></span></code></pre></div><h2 id="icon的使用" tabindex="-1">Icon的使用 <a class="header-anchor" href="#icon的使用" aria-label="Permalink to &quot;Icon的使用&quot;">​</a></h2><p>也是可以进行按上述方式进行按需导入设置，但是目前尚未解决，目前的导入方式是全局导入 <strong>1.首先在src文件夹下新建一个plugins文件夹，里面新建antIcons.js，内容如下：</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>import * as Icons from &#39;@ant-design/icons-vue&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export const setupIcons = (app) =&gt; {</span></span>
<span class="line"><span>    // console.log(&#39;Icons&#39;, Icons)</span></span>
<span class="line"><span>    Object.keys(Icons).forEach((item) =&gt; {</span></span>
<span class="line"><span>        app.component(\`\${item}\`, Icons[item])</span></span>
<span class="line"><span>    })</span></span>
<span class="line"><span>}</span></span></code></pre></div><p><strong>2.在main.js中导入使用暴漏出来的函数传参app，如下：</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>import { createApp } from &#39;vue&#39;</span></span>
<span class="line"><span>import App from &#39;./App.vue&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// import router from &#39;./router&#39;</span></span>
<span class="line"><span>import { setupRouter } from &#39;@/router/index.js&#39;</span></span>
<span class="line"><span>// import { setupElement } from &#39;@/plugins/element.js&#39;</span></span>
<span class="line"><span>import { setupIcons } from &#39;@/plugins/antIcons.js&#39;</span></span>
<span class="line"><span>import { setupBaseComponents } from &#39;@/plugins/base.ts&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>// import &#39;./assets/main.css&#39;</span></span>
<span class="line"><span>import &#39;@/assets/css/common.css&#39;</span></span>
<span class="line"><span>import &#39;ant-design-vue/dist/antd.css&#39; // 这里不导入的话在js中使用的ant组件样式将出不来</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import &#39;@/globals/globals.js&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 页面适配</span></span>
<span class="line"><span>// import &#39;amfe-flexible&#39; // 适用与H5，貌似不适用pc端</span></span>
<span class="line"><span>// import &#39;lib-flexible/flexible&#39; // 适用与H5，貌似不适用pc端</span></span>
<span class="line"><span>// import &#39;@/utils/rem.js&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const app = createApp(App)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>setupRouter(app) // 挂载 路由 --- 原来：app.use(router)</span></span>
<span class="line"><span>// setupElement(app) // ui库注册</span></span>
<span class="line"><span>setupIcons(app)</span></span>
<span class="line"><span>setupBaseComponents(app)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>app.mount(&#39;#app&#39;)</span></span></code></pre></div>`,17),t=[l];function i(o,c,r,u,m,d){return a(),n("div",null,t)}const v=s(e,[["render",i]]);export{g as __pageData,v as default};
