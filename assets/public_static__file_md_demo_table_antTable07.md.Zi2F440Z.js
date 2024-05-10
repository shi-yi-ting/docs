import{_ as n,c as s,o as a,U as p}from"./chunks/framework.FpOEJISx.js";const q=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"public/static/_file/md/demo/table/antTable07.md","filePath":"public/static/_file/md/demo/table/antTable07.md"}'),l={name:"public/static/_file/md/demo/table/antTable07.md"},e=p(`<div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>    &lt;div class=&quot;itemize-container&quot;&gt;</span></span>
<span class="line"><span>        &lt;div class=&quot;itemize-body&quot;&gt;</span></span>
<span class="line"><span>            &lt;div&gt;</span></span>
<span class="line"><span>                &lt;Button type=&quot;primary&quot; class=&quot;mr15&quot; @click=&quot;add&quot;&gt;新增&lt;/Button&gt;</span></span>
<span class="line"><span>                &lt;Popconfirm title=&quot;确定删除?&quot; okText=&quot;删除&quot; cancelText=&quot;取消&quot; @confirm=&quot;deleteItem&quot;&gt;</span></span>
<span class="line"><span>                    &lt;Button danger @click.stop&gt;批量删除&lt;/Button&gt;</span></span>
<span class="line"><span>                &lt;/Popconfirm&gt;</span></span>
<span class="line"><span>            &lt;/div&gt;</span></span>
<span class="line"><span>            &lt;div&gt;</span></span>
<span class="line"><span>                &lt;div class=&quot;table-wrap&quot;&gt;</span></span>
<span class="line"><span>                    &lt;Spin :spinning=&quot;publicInfo.spinning&quot; tip=&quot;Loading...&quot;&gt;</span></span>
<span class="line"><span>                        &lt;Table</span></span>
<span class="line"><span>                            :loading=&quot;table.loading&quot;</span></span>
<span class="line"><span>                            :data-source=&quot;table.list&quot;</span></span>
<span class="line"><span>                            :columns=&quot;table.columns&quot;</span></span>
<span class="line"><span>                            :bordered=&quot;true&quot;</span></span>
<span class="line"><span>                            size=&quot;small&quot;</span></span>
<span class="line"><span>                            rowKey=&quot;id&quot;</span></span>
<span class="line"><span>                            style=&quot;width: 100%; background: border-box;&quot;</span></span>
<span class="line"><span>                            :rowSelection=&quot;{ onChange: onSelectChange }&quot;</span></span>
<span class="line"><span>                            :pagination=&quot;{</span></span>
<span class="line"><span>                                current: page.pageIndex,</span></span>
<span class="line"><span>                                pageSize: page.pageSize,</span></span>
<span class="line"><span>                                total: table.total,</span></span>
<span class="line"><span>                            }&quot;</span></span>
<span class="line"><span>                            @change=&quot;pageChange&quot;</span></span>
<span class="line"><span>                        &gt;</span></span>
<span class="line"><span>                            &lt;template #bodyCell=&quot;{ record, text, column, index }&quot;&gt;</span></span>
<span class="line"><span>                                &lt;template v-if=&quot;column.dataIndex === &#39;index&#39;&quot;&gt;</span></span>
<span class="line"><span>                                    &lt;Space&gt;</span></span>
<span class="line"><span>                                        {{ Number(index) + 1  }}</span></span>
<span class="line"><span>                                    &lt;/Space&gt;</span></span>
<span class="line"><span>                                &lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                                &lt;template v-if=&quot;column.dataIndex === &#39;opts&#39;&quot;&gt;</span></span>
<span class="line"><span>                                    &lt;Space&gt;</span></span>
<span class="line"><span>                                        &lt;span v-if=&quot;activeEditIndex === index&quot; style=&quot;display: flex; justify-content: space-between;&quot;&gt;</span></span>
<span class="line"><span>                                            &lt;Button size=&quot;small&quot; class=&quot;mr5&quot; @click.stop=&quot;activeEditIndex=undefined&quot;&gt;取消&lt;/Button&gt;</span></span>
<span class="line"><span>                                            &lt;Button size=&quot;small&quot; @click=&quot;addOREditData&quot;&gt;保存&lt;/Button&gt;</span></span>
<span class="line"><span>                                        &lt;/span&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                                        &lt;!-- &lt;Opinion /&gt; --&gt;</span></span>
<span class="line"><span>                                        &lt;Button size=&quot;small&quot; class=&quot;mr5&quot; @click.stop=&quot;customRow(record, index)&quot;&gt;编辑&lt;/Button&gt;</span></span>
<span class="line"><span>                                        &lt;Popconfirm title=&quot;确定删除?&quot; okText=&quot;删除&quot; cancelText=&quot;取消&quot; @confirm=&quot;deleteItem(record)&quot;&gt;</span></span>
<span class="line"><span>                                                &lt;Button size=&quot;small&quot; danger @click.stop&gt;删除&lt;/Button&gt;</span></span>
<span class="line"><span>                                            &lt;/Popconfirm&gt;</span></span>
<span class="line"><span>                                    &lt;/Space&gt;</span></span>
<span class="line"><span>                                &lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                                &lt;template v-else&gt;</span></span>
<span class="line"><span>                                    &lt;div v-if=&quot;activeEditIndex === index&quot;&gt;</span></span>
<span class="line"><span>                                        &lt;!-- 会签专业 --&gt;</span></span>
<span class="line"><span>                                        &lt;template v-if=&quot;column.dataIndex == &#39;faciliityName&#39;&quot;&gt;</span></span>
<span class="line"><span>                                            &lt;Input v-model:value=&quot;record.faciliityName&quot; :allowClear=&quot;true&quot; /&gt;</span></span>
<span class="line"><span>                                        &lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                                        &lt;!-- 会签段 --&gt;</span></span>
<span class="line"><span>                                        &lt;template v-if=&quot;column.dataIndex == &#39;quotaTypeName&#39;&quot;&gt;</span></span>
<span class="line"><span>                                            &lt;Input v-model:value=&quot;record.quotaTypeName&quot; :allowClear=&quot;true&quot; /&gt;</span></span>
<span class="line"><span>                                        &lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                                        &lt;!-- 提供人 --&gt;</span></span>
<span class="line"><span>                                        &lt;template v-if=&quot;column.dataIndex == &#39;recentNumber&#39;&quot;&gt;</span></span>
<span class="line"><span>                                            &lt;Input v-model:value=&quot;record.recentNumber&quot; :allowClear=&quot;true&quot; /&gt;</span></span>
<span class="line"><span>                                        &lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                                        &lt;!-- 提供单位 --&gt;</span></span>
<span class="line"><span>                                        &lt;template v-if=&quot;column.dataIndex == &#39;forwardNumber&#39;&quot;&gt;</span></span>
<span class="line"><span>                                            &lt;Input v-model:value=&quot;record.forwardNumber&quot; :allowClear=&quot;true&quot; /&gt;</span></span>
<span class="line"><span>                                        &lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                                        &lt;!-- 联系方式 --&gt;</span></span>
<span class="line"><span>                                        &lt;template v-if=&quot;column.dataIndex == &#39;forwardNumber02&#39;&quot;&gt;</span></span>
<span class="line"><span>                                            &lt;Input v-model:value=&quot;record.forwardNumber&quot; :allowClear=&quot;true&quot; /&gt;</span></span>
<span class="line"><span>                                        &lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                                        &lt;!-- 会签轮次 --&gt;</span></span>
<span class="line"><span>                                        &lt;template v-if=&quot;column.dataIndex == &#39;forwardNumber03&#39;&quot;&gt;</span></span>
<span class="line"><span>                                            &lt;Input v-model:value=&quot;record.forwardNumber&quot; :allowClear=&quot;true&quot; /&gt;</span></span>
<span class="line"><span>                                        &lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                                        &lt;!-- 会签状态 --&gt;</span></span>
<span class="line"><span>                                        &lt;template v-if=&quot;column.dataIndex == &#39;forwardNumber04&#39;&quot;&gt;</span></span>
<span class="line"><span>                                            &lt;Input v-model:value=&quot;record.forwardNumber&quot; :allowClear=&quot;true&quot; /&gt;</span></span>
<span class="line"><span>                                        &lt;/template&gt;</span></span>
<span class="line"><span>                                    &lt;/div&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                                    &lt;div v-else class=&quot;editable-cell-text-wrapper&quot;&gt;</span></span>
<span class="line"><span>                                        {{ text }}</span></span>
<span class="line"><span>                                    &lt;/div&gt;</span></span>
<span class="line"><span>                                &lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                            &lt;/template&gt;</span></span>
<span class="line"><span>                        &lt;/Table&gt;</span></span>
<span class="line"><span>                    &lt;/Spin&gt;</span></span>
<span class="line"><span>                &lt;/div&gt;</span></span>
<span class="line"><span>            &lt;/div&gt;</span></span>
<span class="line"><span>        &lt;/div&gt;</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span>  &lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  &lt;script lang=&quot;ts&quot; setup&gt;</span></span>
<span class="line"><span>  import {</span></span>
<span class="line"><span>      Layout,</span></span>
<span class="line"><span>      LayoutSider,</span></span>
<span class="line"><span>      LayoutHeader,</span></span>
<span class="line"><span>      LayoutContent,</span></span>
<span class="line"><span>      Button,</span></span>
<span class="line"><span>      Spin,</span></span>
<span class="line"><span>      Space,</span></span>
<span class="line"><span>      Popconfirm,</span></span>
<span class="line"><span>      Table,</span></span>
<span class="line"><span>      Input,</span></span>
<span class="line"><span>      message,</span></span>
<span class="line"><span>  } from &#39;ant-design-vue&#39;</span></span>
<span class="line"><span>  import { ref, reactive, watch, onMounted } from &#39;vue&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  import type { CSSProperties } from &#39;vue&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  import { CarryOutOutlined, SmileTwoTone } from &#39;@ant-design/icons-vue&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//   import TreeTabs from &#39;./vue/treeTabs.vue&#39;</span></span>
<span class="line"><span>//   import Opinion from &#39;./vue/opinion.vue&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // TODO</span></span>
<span class="line"><span>  const publicInfo = reactive({</span></span>
<span class="line"><span>    spinning: false,</span></span>
<span class="line"><span>  })</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  const isAddSuccess = ref(false)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // 表格</span></span>
<span class="line"><span>  function handleTable() {</span></span>
<span class="line"><span>    // 分页</span></span>
<span class="line"><span>    const page = reactive({</span></span>
<span class="line"><span>        pageIndex: 1,</span></span>
<span class="line"><span>        pageSize: 10,</span></span>
<span class="line"><span>    })</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    const editableRow = ref(null)</span></span>
<span class="line"><span>    const activeEditIndex = ref(undefined)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 表格</span></span>
<span class="line"><span>    const table = reactive({</span></span>
<span class="line"><span>        loading: false,</span></span>
<span class="line"><span>        total: 0,</span></span>
<span class="line"><span>        list: [],</span></span>
<span class="line"><span>        selectKeys: [],</span></span>
<span class="line"><span>        columns: [</span></span>
<span class="line"><span>            { title: &#39;序号&#39;, key: &#39;index&#39;, dataIndex: &#39;index&#39;, align: &#39;center&#39;, width: &#39;10%&#39; },</span></span>
<span class="line"><span>            { title: &#39;会签专业&#39;, key: &#39;faciliityName&#39;, dataIndex: &#39;faciliityName&#39;, align: &#39;center&#39;, width: &#39;10%&#39; },</span></span>
<span class="line"><span>            // { title: &#39;会签段&#39;, key: &#39;quotaTypeName&#39;, dataIndex: &#39;quotaTypeName&#39;, align: &#39;center&#39;, width: &#39;10%&#39; },</span></span>
<span class="line"><span>            // { title: &#39;提供人&#39;, key: &#39;recentNumber&#39;, dataIndex: &#39;recentNumber&#39;, align: &#39;center&#39;, width: &#39;10%&#39; },</span></span>
<span class="line"><span>            // { title: &#39;提供单位&#39;, key: &#39;forwardNumber&#39;, dataIndex: &#39;forwardNumber&#39;, align: &#39;center&#39;, width: &#39;10%&#39; },</span></span>
<span class="line"><span>            { title: &#39;联系方式&#39;, key: &#39;forwardNumber02&#39;, dataIndex: &#39;forwardNumber02&#39;, align: &#39;center&#39;, width: &#39;15%&#39; },</span></span>
<span class="line"><span>            { title: &#39;会签轮次&#39;, key: &#39;forwardNumber03&#39;, dataIndex: &#39;forwardNumber03&#39;, align: &#39;center&#39;, width: &#39;15%&#39; },</span></span>
<span class="line"><span>            { title: &#39;会签状态&#39;, key: &#39;forwardNumber04&#39;, dataIndex: &#39;forwardNumber04&#39;, align: &#39;center&#39;, width: &#39;15%&#39; },</span></span>
<span class="line"><span>            { title: &#39;操作&#39;, dataIndex: &#39;opts&#39;, align: &#39;center&#39;, key: &#39;opts&#39;, width: &#39;15%&#39; },</span></span>
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
<span class="line"><span>    const resetData = () =&gt; {</span></span>
<span class="line"><span>          isAddSuccess.value = false</span></span>
<span class="line"><span>   }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    const deleteItem = (record) =&gt; {</span></span>
<span class="line"><span>      console.log(&#39;record&#39;, record)</span></span>
<span class="line"><span>      try {</span></span>
<span class="line"><span>          const params = {</span></span>
<span class="line"><span>              id: record.id</span></span>
<span class="line"><span>          }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>          if (!params.id) {</span></span>
<span class="line"><span>              table.list.pop()</span></span>
<span class="line"><span>              resetData()</span></span>
<span class="line"><span>              return false</span></span>
<span class="line"><span>          }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>          // const resp = await deleteFaciLtysetupByIdApi(params)</span></span>
<span class="line"><span>          // if (resp.success) {</span></span>
<span class="line"><span>          //     message.success(&#39;删除成功&#39;)</span></span>
<span class="line"><span>          //     // 重新请求数据 (分页与检索条件不变)</span></span>
<span class="line"><span>          //     getTableList()</span></span>
<span class="line"><span>          // } else {</span></span>
<span class="line"><span>          //     message.error(resp.msg)</span></span>
<span class="line"><span>          // }</span></span>
<span class="line"><span>          table.list.pop()</span></span>
<span class="line"><span>          resetData()</span></span>
<span class="line"><span>      } catch(err) {</span></span>
<span class="line"><span>          console.log(&quot;err &quot;, err);</span></span>
<span class="line"><span>          resetData()</span></span>
<span class="line"><span>      }</span></span>
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
<span class="line"><span>      const customRow = (record, index) =&gt; {</span></span>
<span class="line"><span>          editableRow.value = null</span></span>
<span class="line"><span>          activeEditIndex.value = index</span></span>
<span class="line"><span></span></span>
<span class="line"><span>          editableRow.value = record</span></span>
<span class="line"><span></span></span>
<span class="line"><span>          editableRow.value.id = record.id</span></span>
<span class="line"><span>          editableRow.value.affiliatedhub = record.affiliatedhub // 枢纽/地区</span></span>
<span class="line"><span>          editableRow.value.faciliityName = record.faciliityName // 设施名称</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    const addData = () =&gt; {//新增定员</span></span>
<span class="line"><span>          const newData = {</span></span>
<span class="line"><span>              affiliatedhub: &#39;&#39;, // 枢纽/地区</span></span>
<span class="line"><span>              station: &#39;&#39;,</span></span>
<span class="line"><span>              faciliityName: &#39;&#39;, // 设施名称</span></span>
<span class="line"><span>              facilityTypeName: &#39;&#39;, // 设施类型</span></span>
<span class="line"><span>              recentLineNumber: &#39;&#39;, // 检查库线近期规模</span></span>
<span class="line"><span>              forwardLineNumber: &#39;&#39;, // 检查库线远期规模</span></span>
<span class="line"><span>              parkingRecentLineNumber: &#39;&#39;, // 存车线近期规模</span></span>
<span class="line"><span>              parkingForwardLineNumber: &#39;&#39;, // 存车线远期规模</span></span>
<span class="line"><span>              railwayBureauName: &#39;&#39;, // 路局</span></span>
<span class="line"><span>              facilityConstructionStatusName: &#39;&#39;, // 设施建设状态</span></span>
<span class="line"><span>              constructionAttributesName: &#39;&#39;, // 建设属性</span></span>
<span class="line"><span>          }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>          table.list.push(newData)</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    const addOREditData = async () =&gt; {</span></span>
<span class="line"><span>          alert(&#39;准备保存&#39;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>          // try {</span></span>
<span class="line"><span>          //     const params = {</span></span>
<span class="line"><span>          //         &quot;id&quot;: editableRow.value.id,</span></span>
<span class="line"><span>          //         &quot;projectId&quot;: projectObj?.id, // 项目id</span></span>
<span class="line"><span>          //         &quot;affiliatedhub&quot;: editableRow.value.affiliatedhub, // 枢纽/地区</span></span>
<span class="line"><span>          //         &quot;faciliityName&quot;: editableRow.value.faciliityName, // 设施名称</span></span>
<span class="line"><span>          //         &quot;facilityType&quot;: Number(editableRow.value.facilityType), // 设施类型</span></span>
<span class="line"><span>          //         &quot;recentAssigned&quot;: 0,</span></span>
<span class="line"><span>          //         &quot;recentApply&quot;: 0,</span></span>
<span class="line"><span>          //         &quot;forwardAssigned&quot;: 0,</span></span>
<span class="line"><span>          //         &quot;forwardApply&quot;: 0,</span></span>
<span class="line"><span>          //         &quot;city&quot;: 0,</span></span>
<span class="line"><span>          //         &quot;railwayBureau&quot;: Number(editableRow.value.railwayBureau), // 路局</span></span>
<span class="line"><span>          //         &quot;facilityConstructionStatus&quot;: Number(editableRow.value.facilityConstructionStatus), // 设施建设状态</span></span>
<span class="line"><span>          //         &quot;constructionAttributes&quot;: Number(editableRow.value.constructionAttributes), // 建设属性</span></span>
<span class="line"><span>          //         &quot;yearBuilt&quot;: 0,</span></span>
<span class="line"><span>          //         &quot;connectingStation&quot;: &quot;&quot;,</span></span>
<span class="line"><span>          //         // &quot;lineName&quot;: Number(editableRow.lineName),</span></span>
<span class="line"><span>          //         // &quot;lineNameStr&quot;: &quot;string&quot;,</span></span>
<span class="line"><span>          //         &quot;recentLineNumber&quot;: Number(editableRow.value.recentLineNumber) || 0, // 检查库线近期规模</span></span>
<span class="line"><span>          //         &quot;forwardLineNumber&quot;: Number(editableRow.value.forwardLineNumber) || 0, // 检查库线远期规模</span></span>
<span class="line"><span>          //         &quot;numberOfCColumns&quot;: 0,</span></span>
<span class="line"><span>          //         &quot;constructionPeriod&quot;: 0,</span></span>
<span class="line"><span></span></span>
<span class="line"><span>          //         // &quot;parkingLineName&quot;: 0, // 存车线库线名称(id)</span></span>
<span class="line"><span>          //         // &quot;parkingLineNameStr&quot;: &quot;string&quot;, // 存车线库线名称</span></span>
<span class="line"><span>          //         &quot;parkingRecentLineNumber&quot;: Number(editableRow.value.parkingRecentLineNumber) || 0, // 存车线近期线路数里</span></span>
<span class="line"><span>          //         &quot;parkingForwardLineNumber&quot;: Number(editableRow.value.parkingForwardLineNumber) || 0, // 存车线远期线路数里</span></span>
<span class="line"><span>          //         &quot;parkingNumberOfCColumns&quot;: 0, // 存车线列《台)位数</span></span>
<span class="line"><span>          //         &quot;parkingConstructionPeriod&quot;: 0, // 存车线建设时期</span></span>
<span class="line"><span>          //         &quot;station&quot;: editableRow.value.station // 车站</span></span>
<span class="line"><span>          //     }</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>          //     if (!params.affiliatedhub || !params.station || !params.faciliityName || !params.facilityType || !params.railwayBureau || !params.constructionAttributes) {</span></span>
<span class="line"><span>          //         message.warning(&#39;你有编辑内容未填写&#39;)</span></span>
<span class="line"><span>          //         return false</span></span>
<span class="line"><span>          //     }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>          //     // if (!params.affiliatedhub || !params.station || !params.faciliityName || !params.facilityType || !params.railwayBureau || !params.facilityConstructionStatus || !params.constructionAttributes) {</span></span>
<span class="line"><span>          //     //     message.warning(&#39;你有编辑内容未填写&#39;)</span></span>
<span class="line"><span>          //     //     return false</span></span>
<span class="line"><span>          //     // }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>          //     const resp = await addOREditFaciLtysetupApi(params)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>          //     if (resp.data) {</span></span>
<span class="line"><span>          //         message.success(&#39;保存成功&#39;)</span></span>
<span class="line"><span>          //         activeEditIndex.value = undefined</span></span>
<span class="line"><span>          //         getTableList()</span></span>
<span class="line"><span>          //     } else {</span></span>
<span class="line"><span>          //         message.success(&#39;保存失败&#39;)</span></span>
<span class="line"><span>          //     }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>          //     resetData()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>          // } catch(err) {</span></span>
<span class="line"><span>          //     console.log(&quot;err &quot;, err);</span></span>
<span class="line"><span>          //     resetData()</span></span>
<span class="line"><span>          // }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    onMounted(() =&gt; {</span></span>
<span class="line"><span>        getTableList()</span></span>
<span class="line"><span>    })</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    return { page, table, activeEditIndex, editableRow, onSelectChange, pageChange, deleteItem, customRow, addData, addOREditData }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  const { page, table, activeEditIndex, editableRow, onSelectChange, pageChange, deleteItem, customRow, addData, addOREditData } = handleTable()</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>  const add = () =&gt; {</span></span>
<span class="line"><span>      activeEditIndex.value = table.list.length</span></span>
<span class="line"><span>      isAddSuccess.value = true</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  watch(() =&gt; isAddSuccess.value, () =&gt; {</span></span>
<span class="line"><span>      if (isAddSuccess.value) {</span></span>
<span class="line"><span>          addData()</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>  })</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // function handleAddRow() {</span></span>
<span class="line"><span>  //     const add = () =&gt; {</span></span>
<span class="line"><span>  //         activeEditIndex.value = table.list.length</span></span>
<span class="line"><span>  //         isAddSuccess.value = true</span></span>
<span class="line"><span>  //     }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  //     watch(() =&gt; isAddSuccess.value, () =&gt; {</span></span>
<span class="line"><span>  //         if (isAddSuccess.value) {</span></span>
<span class="line"><span>  //             addData()</span></span>
<span class="line"><span>  //         }</span></span>
<span class="line"><span>  //     })</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  //     return { add }</span></span>
<span class="line"><span>  // }</span></span>
<span class="line"><span>  // const { add } = handleAddRow()</span></span>
<span class="line"><span>  &lt;/script&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  &lt;style lang=&quot;scss&quot; scoped&gt;</span></span>
<span class="line"><span>  .itemize-container {</span></span>
<span class="line"><span>    margin-top: 15px;</span></span>
<span class="line"><span>    height: 100%;</span></span>
<span class="line"><span>    width: 100%;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    .itemize-body {</span></span>
<span class="line"><span>        height: 100%;</span></span>
<span class="line"><span>        background-color: #fff;</span></span>
<span class="line"><span>        // padding: 15px;</span></span>
<span class="line"><span>        min-height: calc(100vh - 94px);</span></span>
<span class="line"><span>        overflow-y: scroll;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        .layout-wrap {</span></span>
<span class="line"><span>            height: 100%;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            .sider-wrap {</span></span>
<span class="line"><span>                border-right: 1px solid #d7d0d0;</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            .table-wrap {</span></span>
<span class="line"><span>                padding: 0 20px;</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  &lt;/style&gt;</span></span></code></pre></div>`,1),t=[e];function i(c,o,u,r,d,m){return a(),s("div",null,t)}const b=n(l,[["render",i]]);export{q as __pageData,b as default};
