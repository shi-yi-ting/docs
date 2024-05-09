import{_ as s,c as n,o as a,U as p}from"./chunks/framework.zpeVKxWT.js";const v=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"public/_file/md/vue/config/vueConfig.md","filePath":"public/_file/md/vue/config/vueConfig.md"}'),e={name:"public/_file/md/vue/config/vueConfig.md"},l=p(`<h2 id="vue-config" tabindex="-1">vue.config <a class="header-anchor" href="#vue-config" aria-label="Permalink to &quot;vue.config&quot;">​</a></h2><p>Vue.config.js是一个可选的配置文件，如果项目的根目录存在这个文件，那么它就会被 @vue/cli-service 自动加载。 你也可以使用package.json中的vue字段，但要注意严格遵守JSON的格式来写。这里使用配置vue.config.js的方式进行处理。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>const webpack = require(&#39;webpack&#39;)</span></span>
<span class="line"><span>module.exports = {</span></span>
<span class="line"><span>    // 部署应用包时的基本 URL</span></span>
<span class="line"><span>    publicPath: process.env.NODE_ENV === &#39;production&#39; ? &#39;/online/&#39; : &#39;./&#39;,</span></span>
<span class="line"><span>    // 当运行 vue-cli-service build 时生成的生产环境构建文件的目录</span></span>
<span class="line"><span>    outputDir: &#39;dist&#39;,</span></span>
<span class="line"><span>    // 放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录</span></span>
<span class="line"><span>    // 使用npm run build 将静态文件放入到assets目录下</span></span>
<span class="line"><span>    assetsDir: &#39;assets&#39;,</span></span>
<span class="line"><span>    // eslint-loader 是否在保存的时候检查 安装@vue/cli-plugin-eslint有效</span></span>
<span class="line"><span>    lintOnSave: true,</span></span>
<span class="line"><span>    //是否使用包含运行时编译器的 Vue 构建版本。设置true后你就可以在使用template</span></span>
<span class="line"><span>    runtimeCompiler: true,</span></span>
<span class="line"><span>    // 生产环境是否生成 sourceMap 文件 sourceMap的详解请看末尾</span></span>
<span class="line"><span>    productionSourceMap: true,</span></span>
<span class="line"><span>    configureWebpack: config =&gt; {</span></span>
<span class="line"><span>        if (process.env.NODE_ENV === &#39;production&#39;) {</span></span>
<span class="line"><span>            // 为生产环境修改配置...</span></span>
<span class="line"><span>        } else {</span></span>
<span class="line"><span>            // 为开发环境修改配置...</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    // 3.0的写法，映射路径 @代表src 比如要写一个图片&lt;img src=&#39;@/assets/img/1.png&#39;&gt;就会读取src下的assets下的1.png</span></span>
<span class="line"><span>    chainWebpack: config =&gt; {</span></span>
<span class="line"><span>        config.resolve.alias</span></span>
<span class="line"><span>        .set(&#39;@&#39;, resolve(&#39;src&#39;))</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    // css相关配置</span></span>
<span class="line"><span>    css: {</span></span>
<span class="line"><span>        // 是否使用css分离插件 ExtractTextPlugin 生产环境下是true,开发环境下是false</span></span>
<span class="line"><span>        extract: true,</span></span>
<span class="line"><span>        // 开启 CSS source maps?</span></span>
<span class="line"><span>        sourceMap: false,</span></span>
<span class="line"><span>        // css预设器配置项</span></span>
<span class="line"><span>        loaderOptions: {},</span></span>
<span class="line"><span>        // 启用 CSS modules for all css / pre-processor files.</span></span>
<span class="line"><span>        modules: false</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    // webpack-dev-server 相关配置</span></span>
<span class="line"><span>    devServer: { // 设置代理</span></span>
<span class="line"><span>        hot: true, //热加载</span></span>
<span class="line"><span>        host: &#39;0.0.0.0&#39;, //ip地址</span></span>
<span class="line"><span>        port: 8085, //端口</span></span>
<span class="line"><span>        https: false, //false关闭https，true为开启</span></span>
<span class="line"><span>        open: true, //自动打开浏览器</span></span>
<span class="line"><span>        proxy: {</span></span>
<span class="line"><span>            &#39;/api&#39;: { //本地</span></span>
<span class="line"><span>                target: &#39;xxx&#39;,</span></span>
<span class="line"><span>                // 如果要代理 websockets</span></span>
<span class="line"><span>                ws: true,</span></span>
<span class="line"><span>                changeOrigin: true</span></span>
<span class="line"><span>            },</span></span>
<span class="line"><span>            &#39;/test&#39;: { //测试</span></span>
<span class="line"><span>                target: &#39;xxx&#39;</span></span>
<span class="line"><span>            },</span></span>
<span class="line"><span>            &#39;/pre&#39;: { //预发布</span></span>
<span class="line"><span>                target: &#39;xxx&#39;</span></span>
<span class="line"><span>            },</span></span>
<span class="line"><span>            &#39;/pro&#39;: { //正式</span></span>
<span class="line"><span>                target: &#39;xxx&#39;</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    pluginOptions: { // 第三方插件配置</span></span>
<span class="line"><span>        // ...</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div>`,3),i=[l];function c(t,o,r,u,g,d){return a(),n("div",null,i)}const m=s(e,[["render",c]]);export{v as __pageData,m as default};
