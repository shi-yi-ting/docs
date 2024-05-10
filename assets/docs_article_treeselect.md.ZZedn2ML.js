import{_ as n,c as s,o as a,U as p}from"./chunks/framework.FpOEJISx.js";const v=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"docs/article/treeselect.md","filePath":"docs/article/treeselect.md"}'),e={name:"docs/article/treeselect.md"},l=p(`<h2 id="单层级" tabindex="-1">单层级 <a class="header-anchor" href="#单层级" aria-label="Permalink to &quot;单层级&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>    &lt;span&gt;</span></span>
<span class="line"><span>        &lt;!-- 1. 当下拉树是单选的时候，v-modle绑定的值设为null，必须是null，不能是‘null’，初始化的时候才不会出现unknown。 --&gt;</span></span>
<span class="line"><span>        &lt;!-- 2. options的值是个树形结构的数组，normalizer属性，是用于转换options的值的，把options的值，转换为符合vue-treeselect要求的数据格式。 --&gt;</span></span>
<span class="line"><span>        &lt;!-- 3. 在normalizer中要注意处理一下空节点 --&gt;</span></span>
<span class="line"><span>        &lt;treeselect v-model=&quot;config.departmentId&quot; :options=&quot;treeData.data&quot; :normalizer=&quot;normalizer&quot; placeholder=&quot;请选择&quot; style=&quot;width: 300px; margin-left: 45%;&quot; /&gt;</span></span>
<span class="line"><span>    &lt;/span&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script&gt;</span></span>
<span class="line"><span>import { computed, defineComponent, onMounted, reactive } from &#39;@vue/composition-api&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 引入vue的树形下拉框组件</span></span>
<span class="line"><span>import Treeselect from &#39;@riophae/vue-treeselect&#39;</span></span>
<span class="line"><span>// 引入vue的树形下拉框组件样式</span></span>
<span class="line"><span>import &#39;@riophae/vue-treeselect/dist/vue-treeselect.css&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export default defineComponent({</span></span>
<span class="line"><span>    components: {</span></span>
<span class="line"><span>        Treeselect,</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    setup() {</span></span>
<span class="line"><span>        const config = reactive({</span></span>
<span class="line"><span>            // 当下拉树是单选的时候，绑定的值设为null,必须是null，不能是‘null’，初始化的时候才不会出现unknown</span></span>
<span class="line"><span>            departmentId: null,</span></span>
<span class="line"><span>        })</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        const options = reactive({</span></span>
<span class="line"><span>            departments: computed(() =&gt; {</span></span>
<span class="line"><span>                return [</span></span>
<span class="line"><span>                    {</span></span>
<span class="line"><span>                        createTime: &#39;2021-04-30 09:33:40&#39;,</span></span>
<span class="line"><span>                        createUser: &#39;134&#39;,</span></span>
<span class="line"><span>                        departmentDesc: &#39;&#39;,</span></span>
<span class="line"><span>                        departmentId: 137,</span></span>
<span class="line"><span>                        departmentLevel: 1,</span></span>
<span class="line"><span>                        departmentName: &#39;CCCCC&#39;,</span></span>
<span class="line"><span>                        factoryId: 63,</span></span>
<span class="line"><span>                        parentId: 0,</span></span>
<span class="line"><span>                        updateTime: &#39;2021-04-30 09:33:40&#39;,</span></span>
<span class="line"><span>                        updateUser: &#39;&#39;,</span></span>
<span class="line"><span>                    },</span></span>
<span class="line"><span>                    {</span></span>
<span class="line"><span>                        createTime: &#39;2021-04-30 09:33:41&#39;,</span></span>
<span class="line"><span>                        createUser: &#39;135&#39;,</span></span>
<span class="line"><span>                        departmentDesc: &#39;&#39;,</span></span>
<span class="line"><span>                        departmentId: 138,</span></span>
<span class="line"><span>                        departmentLevel: 1,</span></span>
<span class="line"><span>                        departmentName: &#39;DDDDD&#39;,</span></span>
<span class="line"><span>                        factoryId: 64,</span></span>
<span class="line"><span>                        parentId: 1,</span></span>
<span class="line"><span>                        updateTime: &#39;2021-04-30 09:33:41&#39;,</span></span>
<span class="line"><span>                        updateUser: &#39;&#39;,</span></span>
<span class="line"><span>                    },</span></span>
<span class="line"><span>                ]</span></span>
<span class="line"><span>            }),</span></span>
<span class="line"><span>        })</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        function newTree(arr) {</span></span>
<span class="line"><span>            let levelArr = [], treeList = []</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            // 1. concat() 方法用于连接两个或多个数组。</span></span>
<span class="line"><span>            // 2. 该方法不会改变现有的数组，而仅仅会返回被连接数组的一个副本。</span></span>
<span class="line"><span>            // 3. 语法: arrayObject.concat(arrayX,arrayX,......,arrayX)</span></span>
<span class="line"><span>            // 4. arrayX 必需。该参数可以是具体的值，也可以是数组对象。可以是任意多个。</span></span>
<span class="line"><span>            // 5. 返回一个新的数组。该数组是通过把所有 arrayX 参数添加到 arrayObject 中生成的。如果要进行 concat() 操作的参数是数组，那么添加的是数组中的元素，而不是数组。</span></span>
<span class="line"><span>            let list = [].concat(arr)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            for (let i = 0; i &lt; list.length; i++) {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                // 1. push方法会直接修改原数组</span></span>
<span class="line"><span>                // 2. levelArr数组当中存放着departmentLevel</span></span>
<span class="line"><span>                levelArr.push(list[i].departmentLevel)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                for (let j = 0; j &lt; list.length; j++) {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                    if (list[j].parentId === list[i].departmentId) {</span></span>
<span class="line"><span>                        // 添加新属性</span></span>
<span class="line"><span>                        list[i].children = []</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                        // 添加新属性</span></span>
<span class="line"><span>                        list[j].id = list[j].departmentId</span></span>
<span class="line"><span>                        list[j].label = list[j].departmentName</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>                        list[i].children.push(list[j])</span></span>
<span class="line"><span>                    }</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            console.log(&#39;levelArr111&#39;, levelArr)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            // 去重并进行排序</span></span>
<span class="line"><span>            levelArr = Array.from(new Set(levelArr)).sort((a, b) =&gt; { return a - b })</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            console.log(&#39;levelArr222&#39;, levelArr)</span></span>
<span class="line"><span>            console.log(&#39;list&#39;, list)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            for (let j = 0; j &lt; list.length; j++) {</span></span>
<span class="line"><span>                if (list[j].departmentLevel === levelArr[0]) {</span></span>
<span class="line"><span>                    treeList.push(list[j])</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            console.log(&#39;treeList&#39;, treeList)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            return treeList</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        onMounted(() =&gt; {</span></span>
<span class="line"><span>            newTree(options.departments)</span></span>
<span class="line"><span>        })</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        const treeData = reactive({</span></span>
<span class="line"><span>            data: computed(() =&gt; { // departments的值发生变动将触发newTree</span></span>
<span class="line"><span>                return newTree(options.departments)</span></span>
<span class="line"><span>            }),</span></span>
<span class="line"><span>        })</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 1. ormalizer属性，是用于转换options的值的，把options的值，转换为符合vue-treeselect要求的数据格式。</span></span>
<span class="line"><span>        function normalizer(node) {</span></span>
<span class="line"><span>            console.log(&#39;node&#39;, node)</span></span>
<span class="line"><span>            console.log(&#39;treeData.data&#39;, treeData.data)</span></span>
<span class="line"><span>            return {</span></span>
<span class="line"><span>                id: node.departmentId,</span></span>
<span class="line"><span>                label: node.departmentName,</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        return {</span></span>
<span class="line"><span>            config,</span></span>
<span class="line"><span>            options,</span></span>
<span class="line"><span>            treeData,</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            normalizer,</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span>&lt;/script&gt;</span></span></code></pre></div><h2 id="多层级" tabindex="-1">多层级 <a class="header-anchor" href="#多层级" aria-label="Permalink to &quot;多层级&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>    &lt;span&gt;</span></span>
<span class="line"><span>        &lt;treeselect v-model=&quot;config.value&quot; :multiple=&quot;true&quot; :options=&quot;options.list&quot; style=&quot;width: 300px; margin-left: 45%;&quot; /&gt;</span></span>
<span class="line"><span>        &lt;!-- &lt;treeselect v-model=&quot;config.value&quot; :options=&quot;options.list&quot; style=&quot;width: 300px; margin-left: 45%;&quot; /&gt; --&gt;</span></span>
<span class="line"><span>    &lt;/span&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script&gt;</span></span>
<span class="line"><span>import { computed, defineComponent, onMounted, reactive } from &#39;@vue/composition-api&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 引入vue的树形下拉框组件</span></span>
<span class="line"><span>import Treeselect from &#39;@riophae/vue-treeselect&#39;</span></span>
<span class="line"><span>// 引入vue的树形下拉框组件样式</span></span>
<span class="line"><span>import &#39;@riophae/vue-treeselect/dist/vue-treeselect.css&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export default defineComponent({</span></span>
<span class="line"><span>    components: {</span></span>
<span class="line"><span>        Treeselect,</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    setup() {</span></span>
<span class="line"><span>        const config = reactive({</span></span>
<span class="line"><span>            value: null,</span></span>
<span class="line"><span>        })</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        const options = reactive({</span></span>
<span class="line"><span>            list: [</span></span>
<span class="line"><span>                {</span></span>
<span class="line"><span>                    id: &#39;a&#39;,</span></span>
<span class="line"><span>                    label: &#39;a&#39;,</span></span>
<span class="line"><span>                    children: [</span></span>
<span class="line"><span>                        {</span></span>
<span class="line"><span>                            id: &#39;aa&#39;,</span></span>
<span class="line"><span>                            label: &#39;aa&#39;,</span></span>
<span class="line"><span>                        },</span></span>
<span class="line"><span>                        {</span></span>
<span class="line"><span>                            id: &#39;ab&#39;,</span></span>
<span class="line"><span>                            label: &#39;ab&#39;,</span></span>
<span class="line"><span>                        },</span></span>
<span class="line"><span>                    ],</span></span>
<span class="line"><span>                },</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                {</span></span>
<span class="line"><span>                    id: &#39;b&#39;,</span></span>
<span class="line"><span>                    label: &#39;b&#39;,</span></span>
<span class="line"><span>                },</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                {</span></span>
<span class="line"><span>                    id: &#39;c&#39;,</span></span>
<span class="line"><span>                    label: &#39;c&#39;,</span></span>
<span class="line"><span>                },</span></span>
<span class="line"><span>            ],</span></span>
<span class="line"><span>        })</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        return {</span></span>
<span class="line"><span>            config,</span></span>
<span class="line"><span>            options,</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span>&lt;/script&gt;</span></span></code></pre></div><p>vue2和vue3使用有区别参考链接：<a href="https://blog.csdn.net/wang13679201813/article/details/126998718" target="_blank" rel="noreferrer">https://blog.csdn.net/wang13679201813/article/details/126998718</a></p>`,5),t=[l];function i(c,r,o,d,u,m){return a(),s("div",null,t)}const h=n(e,[["render",i]]);export{v as __pageData,h as default};
