import{_ as s,c as n,o as a,U as p}from"./chunks/framework.zpeVKxWT.js";const g=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"public/_file/md/enclosure/check/check.md","filePath":"public/_file/md/enclosure/check/check.md"}'),l={name:"public/_file/md/enclosure/check/check.md"},e=p(`<h2 id="使用" tabindex="-1">使用 <a class="header-anchor" href="#使用" aria-label="Permalink to &quot;使用&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;Check :select=&quot;value&quot; @change=&quot;(flag) =&gt; { value = flag }&quot;&gt;</span></span>
<span class="line"><span>    &lt;span class=&quot;fw_normal&quot;&gt;单选&lt;/span&gt;</span></span>
<span class="line"><span>&lt;/Check&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script setup&gt;</span></span>
<span class="line"><span>import { ref } from &#39;vue&#39;</span></span>
<span class="line"><span>import Check from &#39;@/views/enclosure/check/check.vue&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// TODO</span></span>
<span class="line"><span>const value = ref(true)</span></span>
<span class="line"><span>&lt;/script&gt;</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>    &lt;span v-if=&quot;hasSlot&quot; class=&quot;checkboc-wp&quot; :class=&quot;{ disabled }&quot; @click=&quot;change&quot;&gt;</span></span>
<span class="line"><span>        &lt;slot v-if=&quot;!isLeft&quot; name=&quot;default&quot; /&gt;</span></span>
<span class="line"><span>        &lt;span class=&quot;checkbox&quot; :class=&quot;{ select: select, half: select &amp;&amp; half, disabled }&quot; :style=&quot;{ margin: isLeft ? &#39;9px 6px 9px 0&#39; : &#39;9px 0 9px 6px&#39; }&quot; /&gt;</span></span>
<span class="line"><span>        &lt;slot v-if=&quot;isLeft&quot; name=&quot;default&quot; /&gt;</span></span>
<span class="line"><span>    &lt;/span&gt;</span></span>
<span class="line"><span>    &lt;span v-else class=&quot;checkbox&quot; :class=&quot;{ select: select, half: select &amp;&amp; half, disabled }&quot; @click=&quot;change&quot; /&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script&gt;</span></span>
<span class="line"><span>import { computed, defineComponent } from &#39;vue&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export default defineComponent({</span></span>
<span class="line"><span>    name: &#39;Check&#39;,</span></span>
<span class="line"><span>    components: {</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    // vue 组件中的 model: 允许自定义组件在使用 v-model 时定制 prop 和 event</span></span>
<span class="line"><span>    model: {</span></span>
<span class="line"><span>        prop: &#39;select&#39;,</span></span>
<span class="line"><span>        event: &#39;change&#39;,</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    props: {</span></span>
<span class="line"><span>        select: {</span></span>
<span class="line"><span>            type: Boolean,</span></span>
<span class="line"><span>            default: false,</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>        half: {</span></span>
<span class="line"><span>            type: Boolean,</span></span>
<span class="line"><span>            default: false,</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>        disabled: {</span></span>
<span class="line"><span>            type: Boolean,</span></span>
<span class="line"><span>            default: false,</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>        space: {</span></span>
<span class="line"><span>            type: Number,</span></span>
<span class="line"><span>            default: 6,</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>        left: {</span></span>
<span class="line"><span>            type: Boolean,</span></span>
<span class="line"><span>            default: undefined,</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>        right: {</span></span>
<span class="line"><span>            type: Boolean,</span></span>
<span class="line"><span>            default: undefined,</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    setup(props, { slots, emit }) {</span></span>
<span class="line"><span>        return {</span></span>
<span class="line"><span>            hasSlot: !!slots.default,</span></span>
<span class="line"><span>            isLeft: computed(() =&gt; props.left === true || (props.left === undefined &amp;&amp; props.right !== true)),</span></span>
<span class="line"><span>            change: () =&gt; {</span></span>
<span class="line"><span>                if (props.disabled) {</span></span>
<span class="line"><span>                    console.log(1111)</span></span>
<span class="line"><span>                    return</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                console.log(&#39;传入check中的值&#39;, props.select)</span></span>
<span class="line"><span>                emit(&#39;change&#39;, !props.select)</span></span>
<span class="line"><span>                console.log(&#39;传入check中的值取反之后返回&#39;, !props.select)</span></span>
<span class="line"><span>            },</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;style scoped&gt;</span></span>
<span class="line"><span>.checkboc-wp {</span></span>
<span class="line"><span>    display: inline-block;</span></span>
<span class="line"><span>    vertical-align: top;</span></span>
<span class="line"><span>    height: 32px;</span></span>
<span class="line"><span>    line-height: 32px;</span></span>
<span class="line"><span>    cursor: default;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>.checkboc-wp:not(.disabled):hover {</span></span>
<span class="line"><span>    color: #108ee9;</span></span>
<span class="line"><span>    cursor: pointer;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>.checkbox {</span></span>
<span class="line"><span>    display: inline-block;</span></span>
<span class="line"><span>    vertical-align: top;</span></span>
<span class="line"><span>    user-select: none;</span></span>
<span class="line"><span>    position: relative;</span></span>
<span class="line"><span>    width: 14px;</span></span>
<span class="line"><span>    height: 14px;</span></span>
<span class="line"><span>    border-width: 1px;</span></span>
<span class="line"><span>    border-style: solid;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>.checkbox {</span></span>
<span class="line"><span>    border-color: #abbacc;</span></span>
<span class="line"><span>    background-color: #ffffff;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>.checkbox:not(.disabled):hover {</span></span>
<span class="line"><span>    border-color: #108ee9;</span></span>
<span class="line"><span>    cursor: pointer;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>.checkbox.select {</span></span>
<span class="line"><span>    border-color: #108ee9;</span></span>
<span class="line"><span>    background-color: #108ee9;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>.checkbox.select:after {</span></span>
<span class="line"><span>    content: &quot;&quot;;</span></span>
<span class="line"><span>    position: absolute;</span></span>
<span class="line"><span>    left: 2px;</span></span>
<span class="line"><span>    top: 2px;</span></span>
<span class="line"><span>    width: 8px;</span></span>
<span class="line"><span>    height: 5px;</span></span>
<span class="line"><span>    border: 2px solid #ffffff;</span></span>
<span class="line"><span>    border-top: 0;</span></span>
<span class="line"><span>    border-right: 0;</span></span>
<span class="line"><span>    transform: rotate(-45deg);</span></span>
<span class="line"><span>    transition: all 0.1s cubic-bezier(0.71, -0.46, 0.88, 0.6);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>.checkbox.select.half:after {</span></span>
<span class="line"><span>    border-left: 0;</span></span>
<span class="line"><span>    transform: rotate(0);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>.checkbox.disabled {</span></span>
<span class="line"><span>    border-color: #b1becf;</span></span>
<span class="line"><span>    background-color: #d7d7d7;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&lt;/style&gt;</span></span></code></pre></div>`,3),c=[e];function t(i,o,r,d,u,h){return a(),n("div",null,c)}const b=s(l,[["render",t]]);export{g as __pageData,b as default};
