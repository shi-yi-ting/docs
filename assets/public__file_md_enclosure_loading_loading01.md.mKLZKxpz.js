import{_ as s,c as n,o as a,U as p}from"./chunks/framework.zpeVKxWT.js";const h=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"public/_file/md/enclosure/loading/loading01.md","filePath":"public/_file/md/enclosure/loading/loading01.md"}'),l={name:"public/_file/md/enclosure/loading/loading01.md"},e=p(`<div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>    &lt;div v-if=&quot;show&quot;&gt;</span></span>
<span class="line"><span>        &lt;slot /&gt;</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span>    &lt;div v-else-if=&quot;showTip&quot; style=&quot;text-align: center;&quot;&gt;正在加载, 请稍候...&lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script&gt;</span></span>
<span class="line"><span>export default {</span></span>
<span class="line"><span>    props: {</span></span>
<span class="line"><span>        time: {</span></span>
<span class="line"><span>            type: Number,</span></span>
<span class="line"><span>            default: 100,</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>        showTip: {</span></span>
<span class="line"><span>            type: Boolean,</span></span>
<span class="line"><span>            default: false,</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    data() {</span></span>
<span class="line"><span>        return {</span></span>
<span class="line"><span>            show: false,</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    created() {</span></span>
<span class="line"><span>        this.$nextTick(() =&gt; {</span></span>
<span class="line"><span>            setTimeout(() =&gt; {</span></span>
<span class="line"><span>                this.show = true</span></span>
<span class="line"><span>            }, this.time)</span></span>
<span class="line"><span>        })</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;style scoped&gt;</span></span>
<span class="line"><span>&lt;/style&gt;</span></span></code></pre></div>`,1),t=[e];function i(c,o,d,r,_,u){return a(),n("div",null,t)}const m=s(l,[["render",i]]);export{h as __pageData,m as default};
