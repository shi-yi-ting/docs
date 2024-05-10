import{_ as n,c as s,o as a,U as p}from"./chunks/framework.FpOEJISx.js";const q=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"public/static/_file/md/demo/table/antTable05.md","filePath":"public/static/_file/md/demo/table/antTable05.md"}'),e={name:"public/static/_file/md/demo/table/antTable05.md"},l=p(`<div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>    &lt;div class=&quot;mt15&quot;&gt;</span></span>
<span class="line"><span>        &lt;div class=&quot;select-wrap&quot;&gt;</span></span>
<span class="line"><span>            &lt;div class=&quot;mr15&quot;&gt;</span></span>
<span class="line"><span>                &lt;span class=&quot;mr15&quot;&gt;设施名称:&lt;/span&gt;</span></span>
<span class="line"><span>                &lt;Input v-model:value=&quot;inputData.maintenanceFacilityName&quot; :allowClear=&quot;true&quot; class=&quot;width_160&quot; /&gt;</span></span>
<span class="line"><span>            &lt;/div&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            &lt;div class=&quot;mr15&quot;&gt;</span></span>
<span class="line"><span>                &lt;span class=&quot;mr15&quot;&gt;所属地区:&lt;/span&gt;</span></span>
<span class="line"><span>                &lt;Input v-model:value=&quot;inputData.area&quot; :allowClear=&quot;true&quot; class=&quot;width_160&quot; /&gt;</span></span>
<span class="line"><span>            &lt;/div&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            &lt;Button type=&quot;primary&quot; style=&quot;width: 90px&quot; @click=&quot;search&quot;&gt;搜索&lt;/Button&gt;</span></span>
<span class="line"><span>        &lt;/div&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        &lt;Spin :spinning=&quot;publicInfo.spinning&quot; tip=&quot;Loading...&quot;&gt;</span></span>
<span class="line"><span>            &lt;Table :loading=&quot;table.loading&quot; :data-source=&quot;table.list&quot; :columns=&quot;table.columns&quot; :bordered=&quot;true&quot; size=&quot;small&quot; rowKey=&quot;id&quot; style=&quot;width: 100%; background: border-box;&quot; :rowSelection=&quot;{ onChange: onSelectChange }&quot; :pagination=&quot;{</span></span>
<span class="line"><span>                    current: page.pageIndex,</span></span>
<span class="line"><span>                    pageSize: page.pageSize,</span></span>
<span class="line"><span>                    total: table.total,</span></span>
<span class="line"><span>                }&quot; @change=&quot;pageChange&quot;&gt;</span></span>
<span class="line"><span>                &lt;template #customFilterDropdown=&quot;{ setSelectedKeys, selectedKeys, confirm, clearFilters, column }&quot;&gt;</span></span>
<span class="line"><span>                    &lt;div style=&quot;padding: 8px&quot;&gt;</span></span>
<span class="line"><span>                        &lt;Input ref=&quot;searchInput&quot; :placeholder=&quot;\`搜索 \${column.title}\`&quot; :value=&quot;selectedKeys[0]&quot; style=&quot;width: 188px; margin-bottom: 8px; display: block&quot; @change=&quot;e =&gt; setSelectedKeys(e.target.value ? [e.target.value] : [])&quot; @pressEnter=&quot;handleSearch(selectedKeys, confirm, column.dataIndex)&quot; /&gt;</span></span>
<span class="line"><span>                        &lt;Button type=&quot;primary&quot; size=&quot;small&quot; style=&quot;width: 90px; margin-right: 8px&quot; @click=&quot;handleSearch(selectedKeys, confirm, column.dataIndex)&quot;&gt;</span></span>
<span class="line"><span>                            &lt;template #icon&gt;</span></span>
<span class="line"><span>                                &lt;SearchOutlined /&gt;</span></span>
<span class="line"><span>                            &lt;/template&gt;搜索</span></span>
<span class="line"><span>                        &lt;/Button&gt;</span></span>
<span class="line"><span>                        &lt;Button size=&quot;small&quot; style=&quot;width: 90px&quot; @click=&quot;handleReset(clearFilters)&quot;&gt;</span></span>
<span class="line"><span>                            重置</span></span>
<span class="line"><span>                        &lt;/Button&gt;</span></span>
<span class="line"><span>                    &lt;/div&gt;</span></span>
<span class="line"><span>                &lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                &lt;template #customFilterIcon=&quot;{ filtered }&quot;&gt;</span></span>
<span class="line"><span>                    &lt;search-outlined :style=&quot;{ color: filtered ? &#39;#108ee9&#39; : undefined }&quot; /&gt;</span></span>
<span class="line"><span>                &lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>                &lt;template #bodyCell=&quot;{ record, text, column, index }&quot;&gt;</span></span>
<span class="line"><span>                    &lt;template v-if=&quot;column.dataIndex === &#39;opts&#39;&quot;&gt;</span></span>
<span class="line"><span>                        &lt;Space&gt;</span></span>
<span class="line"><span>                            &lt;Popconfirm title=&quot;确定删除?&quot; okText=&quot;删除&quot; @confirm=&quot;deleteItem(record.id)&quot;&gt;</span></span>
<span class="line"><span>                                &lt;Button size=&quot;small&quot; danger @click.stop&gt;删除&lt;/Button&gt;</span></span>
<span class="line"><span>                            &lt;/Popconfirm&gt;</span></span>
<span class="line"><span>                        &lt;/Space&gt;</span></span>
<span class="line"><span>                    &lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                    &lt;template v-if=&quot;column.dataIndex === &#39;index&#39;&quot;&gt;</span></span>
<span class="line"><span>                        &lt;Space&gt;</span></span>
<span class="line"><span>                            {{ (page.pageIndex - 1) * page.pageSize + Number(index) + 1 }}</span></span>
<span class="line"><span>                        &lt;/Space&gt;</span></span>
<span class="line"><span>                    &lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                    &lt;template v-else-if=&quot;column.key === &#39;updatedAt&#39;&quot;&gt;</span></span>
<span class="line"><span>                        {{ dayjs(text).format(&quot;YY/MM/DD HH:mm:ss&quot;) }}</span></span>
<span class="line"><span>                    &lt;/template&gt;</span></span>
<span class="line"><span>                &lt;/template&gt;</span></span>
<span class="line"><span>            &lt;/Table&gt;</span></span>
<span class="line"><span>        &lt;/Spin&gt;</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script lang=&quot;ts&quot; setup&gt;</span></span>
<span class="line"><span>import { ref, reactive, onMounted } from &#39;vue&#39;</span></span>
<span class="line"><span>import { Spin, Space, Table, Popconfirm, Button, Select, SelectOption, Input, message } from &#39;ant-design-vue&#39;</span></span>
<span class="line"><span>import { SearchOutlined } from &#39;@ant-design/icons-vue&#39;;</span></span>
<span class="line"><span>import dayjs, { Dayjs } from &#39;dayjs&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// import { getTableListApi, deleteItemApi } from &#39;@/api/request.ts&#39;</span></span>
<span class="line"><span>import { maintenanceFacilitiesDataList } from &#39;./_js/data.js&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>// TODO</span></span>
<span class="line"><span>const publicInfo = reactive({</span></span>
<span class="line"><span>    spinning: false,</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 输入框</span></span>
<span class="line"><span>const inputData = reactive({</span></span>
<span class="line"><span>    maintenanceFacilityName: &#39;&#39;,</span></span>
<span class="line"><span>    area: &#39;&#39;,</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 表格</span></span>
<span class="line"><span>const totalList = ref([])</span></span>
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
<span class="line"><span>            {</span></span>
<span class="line"><span>                title: &#39;设施名称&#39;,</span></span>
<span class="line"><span>                key: &#39;maintenanceFacilityName&#39;,</span></span>
<span class="line"><span>                dataIndex: &#39;maintenanceFacilityName&#39;,</span></span>
<span class="line"><span>                width: 120,</span></span>
<span class="line"><span>                customFilterDropdown: true,</span></span>
<span class="line"><span>                onFilter: (value, record) =&gt; record.maintenanceFacilityName.toString().toLowerCase().includes(value.toLowerCase()),</span></span>
<span class="line"><span>                onFilterDropdownOpenChange: visible =&gt; {</span></span>
<span class="line"><span>                    if (visible) {</span></span>
<span class="line"><span>                        setTimeout(() =&gt; {</span></span>
<span class="line"><span>                            searchInput.value.focus();</span></span>
<span class="line"><span>                        }, 100);</span></span>
<span class="line"><span>                    }</span></span>
<span class="line"><span>                },</span></span>
<span class="line"><span>            },</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            {</span></span>
<span class="line"><span>                title: &#39;所属路局&#39;,</span></span>
<span class="line"><span>                key: &#39;roadBureau&#39;,</span></span>
<span class="line"><span>                dataIndex: &#39;roadBureau&#39;,</span></span>
<span class="line"><span>                width: 120,</span></span>
<span class="line"><span>                filterSearch: true,</span></span>
<span class="line"><span>                filters: [],</span></span>
<span class="line"><span>                sorter: { compare: (a, b) =&gt; a.roadBureau?.localeCompare(b.roadBureau), multiple: 1 },</span></span>
<span class="line"><span>                onFilter: (v, record) =&gt; record.roadBureau === v,</span></span>
<span class="line"><span>            },</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            {</span></span>
<span class="line"><span>                title: &#39;所属地区&#39;,</span></span>
<span class="line"><span>                key: &#39;area&#39;,</span></span>
<span class="line"><span>                dataIndex: &#39;area&#39;,</span></span>
<span class="line"><span>                width: 120,</span></span>
<span class="line"><span>                filterSearch: true,</span></span>
<span class="line"><span>                filters: [],</span></span>
<span class="line"><span>                sorter: { compare: (a, b) =&gt; a.area.localeCompare(b.area), multiple: 2 },</span></span>
<span class="line"><span>                onFilter: (v, record) =&gt; record.area === v,</span></span>
<span class="line"><span>            },</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            {</span></span>
<span class="line"><span>                title: &#39;检修设施类型&#39;,</span></span>
<span class="line"><span>                key: &#39;maintenanceFacilityType&#39;,</span></span>
<span class="line"><span>                dataIndex: &#39;maintenanceFacilityType&#39;,</span></span>
<span class="line"><span>                width: 140,</span></span>
<span class="line"><span>                filterSearch: true,</span></span>
<span class="line"><span>                filters: [],</span></span>
<span class="line"><span>                onFilter: (v, record) =&gt; record.maintenanceFacilityType === v</span></span>
<span class="line"><span>            },</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            { title: &#39;上次更新时间&#39;, key: &#39;updatedAt&#39;, dataIndex: &#39;updatedAt&#39;, width: 140, },</span></span>
<span class="line"><span>            { title: &#39;操作&#39;, key: &#39;opts&#39;, dataIndex: &#39;opts&#39;, width: 60, },</span></span>
<span class="line"><span>        ],</span></span>
<span class="line"><span>    })</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 获取表格数据</span></span>
<span class="line"><span>    const getTableList = () =&gt; {</span></span>
<span class="line"><span>        const needFilterFields = [</span></span>
<span class="line"><span>            &#39;roadBureau&#39;,</span></span>
<span class="line"><span>            &#39;area&#39;,</span></span>
<span class="line"><span>            &#39;maintenanceFacilityName&#39;,</span></span>
<span class="line"><span>            &#39;maintenanceFacilityType&#39;,</span></span>
<span class="line"><span>            &#39;junctionStation&#39;,</span></span>
<span class="line"><span>            &#39;status&#39;,</span></span>
<span class="line"><span>            &#39;property&#39;,</span></span>
<span class="line"><span>        ]</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>        try {</span></span>
<span class="line"><span>            // const params = {</span></span>
<span class="line"><span>            //     searchName: &#39;&#39;,</span></span>
<span class="line"><span>            // }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            table.loading = true</span></span>
<span class="line"><span>            table.total = 0</span></span>
<span class="line"><span>            table.list = []</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            //  const resp = await maintenanceFacilitiesApi(params)</span></span>
<span class="line"><span>            //  if (resp.success) {</span></span>
<span class="line"><span>            //     table.list = resp.data.map(item =&gt; item)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            //     resp.data?.forEach(item =&gt; {</span></span>
<span class="line"><span>            //         needFilterFields.forEach(key =&gt; {</span></span>
<span class="line"><span>            //             const k = item</span></span>
<span class="line"><span>            //             const v = item[k]?.toString()</span></span>
<span class="line"><span>            //             table.columns.filter(c =&gt; c.key === k).forEach(c =&gt; {</span></span>
<span class="line"><span>            //                 if(c.filters?.every(kv =&gt; kv.text !== v)) {</span></span>
<span class="line"><span>            //                     c.filters.push({ text: v, value: v })</span></span>
<span class="line"><span>            //                 }</span></span>
<span class="line"><span>            //             })</span></span>
<span class="line"><span>            //         })</span></span>
<span class="line"><span>            //     })</span></span>
<span class="line"><span>            // }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            totalList.value = maintenanceFacilitiesDataList</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            table.list = totalList.value</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            // ts</span></span>
<span class="line"><span>            maintenanceFacilitiesDataList?.forEach((item) =&gt; {</span></span>
<span class="line"><span>                needFilterFields.forEach((key) =&gt; {</span></span>
<span class="line"><span>                    const k = key as keyof typeof item</span></span>
<span class="line"><span>                    const v = item[k]?.toString()</span></span>
<span class="line"><span>                    table.columns.filter((c) =&gt; c.key === k).forEach((c) =&gt; {</span></span>
<span class="line"><span>                        if (c.filters?.every((kv) =&gt; kv.text !== v)) {</span></span>
<span class="line"><span>                            c.filters.push({ text: v!, value: v! })</span></span>
<span class="line"><span>                        }</span></span>
<span class="line"><span>                    })</span></span>
<span class="line"><span>                })</span></span>
<span class="line"><span>            })</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>            // js</span></span>
<span class="line"><span>            // maintenanceFacilitiesDataList?.forEach((item) =&gt; {</span></span>
<span class="line"><span>            //     needFilterFields.forEach((key) =&gt; {</span></span>
<span class="line"><span>            //         const k = key</span></span>
<span class="line"><span>            //         const v = item[k]?.toString()</span></span>
<span class="line"><span>            //         table.columns.filter((c) =&gt; c.key === k).forEach((c) =&gt; {</span></span>
<span class="line"><span>            //             if (c.filters?.every((kv) =&gt; kv.text !== v)) {</span></span>
<span class="line"><span>            //                 c.filters.push({ text: v, value: v })</span></span>
<span class="line"><span>            //             }</span></span>
<span class="line"><span>            //         })</span></span>
<span class="line"><span>            //     })</span></span>
<span class="line"><span>            // })</span></span>
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
<span class="line"><span></span></span>
<span class="line"><span>// 与模糊搜索</span></span>
<span class="line"><span>const search = () =&gt; {</span></span>
<span class="line"><span>    type ItemData = {</span></span>
<span class="line"><span>        maintenanceFacilityName: string | null, // 设施名称</span></span>
<span class="line"><span>        roadBureau: string | null, // 所属路局</span></span>
<span class="line"><span>        area: string | null, // 所属地区</span></span>
<span class="line"><span>        maintenanceFacilityType: string | null, // 检修设施类型</span></span>
<span class="line"><span>        updatedAt: number | string | null, // 上次更新时间</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 检查三个关键字是否有值</span></span>
<span class="line"><span>    const hasMaintenanceFacilityName = inputData.maintenanceFacilityName</span></span>
<span class="line"><span>    const hasArea = inputData.area</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 如果三个关键字都没有值，则直接返回所有数据</span></span>
<span class="line"><span>    if (!hasMaintenanceFacilityName &amp;&amp; !hasArea) {</span></span>
<span class="line"><span>        table.list = totalList.value;</span></span>
<span class="line"><span>        return</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 如果三个关键字中有一个有值，则根据有值的项进行过滤</span></span>
<span class="line"><span>    const filteredData = totalList.value.filter((item: ItemData) =&gt; {</span></span>
<span class="line"><span>        console.log(&#39;item&#39;, item)</span></span>
<span class="line"><span>        if (hasMaintenanceFacilityName) {</span></span>
<span class="line"><span>            if (!item.maintenanceFacilityName) { return false }</span></span>
<span class="line"><span>            const keywordRegex = new RegExp(inputData.maintenanceFacilityName.replace(/\\s+/g, &#39;\\\\s*&#39;), &#39;i&#39;)</span></span>
<span class="line"><span>            if (!keywordRegex.test(item.maintenanceFacilityName)) { return false }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        if (hasArea) {</span></span>
<span class="line"><span>            if (!item.area) {return false;}</span></span>
<span class="line"><span>            // 使用正则表达式进行灵活匹配，忽略关键字顺序</span></span>
<span class="line"><span>            const keywordRegex = new RegExp(inputData.area.replace(/\\s+/g, &#39;\\\\s*&#39;), &#39;i&#39;)</span></span>
<span class="line"><span>            if (!keywordRegex.test(item.area)) { return false }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        return true</span></span>
<span class="line"><span>    })</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    table.list = filteredData</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 表格过滤筛选</span></span>
<span class="line"><span>const state = reactive({</span></span>
<span class="line"><span>    searchText: &#39;&#39;,</span></span>
<span class="line"><span>    searchedColumn: &#39;&#39;,</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const searchInput = ref();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const handleSearch = (selectedKeys, confirm, dataIndex) =&gt; {</span></span>
<span class="line"><span>    confirm();</span></span>
<span class="line"><span>    state.searchText = selectedKeys[0];</span></span>
<span class="line"><span>    state.searchedColumn = dataIndex;</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const handleReset = clearFilters =&gt; {</span></span>
<span class="line"><span>    clearFilters({ confirm: true });</span></span>
<span class="line"><span>    state.searchText = &#39;&#39;;</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;style scoped&gt;</span></span>
<span class="line"><span>.select-wrap {</span></span>
<span class="line"><span>    display: flex;</span></span>
<span class="line"><span>    justify-content: flex-start;</span></span>
<span class="line"><span>    margin-top: 15px;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>.width_160 {</span></span>
<span class="line"><span>    width: 100px;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>.mr15 {</span></span>
<span class="line"><span>    margin-right: 15px;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&lt;/style&gt;</span></span></code></pre></div>`,1),t=[l];function i(c,o,r,u,d,g){return a(),s("div",null,t)}const f=n(e,[["render",i]]);export{q as __pageData,f as default};
