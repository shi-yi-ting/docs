import{_ as s,c as a,o as n,U as p}from"./chunks/framework.zpeVKxWT.js";const k=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"docs/frontend/Tool/webpack.md","filePath":"docs/frontend/Tool/webpack.md"}'),e={name:"docs/frontend/Tool/webpack.md"},l=p(`<h2 id="webpack" tabindex="-1">webpack <a class="header-anchor" href="#webpack" aria-label="Permalink to &quot;webpack&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>const path = require(&#39;path&#39;) // // 导入 node.js 中专门操作路径的模块</span></span>
<span class="line"><span>const htmlWebpackPlugin = require(&#39;html-webpack-plugin&#39;) // 配置 html-webpack-plugin 生成预览页面</span></span>
<span class="line"><span>module.exports = {</span></span>
<span class="line"><span>    mode: &#39;development&#39;, // mode 用来指定构建模式</span></span>
<span class="line"><span>    entry: path.join(__dirname, &#39;./src/main.js&#39;), // 打包入口文件的路径</span></span>
<span class="line"><span>    output: {</span></span>
<span class="line"><span>        path: path.join(__dirname, &#39;./dist&#39;), // 输出文件的存放路径</span></span>
<span class="line"><span>        filename: &#39;bundle.js&#39;, // 输出文件的名称</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    // 内存中生成页面</span></span>
<span class="line"><span>    plugins: [ // plugins 数组是 webpack 打包期间会用到的一些插件列表</span></span>
<span class="line"><span>        new htmlWebpackPlugin({ // 创建插件的实例对象</span></span>
<span class="line"><span>            template: path.join(__dirname, &#39;./src/index.html&#39;), // 指定要用到的模板文件</span></span>
<span class="line"><span>            filename: &#39;index.html&#39;, // 指定生成的文件的名称，该文件存在于内存中，在目录中不显示</span></span>
<span class="line"><span>        }),</span></span>
<span class="line"><span>    ],</span></span>
<span class="line"><span>    module: {</span></span>
<span class="line"><span>        rules: [</span></span>
<span class="line"><span>            { test: /.css$/, use: [&#39;style-loader&#39;, &#39;css-loader&#39;] },</span></span>
<span class="line"><span>            { test: /.scss$/, use: [&#39;style-loader&#39;, &#39;css-loader?modules&#39;, &#39;sass-loader&#39;] },</span></span>
<span class="line"><span>            { test: /.(png|gif|bmp|jpg)$/, use: &#39;url-loader?limit=5000&#39; },</span></span>
<span class="line"><span>            { test: /.jsx?$/, use: &#39;babel-loader&#39;, exclude: /node_modules/ },</span></span>
<span class="line"><span>        ],</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="什么是webpack" tabindex="-1">什么是webpack <a class="header-anchor" href="#什么是webpack" aria-label="Permalink to &quot;什么是webpack&quot;">​</a></h3><p>Webpack是目前流行的前端项目打包工具，它将各个模块组合在一起实现最终的页面效果 打包之后会自动生成一个 dist 文件夹，打包好的文件将会被保存在这里</p><h3 id="webpack的基本使用" tabindex="-1">Webpack的基本使用 <a class="header-anchor" href="#webpack的基本使用" aria-label="Permalink to &quot;Webpack的基本使用&quot;">​</a></h3><p>1.webpack打包的出口和入口文件的位置 webpack 的 4.x 版本中默认约定：打包的入口文件为： src 中的 index.js 文件 打包的输出文件为 dist 中的 main.js 文件</p><p>2.配置webpack打包的出口和入口文件 配置打包的出口和入口文件是在webpack.config.js文件中进行配置 配置过程中将用到node中的系统模块 path，在webpack.config.js模块中使用 module export向外暴漏一个对象，对象中有两个属性分别为 entry的属性的属性值为入口文件的绝对路径，通过path模块对象中的join方法进行路径拼接 output属性的属性值为对象类型对象当中有path 和filename两个属性 path的属性值为出口文件的绝对路径由path模块中的join方法拼接而成 filename的作用是对输出的文件的文件名进行自定义</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>3.webpack配置自动打包功能</span></span>
<span class="line"><span>如果不配置，每次修改代码之后，需要运行一样 npm run dev   修改的代码才能生效</span></span>
<span class="line"><span>配置步骤</span></span>
<span class="line"><span>    1.运行 npm install webpakc-dev-server -D 命令  安装支持项目自动打包的工具</span></span>
<span class="line"><span>    2.将 package.json 文件 scripts 中的 dev 值改为  webpack-dev-server   然后执行 npm run</span></span>
<span class="line"><span>    3.将 src 文件夹 index.html 中 script 脚本的引用路径 修改为  “/bundle.js”</span></span>
<span class="line"><span>    4.运行 npm run dev 命令重新打包</span></span>
<span class="line"><span>    5.在浏览器中访问  http://localhost:8080  地址 查看打包的效果  改地址为项目的根目录</span></span>
<span class="line"><span>    **注意：**</span></span>
<span class="line"><span>    1.webpack-dev-server 会启动一个实时打包的 http 服务器，用于监听代码的变化，变化之后自动打包</span></span>
<span class="line"><span>    2.webpack-dev-server 打包生成的输出文件，默认放到了项目的根目录中，而且是虚拟的，看不见的，使用是为： “/bundle.js”</span></span>
<span class="line"><span>    3.自动打包文件的输出文件默认自动放在了根目录中，并没有按outpit指定到输出目录并且输出的文件我们在物理存储空间是看不到的</span></span>
<span class="line"><span>配置html-webpack-plugin生成预览页面</span></span>
<span class="line"><span>原因是不进行配置，进去页面之后我们看到的是路径，而不是页面的效果，需要点击选中 src 才能看到效果</span></span>
<span class="line"><span>配置步骤：</span></span>
<span class="line"><span>    1.运行 npm install html-webpack-plugin -D  安装生成预览页面的插件</span></span>
<span class="line"><span>    2.在webpack.config.js文件中导入安装的html-webpack-plugin插件，导入之后会有一个构造函数的返回值赋值给变量，使用这个构造函数实例化一个对象，构造函数中的梳理画过程中传递一个对象作为实参，对象中有两个属性一个template作用是指定要用到的模板文件一个filename指定生成的文件的名称改文件存储于内存中，目录中是显示的</span></span>
<span class="line"><span>    3.修改 webpack.config.js  文件中向外暴露的配置对象。对象中有一个plugin属性，该属性的属性值为数组类型，数组存放的为将要暴漏出去的插件内容</span></span>
<span class="line"><span>    4.重新执行 npm run dev</span></span>
<span class="line"><span>配置自动打包的相关参数</span></span>
<span class="line"><span>如果不配置，每次运行代码之后需要手动复制 链接 然后打开浏览器粘贴之后才能查看效果</span></span>
<span class="line"><span>配置步骤：</span></span>
<span class="line"><span>找到 package.json 文件 在 scripts 节点中的 dev 的值后面   空格 之后加一个 --open即可</span></span>
<span class="line"><span>Webapck中配置加载器</span></span>
<span class="line"><span>使用loader加载器的原因：</span></span>
<span class="line"><span>在实际开发过程中，webpack 默认只能打包处理以  .js  后缀名结尾的模块</span></span>
<span class="line"><span>其他非 .js 后缀名结尾的模块， webpack 默认处理不了，需要调用 loader加载器才可以正常打包，否则会报错</span></span>
<span class="line"><span>loader 加载器可以协助 webpack 打包处理特定的文件模块，比如：less-loader  sass-loade  url-loader</span></span>
<span class="line"><span>在webpack.config.js的module中的rules属性中添加loader规则，rules的属性为数组类型，数组当中存放的为</span></span>
<span class="line"><span>loader的正则****</span></span></code></pre></div><h3 id="上线之前的打包" tabindex="-1">上线之前的打包 <a class="header-anchor" href="#上线之前的打包" aria-label="Permalink to &quot;上线之前的打包&quot;">​</a></h3><p>1.在package.json 文件中的scripts节点中配置 webpack 打包命令&quot;build&quot;: &quot;webpack -p&quot; 该命令默认加载项目根目录中的 webpack.config.js 配置文件 2.执行 npm run build 指令进行打包发布 3.打包完之后，文件将保存在 dist 文件夹中</p>`,10),c=[l];function i(t,o,d,r,u,b){return n(),a("div",null,c)}const m=s(e,[["render",i]]);export{k as __pageData,m as default};
