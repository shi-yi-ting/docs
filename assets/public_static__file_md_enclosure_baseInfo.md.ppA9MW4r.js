import{_ as n,c as s,o as a,U as p}from"./chunks/framework.FpOEJISx.js";const f=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"public/static/_file/md/enclosure/baseInfo.md","filePath":"public/static/_file/md/enclosure/baseInfo.md"}'),l={name:"public/static/_file/md/enclosure/baseInfo.md"},e=p(`<div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>    &lt;div&gt;</span></span>
<span class="line"><span>        &lt;div class=&quot;baseInfo&quot;&gt;</span></span>
<span class="line"><span>            &lt;div v-if=&quot;showTop&quot; class=&quot;top&quot;&gt;</span></span>
<span class="line"><span>                &lt;slot /&gt;</span></span>
<span class="line"><span>            &lt;/div&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            &lt;div v-if=&quot;isTable&quot; class=&quot;table&quot;&gt;</span></span>
<span class="line"><span>                &lt;a-spin :spinning=&quot;publicInfo.spinning&quot; tip=&quot;Loading...&quot;&gt;</span></span>
<span class="line"><span>                    &lt;a-table</span></span>
<span class="line"><span>                        :loading=&quot;table.loading&quot;</span></span>
<span class="line"><span>                        :data-source=&quot;table.list&quot;</span></span>
<span class="line"><span>                        :columns=&quot;table.columns&quot;</span></span>
<span class="line"><span>                        :bordered=&quot;true&quot;</span></span>
<span class="line"><span>                        size=&quot;small&quot;</span></span>
<span class="line"><span>                        rowKey=&quot;id&quot;</span></span>
<span class="line"><span>                        style=&quot;width: 100%; background: border-box;&quot;</span></span>
<span class="line"><span>                        :rowSelection=&quot;{ onChange: onSelectChange }&quot;</span></span>
<span class="line"><span>                        :pagination=&quot;{</span></span>
<span class="line"><span>                            current: page.pageIndex,</span></span>
<span class="line"><span>                            pageSize: page.pageSize,</span></span>
<span class="line"><span>                            total: table.total,</span></span>
<span class="line"><span>                        }&quot;</span></span>
<span class="line"><span>                        @change=&quot;pageChange&quot;</span></span>
<span class="line"><span>                    &gt;</span></span>
<span class="line"><span>                        &lt;template #bodyCell=&quot;{ record, column, index }&quot;&gt;</span></span>
<span class="line"><span>                            &lt;template v-if=&quot;column.dataIndex === &#39;opts&#39;&quot;&gt;</span></span>
<span class="line"><span>                                &lt;a-space&gt;</span></span>
<span class="line"><span>                                    &lt;a-popconfirm title=&quot;确定删除?&quot; okText=&quot;删除&quot; @confirm=&quot;deleteItem(record.id)&quot;&gt;</span></span>
<span class="line"><span>                                        &lt;a-button size=&quot;small&quot; danger @click.stop&gt;删除&lt;/a-button&gt;</span></span>
<span class="line"><span>                                    &lt;/a-popconfirm&gt;</span></span>
<span class="line"><span>                                &lt;/a-space&gt;</span></span>
<span class="line"><span>                            &lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                            &lt;template v-if=&quot;column.dataIndex === &#39;index&#39;&quot;&gt;</span></span>
<span class="line"><span>                                &lt;a-space&gt;</span></span>
<span class="line"><span>                                    {{ (page.pageIndex - 1) * page.pageSize + Number(index) + 1 }}</span></span>
<span class="line"><span>                                &lt;/a-space&gt;</span></span>
<span class="line"><span>                            &lt;/template&gt;</span></span>
<span class="line"><span>                        &lt;/template&gt;</span></span>
<span class="line"><span>                    &lt;/a-table&gt;</span></span>
<span class="line"><span>                &lt;/a-spin&gt;</span></span>
<span class="line"><span>            &lt;/div&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>            &lt;div v-else class=&quot;content-wrap&quot;&gt;</span></span>
<span class="line"><span>                &lt;div v-for=&quot;(item, index) of content.list&quot; :key=&quot;index&quot; class=&quot;content&quot; :style=&quot;{ width: \`calc(100% / \${columnCount})\` }&quot;&gt;</span></span>
<span class="line"><span>                    &lt;label for=&quot;&quot; class=&quot;title&quot;&gt;{{ item.title }}&lt;/label&gt;</span></span>
<span class="line"><span>                    &lt;div class=&quot;text&quot;&gt;{{ item.text }}&lt;/div&gt;</span></span>
<span class="line"><span>                &lt;/div&gt;</span></span>
<span class="line"><span>            &lt;/div&gt;</span></span>
<span class="line"><span>        &lt;/div&gt;</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script lang=&quot;ts&quot; setup&gt;</span></span>
<span class="line"><span>import { reactive, onMounted } from &#39;vue&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import { message } from &#39;ant-design-vue&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// TODO</span></span>
<span class="line"><span>const props = defineProps({</span></span>
<span class="line"><span>    showTop: {</span></span>
<span class="line"><span>        type: Boolean,</span></span>
<span class="line"><span>        default: false,</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    isTable: {</span></span>
<span class="line"><span>        type: Boolean,</span></span>
<span class="line"><span>        default: false,</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    columnCount: {</span></span>
<span class="line"><span>        type: Number,</span></span>
<span class="line"><span>        default: 3,</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 变量</span></span>
<span class="line"><span>const publicInfo = reactive({</span></span>
<span class="line"><span>    spinning: false,</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const content = reactive({</span></span>
<span class="line"><span>    list: [</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>            title: &#39;主库轴线尺寸&#39;,</span></span>
<span class="line"><span>            text: &#39;468x(33+17.5)&#39;,</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>            title: &#39;-&#39;,</span></span>
<span class="line"><span>            text: &#39;-&#39;,</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>            title: &#39;边跨轴线尺寸&#39;,</span></span>
<span class="line"><span>            text: &#39;nginx/1.10.2&#39;,</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>            title: &#39;二层轴线尺寸&#39;,</span></span>
<span class="line"><span>            text: &#39;468x9&#39;,</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>            title: &#39;库线规模（线）&#39;,</span></span>
<span class="line"><span>            text: &#39;6&#39;,</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>            title: &#39;列位数&#39;,</span></span>
<span class="line"><span>            text: &#39;1线2列位&#39;,</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>            title: &#39;作业面标高&#39;,</span></span>
<span class="line"><span>            text: &#39;&#39;,</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>            title: &#39;平台标高&#39;,</span></span>
<span class="line"><span>            text: &#39;&#39;,</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>            title: &#39;三成标高&#39;,</span></span>
<span class="line"><span>            text: &#39;&#39;,</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>    ],</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function handleTable() {</span></span>
<span class="line"><span>    // 分页</span></span>
<span class="line"><span>    const page = reactive({</span></span>
<span class="line"><span>        pageIndex: 1,</span></span>
<span class="line"><span>        pageSize: 10,</span></span>
<span class="line"><span>    })</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 表格</span></span>
<span class="line"><span>    const table = reactive({</span></span>
<span class="line"><span>        loading: false,</span></span>
<span class="line"><span>        total: 0,</span></span>
<span class="line"><span>        list: [],</span></span>
<span class="line"><span>        selectKeys: [],</span></span>
<span class="line"><span>        columns: [</span></span>
<span class="line"><span>            { title: &#39;序号&#39;, key: &#39;index&#39;, dataIndex: &#39;index&#39;, align: &#39;center&#39;, width: &#39;6%&#39; },</span></span>
<span class="line"><span>            { title: &#39;电算代号&#39;, key: &#39;faciliityName&#39;, dataIndex: &#39;faciliityName&#39;, align: &#39;center&#39;, width: &#39;10%&#39; },</span></span>
<span class="line"><span>            { title: &#39;设备名称&#39;, key: &#39;quotaTypeName&#39;, dataIndex: &#39;quotaTypeName&#39;, align: &#39;center&#39;, width: &#39;10%&#39; },</span></span>
<span class="line"><span>            { title: &#39;设备型号&#39;, key: &#39;recentNumber&#39;, dataIndex: &#39;recentNumber&#39;, align: &#39;center&#39;, width: &#39;10%&#39; },</span></span>
<span class="line"><span>            { title: &#39;设备规格&#39;, key: &#39;forwardNumber&#39;, dataIndex: &#39;forwardNumber&#39;, align: &#39;center&#39;, width: &#39;10%&#39; },</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            { title: &#39;单位&#39;, key: &#39;forwardNumber01&#39;, dataIndex: &#39;forwardNumber01&#39;, align: &#39;center&#39;, width: &#39;10%&#39; },</span></span>
<span class="line"><span>            { title: &#39;单位功率&#39;, key: &#39;forwardNumber02&#39;, dataIndex: &#39;forwardNumber02&#39;, align: &#39;center&#39;, width: &#39;10%&#39; },</span></span>
<span class="line"><span>            { title: &#39;综合取定价（不含税）&#39;, key: &#39;forwardNumber03&#39;, dataIndex: &#39;forwardNumber03&#39;, align: &#39;center&#39;, width: &#39;10%&#39; },</span></span>
<span class="line"><span>            { title: &#39;适用库房&#39;, key: &#39;forwardNumber04&#39;, dataIndex: &#39;forwardNumber04&#39;, align: &#39;center&#39;, width: &#39;10%&#39; },</span></span>
<span class="line"><span>            { title: &#39;设备图片&#39;, key: &#39;forwardNumber05&#39;, dataIndex: &#39;forwardNumber05&#39;, align: &#39;center&#39;, width: &#39;10%&#39; },</span></span>
<span class="line"><span>            // { title: &#39;操作&#39;, dataIndex: &#39;opts&#39;, align: &#39;center&#39;, key: &#39;opts&#39;, width: &#39;12%&#39; },</span></span>
<span class="line"><span>        ],</span></span>
<span class="line"><span>    })</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 获取表格数据</span></span>
<span class="line"><span>    const getTableList = () =&gt; {</span></span>
<span class="line"><span>        try {</span></span>
<span class="line"><span>            // const params = {</span></span>
<span class="line"><span>            //     PageIndex: page.pageIndex,</span></span>
<span class="line"><span>            //     PageSize: page.pageSize,</span></span>
<span class="line"><span>            //     // xxx</span></span>
<span class="line"><span>            // }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            table.loading = true</span></span>
<span class="line"><span>            table.total = 0</span></span>
<span class="line"><span>            table.list = []</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            // const resp = await getTableListApi(params)</span></span>
<span class="line"><span>            // console.log(resp.data)</span></span>
<span class="line"><span>            // table.total = resp.data?.total</span></span>
<span class="line"><span>            // table.list = resp.data.map((item) =&gt; {</span></span>
<span class="line"><span>            //     return {</span></span>
<span class="line"><span>            //         id: item.id,</span></span>
<span class="line"><span>            //         stationName: item.stationName,</span></span>
<span class="line"><span>            //     }</span></span>
<span class="line"><span>            // })</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            table.list = [</span></span>
<span class="line"><span>                {</span></span>
<span class="line"><span>                    id: &#39;1&#39;,</span></span>
<span class="line"><span>                    maxOnDuty: &#39;maxOnDuty&#39;,</span></span>
<span class="line"><span>                    projectId: &#39;projectId&#39;,</span></span>
<span class="line"><span>                    dataId: &#39;123, 345&#39;,</span></span>
<span class="line"><span>                    faciliityId: &#39;faciliityId&#39;,</span></span>
<span class="line"><span>                    faciliityName: &#39;304135002&#39;,</span></span>
<span class="line"><span>                    quotaType: &#39;固定轨道桥&#39;,</span></span>
<span class="line"><span>                    quotaTypeName: &#39;固定轨道桥&#39;,</span></span>
<span class="line"><span>                    recentNumber: &#39;常规&#39;,</span></span>
<span class="line"><span>                    forwardNumber: &#39;含踏步、护手等&#39;,</span></span>
<span class="line"><span>                    forwardNumber01: &#39;延米&#39;,</span></span>
<span class="line"><span>                    forwardNumber02: &#39;&#39;,</span></span>
<span class="line"><span>                    forwardNumber03: &#39;3395&#39;,</span></span>
<span class="line"><span>                    forwardNumber04: &#39;检查库&#39;,</span></span>
<span class="line"><span>                    forwardNumber05: &#39;jpg/png&#39;,</span></span>
<span class="line"><span>                },</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                {</span></span>
<span class="line"><span>                    id: &#39;2&#39;,</span></span>
<span class="line"><span>                    maxOnDuty: &#39;maxOnDuty&#39;,</span></span>
<span class="line"><span>                    projectId: &#39;projectId&#39;,</span></span>
<span class="line"><span>                    dataId: &#39;123, 345&#39;,</span></span>
<span class="line"><span>                    faciliityId: &#39;faciliityId&#39;,</span></span>
<span class="line"><span>                    faciliityName: &#39;304135003&#39;,</span></span>
<span class="line"><span>                    quotaType: &#39;单侧双层作业平台&#39;,</span></span>
<span class="line"><span>                    quotaTypeName: &#39;固定轨道桥&#39;,</span></span>
<span class="line"><span>                    recentNumber: &#39;常规&#39;,</span></span>
<span class="line"><span>                    forwardNumber: &#39;含防护网、翻版、控制机构等&#39;,</span></span>
<span class="line"><span>                    forwardNumber01: &#39;延米&#39;,</span></span>
<span class="line"><span>                    forwardNumber02: &#39;&#39;,</span></span>
<span class="line"><span>                    forwardNumber03: &#39;6111&#39;,</span></span>
<span class="line"><span>                    forwardNumber04: &#39;检查库&#39;,</span></span>
<span class="line"><span>                    forwardNumber05: &#39;jpg/png&#39;,</span></span>
<span class="line"><span>                },</span></span>
<span class="line"><span>            ]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            table.loading = false</span></span>
<span class="line"><span>        } catch (err) {</span></span>
<span class="line"><span>            console.error(err)</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    const onSelectChange = (selectKeys) =&gt; {</span></span>
<span class="line"><span>        table.selectKeys = selectKeys</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    const pageChange = (data) =&gt; {</span></span>
<span class="line"><span>        page.pageIndex = data.current</span></span>
<span class="line"><span>        page.pageSize = data.pageSize</span></span>
<span class="line"><span>        getTableList()</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    const deleteItem = (id) =&gt; {</span></span>
<span class="line"><span>        console.log(&#39;id &#39;, id)</span></span>
<span class="line"><span>        message.success(&#39;删除成功&#39;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // try {</span></span>
<span class="line"><span>        //     const resp = await deleteItemApi(id)</span></span>
<span class="line"><span>        //     if (resp.success) {</span></span>
<span class="line"><span>        //         message.success(&#39;删除成功&#39;)</span></span>
<span class="line"><span>        //         getTableList() // 重新请求数据 (分页与检索条件不变)</span></span>
<span class="line"><span>        //     } else {</span></span>
<span class="line"><span>        //         message.error(resp.msg)</span></span>
<span class="line"><span>        //     }</span></span>
<span class="line"><span>        // } catch (err) {</span></span>
<span class="line"><span>        //     console.log(err)</span></span>
<span class="line"><span>        // }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    onMounted(() =&gt; {</span></span>
<span class="line"><span>        getTableList()</span></span>
<span class="line"><span>    })</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    return { page, table, onSelectChange, pageChange, deleteItem }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>const { page, table, onSelectChange, pageChange, deleteItem } = handleTable()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;style lang=&quot;less&quot; scoped&gt;</span></span>
<span class="line"><span>.baseInfo {</span></span>
<span class="line"><span>    background-color: #fff;</span></span>
<span class="line"><span>    border: 1px solid #c1c3c7;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    .top {</span></span>
<span class="line"><span>        display: flex;</span></span>
<span class="line"><span>        justify-content: space-between;</span></span>
<span class="line"><span>        padding: 15px;</span></span>
<span class="line"><span>        background-color: #f0f2f5;</span></span>
<span class="line"><span>        border-bottom: 1px solid #c1c3c7;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    .table {</span></span>
<span class="line"><span>        width: 100%;</span></span>
<span class="line"><span>        padding: 30px;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    .content-wrap {</span></span>
<span class="line"><span>        display: flex;</span></span>
<span class="line"><span>        flex-wrap: wrap;</span></span>
<span class="line"><span>        padding: 30px;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        .content {</span></span>
<span class="line"><span>            display: flex;</span></span>
<span class="line"><span>            margin-top: -1px;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            .title {</span></span>
<span class="line"><span>                flex: 2;</span></span>
<span class="line"><span>                display: flex;</span></span>
<span class="line"><span>                align-items: center;</span></span>
<span class="line"><span>                height: 40px;</span></span>
<span class="line"><span>                padding-left: 20px;</span></span>
<span class="line"><span>                margin-left: -1px;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                color: #000;</span></span>
<span class="line"><span>                background-color: #f0f2f5;</span></span>
<span class="line"><span>                border: 1px solid #c1c3c7;</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>            .text {</span></span>
<span class="line"><span>                flex: 3;</span></span>
<span class="line"><span>                height: 40px;</span></span>
<span class="line"><span>                margin-left: -1px;</span></span>
<span class="line"><span>                padding: 0 20px;</span></span>
<span class="line"><span>                line-height: 40px;</span></span>
<span class="line"><span>                color: #000;</span></span>
<span class="line"><span>                background-color: #fff;</span></span>
<span class="line"><span>                border: 1px solid #c1c3c7;</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&lt;/style&gt;</span></span></code></pre></div>`,1),i=[e];function t(c,o,r,d,u,g){return a(),s("div",null,i)}const b=n(l,[["render",t]]);export{f as __pageData,b as default};
