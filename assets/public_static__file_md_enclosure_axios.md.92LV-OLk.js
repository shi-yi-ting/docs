import{_ as s,c as n,o as a,U as p}from"./chunks/framework.FpOEJISx.js";const g=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"public/static/_file/md/enclosure/axios.md","filePath":"public/static/_file/md/enclosure/axios.md"}'),e={name:"public/static/_file/md/enclosure/axios.md"},l=p(`<h2 id="axios封装" tabindex="-1">axios封装 <a class="header-anchor" href="#axios封装" aria-label="Permalink to &quot;axios封装&quot;">​</a></h2><h3 id="安装依赖" tabindex="-1">安装依赖 <a class="header-anchor" href="#安装依赖" aria-label="Permalink to &quot;安装依赖&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>npm install- save axios</span></span></code></pre></div><h3 id="接口不做统一管理的" tabindex="-1">接口不做统一管理的 <a class="header-anchor" href="#接口不做统一管理的" aria-label="Permalink to &quot;接口不做统一管理的&quot;">​</a></h3><p>这种我们一般会在src目录下新建一个globals文件夹用来存放全局变量，在globals文件夹中新建一个window文件夹和一个globals.js文件，window文件夹中新建axios.js</p><h4 id="axios-js" tabindex="-1">axios.js <a class="header-anchor" href="#axios-js" aria-label="Permalink to &quot;axios.js&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>/* eslint no-shadow: &#39;off&#39; */</span></span>
<span class="line"><span>import axios from &#39;axios&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>axios.interceptors.request.use((config) =&gt; {</span></span>
<span class="line"><span>  if (!config.url) { return }</span></span>
<span class="line"><span>  const csrfToken = store.getters.getCsrfToken</span></span>
<span class="line"><span>  if (csrfToken ) {</span></span>
<span class="line"><span>	config.headers[&#39;xcsrf-token&#39;] = csrfToken</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}, (error) =&gt; {</span></span>
<span class="line"><span>    return Promise.reject(error)</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span></span></span>
<span class="line"><span>axios.interceptors.response.use((response) =&gt; {</span></span>
<span class="line"><span>    if ([&#39;10002&#39;, &#39;10003&#39;].includes(response.data)) { // 重新登录处理</span></span>
<span class="line"><span>        redirectLogin($this.$route)</span></span>
<span class="line"><span>        return undefined</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    return response</span></span>
<span class="line"><span>}, (error) =&gt; {</span></span>
<span class="line"><span>    return Promise.reject(error) // 这里可以根据后台返回的状态码进行错误处理</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export {</span></span>
<span class="line"><span>    axios</span></span>
<span class="line"><span>}</span></span></code></pre></div><h4 id="globals-js" tabindex="-1">globals.js <a class="header-anchor" href="#globals-js" aria-label="Permalink to &quot;globals.js&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>/* eslint no-shadow: &#39;off&#39; */</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import { axios, axiosCache } from &#39;./window/axios.js&#39;</span></span>
<span class="line"><span>window.axios = axios</span></span>
<span class="line"><span>window.axiosCache = axiosCache</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import qs from &#39;qs&#39;</span></span>
<span class="line"><span>window.qs = qs</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import async from &#39;async&#39;</span></span>
<span class="line"><span>window.async = async</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import cookie from &#39;js-cookie&#39;</span></span>
<span class="line"><span>window.cookie = cookie</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import is from &#39;./window/is.js&#39;</span></span>
<span class="line"><span>window.is = is</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import lodash from &#39;./window/lodash.js&#39;</span></span>
<span class="line"><span>window.lodash = lodash</span></span>
<span class="line"><span>window.debounce = lodash.debounce</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import util from &#39;./window/util.js&#39;</span></span>
<span class="line"><span>window.util = util</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import dayjs from &#39;./window/dayjs&#39;</span></span>
<span class="line"><span>window.dayjs = dayjs</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import jQuery from &#39;jquery&#39;</span></span>
<span class="line"><span>window.$ = jQuery</span></span>
<span class="line"><span>window.jquery = jQuery</span></span>
<span class="line"><span>window.jQuery = jQuery // provide global variables for jquery plugin</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Date.prototype.Format = function(fmt) {</span></span>
<span class="line"><span>    // author: meizz</span></span>
<span class="line"><span>    let o = {</span></span>
<span class="line"><span>        &#39;M+&#39;: this.getMonth() + 1, // 月份</span></span>
<span class="line"><span>        &#39;d+&#39;: this.getDate(), // 日</span></span>
<span class="line"><span>        &#39;H+&#39;: this.getHours(), // 小时</span></span>
<span class="line"><span>        &#39;m+&#39;: this.getMinutes(), // 分</span></span>
<span class="line"><span>        &#39;s+&#39;: this.getSeconds(), // 秒</span></span>
<span class="line"><span>        &#39;q+&#39;: Math.floor((this.getMonth() + 3) / 3), // 季度</span></span>
<span class="line"><span>        &#39;S+&#39;: this.getMilliseconds(), // 毫秒</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    if (/(y+)/.test(fmt)) {</span></span>
<span class="line"><span>        fmt = fmt.replace(RegExp.$1, (this.getFullYear() + &#39;&#39;).substr(4 - RegExp.$1.length))</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    for (let k in o) {</span></span>
<span class="line"><span>        if (new RegExp(&#39;(&#39; + k + &#39;)&#39;).test(fmt)) {</span></span>
<span class="line"><span>            fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : ((&#39;00&#39; + o[k]).substr((&#39;&#39; + o[k]).length)))</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    return fmt</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// window.downloadFile = function(url) {</span></span>
<span class="line"><span>//     try {</span></span>
<span class="line"><span>//         let elemIF = document.createElement(&#39;iframe&#39;)</span></span>
<span class="line"><span>//         elemlF.src = url</span></span>
<span class="line"><span>//         elemlF.style.display = &#39;none&#39;</span></span>
<span class="line"><span>//         document.body.appendChild(elemIF)</span></span>
<span class="line"><span>//     } catch (e) {</span></span>
<span class="line"><span>//         console.log(&#39;下载失败=========&#39; + url)</span></span>
<span class="line"><span>//     }</span></span>
<span class="line"><span>// }</span></span></code></pre></div><h4 id="main-js-在main-js中导入" tabindex="-1">main.js（在main.js中导入） <a class="header-anchor" href="#main-js-在main-js中导入" aria-label="Permalink to &quot;main.js（在main.js中导入）&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>import App from &#39;@/App.vue&#39;</span></span>
<span class="line"><span>import i18n from &#39;@/i18n/index.js&#39;</span></span>
<span class="line"><span>import store from &#39;@/store/index.js&#39;</span></span>
<span class="line"><span>import router from &#39;@/router/index.js&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import &#39;@/globals/globals.js&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import Vue from &#39;vue&#39;</span></span>
<span class="line"><span>import VueCompositionApi from &#39;@vue/composition-api&#39;</span></span>
<span class="line"><span>Vue.use(VueCompositionApi)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const $app = new Vue({</span></span>
<span class="line"><span>    i18n,</span></span>
<span class="line"><span>    store,</span></span>
<span class="line"><span>    router,</span></span>
<span class="line"><span>    render: (h) =&gt; h(App),</span></span>
<span class="line"><span>}).$mount(&#39;#app&#39;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>window.$this = $app</span></span></code></pre></div><h4 id="根目录下新建-eslintrc-js" tabindex="-1">根目录下新建 .eslintrc.js <a class="header-anchor" href="#根目录下新建-eslintrc-js" aria-label="Permalink to &quot;根目录下新建 .eslintrc.js&quot;">​</a></h4><p>如果有eslint校验可能会爆红，需要在.eslintrc.js进行处理如下，主要是globals</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// eslint-disable @typescript-eslint/no-var-requires</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const base = require(&#39;./eslint/eslint.base.js&#39;)</span></span>
<span class="line"><span>// const typescript = require(&#39;./eslint/eslint.typescript.js&#39;)</span></span>
<span class="line"><span>const vue = require(&#39;./eslint/eslint.vue.js&#39;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>module.exports = {</span></span>
<span class="line"><span>    root: true,</span></span>
<span class="line"><span>    env: {</span></span>
<span class="line"><span>        node: true,</span></span>
<span class="line"><span>        es2020: true,</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    extends: [</span></span>
<span class="line"><span>        // &#39;eslint: recommended&#39;,</span></span>
<span class="line"><span>        // &#39;@vue/typescript/recommended&#39;,</span></span>
<span class="line"><span>        // &#39;plugin: vue/recommended&#39;,</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        ...base.extents,</span></span>
<span class="line"><span>        // ...typescript.extends,</span></span>
<span class="line"><span>        ...vue.extends,</span></span>
<span class="line"><span>    ],</span></span>
<span class="line"><span>    parserOptions: {</span></span>
<span class="line"><span>        ecmaVersion: 2020,</span></span>
<span class="line"><span>        sourceType: &#39;module&#39;,</span></span>
<span class="line"><span>        // parser: &#39;babel-eslint&#39;,</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    plugins: [</span></span>
<span class="line"><span>        // &#39;@typescript-eslint&#39;,</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        ...base.plugins,</span></span>
<span class="line"><span>        // ...typescript.plugins,</span></span>
<span class="line"><span>        ...vue.plugins,</span></span>
<span class="line"><span>    ],</span></span>
<span class="line"><span>    globals: {</span></span>
<span class="line"><span>        $this: false,</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        $t: false,</span></span>
<span class="line"><span>        $tc: false,</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        qs: false,</span></span>
<span class="line"><span>        axios: false,</span></span>
<span class="line"><span>        axiosCache: false,</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        async: false,</span></span>
<span class="line"><span>        cookie: false,</span></span>
<span class="line"><span>        dayjs: false,</span></span>
<span class="line"><span>        debounce: false,</span></span>
<span class="line"><span>        debounceAsync: false,</span></span>
<span class="line"><span>        Decimal: false,</span></span>
<span class="line"><span>        is: false,</span></span>
<span class="line"><span>        jQuery: false,</span></span>
<span class="line"><span>        lodash: false,</span></span>
<span class="line"><span>        $: false,</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        util: false,</span></span>
<span class="line"><span>        storage: false,</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    rules: {</span></span>
<span class="line"><span>        // &#39;no-console&#39;: process.env.NODE_ENV === &#39;production&#39; ? &#39;warn&#39; : &#39;off&#39;,</span></span>
<span class="line"><span>        // &#39;no-debugger&#39;: process.env.NODE_ENV === &#39;production&#39; ? &#39;warn&#39; : &#39;off&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        ...base.rules,</span></span>
<span class="line"><span>        // ...typescript.rules,</span></span>
<span class="line"><span>        ...vue.rules,</span></span>
<span class="line"><span>        &#39;linebreak-style&#39;: [&#39;off&#39;],</span></span>
<span class="line"><span>        &#39;vue/multi-word-component-names&#39;: &#39;off&#39;,</span></span>
<span class="line"><span>        &#39;vue/no-v-model-argument&#39;: [&#39;off&#39;],</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>}</span></span></code></pre></div><h4 id="使用方式" tabindex="-1">使用方式 <a class="header-anchor" href="#使用方式" aria-label="Permalink to &quot;使用方式&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>//  方式一</span></span>
<span class="line"><span>$this.$loading.show()  // 显示加载动画</span></span>
<span class="line"><span>let resp = await axios({</span></span>
<span class="line"><span>    method: &#39;post&#39;,</span></span>
<span class="line"><span>    url: &#39;/commonBaseService/getCommonServiceData&#39;,</span></span>
<span class="line"><span>    data: {</span></span>
<span class="line"><span>        worker: &#39;factoryServiceImpl&#39;,</span></span>
<span class="line"><span>        workerType: &#39;searchAllFactory&#39;,</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span>$this.$loading.hide() // 隐藏加载动画</span></span>
<span class="line"><span>if (resp.data.dataFlag &amp;&amp; resp.data.data) {</span></span>
<span class="line"><span>    options.factoryOptions = resp.data.data.map((item) =&gt; {</span></span>
<span class="line"><span>        return {</span></span>
<span class="line"><span>            value: item.factory_id,</span></span>
<span class="line"><span>            label: item.factory_name,</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    })</span></span>
<span class="line"><span>}</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// 方式二</span></span>
<span class="line"><span>axios({</span></span>
<span class="line"><span>    method: &#39;post&#39;,</span></span>
<span class="line"><span>    url: &#39;/special/softwareApi/mail/queryUserInfoByText.do&#39;,</span></span>
<span class="line"><span>    data: qs.stringify({ text: query }),</span></span>
<span class="line"><span>    cancelToken: source.token,</span></span>
<span class="line"><span>}).then((resp) =&gt; {</span></span>
<span class="line"><span>    obj.loading = false</span></span>
<span class="line"><span>    if (resp.data.dataFlag) {</span></span>
<span class="line"><span>        obj.options = resp.data.data</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}).catch((thrown) =&gt; {</span></span>
<span class="line"><span>    if (!axios.isCancel(thrown)) {</span></span>
<span class="line"><span>        console.error(&#39;thrown ajax: &#39;, thrown)</span></span>
<span class="line"><span>        obj.loading = false</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>})</span></span></code></pre></div><h3 id="接口统一管理的" tabindex="-1">接口统一管理的 <a class="header-anchor" href="#接口统一管理的" aria-label="Permalink to &quot;接口统一管理的&quot;">​</a></h3><p>在src目录下新建一个api文件夹，文件夹里面新建axios.js和request.js</p><h4 id="axios-js-1" tabindex="-1">axios.js <a class="header-anchor" href="#axios-js-1" aria-label="Permalink to &quot;axios.js&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>import axios from &#39;axios&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const instance = axios.create({</span></span>
<span class="line"><span>    // baseURL: &quot;https://api.example.com&quot;, // 根据你的需求设置基础URL</span></span>
<span class="line"><span>    baseURL: &#39;&#39;, // 根据你的需求设置基础URL</span></span>
<span class="line"><span>    timeout: 5000, // 请求超时时间，根据需要设置</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 在请求发送之前，可以添加一些全局的请求拦截器</span></span>
<span class="line"><span>instance.interceptors.request.use(</span></span>
<span class="line"><span>    (config) =&gt; {</span></span>
<span class="line"><span>    // 在请求发送之前可以做一些处理，如添加请求头等</span></span>
<span class="line"><span>        return config</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    (error) =&gt; {</span></span>
<span class="line"><span>        return Promise.reject(error)</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 在响应收到之后，可以添加一些全局的响应拦截器</span></span>
<span class="line"><span>instance.interceptors.response.use(</span></span>
<span class="line"><span>    (response) =&gt; {</span></span>
<span class="line"><span>    // 在响应收到之后可以做一些处理，如解析数据等</span></span>
<span class="line"><span>        return response</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    (error) =&gt; {</span></span>
<span class="line"><span>        return Promise.reject(error)</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export default instance</span></span></code></pre></div><h4 id="request-js" tabindex="-1">request.js <a class="header-anchor" href="#request-js" aria-label="Permalink to &quot;request.js&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>import http from &#39;@/api/axios.js&#39;</span></span>
<span class="line"><span>import qs from &#39;qs&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 登录信息</span></span>
<span class="line"><span>export const samlRequestApi = () =&gt; http.post(&#39;auth/saml/request&#39;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 登出</span></span>
<span class="line"><span>export const logoutApi = () =&gt; http.post(&#39;auth/token/logout&#39;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 检查token</span></span>
<span class="line"><span>export const tokenCheckApi = () =&gt; http.post(&#39;auth/token/check&#39;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 服务信息列表</span></span>
<span class="line"><span>export const serviceMsgListApi = (params) =&gt; http.post(&#39;servicemsg/list&#39;, params)</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>// rtc信息</span></span>
<span class="line"><span>export const rtcConfigApi = (params) =&gt; http.post(&#39;rtcConfig&#39;, qs.stringify(params))</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 统计信息</span></span>
<span class="line"><span>export const recordFrequencyApi = () =&gt; http.get(&#39;record/frequency&#39;)</span></span></code></pre></div><h4 id="使用" tabindex="-1">使用 <a class="header-anchor" href="#使用" aria-label="Permalink to &quot;使用&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>import {  rtcConfigApi } from &#39;@/api/request.js</span></span>
<span class="line"><span>// 方式三</span></span>
<span class="line"><span>// 根据roomId, userId, 时间间隔 获取rtc加入的秘钥</span></span>
<span class="line"><span>async getRtcConfig(isFreshJoin, roomId, userId, timeout) {</span></span>
<span class="line"><span>    if (roomId &amp;&amp; userId &amp;&amp; timeout) {</span></span>
<span class="line"><span>        try {</span></span>
<span class="line"><span>            const tempData = await rtcConfigApi({ roomId, userId, timeout })</span></span>
<span class="line"><span>            const data = tempData ? tempData.data : {}</span></span>
<span class="line"><span>            const respData = data.data ? data.data : {}</span></span>
<span class="line"><span>            this.appId = respData.appId</span></span>
<span class="line"><span>            this.rtcDomain = respData.rtcDomain</span></span>
<span class="line"><span>            this.rtcSignature = respData.rtcSignature</span></span>
<span class="line"><span>            this.expiredTime = respData.expiredTime</span></span>
<span class="line"><span>        } catch (error) {</span></span>
<span class="line"><span>            // 刷新重新进入房间的时候接口报错要跳转用户已离开</span></span>
<span class="line"><span>            if (isFreshJoin) {</span></span>
<span class="line"><span>                this.clientLeaveRoomDesk()</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>            console.log(&#39;error&#39;, error)</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    } else {</span></span>
<span class="line"><span>        this.message.warning(this.$t(&#39;message.joinException&#39;))</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>},</span></span></code></pre></div>`,25),i=[l];function t(c,o,r,d,u,h){return a(),n("div",null,i)}const f=s(e,[["render",t]]);export{g as __pageData,f as default};
