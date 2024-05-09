import{_ as s,c as a,o as n,U as t}from"./chunks/framework.zpeVKxWT.js";const g=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"docs/frontend/Vue/基础/透传.md","filePath":"docs/frontend/Vue/基础/透传.md"}'),p={name:"docs/frontend/Vue/基础/透传.md"},e=t(`<h2 id="透传" tabindex="-1">透传 <a class="header-anchor" href="#透传" aria-label="Permalink to &quot;透传&quot;">​</a></h2><h3 id="vm-attrs" tabindex="-1">vm.$attrs <a class="header-anchor" href="#vm-attrs" aria-label="Permalink to &quot;vm.$attrs&quot;">​</a></h3><p>包含了父作用域中不作为 prop 被识别 (且获取) 的 attribute 绑定 (class 和 style 除外)。 当一个组件没有声明任何 prop 时，这里会包含所有父作用域的绑定 (class 和 style 除外)，并且可以通过 v-bind=&quot;$attrs&quot; 传入内部组件——在创建高级别的组件时非常有用。</p><h3 id="vm-listeners" tabindex="-1">vm.$listeners <a class="header-anchor" href="#vm-listeners" aria-label="Permalink to &quot;vm.$listeners&quot;">​</a></h3><p>包含了父作用域中的 (不含 .native 修饰器的) v-on 事件监听器。它可以通过 v-on=&quot;$listeners&quot; 传入内部组件——在创建更高层次的组件时非常有用。</p><h3 id="inheritattrs" tabindex="-1">inheritAttrs <a class="header-anchor" href="#inheritattrs" aria-label="Permalink to &quot;inheritAttrs&quot;">​</a></h3><ol><li>默认值为true,作用使那些没有在props中定义的属性，直接以attribute的形式作用在组件的根元素上！</li><li>一般一个组件如果要接受父组件传来的属性，是需要先在props里面预定义好的。如果没有父组件传递过来的属性将会挂载在根元素的attribute上</li><li>设置为false可阻止以上行为</li></ol><h3 id="透传代码" tabindex="-1">透传代码 <a class="header-anchor" href="#透传代码" aria-label="Permalink to &quot;透传代码&quot;">​</a></h3><h4 id="父组件" tabindex="-1">父组件 <a class="header-anchor" href="#父组件" aria-label="Permalink to &quot;父组件&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>    &lt;div class=&quot;nav&quot;&gt;</span></span>
<span class="line"><span>        &lt;MyButton01 type=&quot;success&quot; size=&quot;small&quot; class=&quot;mr8&quot;&gt;测试01&lt;/MyButton01&gt;</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span>&lt;script&gt;</span></span>
<span class="line"><span>import MyButton01 from &#39;./myButton01/myButton01.vue&#39;</span></span>
<span class="line"><span>export default {</span></span>
<span class="line"><span>    components: {</span></span>
<span class="line"><span>        MyButton01,</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&lt;script&gt; // 注意差一个反斜杠，由于报错故意删除的</span></span></code></pre></div><h4 id="子组件" tabindex="-1">子组件 <a class="header-anchor" href="#子组件" aria-label="Permalink to &quot;子组件&quot;">​</a></h4><p><strong>这里的使用场景</strong> Button按钮的size默认为large,但是页面我们全部使用size为small的大小，又不想如下使用 于是便在依赖iview中的Button自己封装了一个myButton,并给他一个默认值，为了使Button的原有属性能够使用这里就需要使用到透传了</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>    &lt;Button v-bind=&quot;customizedAttrs&quot; v-on=&quot;$listeners&quot;&gt;</span></span>
<span class="line"><span>        &lt;slot /&gt;</span></span>
<span class="line"><span>    &lt;/Button&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span>&lt;script&gt;</span></span>
<span class="line"><span>export default {</span></span>
<span class="line"><span>    name: &#39;MyButton&#39;,</span></span>
<span class="line"><span>    // 一个组件如果要接受父组件传来的属性，是需要先在props里面预定义好的。</span></span>
<span class="line"><span>    // 如果没有父组件传递过来的属性将会挂载在根元素的attribute上</span></span>
<span class="line"><span>    // 也就是说，inheritAttrs为true时：使那些没有在props中定义的属性，直接以attribute的形式作用在组件的根元素上！</span></span>
<span class="line"><span>    inheritAttrs: false, // inheritAttrs默认值为true,</span></span>
<span class="line"><span>    // props: {</span></span>
<span class="line"><span>    //     size: {</span></span>
<span class="line"><span>    //         type: String,</span></span>
<span class="line"><span>    //         default: &#39;small&#39;,</span></span>
<span class="line"><span>    //     },</span></span>
<span class="line"><span>    // },</span></span>
<span class="line"><span>    computed: {</span></span>
<span class="line"><span>        customizedAttrs() {</span></span>
<span class="line"><span>            return {</span></span>
<span class="line"><span>                size: &#39;large&#39;,</span></span>
<span class="line"><span>                // 支持传过来的size覆盖默认的size</span></span>
<span class="line"><span>                ...this.$attrs,</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&lt;script&gt;</span></span></code></pre></div>`,13),l=[e];function i(o,r,c,u,d,h){return n(),a("div",null,l)}const v=s(p,[["render",i]]);export{g as __pageData,v as default};
