import{_ as s,c as n,o as a,U as t}from"./chunks/framework.zpeVKxWT.js";const m=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"docs/frontend/Vue/配置/tsconfig.json.md","filePath":"docs/frontend/Vue/配置/tsconfig.json.md"}'),p={name:"docs/frontend/Vue/配置/tsconfig.json.md"},e=t(`<h2 id="tsconfig的作用-参考链接-参考链接-参考链接" tabindex="-1">tsconfig的作用<a href="https://segmentfault.com/a/1190000021749847" target="_blank" rel="noreferrer">(参考链接)</a><a href="https://www.jianshu.com/p/47c29865b3a4" target="_blank" rel="noreferrer">(参考链接)</a><a href="https://github.com/pingan8787/leo-JavaScript/blob/master/Cute-ReadingNotes/%E4%BA%86%E4%B8%8D%E8%B5%B7%E7%9A%84%20tsconfig%20json%20%E5%AD%E4%B9%A0%E6%8C%87%E5%8D%97.md" target="_blank" rel="noreferrer">(参考链接)</a> <a class="header-anchor" href="#tsconfig的作用-参考链接-参考链接-参考链接" aria-label="Permalink to &quot;tsconfig的作用[(参考链接)](https://segmentfault.com/a/1190000021749847)[(参考链接)](https://www.jianshu.com/p/47c29865b3a4)[(参考链接)](https://github.com/pingan8787/leo-JavaScript/blob/master/Cute-ReadingNotes/%E4%BA%86%E4%B8%8D%E8%B5%B7%E7%9A%84%20tsconfig%20json%20%E5%AD%E4%B9%A0%E6%8C%87%E5%8D%97.md)&quot;">​</a></h2><p>tsconfig.json文件是编译 typeScript语言时遵循的编译规则配置。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>{</span></span>
<span class="line"><span>    &quot;compilerOptions&quot;: {</span></span>
<span class="line"><span>        &quot;target&quot;: &quot;esnext&quot;, // 目标语言的版本</span></span>
<span class="line"><span>        &quot;module&quot;: &quot;esnext&quot;, // 生成代码的模板标准</span></span>
<span class="line"><span>        &quot;strict&quot;: true, // 开启所有严格的类型检查</span></span>
<span class="line"><span>        &quot;jsx&quot;: &quot;preserve&quot;, // 指定jsx代码用于的开发环境: &#39;preserve&#39;,&#39;react-native&#39; or &#39;react&#39;</span></span>
<span class="line"><span>        &quot;importHelpers&quot;: true, // 通过tslib引入 helper函数,文件必须是模块</span></span>
<span class="line"><span>        &quot;moduleResolution&quot;: &quot;node&quot;, // 模块解析策略,ts默认用node的解析策略,即相对的方式导入</span></span>
<span class="line"><span>        &quot;esModuleInterop&quot;: true, // 允许 export=导出,由import from导入</span></span>
<span class="line"><span>        &quot;allowSyntheticDefaultImports&quot;: true, // allowSyntheticDefaultlmports用来指定允许从没有默认导出的模块中默认导入</span></span>
<span class="line"><span>        &quot;sourceMap&quot;: true, // sourceMap用来指定编译时是否生成map文件</span></span>
<span class="line"><span>        &quot;baseUrl&quot;: &quot;.&quot;, // baseUrl用于设置解析非相对模块名称的基本目录,相对模块不会受到baseUrl的影响</span></span>
<span class="line"><span>        &quot;types&quot;: [ // 加载的声明文件包</span></span>
<span class="line"><span>            &quot;webpack-env&quot;</span></span>
<span class="line"><span>        ],</span></span>
<span class="line"><span>        &quot;paths&quot;: { // 路径映射,相对于baseUrl</span></span>
<span class="line"><span>            &quot;@/*&quot;: [</span></span>
<span class="line"><span>                &quot;src/*&quot;</span></span>
<span class="line"><span>            ],</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>        &quot;lib&quot;: [ // lib用于指定要包含在编译中的库文件</span></span>
<span class="line"><span>            &quot;esnext&quot;,</span></span>
<span class="line"><span>            &quot;dom&quot;,</span></span>
<span class="line"><span>            &quot;dom.iterable&quot;,</span></span>
<span class="line"><span>            &quot;scripthost&quot;</span></span>
<span class="line"><span>        ],</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    &quot;include&quot;: [ // include也可以指定要编译的路径列表</span></span>
<span class="line"><span>        &quot;src/**/*.ts&quot;,</span></span>
<span class="line"><span>        &quot;src/**/*.tsx&quot;,</span></span>
<span class="line"><span>        &quot;src/**/*.vue&quot;,</span></span>
<span class="line"><span>        &quot;tests/**/*.ts&quot;,</span></span>
<span class="line"><span>        &quot;tests/**/*.tsx&quot;</span></span>
<span class="line"><span>    ],</span></span>
<span class="line"><span>    &quot;exclude&quot;: [ //  exclude表示要排除的,不编译的文件,它也可以指定一个列表,规则和 include一样,可以是文件可以是文件夹,可以是相对路径或绝对路径,可以使用通配符</span></span>
<span class="line"><span>        &quot;node_modules&quot;</span></span>
<span class="line"><span>    ]</span></span>
<span class="line"><span>}</span></span></code></pre></div>`,3),o=[e];function l(c,u,i,r,q,d){return a(),n("div",null,o)}const f=s(p,[["render",l]]);export{m as __pageData,f as default};
