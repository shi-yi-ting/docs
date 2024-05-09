import{_ as a,c as s,o as n,U as e}from"./chunks/framework.zpeVKxWT.js";const _=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"public/_file/md/vue/knowledge/tree.md","filePath":"public/_file/md/vue/knowledge/tree.md"}'),p={name:"public/_file/md/vue/knowledge/tree.md"},t=e(`<h2 id="树组件的使用" tabindex="-1">树组件的使用 <a class="header-anchor" href="#树组件的使用" aria-label="Permalink to &quot;树组件的使用&quot;">​</a></h2><h3 id="安装依赖" tabindex="-1">安装依赖 <a class="header-anchor" href="#安装依赖" aria-label="Permalink to &quot;安装依赖&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>npm install --save @riophae/vue-treeselect</span></span></code></pre></div><h3 id="使用" tabindex="-1">使用 <a class="header-anchor" href="#使用" aria-label="Permalink to &quot;使用&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// html</span></span>
<span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>    &lt;div&gt;</span></span>
<span class="line"><span>        &lt;treeselect v-model=&quot;config.departmentId&quot; :options=&quot;treeData.data&quot; :normalizer=&quot;normalizer&quot; /&gt;</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span>// js</span></span>
<span class="line"><span>&lt;script&gt;</span></span>
<span class="line"><span>import { defineComponent } from &#39;@vue/composition-api&#39;</span></span>
<span class="line"><span>import Treeselect from &#39;@riophae/vue-treeselect&#39;</span></span>
<span class="line"><span>import &#39;@riophae/vue-treeselect/dist/vue-treeselect.css&#39;</span></span>
<span class="line"><span>export default defineComponent({</span></span>
<span class="line"><span>    components: {</span></span>
<span class="line"><span>        Treeselect,</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    setup() {</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span>&lt;script&gt;</span></span></code></pre></div>`,5),l=[t];function i(o,c,r,d,u,h){return n(),s("div",null,l)}const g=a(p,[["render",i]]);export{_ as __pageData,g as default};
