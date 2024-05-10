import{_ as n,c as s,o as a,U as p}from"./chunks/framework.FpOEJISx.js";const q=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"public/static/_file/md/demo/table/antTable02.md","filePath":"public/static/_file/md/demo/table/antTable02.md"}'),l={name:"public/static/_file/md/demo/table/antTable02.md"},e=p(`<h2 id="表格单元格支持输入-下拉选项" tabindex="-1">表格单元格支持输入，下拉选项 <a class="header-anchor" href="#表格单元格支持输入-下拉选项" aria-label="Permalink to &quot;表格单元格支持输入，下拉选项&quot;">​</a></h2><p><a href="https://antdv.com/docs/vue/getting-started-cn" target="_blank" rel="noreferrer">antDesign官方文档</a></p><h3 id="html" tabindex="-1">HTML <a class="header-anchor" href="#html" aria-label="Permalink to &quot;HTML&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;div&gt;</span></span>
<span class="line"><span>    &lt;a-spin :spinning=&quot;publicInfo.spinning&quot; tip=&quot;Loading...&quot;&gt;</span></span>
<span class="line"><span>        &lt;a-table</span></span>
<span class="line"><span>            :loading=&quot;table.loading&quot;</span></span>
<span class="line"><span>            :data-source=&quot;table.list&quot;</span></span>
<span class="line"><span>            :columns=&quot;table.columns&quot;</span></span>
<span class="line"><span>            :bordered=&quot;true&quot;</span></span>
<span class="line"><span>            size=&quot;small&quot;</span></span>
<span class="line"><span>            rowKey=&quot;id&quot;</span></span>
<span class="line"><span>            style=&quot;width: 100%; background:border-box;&quot;</span></span>
<span class="line"><span>            :customRow=&quot;customRow&quot;</span></span>
<span class="line"><span>            :pagination=&quot;false&quot;</span></span>
<span class="line"><span>            :scroll=&quot;{ y: 500 }&quot;</span></span>
<span class="line"><span>        &gt;</span></span>
<span class="line"><span>            &lt;template #bodyCell=&quot;{ record, text, column, index }&quot;&gt;</span></span>
<span class="line"><span>                &lt;template v-if=&quot;column.dataIndex === &#39;index&#39;&quot;&gt;</span></span>
<span class="line"><span>                    &lt;a-space&gt;</span></span>
<span class="line"><span>                        {{ Number(index) + 1 }}</span></span>
<span class="line"><span>                    &lt;/a-space&gt;</span></span>
<span class="line"><span>                &lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                &lt;template v-else-if=&quot;column.dataIndex === &#39;opts&#39;&quot;&gt;</span></span>
<span class="line"><span>                    &lt;a-space&gt;</span></span>
<span class="line"><span>                        &lt;a-button size=&quot;small&quot; class=&quot;mr5&quot;&gt;编辑&lt;/a-button&gt;</span></span>
<span class="line"><span>                        &lt;a-button size=&quot;small&quot; @click.stop=&quot;updateData&quot;&gt;保存&lt;/a-button&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                        &lt;a-popconfirm title=&quot;确定删除?&quot; okText=&quot;删除&quot; @confirm=&quot;deleteItem(record.id)&quot;&gt;</span></span>
<span class="line"><span>                            &lt;a-button size=&quot;small&quot; danger @click.stop&gt;删除&lt;/a-button&gt;</span></span>
<span class="line"><span>                        &lt;/a-popconfirm&gt;</span></span>
<span class="line"><span>                    &lt;/a-space&gt;</span></span>
<span class="line"><span>                &lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                &lt;template v-else&gt;</span></span>
<span class="line"><span>                    &lt;div v-if=&quot;edit.activeIndex === index&quot;&gt;</span></span>
<span class="line"><span>                        &lt;!-- 设施名称 --&gt;</span></span>
<span class="line"><span>                        &lt;template v-if=&quot;column.dataIndex === &#39;faciliityName&#39;&quot;&gt;</span></span>
<span class="line"><span>                            &lt;a-select v-model:value=&quot;q.selectValue&quot; class=&quot;width_220&quot; @change=&quot;handleChange&quot;&gt;</span></span>
<span class="line"><span>                                &lt;a-select-option v-for=&quot;(item) of options.list&quot; :key=&quot;item.value&quot; :value=&quot;item.value&quot;&gt;{{ item.label }}&lt;/a-select-option&gt;</span></span>
<span class="line"><span>                            &lt;/a-select&gt;</span></span>
<span class="line"><span>                        &lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                        &lt;!-- 定员类型 --&gt;</span></span>
<span class="line"><span>                        &lt;template v-if=&quot;column.dataIndex === &#39;quotaTypeName&#39;&quot;&gt;</span></span>
<span class="line"><span>                            &lt;div&gt;{{ record.quotaTypeName }}&lt;/div&gt;</span></span>
<span class="line"><span>                        &lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                        &lt;!-- 近期数量 --&gt;</span></span>
<span class="line"><span>                        &lt;template v-if=&quot;column.dataIndex === &#39;recentNumber&#39;&quot;&gt;</span></span>
<span class="line"><span>                            &lt;a-input v-model:value=&quot;record.recentNumber&quot; :allowClear=&quot;true&quot; /&gt;</span></span>
<span class="line"><span>                        &lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                        &lt;!-- 远期数量 --&gt;</span></span>
<span class="line"><span>                        &lt;template v-if=&quot;column.dataIndex === &#39;forwardNumber&#39;&quot;&gt;</span></span>
<span class="line"><span>                            &lt;a-input v-model:value=&quot;record.forwardNumber&quot; :allowClear=&quot;true&quot; /&gt;</span></span>
<span class="line"><span>                        &lt;/template&gt;</span></span>
<span class="line"><span>                    &lt;/div&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                    &lt;div v-else&gt;</span></span>
<span class="line"><span>                        {{ text || &#39;&#39; }}</span></span>
<span class="line"><span>                    &lt;/div&gt;</span></span>
<span class="line"><span>                &lt;/template&gt;</span></span>
<span class="line"><span>            &lt;/template&gt;</span></span>
<span class="line"><span>        &lt;/a-table&gt;</span></span>
<span class="line"><span>    &lt;/a-spin&gt;</span></span>
<span class="line"><span>&lt;/div&gt;</span></span></code></pre></div><h3 id="js" tabindex="-1">JS <a class="header-anchor" href="#js" aria-label="Permalink to &quot;JS&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;script setup&gt;</span></span>
<span class="line"><span>import { reactive, onMounted } from &#39;vue&#39;</span></span>
<span class="line"><span>import { message } from &#39;ant-design-vue&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>// TODO</span></span>
<span class="line"><span>const publicInfo = reactive({</span></span>
<span class="line"><span>    spinning: false,</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 获取下拉框选项</span></span>
<span class="line"><span>function handleOptions() {</span></span>
<span class="line"><span>    const options = reactive({</span></span>
<span class="line"><span>        list: [],</span></span>
<span class="line"><span>    })</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    const q = reactive({</span></span>
<span class="line"><span>        selectValue: &#39;1&#39;,</span></span>
<span class="line"><span>    })</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    const getOptions = async () =&gt; {</span></span>
<span class="line"><span>        try {</span></span>
<span class="line"><span>            // const params = {</span></span>
<span class="line"><span>            //     projectId: projectObj?.id,</span></span>
<span class="line"><span>            // }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            options.list = []</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            // const resp = await getFaciLtySelectApi(params)</span></span>
<span class="line"><span>            // options.list = resp.data.map((item) =&gt; {</span></span>
<span class="line"><span>            //     return {</span></span>
<span class="line"><span>            //         label: item.value,</span></span>
<span class="line"><span>            //         value: item.code,</span></span>
<span class="line"><span>            //     }</span></span>
<span class="line"><span>            // })</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>            options.list = [</span></span>
<span class="line"><span>                {</span></span>
<span class="line"><span>                    label: &#39;选项01&#39;,</span></span>
<span class="line"><span>                    value: &#39;1&#39;,</span></span>
<span class="line"><span>                },</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                {</span></span>
<span class="line"><span>                    label: &#39;选项02&#39;,</span></span>
<span class="line"><span>                    value: &#39;2&#39;,</span></span>
<span class="line"><span>                },</span></span>
<span class="line"><span>            ]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            options.list.unshift({</span></span>
<span class="line"><span>                label: &#39;全部&#39;,</span></span>
<span class="line"><span>                value: 0,</span></span>
<span class="line"><span>            })</span></span>
<span class="line"><span>        } catch (err) {</span></span>
<span class="line"><span>            console.log(&#39;err &#39;, err)</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    const handleChange = (value) =&gt; {</span></span>
<span class="line"><span>        console.log(&#39;value&#39;, value)</span></span>
<span class="line"><span>        getTableList(value) // 调用接口</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    onMounted(() =&gt; {</span></span>
<span class="line"><span>        getOptions()</span></span>
<span class="line"><span>    })</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    return { options, q, handleChange }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>const { options, q, handleChange } = handleOptions()</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 表格处理</span></span>
<span class="line"><span>function handleTable() {</span></span>
<span class="line"><span>    const edit = reactive({</span></span>
<span class="line"><span>        activeIndex: undefined,</span></span>
<span class="line"><span>        currentRow: null,</span></span>
<span class="line"><span>    })</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    const table = reactive({</span></span>
<span class="line"><span>        loading: false,</span></span>
<span class="line"><span>        total: 0,</span></span>
<span class="line"><span>        list: [],</span></span>
<span class="line"><span>        selectKeys: [],</span></span>
<span class="line"><span>        columns: [</span></span>
<span class="line"><span>            { title: &#39;序号&#39;, key: &#39;index&#39;, dataIndex: &#39;index&#39;, align: &#39;center&#39;, width: &#39;6%&#39; },</span></span>
<span class="line"><span>            { title: &#39;设施名称&#39;, key: &#39;faciliityName&#39;, dataIndex: &#39;faciliityName&#39;, align: &#39;center&#39;, width: &#39;10%&#39; },</span></span>
<span class="line"><span>            { title: &#39;定员类型&#39;, key: &#39;quotaTypeName&#39;, dataIndex: &#39;quotaTypeName&#39;, align: &#39;center&#39;, width: &#39;10%&#39; },</span></span>
<span class="line"><span>            { title: &#39;近期数量&#39;, key: &#39;recentNumber&#39;, dataIndex: &#39;recentNumber&#39;, align: &#39;center&#39;, width: &#39;10%&#39; },</span></span>
<span class="line"><span>            { title: &#39;远期数量&#39;, key: &#39;forwardNumber&#39;, dataIndex: &#39;forwardNumber&#39;, align: &#39;center&#39;, width: &#39;10%&#39; },</span></span>
<span class="line"><span>            { title: &#39;操作&#39;, dataIndex: &#39;opts&#39;, align: &#39;center&#39;, key: &#39;opts&#39;, width: &#39;10%&#39; },</span></span>
<span class="line"><span>        ],</span></span>
<span class="line"><span>    })</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    const customRow = (record, index) =&gt; {</span></span>
<span class="line"><span>        return {</span></span>
<span class="line"><span>            onClick: (event) =&gt; {</span></span>
<span class="line"><span>                console.log(&#39;record&#39;, record)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                edit.currentRow = null</span></span>
<span class="line"><span>                edit.activeIndex = index</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                edit.currentRow = record // 这里不赋值貌似会报错</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                edit.currentRow.id = record.id</span></span>
<span class="line"><span>                edit.currentRow.maxOnDuty = record.maxOnDuty</span></span>
<span class="line"><span>                edit.currentRow.projectId = record.projectId</span></span>
<span class="line"><span>                edit.currentRow.dataId = record.dataId</span></span>
<span class="line"><span>                edit.currentRow.faciliityId = record.faciliityId</span></span>
<span class="line"><span>                edit.currentRow.faciliityName = record.faciliityName</span></span>
<span class="line"><span>                edit.currentRow.quotaType = record.quotaType</span></span>
<span class="line"><span>                edit.currentRow.quotaTypeName = record.quotaTypeName</span></span>
<span class="line"><span>                edit.currentRow.recentNumber = record.recentNumber</span></span>
<span class="line"><span>                edit.currentRow.forwardNumber = record.forwardNumber</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                event.stopPropagation() // 阻止冒泡</span></span>
<span class="line"><span>            },</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    const getTableList = async () =&gt; {</span></span>
<span class="line"><span>        try {</span></span>
<span class="line"><span>            // const params = {</span></span>
<span class="line"><span>            //     projId: projectObj?.id,</span></span>
<span class="line"><span>            //     faciliityId: selectValue,</span></span>
<span class="line"><span>            // }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            // 初始化</span></span>
<span class="line"><span>            table.loading = true</span></span>
<span class="line"><span>            table.list = []</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            // const resp = await getScaleCalculationPerQuotaModelAllApi(params)</span></span>
<span class="line"><span>            // if (!resp.data.length) {</span></span>
<span class="line"><span>            //     message.error(&#39;未获取当相关内容&#39;)</span></span>
<span class="line"><span>            //     table.loading = false</span></span>
<span class="line"><span>            //     return false</span></span>
<span class="line"><span>            // }</span></span>
<span class="line"><span>            // table.list = resp.data.map((item) =&gt; item)</span></span>
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
<span class="line"><span>            console.log(&#39;err &#39;, err)</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    const updateData = async () =&gt; {</span></span>
<span class="line"><span>        try {</span></span>
<span class="line"><span>            // const params = {</span></span>
<span class="line"><span>            //     id: Number(edit.currentRow.id),</span></span>
<span class="line"><span>            //     maxOnDuty: Number(edit.currentRow.maxOnDuty),</span></span>
<span class="line"><span>            //     projectId: Number(edit.currentRow.projectId),</span></span>
<span class="line"><span>            //     dataId: edit.currentRow.dataId + &#39;&#39;,</span></span>
<span class="line"><span>            //     faciliityId: Number(edit.currentRow.faciliityId),</span></span>
<span class="line"><span>            //     faciliityName: edit.currentRow.faciliityName + &#39;&#39;,</span></span>
<span class="line"><span>            //     quotaType: Number(edit.currentRow.quotaType),</span></span>
<span class="line"><span>            //     quotaTypeName: &#39;string&#39;,</span></span>
<span class="line"><span>            //     recentNumber: Number(edit.currentRow.recentNumber),</span></span>
<span class="line"><span>            //     forwardNumber: Number(edit.currentRow.forwardNumber),</span></span>
<span class="line"><span>            // }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            // const resp = await updateScaleCalculationPerQuotaApi(params)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            // if (resp.data) {</span></span>
<span class="line"><span>            //     message.success(&#39;保存成功&#39;)</span></span>
<span class="line"><span>            //     edit.activeIndex = undefined</span></span>
<span class="line"><span>            // } else {</span></span>
<span class="line"><span>            //     message.error(&#39;保存失败&#39;)</span></span>
<span class="line"><span>            // }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            message.success(&#39;保存成功&#39;)</span></span>
<span class="line"><span>            edit.activeIndex = undefined</span></span>
<span class="line"><span>        } catch (err) {</span></span>
<span class="line"><span>            console.log(&#39;err &#39;, err)</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    onMounted(() =&gt; {</span></span>
<span class="line"><span>        getTableList()</span></span>
<span class="line"><span>    })</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    return { edit, table, customRow, getTableList, updateData }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>const { edit, table, customRow, getTableList, updateData } = handleTable()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const deleteItem = (id) =&gt; {</span></span>
<span class="line"><span>    console.log(&#39;id&#39;, id)</span></span>
<span class="line"><span>    message.success(&#39;删除成功&#39;)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&lt;/script&gt;</span></span></code></pre></div>`,6),t=[e];function i(c,o,r,u,d,m){return a(),s("div",null,t)}const b=n(l,[["render",i]]);export{q as __pageData,b as default};
