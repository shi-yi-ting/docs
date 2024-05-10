import{_ as n,c as s,o as a,U as p}from"./chunks/framework.FpOEJISx.js";const g=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"public/static/_file/md/demo/DOM/事件捕捉.md","filePath":"public/static/_file/md/demo/DOM/事件捕捉.md"}'),l={name:"public/static/_file/md/demo/DOM/事件捕捉.md"},e=p(`<div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>    &lt;div&gt;</span></span>
<span class="line"><span>        &lt;div id=&quot;box1&quot; class=&quot;box1&quot;&gt;</span></span>
<span class="line"><span>            &lt;div class=&quot;box2&quot;&gt;</span></span>
<span class="line"><span>                &lt;div class=&quot;box3&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span>            &lt;/div&gt;</span></span>
<span class="line"><span>        &lt;/div&gt;</span></span>
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
<span class="line"><span>                let box1 = document.getElementById(&#39;box1&#39;)</span></span>
<span class="line"><span>                let box2 = box1.children[0]</span></span>
<span class="line"><span>                let box3 = box2.children[0]</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>                //   document.onclick = function () {</span></span>
<span class="line"><span>                //        alert(&quot;我是document&quot;);</span></span>
<span class="line"><span>                //  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>                box1.addEventListener(&#39;click&#39;, () =&gt; {</span></span>
<span class="line"><span>                    // eslint-disable-next-line no-alert</span></span>
<span class="line"><span>                    alert(&#39;我是box1&#39;)</span></span>
<span class="line"><span>                }, true)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                box2.addEventListener(&#39;click&#39;, () =&gt; {</span></span>
<span class="line"><span>                    // eslint-disable-next-line no-alert</span></span>
<span class="line"><span>                    alert(&#39;我是box2&#39;)</span></span>
<span class="line"><span>                }, true)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                box3.addEventListener(&#39;click&#39;, () =&gt; {</span></span>
<span class="line"><span>                    // eslint-disable-next-line no-alert</span></span>
<span class="line"><span>                    alert(&#39;我是box3&#39;)</span></span>
<span class="line"><span>                }, true)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                // document.addEventListener(&#39;click&#39;, () =&gt; {</span></span>
<span class="line"><span>                //     // eslint-disable-next-line no-alert</span></span>
<span class="line"><span>                //     alert(&#39;我是document&#39;)</span></span>
<span class="line"><span>                // }, true)</span></span>
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
<span class="line"><span>.box1 {</span></span>
<span class="line"><span>    width: 500px;</span></span>
<span class="line"><span>    height: 160px;</span></span>
<span class="line"><span>    background-color: pink;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>.box2 {</span></span>
<span class="line"><span>    width: 300px;</span></span>
<span class="line"><span>    height: 100px;</span></span>
<span class="line"><span>    background-color: yellow;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>.box3 {</span></span>
<span class="line"><span>    width: 100px;</span></span>
<span class="line"><span>    height: 60px;</span></span>
<span class="line"><span>    background-color: blue;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&lt;/style&gt;</span></span></code></pre></div>`,1),t=[e];function i(c,o,d,r,u,x){return a(),s("div",null,t)}const _=n(l,[["render",i]]);export{g as __pageData,_ as default};
