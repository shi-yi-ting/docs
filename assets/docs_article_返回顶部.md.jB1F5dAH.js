import{_ as s,c as n,o as a,U as p}from"./chunks/framework.FpOEJISx.js";const b=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"docs/article/返回顶部.md","filePath":"docs/article/返回顶部.md"}'),l={name:"docs/article/返回顶部.md"},e=p(`<h2 id="返回顶部" tabindex="-1">返回顶部 <a class="header-anchor" href="#返回顶部" aria-label="Permalink to &quot;返回顶部&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>    &lt;div&gt;</span></span>
<span class="line"><span>        &lt;!-- 返回顶部 --&gt;</span></span>
<span class="line"><span>        &lt;div id=&quot;backtop&quot; class=&quot;backtop&quot; title=&quot;返回顶部&quot; @click=&quot;backToTop&quot;&gt;</span></span>
<span class="line"><span>            &lt;img src=&quot;./_img/backTop.png&quot; alt=&quot;&quot;&gt;</span></span>
<span class="line"><span>            &lt;!-- &lt;i class=&quot;el-icon-caret-top&quot;&gt;&lt;/i&gt; --&gt;</span></span>
<span class="line"><span>        &lt;/div&gt;</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script&gt;</span></span>
<span class="line"><span>import axios from &#39;@/api/axios.js&#39;</span></span>
<span class="line"><span>import $ from &#39;jquery&#39;</span></span>
<span class="line"><span>import { reactive, onMounted, onUnmounted } from &#39;vue&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export default {</span></span>
<span class="line"><span>    setup(props) {</span></span>
<span class="line"><span>        // 返回顶部</span></span>
<span class="line"><span>        function useBackTop() {</span></span>
<span class="line"><span>            const backToTop = () =&gt; {</span></span>
<span class="line"><span>                window.scrollTo({ top: 0, behavior: &#39;smooth&#39; })</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            const getScrollTop = () =&gt; {</span></span>
<span class="line"><span>                let min_height = document.documentElement.clientHeight / 2</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                $(window).scroll(() =&gt; { // 页面滚动监听</span></span>
<span class="line"><span>                    let height = $(window).scrollTop()</span></span>
<span class="line"><span>                    height &gt; min_height ? $(&#39;#backtop&#39;).fadeIn() : $(&#39;#backtop&#39;).fadeOut()</span></span>
<span class="line"><span>                })</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>            onMounted(() =&gt; {</span></span>
<span class="line"><span>                window.addEventListener(&#39;scroll&#39;, getScrollTop)</span></span>
<span class="line"><span>            })</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            onUnmounted(() =&gt; {</span></span>
<span class="line"><span>                window.removeEventListener(&#39;scroll&#39;, getScrollTop)</span></span>
<span class="line"><span>            })</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            return { backToTop }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>        return {</span></span>
<span class="line"><span>            ...useBackTop(),</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;style lang=&quot;less&quot; scoped&gt;</span></span>
<span class="line"><span>.backtop {</span></span>
<span class="line"><span>    display: flex;</span></span>
<span class="line"><span>    justify-content: center;</span></span>
<span class="line"><span>    align-items: center;</span></span>
<span class="line"><span>    position: fixed;</span></span>
<span class="line"><span>    right: 40px;</span></span>
<span class="line"><span>    bottom: 80px;</span></span>
<span class="line"><span>    width: 40px;</span></span>
<span class="line"><span>    height: 40px;</span></span>
<span class="line"><span>    color: #2c3e50;</span></span>
<span class="line"><span>    font-size: 20px;</span></span>
<span class="line"><span>    border-radius: 50%;</span></span>
<span class="line"><span>    background-color: #fff;</span></span>
<span class="line"><span>    cursor: pointer;</span></span>
<span class="line"><span>    z-index: 5;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    display: -webkit-box;</span></span>
<span class="line"><span>    display: -ms-flexbox;</span></span>
<span class="line"><span>    -webkit-box-align: center;</span></span>
<span class="line"><span>    -ms-flex-align: center;</span></span>
<span class="line"><span>    -webkit-box-pack: center;</span></span>
<span class="line"><span>    -ms-flex-pack: center;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // -webkit-box-shadow: 0 0 6px rgb(0 0 0 / 12%);</span></span>
<span class="line"><span>    // box-shadow: 0 0 6px rgb(0 0 0 / 12%);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    -webkit-box-shadow: 0 2px 4px -1px rgb(0 0 0 / 20%),</span></span>
<span class="line"><span>        0 4px 5px 0 rgb(0 0 0 / 14%), 0 1px 10px 0 rgb(0 0 0 / 12%);</span></span>
<span class="line"><span>    box-shadow: 0 2px 4px -1px rgb(0 0 0 / 20%), 0 4px 5px 0 rgb(0 0 0 / 14%),</span></span>
<span class="line"><span>        0 1px 10px 0 rgb(0 0 0 / 12%);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>.el-icon-caret-top:before {</span></span>
<span class="line"><span>    content: &quot;\\e78f&quot;;</span></span>
<span class="line"><span>    color: #a0a0a0;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&lt;/style&gt;</span></span></code></pre></div>`,2),t=[e];function i(c,o,r,d,g,u){return a(),n("div",null,t)}const h=s(l,[["render",i]]);export{b as __pageData,h as default};
