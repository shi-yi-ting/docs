import{_ as s,c as n,o as a,U as p}from"./chunks/framework.FpOEJISx.js";const v=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"docs/frontend/Vue/基础/组件通信.md","filePath":"docs/frontend/Vue/基础/组件通信.md"}'),l={name:"docs/frontend/Vue/基础/组件通信.md"},e=p(`<h2 id="vue3中组件通信" tabindex="-1">vue3中组件通信 <a class="header-anchor" href="#vue3中组件通信" aria-label="Permalink to &quot;vue3中组件通信&quot;">​</a></h2><h3 id="父组件-子组件传值" tabindex="-1">父组件---&gt;子组件传值 <a class="header-anchor" href="#父组件-子组件传值" aria-label="Permalink to &quot;父组件---&gt;子组件传值&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>    &lt;!-- 父组件 --&gt;</span></span>
<span class="line"><span>    &lt;div&gt;</span></span>
<span class="line"><span>        &lt;Gap :affiltatedhub=&quot;searchInput.Affiltatedhub&quot; /&gt;</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>    &lt;!-- 子组件 --&gt;</span></span>
<span class="line"><span>    &lt;div&gt;</span></span>
<span class="line"><span>        gap</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script setup&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// TODO</span></span>
<span class="line"><span>const props = defineProps({</span></span>
<span class="line"><span>    affiltatedhub: {</span></span>
<span class="line"><span>        type: Array,</span></span>
<span class="line"><span>        default: () =&gt; {</span></span>
<span class="line"><span>            return []</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;style scoped&gt;</span></span>
<span class="line"><span>&lt;/style&gt;</span></span></code></pre></div><h3 id="子组件-父组件传值" tabindex="-1">子组件---&gt;父组件传值 <a class="header-anchor" href="#子组件-父组件传值" aria-label="Permalink to &quot;子组件---&gt;父组件传值&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>    &lt;!-- 子组件 --&gt;</span></span>
<span class="line"><span>    &lt;div class=&quot;tree-wrap&quot;&gt;</span></span>
<span class="line"><span>        &lt;a-tree @select=&quot;onSelect&quot;&gt;</span></span>
<span class="line"><span>            &lt;template #title=&quot;{ title }&quot;&gt;</span></span>
<span class="line"><span>                &lt;span&gt;{{ title }}&lt;/span&gt;</span></span>
<span class="line"><span>            &lt;/template&gt;</span></span>
<span class="line"><span>        &lt;/a-tree&gt;</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script lang=&quot;ts&quot; setup&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// TODO</span></span>
<span class="line"><span>// 选择某个节点</span></span>
<span class="line"><span>const emits = defineEmits([&#39;handleNodeClick&#39;, &#39;handleSelectedKeys&#39;])</span></span>
<span class="line"><span>const onSelect = (selectedKeys, currentNode) =&gt; {</span></span>
<span class="line"><span>    emits(&#39;handleNodeClick&#39;, currentNode.node.dataRef)</span></span>
<span class="line"><span>    emits(&#39;handleSelectedKeys&#39;, selectedKeys[0])</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&lt;/script&gt;</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>    &lt;!-- 父组件 --&gt;</span></span>
<span class="line"><span>    &lt;div class=&quot;overviewHome&quot;&gt;</span></span>
<span class="line"><span>        &lt;Tree @handleNodeClick=&quot;handleNodeClick&quot; @handleSelectedKeys=&quot;handleSelectedKeys&quot; /&gt;</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script lang=&quot;ts&quot; setup&gt;</span></span>
<span class="line"><span>import { ref } from &#39;vue&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import Tree from &#39;./tree/tree.vue&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// TODO</span></span>
<span class="line"><span>// 树节点</span></span>
<span class="line"><span>const selectedKeys = ref(&#39;&#39;)</span></span>
<span class="line"><span>const handleSelectedKeys = (data) =&gt; {</span></span>
<span class="line"><span>    selectedKeys.value = data</span></span>
<span class="line"><span>    console.log(&quot;selectedKeys.value &quot;, selectedKeys.value)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const handleNodeClick = (data) =&gt; {</span></span>
<span class="line"><span>    console.log(&#39;data&#39;, data)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&lt;/script&gt;</span></span></code></pre></div><h2 id="vue2中组件通信" tabindex="-1">vue2中组件通信 <a class="header-anchor" href="#vue2中组件通信" aria-label="Permalink to &quot;vue2中组件通信&quot;">​</a></h2><h3 id="父组件-子组件传值-1" tabindex="-1">父组件---&gt;子组件传值 <a class="header-anchor" href="#父组件-子组件传值-1" aria-label="Permalink to &quot;父组件---&gt;子组件传值&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>    &lt;!-- 父组件 --&gt;</span></span>
<span class="line"><span>    &lt;div&gt;</span></span>
<span class="line"><span>        &lt;MarkDown :content=&quot;&#39;232323&#39;&quot; :id=&quot;&#39;preview-only&#39;&quot; /&gt;</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>    &lt;!-- 子组件 --&gt;</span></span>
<span class="line"><span>    &lt;div&gt;</span></span>
<span class="line"><span>        &lt;MdPreview :editorId=&quot;id&quot; :modelValue=&quot;content&quot; /&gt;</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script&gt;</span></span>
<span class="line"><span>import { MdPreview } from &#39;md-editor-v3&#39;</span></span>
<span class="line"><span>import &#39;md-editor-v3/lib/preview.css&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export default {</span></span>
<span class="line"><span>    components: {</span></span>
<span class="line"><span>        MdPreview,</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    props: {</span></span>
<span class="line"><span>        content: {</span></span>
<span class="line"><span>            type: String,</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        id: {</span></span>
<span class="line"><span>            type: String,</span></span>
<span class="line"><span>            dafault: &#39;preview-only&#39;,</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    setup(props) {</span></span>
<span class="line"><span>        return {}</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&lt;/script&gt;</span></span></code></pre></div><h3 id="子组件-父组件传值-1" tabindex="-1">子组件---&gt;父组件传值 <a class="header-anchor" href="#子组件-父组件传值-1" aria-label="Permalink to &quot;子组件---&gt;父组件传值&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>    &lt;!-- 子组件 --&gt;</span></span>
<span class="line"><span>    &lt;div&gt;</span></span>
<span class="line"><span>        &lt;div class=&quot;carousel-wrap&quot;&gt;</span></span>
<span class="line"><span>            &lt;el-carousel arrow=&quot;always&quot; :autoplay=&quot;false&quot;&gt;</span></span>
<span class="line"><span>                &lt;el-carousel-item v-for=&quot;item in list&quot; :key=&quot;item.id&quot;&gt;</span></span>
<span class="line"><span>                    &lt;div class=&quot;carousel&quot;&gt;</span></span>
<span class="line"><span>                        &lt;div v-for=&quot;(itemTwo, index) of item.childrenList&quot; :key=&quot;index&quot; class=&quot;item&quot; @click=&quot;switchPage(itemTwo)&quot;&gt;{{ itemTwo.name }}&lt;/div&gt;</span></span>
<span class="line"><span>                    &lt;/div&gt;</span></span>
<span class="line"><span>                &lt;/el-carousel-item&gt;</span></span>
<span class="line"><span>            &lt;/el-carousel&gt;</span></span>
<span class="line"><span>        &lt;/div&gt;</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script&gt;</span></span>
<span class="line"><span>import { defineComponent } from &#39;vue&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export default defineComponent({</span></span>
<span class="line"><span>    props: {</span></span>
<span class="line"><span>        list: {</span></span>
<span class="line"><span>            type: Array,</span></span>
<span class="line"><span>            default: () =&gt; {</span></span>
<span class="line"><span>                return []</span></span>
<span class="line"><span>            },</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // setup(props, context) {</span></span>
<span class="line"><span>    setup(props, { emit }) {</span></span>
<span class="line"><span>        const switchPage = (item) =&gt; {</span></span>
<span class="line"><span>            emit(&#39;switchPage&#39;, item)</span></span>
<span class="line"><span>            // context.emit(&#39;switchPage&#39;, item)</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        return {</span></span>
<span class="line"><span>            switchPage,</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span>&lt;/script&gt;</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>    &lt;!-- 父组件 --&gt;</span></span>
<span class="line"><span>    &lt;div&gt;</span></span>
<span class="line"><span>        &lt;Carousel @switchPage=&quot;switchPage&quot; /&gt;</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script&gt;</span></span>
<span class="line"><span>import { defineComponent } from &#39;@vue/composition-api&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export default defineComponent({</span></span>
<span class="line"><span>    setup() {</span></span>
<span class="line"><span>        const switchPage = (data) =&gt; {</span></span>
<span class="line"><span>            console.log(&#39;data&#39;, data)</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>        return {</span></span>
<span class="line"><span>            switchPage,</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span>&lt;/script&gt;</span></span></code></pre></div>`,14),t=[e];function i(c,o,d,r,u,g){return a(),n("div",null,t)}const m=s(l,[["render",i]]);export{v as __pageData,m as default};
