import{_ as s,c as n,o as a,U as p}from"./chunks/framework.FpOEJISx.js";const u=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"public/static/_file/md/demo/iframePdf/iframePdf.md","filePath":"public/static/_file/md/demo/iframePdf/iframePdf.md"}'),l={name:"public/static/_file/md/demo/iframePdf/iframePdf.md"},e=p(`<div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>    &lt;iframe v-bind=&quot;iframeBind&quot; class=&quot;iframe&quot; /&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script&gt;</span></span>
<span class="line"><span>export default {</span></span>
<span class="line"><span>    props: {</span></span>
<span class="line"><span>        url: {</span></span>
<span class="line"><span>            type: String,</span></span>
<span class="line"><span>            default: &#39;&#39;,</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    data() {</span></span>
<span class="line"><span>        return {</span></span>
<span class="line"><span>            pageNumber: 0,</span></span>
<span class="line"><span>            src: undefined,</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    computed: {</span></span>
<span class="line"><span>        iframeBind() {</span></span>
<span class="line"><span>            return {</span></span>
<span class="line"><span>                // src: window.location.origin + this.url + &#39;#toolbar=0&#39;,</span></span>
<span class="line"><span>                src: &#39;https://juejin.cn/&#39;,</span></span>
<span class="line"><span>                frameborder: 0,</span></span>
<span class="line"><span>                scrolling: &#39;auto&#39;,</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;style scoped&gt;</span></span>
<span class="line"><span>.iframe {</span></span>
<span class="line"><span>    float: left;</span></span>
<span class="line"><span>    width: calc(100% - 20px);</span></span>
<span class="line"><span>    /* height: 100%; */</span></span>
<span class="line"><span>    height: calc(100vh - 156px);</span></span>
<span class="line"><span>    margin: 10px;</span></span>
<span class="line"><span>    padding: 10px;</span></span>
<span class="line"><span>    border: 1px solid #dcdee2;</span></span>
<span class="line"><span>    background-color: white;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&lt;/style&gt;</span></span></code></pre></div>`,1),i=[e];function c(t,r,o,d,f,m){return a(),n("div",null,i)}const g=s(l,[["render",c]]);export{u as __pageData,g as default};
