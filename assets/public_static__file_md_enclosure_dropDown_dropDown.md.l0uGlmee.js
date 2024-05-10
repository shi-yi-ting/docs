import{_ as s,c as n,o as a,U as p}from"./chunks/framework.FpOEJISx.js";const g=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"public/static/_file/md/enclosure/dropDown/dropDown.md","filePath":"public/static/_file/md/enclosure/dropDown/dropDown.md"}'),l={name:"public/static/_file/md/enclosure/dropDown/dropDown.md"},e=p(`<h2 id="使用" tabindex="-1">使用 <a class="header-anchor" href="#使用" aria-label="Permalink to &quot;使用&quot;">​</a></h2><h3 id="组件" tabindex="-1">组件 <a class="header-anchor" href="#组件" aria-label="Permalink to &quot;组件&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>    &lt;div style=&quot;margin-top: 15px;&quot;&gt;</span></span>
<span class="line"><span>        &lt;span&gt;</span></span>
<span class="line"><span>            &lt;label class=&quot;item-label required&quot;&gt;选择工厂 :&lt;/label&gt;</span></span>
<span class="line"><span>            &lt;DropDown v-model=&quot;q.factoryId&quot; :options=&quot;options.factoryOptions&quot; style=&quot;width: 160px; margin-right: 20px;&quot; /&gt;</span></span>
<span class="line"><span>        &lt;/span&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        &lt;span&gt;共有6个产品&lt;/span&gt;</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script&gt;</span></span>
<span class="line"><span>import { defineComponent, reactive, onMounted } from &#39;vue&#39;</span></span>
<span class="line"><span>import factoryOptions from &#39;./_js/factoryOptions.js&#39; // 模拟数据</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import DropDown from &#39;./vue/dropDown.vue&#39;</span></span>
<span class="line"><span>import DropDownM from &#39;./vue/dropDownM.vue&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export default defineComponent({</span></span>
<span class="line"><span>    components: {</span></span>
<span class="line"><span>        DropDown,</span></span>
<span class="line"><span>        DropDownM,</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    setup() {</span></span>
<span class="line"><span>        const options = reactive({</span></span>
<span class="line"><span>            factoryOptions: [],</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            modelList: [</span></span>
<span class="line"><span>                { label: &#39;MRX-AL09&#39;, value: &#39;MRX-AL09&#39; },</span></span>
<span class="line"><span>                { label: &#39;HEGE-550&#39;, value: &#39;HEGE-550&#39; },</span></span>
<span class="line"><span>                { label: &#39;H1EGE-550&#39;, value: &#39;H1EGE-550&#39; },</span></span>
<span class="line"><span>                { label: &#39;H7EGE4-550&#39;, value: &#39;H7EGE4-550&#39; },</span></span>
<span class="line"><span>            ],</span></span>
<span class="line"><span>        })</span></span>
<span class="line"><span>        const q = reactive({</span></span>
<span class="line"><span>            factoryId: &#39;&#39;,</span></span>
<span class="line"><span>            deviceModel: [],</span></span>
<span class="line"><span>        })</span></span>
<span class="line"><span>        const getFactoryOptions = () =&gt; { // 获取工厂下拉框选项</span></span>
<span class="line"><span>            options.factoryOptions = factoryOptions.map((item) =&gt; { // 模拟数据,正式情况是没有的</span></span>
<span class="line"><span>                return {</span></span>
<span class="line"><span>                    value: item.factory_id,</span></span>
<span class="line"><span>                    label: item.factory_name,</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>            })</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>            // 调接口获取下拉框选项数据</span></span>
<span class="line"><span>            // $this.$loading.show()</span></span>
<span class="line"><span>            // let resp = await axios({</span></span>
<span class="line"><span>            //     method: &#39;post&#39;,</span></span>
<span class="line"><span>            //     url: &#39;/commonBaseService/getCommonServiceData&#39;,</span></span>
<span class="line"><span>            //     data: {</span></span>
<span class="line"><span>            //         worker: &#39;factoryServiceImpl&#39;,</span></span>
<span class="line"><span>            //         workerType: &#39;searchAllFactory&#39;,</span></span>
<span class="line"><span>            //     },</span></span>
<span class="line"><span>            // })</span></span>
<span class="line"><span>            // $this.$loading.hide()</span></span>
<span class="line"><span>            // if (resp.data.dataFlag &amp;&amp; resp.data.data) {</span></span>
<span class="line"><span>            //     options.factoryOptions = resp.data.data.map((item) =&gt; {</span></span>
<span class="line"><span>            //         return {</span></span>
<span class="line"><span>            //             value: item.factory_id,</span></span>
<span class="line"><span>            //             label: item.factory_name,</span></span>
<span class="line"><span>            //         }</span></span>
<span class="line"><span>            //     })</span></span>
<span class="line"><span>            // }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            q.factoryId = options.factoryOptions[0].value</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        onMounted(() =&gt; {</span></span>
<span class="line"><span>            getFactoryOptions()</span></span>
<span class="line"><span>        })</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>        return {</span></span>
<span class="line"><span>            options,</span></span>
<span class="line"><span>            q,</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            getFactoryOptions,</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;style lang=&quot;less&quot; scoped&gt;</span></span>
<span class="line"><span>.dropDownM {</span></span>
<span class="line"><span>    width: 260px;</span></span>
<span class="line"><span>    margin-right: 20px;</span></span>
<span class="line"><span>    /deep/.options {</span></span>
<span class="line"><span>        padding-bottom: 20px;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
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
<span class="line"><span>&lt;/style&gt;</span></span></code></pre></div><h3 id="factoryoptions模拟数据" tabindex="-1">factoryOptions模拟数据 <a class="header-anchor" href="#factoryoptions模拟数据" aria-label="Permalink to &quot;factoryOptions模拟数据&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>let factoryOptions = [</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        factory_id: &#39;-1&#39;,</span></span>
<span class="line"><span>        factory_name: &#39;全选&#39;,</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        access_ip: &#39;&#39;,</span></span>
<span class="line"><span>        create_time: &#39;2021-04-01 06:40:58&#39;,</span></span>
<span class="line"><span>        create_user: &#39;84&#39;,</span></span>
<span class="line"><span>        factory_address: &#39;武汉市未来科技城&#39;,</span></span>
<span class="line"><span>        factory_desc: &#39;武汉市&#39;,</span></span>
<span class="line"><span>        factory_id: &#39;44&#39;,</span></span>
<span class="line"><span>        factory_name: &#39;武汉A厂&#39;,</span></span>
<span class="line"><span>        update_time: &#39;2021-04-01 14:40:58&#39;,</span></span>
<span class="line"><span>        update_user: &#39;135&#39;,</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        access_ip: &#39;&#39;,</span></span>
<span class="line"><span>        create_time: &#39;2021-04-08 15:30:59&#39;,</span></span>
<span class="line"><span>        create_user: &#39;104&#39;,</span></span>
<span class="line"><span>        factory_address: &#39;武汉&#39;,</span></span>
<span class="line"><span>        factory_desc: &#39;012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678911&#39;,</span></span>
<span class="line"><span>        factory_id: &#39;48&#39;,</span></span>
<span class="line"><span>        factory_name: &#39;湖北A厂&#39;,</span></span>
<span class="line"><span>        update_time: &#39;2021-04-08 15:30:59&#39;,</span></span>
<span class="line"><span>        update_user: &#39;180&#39;,</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        access_ip: &#39;&#39;,</span></span>
<span class="line"><span>        create_time: &#39;2021-04-27 11:43:49&#39;,</span></span>
<span class="line"><span>        create_user: &#39;141&#39;,</span></span>
<span class="line"><span>        factory_address: &#39;广州A厂&#39;,</span></span>
<span class="line"><span>        factory_desc: &#39;广州A厂&#39;,</span></span>
<span class="line"><span>        factory_id: &#39;63&#39;,</span></span>
<span class="line"><span>        factory_name: &#39;广州A厂&#39;,</span></span>
<span class="line"><span>        update_time: &#39;2021-04-27 11:43:49&#39;,</span></span>
<span class="line"><span>        update_user: &#39;141&#39;,</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        access_ip: &#39;&#39;,</span></span>
<span class="line"><span>        create_time: &#39;2021-05-13 10:20:49&#39;,</span></span>
<span class="line"><span>        create_user: &#39;151&#39;,</span></span>
<span class="line"><span>        factory_address: &#39;武汉&#39;,</span></span>
<span class="line"><span>        factory_desc: &#39;业务测试专用&#39;,</span></span>
<span class="line"><span>        factory_id: &#39;64&#39;,</span></span>
<span class="line"><span>        factory_name: &#39;业务A厂&#39;,</span></span>
<span class="line"><span>        update_time: &#39;2021-05-13 10:20:49&#39;,</span></span>
<span class="line"><span>        update_user: &#39;&#39;,</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export default factoryOptions</span></span></code></pre></div><h2 id="dropdown封装组件" tabindex="-1">dropDown封装组件 <a class="header-anchor" href="#dropdown封装组件" aria-label="Permalink to &quot;dropDown封装组件&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>    &lt;span ref=&quot;dropDown&quot; v-clickOutside=&quot;hideOpen&quot; class=&quot;dropDown&quot; :style=&quot;{ height: \`\${height}px\` }&quot;&gt;</span></span>
<span class="line"><span>        &lt;span :class=&quot;[&#39;bottom&#39;, { disabled, canNotOpen, open: isOpen }]&quot; @click=&quot;clickShowText&quot;&gt;</span></span>
<span class="line"><span>            &lt;slot name=&quot;default&quot;&gt;&lt;span v-tippy=&quot;{ placement: &#39;top&#39;, content: showTip ? (showText.length &gt; 300 ? showText.slice(0, 300) + &#39;...&#39; : showText) : &#39;&#39; }&quot; :class=&quot;[&#39;text&#39;, { empty: selectOption.value === &#39;&#39; }]&quot; :style=&quot;{ lineHeight: \`\${height - 2 - 12}px\` }&quot;&gt;{{ showText }}&lt;/span&gt;&lt;/slot&gt;</span></span>
<span class="line"><span>        &lt;/span&gt;</span></span>
<span class="line"><span>        &lt;div v-if=&quot;isOpen&quot; :style=&quot;optionsStyle&quot; class=&quot;options&quot;&gt;</span></span>
<span class="line"><span>            &lt;div v-if=&quot;search&quot; class=&quot;search-wp&quot;&gt;</span></span>
<span class="line"><span>                &lt;inputText v-model=&quot;searchKey&quot; search /&gt;</span></span>
<span class="line"><span>            &lt;/div&gt;</span></span>
<span class="line"><span>            &lt;!-- &lt;div v-if=&quot;search&quot; v-show=&quot;searchData.searchEmpty&quot; class=&quot;searchEmpty&quot;&gt;{{ $t(&#39;无选项匹配&#39;) }} &quot;{{ searchKey }}&quot;&lt;/div&gt; --&gt;</span></span>
<span class="line"><span>            &lt;div v-if=&quot;search&quot; v-show=&quot;searchData.searchEmpty&quot; class=&quot;searchEmpty&quot;&gt;无选项匹配 &quot;{{ searchKey }}&quot;&lt;/div&gt;</span></span>
<span class="line"><span>            &lt;div ref=&quot;optionList&quot; v-tippy=&quot;tippyConfig&quot; class=&quot;optionList&quot; :class=&quot;{ showTippy }&quot;&gt;</span></span>
<span class="line"><span>                &lt;ul style=&quot;float: left; min-width: 100%;&quot;&gt;</span></span>
<span class="line"><span>                    &lt;li v-for=&quot;(option, index) in allOptionList&quot; v-show=&quot;!searchData.hideList[index]&quot; :key=&quot;option.value&quot; :class=&quot;[&#39;option&#39;, { selected: option.value === selectOption.value }]&quot; @click=&quot;clickOption(option.value)&quot; @mouseover=&quot;setTippyConfig($event, index, option.label)&quot;&gt;</span></span>
<span class="line"><span>                        &lt;span&gt;{{ option.label }}&lt;/span&gt;</span></span>
<span class="line"><span>                    &lt;/li&gt;</span></span>
<span class="line"><span>                &lt;/ul&gt;</span></span>
<span class="line"><span>            &lt;/div&gt;</span></span>
<span class="line"><span>        &lt;/div&gt;</span></span>
<span class="line"><span>    &lt;/span&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script&gt;</span></span>
<span class="line"><span>import is from &#39;is_js&#39;</span></span>
<span class="line"><span>import jQuery  from &#39;jquery&#39;</span></span>
<span class="line"><span>import { formatOptions } from &#39;./utils&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import inputText from &#39;./inputText/inputText.vue&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export default {</span></span>
<span class="line"><span>    name: &#39;DropDown&#39;,</span></span>
<span class="line"><span>    components: {</span></span>
<span class="line"><span>        inputText,</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    props: {</span></span>
<span class="line"><span>        height: {</span></span>
<span class="line"><span>            type: Number,</span></span>
<span class="line"><span>            default: 32,</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>        dropWidth: {</span></span>
<span class="line"><span>            type: Number,</span></span>
<span class="line"><span>            default: undefined,</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>        value: {</span></span>
<span class="line"><span>            type: [String, Number, Array],</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>        disabled: {</span></span>
<span class="line"><span>            type: Boolean,</span></span>
<span class="line"><span>            default: false,</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>        notEmpty: {</span></span>
<span class="line"><span>            type: Boolean,</span></span>
<span class="line"><span>            default: false,</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>        dependShow: {</span></span>
<span class="line"><span>            type: Boolean,</span></span>
<span class="line"><span>            default: false,</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>        dependText: {</span></span>
<span class="line"><span>            type: String,</span></span>
<span class="line"><span>            default: &#39;&#39;,</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>        loading: {</span></span>
<span class="line"><span>            type: Boolean,</span></span>
<span class="line"><span>            default: false,</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>        zeroOptionAdd: {</span></span>
<span class="line"><span>            type: Boolean,</span></span>
<span class="line"><span>            default: false,</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>        zeroOptionText: {</span></span>
<span class="line"><span>            type: String,</span></span>
<span class="line"><span>            // default: $t(&#39;请选择&#39;),</span></span>
<span class="line"><span>            default: &#39;请选择&#39;,</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>        emptyValueText: {</span></span>
<span class="line"><span>            type: String,</span></span>
<span class="line"><span>            // default: $t(&#39;请选择&#39;),</span></span>
<span class="line"><span>            default: &#39;请选择&#39;,</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>        options: {</span></span>
<span class="line"><span>            type: [Array, Object],</span></span>
<span class="line"><span>            default: () =&gt; {</span></span>
<span class="line"><span>                return []</span></span>
<span class="line"><span>            },</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>        optionsEmptyText: {</span></span>
<span class="line"><span>            type: String,</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>        search: {</span></span>
<span class="line"><span>            type: Boolean,</span></span>
<span class="line"><span>            default: false,</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>        defaultSearchKey: {</span></span>
<span class="line"><span>            type: String,</span></span>
<span class="line"><span>            default: &#39;&#39;,</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>        showTip: {</span></span>
<span class="line"><span>            type: Boolean,</span></span>
<span class="line"><span>            default: false,</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    data() {</span></span>
<span class="line"><span>        return {</span></span>
<span class="line"><span>            isOpen: false,</span></span>
<span class="line"><span>            searchKey: this.defaultSearchKey,</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            showTippy: false,</span></span>
<span class="line"><span>            tippyConfig: undefined,</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    computed: {</span></span>
<span class="line"><span>        optionsStyle() {</span></span>
<span class="line"><span>            const style = {}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            style.top = \`\${this.height - 1}px\`</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            if (this.dropWidth) {</span></span>
<span class="line"><span>                style.width = \`\${this.dropWidth}px\`</span></span>
<span class="line"><span>                // document.body.scrollWidth 页面总宽度</span></span>
<span class="line"><span>                // .getBoundingClientRect().right 元素右边到可见区域左边的距离</span></span>
<span class="line"><span>                // window.pageXOffset 页面水平滚动条滚动距离</span></span>
<span class="line"><span>                const rightWidth = document.body.scrollWidth - (this.$refs.dropDown.getBoundingClientRect().right + window.pageXOffset)</span></span>
<span class="line"><span>                if (rightWidth &lt; this.dropWidth) {</span></span>
<span class="line"><span>                    style.right = &#39;0px&#39;</span></span>
<span class="line"><span>                } else {</span></span>
<span class="line"><span>                    style.left = &#39;0px&#39;</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            return style</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        selectMode() {</span></span>
<span class="line"><span>            if (this.dependShow || this.loading) {</span></span>
<span class="line"><span>                return false</span></span>
<span class="line"><span>            } else {</span></span>
<span class="line"><span>                return true</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>        allOptionList() {</span></span>
<span class="line"><span>            let format = formatOptions(this.options)</span></span>
<span class="line"><span>            if (format.length === 0 &amp;&amp; this.optionsEmptyText) {</span></span>
<span class="line"><span>                format = []</span></span>
<span class="line"><span>            } else if (this.zeroOptionAdd) {</span></span>
<span class="line"><span>                format.unshift({</span></span>
<span class="line"><span>                    value: &#39;&#39;,</span></span>
<span class="line"><span>                    label: this.zeroOptionText,</span></span>
<span class="line"><span>                })</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>            return format</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>        selectOption() {</span></span>
<span class="line"><span>            let value,</span></span>
<span class="line"><span>                label</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            let parentVal</span></span>
<span class="line"><span>            if (is.array(this.value)) {</span></span>
<span class="line"><span>                parentVal = this.value.length &gt; 0 ? this.value[0] : &#39;&#39;</span></span>
<span class="line"><span>            } else if (is.string(this.value) || is.number(this.value)) {</span></span>
<span class="line"><span>                parentVal = this.value</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>            for (const option of this.allOptionList) {</span></span>
<span class="line"><span>                if (parentVal === option.value) {</span></span>
<span class="line"><span>                    value = option.value</span></span>
<span class="line"><span>                    label = option.label</span></span>
<span class="line"><span>                    break</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>            if (value === undefined) {</span></span>
<span class="line"><span>                if (this.notEmpty &amp;&amp; this.allOptionList.length &gt; 0) {</span></span>
<span class="line"><span>                    value = this.allOptionList[0].value</span></span>
<span class="line"><span>                    label = this.allOptionList[0].label</span></span>
<span class="line"><span>                } else {</span></span>
<span class="line"><span>                    value = &#39;&#39;</span></span>
<span class="line"><span>                    label = (this.allOptionList.find((option) =&gt; (option.value === &#39;&#39;)) || { label: this.emptyValueText }).label</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            return {</span></span>
<span class="line"><span>                time: new Date().getTime(),</span></span>
<span class="line"><span>                value,</span></span>
<span class="line"><span>                label,</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>        searchData() {</span></span>
<span class="line"><span>            let hideList = [],</span></span>
<span class="line"><span>                searchEmpty = false</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            if (this.search &amp;&amp; this.searchKey) {</span></span>
<span class="line"><span>                searchEmpty = true</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                for (const option of this.allOptionList) {</span></span>
<span class="line"><span>                    const searchKeys = this.searchKey.toLowerCase().split(&#39;;&#39;).filter((key) =&gt; (!!key))</span></span>
<span class="line"><span>                    if (searchKeys.some((key) =&gt; (option.label.toLowerCase().includes(key)))) {</span></span>
<span class="line"><span>                        hideList.push(false)</span></span>
<span class="line"><span>                        searchEmpty = false</span></span>
<span class="line"><span>                    } else {</span></span>
<span class="line"><span>                        hideList.push(true)</span></span>
<span class="line"><span>                    }</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            return {</span></span>
<span class="line"><span>                hideList,</span></span>
<span class="line"><span>                searchEmpty,</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>        showText() {</span></span>
<span class="line"><span>            if (this.dependShow) {</span></span>
<span class="line"><span>                return this.dependText</span></span>
<span class="line"><span>            } else if (this.loading) {</span></span>
<span class="line"><span>                // return $t(&#39;正在加载, 请稍后&#39;)</span></span>
<span class="line"><span>                return &#39;正在加载, 请稍后&#39;</span></span>
<span class="line"><span>            } else {</span></span>
<span class="line"><span>                if (this.allOptionList.length === 0 &amp;&amp; this.optionsEmptyText) {</span></span>
<span class="line"><span>                    return this.optionsEmptyText</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                return this.selectOption.label || &#39;&#39;</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>        canNotOpen() {</span></span>
<span class="line"><span>            return this.disabled || !this.selectMode</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    watch: {</span></span>
<span class="line"><span>        selectMode() {</span></span>
<span class="line"><span>            if (!this.selectMode) {</span></span>
<span class="line"><span>                this.emitValue(&#39;&#39;)</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>        &#39;selectOption.time&#39;: {</span></span>
<span class="line"><span>            handler: function () {</span></span>
<span class="line"><span>                const val = this.selectOption.value</span></span>
<span class="line"><span>                this.emitValue(val)</span></span>
<span class="line"><span>            },</span></span>
<span class="line"><span>            immediate: true,</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        disabled() {</span></span>
<span class="line"><span>            this.isOpen = false</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>        isOpen() {</span></span>
<span class="line"><span>            this.searchKey = &#39;&#39;</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    methods: {</span></span>
<span class="line"><span>        setTippyConfig(event, index, label) {</span></span>
<span class="line"><span>            const $taeget = jQuery(event.target),</span></span>
<span class="line"><span>                $optionList = jQuery(this.$refs.optionList)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            let spanWidth = $taeget.find(&#39;span&#39;).width()</span></span>
<span class="line"><span>            if (spanWidth === undefined) {</span></span>
<span class="line"><span>                spanWidth = $taeget.width()</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            this.showTippy = spanWidth &gt; $optionList.width() - 10 - 10</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            const offsetX = index * 32 + 2 - $optionList.scrollTop()</span></span>
<span class="line"><span>            this.tippyConfig = {</span></span>
<span class="line"><span>                content: label,</span></span>
<span class="line"><span>                theme: &#39;light&#39;,</span></span>
<span class="line"><span>                arrow: false,</span></span>
<span class="line"><span>                animateFill: false,</span></span>
<span class="line"><span>                placement: &#39;right-start&#39;,</span></span>
<span class="line"><span>                offset: \`\${offsetX}, 0\`,</span></span>
<span class="line"><span>                boundary: &#39;viewport&#39;,</span></span>
<span class="line"><span>                appendTo: this.$refs.optionList,</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        clickOption(val) {</span></span>
<span class="line"><span>            this.isOpen = false</span></span>
<span class="line"><span>            this.emitValue(val)</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        clickShowText() {</span></span>
<span class="line"><span>            if (!this.canNotOpen) {</span></span>
<span class="line"><span>                this.isOpen = !this.isOpen</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>        emitValue(val) {</span></span>
<span class="line"><span>            if (this.value !== val) {</span></span>
<span class="line"><span>                this.$emit(&#39;input&#39;, val)</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        hideOpen() {</span></span>
<span class="line"><span>            this.isOpen = false</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    mounted() {</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    beforeDestroy() {</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;style scoped&gt;</span></span>
<span class="line"><span>/* dropDown */</span></span>
<span class="line"><span>.dropDown {</span></span>
<span class="line"><span>    display: inline-block;</span></span>
<span class="line"><span>    position: relative;</span></span>
<span class="line"><span>    width: 180px;</span></span>
<span class="line"><span>    vertical-align: middle;</span></span>
<span class="line"><span>    background-color: white;</span></span>
<span class="line"><span>    text-align: left;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/* bottom */</span></span>
<span class="line"><span>.bottom {</span></span>
<span class="line"><span>    display: inline-block;</span></span>
<span class="line"><span>    position: relative;</span></span>
<span class="line"><span>    width: 100%;</span></span>
<span class="line"><span>    height: 100%;</span></span>
<span class="line"><span>    border: 1px solid #cccccc;</span></span>
<span class="line"><span>    cursor: pointer;</span></span>
<span class="line"><span>    user-select: none;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>.bottom::after {</span></span>
<span class="line"><span>    content: &quot;&quot;;</span></span>
<span class="line"><span>    position: absolute;</span></span>
<span class="line"><span>    top: 50%;</span></span>
<span class="line"><span>    right: 10px;</span></span>
<span class="line"><span>    margin-top: -2px;</span></span>
<span class="line"><span>    border-top: 6px dashed #829baf;</span></span>
<span class="line"><span>    border-left: 6px solid transparent;</span></span>
<span class="line"><span>    border-right: 6px solid transparent;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>.bottom:hover,</span></span>
<span class="line"><span>.bottom.open {</span></span>
<span class="line"><span>    border-color: #0097dd;</span></span>
<span class="line"><span>    z-index: 9;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>.bottom.disabled {</span></span>
<span class="line"><span>    color: #777;</span></span>
<span class="line"><span>    background-color: #f3f3f3;</span></span>
<span class="line"><span>    cursor: default;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>.bottom.canNotOpen {</span></span>
<span class="line"><span>    cursor: default;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>.bottom.disabled:hover,</span></span>
<span class="line"><span>.bottom.canNotOpen:hover {</span></span>
<span class="line"><span>    border-color: #cccccc;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>.bottom .text {</span></span>
<span class="line"><span>    position: absolute;</span></span>
<span class="line"><span>    width: 100%;</span></span>
<span class="line"><span>    height: 100%;</span></span>
<span class="line"><span>    padding: 6px 24px 6px 10px;</span></span>
<span class="line"><span>    overflow: hidden;</span></span>
<span class="line"><span>    white-space: nowrap;</span></span>
<span class="line"><span>    text-overflow: ellipsis;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>.bottom .text.empty {</span></span>
<span class="line"><span>    color: #999999;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/* options */</span></span>
<span class="line"><span>.options {</span></span>
<span class="line"><span>    position: absolute;</span></span>
<span class="line"><span>    width: 100%;</span></span>
<span class="line"><span>    border: 1px solid #0097dd;</span></span>
<span class="line"><span>    background-color: white;</span></span>
<span class="line"><span>    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.175);</span></span>
<span class="line"><span>    z-index: 999;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>/* search */</span></span>
<span class="line"><span>.search-wp {</span></span>
<span class="line"><span>    display: block;</span></span>
<span class="line"><span>    margin: 5px 10px;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>/* optionList */</span></span>
<span class="line"><span>.options .optionList {</span></span>
<span class="line"><span>    display: block;</span></span>
<span class="line"><span>    width: 100%;</span></span>
<span class="line"><span>    max-height: 320px;</span></span>
<span class="line"><span>    cursor: pointer;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>.options .optionList {</span></span>
<span class="line"><span>    overflow: auto;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>.options .optionList &gt;&gt;&gt; .tippy-popper {</span></span>
<span class="line"><span>    display: none;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>.options .optionList.showTippy &gt;&gt;&gt; .tippy-popper {</span></span>
<span class="line"><span>    display: block;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>/* option */</span></span>
<span class="line"><span>.options .searchEmpty,</span></span>
<span class="line"><span>.options .option {</span></span>
<span class="line"><span>    display: block;</span></span>
<span class="line"><span>    height: 32px;</span></span>
<span class="line"><span>    padding: 6px 10px;</span></span>
<span class="line"><span>    line-height: 20px;</span></span>
<span class="line"><span>    white-space: nowrap;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>.options .option:nth-child(2n) {</span></span>
<span class="line"><span>    background-color: white;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>.options .option:nth-child(2n + 1) {</span></span>
<span class="line"><span>    background-color: #f5f9fc;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>.options .option:hover,</span></span>
<span class="line"><span>.options .option.selected {</span></span>
<span class="line"><span>    color: #0097dd;</span></span>
<span class="line"><span>    background-color: #0097dd1a;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>::-webkit-scrollbar {</span></span>
<span class="line"><span>    width: 6px;</span></span>
<span class="line"><span>    height: 6px;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>::-webkit-scrollbar-thumb {</span></span>
<span class="line"><span>    border-radius: 3px;</span></span>
<span class="line"><span>    background-color: #bde2f4;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>::-webkit-scrollbar-thumb:hover {</span></span>
<span class="line"><span>    background-color: #96d6f5;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&lt;/style&gt;</span></span></code></pre></div><h3 id="utils中的formatoptions工具函数" tabindex="-1">utils中的formatOptions工具函数 <a class="header-anchor" href="#utils中的formatoptions工具函数" aria-label="Permalink to &quot;utils中的formatOptions工具函数&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span></span></span>
<span class="line"><span>import is from &#39;is_js&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>is.objectBase = (value) =&gt; {</span></span>
<span class="line"><span>    return Object.prototype.toString.call(value) === &#39;[object Object]&#39;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>is.not.objectBase = (value) =&gt; {</span></span>
<span class="line"><span>    return !window.is.objectBase(value)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export function formatOptions(options) {</span></span>
<span class="line"><span>    let optionList = []</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    if (is.array(options)) {</span></span>
<span class="line"><span>        options.forEach((item) =&gt; {</span></span>
<span class="line"><span>            let option</span></span>
<span class="line"><span>            if (is.objectBase(item)) {</span></span>
<span class="line"><span>                option = {</span></span>
<span class="line"><span>                    value: item.value,</span></span>
<span class="line"><span>                    label: item.label,</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>            } else if (is.array(item)) {</span></span>
<span class="line"><span>                option = {</span></span>
<span class="line"><span>                    value: item[0],</span></span>
<span class="line"><span>                    label: item[1],</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>            } else if (is.string(item)) {</span></span>
<span class="line"><span>                option = {</span></span>
<span class="line"><span>                    value: item,</span></span>
<span class="line"><span>                    label: item,</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            if (option) {</span></span>
<span class="line"><span>                optionList.push(option)</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        })</span></span>
<span class="line"><span>    } else if (is.objectBase(options)) {</span></span>
<span class="line"><span>        for (let value of Object.keys(options)) {</span></span>
<span class="line"><span>            let label</span></span>
<span class="line"><span>            if (is.string(options[value])) {</span></span>
<span class="line"><span>                label = options[value]</span></span>
<span class="line"><span>            } else if (is.objectBase(options[value])) {</span></span>
<span class="line"><span>                label = options[value].label</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>            if (label) {</span></span>
<span class="line"><span>                let option = {</span></span>
<span class="line"><span>                    value,</span></span>
<span class="line"><span>                    label,</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                optionList.push(option)</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    return optionList</span></span>
<span class="line"><span>}</span></span></code></pre></div>`,9),i=[e];function t(c,o,r,d,u,h){return a(),n("div",null,i)}const m=s(l,[["render",t]]);export{g as __pageData,m as default};
