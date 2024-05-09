import{_ as s,c as a,o as n,U as e}from"./chunks/framework.zpeVKxWT.js";const m=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"public/_file/md/vue/config/jsconfig.md","filePath":"public/_file/md/vue/config/jsconfig.md"}'),o={name:"public/_file/md/vue/config/jsconfig.md"},p=e(`<h3 id="_1-什么是-jsconfig-json-参考链接-参考链接" tabindex="-1">1. 什么是 jsconfig.json<a href="https://www.jianshu.com/p/f82d9d11c32b" target="_blank" rel="noreferrer">(参考链接)</a><a href="https://zhuanlan.zhihu.com/p/55644953" target="_blank" rel="noreferrer">(参考链接)</a> <a class="header-anchor" href="#_1-什么是-jsconfig-json-参考链接-参考链接" aria-label="Permalink to &quot;1. 什么是 jsconfig.json[(参考链接)](https://www.jianshu.com/p/f82d9d11c32b)[(参考链接)](https://zhuanlan.zhihu.com/p/55644953)&quot;">​</a></h3><p>jsconfig.json文件指定根目录和 JavaScript.服务提供的功能选项 提示:如果不使用 JavaScript,就不需要配置jsconfig.json 提示: tsconfig.json配置高于jsconfig.json,它是TypeScript的配置文件。配置了tsconfig.json的情况下allowJS:true jsconfig.json才生效</p><h3 id="_2-为什么需要jsconfig-json文件" tabindex="-1">2. 为什么需要jsconfig.json文件 <a class="header-anchor" href="#_2-为什么需要jsconfig-json文件" aria-label="Permalink to &quot;2. 为什么需要jsconfig.json文件&quot;">​</a></h3><p>Visual Studio Code的 JavaScript支持可以两种不同模式运行 File Scope:没有jsconfig.json 在这种模式下,在 Visual Studio Code中打开的JavaScript文件被视为独立的单元。只要文件a.js没有显式引用b.ts (即使用 import或 CommonJS模央),两个文件之间就不会存在公共项目上下文 Explicit Project- 有jsconfig.json 通过jsconfig.json文件定义一个 JavaScript项目。目录中是否存在此类文件表示该目录是 Javascript项目的根目录。 文件本身可以选择列出属于项目的文件,要从项目中排除的文件以及编译器选项</p><h3 id="_3-config选项" tabindex="-1">3. config选项 <a class="header-anchor" href="#_3-config选项" aria-label="Permalink to &quot;3. config选项&quot;">​</a></h3><p>选项描述 noLib 不包括默认库文件(lib.d.ts) target 指定要使用的默认库(lib.d.ts)。值:es3,es5,es6,es2015,es2016,es2017,es2018,es2019, es2020, esnext module 生成模块代码时指定模块系统。值:amd,commonJS, es2015, es6, esnext, none, system, umd moduleResolution 指定如何解析模块以进行导入。值：node, classic checkJS对 JavaScript文件启用类型检查 experimentalDecorators 为建议的ES装饰器提供实验支持。 allowSyntheticDefaultImports 允许从模块进行 default import而没有 default export。这不影响代码发出, 仅影响类型检查。只起到检查的作用不会对编译后的代码有任何影响 baseUrl 基本目录,用于解析非相对模块名称。 paths 指定要相对于 baseUrl选项计算的路径映射。</p><h3 id="_4-vue-cli-jsconfig配置" tabindex="-1">4.vue-cli jsconfig配置 <a class="header-anchor" href="#_4-vue-cli-jsconfig配置" aria-label="Permalink to &quot;4.vue-cli jsconfig配置&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>{</span></span>
<span class="line"><span>    &quot;compilerOptions&quot;: {</span></span>
<span class="line"><span>        &quot;target&quot;: &quot;es2017&quot;,</span></span>
<span class="line"><span>        &quot;allowSyntheticDefaultImports&quot;: false,</span></span>
<span class="line"><span>        &quot;baseUrl&quot;: &quot;./&quot;,</span></span>
<span class="line"><span>        &quot;paths&quot;: {</span></span>
<span class="line"><span>            &quot;@/*&quot;: [&quot;src/*&quot;],</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    &quot;exclude&quot;: [</span></span>
<span class="line"><span>        &quot;node_modules&quot;,</span></span>
<span class="line"><span>        &quot;dist&quot;,</span></span>
<span class="line"><span>        &quot;public&quot;</span></span>
<span class="line"><span>    ],</span></span>
<span class="line"><span>    &quot;include&quot;: [</span></span>
<span class="line"><span>        &quot;src/**/*&quot;</span></span>
<span class="line"><span>    ],</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>不要被 compilerOptions混淆。此属性的存在是因为jsconfig.json是 tsconfig json的后代,后者用于编译TypeScript</p><h3 id="_5-使用exclude属性" tabindex="-1">5.使用exclude属性 <a class="header-anchor" href="#_5-使用exclude属性" aria-label="Permalink to &quot;5.使用exclude属性&quot;">​</a></h3><p>exclude属性(glob模式)告诉语言服务哪些文件不是源代码的一部分。这使性能保持在较高水平 如果 IntelliSense速度很慢,请将文件夹添加到排除列表中(如果检测到速度减慢,VS代码将提示您执行此操作)</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>{</span></span>
<span class="line"><span>    &quot;compilerOptions&quot;: {</span></span>
<span class="line"><span>        &quot;target&quot;: &quot;es6&quot;,</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    &quot;exclude&quot;: [</span></span>
<span class="line"><span>        &quot;node_modules&quot;,</span></span>
<span class="line"><span>    ],</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>提示:您将要排除由构建过程生成的文件(例如,dist目录)。这些文件会导致建议显示两次,并会降低 IntelliSense的速度</p><h3 id="_6-使用-包含-属性" tabindex="-1">6.使用&quot;包含&quot;属性 <a class="header-anchor" href="#_6-使用-包含-属性" aria-label="Permalink to &quot;6.使用&quot;包含&quot;属性&quot;">​</a></h3><p>或者,可以使用 include属性(glob模式)显式设置项目中的文件。如果不存在 include属性,则默认为包含目录和子目录中的所有文件 如果指定了 include属性,则只包括这些文件。下面是一个具有显式 include属性的示例</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>{</span></span>
<span class="line"><span>    &quot;compilerOptions&quot;: {</span></span>
<span class="line"><span>        &quot;target&quot;: &quot;es6&quot;,</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    &quot;include&quot;: [</span></span>
<span class="line"><span>        &quot;src/**/*&quot;,</span></span>
<span class="line"><span>    ],</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>提示: exclude和 include中的文件路径是相对于jsconfig.json的位置。</p><h3 id="_7-使用-webpack别名" tabindex="-1">7. 使用 webpack别名 <a class="header-anchor" href="#_7-使用-webpack别名" aria-label="Permalink to &quot;7. 使用 webpack别名&quot;">​</a></h3><p>要使 IntelliSense使用 webpack别名,您需要使用glob模式指定 paths键 例如,对于别名&#39;ClientAPP&#39;(或@)：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>{</span></span>
<span class="line"><span>    &quot;compilerOptions&quot;: {</span></span>
<span class="line"><span>        &quot;baseUrl&quot;: &quot;.&quot;,</span></span>
<span class="line"><span>        &quot;paths&quot;: {</span></span>
<span class="line"><span>            &quot;ClientAPP/*&quot;: [&quot;./ClientAPP/*&quot;]</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>然后使用别名 import Something from &#39;ClientApp/foo&#39; // 或 import Something from &#39;@/foo&#39;</p><h3 id="_8-最佳的使用方案" tabindex="-1">8. 最佳的使用方案 <a class="header-anchor" href="#_8-最佳的使用方案" aria-label="Permalink to &quot;8. 最佳的使用方案&quot;">​</a></h3><p>只要有可能,您应该使用不属于项目源代码的javaScript文件排除文件夹。 提示:如果工作空间中没有jsconfig.json,则默认情况下, VS Code将排除node_ modules文件夹。 下面是一个表格,将常见的项目组件映射到建议排除的安装文件夹 组件排除的目录 node 排除 node modules文件目录 webpack webpack-dev-server 排除dist文件目录 bower 排除 bower_components文件目录 ember 排除tmp及temp文件目录 jspm 排除 jspm_packages文件目录</p><p>当你的 JavaScript项目变得太大而且性能降低时,通常是因为类似 node_modules的库文件夹。 如果vs代码检测到项目变得太大,它将提示您编辑 exclude</p><p>提示:有时无法正确选择更改配置,例如添加或编辑jsconfig.json文件。 运行 Reload JavaScript Project命令应重新加载项目并获取更改。</p><h3 id="_9-使用-typescript编译器进行低级编译" tabindex="-1">9.使用 TypeScript编译器进行低级编译 <a class="header-anchor" href="#_9-使用-typescript编译器进行低级编译" aria-label="Permalink to &quot;9.使用 TypeScript编译器进行低级编译&quot;">​</a></h3><p>当tsc用于将ES6 JavaScript向下级编译为旧版本时, jsconfig.json中的以下编译器选项适用</p><p>选项 描述 module 指定模块代码生成。值为 &quot;commonjs&quot;,&quot;system&quot;,&quot;umd&quot;,&quot;amd&quot;,&quot;es6&quot;, &quot;es2015&quot; diagnostics 显示诊断信息。 emitBOM 在输出文件的开头发出UTF-8字节顺序标记(BOM)。 inlineSourceMap 使用源映射发出单个文件,而不是使用单独的文件 inlineSources 在单个文件中将源与源图一起发出;需要设置 --inlineSourceMap jsx 指定JSX代码生成:“保留”或“反应”? reactNamespace 指定在针对 &#39;react&#39;JSX发出的目标时为 createElement和 __spread调用的对象。 mapRoot 将位置指定为字符串中的url,其中调试器应该找到映射文件而不是生成的位置。 noEmit 不发起输出 noEmitHelpers 不在编译输出中生成自定义辅助函数,如_extends noEmitOnError 如果报告任何类型检查错误,不发起输出。 noResolve 不将三斜杠引用或模块导入目标解析为输入文件 outFile 连接并将输出发送到单个文件 outDir 将输出结构重定向到目录。 removeComments 不向输出发出注释 rootDir 指定输入文件的根目录。用于通过--outDir控制输出目录结构 sourceMap 生成相应的map文件。 sourceRoot 指定调试器应该找到 JavaScript文件而下是源位置的位置。 stripInternal 不为具有&#39;@internal&#39;注释的代码发出声明 watch 监听输入文件。 emitDecoratorMetadata 在源中为装饰声明发出设计类型元数据。 noImplicitUseStrict 不在模块输出中发出&quot;use strict&quot;指令。</p>`,28),t=[p];function i(l,c,u,r,d,h){return n(),a("div",null,t)}const g=s(o,[["render",i]]);export{m as __pageData,g as default};
