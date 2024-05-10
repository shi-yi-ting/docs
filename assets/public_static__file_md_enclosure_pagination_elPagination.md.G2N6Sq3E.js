import{_ as n,c as s,o as a,U as p}from"./chunks/framework.FpOEJISx.js";const m=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"public/static/_file/md/enclosure/pagination/elPagination.md","filePath":"public/static/_file/md/enclosure/pagination/elPagination.md"}'),l={name:"public/static/_file/md/enclosure/pagination/elPagination.md"},e=p(`<h2 id="使用" tabindex="-1">使用 <a class="header-anchor" href="#使用" aria-label="Permalink to &quot;使用&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>    &lt;div&gt;</span></span>
<span class="line"><span>        &lt;Pagination :total=&quot;content.total&quot; :page=&quot;page.current&quot; :limit=&quot;page.size&quot; @pagination=&quot;pagination&quot; /&gt;</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script  setup&gt;</span></span>
<span class="line"><span>import { ref, reactive, computed, watch, onMounted, onUnmounted } from &#39;vue&#39;</span></span>
<span class="line"><span>import Pagination from &#39;@/views/enclosure/pagination/pagination.vue&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// TODO</span></span>
<span class="line"><span>const content = reactive({</span></span>
<span class="line"><span>    total: 24,</span></span>
<span class="line"><span>    list: [],</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const page = reactive({</span></span>
<span class="line"><span>    current: 1,</span></span>
<span class="line"><span>    size: 10,</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const pagination = (params) =&gt; {</span></span>
<span class="line"><span>    console.log(&#39;params&#39;, params)</span></span>
<span class="line"><span>    // page.current = params.page</span></span>
<span class="line"><span>    // page.size = params.limit</span></span>
<span class="line"><span>    // getListData() // 调用接口</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;/script&gt;</span></span></code></pre></div><h2 id="pagination组件封装代码" tabindex="-1">Pagination组件封装代码 <a class="header-anchor" href="#pagination组件封装代码" aria-label="Permalink to &quot;Pagination组件封装代码&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>    &lt;div class=&quot;pagination&quot;&gt;</span></span>
<span class="line"><span>        &lt;div class=&quot;pagination-container&quot; :class=&quot;{ &#39;hidden&#39;: hidden }&quot;&gt;</span></span>
<span class="line"><span>            &lt;el-pagination :background=&quot;background&quot; :currentPage.sync=&quot;currentPage&quot; :pageSize.sync=&quot;pageSize&quot; :layout=&quot;layout&quot; :pageSizes=&quot;pageSizes&quot; :total=&quot;total&quot; v-bind=&quot;$attrs&quot; @size-change=&quot;handleSizeChange&quot; @current-change=&quot;handleCurrentChange&quot; /&gt;</span></span>
<span class="line"><span>        &lt;/div&gt;</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script&gt;</span></span>
<span class="line"><span>import { ElPagination } from &#39;element-plus&#39;</span></span>
<span class="line"><span>// import { scrollTo } from &#39;@/utils/scrollTo.js&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export default {</span></span>
<span class="line"><span>    components: {</span></span>
<span class="line"><span>        ElPagination</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    props: {</span></span>
<span class="line"><span>        pageCounter: {</span></span>
<span class="line"><span>            type: Number,</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        total: {</span></span>
<span class="line"><span>            require: true,</span></span>
<span class="line"><span>            type: Number,</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        page: {</span></span>
<span class="line"><span>            type: Number,</span></span>
<span class="line"><span>            default: 1,</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        limit: {</span></span>
<span class="line"><span>            type: Number,</span></span>
<span class="line"><span>            default: 20,</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        pageSizes: {</span></span>
<span class="line"><span>            type: Array,</span></span>
<span class="line"><span>            default: () =&gt; {</span></span>
<span class="line"><span>                return [10, 20, 30, 50]</span></span>
<span class="line"><span>            },</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        layout: {</span></span>
<span class="line"><span>            type: String,</span></span>
<span class="line"><span>            default: &#39;prev, pager, next, sizes, jumper&#39;,</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        background: {</span></span>
<span class="line"><span>            type: Boolean,</span></span>
<span class="line"><span>            default: true,</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        autoScroll: {</span></span>
<span class="line"><span>            type: Boolean,</span></span>
<span class="line"><span>            default: true,</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        hidden: {</span></span>
<span class="line"><span>            type: Boolean,</span></span>
<span class="line"><span>            default: false,</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    computed: {</span></span>
<span class="line"><span>        currentPage: {</span></span>
<span class="line"><span>            get() {</span></span>
<span class="line"><span>                return this.page</span></span>
<span class="line"><span>            },</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            set(val) {</span></span>
<span class="line"><span>                this.page = val</span></span>
<span class="line"><span>                this.$emit(&#39;update:page&#39;, val)</span></span>
<span class="line"><span>            },</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        pageSize: {</span></span>
<span class="line"><span>            get() {</span></span>
<span class="line"><span>                return this.limit</span></span>
<span class="line"><span>            },</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            set(val) {</span></span>
<span class="line"><span>                this.limit = val</span></span>
<span class="line"><span>                this.$emit(&#39;update:limit&#39;, val)</span></span>
<span class="line"><span>            },</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    methods: {</span></span>
<span class="line"><span>        handleSizeChange(val) {</span></span>
<span class="line"><span>            this.pageSize = val</span></span>
<span class="line"><span>            this.$emit(&#39;pagination&#39;, { page: this.currentPage, limit: val })</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            // if (this.autoScroll) {</span></span>
<span class="line"><span>            //     scrollTo(0, 800)</span></span>
<span class="line"><span>            // }</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        handleCurrentChange(val) {</span></span>
<span class="line"><span>            this.currentPage = val</span></span>
<span class="line"><span>            this.$emit(&#39;pagination&#39;, { page: val, limit: this.pageSize })</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            // if (this.autoScroll) {</span></span>
<span class="line"><span>            //     scrollTo(0, 800)</span></span>
<span class="line"><span>            // }</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;style scoped&gt;</span></span>
<span class="line"><span>.pagination-container {</span></span>
<span class="line"><span>    margin: 0;</span></span>
<span class="line"><span>    text-align: right;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>.pagination-container .hidden {</span></span>
<span class="line"><span>    display: none;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&lt;/style&gt;</span></span></code></pre></div>`,4),i=[e];function t(c,o,r,u,g,d){return a(),s("div",null,i)}const v=n(l,[["render",t]]);export{m as __pageData,v as default};
