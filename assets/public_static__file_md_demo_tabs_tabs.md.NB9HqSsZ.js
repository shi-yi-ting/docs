import{_ as s,c as n,o as a,U as p}from"./chunks/framework.FpOEJISx.js";const m=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"public/static/_file/md/demo/tabs/tabs.md","filePath":"public/static/_file/md/demo/tabs/tabs.md"}'),l={name:"public/static/_file/md/demo/tabs/tabs.md"},e=p(`<div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>    &lt;div class=&quot;tabList&quot;&gt;</span></span>
<span class="line"><span>        &lt;ul&gt;</span></span>
<span class="line"><span>            &lt;li v-for=&quot;(item, index) of tab.list&quot; :key=&quot;index&quot;&gt;</span></span>
<span class="line"><span>                &lt;div :class=&quot;{ &#39;active&#39;: tab.isActive === item.active }&quot; @click=&quot;tabSwitch(item)&quot;&gt;</span></span>
<span class="line"><span>                    &lt;span&gt;{{ item.name }}&lt;/span&gt;</span></span>
<span class="line"><span>                &lt;/div&gt;</span></span>
<span class="line"><span>            &lt;/li&gt;</span></span>
<span class="line"><span>        &lt;/ul&gt;</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script&gt;</span></span>
<span class="line"><span>import { defineComponent, reactive } from &#39;vue&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export default defineComponent({</span></span>
<span class="line"><span>    setup() {</span></span>
<span class="line"><span>        // tab 处理</span></span>
<span class="line"><span>        function handleTabs() {</span></span>
<span class="line"><span>            const tab = reactive({</span></span>
<span class="line"><span>            isActive: &#39;result&#39;,</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            list: [</span></span>
<span class="line"><span>                {</span></span>
<span class="line"><span>                    name: &#39;检测结果&#39;, // 检测结果</span></span>
<span class="line"><span>                    url: &#39;&#39;,</span></span>
<span class="line"><span>                    active: &#39;result&#39;,</span></span>
<span class="line"><span>                },</span></span>
<span class="line"><span>                {</span></span>
<span class="line"><span>                    name: &#39;操作日志&#39;, // 操作日志</span></span>
<span class="line"><span>                    url: &#39;remoteDiagnosisDpDfsTv/tv&#39;,</span></span>
<span class="line"><span>                    active: &#39;operationLog&#39;,</span></span>
<span class="line"><span>                },</span></span>
<span class="line"><span>                {</span></span>
<span class="line"><span>                    name: &#39;评价信息&#39;, // 评价信息</span></span>
<span class="line"><span>                    url: &#39;remoteDiagnosisDpDfsTv/tv&#39;,</span></span>
<span class="line"><span>                    active: &#39;evaluationInfo&#39;,</span></span>
<span class="line"><span>                },</span></span>
<span class="line"><span>            ],</span></span>
<span class="line"><span>        })</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        const tabSwitch = (data) =&gt; {</span></span>
<span class="line"><span>            tab.isActive = data.active</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>            return { tab, tabSwitch }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        return {</span></span>
<span class="line"><span>            ...handleTabs()</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;style lang=&quot;less&quot; scoped&gt;</span></span>
<span class="line"><span>/* tab切换栏 */</span></span>
<span class="line"><span>.tabList {</span></span>
<span class="line"><span>    ul {</span></span>
<span class="line"><span>        padding: 0;</span></span>
<span class="line"><span>        margin: 0;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        li {</span></span>
<span class="line"><span>            display: inline-block;</span></span>
<span class="line"><span>            color: #b8bec0;</span></span>
<span class="line"><span>            box-sizing: border-box;</span></span>
<span class="line"><span>            cursor: pointer;</span></span>
<span class="line"><span>            user-select: none;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            div {</span></span>
<span class="line"><span>                width: 100%;</span></span>
<span class="line"><span>                color: #fff;</span></span>
<span class="line"><span>                text-align: center;</span></span>
<span class="line"><span>                box-sizing: border-box;</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            span {</span></span>
<span class="line"><span>                display: inline-block;</span></span>
<span class="line"><span>                color: #666666;</span></span>
<span class="line"><span>                padding: 0 10px;</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            .active {</span></span>
<span class="line"><span>                color: #3a84ef;</span></span>
<span class="line"><span>                span {</span></span>
<span class="line"><span>                    color: #3a84ef;</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&lt;/style&gt;</span></span></code></pre></div>`,1),i=[e];function t(c,o,r,d,u,b){return a(),n("div",null,i)}const v=s(l,[["render",t]]);export{m as __pageData,v as default};
