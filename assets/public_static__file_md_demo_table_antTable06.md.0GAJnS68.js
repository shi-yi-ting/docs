import{_ as n,c as s,o as a,U as p}from"./chunks/framework.FpOEJISx.js";const b=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"public/static/_file/md/demo/table/antTable06.md","filePath":"public/static/_file/md/demo/table/antTable06.md"}'),l={name:"public/static/_file/md/demo/table/antTable06.md"},e=p(`<div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>    &lt;div&gt;</span></span>
<span class="line"><span>        &lt;Table</span></span>
<span class="line"><span>            :loading=&quot;table.loading&quot;</span></span>
<span class="line"><span>            :data-source=&quot;table.list&quot;</span></span>
<span class="line"><span>            :columns=&quot;table.columns&quot;</span></span>
<span class="line"><span>            :bordered=&quot;true&quot;</span></span>
<span class="line"><span>            size=&quot;small&quot;</span></span>
<span class="line"><span>            rowKey=&quot;id&quot;</span></span>
<span class="line"><span>            style=&quot;width: 100%; background: border-box;&quot;</span></span>
<span class="line"><span>            :pagination=&quot;false&quot;</span></span>
<span class="line"><span>            :scroll=&quot;{ y: 500 }&quot;</span></span>
<span class="line"><span>            @change=&quot;pageChange&quot;</span></span>
<span class="line"><span>        &gt;</span></span>
<span class="line"><span>            &lt;template #bodyCell=&quot;{ record, text, column, index }&quot;&gt;</span></span>
<span class="line"><span>                &lt;template v-if=&quot;column.dataIndex === &#39;index&#39;&quot;&gt;</span></span>
<span class="line"><span>                    &lt;Space&gt;</span></span>
<span class="line"><span>                        {{ Number(index) + 1 }}</span></span>
<span class="line"><span>                    &lt;/Space&gt;</span></span>
<span class="line"><span>                &lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                &lt;template v-if=&quot;column.dataIndex === &#39;faciliityName&#39;&quot;&gt;</span></span>
<span class="line"><span>                    &lt;span v-if=&quot;record.rowspan !== undefined&quot; :rowspan=&quot;record.rowspan&quot;&gt;{{ text }}&lt;/span&gt;</span></span>
<span class="line"><span>                    &lt;span v-else&gt;{{ text }}&lt;/span&gt;</span></span>
<span class="line"><span>                &lt;/template&gt;</span></span>
<span class="line"><span>                &lt;template v-else&gt;</span></span>
<span class="line"><span>                    {{ text }}</span></span>
<span class="line"><span>                &lt;/template&gt;</span></span>
<span class="line"><span>            &lt;/template&gt;</span></span>
<span class="line"><span>        &lt;/Table&gt;</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script lang=&quot;ts&quot; setup&gt;</span></span>
<span class="line"><span>import {</span></span>
<span class="line"><span>    Layout,</span></span>
<span class="line"><span>    LayoutSider,</span></span>
<span class="line"><span>    LayoutHeader,</span></span>
<span class="line"><span>    LayoutContent,</span></span>
<span class="line"><span>    Modal,</span></span>
<span class="line"><span>    Button,</span></span>
<span class="line"><span>    Spin,</span></span>
<span class="line"><span>    Space,</span></span>
<span class="line"><span>    Popconfirm,</span></span>
<span class="line"><span>    Table,</span></span>
<span class="line"><span>    Input,</span></span>
<span class="line"><span>    message,</span></span>
<span class="line"><span>    Select,</span></span>
<span class="line"><span>    SelectOption</span></span>
<span class="line"><span>} from &#39;ant-design-vue&#39;</span></span>
<span class="line"><span>import { ref, reactive, onMounted } from &#39;vue&#39;</span></span>
<span class="line"><span>import type { ColumnType } from &#39;ant-design-vue/lib/table&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>// TS</span></span>
<span class="line"><span>interface PageChangeData {</span></span>
<span class="line"><span>    current: number;</span></span>
<span class="line"><span>    pageSize: number;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>type TableItem = {</span></span>
<span class="line"><span>    &quot;id&quot;: string | null,</span></span>
<span class="line"><span>    &quot;faciliityName&quot;: string | null, // 图纸类型</span></span>
<span class="line"><span>    &quot;quotaTypeName&quot;: string | null, // 会签内容</span></span>
<span class="line"><span>    &quot;recentNumber&quot;: string | null, // 默认值</span></span>
<span class="line"><span>    &quot;forwardNumber&quot;: string | null, // 会签意见</span></span>
<span class="line"><span>    &quot;forwardNumber02&quot;: string | null, // 是否通过</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>// TODO</span></span>
<span class="line"><span>// 表格</span></span>
<span class="line"><span>function handleTable() {</span></span>
<span class="line"><span>    // 分页</span></span>
<span class="line"><span>    const page = reactive({</span></span>
<span class="line"><span>        pageIndex: 1,</span></span>
<span class="line"><span>        pageSize: 10,</span></span>
<span class="line"><span>    })</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 合并逻辑</span></span>
<span class="line"><span>    const mergeCell = (record, rowIndex, column) =&gt; {</span></span>
<span class="line"><span>        if (record) {</span></span>
<span class="line"><span>            let firstindex = table.list.findIndex((nd) =&gt; {</span></span>
<span class="line"><span>                return nd[column.key] === record[column.key]</span></span>
<span class="line"><span>            })</span></span>
<span class="line"><span>            if (rowIndex === firstindex) {</span></span>
<span class="line"><span>                let rowspanLength = table.list.filter((nd) =&gt; {</span></span>
<span class="line"><span>                    return nd[column.key] === record[column.key]</span></span>
<span class="line"><span>                }).length</span></span>
<span class="line"><span>                return { rowSpan: rowspanLength };</span></span>
<span class="line"><span>            } else {</span></span>
<span class="line"><span>                    return { colSpan: 0 };</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 表格</span></span>
<span class="line"><span>    const table = reactive({</span></span>
<span class="line"><span>        loading: false,</span></span>
<span class="line"><span>        total: 0,</span></span>
<span class="line"><span>        list: [] as TableItem[],</span></span>
<span class="line"><span>        selectKeys: [] as (number | string)[],</span></span>
<span class="line"><span>        columns: [</span></span>
<span class="line"><span>            { title: &#39;序号&#39;, key: &#39;index&#39;, dataIndex: &#39;index&#39;, align: &#39;center&#39;, width: &#39;6%&#39; },</span></span>
<span class="line"><span>            { title: &#39;图纸类型&#39;, key: &#39;faciliityName&#39;, dataIndex: &#39;faciliityName&#39;, align: &#39;center&#39;, width: &#39;10%&#39;, customCell: mergeCell },</span></span>
<span class="line"><span>            { title: &#39;会签内容&#39;, key: &#39;quotaTypeName&#39;, dataIndex: &#39;quotaTypeName&#39;, align: &#39;center&#39;, width: &#39;15%&#39; },</span></span>
<span class="line"><span>            { title: &#39;默认值&#39;, key: &#39;recentNumber&#39;, dataIndex: &#39;recentNumber&#39;, align: &#39;center&#39;, width: &#39;10%&#39; },</span></span>
<span class="line"><span>            { title: &#39;会签意见&#39;, key: &#39;forwardNumber&#39;, dataIndex: &#39;forwardNumber&#39;, align: &#39;center&#39;, width: &#39;15%&#39; },</span></span>
<span class="line"><span>            { title: &#39;是否通过&#39;, key: &#39;forwardNumber02&#39;, dataIndex: &#39;forwardNumber02&#39;, align: &#39;center&#39;, width: &#39;15%&#39; },</span></span>
<span class="line"><span>        ] as ColumnType[],</span></span>
<span class="line"><span>    })</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 获取表格数据</span></span>
<span class="line"><span>    const getTableList = async () =&gt; {</span></span>
<span class="line"><span>        try {</span></span>
<span class="line"><span>            // const params = {</span></span>
<span class="line"><span>            //     simpleId: props.simpleId</span></span>
<span class="line"><span>            // }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            table.loading = true</span></span>
<span class="line"><span>            table.total = 0</span></span>
<span class="line"><span>            let list = [</span></span>
<span class="line"><span>                {</span></span>
<span class="line"><span>                    id: &#39;1&#39;,</span></span>
<span class="line"><span>                    faciliityName: &#39;站台层平面图&#39;,</span></span>
<span class="line"><span>                    quotaTypeName: &#39;站台边缘至轨道中心线距离&#39;,</span></span>
<span class="line"><span>                    recentNumber: &#39;1600&#39;,</span></span>
<span class="line"><span>                    forwardNumber: &#39;&#39;,</span></span>
<span class="line"><span>                    forwardNumber02: &#39;是&#39;,</span></span>
<span class="line"><span>                },</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                {</span></span>
<span class="line"><span>                    id: &#39;3&#39;,</span></span>
<span class="line"><span>                    faciliityName: &#39;站台层平面图&#39;,</span></span>
<span class="line"><span>                    quotaTypeName: &#39;有效站台外站台边缘距线路中心线距离&#39;,</span></span>
<span class="line"><span>                    recentNumber: &#39;1750&#39;,</span></span>
<span class="line"><span>                    forwardNumber: &#39;&#39;,</span></span>
<span class="line"><span>                    forwardNumber02: &#39;&#39;,</span></span>
<span class="line"><span>                },</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                {</span></span>
<span class="line"><span>                    id: &#39;3&#39;,</span></span>
<span class="line"><span>                    faciliityName: &#39;站台层平面图&#39;,</span></span>
<span class="line"><span>                    quotaTypeName: &#39;有效站台外站台边缘距线路中心线距离&#39;,</span></span>
<span class="line"><span>                    recentNumber: &#39;1750&#39;,</span></span>
<span class="line"><span>                    forwardNumber: &#39;&#39;,</span></span>
<span class="line"><span>                    forwardNumber02: &#39;&#39;,</span></span>
<span class="line"><span>                },</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                {</span></span>
<span class="line"><span>                    id: &#39;2&#39;,</span></span>
<span class="line"><span>                    faciliityName: &#39;站台层平面图111&#39;,</span></span>
<span class="line"><span>                    quotaTypeName: &#39;站台对侧构筑物至轨道中心线距离&#39;,</span></span>
<span class="line"><span>                    recentNumber: &#39;2250&#39;,</span></span>
<span class="line"><span>                    forwardNumber: &#39;&#39;,</span></span>
<span class="line"><span>                    forwardNumber02: &#39;&#39;,</span></span>
<span class="line"><span>                },</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                {</span></span>
<span class="line"><span>                    id: &#39;4&#39;,</span></span>
<span class="line"><span>                    faciliityName: &#39;站台层平面图222&#39;,</span></span>
<span class="line"><span>                    quotaTypeName: &#39;有效站台外站台边缘距线路中心线距离&#39;,</span></span>
<span class="line"><span>                    recentNumber: &#39;1750&#39;,</span></span>
<span class="line"><span>                    forwardNumber: &#39;&#39;,</span></span>
<span class="line"><span>                    forwardNumber02: &#39;&#39;,</span></span>
<span class="line"><span>                },</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                 {</span></span>
<span class="line"><span>                    id: &#39;1&#39;,</span></span>
<span class="line"><span>                    faciliityName: &#39;站台层平面图222&#39;,</span></span>
<span class="line"><span>                    quotaTypeName: &#39;站台边缘至轨道中心线距离&#39;,</span></span>
<span class="line"><span>                    recentNumber: &#39;1600&#39;,</span></span>
<span class="line"><span>                    forwardNumber: &#39;&#39;,</span></span>
<span class="line"><span>                    forwardNumber02: &#39;是&#39;,</span></span>
<span class="line"><span>                },</span></span>
<span class="line"><span>            ]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            table.list = list.sort((a: any, b: any) =&gt; {</span></span>
<span class="line"><span>                if (a.faciliityName !== b.faciliityName) {</span></span>
<span class="line"><span>                    // return a.faciliityName - b.faciliityName</span></span>
<span class="line"><span>                    return a.faciliityName.localeCompare(b.faciliityName);</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>            })</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            // const resp = await getGenerlddeawSimpleProgrammeDeviceApi(params)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            // table.total = resp.data?.total</span></span>
<span class="line"><span>            // table.list = resp.data.map((item: TableItem) =&gt; item)</span></span>
<span class="line"><span>            table.loading = false</span></span>
<span class="line"><span>        } catch (err) {</span></span>
<span class="line"><span>            console.error(err)</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    const pageChange = (data: PageChangeData) =&gt; {</span></span>
<span class="line"><span>        page.pageIndex = data.current</span></span>
<span class="line"><span>        page.pageSize = data.pageSize</span></span>
<span class="line"><span>        getTableList()</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    onMounted(() =&gt; {</span></span>
<span class="line"><span>        getTableList()</span></span>
<span class="line"><span>    })</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    return { table, pageChange, getTableList }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>const { table, pageChange, getTableList } = handleTable()</span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;style lang=&quot;scss&quot; scoped&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;/style&gt;</span></span></code></pre></div>`,1),i=[e];function t(c,r,o,u,d,m){return a(),s("div",null,i)}const f=n(l,[["render",t]]);export{b as __pageData,f as default};
