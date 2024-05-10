import{_ as s,c as n,o as a,U as p}from"./chunks/framework.FpOEJISx.js";const _=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"public/static/_file/md/demo/select/antSelect.md","filePath":"public/static/_file/md/demo/select/antSelect.md"}'),l={name:"public/static/_file/md/demo/select/antSelect.md"},e=p(`<div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>    &lt;div&gt;</span></span>
<span class="line"><span>        &lt;Select v-model:value=&quot;q.selectValue&quot; style=&quot;width: 220px;&quot; @change=&quot;handChange&quot;&gt;</span></span>
<span class="line"><span>            &lt;SelectOption v-for=&quot;(item) of options.list&quot; :key=&quot;item.value&quot; :value=&quot;item.value&quot;&gt;{{ item.label }}&lt;/SelectOption&gt;</span></span>
<span class="line"><span>        &lt;/Select&gt;</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script setup&gt;</span></span>
<span class="line"><span>import { reactive, onMounted } from &#39;vue&#39;</span></span>
<span class="line"><span>import { Select, SelectOption, message } from &#39;ant-design-vue&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>// TODO</span></span>
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
<span class="line"><span>&lt;/script&gt;</span></span></code></pre></div>`,1),t=[e];function i(c,o,r,u,d,m){return a(),n("div",null,t)}const v=s(l,[["render",i]]);export{_ as __pageData,v as default};
