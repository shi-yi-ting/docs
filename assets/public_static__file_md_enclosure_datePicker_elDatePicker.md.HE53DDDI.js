import{_ as n,c as s,o as a,U as p}from"./chunks/framework.FpOEJISx.js";const h=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"public/static/_file/md/enclosure/datePicker/elDatePicker.md","filePath":"public/static/_file/md/enclosure/datePicker/elDatePicker.md"}'),e={name:"public/static/_file/md/enclosure/datePicker/elDatePicker.md"},l=p(`<h2 id="使用" tabindex="-1">使用 <a class="header-anchor" href="#使用" aria-label="Permalink to &quot;使用&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>    &lt;div&gt;</span></span>
<span class="line"><span>        &lt;label class=&quot;item-label&quot;&gt;时间段: &lt;/label&gt;</span></span>
<span class="line"><span>        &lt;span class=&quot;eleDatePicker&quot;&gt;</span></span>
<span class="line"><span>            &lt;EleDatePicker :type=&quot;&#39;datetimerange&#39;&quot; :dateRange=&quot;dates.dateRange&quot; class=&quot;mr20&quot; style=&quot;display: inline-block;&quot; @getDateRange=&quot;getDateRange&quot; /&gt;</span></span>
<span class="line"><span>        &lt;/span&gt;</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script&gt;</span></span>
<span class="line"><span>import { defineComponent, reactive } from &#39;vue&#39;</span></span>
<span class="line"><span>import EleDatePicker from &#39;./vue/datePicker.vue&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export default defineComponent({</span></span>
<span class="line"><span>    components: {</span></span>
<span class="line"><span>        EleDatePicker,</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    setup() {</span></span>
<span class="line"><span>        const time = reactive({</span></span>
<span class="line"><span>            // timeRange: [dayjs().subtract(6, &#39;month&#39;).format(&#39;YYYY-MM-DD&#39;), dayjs().format(&#39;YYYY-MM-DD&#39;)],</span></span>
<span class="line"><span>            timeRange: [&#39;2023-10-01&#39;, &#39;2023-10-20&#39;],</span></span>
<span class="line"><span>            timeDimension: &#39;day&#39;,</span></span>
<span class="line"><span>            statisticType: &#39;number&#39;,</span></span>
<span class="line"><span>            statisticDimension: &#39;device_name&#39;,</span></span>
<span class="line"><span>            statisticItem: [],</span></span>
<span class="line"><span>        })</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        const dates = reactive({</span></span>
<span class="line"><span>            dateRangeObj: {</span></span>
<span class="line"><span>                oneDateRage: 24 * 3600 * 1000,</span></span>
<span class="line"><span>                sixDateRange: 6 * 24 * 3600 * 1000,</span></span>
<span class="line"><span>                monthGapDateRange: 29 * 24 * 3600 * 1000,</span></span>
<span class="line"><span>                monthDateRange: 30 * 24 * 3600 * 1000,</span></span>
<span class="line"><span>                threeGapMonthsRange: 89 * 24 * 3600 * 1000,</span></span>
<span class="line"><span>                threeMonthsRange: 90 * 24 * 3600 * 1000,</span></span>
<span class="line"><span>                oneYearRange: 364 * 24 * 3600 * 1000,</span></span>
<span class="line"><span>            },</span></span>
<span class="line"><span>            dateRange: [],</span></span>
<span class="line"><span>        })</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>        const getDateRange = (range) =&gt; { // 时间处理</span></span>
<span class="line"><span>            let dateRange = [].concat(range)</span></span>
<span class="line"><span>            console.log(&#39;dateRange&#39;, dateRange)</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>        return {</span></span>
<span class="line"><span>            time,</span></span>
<span class="line"><span>            dates,</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            getDateRange,</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;style lang=&quot;less&quot; scoped&gt;</span></span>
<span class="line"><span>.eleDatePicker {</span></span>
<span class="line"><span>    /deep/.el-input__inner {</span></span>
<span class="line"><span>        display: inline-block;</span></span>
<span class="line"><span>        height: 32px;</span></span>
<span class="line"><span>        line-height: 32px;</span></span>
<span class="line"><span>        padding: 0 10px;</span></span>
<span class="line"><span>        border-radius: 0;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /deep/.el-date-editor {</span></span>
<span class="line"><span>        height: calc(100% - 1px);</span></span>
<span class="line"><span>        top: 2px;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    /deep/.el-input__inner:hover {</span></span>
<span class="line"><span>        border-color: #0097dd;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    /deep/.el-range-editor.is-active {</span></span>
<span class="line"><span>        border-color: #d6d6d6;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /deep/input::placeholder {</span></span>
<span class="line"><span>        color: #999999;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    /deep/.el-icon-time:before {</span></span>
<span class="line"><span>        color: #999999;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&lt;/style&gt;</span></span></code></pre></div><h2 id="eledatepicker封装组件" tabindex="-1">EleDatePicker封装组件 <a class="header-anchor" href="#eledatepicker封装组件" aria-label="Permalink to &quot;EleDatePicker封装组件&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>    &lt;div id=&quot;date_picker&quot;&gt;</span></span>
<span class="line"><span>        &lt;!-- 有特殊的日期选择范围（例如7天，只能选中你当前选中的第一个日期的前后7天） --&gt;</span></span>
<span class="line"><span>        &lt;el-date-picker</span></span>
<span class="line"><span>            v-if=&quot;hasDatePicker&quot;</span></span>
<span class="line"><span>            ref=&quot;datePickerRef&quot;</span></span>
<span class="line"><span>            :key=&quot;type&quot;</span></span>
<span class="line"><span>            v-model=&quot;dateRangeArr&quot;</span></span>
<span class="line"><span>            :type=&quot;type&quot;</span></span>
<span class="line"><span>            :rangeSeparator=&quot;&#39;至&#39;&quot;</span></span>
<span class="line"><span>            :startPlaceholder=&quot;&#39;开始日期&#39;&quot;</span></span>
<span class="line"><span>            :endPlaceholder=&quot;&#39;结束日期&#39;&quot;</span></span>
<span class="line"><span>            :pickerOptions=&quot;pickerOptions&quot;</span></span>
<span class="line"><span>            :valueFormat=&quot;valueFormat&quot;</span></span>
<span class="line"><span>            :defaultTime=&quot;defaultTime&quot;</span></span>
<span class="line"><span>            :defaultValue=&quot;timeDefaultShow&quot;</span></span>
<span class="line"><span>            @input=&quot;immediUpdate&quot;</span></span>
<span class="line"><span>        &gt;</span></span>
<span class="line"><span>        &lt;/el-date-picker&gt;</span></span>
<span class="line"><span>        &lt;!-- 没有日期选择范围限制 --&gt;</span></span>
<span class="line"><span>        &lt;!-- &lt;el-date-picker v-else ref=&quot;datePickerRef&quot; v-model=&quot;dateRangeArr&quot; :type=&quot;type&quot; :rangeSeparator=&quot;$t(&#39;datePicker.to&#39;)&quot; :startPlaceholder=&quot;$t(&#39;datePicker.startPlaceholder&#39;)&quot; :endPlaceholder=&quot;$t(&#39;datePicker.endPlaceholder&#39;)&quot; :valueFormat=&quot;valueFormat&quot; :defaultTime=&quot;defaultTime&quot; @change=&quot;immediUpdate&quot;&gt;&lt;/el-date-picker&gt; --&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        &lt;el-date-picker v-else ref=&quot;datePickerRef&quot; v-model=&quot;dateRangeArr&quot; :type=&quot;type&quot; :rangeSeparator=&quot;&#39;至&#39;&quot; :startPlaceholder=&quot;&#39;开始日期&#39;&quot; :endPlaceholder=&quot;&#39;结束日期&#39;&quot; :valueFormat=&quot;valueFormat&quot; :defaultTime=&quot;defaultTime&quot; @change=&quot;immediUpdate&quot;&gt;&lt;/el-date-picker&gt;</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script&gt;</span></span>
<span class="line"><span>import { ElDatePicker } from &#39;element-plus&#39;</span></span>
<span class="line"><span>import { dateRangeObj } from &#39;./js/constant.js&#39;</span></span>
<span class="line"><span>export default {</span></span>
<span class="line"><span>    name: &#39;DatePicker&#39;,</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    components: {</span></span>
<span class="line"><span>        ElDatePicker</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    props: {</span></span>
<span class="line"><span>        dateRange: {</span></span>
<span class="line"><span>            type: Array,</span></span>
<span class="line"><span>            default: () =&gt; [],</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>        // 可选的时间间隔，默认7天范围(中间隔6天)</span></span>
<span class="line"><span>        selectDateRange: {</span></span>
<span class="line"><span>            type: Number,</span></span>
<span class="line"><span>            default: dateRangeObj.sixDateRange,</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>        // 总共的时间范围</span></span>
<span class="line"><span>        totalDateRange: {</span></span>
<span class="line"><span>            type: Number,</span></span>
<span class="line"><span>            default: dateRangeObj.monthDateRange,</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>        type: {</span></span>
<span class="line"><span>            type: String,</span></span>
<span class="line"><span>            default: &#39;daterange&#39;,</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>        hasDatePicker: {</span></span>
<span class="line"><span>            type: Boolean,</span></span>
<span class="line"><span>            default: true,</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>        // 是否限制总的可选择范围</span></span>
<span class="line"><span>        isLimitDateRange: {</span></span>
<span class="line"><span>            type: Boolean,</span></span>
<span class="line"><span>            default: false,</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>        defaultTime: {</span></span>
<span class="line"><span>            type: Array,</span></span>
<span class="line"><span>            default: () =&gt; [&#39;00:00:00&#39;, &#39;23:59:59&#39;],</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>        valueFormat: {</span></span>
<span class="line"><span>            type: String,</span></span>
<span class="line"><span>            default: &#39;yyyy-MM-dd HH:mm:ss&#39;,</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    data() {</span></span>
<span class="line"><span>        return {</span></span>
<span class="line"><span>            dateRangeArr: [],</span></span>
<span class="line"><span>            maxToolTipWidth: &#39;&#39;,</span></span>
<span class="line"><span>            // 默认30天范围</span></span>
<span class="line"><span>            timeDefaultShow: new Date((new Date()).getTime() - dateRangeObj.monthDateRange),</span></span>
<span class="line"><span>            minDate: &#39;&#39;,</span></span>
<span class="line"><span>            maxDate: &#39;&#39;,</span></span>
<span class="line"><span>            pickerOptions: {},</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    watch: {</span></span>
<span class="line"><span>        dateRange(val) {</span></span>
<span class="line"><span>            this.dateRangeArr = JSON.parse(JSON.stringify(val))</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>        totalDateRange() {</span></span>
<span class="line"><span>            this.getPickerData()</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>        isLimitDateRange() {</span></span>
<span class="line"><span>            this.getPickerData()</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    methods: {</span></span>
<span class="line"><span>        getPickerData() {</span></span>
<span class="line"><span>            this.timeDefaultShow = new Date((new Date()).getTime() - this.totalDateRange)</span></span>
<span class="line"><span>            this.pickerOptions = {</span></span>
<span class="line"><span>                onPick: ({ maxDate, minDate }) =&gt; {</span></span>
<span class="line"><span>                    this.minDate = minDate</span></span>
<span class="line"><span>                    this.maxDate = maxDate</span></span>
<span class="line"><span>                },</span></span>
<span class="line"><span>                disabledDate: (time) =&gt; {</span></span>
<span class="line"><span>                    if (this.$refs.datePickerRef.picker) {</span></span>
<span class="line"><span>                        this.minDate = this.$refs.datePickerRef.picker.minDate</span></span>
<span class="line"><span>                        this.maxDate = this.$refs.datePickerRef.picker.maxDate</span></span>
<span class="line"><span>                    }</span></span>
<span class="line"><span>                    const todayStamp = this.getStamp()</span></span>
<span class="line"><span>                    // 大于今天23:59:59</span></span>
<span class="line"><span>                    const compareWithNow = time.getTime() &gt; todayStamp</span></span>
<span class="line"><span>                    // 限制了总共可选择的范围</span></span>
<span class="line"><span>                    const rangeDisabled = time.getTime() &lt; todayStamp - this.totalDateRange</span></span>
<span class="line"><span>                    if (this.minDate) {</span></span>
<span class="line"><span>                        const range = this.selectDateRange</span></span>
<span class="line"><span>                        let compareWithSum = false</span></span>
<span class="line"><span>                        let compareWithSub = false</span></span>
<span class="line"><span>                        if (this.type === &#39;monthrange&#39;) {</span></span>
<span class="line"><span>                            compareWithSum = time.getTime() &gt; this.minDate.getTime() + range</span></span>
<span class="line"><span>                            compareWithSub = time.getTime() &lt; this.getMonthStamp(this.minDate) - range</span></span>
<span class="line"><span>                        } else {</span></span>
<span class="line"><span>                            // 大于(minDate-1)23:59:59 + 时间段</span></span>
<span class="line"><span>                            compareWithSum = time.getTime() &gt; this.getStamp(this.minDate) + range</span></span>
<span class="line"><span>                            // 小于minDate 0:00:00 - 时间段</span></span>
<span class="line"><span>                            compareWithSub = time.getTime() &lt; this.minDate.getTime() - range</span></span>
<span class="line"><span>                        }</span></span>
<span class="line"><span>                        const commonCompare = compareWithNow || compareWithSum || compareWithSub</span></span>
<span class="line"><span>                        return this.isLimitDateRange ? (commonCompare || rangeDisabled) : commonCompare</span></span>
<span class="line"><span>                    }</span></span>
<span class="line"><span>                    return this.isLimitDateRange ? (compareWithNow || rangeDisabled) : compareWithNow</span></span>
<span class="line"><span>                },</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>        // 清除组件自带清除按钮的可选范围</span></span>
<span class="line"><span>        immediUpdate(val) {</span></span>
<span class="line"><span>            if (val === null) {</span></span>
<span class="line"><span>                this.minDate = &#39;&#39;</span></span>
<span class="line"><span>                this.maxDate = &#39;&#39;</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>            this.$emit(&#39;getDateRange&#39;, val)</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        getStamp(date) {</span></span>
<span class="line"><span>            const newDate = date ? new Date(date) : new Date()</span></span>
<span class="line"><span>            return newDate.setHours(0, 0, 0, 0) + dateRangeObj.oneDateRage - 1</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        getMonthStamp(date) {</span></span>
<span class="line"><span>            const newDate = date ? new Date(date) : new Date()</span></span>
<span class="line"><span>            const month = newDate.getMonth()</span></span>
<span class="line"><span>            return newDate.setMonth(month + 1) - 1</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    mounted() {</span></span>
<span class="line"><span>        this.dateRangeArr = JSON.parse(JSON.stringify(this.dateRange))</span></span>
<span class="line"><span>        this.getPickerData()</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;style lang=&quot;less&quot; scoped&gt;</span></span>
<span class="line"><span>&lt;/style&gt;</span></span></code></pre></div>`,4),t=[l];function i(c,o,r,d,m,u){return a(),s("div",null,t)}const D=n(e,[["render",i]]);export{h as __pageData,D as default};
