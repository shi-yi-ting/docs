import{_ as n,c as s,o as a,U as p}from"./chunks/framework.zpeVKxWT.js";const g=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"public/_file/md/enclosure/leftMenu.md","filePath":"public/_file/md/enclosure/leftMenu.md"}'),e={name:"public/_file/md/enclosure/leftMenu.md"},l=p(`<p><strong>HTML</strong></p><p>问题：不知道为啥在vitepress中使用vue组件时会出现样式乱掉的问题，在vue3项目中正常</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>    &lt;div class=&quot;leftMenu&quot; style=&quot;width: 220px&quot;&gt;</span></span>
<span class="line"><span>        &lt;!-- &lt;a-menu :selectedKeys=&quot;menu.selectedKeys&quot; :openKeys=&quot;menu.openKeys&quot; :theme=&quot;theme&quot; :mode=&quot;mode&quot; @click=&quot;handleMenuClick&quot; @openChange=&quot;handleOpenChange&quot;&gt; --&gt;</span></span>
<span class="line"><span>        &lt;a-menu :selectedKeys=&quot;menu.selectedKeys&quot; :openKeys=&quot;menu.openKeys&quot; :theme=&quot;theme&quot; :mode=&quot;mode&quot; @click=&quot;handleMenuClick&quot;&gt;</span></span>
<span class="line"><span>            &lt;MenuLink :menuList=&quot;menuList&quot; :fun=&quot;fun&quot; :subMenuFun=&quot;subMenuFun&quot; /&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            &lt;!-- &lt;a-sub-menu v-for=&quot;menuGroup in menuList&quot; :key=&quot;menuGroup.name&quot; :title=&quot;menuGroup.meta.title&quot;&gt;</span></span>
<span class="line"><span>                &lt;template v-if=&quot;menuGroup.children &amp;&amp; menuGroup.children.length&quot;&gt;</span></span>
<span class="line"><span>                    &lt;MenuLink :menuList=&quot;menuGroup.children&quot; :fun=&quot;fun&quot; /&gt;</span></span>
<span class="line"><span>                &lt;/template&gt;</span></span>
<span class="line"><span>            &lt;/a-sub-menu&gt; --&gt;</span></span>
<span class="line"><span>        &lt;/a-menu&gt;</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;/template&gt;</span></span></code></pre></div><p><strong>JS</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;script&gt;</span></span>
<span class="line"><span>import { reactive, onMounted} from &#39;vue&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import MenuLink from &#39;./vue/menuLink.vue&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export default {</span></span>
<span class="line"><span>    components: {</span></span>
<span class="line"><span>        MenuLink</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    props: {</span></span>
<span class="line"><span>        menuList: {</span></span>
<span class="line"><span>            type: Array,</span></span>
<span class="line"><span>            default: () =&gt; {</span></span>
<span class="line"><span>                return [</span></span>
<span class="line"><span>                    // 输入资料</span></span>
<span class="line"><span>                    {</span></span>
<span class="line"><span>                        name: &#39;b69bd8ca0&#39;,</span></span>
<span class="line"><span>                        path: &#39;b69bd8ca0&#39;,</span></span>
<span class="line"><span>                        fatherCode: null,</span></span>
<span class="line"><span>                        meta: {</span></span>
<span class="line"><span>                            title: &#39;输入资料&#39;,</span></span>
<span class="line"><span>                            icon: &#39;AppstoreOutlined&#39;,</span></span>
<span class="line"><span>                            breadcrumb: true,</span></span>
<span class="line"><span>                            hidden: false,</span></span>
<span class="line"><span>                        },</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                        children: [</span></span>
<span class="line"><span>                            {</span></span>
<span class="line"><span>                                path: &#39;b69bd8cd1&#39;,</span></span>
<span class="line"><span>                                name: &#39;b69bd8cd1&#39;,</span></span>
<span class="line"><span>                                fatherCode: &#39;b69bd8ca0&#39;,</span></span>
<span class="line"><span>                                meta: {</span></span>
<span class="line"><span>                                    title: &#39;站场&#39;,</span></span>
<span class="line"><span>                                    breadcrumb: true,</span></span>
<span class="line"><span>                                    hidden: false,</span></span>
<span class="line"><span>                                },</span></span>
<span class="line"><span>                                // component: () =&gt; import(&#39;@/views/projectItem/information/station/station.vue&#39;),</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                                // children: [</span></span>
<span class="line"><span>                                //     {</span></span>
<span class="line"><span>                                //         path: &#39;b69bd8cd3&#39;,</span></span>
<span class="line"><span>                                //         name: &#39;b69bd8cd3&#39;,</span></span>
<span class="line"><span>                                //         fatherCode: &#39;b69bd8cd1&#39;,</span></span>
<span class="line"><span>                                //         meta: {</span></span>
<span class="line"><span>                                //             title: &#39;经调&#39;,</span></span>
<span class="line"><span>                                //             breadcrumb: true,</span></span>
<span class="line"><span>                                //             hidden: false,</span></span>
<span class="line"><span>                                //         },</span></span>
<span class="line"><span>                                //         // component: () =&gt; import(&#39;@/views/projectItem/information/warpMove/warpMove.vue&#39;),</span></span>
<span class="line"><span>                                //     },</span></span>
<span class="line"><span>                                // ]</span></span>
<span class="line"><span>                            },</span></span>
<span class="line"><span>                            {</span></span>
<span class="line"><span>                                path: &#39;b69bd8cd2&#39;,</span></span>
<span class="line"><span>                                name: &#39;b69bd8cd2&#39;,</span></span>
<span class="line"><span>                                fatherCode: &#39;b69bd8ca0&#39;,</span></span>
<span class="line"><span>                                meta: {</span></span>
<span class="line"><span>                                    title: &#39;经调&#39;,</span></span>
<span class="line"><span>                                    breadcrumb: true,</span></span>
<span class="line"><span>                                    hidden: false,</span></span>
<span class="line"><span>                                },</span></span>
<span class="line"><span>                                // component: () =&gt; import(&#39;@/views/projectItem/information/warpMove/warpMove.vue&#39;),</span></span>
<span class="line"><span>                            },</span></span>
<span class="line"><span>                        ],</span></span>
<span class="line"><span>                    },</span></span>
<span class="line"><span>                ]</span></span>
<span class="line"><span>            },</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        subMenuFun: {</span></span>
<span class="line"><span>            type: Function,</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        fun: {</span></span>
<span class="line"><span>            type: Function,</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        theme: {</span></span>
<span class="line"><span>            type: String,</span></span>
<span class="line"><span>            default: &#39;light &#39; // light, dark</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        mode: {</span></span>
<span class="line"><span>            type: String,</span></span>
<span class="line"><span>            default: &#39;inline&#39;</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    setup(props) {</span></span>
<span class="line"><span>        const menu = reactive({</span></span>
<span class="line"><span>            // selectedKeys: [&#39;b69bd8cd1&#39;],</span></span>
<span class="line"><span>            selectedKeys: [],</span></span>
<span class="line"><span>            openKeys: [],</span></span>
<span class="line"><span>        })</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 处理菜单项点击事件</span></span>
<span class="line"><span>        const handleMenuClick = ({ key }) =&gt; {</span></span>
<span class="line"><span>            console.log(&#39;key&#39;, key)</span></span>
<span class="line"><span>            menu.selectedKeys = [key]</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        const handleOpenChange = (openKeys, info) =&gt; {</span></span>
<span class="line"><span>            console.log(&#39;info&#39;, info)</span></span>
<span class="line"><span>            props.subMenuFun &amp;&amp; props.subMenuFun(openKeys)</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        onMounted(() =&gt; {</span></span>
<span class="line"><span>            if (props.menuList &amp;&amp; props.menuList.length &gt; 0 &amp;&amp; props.menuList[0].children &amp;&amp; props.menuList[0].children.length) {</span></span>
<span class="line"><span>                menu.selectedKeys = [props.menuList[0].children[0].name];</span></span>
<span class="line"><span>                menu.openKeys = [props.menuList[0].name];</span></span>
<span class="line"><span>            } else {</span></span>
<span class="line"><span>                menu.selectedKeys = []</span></span>
<span class="line"><span>                menu.selectedKeys =[props.menuList[0].name]</span></span>
<span class="line"><span>                menu.openKeys = []</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        })</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        return {</span></span>
<span class="line"><span>            menu,</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            handleMenuClick,</span></span>
<span class="line"><span>            handleOpenChange,</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span>&lt;/script&gt;</span></span></code></pre></div><p><strong>style</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;style lang=&quot;less&quot; scoped&gt;</span></span>
<span class="line"><span>.leftMenu {</span></span>
<span class="line"><span>    max-height: 100%;</span></span>
<span class="line"><span>    overflow: auto;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&lt;/style&gt;</span></span></code></pre></div>`,7),t=[l];function i(c,o,u,d,m,r){return a(),s("div",null,t)}const b=n(e,[["render",i]]);export{g as __pageData,b as default};
