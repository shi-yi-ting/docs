import{_ as s,c as n,o as a,U as p}from"./chunks/framework.FpOEJISx.js";const f=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"public/static/_file/md/enclosure/carousel/elCarousel.md","filePath":"public/static/_file/md/enclosure/carousel/elCarousel.md"}'),l={name:"public/static/_file/md/enclosure/carousel/elCarousel.md"},e=p(`<h2 id="使用" tabindex="-1">使用 <a class="header-anchor" href="#使用" aria-label="Permalink to &quot;使用&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>     &lt;div&gt;</span></span>
<span class="line"><span>        &lt;MyCarousel :list=&quot;carousel.list&quot; @switchPage=&quot;switchPage&quot; /&gt;</span></span>
<span class="line"><span>        &lt;!-- &lt;Component :is=&quot;type.componentName&quot; /&gt; --&gt;</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script&gt;</span></span>
<span class="line"><span>import { defineComponent, reactive, computed } from &#39;vue&#39;</span></span>
<span class="line"><span>import MyCarousel from &#39;./vue/carousel.vue&#39;</span></span>
<span class="line"><span>import { carouselList } from &#39;./_js/staticVariable.js&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// import ConfigModal from &#39;./page/configModal/configModal.vue&#39;</span></span>
<span class="line"><span>// import Echart from &#39;./page/echart/echart.vue&#39;</span></span>
<span class="line"><span>// import Encap from &#39;./page/encap/encap.vue&#39;</span></span>
<span class="line"><span>// import Flex from &#39;./page/flex/flex.vue&#39;</span></span>
<span class="line"><span>// import Header from &#39;./page/header/header.vue&#39;</span></span>
<span class="line"><span>// import IframePdf from &#39;./page/iframePdf/iframePdf.vue&#39;</span></span>
<span class="line"><span>// import Language from &#39;./page/language/language.vue&#39;</span></span>
<span class="line"><span>// import Passthrough from &#39;./page/passthrough/passthrough.vue&#39;</span></span>
<span class="line"><span>// import Modal from &#39;./page/modal/modal.vue&#39;</span></span>
<span class="line"><span>// import Router from &#39;./page/router/router.vue&#39;</span></span>
<span class="line"><span>// import Time from &#39;./page/time/time.vue&#39;</span></span>
<span class="line"><span>// import Tip from &#39;./page/tip/tip.vue&#39;</span></span>
<span class="line"><span>// import Tree from &#39;./page/tree/tree.vue&#39;</span></span>
<span class="line"><span>// import Validate from &#39;./page/validate/validate.vue&#39;</span></span>
<span class="line"><span>// import Video from &#39;./page/video/video.vue&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export default defineComponent({</span></span>
<span class="line"><span>    components: {</span></span>
<span class="line"><span>        MyCarousel,</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // ConfigModal,</span></span>
<span class="line"><span>        // Echart,</span></span>
<span class="line"><span>        // Encap,</span></span>
<span class="line"><span>        // Flex,</span></span>
<span class="line"><span>        // Header,</span></span>
<span class="line"><span>        // IframePdf,</span></span>
<span class="line"><span>        // Language,</span></span>
<span class="line"><span>        // Passthrough,</span></span>
<span class="line"><span>        // Modal,</span></span>
<span class="line"><span>        // Router,</span></span>
<span class="line"><span>        // Time,</span></span>
<span class="line"><span>        // Tip,</span></span>
<span class="line"><span>        // Tree,</span></span>
<span class="line"><span>        // Validate,</span></span>
<span class="line"><span>        // Video,</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    setup() {</span></span>
<span class="line"><span>        const carousel = reactive({</span></span>
<span class="line"><span>            isActive: &#39;table&#39;,</span></span>
<span class="line"><span>            list: carouselList,</span></span>
<span class="line"><span>        })</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        const switchPage = (item) =&gt; {</span></span>
<span class="line"><span>            carousel.isActive = item.pageType</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        const type = computed(() =&gt; {</span></span>
<span class="line"><span>            return {</span></span>
<span class="line"><span>                table: {</span></span>
<span class="line"><span>                    componentName: &#39;Table&#39;,</span></span>
<span class="line"><span>                },</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                modal: {</span></span>
<span class="line"><span>                    componentName: &#39;Modal&#39;,</span></span>
<span class="line"><span>                },</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                header: {</span></span>
<span class="line"><span>                    componentName: &#39;Header&#39;,</span></span>
<span class="line"><span>                },</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                tip: {</span></span>
<span class="line"><span>                    componentName: &#39;Tip&#39;,</span></span>
<span class="line"><span>                },</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                language: {</span></span>
<span class="line"><span>                    componentName: &#39;Language&#39;,</span></span>
<span class="line"><span>                },</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                time: {</span></span>
<span class="line"><span>                    componentName: &#39;Time&#39;,</span></span>
<span class="line"><span>                },</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                configModal: {</span></span>
<span class="line"><span>                    componentName: &#39;ConfigModal&#39;,</span></span>
<span class="line"><span>                },</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                validate: {</span></span>
<span class="line"><span>                    componentName: &#39;Validate&#39;,</span></span>
<span class="line"><span>                },</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                router: {</span></span>
<span class="line"><span>                    componentName: &#39;Router&#39;,</span></span>
<span class="line"><span>                },</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                tree: {</span></span>
<span class="line"><span>                    componentName: &#39;Tree&#39;,</span></span>
<span class="line"><span>                },</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                iframePdf: {</span></span>
<span class="line"><span>                    componentName: &#39;IframePdf&#39;,</span></span>
<span class="line"><span>                },</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                encap: {</span></span>
<span class="line"><span>                    componentName: &#39;Encap&#39;,</span></span>
<span class="line"><span>                },</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                flex: {</span></span>
<span class="line"><span>                    componentName: &#39;Flex&#39;,</span></span>
<span class="line"><span>                },</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                echart: {</span></span>
<span class="line"><span>                    componentName: &#39;Echart&#39;,</span></span>
<span class="line"><span>                },</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                staticPage: {</span></span>
<span class="line"><span>                    componentName: &#39;StaticPage&#39;,</span></span>
<span class="line"><span>                },</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                test: {</span></span>
<span class="line"><span>                    componentName: &#39;Test&#39;,</span></span>
<span class="line"><span>                },</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                passthrough: {</span></span>
<span class="line"><span>                    componentName: &#39;passthrough&#39;,</span></span>
<span class="line"><span>                },</span></span>
<span class="line"><span>                video: {</span></span>
<span class="line"><span>                    componentName: &#39;Video&#39;,</span></span>
<span class="line"><span>                },</span></span>
<span class="line"><span>            }[carousel.isActive]</span></span>
<span class="line"><span>        })</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>        return {</span></span>
<span class="line"><span>            carousel,</span></span>
<span class="line"><span>            type,</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            switchPage,</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;style scoped&gt;</span></span>
<span class="line"><span>&lt;/style&gt;</span></span></code></pre></div><h2 id="mycarousel组件封装" tabindex="-1">MyCarousel组件封装 <a class="header-anchor" href="#mycarousel组件封装" aria-label="Permalink to &quot;MyCarousel组件封装&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>    &lt;div&gt;</span></span>
<span class="line"><span>        &lt;div class=&quot;carousel-wrap&quot;&gt;</span></span>
<span class="line"><span>            &lt;el-carousel arrow=&quot;always&quot; :autoplay=&quot;false&quot;&gt;</span></span>
<span class="line"><span>                &lt;el-carousel-item v-for=&quot;item in list&quot; :key=&quot;item.id&quot;&gt;</span></span>
<span class="line"><span>                    &lt;div class=&quot;carousel&quot;&gt;</span></span>
<span class="line"><span>                        &lt;!-- &lt;div v-for=&quot;(itemTwo, index) of item.childrenList&quot; :key=&quot;index&quot; class=&quot;item&quot; :style=&quot;{ backgroundImage: &#39;url(&#39; + require(\`@/assets/images/\${itemTwo.id}.png\`) + &#39;)&#39; }&quot;&gt;{{ itemTwo.name }}&lt;/div&gt; --&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                        &lt;!-- &lt;div v-for=&quot;(itemTwo, index) of item.childrenList&quot; :key=&quot;index&quot; class=&quot;item&quot; :style=&quot;{ backgroundImage: &#39;url(&#39; + require(\`@/assets/logo.png\`) + &#39;)&#39; }&quot; @click=&quot;switchPage(itemTwo)&quot;&gt;{{ itemTwo.name }}&lt;/div&gt; --&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                        &lt;div v-for=&quot;(itemTwo, index) of item.childrenList&quot; :key=&quot;index&quot; class=&quot;item&quot; @click=&quot;switchPage(itemTwo)&quot;&gt;{{ itemTwo.name }}&lt;/div&gt;</span></span>
<span class="line"><span>                    &lt;/div&gt;</span></span>
<span class="line"><span>                &lt;/el-carousel-item&gt;</span></span>
<span class="line"><span>            &lt;/el-carousel&gt;</span></span>
<span class="line"><span>        &lt;/div&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        &lt;!-- &lt;Component :is=&quot;type.componentName&quot; /&gt; --&gt;</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script&gt;</span></span>
<span class="line"><span>import { defineComponent, reactive, computed } from &#39;vue&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import { ElCarousel, ElCarouselItem } from &#39;element-plus&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export default defineComponent({</span></span>
<span class="line"><span>    components: {</span></span>
<span class="line"><span>        ElCarousel,</span></span>
<span class="line"><span>        ElCarouselItem,</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    props: {</span></span>
<span class="line"><span>        list: {</span></span>
<span class="line"><span>            type: Array,</span></span>
<span class="line"><span>            default: () =&gt; {</span></span>
<span class="line"><span>                return []</span></span>
<span class="line"><span>            },</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    setup(props, { emit }) {</span></span>
<span class="line"><span>        // const carousel = reactive({</span></span>
<span class="line"><span>        //     isActive: &#39;flex&#39;,</span></span>
<span class="line"><span>        //     list: props.list,</span></span>
<span class="line"><span>        // })</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        const switchPage = (item) =&gt; {</span></span>
<span class="line"><span>            // carousel.isActive = item.pageType</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            emit(&#39;switchPage&#39;, item)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            // $this.$router.push({</span></span>
<span class="line"><span>            //     name: &#39;home&#39;,</span></span>
<span class="line"><span>            //     params: {</span></span>
<span class="line"><span>            //         type: item.id,</span></span>
<span class="line"><span>            //         name: item.name,</span></span>
<span class="line"><span>            //     },</span></span>
<span class="line"><span>            // })</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // const type = computed(() =&gt; {</span></span>
<span class="line"><span>        //     return {</span></span>
<span class="line"><span>        //         echart: {</span></span>
<span class="line"><span>        //             componentName: &#39;Echart&#39;,</span></span>
<span class="line"><span>        //         },</span></span>
<span class="line"><span>        //         flex: {</span></span>
<span class="line"><span>        //             componentName: &#39;Flex&#39;,</span></span>
<span class="line"><span>        //         },</span></span>
<span class="line"><span>        //         widget: {</span></span>
<span class="line"><span>        //             componentName: &#39;Widget&#39;,</span></span>
<span class="line"><span>        //         },</span></span>
<span class="line"><span>        //     }[carousel.isActive]</span></span>
<span class="line"><span>        // })</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        return {</span></span>
<span class="line"><span>            // carousel,</span></span>
<span class="line"><span>            // type,</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            switchPage,</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;style scoped&gt;</span></span>
<span class="line"><span>.carousel-wrap {</span></span>
<span class="line"><span>    /* padding-bottom: 64px; */</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>.carousel {</span></span>
<span class="line"><span>    display: grid;</span></span>
<span class="line"><span>    grid-template-columns: repeat(5, 20%);</span></span>
<span class="line"><span>    grid-column-gap: 16px;</span></span>
<span class="line"><span>    grid-row-gap: 16px;</span></span>
<span class="line"><span>    margin-right: 64px;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>.carousel .item {</span></span>
<span class="line"><span>    display: flex;</span></span>
<span class="line"><span>    justify-content: center;</span></span>
<span class="line"><span>    align-items: center;</span></span>
<span class="line"><span>    color: #fff;</span></span>
<span class="line"><span>    background: #ccc;</span></span>
<span class="line"><span>    height: 90px;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>.carousel .item:hover {</span></span>
<span class="line"><span>    background: green;</span></span>
<span class="line"><span>    cursor: pointer;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>.carousel-wrap &gt;&gt;&gt; .el-carousel__indicators {</span></span>
<span class="line"><span>    display: none;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>.carousel-wrap &gt;&gt;&gt; .el-carousel--horizontal {</span></span>
<span class="line"><span>    padding: 0 60px;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>.carousel-wrap &gt;&gt;&gt; .el-carousel__arrow--left {</span></span>
<span class="line"><span>    left: -50px;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>.carousel-wrap &gt;&gt;&gt; .el-carousel__arrow--right {</span></span>
<span class="line"><span>    right: -50px;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&lt;/style&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;style&gt;</span></span>
<span class="line"><span>.carousel-wrap .el-carousel__container {</span></span>
<span class="line"><span>    height: 200px;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&lt;/style&gt;</span></span></code></pre></div>`,4),i=[e];function c(t,o,r,u,m,g){return a(),n("div",null,i)}const h=s(l,[["render",c]]);export{f as __pageData,h as default};
