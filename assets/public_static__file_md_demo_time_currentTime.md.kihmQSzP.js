import{_ as n,c as s,o as a,U as p}from"./chunks/framework.FpOEJISx.js";const f=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"public/static/_file/md/demo/time/currentTime.md","filePath":"public/static/_file/md/demo/time/currentTime.md"}'),t={name:"public/static/_file/md/demo/time/currentTime.md"},e=p(`<h2 id="使用" tabindex="-1">使用 <a class="header-anchor" href="#使用" aria-label="Permalink to &quot;使用&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>    &lt;div&gt;</span></span>
<span class="line"><span>        &lt;div style=&quot;padding-bottom: 40px;&quot;&gt;</span></span>
<span class="line"><span>            &lt;label for=&quot;&quot;&gt;时间处理只需要时分秒&lt;/label&gt;</span></span>
<span class="line"><span>            &lt;div class=&quot;mt15&quot;&gt;</span></span>
<span class="line"><span>                &lt;Button @click=&quot;getcurrentTime&quot;&gt;获取当前时间的时分秒：&lt;/Button&gt;</span></span>
<span class="line"><span>                &lt;span style=&quot;margin-left: 15px;&quot;&gt;{{ time.currentTime }}&lt;/span&gt;</span></span>
<span class="line"><span>            &lt;/div&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            &lt;div class=&quot;mt15&quot;&gt;</span></span>
<span class="line"><span>                &lt;Button @click=&quot;getcurrentTime02&quot;&gt;获取当前时间的年月日：&lt;/Button&gt;</span></span>
<span class="line"><span>                &lt;span style=&quot;margin-left: 15px;&quot;&gt;{{ time.currentTime02 }}&lt;/span&gt;</span></span>
<span class="line"><span>            &lt;/div&gt;</span></span>
<span class="line"><span>        &lt;/div&gt;</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script setup&gt;</span></span>
<span class="line"><span>import { Spin, Space, Table, Popconfirm, Button, Select, SelectOption, Input, message } from &#39;ant-design-vue&#39;</span></span>
<span class="line"><span>import { reactive } from &#39;vue&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import { formateTime, formateTime02 } from &#39;./_js/utils.js&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const time = reactive({</span></span>
<span class="line"><span>    currentTime: &#39;&#39;,</span></span>
<span class="line"><span>    currentTime02: &#39;&#39;,</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const getcurrentTime = () =&gt; {</span></span>
<span class="line"><span>    time.currentTime = formateTime()</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const getcurrentTime02 = () =&gt; {</span></span>
<span class="line"><span>    time.currentTime02 = formateTime02()</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;style scoped&gt;</span></span>
<span class="line"><span>.mt15 {</span></span>
<span class="line"><span>    margin-top: 15px;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&lt;/style&gt;</span></span></code></pre></div><h2 id="formatetime代码" tabindex="-1">formateTime代码 <a class="header-anchor" href="#formatetime代码" aria-label="Permalink to &quot;formateTime代码&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// 格式化时间 18:16:16 只要时分秒</span></span>
<span class="line"><span>export function formateTime(time = +new Date()) {</span></span>
<span class="line"><span>    const date = new Date(time + 8 * 3600 * 1000) // 增加8小时</span></span>
<span class="line"><span>    return date.toJSON().substr(0, 19).replace(&#39;T&#39;, &#39; &#39;).substr(10, 19)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 格式化时间 年月日</span></span>
<span class="line"><span>export function formateTime02() {</span></span>
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
<span class="line"><span>// ???</span></span>
<span class="line"><span>export function dateFormat(fmt, date) {</span></span>
<span class="line"><span>    let ret</span></span>
<span class="line"><span>    const opt = {</span></span>
<span class="line"><span>        &#39;Y+&#39;: date.getFullYear().toString(), // 年</span></span>
<span class="line"><span>        &#39;m+&#39;: (date.getMonth() + 1).toString(), // 月</span></span>
<span class="line"><span>        &#39;d+&#39;: date.getDate().toString(), // 日</span></span>
<span class="line"><span>        &#39;H+&#39;: date.getHours().toString(), // 时</span></span>
<span class="line"><span>        &#39;M+&#39;: date.getMinutes().toString(), // 分</span></span>
<span class="line"><span>        &#39;S+&#39;: date.getSeconds().toString(), // 秒</span></span>
<span class="line"><span>        // 有其他格式化字符需求可以继续添加，必须转化成字符串</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    for (let k in opt) {</span></span>
<span class="line"><span>        ret = new RegExp(&#39;(&#39; + k + &#39;)&#39;).exec(fmt)</span></span>
<span class="line"><span>        if (ret) {</span></span>
<span class="line"><span>            fmt = fmt.replace(ret[1], (ret[1].length === 1) ? (opt[k]) : (opt[k].padStart(ret[1].length, &#39;0&#39;)))</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    return fmt</span></span>
<span class="line"><span>}</span></span></code></pre></div>`,4),l=[e];function i(c,o,r,m,d,u){return a(),s("div",null,l)}const h=n(t,[["render",i]]);export{f as __pageData,h as default};
