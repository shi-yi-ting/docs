import{_ as s,c as n,o as a,U as p}from"./chunks/framework.FpOEJISx.js";const _=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"public/static/_file/md/demo/mouse/onMouseOverShow.md","filePath":"public/static/_file/md/demo/mouse/onMouseOverShow.md"}'),l={name:"public/static/_file/md/demo/mouse/onMouseOverShow.md"},e=p(`<div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>    &lt;div class=&quot;task_item ptb30&quot;&gt;</span></span>
<span class="line"><span>        &lt;!-- 在需要鼠标经过显示，鼠标离开隐藏图标的 span 标签上放一个 v-if=&quot;menuUnSeen&quot; --&gt;</span></span>
<span class="line"><span>        &lt;label for=&quot;&quot;&gt;鼠标悬浮展示隐藏的图标(img标签的title可以放在包住img的span标签中): &lt;/label&gt;</span></span>
<span class="line"><span>        &lt;div class=&quot;block_right&quot; @mouseenter=&quot;onMouseOver&quot; @mouseleave=&quot;onMouseOut&quot;&gt;</span></span>
<span class="line"><span>            &lt;span v-if=&quot;menuUnseen&quot; title=&quot;启动任务&quot;&gt;</span></span>
<span class="line"><span>                &lt;img src=&quot;./img/start_left_gray.png&quot;&gt;</span></span>
<span class="line"><span>                &lt;img src=&quot;./img/start_left_blue.png&quot;&gt;</span></span>
<span class="line"><span>            &lt;/span&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            &lt;span title=&quot;重复执行&quot;&gt;</span></span>
<span class="line"><span>                &lt;img src=&quot;./img/restart_left_gray.png&quot;&gt;</span></span>
<span class="line"><span>                &lt;img src=&quot;./img/restart_left_blue.png&quot;&gt;</span></span>
<span class="line"><span>            &lt;/span&gt;</span></span>
<span class="line"><span>        &lt;/div&gt;</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script&gt;</span></span>
<span class="line"><span>export default {</span></span>
<span class="line"><span>    data() {</span></span>
<span class="line"><span>        return {</span></span>
<span class="line"><span>            timer: null,</span></span>
<span class="line"><span>            hoverEnterTime: 300,</span></span>
<span class="line"><span>            hoverLeaveTime: 800,</span></span>
<span class="line"><span>            menuUnseen: false,</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    methods: {</span></span>
<span class="line"><span>        onMouseOver() {</span></span>
<span class="line"><span>            clearTimeout(this.timer)</span></span>
<span class="line"><span>            this.timer = setTimeout(() =&gt; {</span></span>
<span class="line"><span>                this.menuUnseen = true</span></span>
<span class="line"><span>            }, this.hoverEnterTime)</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        onMouseOut() {</span></span>
<span class="line"><span>            clearTimeout(this.timer)</span></span>
<span class="line"><span>            this.timer = setTimeout(() =&gt; {</span></span>
<span class="line"><span>                this.menuUnseen = false</span></span>
<span class="line"><span>            }, this.hoverLeaveTime)</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;style scoped&gt;</span></span>
<span class="line"><span>.task_item .block_right {</span></span>
<span class="line"><span>    /* position: absolute;</span></span>
<span class="line"><span>    right: 10px;</span></span>
<span class="line"><span>    width: 40%;</span></span>
<span class="line"><span>    float: right;</span></span>
<span class="line"><span>    height: 26px; */</span></span>
<span class="line"><span>    margin-top: 10px;</span></span>
<span class="line"><span>    margin-left: 10px;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>.task_item .block_right * {</span></span>
<span class="line"><span>    vertical-align: middle;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>.task_item .block_right &gt; span {</span></span>
<span class="line"><span>    display: inline-block;</span></span>
<span class="line"><span>    position: relative;</span></span>
<span class="line"><span>    right: 14px;</span></span>
<span class="line"><span>    width: 22px;</span></span>
<span class="line"><span>    text-align: center;</span></span>
<span class="line"><span>    vertical-align: middle;</span></span>
<span class="line"><span>    cursor: pointer;</span></span>
<span class="line"><span>    margin-right: 5px;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>.task_item .block_right &gt; span &gt; img:nth-child(2n + 1) {</span></span>
<span class="line"><span>    display: inline-block;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>.task_item .block_right &gt; span &gt; img:nth-child(2n) {</span></span>
<span class="line"><span>    display: none;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>.task_item .block_right &gt; span:hover &gt; img:nth-child(2n + 1) {</span></span>
<span class="line"><span>    display: none;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>.task_item .block_right &gt; span:hover &gt; img:nth-child(2n) {</span></span>
<span class="line"><span>    display: inline-block;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&lt;/style&gt;</span></span></code></pre></div>`,1),t=[e];function i(c,o,r,g,u,m){return a(),n("div",null,t)}const d=s(l,[["render",i]]);export{_ as __pageData,d as default};
