import{_ as n,c as s,o as a,U as p}from"./chunks/framework.FpOEJISx.js";const b=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"public/static/_file/md/demo/table/antTable08.md","filePath":"public/static/_file/md/demo/table/antTable08.md"}'),e={name:"public/static/_file/md/demo/table/antTable08.md"},l=p(`<div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>    &lt;div&gt;</span></span>
<span class="line"><span>        &lt;div&gt;</span></span>
<span class="line"><span>            &lt;Spin :spinning=&quot;publicInfo.spinning&quot; tip=&quot;Loading...&quot;&gt;</span></span>
<span class="line"><span>                &lt;Table</span></span>
<span class="line"><span>                    :loading=&quot;table.loading&quot;</span></span>
<span class="line"><span>                    :data-source=&quot;table.list&quot;</span></span>
<span class="line"><span>                    :columns=&quot;table.columns&quot;</span></span>
<span class="line"><span>                    :bordered=&quot;true&quot;</span></span>
<span class="line"><span>                    size=&quot;small&quot;</span></span>
<span class="line"><span>                    rowKey=&quot;id&quot;</span></span>
<span class="line"><span>                    style=&quot;width: 100%; background: border-box;&quot;</span></span>
<span class="line"><span>                    :rowSelection=&quot;{ onChange: onSelectChange }&quot;</span></span>
<span class="line"><span>                    :pagination=&quot;{</span></span>
<span class="line"><span>                        current: page.pageIndex,</span></span>
<span class="line"><span>                        pageSize: page.pageSize,</span></span>
<span class="line"><span>                        total: table.total,</span></span>
<span class="line"><span>                    }&quot;</span></span>
<span class="line"><span>                    @change=&quot;pageChange&quot;</span></span>
<span class="line"><span>                &gt;</span></span>
<span class="line"><span>                    &lt;template #bodyCell=&quot;{ record, column, index }&quot;&gt;</span></span>
<span class="line"><span>                        &lt;template v-if=&quot;column.dataIndex === &#39;opts&#39;&quot;&gt;</span></span>
<span class="line"><span>                            &lt;Space&gt;</span></span>
<span class="line"><span>                                &lt;Popconfirm @confirm=&quot;deleteItem(record.id)&quot; title=&quot;确定删除?&quot; okText=&quot;删除&quot;&gt;</span></span>
<span class="line"><span>                                    &lt;Button size=&quot;small&quot; danger @click.stop&gt;删除&lt;/Button&gt;</span></span>
<span class="line"><span>                                &lt;/Popconfirm&gt;</span></span>
<span class="line"><span>                            &lt;/Space&gt;</span></span>
<span class="line"><span>                        &lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                        &lt;template v-if=&quot;column.dataIndex === &#39;index&#39;&quot;&gt;</span></span>
<span class="line"><span>                            &lt;Space&gt;</span></span>
<span class="line"><span>                                {{ (page.pageIndex - 1) * page.pageSize + Number(index) + 1 }}</span></span>
<span class="line"><span>                            &lt;/Space&gt;</span></span>
<span class="line"><span>                        &lt;/template&gt;</span></span>
<span class="line"><span>                    &lt;/template&gt;</span></span>
<span class="line"><span>                &lt;/Table&gt;</span></span>
<span class="line"><span>            &lt;/Spin&gt;</span></span>
<span class="line"><span>        &lt;/div&gt;</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script lang=&quot;ts&quot; setup&gt;</span></span>
<span class="line"><span>import { reactive, onMounted } from &#39;vue&#39;</span></span>
<span class="line"><span>import { Spin, Space, Table, Popconfirm, Button, message } from &#39;ant-design-vue&#39;</span></span>
<span class="line"><span>import type { ColumnType } from &#39;ant-design-vue/lib/table&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// import { getTableListApi, deleteItemApi } from &#39;@/api/request.ts&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>// TS</span></span>
<span class="line"><span>type PageChangeData = {</span></span>
<span class="line"><span>    current: number;</span></span>
<span class="line"><span>    pageSize: number;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>type OptionItem = {</span></span>
<span class="line"><span>    label: string,</span></span>
<span class="line"><span>    value: number,</span></span>
<span class="line"><span>    data?: any,</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>type Table = {</span></span>
<span class="line"><span>    loading: boolean;</span></span>
<span class="line"><span>    total: number;</span></span>
<span class="line"><span>    list: any[]; // 这里可以替换为具体的类型</span></span>
<span class="line"><span>    selectKeys: any[]; // 这里可以替换为具体的类型</span></span>
<span class="line"><span>    columns: any;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// interface TableColumn {</span></span>
<span class="line"><span>//     title: string;</span></span>
<span class="line"><span>//     key: string;</span></span>
<span class="line"><span>//     dataIndex: string;</span></span>
<span class="line"><span>//     align: string;</span></span>
<span class="line"><span>//     width: string;</span></span>
<span class="line"><span>//     customFilterDropdown?: boolean;</span></span>
<span class="line"><span>// }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>type TableItem = {</span></span>
<span class="line"><span>    id: number | string | null,</span></span>
<span class="line"><span>    equipmentName: string | null, // 设备名称</span></span>
<span class="line"><span>    equipmentModel: string | null, // 设备型号</span></span>
<span class="line"><span>    equipmentNum: number | null, // 设备数量</span></span>
<span class="line"><span>    equipmentSpecification: string | null, // 设备规格</span></span>
<span class="line"><span>    // equipmentUnitPrice: number | null, // 单价</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>// TODO</span></span>
<span class="line"><span>const publicInfo = reactive({</span></span>
<span class="line"><span>    spinning: false,</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span></span></span>
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
<span class="line"><span>        selectKeys: [] as (number | string)[],</span></span>
<span class="line"><span>        columns: [</span></span>
<span class="line"><span>            { title: &#39;序号&#39;, key: &#39;index&#39;, dataIndex: &#39;index&#39;, align: &#39;center&#39;, width: &#39;10%&#39; },</span></span>
<span class="line"><span>            { title: &#39;设施名称&#39;, key: &#39;equipmentName&#39;, dataIndex: &#39;equipmentName&#39;, align: &#39;center&#39;, width: &#39;25%&#39; },</span></span>
<span class="line"><span>            { title: &#39;设备型号&#39;, key: &#39;equipmentModel&#39;, dataIndex: &#39;equipmentModel&#39;, align: &#39;center&#39;, width: &#39;25%&#39; },</span></span>
<span class="line"><span>            { title: &#39;设备数量&#39;, key: &#39;equipmentNum&#39;, dataIndex: &#39;equipmentNum&#39;, align: &#39;center&#39;, width: &#39;25%&#39; },</span></span>
<span class="line"><span>            { title: &#39;设备规格&#39;, key: &#39;equipmentSpecification&#39;, dataIndex: &#39;equipmentSpecification&#39;, align: &#39;center&#39;, width: &#39;25%&#39; },</span></span>
<span class="line"><span>            { title: &#39;操作&#39;, dataIndex: &#39;opts&#39;, align: &#39;center&#39;, key: &#39;opts&#39;, width: &#39;12%&#39; },</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        ] as ColumnType[],</span></span>
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
<span class="line"><span>            // table.list = resp.data.map((item: TableItem) =&gt; {</span></span>
<span class="line"><span>            //     return {</span></span>
<span class="line"><span>            //         id: item.id,</span></span>
<span class="line"><span>            //         stationName: item.stationName,</span></span>
<span class="line"><span>            //     }</span></span>
<span class="line"><span>            // })</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            table.list = [</span></span>
<span class="line"><span>                {</span></span>
<span class="line"><span>                    id: &#39;1&#39;,</span></span>
<span class="line"><span>                    equipmentName: &#39;设备名称&#39;,</span></span>
<span class="line"><span>                    equipmentModel: &#39;设备型号&#39;,</span></span>
<span class="line"><span>                    equipmentNum: 24,</span></span>
<span class="line"><span>                    equipmentSpecification: &#39;设备规格&#39;,</span></span>
<span class="line"><span>                } as TableItem,</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                {</span></span>
<span class="line"><span>                    id: &#39;2&#39;,</span></span>
<span class="line"><span>                    equipmentName: &#39;设备名称&#39;,</span></span>
<span class="line"><span>                    equipmentModel: &#39;设备型号&#39;,</span></span>
<span class="line"><span>                    equipmentNum: 24,</span></span>
<span class="line"><span>                    equipmentSpecification: &#39;设备规格&#39;,</span></span>
<span class="line"><span>                } as TableItem,</span></span>
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
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;style scoped&gt;</span></span>
<span class="line"><span>/* @import &quot;/src/assets/css/common.css&quot;; */</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;/style&gt;</span></span></code></pre></div>`,1),t=[l];function i(c,o,u,g,r,d){return a(),s("div",null,t)}const q=n(e,[["render",i]]);export{b as __pageData,q as default};
