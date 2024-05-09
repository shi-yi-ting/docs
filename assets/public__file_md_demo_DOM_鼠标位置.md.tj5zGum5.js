import{_ as n,c as s,o as a,U as p}from"./chunks/framework.zpeVKxWT.js";const m=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"public/_file/md/demo/DOM/鼠标位置.md","filePath":"public/_file/md/demo/DOM/鼠标位置.md"}'),e={name:"public/_file/md/demo/DOM/鼠标位置.md"},l=p(`<div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>    &lt;div&gt;</span></span>
<span class="line"><span>        &lt;div id=&quot;coordinate&quot; class=&quot;box&quot;&gt;&lt;/div&gt;</span></span>
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
<span class="line"><span>                let div = document.getElementById(&#39;coordinate&#39;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                // 绑定事件</span></span>
<span class="line"><span>                div.onmousemove = function(event) {</span></span>
<span class="line"><span>                    event = event || window.event</span></span>
<span class="line"><span>                    let pagex = event.pageX || scroll().left + event.clientX</span></span>
<span class="line"><span>                    let pagey = event.pageY || scroll().top + event.clientY</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                    let x = div.offsetLeft</span></span>
<span class="line"><span>                    let y = div.offsetTop</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                    let targetx = pagex - x</span></span>
<span class="line"><span>                    let targety = pagey - y</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                    this.innerHTML = &#39;鼠标在盒子中的X坐标为：&#39; + targetx + &#39;px;&lt;br&gt;鼠标在盒子中的Y坐标为：&#39; + targety + &#39;px;&#39;</span></span>
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
<span class="line"><span>    background: orange;</span></span>
<span class="line"><span>    text-align: center;</span></span>
<span class="line"><span>    cursor: pointer;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&lt;/style&gt;</span></span></code></pre></div>`,1),t=[l];function i(c,o,d,r,g,_){return a(),s("div",null,t)}const v=n(e,[["render",i]]);export{m as __pageData,v as default};
