import{_ as n,c as a,o as s,U as p}from"./chunks/framework.FpOEJISx.js";const k=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"docs/frontend/JavaScript/工具函数/代码片段.md","filePath":"docs/frontend/JavaScript/工具函数/代码片段.md"}'),e={name:"docs/frontend/JavaScript/工具函数/代码片段.md"},l=p(`<h2 id="下载一个excel文档" tabindex="-1">下载一个excel文档 <a class="header-anchor" href="#下载一个excel文档" aria-label="Permalink to &quot;下载一个excel文档&quot;">​</a></h2><p>同时适用于word,ppt等浏览器不会默认执行预览的文档,也可以用于下载后端接口返回的流数据，见下载后端返回的流</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>//下载一个链接</span></span>
<span class="line"><span>function download(link, name) {</span></span>
<span class="line"><span>    if(!name){</span></span>
<span class="line"><span>        name = link.slice(link.lastIndexOf(&#39;/&#39;) + 1)</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    let eleLink = document.createElement(&#39;a&#39;)</span></span>
<span class="line"><span>    eleLink.download = name</span></span>
<span class="line"><span>    eleLink.style.display = &#39;none&#39;</span></span>
<span class="line"><span>    eleLink.href = link</span></span>
<span class="line"><span>    document.body.appendChild(eleLink)</span></span>
<span class="line"><span>    eleLink.click()</span></span>
<span class="line"><span>    document.body.removeChild(eleLink)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>//下载excel</span></span>
<span class="line"><span>download(&#39;http://111.229.14.189/file/1.xlsx&#39;)</span></span></code></pre></div><h2 id="在浏览器中自定义下载一些内容" tabindex="-1">在浏览器中自定义下载一些内容 <a class="header-anchor" href="#在浏览器中自定义下载一些内容" aria-label="Permalink to &quot;在浏览器中自定义下载一些内容&quot;">​</a></h2><p>场景：我想下载一些DOM内容，我想下载一个JSON文件</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>/**</span></span>
<span class="line"><span> * 浏览器下载静态文件</span></span>
<span class="line"><span> * @param {String} name 文件名</span></span>
<span class="line"><span> * @param {String} content 文件内容</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>function downloadFile(name, content) {</span></span>
<span class="line"><span>    if (typeof name == &#39;undefined&#39;) {</span></span>
<span class="line"><span>        throw new Error(&#39;The first parameter name is a must&#39;)</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    if (typeof content == &#39;undefined&#39;) {</span></span>
<span class="line"><span>        throw new Error(&#39;The second parameter content is a must&#39;)</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    if (!(content instanceof Blob)) {</span></span>
<span class="line"><span>        content = new Blob([content])</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    const link = URL.createObjectURL(content)</span></span>
<span class="line"><span>    download(link, name)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 下载一个链接</span></span>
<span class="line"><span>function download(link, name) {</span></span>
<span class="line"><span>    if (!name) { //如果没有提供名字，从给的Link中截取最后一坨</span></span>
<span class="line"><span>        name =  link.slice(link.lastIndexOf(&#39;/&#39;) + 1)</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    let eleLink = document.createElement(&#39;a&#39;)</span></span>
<span class="line"><span>    eleLink.download = name</span></span>
<span class="line"><span>    eleLink.style.display = &#39;none&#39;</span></span>
<span class="line"><span>    eleLink.href = link</span></span>
<span class="line"><span>    document.body.appendChild(eleLink)</span></span>
<span class="line"><span>    eleLink.click()</span></span>
<span class="line"><span>    document.body.removeChild(eleLink)</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>使用方式：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>downloadFile(&#39;1.txt&#39;,&#39;lalalallalalla&#39;)</span></span>
<span class="line"><span>downloadFile(&#39;1.json&#39;,JSON.stringify({ name:&#39;hahahha&#39; }))</span></span></code></pre></div><h2 id="下载后端返回的流" tabindex="-1">下载后端返回的流 <a class="header-anchor" href="#下载后端返回的流" aria-label="Permalink to &quot;下载后端返回的流&quot;">​</a></h2><p>数据是后端以接口的形式返回的,调用 下载一个excel文档中的download方法进行下载</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>download(&#39;http://111.229.14.189/gk-api/util/download?file=1.jpg&#39;)</span></span>
<span class="line"><span>download(&#39;http://111.229.14.189/gk-api/util/download?file=1.mp4&#39;)</span></span></code></pre></div><h2 id="提供一个图片链接-点击下载" tabindex="-1">提供一个图片链接，点击下载 <a class="header-anchor" href="#提供一个图片链接-点击下载" aria-label="Permalink to &quot;提供一个图片链接，点击下载&quot;">​</a></h2>`,12),i=[l];function t(c,o,d,r,h,m){return s(),a("div",null,i)}const f=n(e,[["render",t]]);export{k as __pageData,f as default};
