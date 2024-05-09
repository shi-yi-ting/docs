import{_ as s,c as n,o as a,U as p}from"./chunks/framework.zpeVKxWT.js";const g=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"public/_file/md/enclosure/check/checkGroup.md","filePath":"public/_file/md/enclosure/check/checkGroup.md"}'),l={name:"public/_file/md/enclosure/check/checkGroup.md"},e=p(`<h2 id="使用" tabindex="-1">使用 <a class="header-anchor" href="#使用" aria-label="Permalink to &quot;使用&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;div class=&quot;options&quot;&gt;</span></span>
<span class="line"><span>    &lt;CheckGroup v-model=&quot;check.checkList&quot; style=&quot; min-width: 100%;&quot;&gt;</span></span>
<span class="line"><span>        &lt;CheckBox v-for=&quot;(option) in check.options&quot; :key=&quot;option.value&quot; :value=&quot;option.value&quot; :lineHeight=&quot;20&quot; class=&quot;option&quot;&gt;</span></span>
<span class="line"><span>            &lt;span&gt;{{ option.label }}&lt;/span&gt;</span></span>
<span class="line"><span>        &lt;/CheckBox&gt;</span></span>
<span class="line"><span>    &lt;/CheckGroup&gt;</span></span>
<span class="line"><span>&lt;/div&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script setup&gt;</span></span>
<span class="line"><span>import { reactive } from &#39;vue&#39;</span></span>
<span class="line"><span>import CheckGroup from &#39;@/views/enclosure/check/checkGroup.vue&#39;</span></span>
<span class="line"><span>import CheckBox from &#39;@/views/enclosure/check/checkBox.vue&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// TODO</span></span>
<span class="line"><span>const check = reactive({</span></span>
<span class="line"><span>    options: [</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>            label: &#39;选项01&#39;,</span></span>
<span class="line"><span>            value: &#39;1&#39;,</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>            label: &#39;选项02&#39;,</span></span>
<span class="line"><span>            value: &#39;2&#39;,</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>            label: &#39;选项03&#39;,</span></span>
<span class="line"><span>            value: &#39;3&#39;,</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>    ],</span></span>
<span class="line"><span>    checkList: [],</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;style lang=&quot;less&quot; scoped&gt;</span></span>
<span class="line"><span>/* options */</span></span>
<span class="line"><span>.options {</span></span>
<span class="line"><span>    border: 1px solid #0097dd;</span></span>
<span class="line"><span>    background-color: white;</span></span>
<span class="line"><span>    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.175);</span></span>
<span class="line"><span>    z-index: 999;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    .option {</span></span>
<span class="line"><span>        display: block;</span></span>
<span class="line"><span>        border-width: 6px 10px 6px 10px;</span></span>
<span class="line"><span>        border-style: solid;</span></span>
<span class="line"><span>        white-space: nowrap;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    .option:nth-child(2n) {</span></span>
<span class="line"><span>        border-color: white;</span></span>
<span class="line"><span>        background-color: white;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    .option:nth-child(2n + 1) {</span></span>
<span class="line"><span>        border-color: #f5f9fc;</span></span>
<span class="line"><span>        background-color: #f5f9fc;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&lt;/style&gt;</span></span></code></pre></div><h2 id="checkgroup" tabindex="-1">checkGroup <a class="header-anchor" href="#checkgroup" aria-label="Permalink to &quot;checkGroup&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>    &lt;span class=&quot;checkGroup&quot;&gt;</span></span>
<span class="line"><span>        &lt;check2 v-if=&quot;button&quot; v-show=&quot;showButtonAll&quot; v-model:value=&quot;allCheck&quot; button :height=&quot;height&quot; @input=&quot;clickAll&quot;&gt;{{ 全选 }}&lt;/check2&gt;</span></span>
<span class="line"><span>        &lt;!-- &lt;check2 v-if=&quot;button&quot; v-show=&quot;showButtonAll&quot; :value=&quot;allCheck&quot; button :height=&quot;height&quot; @input=&quot;clickAll&quot;&gt;{{ 全选 }}&lt;/check2&gt; --&gt;</span></span>
<span class="line"><span>        &lt;slot /&gt;</span></span>
<span class="line"><span>    &lt;/span&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script&gt;</span></span>
<span class="line"><span>import check2 from &#39;./check2.vue&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import util from &#39;./_js/util.js&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export default {</span></span>
<span class="line"><span>    name: &#39;CheckGroup&#39;,</span></span>
<span class="line"><span>    components: {</span></span>
<span class="line"><span>        check2,</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    props: {</span></span>
<span class="line"><span>        value: {</span></span>
<span class="line"><span>            type: Array,</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>        button: {</span></span>
<span class="line"><span>            type: Boolean,</span></span>
<span class="line"><span>            default: false,</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>        showButtonAll: {</span></span>
<span class="line"><span>            type: Boolean,</span></span>
<span class="line"><span>            default: true,</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>        height: {</span></span>
<span class="line"><span>            type: Number,</span></span>
<span class="line"><span>            default: 32,</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    data() {</span></span>
<span class="line"><span>        return {</span></span>
<span class="line"><span>            checkIndexList: [],</span></span>
<span class="line"><span>            allCheck: false,</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    watch: {</span></span>
<span class="line"><span>        value: {</span></span>
<span class="line"><span>            immediate: true,</span></span>
<span class="line"><span>            handler() {</span></span>
<span class="line"><span>                this.$nextTick(() =&gt; {</span></span>
<span class="line"><span>                    this.setCheckBoxStatus()</span></span>
<span class="line"><span>                })</span></span>
<span class="line"><span>            },</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    methods: {</span></span>
<span class="line"><span>        setCheckBoxStatus() {</span></span>
<span class="line"><span>            this.checkIndexList = []</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            for (let i = 0; i &lt; this.$children.length; i++) {</span></span>
<span class="line"><span>                let children = this.$children[i]</span></span>
<span class="line"><span>                if (this.button &amp;&amp; i === 0) {</span></span>
<span class="line"><span>                    this.checkIndexList.push(undefined)</span></span>
<span class="line"><span>                    continue</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>                children.index = i</span></span>
<span class="line"><span>                children.button = this.button</span></span>
<span class="line"><span>                children.height = this.height</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                if (this.value.includes(children.value)) {</span></span>
<span class="line"><span>                    children.isCheck = true</span></span>
<span class="line"><span>                    this.checkIndexList.push(children.value)</span></span>
<span class="line"><span>                } else {</span></span>
<span class="line"><span>                    children.isCheck = false</span></span>
<span class="line"><span>                    this.checkIndexList.push(undefined)</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            this.checkUpdate()</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>        someClick(index, isCheck, value) {</span></span>
<span class="line"><span>            this.checkIndexList.splice(index, 1, isCheck ? value : undefined)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            this.checkUpdate()</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>        getCheckValueList() {</span></span>
<span class="line"><span>            let checkValueList = []</span></span>
<span class="line"><span>            for (let value of this.checkIndexList) {</span></span>
<span class="line"><span>                if (value !== undefined) {</span></span>
<span class="line"><span>                    checkValueList.push(value)</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>            return checkValueList</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>        checkUpdate() {</span></span>
<span class="line"><span>            let checkValueList = this.getCheckValueList()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            if (!util.equalArray(this.value, checkValueList)) {</span></span>
<span class="line"><span>                this.$emit(&#39;input&#39;, checkValueList)</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            if (this.button) {</span></span>
<span class="line"><span>                if (checkValueList.length === (this.$children.length - 1)) {</span></span>
<span class="line"><span>                    this.allCheck = true</span></span>
<span class="line"><span>                } else {</span></span>
<span class="line"><span>                    this.allCheck = false</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>        clickAll() {</span></span>
<span class="line"><span>            this.checkIndexList = []</span></span>
<span class="line"><span>            if (this.allCheck === false) {</span></span>
<span class="line"><span>                for (let i = 1; i &lt; this.$children.length; i++) {</span></span>
<span class="line"><span>                    this.checkIndexList.push(this.$children[i].value)</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>            this.checkUpdate()</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    mounted() {</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;style scoped&gt;</span></span>
<span class="line"><span>.checkGroup {</span></span>
<span class="line"><span>    display: inline-block;</span></span>
<span class="line"><span>    vertical-align: middle;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&lt;/style&gt;</span></span></code></pre></div><h2 id="checkbox" tabindex="-1">checkBox <a class="header-anchor" href="#checkbox" aria-label="Permalink to &quot;checkBox&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>    &lt;check2 v-model:value=&quot;isCheck&quot; :button=&quot;button&quot; :left=&quot;left&quot; :right=&quot;right&quot; :height=&quot;height&quot; :lineHeight=&quot;lineHeight&quot;&gt;</span></span>
<span class="line"><span>        &lt;slot /&gt;</span></span>
<span class="line"><span>    &lt;/check2&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script&gt;</span></span>
<span class="line"><span>import check2 from &#39;./check2.vue&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export default {</span></span>
<span class="line"><span>    name: &#39;CheckBox&#39;,</span></span>
<span class="line"><span>    components: {</span></span>
<span class="line"><span>        check2,</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    props: {</span></span>
<span class="line"><span>        value: {</span></span>
<span class="line"><span>            type: [String, Number, Boolean],</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>        left: {</span></span>
<span class="line"><span>            type: Boolean,</span></span>
<span class="line"><span>            default: true,</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>        right: {</span></span>
<span class="line"><span>            type: Boolean,</span></span>
<span class="line"><span>            default: false,</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>        lineHeight: {</span></span>
<span class="line"><span>            type: Number,</span></span>
<span class="line"><span>            default: undefined,</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    data() {</span></span>
<span class="line"><span>        return {</span></span>
<span class="line"><span>            button: false,</span></span>
<span class="line"><span>            height: 32,</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            index: undefined,</span></span>
<span class="line"><span>            isCheck: false,</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    watch: {</span></span>
<span class="line"><span>        isCheck() {</span></span>
<span class="line"><span>            this.$parent.someClick(this.index, this.isCheck, this.value)</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;style scoped&gt;</span></span>
<span class="line"><span>&lt;/style&gt;</span></span></code></pre></div><h2 id="checkgroup封装中使用到-utils" tabindex="-1">CheckGroup封装中使用到 utils <a class="header-anchor" href="#checkgroup封装中使用到-utils" aria-label="Permalink to &quot;CheckGroup封装中使用到 utils&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>/* elint no-shadow: &#39;off&#39; */</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import is from &#39;is_js&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>let util = {</span></span>
<span class="line"><span>    equalArray(a, b) {</span></span>
<span class="line"><span>        if (is.not.array(a) || is.not.array(b)) {</span></span>
<span class="line"><span>            return false</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        if (a.length !== b.length) {</span></span>
<span class="line"><span>            return false</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        for (let i = 0; i &lt; a.length; i++) {</span></span>
<span class="line"><span>            if (a[i] !== b[i]) {</span></span>
<span class="line"><span>                return false</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        return true</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export default util</span></span></code></pre></div>`,8),i=[e];function c(t,o,h,u,r,d){return a(),n("div",null,i)}const f=s(l,[["render",c]]);export{g as __pageData,f as default};
