import{_ as s,c as n,o as a,U as p}from"./chunks/framework.FpOEJISx.js";const f=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"public/static/_file/md/enclosure/securityCode.md","filePath":"public/static/_file/md/enclosure/securityCode.md"}'),l={name:"public/static/_file/md/enclosure/securityCode.md"},e=p(`<h2 id="使用" tabindex="-1">使用 <a class="header-anchor" href="#使用" aria-label="Permalink to &quot;使用&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>    &lt;div&gt;</span></span>
<span class="line"><span>        &lt;SecurityCode @connectRoom=&quot;connectRoom&quot; /&gt;</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script  setup&gt;</span></span>
<span class="line"><span>import { ref, reactive, computed, watch, onMounted, onUnmounted } from &#39;vue&#39;</span></span>
<span class="line"><span>import SecurityCode from &#39;@/views/enclosure/securityCode/securityCode.vue&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// TODO</span></span>
<span class="line"><span>const connectRoom = (code) =&gt; {</span></span>
<span class="line"><span>    console.log(&#39;输入的连接码&#39;, code)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&lt;/script&gt;</span></span></code></pre></div><h2 id="securitycode组件封装代码" tabindex="-1">securityCode组件封装代码 <a class="header-anchor" href="#securitycode组件封装代码" aria-label="Permalink to &quot;securityCode组件封装代码&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>    &lt;div class=&quot;confirm-warpper&quot;&gt;</span></span>
<span class="line"><span>        &lt;input ref=&quot;input&quot; v-model=&quot;code&quot; type=&quot;number&quot; @blur=&quot;lose&quot; /&gt;</span></span>
<span class="line"><span>        &lt;div class=&quot;box&quot; @click=&quot;focus&quot;&gt;</span></span>
<span class="line"><span>            &lt;div v-for=&quot;(item,index) in loopDiv&quot; :key=&quot;index&quot; class=&quot;item&quot; :class=&quot;{ active: current === index }&quot; :style=&quot;{ height: \`\${height}px\`, width: \`\${width}px\`, border: \`\${borderStyle}\` }&quot;&gt;</span></span>
<span class="line"><span>                {{ code[index] }}&lt;div&gt;</span></span>
<span class="line"><span>                &lt;/div&gt;</span></span>
<span class="line"><span>            &lt;/div&gt;</span></span>
<span class="line"><span>        &lt;/div&gt;</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script&gt;</span></span>
<span class="line"><span>export default {</span></span>
<span class="line"><span>    props: {</span></span>
<span class="line"><span>        size: {</span></span>
<span class="line"><span>            type: [String, Number],</span></span>
<span class="line"><span>            default: 6,</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>        height: {</span></span>
<span class="line"><span>            type: Number,</span></span>
<span class="line"><span>            default: 120,</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>        width: {</span></span>
<span class="line"><span>            type: Number,</span></span>
<span class="line"><span>            default: 80,</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>        isEmpty: { // 是否清空</span></span>
<span class="line"><span>            type: Boolean,</span></span>
<span class="line"><span>            default: false,</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>        isCodeError: { // 输入错误时框框展示红色</span></span>
<span class="line"><span>            type: Boolean,</span></span>
<span class="line"><span>            default: false,</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    data() {</span></span>
<span class="line"><span>        return {</span></span>
<span class="line"><span>            code: &#39;&#39;,</span></span>
<span class="line"><span>            current: 0,</span></span>
<span class="line"><span>            borderStyle: &#39;&#39;,</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    computed: {</span></span>
<span class="line"><span>        maxLength() {</span></span>
<span class="line"><span>            return typeof this.size === &#39;number&#39; ? this.size : Number(this.size)</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>        loopDiv() {</span></span>
<span class="line"><span>            return new Array(this.maxLength)</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    watch: {</span></span>
<span class="line"><span>        code() {</span></span>
<span class="line"><span>            this.code = this.code.toString().slice(0, this.maxLength)</span></span>
<span class="line"><span>            this.current = this.code.length</span></span>
<span class="line"><span>            this.$emit(&#39;input&#39;, this.code)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            if (this.code.length === 6) {</span></span>
<span class="line"><span>                this.$emit(&#39;connectRoom&#39;, this.code)</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        isEmpty() {</span></span>
<span class="line"><span>            if (this.isEmpty) {</span></span>
<span class="line"><span>                this.code = &#39;&#39;</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        isCodeError: {</span></span>
<span class="line"><span>            handler(newVal) {</span></span>
<span class="line"><span>                if (newVal) {</span></span>
<span class="line"><span>                    this.borderStyle = &#39;1px solid #f56c6c&#39;</span></span>
<span class="line"><span>                } else {</span></span>
<span class="line"><span>                    this.borderStyle = &#39;1px solid #d8dfe9&#39;</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>            },</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    methods: {</span></span>
<span class="line"><span>        focus() {</span></span>
<span class="line"><span>            this.$refs.input.focus()</span></span>
<span class="line"><span>            let len = this.code.length</span></span>
<span class="line"><span>            // 如果已经输满，点击则聚焦在最后一个字符</span></span>
<span class="line"><span>            if (len === this.maxLength) {</span></span>
<span class="line"><span>                this.current = this.code.length - 1</span></span>
<span class="line"><span>            } else {</span></span>
<span class="line"><span>                this.current = this.code.length</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>        // input失焦触发，等于-1防止出现size符合偶然情况，失焦后又聚焦某一div</span></span>
<span class="line"><span>        lose() {</span></span>
<span class="line"><span>            this.current = -1</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    mounted() {</span></span>
<span class="line"><span>        this.focus()</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span>&lt;style scoped&gt;</span></span>
<span class="line"><span>.confirm-warpper {</span></span>
<span class="line"><span>    /* position: relative;</span></span>
<span class="line"><span>    left: 50%;</span></span>
<span class="line"><span>    top: 50%;</span></span>
<span class="line"><span>    transform: translate(-50%, -50%); */</span></span>
<span class="line"><span>    display: flex;</span></span>
<span class="line"><span>    justify-content: center;</span></span>
<span class="line"><span>    align-items: center;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@keyframes cursor {</span></span>
<span class="line"><span>    0% {</span></span>
<span class="line"><span>        opacity: 0;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    50% {</span></span>
<span class="line"><span>        opacity: 1;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    100% {</span></span>
<span class="line"><span>        opacity: 0;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>input {</span></span>
<span class="line"><span>    position: absolute;</span></span>
<span class="line"><span>    transform: scale(0);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>.box {</span></span>
<span class="line"><span>    display: flex;</span></span>
<span class="line"><span>    justify-content: space-between;</span></span>
<span class="line"><span>    cursor: text;</span></span>
<span class="line"><span>    /* 此处可以动态化 */</span></span>
<span class="line"><span>    width: 600px;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>.item {</span></span>
<span class="line"><span>    display: flex;</span></span>
<span class="line"><span>    justify-content: center;</span></span>
<span class="line"><span>    align-items: center;</span></span>
<span class="line"><span>    /* border: 1px solid hsla(0, 0%, 100%, 0.08); */</span></span>
<span class="line"><span>    border: 1px solid #d8dfe9;</span></span>
<span class="line"><span>    /* border-radius: 10px; */</span></span>
<span class="line"><span>    background: rgba(255, 255, 255, 0.8);</span></span>
<span class="line"><span>    color: #3e424d;</span></span>
<span class="line"><span>    font-size: 100px;</span></span>
<span class="line"><span>    position: relative;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>.item:hover {</span></span>
<span class="line"><span>    border: 1px solid #418ef7;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>.item.active {</span></span>
<span class="line"><span>    border: 1px solid #418ef7;</span></span>
<span class="line"><span>    box-shadow: inset 0 2px 12px rgba(65, 142, 247, 0.3);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>.item.active::before {</span></span>
<span class="line"><span>    content: &quot;&quot;;</span></span>
<span class="line"><span>    position: absolute;</span></span>
<span class="line"><span>    top: 50%;</span></span>
<span class="line"><span>    left: 70%;</span></span>
<span class="line"><span>    transform: translate(-50%, -50%);</span></span>
<span class="line"><span>    height: 40px;</span></span>
<span class="line"><span>    width: 2px;</span></span>
<span class="line"><span>    background: #3e424d;</span></span>
<span class="line"><span>    animation: cursor 1s infinite;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&lt;/style&gt;</span></span></code></pre></div>`,4),i=[e];function t(c,o,r,d,u,h){return a(),n("div",null,i)}const g=s(l,[["render",t]]);export{f as __pageData,g as default};
