import{_ as s,c as n,o as a,U as p}from"./chunks/framework.FpOEJISx.js";const h=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"public/static/_file/md/enclosure/timeLine/timeLine.md","filePath":"public/static/_file/md/enclosure/timeLine/timeLine.md"}'),l={name:"public/static/_file/md/enclosure/timeLine/timeLine.md"},e=p(`<div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>    &lt;div&gt;</span></span>
<span class="line"><span>        &lt;div class=&quot;artical-box&quot;&gt;</span></span>
<span class="line"><span>            &lt;div&gt;</span></span>
<span class="line"><span>                &lt;div v-for=&quot;(item, index) of list&quot; :key=&quot;index&quot; class=&quot;artical&quot;&gt;</span></span>
<span class="line"><span>                    &lt;div class=&quot;dotts&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span>                    &lt;div&gt;</span></span>
<span class="line"><span>                        &lt;span class=&quot;date&quot;&gt;</span></span>
<span class="line"><span>                            &lt;span class=&quot;trig&quot;&gt;&lt;/span&gt;</span></span>
<span class="line"><span>                            &lt;span class=&quot;dates fw700&quot;&gt;{{ item.time }}&lt;/span&gt;</span></span>
<span class="line"><span>                        &lt;/span&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                        &lt;div class=&quot;art-container&quot;&gt;</span></span>
<span class="line"><span>                            &lt;div class=&quot;line&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span>                            &lt;div class=&quot;art-content pointer&quot; @click=&quot;toDetails(item)&quot;&gt;</span></span>
<span class="line"><span>                                &lt;p class=&quot;art-title&quot;&gt;</span></span>
<span class="line"><span>                                    &lt;!-- &lt;a href=&quot;/detail?id=62e1f11e52e2f10b9b17319b&quot; style=&quot;color: #444;&quot;&gt;{{ item.title }}&lt;/a&gt; --&gt;</span></span>
<span class="line"><span>                                    &lt;span class=&quot;fw700&quot; style=&quot;color: #444;&quot;&gt;{{ item.title }}&lt;/span&gt;</span></span>
<span class="line"><span>                                &lt;/p&gt;</span></span>
<span class="line"><span>                                &lt;div v-show=&quot;item.img&quot; class=&quot;art-img&quot;&gt;</span></span>
<span class="line"><span>                                    &lt;img :src=&quot;item.img&quot; alt=&quot;文章配图&quot; /&gt;</span></span>
<span class="line"><span>                                &lt;/div&gt;</span></span>
<span class="line"><span>                                &lt;div class=&quot;art-detail&quot;&gt;</span></span>
<span class="line"><span>                                    &lt;p&gt;{{ item.intro }}&lt;/p&gt;</span></span>
<span class="line"><span>                                &lt;/div&gt;</span></span>
<span class="line"><span>                            &lt;/div&gt;</span></span>
<span class="line"><span>                        &lt;/div&gt;</span></span>
<span class="line"><span>                    &lt;/div&gt;</span></span>
<span class="line"><span>                &lt;/div&gt;</span></span>
<span class="line"><span>            &lt;/div&gt;</span></span>
<span class="line"><span>        &lt;/div&gt;</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script&gt;</span></span>
<span class="line"><span>import { defineComponent } from &#39;vue&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export default defineComponent({</span></span>
<span class="line"><span>    props: {</span></span>
<span class="line"><span>        list: {</span></span>
<span class="line"><span>            type: Array,</span></span>
<span class="line"><span>            default: () =&gt; {</span></span>
<span class="line"><span>                return [</span></span>
<span class="line"><span>                    {</span></span>
<span class="line"><span>                        time: &#39;2022.07.27&#39;,</span></span>
<span class="line"><span>                        title: &#39;PixiJS动画引擎在H5小游戏中的应用&#39;,</span></span>
<span class="line"><span>                        img: &#39;https://redspite.com/uploads/1658975121723.png&#39;,</span></span>
<span class="line"><span>                        intro: &#39;四年一度的冬季奥运会再次来到亚洲，而北京也成为全世界第一个举办过夏季奥运会和冬奥会的城市。在北京冬奥会即将开幕之际，我们自主开发的手机小游戏“欢乐滑雪赛”正式在客户端北京冬奥频道上线。&#39;,</span></span>
<span class="line"><span>                    },</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                    {</span></span>
<span class="line"><span>                        time: &#39;2022.07.27&#39;,</span></span>
<span class="line"><span>                        title: &#39;PixiJS动画引擎在H5小游戏中的应用&#39;,</span></span>
<span class="line"><span>                        img: &#39;&#39;,</span></span>
<span class="line"><span>                        intro: &#39;四年一度的冬季奥运会再次来到亚洲，而北京也成为全世界第一个举办过夏季奥运会和冬奥会的城市。在北京冬奥会即将开幕之际，我们自主开发的手机小游戏“欢乐滑雪赛”正式在客户端北京冬奥频道上线。&#39;,</span></span>
<span class="line"><span>                    },</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                    {</span></span>
<span class="line"><span>                        time: &#39;2022.07.27&#39;,</span></span>
<span class="line"><span>                        title: &#39;PixiJS动画引擎在H5小游戏中的应用&#39;,</span></span>
<span class="line"><span>                        img: &#39;&#39;,</span></span>
<span class="line"><span>                        intro: &#39;四年一度的冬季奥运会再次来到亚洲，而北京也成为全世界第一个举办过夏季奥运会和冬奥会的城市。在北京冬奥会即将开幕之际，我们自主开发的手机小游戏“欢乐滑雪赛”正式在客户端北京冬奥频道上线。&#39;,</span></span>
<span class="line"><span>                    },</span></span>
<span class="line"><span>                ]</span></span>
<span class="line"><span>            },</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    setup() {</span></span>
<span class="line"><span>        const toDetails = (item) =&gt; {</span></span>
<span class="line"><span>            $this.$router.push(item.url)</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        return {</span></span>
<span class="line"><span>            toDetails,</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;style scoped&gt;</span></span>
<span class="line"><span>/* artical */</span></span>
<span class="line"><span>.artical-box {</span></span>
<span class="line"><span>    /* padding-left: 15%; */</span></span>
<span class="line"><span>    padding-left: 5%;</span></span>
<span class="line"><span>    margin-top: 3em;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>.artical {</span></span>
<span class="line"><span>    width: 100%;</span></span>
<span class="line"><span>    position: relative;</span></span>
<span class="line"><span>    min-height: 0.3rem;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>.dotts {</span></span>
<span class="line"><span>    left: 1.2%;</span></span>
<span class="line"><span>    width: 1.2em;</span></span>
<span class="line"><span>    height: 1.2em;</span></span>
<span class="line"><span>    border: 0.143em solid #e2e0dc;</span></span>
<span class="line"><span>    position: absolute;</span></span>
<span class="line"><span>    top: 0;</span></span>
<span class="line"><span>    line-height: 0;</span></span>
<span class="line"><span>    border-radius: 50%;</span></span>
<span class="line"><span>    background: #fff;</span></span>
<span class="line"><span>    margin-left: -0.6em;</span></span>
<span class="line"><span>    z-index: 10;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>.date {</span></span>
<span class="line"><span>    display: block;</span></span>
<span class="line"><span>    position: absolute;</span></span>
<span class="line"><span>    top: -0.5em;</span></span>
<span class="line"><span>    margin-left: 3.5em;</span></span>
<span class="line"><span>    height: 2.14em;</span></span>
<span class="line"><span>    color: #948c76;</span></span>
<span class="line"><span>    z-index: 10;</span></span>
<span class="line"><span>    -webkit-transition: 0.3s;</span></span>
<span class="line"><span>    transition: 0.3s;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>.trig {</span></span>
<span class="line"><span>    position: absolute;</span></span>
<span class="line"><span>    left: -1.14em;</span></span>
<span class="line"><span>    top: 0;</span></span>
<span class="line"><span>    border-right: 16px solid #f7f3ee;</span></span>
<span class="line"><span>    border-top: 15px dashed transparent;</span></span>
<span class="line"><span>    border-bottom: 15px dashed transparent;</span></span>
<span class="line"><span>    width: 0;</span></span>
<span class="line"><span>    height: 0;</span></span>
<span class="line"><span>    line-height: 0;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>.dates {</span></span>
<span class="line"><span>    display: inline-block;</span></span>
<span class="line"><span>    padding: 0 1em;</span></span>
<span class="line"><span>    height: 30px;</span></span>
<span class="line"><span>    background: #f7f3ee;</span></span>
<span class="line"><span>    font-size: 0.8em;</span></span>
<span class="line"><span>    vertical-align: top;</span></span>
<span class="line"><span>    line-height: 2.5em;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>.art-container {</span></span>
<span class="line"><span>    width: 100%;</span></span>
<span class="line"><span>    padding: 0 0 0 1%;</span></span>
<span class="line"><span>    position: relative;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>.line {</span></span>
<span class="line"><span>    width: 0.143em;</span></span>
<span class="line"><span>    height: 100%;</span></span>
<span class="line"><span>    background: #f7f3ee;</span></span>
<span class="line"><span>    position: absolute;</span></span>
<span class="line"><span>    z-index: 0;</span></span>
<span class="line"><span>    -webkit-transition: 0.5s;</span></span>
<span class="line"><span>    transition: 0.5s;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>.art-content {</span></span>
<span class="line"><span>    padding: 0 1em 1em 2em;</span></span>
<span class="line"><span>    overflow: hidden;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>.art-title {</span></span>
<span class="line"><span>    margin: 3em 0 2em;</span></span>
<span class="line"><span>    font-size: 1em;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>.art-img {</span></span>
<span class="line"><span>    width: 30%;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>.art-img img {</span></span>
<span class="line"><span>    width: auto;</span></span>
<span class="line"><span>    height: auto;</span></span>
<span class="line"><span>    max-width: 100%;</span></span>
<span class="line"><span>    max-height: 100%;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>.art-detail {</span></span>
<span class="line"><span>    width: 85%;</span></span>
<span class="line"><span>    line-height: 1.5em;</span></span>
<span class="line"><span>    margin-top: 2em;</span></span>
<span class="line"><span>    padding-bottom: 2em;</span></span>
<span class="line"><span>    font-size: 0.8em;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&lt;/style&gt;</span></span></code></pre></div>`,1),i=[e];function t(c,o,d,r,g,m){return a(),n("div",null,i)}const q=s(l,[["render",t]]);export{h as __pageData,q as default};
