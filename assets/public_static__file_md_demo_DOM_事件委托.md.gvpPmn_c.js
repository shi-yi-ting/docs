import{_ as n,c as s,o as a,U as p}from"./chunks/framework.FpOEJISx.js";const m=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"public/static/_file/md/demo/DOM/事件委托.md","filePath":"public/static/_file/md/demo/DOM/事件委托.md"}'),l={name:"public/static/_file/md/demo/DOM/事件委托.md"},e=p(`<div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>    &lt;div&gt;</span></span>
<span class="line"><span>        &lt;button id=&quot;delegation_button&quot;&gt;创建4个移民&lt;/button&gt;</span></span>
<span class="line"><span>        &lt;ul id=&quot;delegation_ul&quot;&gt;</span></span>
<span class="line"><span>            &lt;li&gt;海贼王&lt;/li&gt;</span></span>
<span class="line"><span>            &lt;a href=&quot;#&quot;&gt;海贼王&lt;/a&gt;</span></span>
<span class="line"><span>            &lt;li&gt;海贼王&lt;/li&gt;</span></span>
<span class="line"><span>            &lt;li&gt;海贼王&lt;/li&gt;</span></span>
<span class="line"><span>            &lt;a href=&quot;#&quot;&gt;海贼王&lt;/a&gt;</span></span>
<span class="line"><span>            &lt;li&gt;海贼王&lt;/li&gt;</span></span>
<span class="line"><span>        &lt;/ul&gt;</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script&gt;</span></span>
<span class="line"><span>import { defineComponent, nextTick, onMounted } from &#39;vue&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export default defineComponent({</span></span>
<span class="line"><span>    setup() {</span></span>
<span class="line"><span>        onMounted(() =&gt; {</span></span>
<span class="line"><span>            nextTick(() =&gt; {</span></span>
<span class="line"><span>                // 获取</span></span>
<span class="line"><span>                // let liArr = document.getElementsByTagName(&#39;li&#39;)</span></span>
<span class="line"><span>                let ul = document.getElementById(&#39;delegation_ul&#39;)</span></span>
<span class="line"><span>                let btn = document.getElementById(&#39;delegation_button&#39;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                // 绑定事件</span></span>
<span class="line"><span>                btn.onclick = function() {</span></span>
<span class="line"><span>                    for (let i = 0; i &lt;= 4; i++) {</span></span>
<span class="line"><span>                        let newLi = document.createElement(&#39;li&#39;)</span></span>
<span class="line"><span>                        let newA = document.createElement(&#39;a&#39;)</span></span>
<span class="line"><span>                        newLi.innerHTML = &#39;火影忍者&#39;</span></span>
<span class="line"><span>                        newA.innerHTML = &#39;火影忍者&#39;</span></span>
<span class="line"><span>                        newA.href = &#39;#&#39;</span></span>
<span class="line"><span>                        ul.appendChild(newLi)</span></span>
<span class="line"><span>                        ul.appendChild(newA)</span></span>
<span class="line"><span>                    }</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                // 普通的事件绑定，没有办法为新创建的元素绑定事件，</span></span>
<span class="line"><span>                // 所以我们要使用冒泡的特性，事件委托</span></span>
<span class="line"><span>                ul.onclick = function(event) {</span></span>
<span class="line"><span>                    event = event || window.event</span></span>
<span class="line"><span>                    let aa = event.target ? event.target : event.srcElement</span></span>
<span class="line"><span>                    // 判断标签名，如果是 li 标签弹窗</span></span>
<span class="line"><span>                    if (aa.tagName === &#39;LI&#39;) {</span></span>
<span class="line"><span>                        // eslint-disable-next-line no-alert</span></span>
<span class="line"><span>                        alert(&#39;海贼王&#39;)</span></span>
<span class="line"><span>                    }</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>            })</span></span>
<span class="line"><span>        })</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        return {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;style scoped&gt;</span></span>
<span class="line"><span>.box{</span></span>
<span class="line"><span>    width: 300px;</span></span>
<span class="line"><span>    height: 200px;</span></span>
<span class="line"><span>    padding-top: 100px;</span></span>
<span class="line"><span>    margin: 100px;</span></span>
<span class="line"><span>    background: orange;</span></span>
<span class="line"><span>    text-align: center;</span></span>
<span class="line"><span>    cursor: pointer;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&lt;/style&gt;</span></span></code></pre></div>`,1),t=[e];function i(c,o,d,r,g,u){return a(),s("div",null,t)}const f=n(l,[["render",i]]);export{m as __pageData,f as default};
