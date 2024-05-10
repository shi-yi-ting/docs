import{_ as s,c as n,o as a,U as p}from"./chunks/framework.FpOEJISx.js";const m=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"public/static/_file/md/enclosure/tag/tag.md","filePath":"public/static/_file/md/enclosure/tag/tag.md"}'),l={name:"public/static/_file/md/enclosure/tag/tag.md"},e=p(`<h2 id="使用" tabindex="-1">使用 <a class="header-anchor" href="#使用" aria-label="Permalink to &quot;使用&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>    &lt;div&gt;</span></span>
<span class="line"><span>        &lt;Tag :tagImg=&quot;tag.tagImg&quot;&gt;</span></span>
<span class="line"><span>            &lt;span&gt;标题&lt;/span&gt;</span></span>
<span class="line"><span>        &lt;/Tag&gt;</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script&gt;</span></span>
<span class="line"><span>import { defineComponent, reactive } from &#39;vue&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import Tag from &#39;./vue/tag.vue&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export default defineComponent({</span></span>
<span class="line"><span>    components: {</span></span>
<span class="line"><span>        Tag,</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    setup() {</span></span>
<span class="line"><span>        const tag = reactive({</span></span>
<span class="line"><span>            // tagImg: require(&#39;@/assets/images/help.png&#39;),</span></span>
<span class="line"><span>            tagImg: new URL(&#39;./img/help.png&#39;, import.meta.url).href,</span></span>
<span class="line"><span>        })</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>        return {</span></span>
<span class="line"><span>            tag,</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span>&lt;/script&gt;</span></span></code></pre></div><h2 id="tag组件封装代码" tabindex="-1">tag组件封装代码 <a class="header-anchor" href="#tag组件封装代码" aria-label="Permalink to &quot;tag组件封装代码&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>    &lt;span class=&quot;tag&quot;&gt;</span></span>
<span class="line"><span>        &lt;span :style=&quot;contentStyle&quot; class=&quot;content&quot;&gt;</span></span>
<span class="line"><span>            &lt;slot /&gt;</span></span>
<span class="line"><span>            &lt;i :style=&quot;imgStyle&quot; class=&quot;img&quot; /&gt;</span></span>
<span class="line"><span>        &lt;/span&gt;</span></span>
<span class="line"><span>    &lt;/span&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script&gt;</span></span>
<span class="line"><span>export default {</span></span>
<span class="line"><span>    name: &#39;Tag&#39;,</span></span>
<span class="line"><span>    props: {</span></span>
<span class="line"><span>        fontColor: {</span></span>
<span class="line"><span>            type: String,</span></span>
<span class="line"><span>            default: &#39;#666666&#39;,</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>        bgColor: {</span></span>
<span class="line"><span>            type: String,</span></span>
<span class="line"><span>            default: undefined,</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>        borderColor: {</span></span>
<span class="line"><span>            type: String,</span></span>
<span class="line"><span>            default: undefined,</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>        tagImg: {</span></span>
<span class="line"><span>            type: String,</span></span>
<span class="line"><span>            default: undefined,</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    computed: {</span></span>
<span class="line"><span>        contentStyle() {</span></span>
<span class="line"><span>            let style = {}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            style.color = this.fontColor</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            if (this.bgColor) {</span></span>
<span class="line"><span>                style.backgroundColor = this.bgColor</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            style.lineHeight = &#39;22px&#39;</span></span>
<span class="line"><span>            if (this.borderColor) {</span></span>
<span class="line"><span>                style.border = \`1px solid \${this.borderColor}\`</span></span>
<span class="line"><span>                style.borderRight = &#39;0&#39;</span></span>
<span class="line"><span>                style.lineHeight = &#39;20px&#39;</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            return style</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>        imgStyle() {</span></span>
<span class="line"><span>            let style = {}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            if (this.tagImg) {</span></span>
<span class="line"><span>                style.backgroundImage = \`url(\${this.tagImg})\`</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            if (this.borderColor) {</span></span>
<span class="line"><span>                style.top = &#39;-1px&#39;</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            return style</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;style scoped&gt;</span></span>
<span class="line"><span>.tag {</span></span>
<span class="line"><span>    display: inline-block;</span></span>
<span class="line"><span>    height: 22px;</span></span>
<span class="line"><span>    line-height: 0;</span></span>
<span class="line"><span>    vertical-align: middle;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>.tag .content {</span></span>
<span class="line"><span>    display: inline-block;</span></span>
<span class="line"><span>    position: relative;</span></span>
<span class="line"><span>    height: 22px;</span></span>
<span class="line"><span>    padding: 0 2px 0 10px;</span></span>
<span class="line"><span>    margin-right: 20px;</span></span>
<span class="line"><span>    font-size: 13px;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>.tag .content .img {</span></span>
<span class="line"><span>    position: absolute;</span></span>
<span class="line"><span>    right: -20px;</span></span>
<span class="line"><span>    width: 20px;</span></span>
<span class="line"><span>    height: 22px;</span></span>
<span class="line"><span>    background-repeat: no-repeat;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&lt;/style&gt;</span></span></code></pre></div>`,4),t=[e];function i(c,o,g,r,d,u){return a(),n("div",null,t)}const f=s(l,[["render",i]]);export{m as __pageData,f as default};
