import{_ as n,c as s,o as a,U as p}from"./chunks/framework.FpOEJISx.js";const v=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"public/static/_file/md/demo/DOM/拖拽.md","filePath":"public/static/_file/md/demo/DOM/拖拽.md"}'),l={name:"public/static/_file/md/demo/DOM/拖拽.md"},e=p(`<div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>    &lt;div style=&quot;height: 350px;&quot;&gt;</span></span>
<span class="line"><span>        &lt;div class=&quot;nav&quot;&gt;</span></span>
<span class="line"><span>            &lt;a id=&quot;register&quot; href=&quot;javascript:;&quot;&gt;注册信息&lt;/a&gt;</span></span>
<span class="line"><span>        &lt;/div&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        &lt;div id=&quot;d-box&quot; class=&quot;d-box&quot;&gt;</span></span>
<span class="line"><span>            &lt;div id=&quot;drop&quot; class=&quot;hd&quot;&gt;</span></span>
<span class="line"><span>                &lt;i&gt;注册信息(可以拖拽)&lt;/i&gt;</span></span>
<span class="line"><span>                &lt;span id=&quot;box_close&quot;&gt;【关闭】&lt;/span&gt;</span></span>
<span class="line"><span>            &lt;/div&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            &lt;div class=&quot;bd&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span>        &lt;/div&gt;</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script&gt;</span></span>
<span class="line"><span>import { defineComponent, onMounted, nextTick  } from &#39;vue&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export default defineComponent({</span></span>
<span class="line"><span>    setup() {</span></span>
<span class="line"><span>        onMounted(() =&gt; {</span></span>
<span class="line"><span>            nextTick(() =&gt; {</span></span>
<span class="line"><span>                // 获取</span></span>
<span class="line"><span>                let box = document.getElementById(&#39;d-box&#39;)</span></span>
<span class="line"><span>                let drop = document.getElementById(&#39;drop&#39;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                drop.onmousedown = function(event) {</span></span>
<span class="line"><span>                    event = event || window.event</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                    // 获取鼠标在页面中的距离</span></span>
<span class="line"><span>                    let pagex = event.pageX || scroll().left + event.clientX</span></span>
<span class="line"><span>                    let pagey = event.pageY || scroll().top + event.clientY</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                    // 鼠标在页面中的距离 - 盒子在页面中的距离得出 = 鼠标在盒子中的距离</span></span>
<span class="line"><span>                    let x = pagex - box.offsetLeft</span></span>
<span class="line"><span>                    let y = pagey - box.offsetTop</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>                    // 移动</span></span>
<span class="line"><span>                    document.onmousemove = function(event) {</span></span>
<span class="line"><span>                        event = event || window.event</span></span>
<span class="line"><span>                        let pagexx = event.pageX || scroll().left + event.clientX</span></span>
<span class="line"><span>                        let pageyy = event.pageY || scroll().top + event.clientY</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                        let xx = pagexx - x</span></span>
<span class="line"><span>                        let yy = pageyy - y</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                        // 移动</span></span>
<span class="line"><span>                        box.style.left = xx + &#39;px&#39;</span></span>
<span class="line"><span>                        box.style.top = yy + &#39;px&#39;</span></span>
<span class="line"><span>                    }</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>                document.onmouseup = function() {</span></span>
<span class="line"><span>                // 解绑</span></span>
<span class="line"><span>                    document.onmousemove = null</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>            })</span></span>
<span class="line"><span>        })</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;style scoped&gt;</span></span>
<span class="line"><span> .nav{</span></span>
<span class="line"><span>    height: 30px;</span></span>
<span class="line"><span>    background: #036663;</span></span>
<span class="line"><span>    line-height: 30px;</span></span>
<span class="line"><span>    padding-left: 30px;</span></span>
<span class="line"><span>    border-bottom: 1px solid #369;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>.nav a{</span></span>
<span class="line"><span>    text-decoration: none;</span></span>
<span class="line"><span>    text-align: center;</span></span>
<span class="line"><span>    font-size: 14px;</span></span>
<span class="line"><span>    color: #fff;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>.d-box{</span></span>
<span class="line"><span>    width: 400px;</span></span>
<span class="line"><span>    height: 300px;</span></span>
<span class="line"><span>    border:5px solid #eee;</span></span>
<span class="line"><span>    box-shadow: 2px 2px 2px 2px #666;</span></span>
<span class="line"><span>    position: absolute;</span></span>
<span class="line"><span>    left: 40%;</span></span>
<span class="line"><span>    top: 40%;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>.hd{</span></span>
<span class="line"><span>    width: 100%;</span></span>
<span class="line"><span>    height: 25px;</span></span>
<span class="line"><span>    background: #7c9299;</span></span>
<span class="line"><span>    border-bottom: 1px solid #369;</span></span>
<span class="line"><span>    line-height: 25px;</span></span>
<span class="line"><span>    color: white;</span></span>
<span class="line"><span>    cursor: move;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>#box_close{</span></span>
<span class="line"><span>    float: right;</span></span>
<span class="line"><span>    cursor: pointer;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&lt;/style&gt;</span></span></code></pre></div>`,1),t=[e];function i(c,o,d,g,r,u){return a(),s("div",null,t)}const m=n(l,[["render",i]]);export{v as __pageData,m as default};
