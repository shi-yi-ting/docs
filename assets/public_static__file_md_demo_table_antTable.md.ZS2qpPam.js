import{_ as n,c as s,o as a,U as p}from"./chunks/framework.FpOEJISx.js";const b=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"public/static/_file/md/demo/table/antTable.md","filePath":"public/static/_file/md/demo/table/antTable.md"}'),e={name:"public/static/_file/md/demo/table/antTable.md"},l=p(`<h2 id="基础使用-带复选框-带分页-带操作列" tabindex="-1">基础使用，带复选框，带分页，带操作列 <a class="header-anchor" href="#基础使用-带复选框-带分页-带操作列" aria-label="Permalink to &quot;基础使用，带复选框，带分页，带操作列&quot;">​</a></h2><p><a href="https://antdv.com/docs/vue/getting-started-cn" target="_blank" rel="noreferrer">antDesign官方文档</a></p><h3 id="html" tabindex="-1">HTML <a class="header-anchor" href="#html" aria-label="Permalink to &quot;HTML&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;div&gt;</span></span>
<span class="line"><span>    &lt;a-spin :spinning=&quot;publicInfo.spinning&quot; tip=&quot;Loading...&quot;&gt;</span></span>
<span class="line"><span>        &lt;a-table</span></span>
<span class="line"><span>            :loading=&quot;table.loading&quot;</span></span>
<span class="line"><span>            :data-source=&quot;table.list&quot;</span></span>
<span class="line"><span>            :columns=&quot;table.columns&quot;</span></span>
<span class="line"><span>            :bordered=&quot;true&quot;</span></span>
<span class="line"><span>            size=&quot;small&quot;</span></span>
<span class="line"><span>            rowKey=&quot;id&quot;</span></span>
<span class="line"><span>            style=&quot;width: 100%; background: border-box;&quot;</span></span>
<span class="line"><span>            :rowSelection=&quot;{ onChange: onSelectChange }&quot;</span></span>
<span class="line"><span>            :pagination=&quot;{</span></span>
<span class="line"><span>                current: page.pageIndex,</span></span>
<span class="line"><span>                pageSize: page.pageSize,</span></span>
<span class="line"><span>                total: table.total,</span></span>
<span class="line"><span>            }&quot;</span></span>
<span class="line"><span>            @change=&quot;pageChange&quot;</span></span>
<span class="line"><span>        &gt;</span></span>
<span class="line"><span>            &lt;template #bodyCell=&quot;{ record, column, index }&quot;&gt;</span></span>
<span class="line"><span>                &lt;template v-if=&quot;column.dataIndex === &#39;opts&#39;&quot;&gt;</span></span>
<span class="line"><span>                    &lt;a-space&gt;</span></span>
<span class="line"><span>                        &lt;a-popconfirm title=&quot;确定删除?&quot; okText=&quot;删除&quot; @confirm=&quot;deleteItem(record.id)&quot;&gt;</span></span>
<span class="line"><span>                            &lt;a-button size=&quot;small&quot; danger @click.stop&gt;删除&lt;/a-button&gt;</span></span>
<span class="line"><span>                        &lt;/a-popconfirm&gt;</span></span>
<span class="line"><span>                    &lt;/a-space&gt;</span></span>
<span class="line"><span>                &lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                &lt;template v-if=&quot;column.dataIndex === &#39;index&#39;&quot;&gt;</span></span>
<span class="line"><span>                    &lt;a-space&gt;</span></span>
<span class="line"><span>                        {{ (page.pageIndex - 1) * page.pageSize + Number(index) + 1 }}</span></span>
<span class="line"><span>                    &lt;/a-space&gt;</span></span>
<span class="line"><span>                &lt;/template&gt;</span></span>
<span class="line"><span>            &lt;/template&gt;</span></span>
<span class="line"><span>        &lt;/a-table&gt;</span></span>
<span class="line"><span>    &lt;/a-spin&gt;</span></span>
<span class="line"><span>&lt;/div&gt;</span></span></code></pre></div><h3 id="js" tabindex="-1">JS <a class="header-anchor" href="#js" aria-label="Permalink to &quot;JS&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;script setup&gt;</span></span>
<span class="line"><span>import { reactive, onMounted } from &#39;vue&#39;</span></span>
<span class="line"><span>import { message } from &#39;ant-design-vue&#39;</span></span>
<span class="line"><span>// import { getTableListApi, deleteItemApi } from &#39;@/api/request.ts&#39;</span></span>
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
<span class="line"><span>        selectKeys: [],</span></span>
<span class="line"><span>        columns: [</span></span>
<span class="line"><span>            // { key: &#39;index&#39;, dataIndex: &#39;index&#39;, title: &#39;序号&#39;, align: &#39;center&#39;, width: &#39;5%&#39; , customRender: (column) =&gt; {return (column.index + 1);},},</span></span>
<span class="line"><span>            { title: &#39;序号&#39;, key: &#39;index&#39;, dataIndex: &#39;index&#39;, align: &#39;center&#39;, width: &#39;6%&#39; },</span></span>
<span class="line"><span>            { title: &#39;设施名称&#39;, key: &#39;faciliityName&#39;, dataIndex: &#39;faciliityName&#39;, align: &#39;center&#39;, width: &#39;25%&#39; },</span></span>
<span class="line"><span>            { title: &#39;定员类型&#39;, key: &#39;quotaTypeName&#39;, dataIndex: &#39;quotaTypeName&#39;, align: &#39;center&#39;, width: &#39;25%&#39; },</span></span>
<span class="line"><span>            { title: &#39;近期数量&#39;, key: &#39;recentNumber&#39;, dataIndex: &#39;recentNumber&#39;, align: &#39;center&#39;, width: &#39;25%&#39; },</span></span>
<span class="line"><span>            { title: &#39;远期数量&#39;, key: &#39;forwardNumber&#39;, dataIndex: &#39;forwardNumber&#39;, align: &#39;center&#39;, width: &#39;25%&#39; },</span></span>
<span class="line"><span>            { title: &#39;操作&#39;, dataIndex: &#39;opts&#39;, align: &#39;center&#39;, key: &#39;opts&#39;, width: &#39;12%&#39; },</span></span>
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
<span class="line"><span>                    faciliityName: &#39;faciliityName&#39;,</span></span>
<span class="line"><span>                    quotaType: &#39;quotaType&#39;,</span></span>
<span class="line"><span>                    quotaTypeName: &#39;quotaTypeName&#39;,</span></span>
<span class="line"><span>                    recentNumber: &#39;recentNumber&#39;,</span></span>
<span class="line"><span>                    forwardNumber: &#39;forwardNumber&#39;,</span></span>
<span class="line"><span>                },</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                {</span></span>
<span class="line"><span>                    id: &#39;2&#39;,</span></span>
<span class="line"><span>                    maxOnDuty: &#39;maxOnDuty02&#39;,</span></span>
<span class="line"><span>                    projectId: &#39;projectId02&#39;,</span></span>
<span class="line"><span>                    dataId: &#39;123, 345&#39;,</span></span>
<span class="line"><span>                    faciliityId: &#39;faciliityId&#39;,</span></span>
<span class="line"><span>                    faciliityName: &#39;faciliityName&#39;,</span></span>
<span class="line"><span>                    quotaType: &#39;quotaType&#39;,</span></span>
<span class="line"><span>                    quotaTypeName: &#39;quotaTypeName&#39;,</span></span>
<span class="line"><span>                    recentNumber: &#39;recentNumber&#39;,</span></span>
<span class="line"><span>                    forwardNumber: &#39;forwardNumber&#39;,</span></span>
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
<span class="line"><span>&lt;/script&gt;</span></span></code></pre></div>`,6),t=[l];function i(c,o,r,d,u,g){return a(),s("div",null,t)}const h=n(e,[["render",i]]);export{b as __pageData,h as default};
