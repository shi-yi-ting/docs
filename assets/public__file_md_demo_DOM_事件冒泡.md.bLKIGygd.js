import{_ as n,c as s,o as a,U as p}from"./chunks/framework.zpeVKxWT.js";const _=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"public/_file/md/demo/DOM/事件冒泡.md","filePath":"public/_file/md/demo/DOM/事件冒泡.md"}'),l={name:"public/_file/md/demo/DOM/事件冒泡.md"},e=p(`<div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>    &lt;div&gt;</span></span>
<span class="line"><span>        &lt;div id=&quot;box1&quot; class=&quot;box1&quot;&gt;</span></span>
<span class="line"><span>            1</span></span>
<span class="line"><span>            &lt;div class=&quot;box2&quot;&gt;</span></span>
<span class="line"><span>                2</span></span>
<span class="line"><span>                &lt;div class=&quot;box3&quot;&gt;3&lt;/div&gt;</span></span>
<span class="line"><span>            &lt;/div&gt;</span></span>
<span class="line"><span>        &lt;/div&gt;</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script&gt;</span></span>
<span class="line"><span>import { defineComponent, reactive, onMounted } from &#39;vue&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export default defineComponent({</span></span>
<span class="line"><span>    setup() {</span></span>
<span class="line"><span>        onMounted(() =&gt; {</span></span>
<span class="line"><span>            let box1 = document.getElementById(&#39;box1&#39;)</span></span>
<span class="line"><span>            let box2 = box1.children[0]</span></span>
<span class="line"><span>            let box3 = box2.children[0]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            //    冒泡和捕获</span></span>
<span class="line"><span>            box1.onclick = function () {</span></span>
<span class="line"><span>                // eslint-disable-next-line no-alert</span></span>
<span class="line"><span>                alert(&#39;我是box1&#39;)</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>            //</span></span>
<span class="line"><span>            box2.onclick = function () {</span></span>
<span class="line"><span>                // eslint-disable-next-line no-alert</span></span>
<span class="line"><span>                alert(&#39;我是box2&#39;)</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            box3.onclick = function () {</span></span>
<span class="line"><span>                // eslint-disable-next-line no-alert</span></span>
<span class="line"><span>                alert(&#39;我是box3&#39;)</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            //   document.onclick = function () {</span></span>
<span class="line"><span>            //  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>            //    box1.addEventListener(&quot;click&quot;, function () {</span></span>
<span class="line"><span>            //        alert(&quot;我是box1&quot;);</span></span>
<span class="line"><span>            //    },true);</span></span>
<span class="line"><span>            //</span></span>
<span class="line"><span>            //    box2.addEventListener(&quot;click&quot;, function () {</span></span>
<span class="line"><span>            //        alert(&quot;我是box2&quot;);</span></span>
<span class="line"><span>            //    },true);</span></span>
<span class="line"><span>            //</span></span>
<span class="line"><span>            //    box3.addEventListener(&quot;click&quot;, function () {</span></span>
<span class="line"><span>            //        alert(&quot;我是box3&quot;);</span></span>
<span class="line"><span>            //    },true);</span></span>
<span class="line"><span>            //</span></span>
<span class="line"><span>            //    document.addEventListener(&quot;click&quot;, function () {</span></span>
<span class="line"><span>            //        alert(&quot;我是document&quot;);</span></span>
<span class="line"><span>            //    },true);</span></span>
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
<span class="line"><span>&lt;/style&gt;</span></span></code></pre></div>`,1),i=[e];function t(c,o,d,u,r,b){return a(),s("div",null,i)}const g=n(l,[["render",t]]);export{_ as __pageData,g as default};
