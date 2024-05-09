import{_ as s,c as n,o as a,U as p}from"./chunks/framework.zpeVKxWT.js";const f=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"public/static/_file/md/demo/DOM/放大镜.md","filePath":"public/static/_file/md/demo/DOM/放大镜.md"}'),l={name:"public/static/_file/md/demo/DOM/放大镜.md"},e=p(`<div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>    &lt;div&gt;</span></span>
<span class="line"><span>        &lt;div class=&quot;box&quot;&gt;</span></span>
<span class="line"><span>            &lt;div class=&quot;small&quot; @mouseenter=&quot;mouseenter&quot; @mouseleave=&quot;mouseleave&quot; @mousemove=&quot;mousemove&quot;&gt;</span></span>
<span class="line"><span>                &lt;img src=&quot;./img/001.jpg&quot; alt=&quot;&quot;&gt;</span></span>
<span class="line"><span>                &lt;div class=&quot;mask&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span>            &lt;/div&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            &lt;div class=&quot;big&quot;&gt;</span></span>
<span class="line"><span>                &lt;img src=&quot;./img/0001.jpg&quot; alt=&quot;&quot;&gt;</span></span>
<span class="line"><span>            &lt;/div&gt;</span></span>
<span class="line"><span>        &lt;/div&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        &lt;Syntaxy :code=&quot;code&quot; /&gt;</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script&gt;</span></span>
<span class="line"><span>import { defineComponent } from &#39;vue&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import { show, hide } from &#39;../_js/animate.js&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export default defineComponent({</span></span>
<span class="line"><span>    setup() {</span></span>
<span class="line"><span>        const mouseenter = () =&gt; {</span></span>
<span class="line"><span>            // 获取</span></span>
<span class="line"><span>            let box = document.getElementsByClassName(&#39;box&#39;)[0]</span></span>
<span class="line"><span>            let big = box.children[1]</span></span>
<span class="line"><span>            let mask = box.children[0].children[1]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            show(mask)</span></span>
<span class="line"><span>            show(big)</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        const mouseleave = () =&gt; {</span></span>
<span class="line"><span>            // 获取</span></span>
<span class="line"><span>            let box = document.getElementsByClassName(&#39;box&#39;)[0]</span></span>
<span class="line"><span>            let big = box.children[1]</span></span>
<span class="line"><span>            let mask = box.children[0].children[1]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            hide(mask)</span></span>
<span class="line"><span>            hide(big)</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        const mousemove = (event) =&gt; {</span></span>
<span class="line"><span>            // 获取</span></span>
<span class="line"><span>            let box = document.getElementsByClassName(&#39;box&#39;)[0]</span></span>
<span class="line"><span>            let small = box.children[0]</span></span>
<span class="line"><span>            let big = box.children[1]</span></span>
<span class="line"><span>            let mask = box.children[0].children[1]</span></span>
<span class="line"><span>            let bigImg = big.children[0]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            // 新五步获取鼠标在盒子中的坐标</span></span>
<span class="line"><span>            event = event || window.event</span></span>
<span class="line"><span>            let pagex = event.pageX || scroll().left + event.clientX</span></span>
<span class="line"><span>            let pagey = event.pageY || scroll().top + event.clientY</span></span>
<span class="line"><span>            let x = pagex - box.offsetLeft - mask.offsetWidth / 2</span></span>
<span class="line"><span>            let y = pagey - box.offsetTop - mask.offsetHeight / 2</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            // 约束</span></span>
<span class="line"><span>            if (x &lt; 0) {</span></span>
<span class="line"><span>                x = 0</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>            if (x &gt; small.offsetWidth - mask.offsetWidth) {</span></span>
<span class="line"><span>                x = small.offsetWidth - mask.offsetWidth</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>            if (y &lt; 0) {</span></span>
<span class="line"><span>                y = 0</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>            if (y &gt; small.offsetHeight - mask.offsetHeight) {</span></span>
<span class="line"><span>                y = small.offsetHeight - mask.offsetHeight</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            // 移动</span></span>
<span class="line"><span>            mask.style.left = x + &#39;px&#39;</span></span>
<span class="line"><span>            mask.style.top = y + &#39;px&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            // 大图按比例移动</span></span>
<span class="line"><span>            let bili = bigImg.offsetWidth / small.offsetWidth</span></span>
<span class="line"><span>            let xx = bili * x</span></span>
<span class="line"><span>            let yy = bili * y</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            // 这里关于利用 margin 来移动不理解</span></span>
<span class="line"><span>            bigImg.style.marginLeft = -xx + &#39;px&#39;</span></span>
<span class="line"><span>            bigImg.style.marginTop = -yy + &#39;px&#39;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        return {</span></span>
<span class="line"><span>            mouseenter,</span></span>
<span class="line"><span>            mouseleave,</span></span>
<span class="line"><span>            mousemove,</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;style scoped&gt;</span></span>
<span class="line"><span>.box{</span></span>
<span class="line"><span>    position: relative;</span></span>
<span class="line"><span>    width: 350px;</span></span>
<span class="line"><span>    height: 350px;</span></span>
<span class="line"><span>    border: 1px solid #ccc;</span></span>
<span class="line"><span>    margin: 30px 60px;</span></span>
<span class="line"><span>    /* overflow: hidden; */</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>.big{</span></span>
<span class="line"><span>    width: 400px;</span></span>
<span class="line"><span>    height: 400px;</span></span>
<span class="line"><span>    border: 1px solid #ccc;</span></span>
<span class="line"><span>    position: absolute;</span></span>
<span class="line"><span>    top: 0;</span></span>
<span class="line"><span>    left: 360px;</span></span>
<span class="line"><span>    overflow: hidden;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>.mask{</span></span>
<span class="line"><span>    width: 175px;</span></span>
<span class="line"><span>    height: 175px;</span></span>
<span class="line"><span>    background: rgba(255, 255, 0, 0.4);</span></span>
<span class="line"><span>    position: absolute;</span></span>
<span class="line"><span>    top: 0;</span></span>
<span class="line"><span>    left: 0;</span></span>
<span class="line"><span>    cursor: pointer;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&lt;/style&gt;</span></span></code></pre></div>`,1),i=[e];function t(c,o,m,d,g,r){return a(),n("div",null,i)}const h=s(l,[["render",t]]);export{f as __pageData,h as default};
