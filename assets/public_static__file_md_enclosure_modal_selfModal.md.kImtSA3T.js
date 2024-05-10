import{_ as n,c as s,o as a,U as p}from"./chunks/framework.FpOEJISx.js";const m=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"public/static/_file/md/enclosure/modal/selfModal.md","filePath":"public/static/_file/md/enclosure/modal/selfModal.md"}'),l={name:"public/static/_file/md/enclosure/modal/selfModal.md"},e=p(`<h2 id="使用" tabindex="-1">使用 <a class="header-anchor" href="#使用" aria-label="Permalink to &quot;使用&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>    &lt;div&gt;</span></span>
<span class="line"><span>        &lt;SelfModal :buttonTitle=&quot;&#39;按钮标题&#39;&quot; :tip=&quot;&#39;弹框提示语&#39;&quot; :onOk=&quot;onOk&quot; :onCancel=&quot;onCancel&quot; /&gt;</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script lang=&quot;ts&quot; setup&gt;</span></span>
<span class="line"><span>import { ref, reactive, computed, watch, onMounted, onUnmounted } from &#39;vue&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import SelfModal from &#39;@/views/enclosure/modal/selfModal.vue&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// TODO</span></span>
<span class="line"><span>const onOk = () =&gt; {</span></span>
<span class="line"><span>    console.log(&#39;传入的onOK&#39;)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const onCancel = () =&gt; {</span></span>
<span class="line"><span>    console.log(&#39;传入的onCancel&#39;)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;/script&gt;</span></span></code></pre></div><h2 id="封装代码" tabindex="-1">封装代码 <a class="header-anchor" href="#封装代码" aria-label="Permalink to &quot;封装代码&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>    &lt;div&gt;</span></span>
<span class="line"><span>        &lt;button class=&quot;Button&quot; @click=&quot;showModal&quot;&gt;</span></span>
<span class="line"><span>            &lt;i class=&quot;delete2_white&quot; /&gt;</span></span>
<span class="line"><span>             &lt;!-- &lt;Icon type=&quot;ios-bug&quot; size=&quot;18&quot; /&gt; --&gt;</span></span>
<span class="line"><span>            {{ buttonTitle }}</span></span>
<span class="line"><span>        &lt;/button&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        &lt;div v-show=&quot;model&quot; id=&quot;model&quot; class=&quot;mask&quot; /&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        &lt;dir v-show=&quot;model&quot; class=&quot;model&quot;&gt;</span></span>
<span class="line"><span>            &lt;div class=&quot;text&quot;&gt;</span></span>
<span class="line"><span>                &lt;!-- &lt;Icon type=&quot;md-bulb&quot; style=&quot;color:#418ef8; font-size:28px;&quot; /&gt; --&gt;</span></span>
<span class="line"><span>                {{ tip }}</span></span>
<span class="line"><span>            &lt;/div&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            &lt;div style=&quot;text-align: center;&quot;&gt;</span></span>
<span class="line"><span>                &lt;button class=&quot;Button&quot; style=&quot;margin-right:10px;&quot; @click=&quot;onOk&quot;&gt;确定&lt;/button&gt;</span></span>
<span class="line"><span>                &lt;button class=&quot;Button White&quot; @click=&quot;onCancel&quot;&gt;取消&lt;/button&gt;</span></span>
<span class="line"><span>            &lt;/div&gt;</span></span>
<span class="line"><span>        &lt;/dir&gt;</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script lang=&quot;ts&quot; setup&gt;</span></span>
<span class="line"><span>import { ref } from &#39;vue&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// Props</span></span>
<span class="line"><span>const props = defineProps({</span></span>
<span class="line"><span>    buttonTitle: {</span></span>
<span class="line"><span>        type: String,</span></span>
<span class="line"><span>        default: &#39;进入调试模式&#39;</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    tip: {</span></span>
<span class="line"><span>        type: String,</span></span>
<span class="line"><span>        default: &#39;确定已完成任务编排后进入任务调试模式?调试模式下只能修改service属性&#39;</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    onOk: {</span></span>
<span class="line"><span>        type: Function</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    onCancel: {</span></span>
<span class="line"><span>        type: Function</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>// TODO</span></span>
<span class="line"><span>// 添加/编辑弹框</span></span>
<span class="line"><span>function handleModal() {</span></span>
<span class="line"><span>    const model = ref(false)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    const showModal = () =&gt; {</span></span>
<span class="line"><span>        model.value = true</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    const onOk = () =&gt; {</span></span>
<span class="line"><span>        props.onOk &amp;&amp; props.onOk()</span></span>
<span class="line"><span>        model.value = false</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    const onCancel = () =&gt; {</span></span>
<span class="line"><span>        props.onCancel &amp;&amp; props.onCancel()</span></span>
<span class="line"><span>        model.value = false</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    return { model, showModal, onOk, onCancel }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>const { model, showModal, onOk, onCancel } = handleModal()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;style lang=&quot;scss&quot; scoped&gt;</span></span>
<span class="line"><span>.model {</span></span>
<span class="line"><span>    position: fixed;</span></span>
<span class="line"><span>    top: 0;</span></span>
<span class="line"><span>    bottom: 0;</span></span>
<span class="line"><span>    left: 0;</span></span>
<span class="line"><span>    right: 0;</span></span>
<span class="line"><span>    width: 750px;</span></span>
<span class="line"><span>    height: 150px;</span></span>
<span class="line"><span>    margin: auto;</span></span>
<span class="line"><span>    border-radius: 5px;</span></span>
<span class="line"><span>    background: #353f59;</span></span>
<span class="line"><span>    z-index: 999;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>.model .text {</span></span>
<span class="line"><span>    height: 100px;</span></span>
<span class="line"><span>    line-height: 100px;</span></span>
<span class="line"><span>    font-size: 16px;</span></span>
<span class="line"><span>    color: #fff;</span></span>
<span class="line"><span>    text-align: center;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#model .mask {</span></span>
<span class="line"><span>    position: fixed;</span></span>
<span class="line"><span>    top: 0;</span></span>
<span class="line"><span>    left: 0;</span></span>
<span class="line"><span>    width: 100%;</span></span>
<span class="line"><span>    height: 100%;</span></span>
<span class="line"><span>    background-color: rgba(0, 0, 0, 0.4);</span></span>
<span class="line"><span>    z-index: 99;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/* 自定义button样式 */</span></span>
<span class="line"><span>.Button {</span></span>
<span class="line"><span>    display: inline-block;</span></span>
<span class="line"><span>    height: 32px;</span></span>
<span class="line"><span>    line-height: 30px;</span></span>
<span class="line"><span>    padding-left: 15px;</span></span>
<span class="line"><span>    padding-right: 15px;</span></span>
<span class="line"><span>    font-size: 14px;</span></span>
<span class="line"><span>    color: white;</span></span>
<span class="line"><span>    text-align: center;</span></span>
<span class="line"><span>    text-decoration: none;</span></span>
<span class="line"><span>    cursor: pointer;</span></span>
<span class="line"><span>    vertical-align: middle;</span></span>
<span class="line"><span>    outline: none;</span></span>
<span class="line"><span>    border: 1px solid #418ef8;</span></span>
<span class="line"><span>    background-color: #418ef8;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>.Button:hover {</span></span>
<span class="line"><span>    color: white;</span></span>
<span class="line"><span>    background-color: #0087dd;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>.Button.White {</span></span>
<span class="line"><span>    border-color: #cccccc;</span></span>
<span class="line"><span>    color: #666666;</span></span>
<span class="line"><span>    background-color: #ffffff;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>.Button.White:hover {</span></span>
<span class="line"><span>    color: #666666;</span></span>
<span class="line"><span>    background-color: #f0f0f0;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>.Button.Gray {</span></span>
<span class="line"><span>    border-color: #bebebe;</span></span>
<span class="line"><span>    background-color: #bebebe;</span></span>
<span class="line"><span>    cursor: default;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>.Button.Orange {</span></span>
<span class="line"><span>    border-color: #fd9a00;</span></span>
<span class="line"><span>    background-color: #fd9a00;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>.Button.Orange:hover {</span></span>
<span class="line"><span>    background-color: #ed9100;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/* 图标 */</span></span>
<span class="line"><span>i.delete2_white {</span></span>
<span class="line"><span>    display: inline-block;</span></span>
<span class="line"><span>    margin: 7px 7px 7px 0;</span></span>
<span class="line"><span>    width: 16px;</span></span>
<span class="line"><span>    height: 16px;</span></span>
<span class="line"><span>    background-image: url(@/assets/images/delete2_white.png);</span></span>
<span class="line"><span>    vertical-align: top;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>i.import2_blue {</span></span>
<span class="line"><span>    display: inline-block;</span></span>
<span class="line"><span>    margin: 7px 7px 7px 0;</span></span>
<span class="line"><span>    width: 16px;</span></span>
<span class="line"><span>    height: 16px;</span></span>
<span class="line"><span>    background-image: url(@/assets/images/import2_blue.png);</span></span>
<span class="line"><span>    vertical-align: top;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&lt;/style&gt;</span></span></code></pre></div>`,4),i=[e];function t(c,o,u,r,d,g){return a(),s("div",null,i)}const f=n(l,[["render",t]]);export{m as __pageData,f as default};
