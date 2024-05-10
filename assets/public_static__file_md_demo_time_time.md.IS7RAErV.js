import{_ as s,c as n,o as a,U as p}from"./chunks/framework.FpOEJISx.js";const v=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"public/static/_file/md/demo/time/time.md","filePath":"public/static/_file/md/demo/time/time.md"}'),l={name:"public/static/_file/md/demo/time/time.md"},t=p(`<div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>    &lt;div&gt;</span></span>
<span class="line"><span>        &lt;div class=&quot;block&quot;&gt;</span></span>
<span class="line"><span>            &lt;div style=&quot;height: 40px; padding: 10px 20px;&quot;&gt;</span></span>
<span class="line"><span>                &lt;span&gt;查询条件&lt;/span&gt;</span></span>
<span class="line"><span>            &lt;/div&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            &lt;div style=&quot;height: 80px; border-top: 1px solid #d8deea; padding: 0 20px;&quot;&gt;</span></span>
<span class="line"><span>                &lt;div class=&quot;clearfix&quot; style=&quot;margin-top: 26px;&quot;&gt;</span></span>
<span class="line"><span>                    &lt;div class=&quot;selectOne&quot;&gt;</span></span>
<span class="line"><span>                        &lt;Select v-model=&quot;value&quot; placeholder=&quot;请选择&quot; @change=&quot;selectOptionOne&quot;&gt;</span></span>
<span class="line"><span>                            &lt;SelectOption</span></span>
<span class="line"><span>                                v-for=&quot;item in options&quot;</span></span>
<span class="line"><span>                                :key=&quot;item.value&quot;</span></span>
<span class="line"><span>                                :label=&quot;item.label&quot;</span></span>
<span class="line"><span>                                :value=&quot;item.value&quot;</span></span>
<span class="line"><span>                            &gt;</span></span>
<span class="line"><span>                            {{ item.label }}</span></span>
<span class="line"><span>                            &lt;/SelectOption&gt;</span></span>
<span class="line"><span>                        &lt;/Select&gt;</span></span>
<span class="line"><span>                    &lt;/div&gt;</span></span>
<span class="line"><span>                    &lt;div class=&quot;selectTwo&quot;&gt;</span></span>
<span class="line"><span>                        &lt;Select v-model=&quot;value1&quot; placeholder=&quot;请选择&quot; @change=&quot;selectOptionTwo&quot;&gt;</span></span>
<span class="line"><span>                            &lt;SelectOption</span></span>
<span class="line"><span>                                v-for=&quot;item in options1&quot;</span></span>
<span class="line"><span>                                :key=&quot;item.value&quot;</span></span>
<span class="line"><span>                                :label=&quot;item.label&quot;</span></span>
<span class="line"><span>                                :value=&quot;item.value&quot;</span></span>
<span class="line"><span>                            &gt;</span></span>
<span class="line"><span>                            {{ item.label }}</span></span>
<span class="line"><span>                            &lt;/SelectOption&gt;</span></span>
<span class="line"><span>                        &lt;/Select&gt;</span></span>
<span class="line"><span>                    &lt;/div&gt;</span></span>
<span class="line"><span>                &lt;/div&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                &lt;div style=&quot;margin-top: 20px;;&quot;&gt;</span></span>
<span class="line"><span>                    &lt;span style=&quot;float: left; margin: 7px 20px 0 0; font-weight: 400; font-size: 16px;&quot;&gt;时间区间&lt;/span&gt;</span></span>
<span class="line"><span>                    &lt;div class=&quot;dateOne&quot;&gt;</span></span>
<span class="line"><span>                        &lt;DatePicker</span></span>
<span class="line"><span>                            v-model=&quot;value2&quot;</span></span>
<span class="line"><span>                            type=&quot;date&quot;</span></span>
<span class="line"><span>                            placeholder=&quot;选择日期&quot;</span></span>
<span class="line"><span>                            @change=&quot;selectDateOne&quot;</span></span>
<span class="line"><span>                        &gt;</span></span>
<span class="line"><span>                        &lt;/DatePicker&gt;</span></span>
<span class="line"><span>                    &lt;/div&gt;</span></span>
<span class="line"><span>                    &lt;div style=&quot;float: left; font-weight: 400; margin: 13px 10px;&quot;&gt; - &lt;/div&gt;</span></span>
<span class="line"><span>                    &lt;div class=&quot;dateTwo&quot;&gt;</span></span>
<span class="line"><span>                        &lt;DatePicker</span></span>
<span class="line"><span>                            v-model=&quot;value3&quot;</span></span>
<span class="line"><span>                            type=&quot;date&quot;</span></span>
<span class="line"><span>                            placeholder=&quot;选择日期&quot;</span></span>
<span class="line"><span>                            @change=&quot;selectDateTwo&quot;</span></span>
<span class="line"><span>                        &gt;</span></span>
<span class="line"><span>                        &lt;/DatePicker&gt;</span></span>
<span class="line"><span>                    &lt;/div&gt;</span></span>
<span class="line"><span>                &lt;/div&gt;</span></span>
<span class="line"><span>            &lt;/div&gt;</span></span>
<span class="line"><span>        &lt;/div&gt;</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span>&lt;script&gt;</span></span>
<span class="line"><span>import { Select, SelectOption, Input, message, DatePicker } from &#39;ant-design-vue&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import option from &#39;./_js/options.js&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import dayjs from &#39;dayjs&#39;</span></span>
<span class="line"><span>import isoWeek from &#39;dayjs/plugin/isoWeek&#39;</span></span>
<span class="line"><span>import isBetween from &#39;dayjs/plugin/isBetween&#39;</span></span>
<span class="line"><span>import zh_cn from &#39;dayjs/locale/zh-cn&#39;</span></span>
<span class="line"><span>dayjs.extend(isoWeek) // isoWeek</span></span>
<span class="line"><span>dayjs.extend(isBetween) // 是否之间</span></span>
<span class="line"><span>dayjs.locale({</span></span>
<span class="line"><span>    ...zh_cn,</span></span>
<span class="line"><span>    // weekStart: 1</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>export default {</span></span>
<span class="line"><span>    components: {</span></span>
<span class="line"><span>        Select,</span></span>
<span class="line"><span>        SelectOption,</span></span>
<span class="line"><span>        DatePicker,</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    data() {</span></span>
<span class="line"><span>        return {</span></span>
<span class="line"><span>            value: option.options[0][0].label,</span></span>
<span class="line"><span>            value1: option.options[1][1].label,</span></span>
<span class="line"><span>            value2: dayjs().subtract(1, &#39;day&#39;),</span></span>
<span class="line"><span>            value3: dayjs(),</span></span>
<span class="line"><span>            options: option.options[0],</span></span>
<span class="line"><span>            options1: option.options[1],</span></span>
<span class="line"><span>            dateType: &#39;day&#39;,</span></span>
<span class="line"><span>            startTime: dayjs().format(&#39;YYYYMMDD&#39;),</span></span>
<span class="line"><span>            endTime: dayjs().format(&#39;YYYYMMDD&#39;),</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    methods: {</span></span>
<span class="line"><span>        selectOptionOne(val) {</span></span>
<span class="line"><span>            if (val === &#39;1&#39;) {</span></span>
<span class="line"><span>                this.dateType = &#39;day&#39;</span></span>
<span class="line"><span>                this.value2 = dayjs()</span></span>
<span class="line"><span>                this.$emit(&#39;setStartTime&#39;, this.startTime)</span></span>
<span class="line"><span>                this.options1 = option.options[1]</span></span>
<span class="line"><span>                this.value1 = option.options[1][0].label</span></span>
<span class="line"><span>            } else if (val === &#39;2&#39;) {</span></span>
<span class="line"><span>                this.dateType = &#39;week&#39;</span></span>
<span class="line"><span>                this.startTime = dayjs().subtract(8, &#39;week&#39;).format(&#39;YYYYMMDD&#39;)</span></span>
<span class="line"><span>                this.value2 = dayjs().subtract(8, &#39;week&#39;)</span></span>
<span class="line"><span>                this.$emit(&#39;setStartTime&#39;, this.startTime)</span></span>
<span class="line"><span>                this.options1 = option.options[2]</span></span>
<span class="line"><span>                this.value1 = option.options[2][0].label</span></span>
<span class="line"><span>            } else if (val === &#39;3&#39;) {</span></span>
<span class="line"><span>                this.dateType = &#39;month&#39;</span></span>
<span class="line"><span>                this.startTime = dayjs().subtract(1, &#39;month&#39;).format(&#39;YYYYMMDD&#39;)</span></span>
<span class="line"><span>                this.value2 = dayjs().subtract(1, &#39;month&#39;)</span></span>
<span class="line"><span>                this.$emit(&#39;setStartTime&#39;, this.startTime)</span></span>
<span class="line"><span>                this.options1 = option.options[3]</span></span>
<span class="line"><span>                this.value1 = option.options[3][0].label</span></span>
<span class="line"><span>            } else {</span></span>
<span class="line"><span>                this.dateType = &#39;year&#39;</span></span>
<span class="line"><span>                this.startTime = dayjs().subtract(1, &#39;year&#39;).format(&#39;YYYYMMDD&#39;)</span></span>
<span class="line"><span>                this.value2 = dayjs().subtract(1, &#39;year&#39;)</span></span>
<span class="line"><span>                this.$emit(&#39;setStartTime&#39;, this.startTime)</span></span>
<span class="line"><span>                this.options1 = option.options[4]</span></span>
<span class="line"><span>                this.value1 = option.options[4][0].label</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>        selectOptionTwo(val) {</span></span>
<span class="line"><span>            if (this.dateType === &#39;day&#39;) {</span></span>
<span class="line"><span>                if (val === &#39;1&#39;) {</span></span>
<span class="line"><span>                    this.startTime = dayjs().subtract(val, &#39;day&#39;).format(&#39;YYYYMMDD&#39;)</span></span>
<span class="line"><span>                    this.value2 = dayjs().subtract(val, &#39;day&#39;)</span></span>
<span class="line"><span>                    this.$emit(&#39;setStartTime&#39;, this.startTime)</span></span>
<span class="line"><span>                } else {</span></span>
<span class="line"><span>                    this.startTime = dayjs().subtract(val, &#39;day&#39;).format(&#39;YYYYMMDD&#39;)</span></span>
<span class="line"><span>                    this.value2 = dayjs().subtract(val, &#39;day&#39;)</span></span>
<span class="line"><span>                    this.$emit(&#39;setStartTime&#39;, this.startTime)</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>            } else if (this.dateType === &#39;week&#39;) {</span></span>
<span class="line"><span>                if (val === &#39;8&#39;) {</span></span>
<span class="line"><span>                    this.startTime = dayjs().subtract(val, &#39;week&#39;).format(&#39;YYYYMMDD&#39;)</span></span>
<span class="line"><span>                    this.value2 = dayjs().subtract(val, &#39;week&#39;)</span></span>
<span class="line"><span>                    this.$emit(&#39;setStartTime&#39;, this.startTime)</span></span>
<span class="line"><span>                } else {</span></span>
<span class="line"><span>                    this.startTime = dayjs().subtract(val, &#39;week&#39;).format(&#39;YYYYMMDD&#39;)</span></span>
<span class="line"><span>                    this.value2 = dayjs().subtract(val, &#39;week&#39;)</span></span>
<span class="line"><span>                    this.$emit(&#39;setStartTime&#39;, this.startTime)</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>            } else if (this.dateType === &#39;month&#39;) {</span></span>
<span class="line"><span>                if (val === &#39;1&#39;) {</span></span>
<span class="line"><span>                    this.startTime = dayjs().subtract(2, &#39;month&#39;).format(&#39;YYYYMMDD&#39;)</span></span>
<span class="line"><span>                    this.value2 = dayjs().subtract(val, &#39;month&#39;)</span></span>
<span class="line"><span>                    this.$emit(&#39;setStartTime&#39;, this.startTime)</span></span>
<span class="line"><span>                } else if (val === &#39;3&#39;) {</span></span>
<span class="line"><span>                    this.startTime = dayjs().subtract(val, &#39;month&#39;).format(&#39;YYYYMMDD&#39;)</span></span>
<span class="line"><span>                    this.value2 = dayjs().subtract(val, &#39;month&#39;)</span></span>
<span class="line"><span>                    this.$emit(&#39;setStartTime&#39;, this.startTime)</span></span>
<span class="line"><span>                } else {</span></span>
<span class="line"><span>                    this.startTime = dayjs().subtract(val, &#39;month&#39;).format(&#39;YYYYMMDD&#39;)</span></span>
<span class="line"><span>                    this.value2 = dayjs().subtract(val, &#39;month&#39;)</span></span>
<span class="line"><span>                    this.$emit(&#39;setStartTime&#39;, this.startTime)</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>            } else if (this.dateType === &#39;year&#39;) {</span></span>
<span class="line"><span>                if (val === &#39;1&#39;) {</span></span>
<span class="line"><span>                    this.startTime = dayjs().subtract(val, &#39;year&#39;).format(&#39;YYYYMMDD&#39;)</span></span>
<span class="line"><span>                    this.value2 = dayjs().subtract(val, &#39;year&#39;)</span></span>
<span class="line"><span>                    this.$emit(&#39;setStartTime&#39;, this.startTime)</span></span>
<span class="line"><span>                } else {</span></span>
<span class="line"><span>                    this.startTime = dayjs().subtract(val, &#39;year&#39;).format(&#39;YYYYMMDD&#39;)</span></span>
<span class="line"><span>                    this.value2 = dayjs().subtract(val, &#39;year&#39;)</span></span>
<span class="line"><span>                    this.$emit(&#39;setStartTime&#39;, this.startTime)</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>            } else {</span></span>
<span class="line"><span>                this.value2 = &#39;&#39;</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>        selectDateOne() {</span></span>
<span class="line"><span>            this.startTime = dayjs(this.value2).format(&#39;YYYYMMDD&#39;)</span></span>
<span class="line"><span>            this.$emit(&#39;setStartTime&#39;, this.startTime)</span></span>
<span class="line"><span>            this.value1 = &#39;自定义&#39;</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>        selectDateTwo() {</span></span>
<span class="line"><span>            this.endTime = dayjs(this.value3).format(&#39;YYYYMMDD&#39;)</span></span>
<span class="line"><span>            this.$emit(&#39;setEndTime&#39;, this.endTime)</span></span>
<span class="line"><span>            this.value1 = &#39;自定义&#39;</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    mounted() {</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span>&lt;style scoped&gt;</span></span>
<span class="line"><span>.block {</span></span>
<span class="line"><span>    margin-bottom: 60px;</span></span>
<span class="line"><span>    padding-bottom: 20px;</span></span>
<span class="line"><span>    border-top-width: 0;</span></span>
<span class="line"><span>    background-color: #fff;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>.selectOne,</span></span>
<span class="line"><span>.selectTwo {</span></span>
<span class="line"><span>    float: left;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>.selectOne &gt;&gt;&gt; .el-input__inner,</span></span>
<span class="line"><span>.selectTwo &gt;&gt;&gt; .el-input__inner,</span></span>
<span class="line"><span>.dateOne &gt;&gt;&gt; .el-input__inner,</span></span>
<span class="line"><span>.dateTwo &gt;&gt;&gt; .el-input__inner {</span></span>
<span class="line"><span>    border-radius: 0;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>.selectOne &gt;&gt;&gt; .el-input {</span></span>
<span class="line"><span>    width: 42%;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>.selectTwo &gt;&gt;&gt; .el-input {</span></span>
<span class="line"><span>    left: -126px;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>.dateOne,</span></span>
<span class="line"><span>.dateTwo {</span></span>
<span class="line"><span>    float: left;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&lt;/style&gt;</span></span></code></pre></div>`,1),e=[t];function i(c,o,r,u,m,d){return a(),n("div",null,e)}const g=s(l,[["render",i]]);export{v as __pageData,g as default};
