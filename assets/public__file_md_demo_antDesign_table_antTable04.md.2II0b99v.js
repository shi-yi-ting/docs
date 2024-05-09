import{_ as n,c as s,o as a,U as p}from"./chunks/framework.zpeVKxWT.js";const b=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"public/_file/md/demo/antDesign/table/antTable04.md","filePath":"public/_file/md/demo/antDesign/table/antTable04.md"}'),l={name:"public/_file/md/demo/antDesign/table/antTable04.md"},e=p(`<h2 id="表格展示树结构数据" tabindex="-1">表格展示树结构数据 <a class="header-anchor" href="#表格展示树结构数据" aria-label="Permalink to &quot;表格展示树结构数据&quot;">​</a></h2><p><a href="https://antdv.com/docs/vue/getting-started-cn" target="_blank" rel="noreferrer">antDesign官方文档</a></p><h3 id="html" tabindex="-1">HTML <a class="header-anchor" href="#html" aria-label="Permalink to &quot;HTML&quot;">​</a></h3><p>注意：<code>:rowKey=&quot;record =&gt; record.id&quot;</code>，不然可能会出现想展开一个节点，但是所有节点都展开的现象 合计行这里借用的是第二个表格的表格头，记得设置<code>:scroll=&quot;{ y: 0 }&quot;</code></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;div&gt;</span></span>
<span class="line"><span>    &lt;a-spin :spinning=&quot;publicInfo.spinning&quot; tip=&quot;Loading...&quot;&gt;</span></span>
<span class="line"><span>        &lt;a-table</span></span>
<span class="line"><span>            :loading=&quot;table.loading&quot;</span></span>
<span class="line"><span>            :data-source=&quot;table.list&quot;</span></span>
<span class="line"><span>            :columns=&quot;table.columns&quot;</span></span>
<span class="line"><span>            :bordered=&quot;true&quot;</span></span>
<span class="line"><span>            size=&quot;small&quot;</span></span>
<span class="line"><span>           :rowKey=&quot;record =&gt; record.id&quot;</span></span>
<span class="line"><span>            style=&quot;width: 100%; background: border-box;&quot;</span></span>
<span class="line"><span>            :scroll=&quot;{ y: 500 }&quot;</span></span>
<span class="line"><span>            :pagination=&quot;false&quot;</span></span>
<span class="line"><span>        &gt;</span></span>
<span class="line"><span>            &lt;template #bodyCell=&quot;{ record, column, index }&quot;&gt;</span></span>
<span class="line"><span>                &lt;template v-if=&quot;column.dataIndex === &#39;index&#39; &amp;&amp; record.direction === null&quot;&gt;</span></span>
<span class="line"><span>                    &lt;a-space&gt;</span></span>
<span class="line"><span>                        {{ record.rowindex }}</span></span>
<span class="line"><span>                    &lt;/a-space&gt;</span></span>
<span class="line"><span>                &lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                &lt;template v-if=&quot;column.dataIndex === &#39;startingPoint&#39; &amp;&amp; record.direction !== null&quot;&gt;</span></span>
<span class="line"><span>                    &lt;span&gt;&lt;/span&gt;</span></span>
<span class="line"><span>                &lt;/template&gt;</span></span>
<span class="line"><span>            &lt;/template&gt;</span></span>
<span class="line"><span>        &lt;/a-table&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        &lt;!-- 合计行 --&gt;</span></span>
<span class="line"><span>        &lt;a-table</span></span>
<span class="line"><span>            :columns=&quot;table.columnsTwo&quot;</span></span>
<span class="line"><span>            :bordered=&quot;true&quot;</span></span>
<span class="line"><span>            size=&quot;small&quot;</span></span>
<span class="line"><span>            rowKey=&quot;id&quot;</span></span>
<span class="line"><span>            style=&quot;width: 100%;background:border-box;&quot;</span></span>
<span class="line"><span>            :scroll=&quot;{ y: 0 }&quot;</span></span>
<span class="line"><span>            :pagination=&quot;false&quot;</span></span>
<span class="line"><span>        &gt;</span></span>
<span class="line"><span>        &lt;/a-table&gt;</span></span>
<span class="line"><span>    &lt;/a-spin&gt;</span></span>
<span class="line"><span>&lt;/div&gt;</span></span></code></pre></div><h3 id="js" tabindex="-1">JS <a class="header-anchor" href="#js" aria-label="Permalink to &quot;JS&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;script setup&gt;</span></span>
<span class="line"><span>import { reactive, onMounted } from &#39;vue&#39;</span></span>
<span class="line"><span>import { message } from &#39;ant-design-vue&#39;</span></span>
<span class="line"><span>// import { getTableListApi, deleteItemApi } from &#39;@/api/request.ts&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>// TODO</span></span>
<span class="line"><span>const publicInfo = reactive({</span></span>
<span class="line"><span>    spinning: false,</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>function handleTable() {</span></span>
<span class="line"><span>    // 合计</span></span>
<span class="line"><span>    const tablefoot = reactive({</span></span>
<span class="line"><span>        totalTitle: undefined,</span></span>
<span class="line"><span>        startingPoint: undefined,</span></span>
<span class="line"><span>        direction: undefined,</span></span>
<span class="line"><span>        originationRecent: undefined,</span></span>
<span class="line"><span>        originationForward: undefined,</span></span>
<span class="line"><span>    })</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 表格</span></span>
<span class="line"><span>    const table = reactive({</span></span>
<span class="line"><span>        loading: false,</span></span>
<span class="line"><span>        total: 0,</span></span>
<span class="line"><span>        list: [],</span></span>
<span class="line"><span>        selectKeys: [],</span></span>
<span class="line"><span>        columns: [</span></span>
<span class="line"><span>            // { key: &#39;index&#39;, dataIndex: &#39;index&#39;, title: &#39;序号&#39;, align: &#39;center&#39;, width: &#39;5%&#39; , customRender: (column) =&gt; {return (column.index + 1);},},</span></span>
<span class="line"><span>            { title: &#39;序号&#39;, key: &#39;index&#39;, dataIndex: &#39;index&#39;, align: &#39;center&#39;, width: &#39;6%&#39; },</span></span>
<span class="line"><span>            { title: &#39;站别&#39;, key: &#39;startingPoint&#39;, dataIndex: &#39;startingPoint&#39;, align: &#39;center&#39;, width: &#39;25%&#39; },</span></span>
<span class="line"><span>            { title: &#39;方向&#39;, key: &#39;direction&#39;, dataIndex: &#39;direction&#39;, align: &#39;center&#39;, width: &#39;25%&#39; },</span></span>
<span class="line"><span>            { title: &#39;始发对数近期&#39;, key: &#39;originationRecent&#39;, dataIndex: &#39;originationRecent&#39;, align: &#39;center&#39;, width: &#39;25%&#39; },</span></span>
<span class="line"><span>            { title: &#39;始发对数远期&#39;, key: &#39;originationForward&#39;, dataIndex: &#39;originationForward&#39;, align: &#39;center&#39;, width: &#39;25%&#39; },</span></span>
<span class="line"><span>            // { title: &#39;操作&#39;, dataIndex: &#39;opts&#39;, align: &#39;center&#39;, key: &#39;opts&#39;, width: &#39;12%&#39; },</span></span>
<span class="line"><span>        ],</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        columnsTwo: [</span></span>
<span class="line"><span>            { title: () =&gt; tablefoot.totalTitle, key: &#39;index&#39;, dataIndex: &#39;index&#39;, align: &#39;center&#39;, width: &#39;6%&#39; },</span></span>
<span class="line"><span>            { title: () =&gt; tablefoot.startingPoint, key: &#39;startingPoint&#39;, dataIndex: &#39;startingPoint&#39;, align: &#39;center&#39;, width: &#39;25%&#39; },</span></span>
<span class="line"><span>            { title: () =&gt; tablefoot.direction, key: &#39;direction&#39;, dataIndex: &#39;direction&#39;, align: &#39;center&#39;, width: &#39;25%&#39; },</span></span>
<span class="line"><span>            { title: () =&gt; tablefoot.originationRecent, key: &#39;originationRecent&#39;, dataIndex: &#39;originationRecent&#39;, align: &#39;center&#39;, width: &#39;25%&#39; },</span></span>
<span class="line"><span>            { title: () =&gt; tablefoot.originationForward, key: &#39;originationForward&#39;, dataIndex: &#39;originationForward&#39;, align: &#39;center&#39;, width: &#39;25%&#39; },</span></span>
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
<span class="line"><span>            const testData = {</span></span>
<span class="line"><span>                data: [</span></span>
<span class="line"><span>                    {</span></span>
<span class="line"><span>                        id: 480731308601428,</span></span>
<span class="line"><span>                        rowindex: 1,</span></span>
<span class="line"><span>                        startingPoint: &#39;南昌西&#39;,</span></span>
<span class="line"><span>                        end: null,</span></span>
<span class="line"><span>                        path: null,</span></span>
<span class="line"><span>                        jdId: null,</span></span>
<span class="line"><span>                        originationRecent: 113,</span></span>
<span class="line"><span>                        originationForward: 122,</span></span>
<span class="line"><span>                        takeonRecent: 0,</span></span>
<span class="line"><span>                        takeonForward: 0,</span></span>
<span class="line"><span>                        numerallocatedvehiclesRecent: 0,</span></span>
<span class="line"><span>                        numerallocatedvehiclesForward: 0,</span></span>
<span class="line"><span>                        checkThelibrarylineRecent: null,</span></span>
<span class="line"><span>                        checkThelibrarylineForward: null,</span></span>
<span class="line"><span>                        storagetrackRecent: null,</span></span>
<span class="line"><span>                        storagetrackForward: null,</span></span>
<span class="line"><span>                        projectId: null,</span></span>
<span class="line"><span>                        bxorSn: null,</span></span>
<span class="line"><span>                        initialLogarithm: 0,</span></span>
<span class="line"><span>                        direction: null,</span></span>
<span class="line"><span>                        affiliatedHub: &#39;南昌枢纽&#39;,</span></span>
<span class="line"><span>                        children: [</span></span>
<span class="line"><span>                            {</span></span>
<span class="line"><span>                                startingPoint: &#39;南昌西&#39;,</span></span>
<span class="line"><span>                                end: null,</span></span>
<span class="line"><span>                                path: null,</span></span>
<span class="line"><span>                                jdId: null,</span></span>
<span class="line"><span>                                originationRecent: 10,</span></span>
<span class="line"><span>                                originationForward: 13,</span></span>
<span class="line"><span>                                takeonRecent: 0,</span></span>
<span class="line"><span>                                takeonForward: 0,</span></span>
<span class="line"><span>                                numerallocatedvehiclesRecent: 0,</span></span>
<span class="line"><span>                                numerallocatedvehiclesForward: 0,</span></span>
<span class="line"><span>                                checkThelibrarylineRecent: 0,</span></span>
<span class="line"><span>                                checkThelibrarylineForward: 0,</span></span>
<span class="line"><span>                                storagetrackRecent: 0,</span></span>
<span class="line"><span>                                storagetrackForward: 0,</span></span>
<span class="line"><span>                                projectId: 1,</span></span>
<span class="line"><span>                                bxorSn: &#39;2&#39;,</span></span>
<span class="line"><span>                                initialLogarithm: null,</span></span>
<span class="line"><span>                                direction: &#39;发抚州方向&#39;,</span></span>
<span class="line"><span>                                affiliatedHub: &#39;南昌枢纽&#39;,</span></span>
<span class="line"><span>                                createDate: &#39;2023-11-09T11:09:43&#39;,</span></span>
<span class="line"><span>                                modifyDate: &#39;2023-11-09T11:09:43&#39;,</span></span>
<span class="line"><span>                                isDelete: false,</span></span>
<span class="line"><span>                                rowVersion: null,</span></span>
<span class="line"><span>                                id: 480600806047825,</span></span>
<span class="line"><span>                            },</span></span>
<span class="line"><span>                            {</span></span>
<span class="line"><span>                                startingPoint: &#39;南昌西&#39;,</span></span>
<span class="line"><span>                                end: null,</span></span>
<span class="line"><span>                                path: null,</span></span>
<span class="line"><span>                                jdId: null,</span></span>
<span class="line"><span>                                originationRecent: 7,</span></span>
<span class="line"><span>                                originationForward: 7,</span></span>
<span class="line"><span>                                takeonRecent: 0,</span></span>
<span class="line"><span>                                takeonForward: 0,</span></span>
<span class="line"><span>                                numerallocatedvehiclesRecent: 0,</span></span>
<span class="line"><span>                                numerallocatedvehiclesForward: 0,</span></span>
<span class="line"><span>                                checkThelibrarylineRecent: 0,</span></span>
<span class="line"><span>                                checkThelibrarylineForward: 0,</span></span>
<span class="line"><span>                                storagetrackRecent: 0,</span></span>
<span class="line"><span>                                storagetrackForward: 0,</span></span>
<span class="line"><span>                                projectId: 1,</span></span>
<span class="line"><span>                                bxorSn: &#39;2&#39;,</span></span>
<span class="line"><span>                                initialLogarithm: null,</span></span>
<span class="line"><span>                                direction: &#39;发景德镇方向&#39;,</span></span>
<span class="line"><span>                                affiliatedHub: &#39;南昌枢纽&#39;,</span></span>
<span class="line"><span>                                createDate: &#39;2023-11-09T11:09:43&#39;,</span></span>
<span class="line"><span>                                modifyDate: &#39;2023-11-09T11:09:43&#39;,</span></span>
<span class="line"><span>                                isDelete: false,</span></span>
<span class="line"><span>                                rowVersion: null,</span></span>
<span class="line"><span>                                id: 480600806047826,</span></span>
<span class="line"><span>                            },</span></span>
<span class="line"><span>                        ],</span></span>
<span class="line"><span>                    },</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                    {</span></span>
<span class="line"><span>                        id: 480731308601429,</span></span>
<span class="line"><span>                        rowindex: 2,</span></span>
<span class="line"><span>                        startingPoint: &#39;南昌东&#39;,</span></span>
<span class="line"><span>                        end: null,</span></span>
<span class="line"><span>                        path: null,</span></span>
<span class="line"><span>                        jdId: null,</span></span>
<span class="line"><span>                        originationRecent: 102,</span></span>
<span class="line"><span>                        originationForward: 136,</span></span>
<span class="line"><span>                        takeonRecent: 0,</span></span>
<span class="line"><span>                        takeonForward: 0,</span></span>
<span class="line"><span>                        numerallocatedvehiclesRecent: 0,</span></span>
<span class="line"><span>                        numerallocatedvehiclesForward: 0,</span></span>
<span class="line"><span>                        checkThelibrarylineRecent: null,</span></span>
<span class="line"><span>                        checkThelibrarylineForward: null,</span></span>
<span class="line"><span>                        storagetrackRecent: null,</span></span>
<span class="line"><span>                        storagetrackForward: null,</span></span>
<span class="line"><span>                        projectId: null,</span></span>
<span class="line"><span>                        bxorSn: null,</span></span>
<span class="line"><span>                        initialLogarithm: 0,</span></span>
<span class="line"><span>                        direction: null,</span></span>
<span class="line"><span>                        affiliatedHub: &#39;南昌枢纽&#39;,</span></span>
<span class="line"><span>                        children: [</span></span>
<span class="line"><span>                            {</span></span>
<span class="line"><span>                                startingPoint: &#39;南昌东&#39;,</span></span>
<span class="line"><span>                                end: null,</span></span>
<span class="line"><span>                                path: null,</span></span>
<span class="line"><span>                                jdId: null,</span></span>
<span class="line"><span>                                originationRecent: 3,</span></span>
<span class="line"><span>                                originationForward: 5,</span></span>
<span class="line"><span>                                takeonRecent: 0,</span></span>
<span class="line"><span>                                takeonForward: 0,</span></span>
<span class="line"><span>                                numerallocatedvehiclesRecent: 0,</span></span>
<span class="line"><span>                                numerallocatedvehiclesForward: 0,</span></span>
<span class="line"><span>                                checkThelibrarylineRecent: 0,</span></span>
<span class="line"><span>                                checkThelibrarylineForward: 0,</span></span>
<span class="line"><span>                                storagetrackRecent: 0,</span></span>
<span class="line"><span>                                storagetrackForward: 0,</span></span>
<span class="line"><span>                                projectId: 1,</span></span>
<span class="line"><span>                                bxorSn: &#39;2&#39;,</span></span>
<span class="line"><span>                                initialLogarithm: null,</span></span>
<span class="line"><span>                                direction: &#39;发长沙方向&#39;,</span></span>
<span class="line"><span>                                affiliatedHub: &#39;南昌枢纽&#39;,</span></span>
<span class="line"><span>                                createDate: &#39;2023-11-09T11:09:43&#39;,</span></span>
<span class="line"><span>                                modifyDate: &#39;2023-11-09T11:09:43&#39;,</span></span>
<span class="line"><span>                                isDelete: false,</span></span>
<span class="line"><span>                                rowVersion: null,</span></span>
<span class="line"><span>                                id: 480600806047815,</span></span>
<span class="line"><span>                            },</span></span>
<span class="line"><span>                            {</span></span>
<span class="line"><span>                                startingPoint: &#39;南昌东&#39;,</span></span>
<span class="line"><span>                                end: null,</span></span>
<span class="line"><span>                                path: null,</span></span>
<span class="line"><span>                                jdId: null,</span></span>
<span class="line"><span>                                originationRecent: 5,</span></span>
<span class="line"><span>                                originationForward: 8,</span></span>
<span class="line"><span>                                takeonRecent: 0,</span></span>
<span class="line"><span>                                takeonForward: 0,</span></span>
<span class="line"><span>                                numerallocatedvehiclesRecent: 0,</span></span>
<span class="line"><span>                                numerallocatedvehiclesForward: 0,</span></span>
<span class="line"><span>                                checkThelibrarylineRecent: 0,</span></span>
<span class="line"><span>                                checkThelibrarylineForward: 0,</span></span>
<span class="line"><span>                                storagetrackRecent: 0,</span></span>
<span class="line"><span>                                storagetrackForward: 0,</span></span>
<span class="line"><span>                                projectId: 1,</span></span>
<span class="line"><span>                                bxorSn: &#39;2&#39;,</span></span>
<span class="line"><span>                                initialLogarithm: null,</span></span>
<span class="line"><span>                                direction: &#39;发鹰潭方向&#39;,</span></span>
<span class="line"><span>                                affiliatedHub: &#39;南昌枢纽&#39;,</span></span>
<span class="line"><span>                                createDate: &#39;2023-11-09T11:09:43&#39;,</span></span>
<span class="line"><span>                                modifyDate: &#39;2023-11-09T11:09:43&#39;,</span></span>
<span class="line"><span>                                isDelete: false,</span></span>
<span class="line"><span>                                rowVersion: null,</span></span>
<span class="line"><span>                                id: 480600806047814,</span></span>
<span class="line"><span>                            },</span></span>
<span class="line"><span>                        ],</span></span>
<span class="line"><span>                    },</span></span>
<span class="line"><span>                ],</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                totalObject: {</span></span>
<span class="line"><span>                    totalTitle: &#39;合计&#39;,</span></span>
<span class="line"><span>                    startingPoint: &#39;&#39;,</span></span>
<span class="line"><span>                    direction: &#39;&#39;,</span></span>
<span class="line"><span>                    originationRecent: &#39;2324&#39;,</span></span>
<span class="line"><span>                    originationForward: &#39;3434&#39;,</span></span>
<span class="line"><span>                },</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            table.list = testData.data</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            // 合计</span></span>
<span class="line"><span>            tablefoot.totalTitle = testData.totalObject.totalTitle</span></span>
<span class="line"><span>            tablefoot.startingPoint = testData.totalObject.startingPoint</span></span>
<span class="line"><span>            tablefoot.direction = testData.totalObject.direction</span></span>
<span class="line"><span>            tablefoot.originationRecent = testData.totalObject.originationRecent</span></span>
<span class="line"><span>            tablefoot.originationForward = testData.totalObject.originationForward</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            table.loading = false</span></span>
<span class="line"><span>        } catch (err) {</span></span>
<span class="line"><span>            console.error(err)</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>    onMounted(() =&gt; {</span></span>
<span class="line"><span>        getTableList()</span></span>
<span class="line"><span>    })</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    return { table }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>const { table } = handleTable()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;/script&gt;</span></span></code></pre></div>`,7),i=[e];function t(c,o,r,d,u,g){return a(),s("div",null,i)}const m=n(l,[["render",t]]);export{b as __pageData,m as default};
