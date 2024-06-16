import{_ as s,c as n,o as a,U as p}from"./chunks/framework.FpOEJISx.js";const m=JSON.parse('{"title":"环境变量的使用","description":"","frontmatter":{},"headers":[],"relativePath":"docs/frontend/Vue/基础/环境变量.md","filePath":"docs/frontend/Vue/基础/环境变量.md"}'),e={name:"docs/frontend/Vue/基础/环境变量.md"},l=p(`<h1 id="环境变量的使用" tabindex="-1">环境变量的使用 <a class="header-anchor" href="#环境变量的使用" aria-label="Permalink to &quot;环境变量的使用&quot;">​</a></h1><h2 id="vue3-vite-中环境变量的使用" tabindex="-1">vue3（vite）中环境变量的使用 <a class="header-anchor" href="#vue3-vite-中环境变量的使用" aria-label="Permalink to &quot;vue3（vite）中环境变量的使用&quot;">​</a></h2><h3 id="在项目根目录下新建-env-development-开发环境-内容如下" tabindex="-1">在项目根目录下新建 .env.development（开发环境） 内容如下 <a class="header-anchor" href="#在项目根目录下新建-env-development-开发环境-内容如下" aria-label="Permalink to &quot;在项目根目录下新建 .env.development（开发环境） 内容如下&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span># 开发环境变量的标识，这个ENV是拿不到的，这个ENV只是个标识</span></span>
<span class="line"><span>ENV = &#39;development&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 自定义变量</span></span>
<span class="line"><span>VITE_TYPE = &#39;我是环境变量 development&#39;</span></span>
<span class="line"><span>VITE_MODE = &#39;DEV&#39;</span></span>
<span class="line"><span>VITE_API_ONLYOFFICE = &quot;development-http://192.168.175.131:8080&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 注意: 变量前面需要加 VITE 否则读取不到</span></span>
<span class="line"><span># 有可能单引号不能识别</span></span></code></pre></div><h3 id="在项目根目录下新建-env-production-生产环境-内容如下" tabindex="-1">在项目根目录下新建 .env.production（生产环境） 内容如下 <a class="header-anchor" href="#在项目根目录下新建-env-production-生产环境-内容如下" aria-label="Permalink to &quot;在项目根目录下新建 .env.production（生产环境） 内容如下&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span># 生产环境变量的标识，这个ENV是拿不到的，这个ENV只是个标识</span></span>
<span class="line"><span>ENV = &#39;production&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 自定义变量</span></span>
<span class="line"><span>VITE_TYPE = &#39;我是环境变量 production&#39;</span></span>
<span class="line"><span>VITE_MODE = &#39;PRO&#39;</span></span>
<span class="line"><span>VITE_API_ONLYOFFICE = &quot;production-http://192.168.175.131:5147&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 注意: 变量前面需要加 VITE 否则读取不到</span></span>
<span class="line"><span># 有可能单引号不能识别</span></span></code></pre></div><h3 id="vue组件中使用" tabindex="-1">vue组件中使用 <a class="header-anchor" href="#vue组件中使用" aria-label="Permalink to &quot;vue组件中使用&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>    &lt;div&gt;</span></span>
<span class="line"><span>        &lt;div&gt;</span></span>
<span class="line"><span>            &lt;!-- 使用环境变量 --&gt;</span></span>
<span class="line"><span>            {{ environment.type }}</span></span>
<span class="line"><span>        &lt;/div&gt;</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script&gt;</span></span>
<span class="line"><span>import { reactive } from &#39;vue&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export default {</span></span>
<span class="line"><span>    setup() {</span></span>
<span class="line"><span>        const environment = reactive({</span></span>
<span class="line"><span>            url: import.meta.env.VITE_API_ONLYOFFICE, // 获取环境变量</span></span>
<span class="line"><span>            type: import.meta.env.VITE_TYPE, // 获取环境变量</span></span>
<span class="line"><span>        })</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        return {</span></span>
<span class="line"><span>            environment,</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&lt;/script&gt;</span></span></code></pre></div><h3 id="js-ts中使用-vite-vue3" tabindex="-1">js/ts中使用（vite+vue3） <a class="header-anchor" href="#js-ts中使用-vite-vue3" aria-label="Permalink to &quot;js/ts中使用（vite+vue3）&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>import { createRouter, createWebHistory } from &#39;vue-router&#39;</span></span>
<span class="line"><span>import type { App } from &#39;vue&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const mode = import.meta.env.VITE_MODE // 使用环境变量</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 实例化路由对象</span></span>
<span class="line"><span>const router = createRouter({</span></span>
<span class="line"><span>    history: createWebHistory(import.meta.env.BASE_URL),</span></span>
<span class="line"><span>    strict: true,</span></span>
<span class="line"><span>    scrollBehavior: () =&gt; ({ top: 0, left: 0 }),</span></span>
<span class="line"><span>    routes: [</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>            path: &#39;/projectList&#39;,</span></span>
<span class="line"><span>            name: &#39;projectList&#39;,</span></span>
<span class="line"><span>            component: () =&gt; import(&#39;@/views/projectList/projectList.vue&#39;),</span></span>
<span class="line"><span>            meta: {</span></span>
<span class="line"><span>                title: &#39;项目列表&#39;,</span></span>
<span class="line"><span>            },</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>    ],</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 路由前置守卫</span></span>
<span class="line"><span>router.beforeEach((to, from, next) =&gt; {</span></span>
<span class="line"><span>    console.log(&#39;mode&#39;, mode);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    next() // 这个一定要加，否则页面不会跳转</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export function resetRouter() {</span></span>
<span class="line"><span>    router.replace({ path: &#39;/login&#39; })</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="环境变量" tabindex="-1">环境变量 <a class="header-anchor" href="#环境变量" aria-label="Permalink to &quot;环境变量&quot;">​</a></h2><p>环境变量<a href="https://blog.csdn.net/qq_38249409/article/details/129760403" target="_blank" rel="noreferrer">参考链接</a>就是在不同的环境中使用不同的变量值。可以用.env文件来定义环境变量，再通过import.meta.env来使用定义的环境变量。</p><h3 id="环境变量文件-env" tabindex="-1">环境变量文件(.env) <a class="header-anchor" href="#环境变量文件-env" aria-label="Permalink to &quot;环境变量文件(.env)&quot;">​</a></h3><p>.env指的是文件名而不是后缀名，它是一种放置在Vue根目录下的文件，它的特殊之处在于文件名的约定，我们在启动服务、构建项目时会根据文件的名称来进行匹配，常用的有两种形式： .env 和 .env.[mode]</p><p>这里的[mode]是模式的意思，我们可以使用一些自定义的命名方式来命名定义模式，例如有4种不同的环境需要定义，分别是开发、测试、预发、生产，我们就可以定义4中模式</p><p>.env.development .env.test .env.stage .env.production</p><p>其中 development 和 production 是Vite中的两种默认的模式，当我们通过vite指令在本地启动服务时，会默认加载.env.development中的变量，而通过vite build进行打包时，会默认加载.env.produciton文件中的变量。</p><p>当前，也可以通过在指令后面加上--mode 模式名的方式来明确的指定一个环境变量文件进行加载，例如构建测试环境可以通过vite build --mode test来处理。</p><p>除此之外，我们在各个环境中的通用配置，可以直接写到以.env命名的文件中，.env文件中的变量在任何模式下都可以加载，但需要注意的是，.env文件下的变量优先级是低于.env.[mode]文件的，也就是说，如果有相同的变量，.env文件中的变量会被覆盖掉。</p><h3 id="环境变量变量定义与使用" tabindex="-1">环境变量变量定义与使用 <a class="header-anchor" href="#环境变量变量定义与使用" aria-label="Permalink to &quot;环境变量变量定义与使用&quot;">​</a></h3><p>字段是直接写在.env文件中的，字段名VITE_xxx进行定义，只有以VITE为前缀的字段会暴露给客户端直接使用，例如在4个不同的文件中通过一个字段来定义当前的环境。</p><p>VITE_ENV=development VITE_ENV=test VITE_ENV=stage VITE_ENV=production</p><p>定义好后，可以在服务中的任意一个.js文件中通过import.meta.env.变量名来使用，例如我在App.vue的js中输入了下面的代码。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;script setup&gt;</span></span>
<span class="line"><span>	console.log(import.meta.env.VITE_ENV)</span></span>
<span class="line"><span>&lt;/script&gt;</span></span></code></pre></div><p>通过不同的模式进行打包后，进入首页就会在控制台中输出不同的字段值了。</p><p>注：环境变量经常会使用在axios上，在不同的环境中请求不同的服务端的路径。</p><h2 id="打包部署" tabindex="-1">打包部署 <a class="header-anchor" href="#打包部署" aria-label="Permalink to &quot;打包部署&quot;">​</a></h2><p>我们是通过 node+vite 进行的构建打包，所以需要在package.json中的scripts属性上编辑打包的指令，这里同样也是4个环境：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&quot;scripts&quot;: {</span></span>
<span class="line"><span>    &quot;dev&quot;: &quot;vite&quot;,</span></span>
<span class="line"><span>    &quot;test&quot;: &quot;vite build --mode test&quot;,</span></span>
<span class="line"><span>    &quot;stage&quot;: &quot;vite build --mode stage&quot;,</span></span>
<span class="line"><span>    &quot;build&quot;: &quot;vite build&quot;,</span></span>
<span class="line"><span>},</span></span></code></pre></div><p>上面我们已经提过了，vite指令与vite build指定是对应了默认值devolepment和production，所以此处只需要指定测试与预发环境的模式。</p><h2 id="vue2-webpack-中环境变量的使用" tabindex="-1">vue2（webpack）中环境变量的使用 <a class="header-anchor" href="#vue2-webpack-中环境变量的使用" aria-label="Permalink to &quot;vue2（webpack）中环境变量的使用&quot;">​</a></h2><h3 id="在项目根目录下新建-env-development-开发环境-内容如下-1" tabindex="-1">在项目根目录下新建 .env.development（开发环境） 内容如下 <a class="header-anchor" href="#在项目根目录下新建-env-development-开发环境-内容如下-1" aria-label="Permalink to &quot;在项目根目录下新建 .env.development（开发环境） 内容如下&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>NODE_ENV=development</span></span>
<span class="line"><span>BASE_URL=./</span></span>
<span class="line"><span>VUE_APP_PROJECT=TS-Synergy</span></span>
<span class="line"><span>VUE_APP_ENTRY=antd</span></span>
<span class="line"><span>VUE_APP_PREVIEW=true</span></span>
<span class="line"><span>VUE_APP_API_BASE_URL=http://192.10.50.62:8089/api/synergy-base/</span></span>
<span class="line"><span>VUE_APP_API_FLOW_DESIGN_URL=http://192.10.50.62:8089/api/synergy-flow-design/index.html</span></span>
<span class="line"><span>VUE_APP_TEAM=@不想上网</span></span>
<span class="line"><span>VUE_APP_DEFAULT_LANGUAGE=zh-CN</span></span>
<span class="line"><span>VUE_APP_TITLE=标题</span></span>
<span class="line"><span>VUE_APP_API_AUTH=c3luZXJneS1jbGllbnQ6MTZlZjNiZGEtOGU5ZC00OTcyLWIyZDAtMDkyMTIzMmZkNDFh</span></span></code></pre></div><h3 id="vue组件中使用-1" tabindex="-1">vue组件中使用 <a class="header-anchor" href="#vue组件中使用-1" aria-label="Permalink to &quot;vue组件中使用&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>    &lt;div&gt;</span></span>
<span class="line"><span>        &lt;div&gt;</span></span>
<span class="line"><span>            &lt;!-- 使用环境变量 --&gt;</span></span>
<span class="line"><span>            {{ environment.type }}</span></span>
<span class="line"><span>        &lt;/div&gt;</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script&gt;</span></span>
<span class="line"><span>import { reactive } from &#39;vue&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export default {</span></span>
<span class="line"><span>    setup() {</span></span>
<span class="line"><span>        const environment = reactive({</span></span>
<span class="line"><span>            baseURL: process.env.VUE_APP_API_BASE_URL?.replace(&#39;/synergy-base/&#39;, &#39;/synergy-cooperation/&#39;),</span></span>
<span class="line"><span>        })</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>        return {</span></span>
<span class="line"><span>            environment,</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&lt;/script&gt;</span></span></code></pre></div><h3 id="js-ts中使用-webpack-vue2" tabindex="-1">js/ts中使用（webpack+vue2） <a class="header-anchor" href="#js-ts中使用-webpack-vue2" aria-label="Permalink to &quot;js/ts中使用（webpack+vue2）&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>const axios1 = AxiosRequest({</span></span>
<span class="line"><span>  baseURL: process.env.VUE_APP_API_BASE_URL?.replace(&#39;/synergy-base/&#39;, &#39;/synergy-flow/&#39;),</span></span>
<span class="line"><span>})</span></span></code></pre></div>`,37),t=[l];function i(c,o,r,d,u,v){return a(),n("div",null,t)}const g=s(e,[["render",i]]);export{m as __pageData,g as default};
