import{_ as s,c as n,o as a,U as p}from"./chunks/framework.FpOEJISx.js";const g=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"public/static/_file/md/demo/modal/modal02.md","filePath":"public/static/_file/md/demo/modal/modal02.md"}'),l={name:"public/static/_file/md/demo/modal/modal02.md"},e=p(`<div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>    &lt;div&gt;</span></span>
<span class="line"><span>        &lt;div class=&quot;sider-header&quot;&gt;</span></span>
<span class="line"><span>            &lt;div class=&quot;operate&quot;&gt;</span></span>
<span class="line"><span>                &lt;Button type=&quot;primary&quot; class=&quot;mr15 pointer&quot; @click=&quot;addModal&quot;&gt;新增&lt;/Button&gt;</span></span>
<span class="line"><span>                &lt;Button type=&quot;primary&quot; class=&quot;mr15 pointer&quot; @click=&quot;editModal&quot;&gt;编辑&lt;/Button&gt;</span></span>
<span class="line"><span>            &lt;/div&gt;</span></span>
<span class="line"><span>        &lt;/div&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        &lt;Modal</span></span>
<span class="line"><span>            v-model:visible=&quot;dialog.visiable&quot;</span></span>
<span class="line"><span>            :maskClosable=&quot;false&quot;</span></span>
<span class="line"><span>            :title=&quot;dialog.title&quot;</span></span>
<span class="line"><span>            okText=&quot;保存&quot;</span></span>
<span class="line"><span>            cancelText=&quot;取消&quot;</span></span>
<span class="line"><span>            :width=&quot;580&quot;</span></span>
<span class="line"><span>            @ok=&quot;save&quot;</span></span>
<span class="line"><span>        &gt;</span></span>
<span class="line"><span>            &lt;Form</span></span>
<span class="line"><span>                ref=&quot;formRef&quot;</span></span>
<span class="line"><span>                :model=&quot;inputData&quot;</span></span>
<span class="line"><span>                :rules=&quot;rules&quot;</span></span>
<span class="line"><span>                :labelCol=&quot;{ span: 4 }&quot;</span></span>
<span class="line"><span>                :wrapperCol=&quot;{ span: 20 }&quot;</span></span>
<span class="line"><span>                autocomplete=&quot;off&quot;</span></span>
<span class="line"><span>            &gt;</span></span>
<span class="line"><span>                 &lt;FormItem label=&quot;工作内容&quot; name=&quot;jobContent&quot;&gt;</span></span>
<span class="line"><span>                    &lt;Select v-model:value=&quot;q.jobContent&quot; class=&quot;width_220&quot;&gt;</span></span>
<span class="line"><span>                        &lt;SelectOption v-for=&quot;(item) of options.jobContentList&quot; :key=&quot;item.value&quot; :value=&quot;item.value&quot;&gt;{{ item.label }}&lt;/SelectOption&gt;</span></span>
<span class="line"><span>                    &lt;/Select&gt;</span></span>
<span class="line"><span>                &lt;/FormItem&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                &lt;FormItem label=&quot;篇名&quot; name=&quot;title&quot;&gt;</span></span>
<span class="line"><span>                    &lt;Input v-model:value=&quot;inputData.title&quot; /&gt;</span></span>
<span class="line"><span>                &lt;/FormItem&gt;</span></span>
<span class="line"><span>                &lt;FormItem label=&quot;章节名&quot; name=&quot;chapterName&quot;&gt;</span></span>
<span class="line"><span>                    &lt;Input v-model:value=&quot;inputData.chapterName&quot; /&gt;</span></span>
<span class="line"><span>                &lt;/FormItem&gt;</span></span>
<span class="line"><span>            &lt;/Form&gt;</span></span>
<span class="line"><span>        &lt;/Modal&gt;</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script lang=&quot;ts&quot; setup&gt;</span></span>
<span class="line"><span>import {</span></span>
<span class="line"><span>    Modal,</span></span>
<span class="line"><span>    Form,</span></span>
<span class="line"><span>    FormItem,</span></span>
<span class="line"><span>    Input,</span></span>
<span class="line"><span>    Button,</span></span>
<span class="line"><span>    Select,</span></span>
<span class="line"><span>    SelectOption,</span></span>
<span class="line"><span>    message</span></span>
<span class="line"><span>} from &#39;ant-design-vue&#39;</span></span>
<span class="line"><span>import { ref, reactive, watch, onMounted } from &#39;vue&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import { showAntConfirm } from &#39;./_js/showAntConfig.js&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>// TODO</span></span>
<span class="line"><span>// 添加/编辑弹框</span></span>
<span class="line"><span>function handleModal() {</span></span>
<span class="line"><span>    const formRef = ref(null)</span></span>
<span class="line"><span>    const dialog = reactive({</span></span>
<span class="line"><span>        visiable: false,</span></span>
<span class="line"><span>        title: &#39;&#39;,</span></span>
<span class="line"><span>    })</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    const inputData = reactive({</span></span>
<span class="line"><span>        id: &#39;&#39;,</span></span>
<span class="line"><span>        title: &#39;&#39;,</span></span>
<span class="line"><span>        chapterName: &#39;&#39;,</span></span>
<span class="line"><span>    })</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    const rules = {</span></span>
<span class="line"><span>        title: [{ required: true, message: &#39;请填写篇名&#39; }],</span></span>
<span class="line"><span>        chapterName: [{ required: true, message: &#39;请填写章节名&#39; }],</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 新增</span></span>
<span class="line"><span>    const addModal = () =&gt; {</span></span>
<span class="line"><span>        formRef.value?.clearValidate()</span></span>
<span class="line"><span>        inputData.id = &#39;&#39;</span></span>
<span class="line"><span>        inputData.title = &#39;&#39;</span></span>
<span class="line"><span>        inputData.chapterName = &#39;&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        dialog.visiable = true</span></span>
<span class="line"><span>        dialog.title = &#39;新增&#39;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 编辑</span></span>
<span class="line"><span>    const editModal = (data) =&gt; {</span></span>
<span class="line"><span>        formRef.value?.clearValidate()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        inputData.id = &#39;1&#39;</span></span>
<span class="line"><span>        inputData.title = &#39;123&#39;</span></span>
<span class="line"><span>        inputData.chapterName = &#39;武汉&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        dialog.visiable = true</span></span>
<span class="line"><span>        dialog.title = &#39;编辑&#39;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 确定/保存</span></span>
<span class="line"><span>    const save = async () =&gt; {</span></span>
<span class="line"><span>        try {</span></span>
<span class="line"><span>            const params = {</span></span>
<span class="line"><span>                id: inputData.id,</span></span>
<span class="line"><span>                code: inputData.title,</span></span>
<span class="line"><span>                proName: inputData.chapterName,</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            // 调用接口</span></span>
<span class="line"><span>            // const resp = await api.updateProjectApi(params)</span></span>
<span class="line"><span>            // if (resp.success) {</span></span>
<span class="line"><span>            //     message.success(&#39;保存成功&#39;)</span></span>
<span class="line"><span>            //     dialog.visiable = false</span></span>
<span class="line"><span>            //     // 重新请求数据 (分页与检索条件不变)</span></span>
<span class="line"><span>            //     // getTableList() // 刷新表格</span></span>
<span class="line"><span>            //     formRef.value?.clearValidate()</span></span>
<span class="line"><span>            // }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            dialog.visiable = false</span></span>
<span class="line"><span>        } catch (error) {</span></span>
<span class="line"><span>            console.log(error)</span></span>
<span class="line"><span>            dialog.visiable = false</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    return { formRef, dialog, inputData, rules, addModal, editModal, save }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>const { formRef, dialog, inputData, rules, addModal, editModal, save } = handleModal()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function handleOptions () {</span></span>
<span class="line"><span>    const options = reactive({</span></span>
<span class="line"><span>        jobContentList: [],</span></span>
<span class="line"><span>    })</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    const q = reactive({</span></span>
<span class="line"><span>        jobContent: &#39;&#39;,</span></span>
<span class="line"><span>    })</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    const getOptions = async () =&gt; {</span></span>
<span class="line"><span>        try {</span></span>
<span class="line"><span>            options.jobContentList = [</span></span>
<span class="line"><span>                {</span></span>
<span class="line"><span>                    label: &#39;选项01&#39;,</span></span>
<span class="line"><span>                    value: &#39;1&#39;</span></span>
<span class="line"><span>                },</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                {</span></span>
<span class="line"><span>                    label: &#39;选项02&#39;,</span></span>
<span class="line"><span>                    value: &#39;2&#39;</span></span>
<span class="line"><span>                },</span></span>
<span class="line"><span>            ]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            // 调接口</span></span>
<span class="line"><span>            // const params = {</span></span>
<span class="line"><span>            //     projectId: publicInfo.projecId,</span></span>
<span class="line"><span>            //     accessToken: publicInfo.accessToken,</span></span>
<span class="line"><span>            // }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            // options.jobContentList = []</span></span>
<span class="line"><span>            // const resp = await getOptionsApi(params)</span></span>
<span class="line"><span>            // if (resp.success &amp;&amp; resp.data &amp;&amp; resp.data.length) {</span></span>
<span class="line"><span>            //     options.jobContentList = resp.data.map((item) =&gt; {</span></span>
<span class="line"><span>            //         return {</span></span>
<span class="line"><span>            //             label: item.jobContent,</span></span>
<span class="line"><span>            //             value: item.jobContent</span></span>
<span class="line"><span>            //         }</span></span>
<span class="line"><span>            //     })</span></span>
<span class="line"><span>            // } else {</span></span>
<span class="line"><span>            //     // message.error(&#39;未获取到工作内容下拉选项&#39;)</span></span>
<span class="line"><span>            // }</span></span>
<span class="line"><span>        } catch(error) {</span></span>
<span class="line"><span>            console.log(&#39;error&#39;, error)</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    onMounted(() =&gt; {</span></span>
<span class="line"><span>        getOptions()</span></span>
<span class="line"><span>    })</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    return { options, q }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const { options, q } = handleOptions()</span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;style lang=&quot;scss&quot; scoped&gt;</span></span>
<span class="line"><span>.sider-header {</span></span>
<span class="line"><span>    display: flex;</span></span>
<span class="line"><span>    justify-content: space-between;</span></span>
<span class="line"><span>    padding: 10px 5px;</span></span>
<span class="line"><span>    color: #000;</span></span>
<span class="line"><span>    border-bottom: 1px solid #d7d0d0;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    .operate {</span></span>
<span class="line"><span>        display: flex;</span></span>
<span class="line"><span>        justify-content: space-between;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>.mr15 {</span></span>
<span class="line"><span>    margin-right: 15px;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&lt;/style&gt;</span></span></code></pre></div>`,1),t=[e];function i(c,o,u,r,d,m){return a(),n("div",null,t)}const f=s(l,[["render",i]]);export{g as __pageData,f as default};
