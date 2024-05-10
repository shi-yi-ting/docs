import{_ as s,c as n,o as a,U as p}from"./chunks/framework.FpOEJISx.js";const h=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"public/static/_file/md/demo/mock/addData.md","filePath":"public/static/_file/md/demo/mock/addData.md"}'),e={name:"public/static/_file/md/demo/mock/addData.md"},l=p(`<h2 id="接口请求" tabindex="-1">接口请求 <a class="header-anchor" href="#接口请求" aria-label="Permalink to &quot;接口请求&quot;">​</a></h2><h3 id="组件" tabindex="-1">组件 <a class="header-anchor" href="#组件" aria-label="Permalink to &quot;组件&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>    &lt;div&gt;</span></span>
<span class="line"><span>         &lt;span style=&quot;margin-right: 15px&quot;&gt;</span></span>
<span class="line"><span>            &lt;span&gt;</span></span>
<span class="line"><span>                &lt;label for=&quot;&quot; style=&quot;margin-right: 5px;&quot;&gt;标题: &lt;/label&gt;</span></span>
<span class="line"><span>                &lt;Input v-model:value=&quot;title&quot; type=&quot;text&quot; style=&quot;margin-top: 15px; width: 100px;&quot; /&gt;</span></span>
<span class="line"><span>            &lt;/span&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            &lt;span style=&quot;margin-left: 15px;&quot;&gt;</span></span>
<span class="line"><span>                &lt;label for=&quot;&quot; style=&quot;margin-right: 5px;&quot;&gt;内容: &lt;/label&gt;</span></span>
<span class="line"><span>                &lt;Input v-model:value=&quot;content&quot; type=&quot;text&quot; style=&quot;margin-top: 15px; width: 160px;&quot; /&gt;</span></span>
<span class="line"><span>            &lt;/span&gt;</span></span>
<span class="line"><span>        &lt;/span&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        &lt;Button type=&quot;primary&quot; style=&quot;margin-right: 15px;&quot; @click=&quot;submit&quot;&gt;提交&lt;/Button&gt;</span></span>
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
<span class="line"><span>import { ref, reactive, watch, onMounted } from &#39;vue&#39;</span></span>
<span class="line"><span>import { Spin, Space, Table, Popconfirm, Button, Select, SelectOption, Input, Tree, InputSearch, message } from &#39;ant-design-vue&#39;</span></span>
<span class="line"><span>import type { ColumnType } from &#39;ant-design-vue/lib/table&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import { addProjectApi, getProjectsApi } from &#39;@/api/mockRequest.js&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// TS</span></span>
<span class="line"><span>type PageChangeData = {</span></span>
<span class="line"><span>    current: number;</span></span>
<span class="line"><span>    pageSize: number;</span></span>
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
<span class="line"><span>type TableItem = {</span></span>
<span class="line"><span>    title: number | string | null,</span></span>
<span class="line"><span>    createdTime: string | null,</span></span>
<span class="line"><span>    content: string | null,</span></span>
<span class="line"><span>}</span></span>
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
<span class="line"><span>            { title: &#39;标题&#39;, key: &#39;title&#39;, dataIndex: &#39;title&#39;, align: &#39;center&#39;, width: &#39;25%&#39; },</span></span>
<span class="line"><span>            { title: &#39;创建时间&#39;, key: &#39;createdTime&#39;, dataIndex: &#39;createdTime&#39;, align: &#39;center&#39;, width: &#39;25%&#39; },</span></span>
<span class="line"><span>            { title: &#39;内容&#39;, key: &#39;content&#39;, dataIndex: &#39;content&#39;, align: &#39;center&#39;, width: &#39;25%&#39; },</span></span>
<span class="line"><span>            { title: &#39;操作&#39;, dataIndex: &#39;opts&#39;, align: &#39;center&#39;, key: &#39;opts&#39;, width: &#39;12%&#39; },</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        ] as ColumnType[],</span></span>
<span class="line"><span>    })</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 获取表格数据</span></span>
<span class="line"><span>    const getTableList = async () =&gt; {</span></span>
<span class="line"><span>        try {</span></span>
<span class="line"><span>            table.loading = true</span></span>
<span class="line"><span>            table.total = 0</span></span>
<span class="line"><span>            table.list = []</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            const resp = await getProjectsApi()</span></span>
<span class="line"><span>            console.log(&#39;getProjectsApi&#39;, resp)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            if (resp.status === 200 &amp;&amp; resp.data &amp;&amp; resp.data.length) {</span></span>
<span class="line"><span>                table.list = resp.data.map((item: TableItem) =&gt; item)</span></span>
<span class="line"><span>                table.total = resp.data?.length</span></span>
<span class="line"><span>            }</span></span>
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
<span class="line"><span>        message.success(&#39;调用删除接口&#39;)</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    onMounted(() =&gt; {</span></span>
<span class="line"><span>        // getTableList()</span></span>
<span class="line"><span>    })</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    return { page, table, onSelectChange, pageChange, deleteItem, getTableList }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>const { page, table, onSelectChange, pageChange, deleteItem, getTableList } = handleTable()</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>const title = ref&lt;string&gt;(&#39;&#39;)</span></span>
<span class="line"><span>const content = ref&lt;string&gt;(&#39;&#39;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const submit = async () =&gt; {</span></span>
<span class="line"><span>    let params = {</span></span>
<span class="line"><span>        title: title.value,</span></span>
<span class="line"><span>        content: content.value</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    const resp = await addProjectApi(params) // 添加数据的接口,数据为一个对象，有个title属性</span></span>
<span class="line"><span>    console.log(&#39;addProjectApi&#39;, resp)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    getTableList()</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;style scoped&gt;</span></span>
<span class="line"><span>&lt;/style&gt;</span></span></code></pre></div><h3 id="mockrequest-js" tabindex="-1">mockRequest.js <a class="header-anchor" href="#mockrequest-js" aria-label="Permalink to &quot;mockRequest.js&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>import http from &#39;@/api/mockAxios.js&#39;</span></span>
<span class="line"><span>import qs from &#39;qs&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export const addProjectApi = (params) =&gt; http.post(&#39;/mock/addProject&#39;, params)</span></span>
<span class="line"><span>// export const addProjectApi = (params) =&gt; http.post(&#39;/mock/addProject&#39;, qs.stringify(params))</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export const getProjectsApi = () =&gt; http.get(&#39;/mock/projects&#39;)</span></span></code></pre></div><h3 id="mockaxios-js" tabindex="-1">mockAxios.js <a class="header-anchor" href="#mockaxios-js" aria-label="Permalink to &quot;mockAxios.js&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>import axios from &#39;axios&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const instance = axios.create({</span></span>
<span class="line"><span>    // baseURL: &quot;https://api.example.com&quot;, // 根据你的需求设置基础URL</span></span>
<span class="line"><span>    baseURL: &#39;&#39;, // mock的时候这里只能是空，不然会有问题</span></span>
<span class="line"><span>    timeout: 5000, // 请求超时时间，根据需要设置</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 在请求发送之前，可以添加一些全局的请求拦截器</span></span>
<span class="line"><span>instance.interceptors.request.use(</span></span>
<span class="line"><span>    (config) =&gt; {</span></span>
<span class="line"><span>    // 在请求发送之前可以做一些处理，如添加请求头等</span></span>
<span class="line"><span>        return config</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    (error) =&gt; {</span></span>
<span class="line"><span>        return Promise.reject(error)</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 在响应收到之后，可以添加一些全局的响应拦截器</span></span>
<span class="line"><span>instance.interceptors.response.use(</span></span>
<span class="line"><span>    (response) =&gt; {</span></span>
<span class="line"><span>    // 在响应收到之后可以做一些处理，如解析数据等</span></span>
<span class="line"><span>        return response</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    (error) =&gt; {</span></span>
<span class="line"><span>        return Promise.reject(error)</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export default instance</span></span></code></pre></div><h2 id="mock拦截处理" tabindex="-1">mock拦截处理 <a class="header-anchor" href="#mock拦截处理" aria-label="Permalink to &quot;mock拦截处理&quot;">​</a></h2><h3 id="mock-js" tabindex="-1">mock.js <a class="header-anchor" href="#mock-js" aria-label="Permalink to &quot;mock.js&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// 拦截该url，获取（查询），新增，删除数据</span></span>
<span class="line"><span>// const Mock = require(&#39;mockjs&#39;) // 导入mockjs</span></span>
<span class="line"><span>import Mock from &#39;mockjs&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 获取数据</span></span>
<span class="line"><span>import { get } from &#39;./get.js&#39;</span></span>
<span class="line"><span>Mock.mock(&#39;/mock/news&#39;, get.newList)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 新增数据</span></span>
<span class="line"><span>import &#39;./add.js&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 删除数据</span></span>
<span class="line"><span>import &#39;./delete.js&#39;</span></span></code></pre></div><h3 id="add-js" tabindex="-1">add.js <a class="header-anchor" href="#add-js" aria-label="Permalink to &quot;add.js&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>console.log(&#39;模拟新增数据&#39;)</span></span>
<span class="line"><span>// const Mock = require(&#39;mockjs&#39;) // 导入mockjs</span></span>
<span class="line"><span>import Mock from &#39;mockjs&#39;;</span></span>
<span class="line"><span>import { get } from &#39;./get.js&#39;</span></span>
<span class="line"><span>const Random = Mock.Random // 获取 mock.Random 对象</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function formateTime() {</span></span>
<span class="line"><span>    const date = new Date()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    const year = date.getFullYear()</span></span>
<span class="line"><span>    const month = String(date.getMonth() + 1).padStart(2, &#39;0&#39;)</span></span>
<span class="line"><span>    const day = String(date.getDate()).padStart(2, &#39;0&#39;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    const formattedDate = \`\${year}-\${month}-\${day}\`</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    return formattedDate</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>let projectList = []</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Mock.mock(&#39;/mock/addProject&#39;, (ops) =&gt; { // 拦截ajax请求，调用函数</span></span>
<span class="line"><span>    console.log(&#39;ops&#39;, ops)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // // 方式一（如果请求使用了qs.stringify(params)则需要使用URLSearchParams进行解析）</span></span>
<span class="line"><span>    // // export const addProjectApi = (params) =&gt; http.post(&#39;/mock/addProject&#39;, qs.stringify(params))</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // // 解析请求体，获取参数 使用 URLSearchParams 解析表单编码的数据</span></span>
<span class="line"><span>    // const formData = new URLSearchParams(ops.body)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // // 获取参数</span></span>
<span class="line"><span>    // const title = formData.get(&#39;title&#39;)</span></span>
<span class="line"><span>    // const content = formData.get(&#39;content&#39;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 方式二</span></span>
<span class="line"><span>    // export const addProjectApi = (params) =&gt; http.post(&#39;/mock/addProject&#39;, params)</span></span>
<span class="line"><span>    const params = JSON.parse(ops.body)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    let obj = {</span></span>
<span class="line"><span>        title: params.title,</span></span>
<span class="line"><span>        content: params.content,</span></span>
<span class="line"><span>        createdTime: formateTime(),</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    console.log(&#39;addobj&#39;, obj);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    projectList.push(obj)</span></span>
<span class="line"><span>    // return projectList</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span>Mock.mock(&#39;/mock/projects&#39;, projectList)</span></span></code></pre></div>`,12),t=[l];function i(c,o,r,d,g,u){return a(),n("div",null,t)}const q=s(e,[["render",i]]);export{h as __pageData,q as default};
