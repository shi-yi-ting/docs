import{_ as n,c as s,o as a,U as p}from"./chunks/framework.FpOEJISx.js";const v=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"public/static/_file/md/demo/select/antSelect02.md","filePath":"public/static/_file/md/demo/select/antSelect02.md"}'),l={name:"public/static/_file/md/demo/select/antSelect02.md"},e=p(`<div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>    &lt;div&gt;</span></span>
<span class="line"><span>        &lt;!-- 多选时候如果默认不加这个也是可以搜索的前提是options.list中的label和value要一致 --&gt;</span></span>
<span class="line"><span>        &lt;!-- 加filterOption之后可指定是按value搜索还是label搜搜 --&gt;</span></span>
<span class="line"><span>        &lt;Select v-model:value=&quot;q.quotaTypeName&quot; mode=&quot;multiple&quot; :allowClear=&quot;true&quot; :filterOption=&quot;options.filterOption&quot; placeholder=&quot;Select a person&quot; style=&quot;width: 220px;&quot; @change=&quot;handleChange&quot;&gt;</span></span>
<span class="line"><span>            &lt;SelectOption v-for=&quot;(item) of options.list&quot; :key=&quot;item.label&quot; :value=&quot;item.label&quot;&gt;{{ item.label }}&lt;/SelectOption&gt;</span></span>
<span class="line"><span>        &lt;/Select&gt;</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script lang=&quot;ts&quot; setup&gt;</span></span>
<span class="line"><span>import { reactive, onMounted } from &#39;vue&#39;</span></span>
<span class="line"><span>import { Select, SelectOption, message } from &#39;ant-design-vue&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>// TODO</span></span>
<span class="line"><span>// 获取下拉框选项</span></span>
<span class="line"><span>function handleOptions() {</span></span>
<span class="line"><span>    const options = reactive({</span></span>
<span class="line"><span>        list: [],</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        filterOption: (input: string, option: any) =&gt; {</span></span>
<span class="line"><span>            // return option.value.toLowerCase().indexOf(input.toLowerCase()) &gt;= 0 // 根据value进行搜索</span></span>
<span class="line"><span>            return option.key.toLowerCase().indexOf(input.toLowerCase()) &gt;= 0 // 将key设置为label,则可以根据label进行搜索</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>    })</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    const q = reactive({</span></span>
<span class="line"><span>        selectValue: &#39;0&#39;,</span></span>
<span class="line"><span>        quotaTypeName: [],</span></span>
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
<span class="line"><span>                { value: &#39;Jack&#39;, label: &#39;Jack&#39; },</span></span>
<span class="line"><span>                { value: &#39;Lucy&#39;, label: &#39;Lucy&#39; },</span></span>
<span class="line"><span>                { value: &#39;Tom&#39;, label: &#39;Tom&#39; },</span></span>
<span class="line"><span>            ]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            options.list.unshift({</span></span>
<span class="line"><span>                label: &#39;全部&#39;,</span></span>
<span class="line"><span>                value: &#39;0&#39;,</span></span>
<span class="line"><span>            })</span></span>
<span class="line"><span>        } catch (err) {</span></span>
<span class="line"><span>            console.log(&#39;err &#39;, err)</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    const handleChange = (value) =&gt; {</span></span>
<span class="line"><span>        console.log(&#39;value&#39;, value)</span></span>
<span class="line"><span>        // getTableList(value) // 调用接口</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    onMounted(() =&gt; {</span></span>
<span class="line"><span>        getOptions()</span></span>
<span class="line"><span>    })</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    return { options, q, handleChange }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>const { options, q, handleChange } = handleOptions()</span></span>
<span class="line"><span>&lt;/script&gt;</span></span></code></pre></div>`,1),t=[e];function i(c,o,u,r,d,g){return a(),s("div",null,t)}const _=n(l,[["render",i]]);export{v as __pageData,_ as default};
