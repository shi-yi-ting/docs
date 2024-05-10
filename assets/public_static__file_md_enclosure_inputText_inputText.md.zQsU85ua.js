import{_ as n,c as s,o as a,U as p}from"./chunks/framework.FpOEJISx.js";const x=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"public/static/_file/md/enclosure/inputText/inputText.md","filePath":"public/static/_file/md/enclosure/inputText/inputText.md"}'),l={name:"public/static/_file/md/enclosure/inputText/inputText.md"},e=p(`<h2 id="使用" tabindex="-1">使用 <a class="header-anchor" href="#使用" aria-label="Permalink to &quot;使用&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>    &lt;div class=&quot;common_container&quot;&gt;</span></span>
<span class="line"><span>        &lt;div class=&quot;mt10&quot;&gt;</span></span>
<span class="line"><span>            &lt;MarkDownBox :url=&quot;&#39;static/file/md/demo/antDesign/modal/modal.md&#39;&quot;&gt;</span></span>
<span class="line"><span>                &lt;div&gt;</span></span>
<span class="line"><span>                    &lt;div&gt;</span></span>
<span class="line"><span>                        &lt;span class=&quot;ft20 fw700 mr8&quot;&gt;输入框组件&lt;/span&gt;</span></span>
<span class="line"><span>                        &lt;p class=&quot;mt10&quot;&gt;</span></span>
<span class="line"><span>                            自封输入框组件，之所以要封装是因为UI组件库的输入框样式不满足开发要求;</span></span>
<span class="line"><span>                            组件通过vue.component进行注册之后,可直接使用</span></span>
<span class="line"><span>                        &lt;/p&gt;</span></span>
<span class="line"><span>                    &lt;/div&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                    &lt;div class=&quot;mt10&quot;&gt;</span></span>
<span class="line"><span>                        &lt;div&gt;</span></span>
<span class="line"><span>                            &lt;label class=&quot;item-label&quot;&gt;SR: &lt;/label&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                            &lt;!-- enterPromise,输入参数回车调接口 --&gt;</span></span>
<span class="line"><span>                            &lt;InputText v-model.trim=&quot;search.params&quot; :enterPromise=&quot;ajaxData&quot; placeholder=&quot;请输入&quot; class=&quot;inputText&quot; /&gt;</span></span>
<span class="line"><span>                        &lt;/div&gt;</span></span>
<span class="line"><span>                    &lt;/div&gt;</span></span>
<span class="line"><span>                &lt;/div&gt;</span></span>
<span class="line"><span>            &lt;/MarkDownBox&gt;</span></span>
<span class="line"><span>        &lt;/div&gt;</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script&gt;</span></span>
<span class="line"><span>import { defineComponent, reactive } from &#39;vue&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import InputText from &#39;./vue/inputText.vue&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export default defineComponent({</span></span>
<span class="line"><span>    components: {</span></span>
<span class="line"><span>        InputText,</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    setup() {</span></span>
<span class="line"><span>        const bol = reactive({</span></span>
<span class="line"><span>            isExpand01: false,</span></span>
<span class="line"><span>        })</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        const content = reactive({</span></span>
<span class="line"><span>            list01: [</span></span>
<span class="line"><span>                {</span></span>
<span class="line"><span>                    title: &#39;HTML&#39;,</span></span>
<span class="line"><span>                    code: \`</span></span>
<span class="line"><span>                        &lt;div&gt;</span></span>
<span class="line"><span>                            &lt;label class=&quot;item-label&quot;&gt;SR: &lt;/label&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                            &lt;!-- enterPromise,输入参数回车调接口 --&gt;</span></span>
<span class="line"><span>                            &lt;InputText v-model.trim=&quot;search.params&quot; :enterPromise=&quot;ajaxData&quot; placeholder=&quot;请输入&quot; class=&quot;inputText&quot; /&gt;</span></span>
<span class="line"><span>                        &lt;/div&gt;</span></span>
<span class="line"><span>                    \`,</span></span>
<span class="line"><span>                },</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                {</span></span>
<span class="line"><span>                    title: &#39;JS&#39;,</span></span>
<span class="line"><span>                    code: \`</span></span>
<span class="line"><span>                        const ajaxData = () =&gt; {</span></span>
<span class="line"><span>                            // 调接口获取数据</span></span>
<span class="line"><span>                            console.log(&#39;调接口获取数据&#39;)</span></span>
<span class="line"><span>                        }</span></span>
<span class="line"><span>                    \`,</span></span>
<span class="line"><span>                },</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                {</span></span>
<span class="line"><span>                    title: &#39;CSS&#39;,</span></span>
<span class="line"><span>                    code: \`</span></span>
<span class="line"><span>                        &lt;style scoped&gt;</span></span>
<span class="line"><span>                        .inputText {</span></span>
<span class="line"><span>                            width: 220px;</span></span>
<span class="line"><span>                            margin-right: 20px;</span></span>
<span class="line"><span>                        }</span></span>
<span class="line"><span>                        .item-label {</span></span>
<span class="line"><span>                            display: inline-block;</span></span>
<span class="line"><span>                            height: 32px;</span></span>
<span class="line"><span>                            padding-right: 16px;</span></span>
<span class="line"><span>                            padding-top: 9px;</span></span>
<span class="line"><span>                            padding-bottom: 9px;</span></span>
<span class="line"><span>                            font-size: 14px;</span></span>
<span class="line"><span>                            line-height: 14px;</span></span>
<span class="line"><span>                            color: #545454;</span></span>
<span class="line"><span>                            vertical-align: middle;</span></span>
<span class="line"><span>                        }</span></span>
<span class="line"><span>                        .required {</span></span>
<span class="line"><span>                            position: relative;</span></span>
<span class="line"><span>                        }</span></span>
<span class="line"><span>                        .required:before {</span></span>
<span class="line"><span>                            content: &quot;*&quot;;</span></span>
<span class="line"><span>                            display: inline-block;</span></span>
<span class="line"><span>                            width: 8px;</span></span>
<span class="line"><span>                            height: 14px;</span></span>
<span class="line"><span>                            margin-right: 3px;</span></span>
<span class="line"><span>                            color: red;</span></span>
<span class="line"><span>                            text-align: center;</span></span>
<span class="line"><span>                            font-weight: 700;</span></span>
<span class="line"><span>                        }</span></span>
<span class="line"><span>                        &lt;/style&gt;</span></span>
<span class="line"><span>                    \`,</span></span>
<span class="line"><span>                },</span></span>
<span class="line"><span>            ],</span></span>
<span class="line"><span>        })</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        const search = reactive({</span></span>
<span class="line"><span>            params: &#39;&#39;,</span></span>
<span class="line"><span>        })</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>        const ajaxData = () =&gt; {</span></span>
<span class="line"><span>            // 调接口获取数据</span></span>
<span class="line"><span>            console.log(&#39;调接口获取数据&#39;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            // product.list = productLlist || [] // 模拟数据,正式情况是没有的</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            // $this.$loading.show()</span></span>
<span class="line"><span>            // let resp = await axios({</span></span>
<span class="line"><span>            //     method: &#39;post&#39;,</span></span>
<span class="line"><span>            //     url: &#39;/commonBaseService/getCommonServiceData&#39;,</span></span>
<span class="line"><span>            //     data: {</span></span>
<span class="line"><span>            //         worker: &#39;productServiceImpl&#39;,</span></span>
<span class="line"><span>            //         workerType: &#39;queryProductList&#39;,</span></span>
<span class="line"><span>            //         json: {</span></span>
<span class="line"><span>            //             factoryId: q.factoryId,</span></span>
<span class="line"><span>            //             productName: product.searchKey,</span></span>
<span class="line"><span>            //         },</span></span>
<span class="line"><span>            //     },</span></span>
<span class="line"><span>            // })</span></span>
<span class="line"><span>            // $this.$loading.hide()</span></span>
<span class="line"><span>            // if (resp.data.dataFlag) {</span></span>
<span class="line"><span>            //     product.list = resp.data.rows || []</span></span>
<span class="line"><span>            // }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>        return {</span></span>
<span class="line"><span>            bol,</span></span>
<span class="line"><span>            content,</span></span>
<span class="line"><span>            search,</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            ajaxData,</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;style scoped&gt;</span></span>
<span class="line"><span>.inputText {</span></span>
<span class="line"><span>    width: 220px;</span></span>
<span class="line"><span>    margin-right: 20px;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>.item-label {</span></span>
<span class="line"><span>    display: inline-block;</span></span>
<span class="line"><span>    height: 32px;</span></span>
<span class="line"><span>    padding-right: 16px;</span></span>
<span class="line"><span>    padding-top: 9px;</span></span>
<span class="line"><span>    padding-bottom: 9px;</span></span>
<span class="line"><span>    font-size: 14px;</span></span>
<span class="line"><span>    line-height: 14px;</span></span>
<span class="line"><span>    color: #545454;</span></span>
<span class="line"><span>    vertical-align: middle;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>.required {</span></span>
<span class="line"><span>    position: relative;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>.required:before {</span></span>
<span class="line"><span>    content: &quot;*&quot;;</span></span>
<span class="line"><span>    display: inline-block;</span></span>
<span class="line"><span>    width: 8px;</span></span>
<span class="line"><span>    height: 14px;</span></span>
<span class="line"><span>    margin-right: 3px;</span></span>
<span class="line"><span>    color: red;</span></span>
<span class="line"><span>    text-align: center;</span></span>
<span class="line"><span>    font-weight: 700;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&lt;/style&gt;</span></span></code></pre></div><h2 id="inputtext组件封装代码" tabindex="-1">inputText组件封装代码 <a class="header-anchor" href="#inputtext组件封装代码" aria-label="Permalink to &quot;inputText组件封装代码&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>    &lt;span v-if=&quot;!textarea&quot; class=&quot;inputWp&quot; :style=&quot;{ height: \`\${heightSync}px\` }&quot;&gt;</span></span>
<span class="line"><span>        &lt;input ref=&quot;input&quot; :style=&quot;inputStyle&quot; :placeholder=&quot;placeholderText&quot; :disabled=&quot;disabled || forbid&quot; class=&quot;input&quot; :class=&quot;{ noBorder }&quot; @input=&quot;emitValue&quot; @blur=&quot;blurInput&quot; @keyup.enter=&quot;inputEnter&quot; @paste=&quot;pasteEmit&quot;&gt;</span></span>
<span class="line"><span>        &lt;div v-if=&quot;search || clear&quot; class=&quot;button-wp&quot;&gt;</span></span>
<span class="line"><span>            &lt;el-icon v-if=&quot;clear &amp;&amp; ![&#39;&#39;, NaN].includes(value)&quot; type=&quot;md-close&quot; :size=&quot;heightSync - 10&quot; @click=&quot;clearClick&quot; /&gt;</span></span>
<span class="line"><span>            &lt;el-icon v-if=&quot;search&quot; type=&quot;ios-search&quot; :size=&quot;heightSync - 10&quot; @click=&quot;inputEnter&quot; /&gt;</span></span>
<span class="line"><span>        &lt;/div&gt;</span></span>
<span class="line"><span>    &lt;/span&gt;</span></span>
<span class="line"><span>    &lt;textarea v-else ref=&quot;input&quot; :placeholder=&quot;placeholderText&quot; :disabled=&quot;disabled || forbid&quot; :style=&quot;inputStyle&quot; class=&quot;textarea&quot; :class=&quot;{ noBorder }&quot; @input=&quot;emitValue&quot; @blur=&quot;blurInput&quot; @paste=&quot;pasteEmit&quot; /&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script&gt;</span></span>
<span class="line"><span>export default {</span></span>
<span class="line"><span>    name: &#39;InputText&#39;,</span></span>
<span class="line"><span>    props: {</span></span>
<span class="line"><span>        value: {</span></span>
<span class="line"><span>            type: [String, Number],</span></span>
<span class="line"><span>            default: &#39;&#39;,</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>        textarea: {</span></span>
<span class="line"><span>            type: Boolean,</span></span>
<span class="line"><span>            default: false,</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>        noLineBreaks: {</span></span>
<span class="line"><span>            type: Boolean,</span></span>
<span class="line"><span>            default: false,</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>        disabled: {</span></span>
<span class="line"><span>            type: Boolean,</span></span>
<span class="line"><span>            default: false,</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>        search: {</span></span>
<span class="line"><span>            type: Boolean,</span></span>
<span class="line"><span>            default: false,</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>        clear: {</span></span>
<span class="line"><span>            type: Boolean,</span></span>
<span class="line"><span>            default: false,</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>        enterPromise: {</span></span>
<span class="line"><span>            type: Function,</span></span>
<span class="line"><span>            default: undefined,</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>        number: {</span></span>
<span class="line"><span>            type: [Boolean, String],</span></span>
<span class="line"><span>            default: false, // true is &#39;&gt;=0&#39;</span></span>
<span class="line"><span>            validator: (value) =&gt; {</span></span>
<span class="line"><span>                //                    整数  整数  浮点数  浮点数  整数  任意数</span></span>
<span class="line"><span>                return [true, false, &#39;&gt;=0&#39;, &#39;&gt;0&#39;, &#39;&gt;=0.&#39;, &#39;&gt;0.&#39;, &#39;0&#39;, &#39;0.&#39;].includes(value)</span></span>
<span class="line"><span>            },</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>        placeholder: {</span></span>
<span class="line"><span>            type: String,</span></span>
<span class="line"><span>            default: undefined,</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>        height: {</span></span>
<span class="line"><span>            type: Number,</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>        left: {</span></span>
<span class="line"><span>            type: Boolean,</span></span>
<span class="line"><span>            default: false,</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>        center: {</span></span>
<span class="line"><span>            type: Boolean,</span></span>
<span class="line"><span>            default: false,</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>        right: {</span></span>
<span class="line"><span>            type: Boolean,</span></span>
<span class="line"><span>            default: false,</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>        noBorder: {</span></span>
<span class="line"><span>            type: Boolean,</span></span>
<span class="line"><span>            default: false,</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    data() {</span></span>
<span class="line"><span>        return {</span></span>
<span class="line"><span>            forbid: false,</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    computed: {</span></span>
<span class="line"><span>        heightSync() {</span></span>
<span class="line"><span>            if (this.height !== undefined) { return this.height }</span></span>
<span class="line"><span>            return this.textarea ? 80 : 32</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>        inputStyle() {</span></span>
<span class="line"><span>            let style = {}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            if (this.left) {</span></span>
<span class="line"><span>                style.textAlign = &#39;left&#39;</span></span>
<span class="line"><span>            } else if (this.center) {</span></span>
<span class="line"><span>                style.textAlign = &#39;center&#39;</span></span>
<span class="line"><span>            } else if (this.right) {</span></span>
<span class="line"><span>                style.textAlign = &#39;right&#39;</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            if (!this.textarea) {</span></span>
<span class="line"><span>                style.height = \`\${this.heightSync}px\`</span></span>
<span class="line"><span>                style.lineHeight = \`\${this.heightSync - 2}px\`</span></span>
<span class="line"><span>                if (this.search || this.clear) {</span></span>
<span class="line"><span>                    let paddingRight = 4</span></span>
<span class="line"><span>                    if (this.search) {</span></span>
<span class="line"><span>                        paddingRight += this.heightSync - 10 - 2</span></span>
<span class="line"><span>                    }</span></span>
<span class="line"><span>                    if (this.clear) {</span></span>
<span class="line"><span>                        paddingRight += this.heightSync - 10 - 2</span></span>
<span class="line"><span>                    }</span></span>
<span class="line"><span>                    style.paddingRight = \`\${paddingRight}px\`</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>            } else {</span></span>
<span class="line"><span>                style.height = \`\${this.heightSync}px\`</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            return style</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        placeholderText() {</span></span>
<span class="line"><span>            if (this.placeholder) {</span></span>
<span class="line"><span>                return this.placeholder</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>            if (this.search) {</span></span>
<span class="line"><span>                return \`请输入搜索关键字\${this.enterPromise ? &#39;后回车&#39; : &#39;&#39;}\`</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>            return &#39;&#39;</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        numberConfig() {</span></span>
<span class="line"><span>            let config = this.number</span></span>
<span class="line"><span>            if (this.number === true) {</span></span>
<span class="line"><span>                config = &#39;&gt;=0&#39;</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>            return config</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    watch: {</span></span>
<span class="line"><span>        value() {</span></span>
<span class="line"><span>            if (this.number) {</span></span>
<span class="line"><span>                let curInputText = this.$refs.input.value</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                // 0的等值不修改</span></span>
<span class="line"><span>                if (this.value === 0 &amp;&amp; [&#39;0&#39;, &#39;-0&#39;, &#39;0.&#39;, &#39;-0.&#39;].includes(curInputText)) {</span></span>
<span class="line"><span>                    return</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                // 浮动数带点的等值不修改</span></span>
<span class="line"><span>                if (this.numberConfig.includes(&#39;.&#39;)) {</span></span>
<span class="line"><span>                    if (this.value.toString() + &#39;.&#39; === curInputText) {</span></span>
<span class="line"><span>                        return</span></span>
<span class="line"><span>                    }</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            this.setValueText()</span></span>
<span class="line"><span>            this.emitValue()</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    methods: {</span></span>
<span class="line"><span>        getFocus() {</span></span>
<span class="line"><span>            this.$refs.input.focus()</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>        execEnterPromise() {</span></span>
<span class="line"><span>            if (this.enterPromise) {</span></span>
<span class="line"><span>                this.forbid = true</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                this.$nextTick(async () =&gt; {</span></span>
<span class="line"><span>                    let needGetFocus = await this.enterPromise()</span></span>
<span class="line"><span>                    if (needGetFocus === undefined) {</span></span>
<span class="line"><span>                        needGetFocus = true</span></span>
<span class="line"><span>                    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                    this.forbid = false</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                    if (needGetFocus) {</span></span>
<span class="line"><span>                        this.$nextTick(() =&gt; {</span></span>
<span class="line"><span>                            this.getFocus()</span></span>
<span class="line"><span>                        })</span></span>
<span class="line"><span>                    }</span></span>
<span class="line"><span>                })</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>        pasteEmit(event) {</span></span>
<span class="line"><span>            this.$emit(&#39;paste&#39;, event)</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        clearClick() {</span></span>
<span class="line"><span>            this.$refs.input.value = &#39;&#39;</span></span>
<span class="line"><span>            this.emitValue()</span></span>
<span class="line"><span>            this.execEnterPromise()</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>        inputEnter() {</span></span>
<span class="line"><span>            this.$emit(&#39;inputEnter&#39;)</span></span>
<span class="line"><span>            this.execEnterPromise()</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        blurInput() {</span></span>
<span class="line"><span>            this.setValueText()</span></span>
<span class="line"><span>            this.$nextTick(() =&gt; {</span></span>
<span class="line"><span>                this.$emit(&#39;blur&#39;)</span></span>
<span class="line"><span>            })</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        setValueText() {</span></span>
<span class="line"><span>            let text = this.value</span></span>
<span class="line"><span>            if (this.noLineBreaks) {</span></span>
<span class="line"><span>                text = text.replace(/\\n/g, &#39;&#39;)</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>            if (this.number) {</span></span>
<span class="line"><span>                if (Number.isNaN(this.value) || this.value === undefined || this.value === null) {</span></span>
<span class="line"><span>                    text = &#39;&#39;</span></span>
<span class="line"><span>                } else {</span></span>
<span class="line"><span>                    text = String(this.value)</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            if (this.$refs.input.value !== text) {</span></span>
<span class="line"><span>                this.$refs.input.value = text</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        emitValue() {</span></span>
<span class="line"><span>            let curInputText = this.$refs.input.value</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            let updateValue = curInputText</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            if (this.number) {</span></span>
<span class="line"><span>                let numberText = this.formatNumberText(curInputText)</span></span>
<span class="line"><span>                if (curInputText !== numberText) {</span></span>
<span class="line"><span>                    this.$refs.input.value = numberText</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                // 输入一半时, 当前值不变</span></span>
<span class="line"><span>                if (numberText === &#39;0.&#39; || numberText === &#39;-&#39; || numberText === &#39;-0.&#39;) {</span></span>
<span class="line"><span>                    return</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                let numberValue</span></span>
<span class="line"><span>                if (numberText === &#39;&#39;) {</span></span>
<span class="line"><span>                    numberValue = NaN</span></span>
<span class="line"><span>                } else {</span></span>
<span class="line"><span>                    if (this.numberConfig.includes(&#39;.&#39;)) {</span></span>
<span class="line"><span>                        numberValue = parseFloat(numberText)</span></span>
<span class="line"><span>                    } else {</span></span>
<span class="line"><span>                        numberValue = parseInt(numberText, 10)</span></span>
<span class="line"><span>                    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                    // 当类型为大于0的浮点数时, 输入0 认为正在输入小于1的小数, 当前值不变</span></span>
<span class="line"><span>                    if (numberValue === 0 &amp;&amp; this.numberConfig === &#39;&gt;0.&#39;) {</span></span>
<span class="line"><span>                        return</span></span>
<span class="line"><span>                    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                    if (this.numberConfig.includes(&#39;&gt;=0&#39;)) {</span></span>
<span class="line"><span>                        if (Number.isNaN(numberValue) || numberValue &lt; 0) {</span></span>
<span class="line"><span>                            numberValue = 0</span></span>
<span class="line"><span>                        }</span></span>
<span class="line"><span>                    } else if (this.numberConfig.includes(&#39;&gt;0&#39;)) {</span></span>
<span class="line"><span>                        if (Number.isNaN(numberValue) || numberValue &lt;= 0) {</span></span>
<span class="line"><span>                            numberValue = 1</span></span>
<span class="line"><span>                        }</span></span>
<span class="line"><span>                    } else {</span></span>
<span class="line"><span>                        if (Number.isNaN(numberValue)) {</span></span>
<span class="line"><span>                            numberValue = 0</span></span>
<span class="line"><span>                        }</span></span>
<span class="line"><span>                    }</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                updateValue = numberValue</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            if (updateValue !== this.value) {</span></span>
<span class="line"><span>                this.$emit(&#39;input&#39;, updateValue)</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>        formatNumberText(text) {</span></span>
<span class="line"><span>            // 删除 非 (数字 - .)</span></span>
<span class="line"><span>            text = text.replace(/[^\\d\\-.]/, &#39;&#39;)</span></span>
<span class="line"><span>            // 删除第二个 小数点 及后面</span></span>
<span class="line"><span>            let valueSplit = text.split(&#39;.&#39;)</span></span>
<span class="line"><span>            if (valueSplit.length &gt; 2) {</span></span>
<span class="line"><span>                text = valueSplit.slice(0, 2).join(&#39;.&#39;)</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>            // 删除第二个 - 及后面</span></span>
<span class="line"><span>            valueSplit = text.split(&#39;-&#39;)</span></span>
<span class="line"><span>            if (valueSplit.length &gt; 2) {</span></span>
<span class="line"><span>                text = valueSplit.slice(0, 2).join(&#39;-&#39;)</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>            // 如果 - 不在第一个字符 删除</span></span>
<span class="line"><span>            if (text.indexOf(&#39;-&#39;) &gt; 0) {</span></span>
<span class="line"><span>                text = text.replace(&#39;-&#39;, &#39;&#39;)</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            // 不可为小数 删除 .</span></span>
<span class="line"><span>            if (!this.numberConfig.includes(&#39;.&#39;)) {</span></span>
<span class="line"><span>                text = text.replace(&#39;.&#39;, &#39;&#39;)</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>            // 不可为负数 删除 -</span></span>
<span class="line"><span>            if (this.numberConfig.includes(&#39;&gt;&#39;)) {</span></span>
<span class="line"><span>                text = text.replace(&#39;-&#39;, &#39;&#39;)</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            if (text === &#39;.&#39; || text === &#39;-.&#39;) {</span></span>
<span class="line"><span>                text = &#39;&#39;</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>            return text</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    mounted() {</span></span>
<span class="line"><span>        this.setValueText()</span></span>
<span class="line"><span>        this.emitValue()</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;style scoped&gt;</span></span>
<span class="line"><span>.inputWp {</span></span>
<span class="line"><span>    display: inline-block;</span></span>
<span class="line"><span>    position: relative;</span></span>
<span class="line"><span>    width: 100%;</span></span>
<span class="line"><span>    line-height: 0;</span></span>
<span class="line"><span>    vertical-align: middle;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>.input {</span></span>
<span class="line"><span>    width: 100%;</span></span>
<span class="line"><span>    padding: 0 8px;</span></span>
<span class="line"><span>    border: 1px solid #d6d6d6;</span></span>
<span class="line"><span>    font-size: 14px;</span></span>
<span class="line"><span>    background-color: white;</span></span>
<span class="line"><span>    outline: none;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>.inputWp:hover .input,</span></span>
<span class="line"><span>.inputWp:focus .input {</span></span>
<span class="line"><span>    border-color: #0097dd;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/* button */</span></span>
<span class="line"><span>.button-wp {</span></span>
<span class="line"><span>    position: absolute;</span></span>
<span class="line"><span>    top: 1px;</span></span>
<span class="line"><span>    right: 3px;</span></span>
<span class="line"><span>    color: #cccccc;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>.button-wp &gt; * {</span></span>
<span class="line"><span>    margin: 4px -1px;</span></span>
<span class="line"><span>    cursor: pointer;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>.button-wp &gt; *:hover {</span></span>
<span class="line"><span>    color: #0097dd;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/* textarea */</span></span>
<span class="line"><span>.textarea {</span></span>
<span class="line"><span>    width: 100%;</span></span>
<span class="line"><span>    padding: 6px 8px;</span></span>
<span class="line"><span>    border: 1px solid #d6d6d6;</span></span>
<span class="line"><span>    vertical-align: top;</span></span>
<span class="line"><span>    outline: none;</span></span>
<span class="line"><span>    resize: none;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>.textarea:hover,</span></span>
<span class="line"><span>.textarea:focus {</span></span>
<span class="line"><span>    border-color: #0097dd;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/* disabled */</span></span>
<span class="line"><span>.input[disabled],</span></span>
<span class="line"><span>.textarea[disabled] {</span></span>
<span class="line"><span>    cursor: text;</span></span>
<span class="line"><span>    background-color: #f0f0f0;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>.input[disabled],</span></span>
<span class="line"><span>.inputWp:hover .input[disabled],</span></span>
<span class="line"><span>.inputWp:focus .input[disabled],</span></span>
<span class="line"><span>.textarea[disabled],</span></span>
<span class="line"><span>.textarea[disabled]:hover,</span></span>
<span class="line"><span>.textarea[disabled]:focus {</span></span>
<span class="line"><span>    border-color: #d6d6d6;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/* noBorder */</span></span>
<span class="line"><span>.input.noBorder,</span></span>
<span class="line"><span>.inputWp:hover .input.noBorder,</span></span>
<span class="line"><span>.inputWp:focus .input.noBorder,</span></span>
<span class="line"><span>.textarea.noBorder,</span></span>
<span class="line"><span>.textarea.noBorder:hover,</span></span>
<span class="line"><span>.textarea.noBorder:focus {</span></span>
<span class="line"><span>    border-color: transparent;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&lt;/style&gt;</span></span></code></pre></div>`,4),i=[e];function t(c,o,u,r,d,h){return a(),s("div",null,i)}const m=n(l,[["render",t]]);export{x as __pageData,m as default};
