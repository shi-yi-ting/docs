import{_ as n,c as s,o as a,U as p}from"./chunks/framework.FpOEJISx.js";const h=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"public/static/_file/md/demo/modal/modal.md","filePath":"public/static/_file/md/demo/modal/modal.md"}'),e={name:"public/static/_file/md/demo/modal/modal.md"},l=p(`<h2 id="antdesign中弹框的使用" tabindex="-1">AntDesign中弹框的使用 <a class="header-anchor" href="#antdesign中弹框的使用" aria-label="Permalink to &quot;AntDesign中弹框的使用&quot;">​</a></h2><p><a href="https://antdv.com/docs/vue/getting-started-cn" target="_blank" rel="noreferrer">antDesign官方文档</a></p><h3 id="利用ant-design-vue中的modal写一个showantconfig公用方法具体如下" tabindex="-1">利用ant-design-vue中的Modal写一个showAntConfig公用方法具体如下： <a class="header-anchor" href="#利用ant-design-vue中的modal写一个showantconfig公用方法具体如下" aria-label="Permalink to &quot;利用ant-design-vue中的Modal写一个showAntConfig公用方法具体如下：&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>import { createVNode } from &#39;vue&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import { ExclamationCircleOutlined } from &#39;@ant-design/icons-vue&#39;</span></span>
<span class="line"><span>import { Modal } from &#39;ant-design-vue&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export const showAntConfirm = (title = &#39;提示&#39;, content = &#39;确认继续?&#39;, fun) =&gt; {</span></span>
<span class="line"><span>    Modal.confirm({</span></span>
<span class="line"><span>        title: title,</span></span>
<span class="line"><span>        icon: createVNode(ExclamationCircleOutlined), // 图标也可以处理成动态</span></span>
<span class="line"><span>        content: content,</span></span>
<span class="line"><span>        onOk() {</span></span>
<span class="line"><span>            fun()</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        onCancel() { },</span></span>
<span class="line"><span>    })</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * 定义一个名为 showAntConfirm 的函数，该函数用于显示一个 Ant Design Vue 的确认对话框。</span></span>
<span class="line"><span> * 函数的参数如下：</span></span>
<span class="line"><span> * - title：对话框的标题，默认值为 &#39;提示&#39;。</span></span>
<span class="line"><span> * - content：对话框的内容，默认值为 &#39;确认继续?&#39;。</span></span>
<span class="line"><span> * - fun：一个函数，当点击对话框的确定按钮时，会执行这个函数。这个函数的类型是泛型 T，它可以是任 何接受任意参数并返回任何结果的函数。</span></span>
<span class="line"><span> * 函数的返回类型是 void，表示这个函数没有返回值。</span></span>
<span class="line"><span> * fun 是一个泛型函数，这个函数可以接受任意数量和类型的参数，并返回任何类型的结果。showAntConfirm 函数的返回类型是 void。</span></span>
<span class="line"><span> * **/</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// import { createVNode } from &#39;vue&#39;</span></span>
<span class="line"><span>// // import type {  VNode } from &#39;@vue/runtime-core&#39;</span></span>
<span class="line"><span>// import { ExclamationCircleOutlined } from &#39;@ant-design/icons-vue&#39;</span></span>
<span class="line"><span>// import { Modal } from &#39;ant-design-vue&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// export const showAntConfirm = &lt;T extends (...args: any[]) =&gt; any&gt;(title: string = &#39;提示&#39;, content: string = &#39;确认继续?&#39;, fun: T): void =&gt; {</span></span>
<span class="line"><span>//     Modal.confirm({</span></span>
<span class="line"><span>//         title: title,</span></span>
<span class="line"><span>//         icon: createVNode(ExclamationCircleOutlined), // 图标也可以处理成动态</span></span>
<span class="line"><span>//         content: content,</span></span>
<span class="line"><span>//         onOk() {</span></span>
<span class="line"><span>//             fun()</span></span>
<span class="line"><span>//         },</span></span>
<span class="line"><span>//         onCancel() { },</span></span>
<span class="line"><span>//     })</span></span>
<span class="line"><span>// }</span></span></code></pre></div><h3 id="使用" tabindex="-1">使用 <a class="header-anchor" href="#使用" aria-label="Permalink to &quot;使用&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>    &lt;div class=&quot;enclosure_container&quot;&gt;</span></span>
<span class="line"><span>        &lt;div class=&quot;pointer&quot; @click=&quot;downFile&quot;&gt;弹框&lt;/div&gt;</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script&gt;</span></span>
<span class="line"><span>import { reactive, onMounted } from &#39;vue&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import { showAntConfirm } from &#39;./_js/showAntConfig.js&#39; // 导入封装弹框的方法</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export default {</span></span>
<span class="line"><span>    setup() {</span></span>
<span class="line"><span>        const downFile = () =&gt; {</span></span>
<span class="line"><span>            showAntConfirm(&#39;提示&#39;, &#39;确认继续?&#39;, () =&gt; {</span></span>
<span class="line"><span>                console.log(&#39;下载文件&#39;)</span></span>
<span class="line"><span>            })</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        return {</span></span>
<span class="line"><span>            downFile,</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&lt;/script&gt;</span></span></code></pre></div>`,6),t=[l];function i(c,o,r,d,m,u){return a(),s("div",null,t)}const f=n(e,[["render",i]]);export{h as __pageData,f as default};
