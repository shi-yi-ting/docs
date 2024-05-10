import{_ as s,c as n,o as a,U as p}from"./chunks/framework.FpOEJISx.js";const f=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"public/static/_file/md/demo/DOM/精斗云.md","filePath":"public/static/_file/md/demo/DOM/精斗云.md"}'),l={name:"public/static/_file/md/demo/DOM/精斗云.md"},e=p(`<div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>    &lt;div&gt;</span></span>
<span class="line"><span>        &lt;div class=&quot;moveCloud&quot;&gt;</span></span>
<span class="line"><span>            &lt;div id=&quot;box&quot; class=&quot;box&quot;&gt;</span></span>
<span class="line"><span>                &lt;span id=&quot;moveCloud_span&quot;&gt;&lt;/span&gt;</span></span>
<span class="line"><span>                &lt;ul&gt;</span></span>
<span class="line"><span>                    &lt;li v-for=&quot;(item, index) of tab.list&quot; :key=&quot;item.id&quot; @mouseover=&quot;mouseover(index)&quot;&gt;{{ item.label }}&lt;/li&gt;</span></span>
<span class="line"><span>                &lt;/ul&gt;</span></span>
<span class="line"><span>            &lt;/div&gt;</span></span>
<span class="line"><span>        &lt;/div&gt;</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script&gt;</span></span>
<span class="line"><span>import { defineComponent, reactive } from &#39;vue&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export default defineComponent({</span></span>
<span class="line"><span>    setup() {</span></span>
<span class="line"><span>        const tab = reactive({</span></span>
<span class="line"><span>            list: [</span></span>
<span class="line"><span>                {</span></span>
<span class="line"><span>                    id: 0,</span></span>
<span class="line"><span>                    label: &#39;活动策划&#39;,</span></span>
<span class="line"><span>                },</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                {</span></span>
<span class="line"><span>                    id: 1,</span></span>
<span class="line"><span>                    label: &#39;师资力量&#39;,</span></span>
<span class="line"><span>                },</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                {</span></span>
<span class="line"><span>                    id: 2,</span></span>
<span class="line"><span>                    label: &#39;企业文化&#39;,</span></span>
<span class="line"><span>                },</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                {</span></span>
<span class="line"><span>                    id: 3,</span></span>
<span class="line"><span>                    label: &#39;招聘信息&#39;,</span></span>
<span class="line"><span>                },</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                {</span></span>
<span class="line"><span>                    id: 4,</span></span>
<span class="line"><span>                    label: &#39;公司简介&#39;,</span></span>
<span class="line"><span>                },</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                // {</span></span>
<span class="line"><span>                //     id: 5,</span></span>
<span class="line"><span>                //     label: &#39;上海校区&#39;,</span></span>
<span class="line"><span>                // },</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                // {</span></span>
<span class="line"><span>                //     id: 6,</span></span>
<span class="line"><span>                //     label: &#39;广州校区&#39;,</span></span>
<span class="line"><span>                // },</span></span>
<span class="line"><span>            ],</span></span>
<span class="line"><span>        })</span></span>
<span class="line"><span>        const animate = (ele, target) =&gt; {</span></span>
<span class="line"><span>            clearInterval(ele.timer)</span></span>
<span class="line"><span>            ele.timer = setInterval(() =&gt; {</span></span>
<span class="line"><span>                let step = (target - ele.offsetLeft) / 10</span></span>
<span class="line"><span>                step = step &gt; 0 ? Math.ceil(step) : Math.floor(step)</span></span>
<span class="line"><span>                ele.style.left = ele.offsetLeft + step + &#39;px&#39;</span></span>
<span class="line"><span>                console.log(1)</span></span>
<span class="line"><span>                if (Math.abs(target - ele.offsetLeft) &lt; Math.abs(step)) {</span></span>
<span class="line"><span>                    ele.style.left = target + &#39;px&#39;</span></span>
<span class="line"><span>                    clearInterval(ele.timer)</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>            }, 18)</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        const mouseover = (index) =&gt; {</span></span>
<span class="line"><span>            let span = document.getElementById(&#39;moveCloud_span&#39;)</span></span>
<span class="line"><span>            animate(span, index * 80)</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        return {</span></span>
<span class="line"><span>            tab,</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            mouseover,</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;style scoped&gt;</span></span>
<span class="line"><span>.box {</span></span>
<span class="line"><span>    width: 600px;</span></span>
<span class="line"><span>    height: 42px;</span></span>
<span class="line"><span>    background: url(&quot;./img/wifi.png&quot;) right center no-repeat;</span></span>
<span class="line"><span>    border-radius: 8px;</span></span>
<span class="line"><span>    position: relative;</span></span>
<span class="line"><span>    border: 1px solid #ccc;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>.box ul {</span></span>
<span class="line"><span>    list-style: none;</span></span>
<span class="line"><span>    position: relative;</span></span>
<span class="line"><span>    margin: 0;</span></span>
<span class="line"><span>    padding: 0;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>.box li {</span></span>
<span class="line"><span>    margin: 0;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>li {</span></span>
<span class="line"><span>    float: left;</span></span>
<span class="line"><span>    width: 83px;</span></span>
<span class="line"><span>    height: 42px;</span></span>
<span class="line"><span>    text-align: center;</span></span>
<span class="line"><span>    line-height: 42px;</span></span>
<span class="line"><span>    cursor: pointer;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>span {</span></span>
<span class="line"><span>    position: absolute;</span></span>
<span class="line"><span>    left: 0;</span></span>
<span class="line"><span>    top: 0;</span></span>
<span class="line"><span>    width: 83px;</span></span>
<span class="line"><span>    height: 42px;</span></span>
<span class="line"><span>    background: url(&quot;./img/cloud.gif&quot;) no-repeat;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&lt;/style&gt;</span></span></code></pre></div>`,1),i=[e];function t(c,o,r,d,u,g){return a(),n("div",null,i)}const _=s(l,[["render",t]]);export{f as __pageData,_ as default};
