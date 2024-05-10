import{_ as s,c as n,o as a,U as p}from"./chunks/framework.FpOEJISx.js";const h=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"public/static/_file/md/enclosure/tip/elTip.md","filePath":"public/static/_file/md/enclosure/tip/elTip.md"}'),l={name:"public/static/_file/md/enclosure/tip/elTip.md"},t=p(`<h2 id="使用" tabindex="-1">使用 <a class="header-anchor" href="#使用" aria-label="Permalink to &quot;使用&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>    &lt;div style=&quot;padding: 40px;&quot;&gt;</span></span>
<span class="line"><span>        &lt;div&gt;</span></span>
<span class="line"><span>            &lt;el-tooltip class=&quot;item&quot; effect=&quot;dark&quot; content=&quot;Top Center 提示文字&quot; placement=&quot;top&quot;&gt;</span></span>
<span class="line"><span>                &lt;el-button&gt;element中的提示组件: el-tooltip&lt;/el-button&gt;</span></span>
<span class="line"><span>            &lt;/el-tooltip&gt;</span></span>
<span class="line"><span>        &lt;/div&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        &lt;div style=&quot;margin-top: 10px;&quot;&gt;</span></span>
<span class="line"><span>            &lt;TooltipOver :content=&quot;&#39;没超过规定宽度时不展示tip&#39;&quot; :refName=&quot;refName&quot; className=&quot;valid_tooltip_width500&quot; :popperClass=&quot;&#39;tippy_width500&#39;&quot; isInline /&gt;</span></span>
<span class="line"><span>        &lt;/div&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        &lt;div style=&quot;margin-top: 10px;&quot;&gt;</span></span>
<span class="line"><span>            &lt;TooltipOver :content=&quot;&#39;基于el-tooltip封装的提示组件(超出设定的宽度之后鼠标悬浮才有提示)基于el-tooltip封装的提示组件(超出设定的宽度之后鼠标悬浮才有提示)&#39;&quot; :refName=&quot;refName&quot; className=&quot;valid_tooltip_width500&quot; :popperClass=&quot;&#39;tippy_width500&#39;&quot; isInline /&gt;</span></span>
<span class="line"><span>        &lt;/div&gt;</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script&gt;</span></span>
<span class="line"><span>import { defineComponent, ref } from &#39;vue&#39;</span></span>
<span class="line"><span>import { ElButton, ElTooltip } from &#39;element-plus&#39;</span></span>
<span class="line"><span>import TooltipOver from &#39;./vue/toolTipOver.vue&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export default defineComponent({</span></span>
<span class="line"><span>    components: {</span></span>
<span class="line"><span>        ElButton,</span></span>
<span class="line"><span>        ElTooltip,</span></span>
<span class="line"><span>        TooltipOver,</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    setup() {</span></span>
<span class="line"><span>        const refName = ref(&#39;toolTip&#39;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        return {</span></span>
<span class="line"><span>            refName,</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;style&gt;</span></span>
<span class="line"><span>/* 提示框 */</span></span>
<span class="line"><span>.valid_tooltip_width500 {</span></span>
<span class="line"><span>    max-width: 500px;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>.tippy_width500 {</span></span>
<span class="line"><span>    max-width: 500px;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&lt;/style&gt;</span></span></code></pre></div><h2 id="基于el-tooltip封装的组件tooltipover" tabindex="-1">基于el-tooltip封装的组件TooltipOver <a class="header-anchor" href="#基于el-tooltip封装的组件tooltipover" aria-label="Permalink to &quot;基于el-tooltip封装的组件TooltipOver&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>    &lt;span v-if=&quot;isInline&quot; id=&quot;tooltip_over&quot;&gt;</span></span>
<span class="line"><span>        &lt;el-tooltip class=&quot;item&quot; :effect=&quot;effect&quot; :disabled=&quot;isShowTooltip&quot; :content=&quot;content&quot; placement=&quot;top&quot; :popperClass=&quot;popperClass&quot;&gt;</span></span>
<span class="line"><span>            &lt;span class=&quot;text_overflow full_height&quot; :class=&quot;className&quot; :style=&quot;{ width: \`\${width}px\`, display: &#39;inline-block&#39; }&quot; @click=&quot;tooltipClick&quot; @mouseover=&quot;onMouseOver(refName)&quot;&gt;</span></span>
<span class="line"><span>                &lt;span :ref=&quot;refName&quot; class=&quot;text_overflow&quot;&gt;{{ content || &#39;&#39; }}&lt;/span&gt;</span></span>
<span class="line"><span>            &lt;/span&gt;</span></span>
<span class="line"><span>        &lt;/el-tooltip&gt;</span></span>
<span class="line"><span>    &lt;/span&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &lt;div v-else id=&quot;tooltip_over&quot;&gt;</span></span>
<span class="line"><span>        &lt;el-tooltip class=&quot;item&quot; :content=&quot;content&quot; :effect=&quot;effect&quot; :disabled=&quot;isShowTooltip&quot; :popperClass=&quot;popperClass&quot; placement=&quot;top&quot;&gt;</span></span>
<span class="line"><span>            &lt;p class=&quot;text_overflow full_height&quot; :class=&quot;className&quot; :style=&quot;{ width: \`\${width}px\` }&quot; @click=&quot;tooltipClick&quot; @mouseover=&quot;onMouseOver(refName)&quot;&gt;</span></span>
<span class="line"><span>                &lt;span :ref=&quot;refName&quot; class=&quot;text_overflow&quot;&gt;{{ content || &#39;&#39; }}&lt;/span&gt;</span></span>
<span class="line"><span>            &lt;/p&gt;</span></span>
<span class="line"><span>        &lt;/el-tooltip&gt;</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script&gt;</span></span>
<span class="line"><span>import { ElTooltip } from &#39;element-plus&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export default {</span></span>
<span class="line"><span>    name: &#39;TooltipOver&#39;,</span></span>
<span class="line"><span>    components: {</span></span>
<span class="line"><span>        ElTooltip</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    props: {</span></span>
<span class="line"><span>        // 显示的文字内容</span></span>
<span class="line"><span>        content: {</span></span>
<span class="line"><span>            type: String,</span></span>
<span class="line"><span>            default: &#39;&#39;,</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>        // 外层框的样式，在传入的这个类名中设置文字显示的宽度</span></span>
<span class="line"><span>        className: {</span></span>
<span class="line"><span>            type: String,</span></span>
<span class="line"><span>            default: &#39;&#39;,</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>        // 为页面文字标识（如在同一页面中调用多次组件，此参数不可重复）</span></span>
<span class="line"><span>        refName: {</span></span>
<span class="line"><span>            type: String,</span></span>
<span class="line"><span>            default: &#39;&#39;,</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        isInline: {</span></span>
<span class="line"><span>            type: Boolean,</span></span>
<span class="line"><span>            default: false,</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>        popperClass: { // 设置提示框的宽度</span></span>
<span class="line"><span>            type: String,</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>        width: {</span></span>
<span class="line"><span>            type: Number,</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>        effect: {</span></span>
<span class="line"><span>            type: String, // light, dark(默认)</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    data() {</span></span>
<span class="line"><span>        return {</span></span>
<span class="line"><span>            isShowTooltip: true,</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    methods: {</span></span>
<span class="line"><span>        onMouseOver(str) {</span></span>
<span class="line"><span>            // 这里不使用offsetWidth，四舍五入后不精确，会有临界值</span></span>
<span class="line"><span>            let aaa = this.$refs[str].parentNode</span></span>
<span class="line"><span>            const parentWidth = this.$refs[str].parentNode.getBoundingClientRect().width</span></span>
<span class="line"><span>            const contentWidth = this.$refs[str].getBoundingClientRect().width</span></span>
<span class="line"><span>            console.log(&#39;parentWidth&#39;, parentWidth)</span></span>
<span class="line"><span>            console.log(&#39;contentWidth&#39;, contentWidth)</span></span>
<span class="line"><span>            console.log(&#39;aaa&#39;, aaa)</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>            // 判断是否开启tooltip功能</span></span>
<span class="line"><span>            this.isShowTooltip = contentWidth &lt;= parentWidth</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>        tooltipClick() {</span></span>
<span class="line"><span>            this.$emit(&#39;tooltipClick&#39;)</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;style lang=&quot;less&quot; scoped&gt;</span></span>
<span class="line"><span>.text_overflow {</span></span>
<span class="line"><span>    width: 100%;</span></span>
<span class="line"><span>    white-space: nowrap;</span></span>
<span class="line"><span>    overflow: hidden;</span></span>
<span class="line"><span>    text-overflow: ellipsis;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>.full_height {</span></span>
<span class="line"><span>    height: 100%;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&lt;/style&gt;</span></span></code></pre></div>`,4),e=[t];function i(o,c,u,r,d,q){return a(),n("div",null,e)}const f=s(l,[["render",i]]);export{h as __pageData,f as default};
