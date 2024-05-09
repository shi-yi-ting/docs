import{_ as s,c as a,o as n,U as e}from"./chunks/framework.zpeVKxWT.js";const m=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"public/_file/md/vue/config/babelConfig.md","filePath":"public/_file/md/vue/config/babelConfig.md"}'),p={name:"public/_file/md/vue/config/babelConfig.md"},l=e(`<h2 id="babelconfig的作用" tabindex="-1">babelConfig的作用 <a class="header-anchor" href="#babelconfig的作用" aria-label="Permalink to &quot;babelConfig的作用&quot;">​</a></h2><p>你是否希望以编程的方式创建配置文件？ 你是否希望编译 node_modules 目录下的模块？ babel.config.js 文件可以满足你的的需求！</p><p>你是否只是需要一个简单的并且只用于单个软件包的配置？ .babelrc 文件适合你</p><p>所有 Babel API 参数 都可以被配置。然而，如果该参数需要用到 JavaScript 代码，你可能需要使用 JavaScript 代码版的</p><h3 id="vue-cli3如何配置-babel-config-js可以按需引用多个不同的组件库-参考链接" tabindex="-1">vue cli3如何配置 babel.config.js可以按需引用多个不同的组件库<a href="https://www.cnblogs.com/bai1218/p/12392180.html" target="_blank" rel="noreferrer">(参考链接)</a> <a class="header-anchor" href="#vue-cli3如何配置-babel-config-js可以按需引用多个不同的组件库-参考链接" aria-label="Permalink to &quot;vue cli3如何配置 babel.config.js可以按需引用多个不同的组件库[(参考链接)](https://www.cnblogs.com/bai1218/p/12392180.html)&quot;">​</a></h3><p>babel默认是只会去转义js语法, 不会去转换新的API, 比如像 Promise、 Generator、 Symbol这种全局API对象,babel是不会去编译的</p><h3 id="presets" tabindex="-1">presets <a class="header-anchor" href="#presets" aria-label="Permalink to &quot;presets&quot;">​</a></h3><p>presets也就是预设的意思, 大概意思就是可以预先设定好一些东西, 就省得我们一个个的去引入插件了 官方提供了很多 presets比如 preset-env(处理es6 + 规范语法的插件集合) preset-stage(一些处理尚在提案阶段的语法的插集合, 当然这种预设的方式在babe7 + 版本已经被废弃了) 、 preset-react(处理react语法的插件集合)等等。</p><p>我们主要来介绍下 preset-env: preset-env是一个智能预设, 配置了它就可以让你用es6 + 去书写你的代码, 而且他会按需去加载所需要的插件, 记得先install这个@babel/preset-env 关于 preset - env, 我们还可以提供一个 targets配置指定运行环境, 就是我们可以配置对应目标浏览器境, 那么 babel就会编译出对应目标浏览器环境可运行的代码。</p><h4 id="使用场景" tabindex="-1">使用场景 <a class="header-anchor" href="#使用场景" aria-label="Permalink to &quot;使用场景&quot;">​</a></h4><p>相信有同学遇到过在低版本系统os手机里自己的项目会白屏, 其实是某些语法在ios低版本系统里不支持, 这个时候我们可以直接配置ios7浏览器环境都可以支持的代码</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>module.exports = {</span></span>
<span class="line"><span>    preset: [</span></span>
<span class="line"><span>        &#39;@babel/preset-env&#39;,</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>        	&#39;targets&#39;: {</span></span>
<span class="line"><span>            		&#39;browsers&#39;: [&#39;ie &gt;= 8&#39;, &#39;ios 7&#39;] // 支持ie8,直接使用ios浏览器版本7</span></span>
<span class="line"><span>        	}</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    ],</span></span>
<span class="line"><span>    plugin: []</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="babel的-browserslist集成-参考链接" tabindex="-1">babel的 Browserslist集成<a href="https://github.com/browserslist/browserslist#queries" target="_blank" rel="noreferrer">(参考链接)</a> <a class="header-anchor" href="#babel的-browserslist集成-参考链接" aria-label="Permalink to &quot;babel的 Browserslist集成[(参考链接)](https://github.com/browserslist/browserslist#queries)&quot;">​</a></h3><p>@babel/polyfill(由 core-js2和regenerator-runtime组成的一个集成包) 作用：用于编译新的api,比如像 Promise、 Generator、 Symbo这种全局AP对象 用法很简单, 先安装一波, 然后我们只需要在入口文件顶部引入@babel/polyfill就可以使用新增的API</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>/* study.js*/</span></span>
<span class="line"><span>import @babel/polyfill</span></span>
<span class="line"><span>new Promise(function () { })  // 新增API</span></span>
<span class="line"><span>/* study-compiled.js */</span></span>
<span class="line"><span>require(&quot;@babel/polyfill&quot;)</span></span>
<span class="line"><span>new Promise(function () { })  // 新增API</span></span></code></pre></div><p>小细节: import被编译成了 require, 如果想要编译出来的模块引入规范还是 import, 则可以在 preset-env的配置项中 添加 &quot;modules&quot;: false即可 modules的options: &quot;amd&quot;|&quot;umd&quot;|&quot;systemjs&quot;|&quot;commonjs&quot;|&quot;cjs&quot;|&quot;auto&quot;| false,默认为&quot;auto&quot; 但是问题又来了, 有时候我们项目里并没有用到那么多的新增API 但是@babel/polyll会把所有浏览器环境的的polyll都引入，整个包的体积就会很大</p><h3 id="按需引入-polypll" tabindex="-1">按需引入 polypll <a class="header-anchor" href="#按需引入-polypll" aria-label="Permalink to &quot;按需引入 polypll&quot;">​</a></h3><p>我们想要对目标环境按需引入相应的polypll应该怎仫办呢 这个时候我们就可以使用 preset-env的配置项中的useBuiltIns属性来按需引入 polypll</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>module.exports = {</span></span>
<span class="line"><span>    presets: [</span></span>
<span class="line"><span>        [</span></span>
<span class="line"><span>       		 &#39;@babel/preset-env&#39;,</span></span>
<span class="line"><span>       		 {</span></span>
<span class="line"><span>           	 	modules: false,</span></span>
<span class="line"><span>           		useBuiltIns: &#39;entry&#39;,</span></span>
<span class="line"><span>           	 	targets: {</span></span>
<span class="line"><span>           		 	browsers: [&#39;ie &gt;= 8&#39;, &#39;ios 7&#39;] // 支持ie8,直接使用ios浏览器版本7</span></span>
<span class="line"><span>            		},</span></span>
<span class="line"><span>      		}</span></span>
<span class="line"><span>        ]</span></span>
<span class="line"><span>    ],</span></span>
<span class="line"><span>    plugins: []</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>这个时候就会在入口处只把所有ie8以上以及ios7浏览器不支持api的polyfill引入进来</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>/* study」js*/</span></span>
<span class="line"><span>import &#39;@babel/polyfill&#39;</span></span>
<span class="line"><span>// 新增API</span></span>
<span class="line"><span>new Promise(function () { })</span></span>
<span class="line"><span>/*study - compiled.js */</span></span>
<span class="line"><span>import &#39;core-js/modules/es6.array.copy-within&#39;</span></span>
<span class="line"><span>import &#39;core-js/modules/es6.array.every&#39;</span></span>
<span class="line"><span>// ...省略若干</span></span>
<span class="line"><span>import &quot;core-js/modules/web.immediate&quot;</span></span>
<span class="line"><span>import &quot;core-js/modules/web.dom.iterable&quot;</span></span>
<span class="line"><span>import &quot;regenerator-runtime/runtime&quot;</span></span>
<span class="line"><span>// 新增API</span></span>
<span class="line"><span>new Promise(function () {})</span></span></code></pre></div><p>此时你会发现, import &#39;@babel/polyfil没有了,引入的是我们目标环境相应的 polyfill 但是有没有发现引入的都是 import core-js/...的内容，标题已经说啦,@babe/polyfill是由 core-js2和regenerator-runtime组成的一个集成包</p><p>这个时候你又会想, 假如我的项目里面只用到了Promise这个APl,能不能只给我引入 Promise相应的API呢? 答案是必可以!, 让我们先来好好了解下preset-envl的配置项中的 useBuiltIns属性。 useBuiltIns: 选项: &quot;usage&quot;|&quot;entry&quot;|false,默认为 false entry我们已经用过了, 意义就是在入口处将根据我们配置的浏览器兼容, 将目标浏览器环境所有不支持的API都引入。 usage就很nb了,当配置成 usage的时候,babel会扫描你的每个文件,然后检查你都用到了哪些新的API 跟进我们配置的浏览器兼容,只引入相应API的polyfill我们把 useBuiltIns属性设置为 usage再来看下编译效果</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>/* study.js */</span></span>
<span class="line"><span>import &#39;@babel/polyfill</span></span>
<span class="line"><span>// 新增API</span></span>
<span class="line"><span>new Promise(function () {})</span></span>
<span class="line"><span>/*study-compiled.js*/</span></span>
<span class="line"><span>import &quot;core-js/modules/es.object.to-string</span></span>
<span class="line"><span>import &quot;core-js/modules/es.promise</span></span>
<span class="line"><span>// 新增API</span></span>
<span class="line"><span>new Promise(function () { })</span></span></code></pre></div><p>相信你也看到了一个东西, 当我们使用 useBuiltIns选项的时候, 你的命令行里面是不是显示了一坨这样的警告， 大概是在配置文件中未指定 core-js版本时默认会使用 core-js2 WARNING: We noticed you&#39;re using theSince this default version will likely changeuture versions of abelersion you are using via the cores option 前面也说到了@babel/polyfill是由 core-js2和regenerator-runtime组成的一个集成包,现在core-js3已经发布了,而且很稳定 但是 core-js2在18年的时候已经不再维护了,@babel/polyfill引入的是2不是3 并且@babel/polyfill在babel7.4.0已经不再推荐使用了要废掉(好像是因为@babe/polyfill不支持core-js2平滑的过到core-js3) 所以core-js官方现在推荐我们使用polyfill的时候直引入core-js和regenerator-runtime/runtime这两个包完全取代 @babel/polyfill来为了防止重大更改。 当然, 我们需要在 preset-env配置项中指定core-js版本，这样就不会再有警告了</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>module.exports = {</span></span>
<span class="line"><span>    presets: [</span></span>
<span class="line"><span>        &#39;@babel/preset-env&#39;,</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>        	modules: false,</span></span>
<span class="line"><span>        	useBuiltIns: &#39;entry&#39;,</span></span>
<span class="line"><span>        	corejs: &#39;3&#39;,</span></span>
<span class="line"><span>        	targets: {</span></span>
<span class="line"><span>           	 	browsers: [&#39;not ie &gt;= 8&#39;, &#39;iOS 7&#39;] // 支持ie8,直接使用ios浏览器版本7</span></span>
<span class="line"><span>       	 	},</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>    ],</span></span>
<span class="line"><span>    plugins: []</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>在你修改了babel配置项之后一定要记得重启编译命令,否则不会生效</p><p>维护公共组件库或者一些别的公共库推荐要使用@babel/runtime配合@babel/plugin-transform-runtime来建立沙箱环境</p><h3 id="vue-cli的浏览器兼容babel的配置-参考链接" tabindex="-1">vue-cli的浏览器兼容babel的配置<a href="https://www.cnblogs.com/chun321/p/13070553.html" target="_blank" rel="noreferrer">(参考链接)</a> <a class="header-anchor" href="#vue-cli的浏览器兼容babel的配置-参考链接" aria-label="Permalink to &quot;vue-cli的浏览器兼容babel的配置[(参考链接)](https://www.cnblogs.com/chun321/p/13070553.html)&quot;">​</a></h3><h3 id="github关于browserslist开源项目使用介绍-参考链接" tabindex="-1">github关于browserslist开源项目使用介绍<a href="https://github.com/browserslist/browserslist" target="_blank" rel="noreferrer">(参考链接)</a> <a class="header-anchor" href="#github关于browserslist开源项目使用介绍-参考链接" aria-label="Permalink to &quot;github关于browserslist开源项目使用介绍[(参考链接)](https://github.com/browserslist/browserslist)&quot;">​</a></h3>`,30),t=[l];function i(o,r,c,b,u,h){return n(),a("div",null,t)}const g=s(p,[["render",i]]);export{m as __pageData,g as default};
