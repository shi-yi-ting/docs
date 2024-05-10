import{_ as n,c as s,o as a,U as p}from"./chunks/framework.FpOEJISx.js";const q=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"public/static/_file/md/demo/validate/validate.md","filePath":"public/static/_file/md/demo/validate/validate.md"}'),l={name:"public/static/_file/md/demo/validate/validate.md"},t=p(`<div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>    &lt;div style=&quot;padding-bottom: 40px;&quot;&gt;</span></span>
<span class="line"><span>        &lt;div class=&quot;container&quot;&gt;</span></span>
<span class="line"><span>            &lt;div class=&quot;form&quot;&gt;</span></span>
<span class="line"><span>                &lt;div class=&quot;title&quot;&gt;集群告警参数配置&lt;/div&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                &lt;Form ref=&quot;form&quot; :model=&quot;formInfo&quot; :rules=&quot;formRules&quot; labelWidth=&quot;140px&quot; style=&quot;width:500px&quot;&gt;</span></span>
<span class="line"><span>                    &lt;FormItem label=&quot;选择集群&quot;&gt;</span></span>
<span class="line"><span>                        &lt;Select v-model=&quot;cid&quot; placeholder=&quot;请选择活动区域&quot; style=&quot;width:100%&quot; @change=&quot;selectChange($event)&quot;&gt;</span></span>
<span class="line"><span>                            &lt;SelectOption v-for=&quot;(item, index) of configList&quot; :key=&quot;index&quot; ref=&quot;option&quot; :label=&quot;item.label&quot; :value=&quot;item.value&quot;&gt;{{ item.label }}&lt;/SelectOption&gt;</span></span>
<span class="line"><span>                        &lt;/Select&gt;</span></span>
<span class="line"><span>                    &lt;/FormItem&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                    &lt;FormItem label=&quot;CPU使用率&quot; prop=&quot;cpu&quot;&gt;</span></span>
<span class="line"><span>                        &lt;Input v-model=&quot;formInfo.cpu&quot; maxlength=&quot;3&quot; showWordLimit&gt;&lt;/Input&gt;</span></span>
<span class="line"><span>                    &lt;/FormItem&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                    &lt;FormItem label=&quot;分区(Part)阈值&quot; prop=&quot;part&quot;&gt;</span></span>
<span class="line"><span>                        &lt;Input v-model=&quot;formInfo.part&quot; maxlength=&quot;9&quot; showWordLimit&gt;&lt;/Input&gt;</span></span>
<span class="line"><span>                    &lt;/FormItem&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                    &lt;FormItem&gt;</span></span>
<span class="line"><span>                        &lt;Button type=&quot;primary&quot; @click=&quot;saveInfo&quot;&gt;确定&lt;/Button&gt;</span></span>
<span class="line"><span>                    &lt;/FormItem&gt;</span></span>
<span class="line"><span>                &lt;/Form&gt;</span></span>
<span class="line"><span>            &lt;/div&gt;</span></span>
<span class="line"><span>        &lt;/div&gt;</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script lang=&quot;ts&quot; setup&gt;</span></span>
<span class="line"><span>import { ref, reactive } from &#39;vue&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import { Form, FormItem, Table, Popconfirm, Button, Select, SelectOption, Input, Tree, InputSearch, message } from &#39;ant-design-vue&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// TODO</span></span>
<span class="line"><span>const checkInputOne = (rule, value, cb) =&gt; {</span></span>
<span class="line"><span>    const regInputOne = new RegExp(&#39;^(\\\\d|[1-9]\\\\d|100)$&#39;)</span></span>
<span class="line"><span>    if (regInputOne.test(value)) {</span></span>
<span class="line"><span>        return cb()</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    cb(new Error(&#39;请输入0-100之间的整数&#39;))</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    return false</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>const checkInputTwo = (rule, value, cb) =&gt; {</span></span>
<span class="line"><span>    if (/^(0|[1-9]\\d{0,7}|10{8})$/.test(value.toString().trim())) {</span></span>
<span class="line"><span>        return cb()</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    cb(new Error(&#39;请输入0-100000000之间的整数&#39;))</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    return false</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const cid = ref&lt;string&gt;(&#39;&#39;)</span></span>
<span class="line"><span>const configList = ref&lt;any&gt;([</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        label: &#39;选项01&#39;,</span></span>
<span class="line"><span>        value: &#39;1&#39;</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        label: &#39;选项02&#39;,</span></span>
<span class="line"><span>        value: &#39;2&#39;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>])</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const formInfo = reactive({</span></span>
<span class="line"><span>    cpu: &#39;&#39;,</span></span>
<span class="line"><span>    part: &#39;&#39;,</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const formRules = reactive({</span></span>
<span class="line"><span>    cpu: [</span></span>
<span class="line"><span>        { required: true, message: &#39;&#39;, trigger: &#39;blur&#39; },</span></span>
<span class="line"><span>        { validator: checkInputOne, trigger: &#39;blur&#39; },</span></span>
<span class="line"><span>    ],</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    part: [</span></span>
<span class="line"><span>        { required: true, message: &#39;&#39;, trigger: &#39;blur&#39; },</span></span>
<span class="line"><span>        { validator: checkInputTwo, trigger: &#39;blur&#39; },</span></span>
<span class="line"><span>    ],</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const selectChange = (event) =&gt; {</span></span>
<span class="line"><span>    console.log(&#39;event&#39;, event)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;style scoped&gt;</span></span>
<span class="line"><span>.container {</span></span>
<span class="line"><span>    background: #fff;</span></span>
<span class="line"><span>    padding: 20px;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>.container .title {</span></span>
<span class="line"><span>    height: 30px;</span></span>
<span class="line"><span>    line-height: 30px;</span></span>
<span class="line"><span>    font-size: 16px;</span></span>
<span class="line"><span>    color: #000;</span></span>
<span class="line"><span>    font-weight: bold;</span></span>
<span class="line"><span>    margin-bottom: 20px;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&lt;/style&gt;</span></span></code></pre></div>`,1),e=[t];function i(c,o,u,r,g,m){return a(),s("div",null,e)}const v=n(l,[["render",i]]);export{q as __pageData,v as default};
