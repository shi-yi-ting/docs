import{_ as n,c as s,o as a,U as p}from"./chunks/framework.FpOEJISx.js";const b=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"public/static/_file/md/demo/table/antTable03.md","filePath":"public/static/_file/md/demo/table/antTable03.md"}'),l={name:"public/static/_file/md/demo/table/antTable03.md"},e=p(`<h2 id="表格竖列展示-表头支持点击事件" tabindex="-1">表格竖列展示，表头支持点击事件 <a class="header-anchor" href="#表格竖列展示-表头支持点击事件" aria-label="Permalink to &quot;表格竖列展示，表头支持点击事件&quot;">​</a></h2><p><a href="https://antdv.com/docs/vue/getting-started-cn" target="_blank" rel="noreferrer">antDesign官方文档</a></p><h3 id="html" tabindex="-1">HTML <a class="header-anchor" href="#html" aria-label="Permalink to &quot;HTML&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;div&gt;</span></span>
<span class="line"><span>    &lt;a-spin :spinning=&quot;publicInfo.spinning&quot; tip=&quot;Loading...&quot;&gt;</span></span>
<span class="line"><span>        &lt;a-table</span></span>
<span class="line"><span>            :loading=&quot;table.loading&quot;</span></span>
<span class="line"><span>            :data-source=&quot;table.list&quot;</span></span>
<span class="line"><span>            :columns=&quot;table.columns&quot;</span></span>
<span class="line"><span>            :bordered=&quot;true&quot;</span></span>
<span class="line"><span>            size=&quot;small&quot;</span></span>
<span class="line"><span>            rowKey=&quot;id&quot;</span></span>
<span class="line"><span>            style=&quot;width: 100%;background:border-box;&quot;</span></span>
<span class="line"><span>            :scroll=&quot;{ y: 500 }&quot;</span></span>
<span class="line"><span>            :pagination=&quot;false&quot;</span></span>
<span class="line"><span>        &gt;</span></span>
<span class="line"><span>            &lt;template #headerCell=&quot;{ column }&quot;&gt;</span></span>
<span class="line"><span>                &lt;div v-for=&quot;(item) of table.columns&quot; :key=&quot;item.programmeId&quot; class=&quot;pointer&quot; @click=&quot;clickTabelHeader(item)&quot;&gt;</span></span>
<span class="line"><span>                    &lt;template v-if=&quot;column.key === item.key&quot;&gt;</span></span>
<span class="line"><span>                        &lt;div&gt;{{ item.title }}&lt;/div&gt;</span></span>
<span class="line"><span>                    &lt;/template&gt;</span></span>
<span class="line"><span>                &lt;/div&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            &lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            &lt;template #bodyCell=&quot;{ record, text, column, index }&quot;&gt;</span></span>
<span class="line"><span>                &lt;template v-if=&quot;column.dataIndex === &#39;index&#39;&quot;&gt;</span></span>
<span class="line"><span>                    &lt;a-space&gt;</span></span>
<span class="line"><span>                        {{ Number(index) + 1 }}</span></span>
<span class="line"><span>                    &lt;/a-space&gt;</span></span>
<span class="line"><span>                &lt;/template&gt;</span></span>
<span class="line"><span>            &lt;/template&gt;</span></span>
<span class="line"><span>        &lt;/a-table&gt;</span></span>
<span class="line"><span>    &lt;/a-spin&gt;</span></span>
<span class="line"><span>&lt;/div&gt;</span></span></code></pre></div><h3 id="js" tabindex="-1">JS <a class="header-anchor" href="#js" aria-label="Permalink to &quot;JS&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;script lang=&quot;ts&quot; setup&gt;</span></span>
<span class="line"><span>import { reactive, onMounted } from &#39;vue&#39;</span></span>
<span class="line"><span>import { message } from &#39;ant-design-vue&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>// TODO</span></span>
<span class="line"><span>const publicInfo = reactive({</span></span>
<span class="line"><span>    spinning: false,</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 初始化表参数</span></span>
<span class="line"><span>function defineTable() {</span></span>
<span class="line"><span>    // TS</span></span>
<span class="line"><span>    interface TableColumn {</span></span>
<span class="line"><span>        title: string;</span></span>
<span class="line"><span>        key: string;</span></span>
<span class="line"><span>        dataIndex: string;</span></span>
<span class="line"><span>        align: string;</span></span>
<span class="line"><span>        width?: string;</span></span>
<span class="line"><span>        id?: string;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    interface Table {</span></span>
<span class="line"><span>        loading: boolean;</span></span>
<span class="line"><span>        total: number;</span></span>
<span class="line"><span>        list: any[]; // 这里可以替换为具体的类型</span></span>
<span class="line"><span>        tempList?: any[]; // 缓存用</span></span>
<span class="line"><span>        preSubmitList?: any[], // 预提数组</span></span>
<span class="line"><span>        selectKeys: any[]; // 这里可以替换为具体的类型</span></span>
<span class="line"><span>        columns: TableColumn[];</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 序号列</span></span>
<span class="line"><span>    const indexColumn = {</span></span>
<span class="line"><span>        id: &#39;index&#39;, // 主键ID</span></span>
<span class="line"><span>        programmeId: &#39;index&#39;, // /方案id</span></span>
<span class="line"><span>        programme: &#39;序号&#39;, // /方案名称</span></span>
<span class="line"><span>        layoutCharacteristics: &#39;总图布置形式及布置特点&#39;, // 总图布置形式及布置特点</span></span>
<span class="line"><span>        coverAnArea: &#39;占地面积&#39;, // 占地面积</span></span>
<span class="line"><span>        floorSpace: &#39;建筑面积&#39;, // 建筑面积</span></span>
<span class="line"><span>        tracklayinglength: &#39;铺轨长度&#39;, // 铺轨长度</span></span>
<span class="line"><span>        greenArea: &#39;绿化面积&#39;, // 绿化面积</span></span>
<span class="line"><span>        greeningRate: &#39;绿化率&#39;, // 绿化率</span></span>
<span class="line"><span>        buildingDensity: &#39;建筑密度&#39;, // 建筑密度</span></span>
<span class="line"><span>        isRecommendation: &#39;是否推荐方案&#39;, // 是否推荐方案</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 首列</span></span>
<span class="line"><span>    const firstColumn = {</span></span>
<span class="line"><span>        id: &#39;first&#39;, // 主键ID</span></span>
<span class="line"><span>        programmeId: &#39;first&#39;, // /方案id</span></span>
<span class="line"><span>        programme: &#39;技术指标名称&#39;, // /方案名称</span></span>
<span class="line"><span>        layoutCharacteristics: &#39;总图布置形式及布置特点&#39;, // 总图布置形式及布置特点</span></span>
<span class="line"><span>        coverAnArea: &#39;占地面积&#39;, // 占地面积</span></span>
<span class="line"><span>        floorSpace: &#39;建筑面积&#39;, // 建筑面积</span></span>
<span class="line"><span>        tracklayinglength: &#39;铺轨长度&#39;, // 铺轨长度</span></span>
<span class="line"><span>        greenArea: &#39;绿化面积&#39;, // 绿化面积</span></span>
<span class="line"><span>        greeningRate: &#39;绿化率&#39;, // 绿化率</span></span>
<span class="line"><span>        buildingDensity: &#39;建筑密度&#39;, // 建筑密度</span></span>
<span class="line"><span>        isRecommendation: &#39;是否推荐方案&#39;, // 是否推荐方案</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 尾列</span></span>
<span class="line"><span>    const lastColumn = {</span></span>
<span class="line"><span>        id: &#39;last&#39;, // 主键ID</span></span>
<span class="line"><span>        programmeId: &#39;last&#39;, // /方案id</span></span>
<span class="line"><span>        programme: &#39;-&#39;, // /方案名称</span></span>
<span class="line"><span>        layoutCharacteristics: &#39;&#39;, // 总图布置形式及布置特点</span></span>
<span class="line"><span>        coverAnArea: &#39;&#39;, // 占地面积</span></span>
<span class="line"><span>        floorSpace: &#39;&#39;, // 建筑面积</span></span>
<span class="line"><span>        tracklayinglength: &#39;&#39;, // 铺轨长度</span></span>
<span class="line"><span>        greenArea: &#39;&#39;, // 绿化面积</span></span>
<span class="line"><span>        greeningRate: &#39;&#39;, // 绿化率</span></span>
<span class="line"><span>        buildingDensity: &#39;&#39;, // 建筑密度</span></span>
<span class="line"><span>        isRecommendation: &#39;&#39;, // 是否推荐方案</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 尾列</span></span>
<span class="line"><span>    const addColumn = {</span></span>
<span class="line"><span>        id: &#39;add&#39;, // 主键ID</span></span>
<span class="line"><span>        programmeId: &#39;add&#39;, // /方案id</span></span>
<span class="line"><span>        programme: &#39;+&#39;, // /方案名称</span></span>
<span class="line"><span>        layoutCharacteristics: &#39;&#39;, // 总图布置形式及布置特点</span></span>
<span class="line"><span>        coverAnArea: &#39;&#39;, // 占地面积</span></span>
<span class="line"><span>        floorSpace: &#39;&#39;, // 建筑面积</span></span>
<span class="line"><span>        tracklayinglength: &#39;&#39;, // 铺轨长度</span></span>
<span class="line"><span>        greenArea: &#39;&#39;, // 绿化面积</span></span>
<span class="line"><span>        greeningRate: &#39;&#39;, // 绿化率</span></span>
<span class="line"><span>        buildingDensity: &#39;&#39;, // 建筑密度</span></span>
<span class="line"><span>        isRecommendation: &#39;&#39;, // 是否推荐方案</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 表格</span></span>
<span class="line"><span>    const table: Table = reactive({</span></span>
<span class="line"><span>        loading: false,</span></span>
<span class="line"><span>        total: 0,</span></span>
<span class="line"><span>        list: [],</span></span>
<span class="line"><span>        preSubmitList: [],</span></span>
<span class="line"><span>        selectKeys: [],</span></span>
<span class="line"><span>        columns: [],</span></span>
<span class="line"><span>    })</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    return { table, firstColumn, indexColumn, lastColumn, addColumn }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>const { table, firstColumn, indexColumn, lastColumn, addColumn } = defineTable()</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 表格处理</span></span>
<span class="line"><span>function handleTable() {</span></span>
<span class="line"><span>    // 获取表格数据</span></span>
<span class="line"><span>    const getTableList = () =&gt; {</span></span>
<span class="line"><span>        try {</span></span>
<span class="line"><span>            // const params = {</span></span>
<span class="line"><span>            //     projId: projectObj?.id,</span></span>
<span class="line"><span>            //     faciliityId: selectValue,</span></span>
<span class="line"><span>            // }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            // 初始化</span></span>
<span class="line"><span>            table.loading = true</span></span>
<span class="line"><span>            table.list = []</span></span>
<span class="line"><span>            table.preSubmitList = []</span></span>
<span class="line"><span>            table.columns = []</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            // const resp = await getScaleCalculationPerQuotaModelAllApi(params)</span></span>
<span class="line"><span>            // if (!resp.data.length) {</span></span>
<span class="line"><span>            //     message.error(&#39;未获取当相关内容&#39;)</span></span>
<span class="line"><span>            //     table.loading = false</span></span>
<span class="line"><span>            //     return false</span></span>
<span class="line"><span>            // }</span></span>
<span class="line"><span>            // table.list = resp.data.map((item) =&gt; item)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            // 模拟测试数据</span></span>
<span class="line"><span>            const testData = [</span></span>
<span class="line"><span>                {</span></span>
<span class="line"><span>                    id: 479645901656134, // 主键ID</span></span>
<span class="line"><span>                    programmeId: 479639508996169, // /方案id</span></span>
<span class="line"><span>                    programme: &#39;方案一&#39;, // /方案名称</span></span>
<span class="line"><span>                    layoutCharacteristics: &#39;总图布置形式及布置特点01&#39;, // 总图布置形式及布置特点</span></span>
<span class="line"><span>                    coverAnArea: &#39;占地面积01&#39;, // 占地面积</span></span>
<span class="line"><span>                    floorSpace: &#39;建筑面积&#39;, // 建筑面积</span></span>
<span class="line"><span>                    tracklayinglength: &#39;铺轨长度&#39;, // 铺轨长度</span></span>
<span class="line"><span>                    greenArea: &#39;绿化面积&#39;, // 绿化面积</span></span>
<span class="line"><span>                    greeningRate: &#39;绿化率&#39;, // 绿化率</span></span>
<span class="line"><span>                    buildingDensity: &#39;建筑密度&#39;, // 建筑密度</span></span>
<span class="line"><span>                    isRecommendation: &#39;是否推荐方案&#39;, // 是否推荐方案</span></span>
<span class="line"><span>                },</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                {</span></span>
<span class="line"><span>                    id: 479949655281735, // 主键ID</span></span>
<span class="line"><span>                    programmeId: 479949655281735, // /方案id</span></span>
<span class="line"><span>                    programme: &#39;方案二&#39;, // /方案名称</span></span>
<span class="line"><span>                    layoutCharacteristics: &#39;总图布置形式及布置特点02&#39;, // 总图布置形式及布置特点</span></span>
<span class="line"><span>                    coverAnArea: &#39;占地面积02&#39;, // 占地面积</span></span>
<span class="line"><span>                    floorSpace: &#39;建筑面积&#39;, // 建筑面积</span></span>
<span class="line"><span>                    tracklayinglength: &#39;铺轨长度&#39;, // 铺轨长度</span></span>
<span class="line"><span>                    greenArea: &#39;绿化面积&#39;, // 绿化面积</span></span>
<span class="line"><span>                    greeningRate: &#39;绿化率&#39;, // 绿化率</span></span>
<span class="line"><span>                    buildingDensity: &#39;建筑密度&#39;, // 建筑密度</span></span>
<span class="line"><span>                    isRecommendation: &#39;是否推荐方案&#39;, // 是否推荐方案</span></span>
<span class="line"><span>                },</span></span>
<span class="line"><span>            ]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            if (testData.length) {</span></span>
<span class="line"><span>                table.preSubmitList = testData.map((item) =&gt; item)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                table.preSubmitList.unshift(firstColumn)</span></span>
<span class="line"><span>                table.preSubmitList.unshift(indexColumn)</span></span>
<span class="line"><span>                table.preSubmitList.push(addColumn)</span></span>
<span class="line"><span>            } else {</span></span>
<span class="line"><span>                message.warning(&#39;未获取到相关内容&#39;)</span></span>
<span class="line"><span>                table.preSubmitList.unshift(lastColumn)</span></span>
<span class="line"><span>                table.preSubmitList.unshift(firstColumn)</span></span>
<span class="line"><span>                table.preSubmitList.unshift(indexColumn)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                table.loading = false</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>            // 表头处理</span></span>
<span class="line"><span>            table.columns = table.preSubmitList.map((item) =&gt; {</span></span>
<span class="line"><span>                let width = &#39;&#39;</span></span>
<span class="line"><span>                if (item.programmeId === &#39;index&#39;) {</span></span>
<span class="line"><span>                    width = &#39;80px&#39;</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>                return {</span></span>
<span class="line"><span>                    id: item.id,</span></span>
<span class="line"><span>                    title: item.programme,</span></span>
<span class="line"><span>                    key: item.programmeId,</span></span>
<span class="line"><span>                    dataIndex: item.programmeId,</span></span>
<span class="line"><span>                    align: &#39;center&#39;,</span></span>
<span class="line"><span>                    width,</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>            })</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            // 创建表格数据</span></span>
<span class="line"><span>            for (let i = 1; i &lt; Object.keys(table.preSubmitList[0]).length; i++) {</span></span>
<span class="line"><span>                const row = {}</span></span>
<span class="line"><span>                table.columns.forEach((column, index) =&gt; {</span></span>
<span class="line"><span>                    // 控制某些字段不展示</span></span>
<span class="line"><span>                    if (![&#39;programmeId&#39;, &#39;programme&#39;, &#39;id&#39;].includes(Object.keys(table.preSubmitList[0])[i])) {</span></span>
<span class="line"><span>                        row[column.dataIndex] = table.preSubmitList[index][Object.keys(table.preSubmitList[0])[i]]</span></span>
<span class="line"><span>                    }</span></span>
<span class="line"><span>                })</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                // 避免添加空对象</span></span>
<span class="line"><span>                if (Object.keys(row).length) {</span></span>
<span class="line"><span>                    table.list.push(row)</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            table.loading = false</span></span>
<span class="line"><span>        } catch (err) {</span></span>
<span class="line"><span>            console.log(&#39;err &#39;, err)</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    let i = 3 // 测试用</span></span>
<span class="line"><span>    // 点击表头处理</span></span>
<span class="line"><span>    const clickTabelHeader = (item) =&gt; {</span></span>
<span class="line"><span>        if (item.key === &#39;first&#39; || item.key === &#39;last&#39;) {</span></span>
<span class="line"><span>            return false</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        if (item.key === &#39;add&#39;) {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            // 初始化</span></span>
<span class="line"><span>            table.list = []</span></span>
<span class="line"><span>            table.columns = []</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            const addData = {</span></span>
<span class="line"><span>                id: i, // 主键ID</span></span>
<span class="line"><span>                programmeId: i, // /方案id</span></span>
<span class="line"><span>                programme: \`方案\${i}\`, // /方案名称</span></span>
<span class="line"><span>                layoutCharacteristics: \`总图布置形式及布置特点\${i}\`, // 总图布置形式及布置特点</span></span>
<span class="line"><span>                coverAnArea: &#39;占地面积02&#39;, // 占地面积</span></span>
<span class="line"><span>                floorSpace: &#39;建筑面积&#39;, // 建筑面积</span></span>
<span class="line"><span>                tracklayinglength: &#39;铺轨长度&#39;, // 铺轨长度</span></span>
<span class="line"><span>                greenArea: &#39;绿化面积&#39;, // 绿化面积</span></span>
<span class="line"><span>                greeningRate: &#39;绿化率&#39;, // 绿化率</span></span>
<span class="line"><span>                buildingDensity: &#39;建筑密度&#39;, // 建筑密度</span></span>
<span class="line"><span>                isRecommendation: &#39;是否推荐方案&#39;, // 是否推荐方案</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            table.preSubmitList.splice(table.preSubmitList.length - 1, 0, addData) // 插入到倒数第二列</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            // 表头处理</span></span>
<span class="line"><span>            table.columns = table.preSubmitList.map((item) =&gt; {</span></span>
<span class="line"><span>                let width = &#39;&#39;</span></span>
<span class="line"><span>                if (item.programmeId === &#39;index&#39;) {</span></span>
<span class="line"><span>                    width = &#39;80px&#39;</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>                return {</span></span>
<span class="line"><span>                    id: item.id,</span></span>
<span class="line"><span>                    title: item.programme,</span></span>
<span class="line"><span>                    key: item.programmeId,</span></span>
<span class="line"><span>                    dataIndex: item.programmeId,</span></span>
<span class="line"><span>                    align: &#39;center&#39;,</span></span>
<span class="line"><span>                    width,</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>            })</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            // 创建表格数据</span></span>
<span class="line"><span>            for (let i = 1; i &lt; Object.keys(table.preSubmitList[0]).length; i++) {</span></span>
<span class="line"><span>                const row = {}</span></span>
<span class="line"><span>                table.columns.forEach((column, index) =&gt; {</span></span>
<span class="line"><span>                    // 控制某些字段不展示</span></span>
<span class="line"><span>                    if (![&#39;programmeId&#39;, &#39;programme&#39;, &#39;id&#39;].includes(Object.keys(table.preSubmitList[0])[i])) {</span></span>
<span class="line"><span>                        row[column.dataIndex] = table.preSubmitList[index][Object.keys(table.preSubmitList[0])[i]]</span></span>
<span class="line"><span>                    }</span></span>
<span class="line"><span>                })</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                // 避免添加空对象</span></span>
<span class="line"><span>                if (Object.keys(row).length) {</span></span>
<span class="line"><span>                    table.list.push(row)</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            i++ // 递增</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        message.success(&#39;点击了表头&#39;)</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    onMounted(() =&gt; {</span></span>
<span class="line"><span>        getTableList()</span></span>
<span class="line"><span>    })</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    return { clickTabelHeader }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>const { clickTabelHeader } = handleTable()</span></span>
<span class="line"><span>&lt;/script&gt;</span></span></code></pre></div>`,6),i=[e];function t(c,o,r,m,d,u){return a(),s("div",null,i)}const h=n(l,[["render",t]]);export{b as __pageData,h as default};
