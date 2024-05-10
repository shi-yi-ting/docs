import{_ as s,c as n,o as a,U as p}from"./chunks/framework.FpOEJISx.js";const g=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"public/static/_file/md/demo/mock/deleteData.md","filePath":"public/static/_file/md/demo/mock/deleteData.md"}'),e={name:"public/static/_file/md/demo/mock/deleteData.md"},l=p(`<h2 id="接口请求" tabindex="-1">接口请求 <a class="header-anchor" href="#接口请求" aria-label="Permalink to &quot;接口请求&quot;">​</a></h2><h3 id="组件" tabindex="-1">组件 <a class="header-anchor" href="#组件" aria-label="Permalink to &quot;组件&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>    &lt;div id=&quot;app&quot;&gt;</span></span>
<span class="line"><span>        &lt;ul&gt;</span></span>
<span class="line"><span>            &lt;li v-for=&quot;item in content.list&quot; :key=&quot;item.id&quot;&gt;</span></span>
<span class="line"><span>                &lt;span&gt;{{ item.content }}&lt;/span&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                 &lt;Popconfirm title=&quot;确定删除?&quot; okText=&quot;删除&quot; cancelText=&quot;取消&quot; @confirm=&quot;deleteItem(item)&quot;&gt;</span></span>
<span class="line"><span>                    &lt;span style=&quot;color: red; cursor: pointer;&quot;&gt;删除&lt;/span&gt;</span></span>
<span class="line"><span>                &lt;/Popconfirm&gt;</span></span>
<span class="line"><span>            &lt;/li&gt;</span></span>
<span class="line"><span>        &lt;/ul&gt;</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script lang=&quot;ts&quot; setup&gt;</span></span>
<span class="line"><span>import axios from &#39;axios&#39; // 直接使用axios请求</span></span>
<span class="line"><span>import { ref, reactive, watch, onMounted } from &#39;vue&#39;</span></span>
<span class="line"><span>import { Spin, Space, Table, Popconfirm, Button, Select, SelectOption, Input, Tree, InputSearch, message } from &#39;ant-design-vue&#39;</span></span>
<span class="line"><span>import type { ColumnType } from &#39;ant-design-vue/lib/table&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// TODO</span></span>
<span class="line"><span>const content = reactive({</span></span>
<span class="line"><span>    list: []</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const setNews = () =&gt; {</span></span>
<span class="line"><span>    axios.get(&quot;/list&quot;).then((res) =&gt; {</span></span>
<span class="line"><span>        content.list = res.data.data;</span></span>
<span class="line"><span>    })</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>onMounted(() =&gt; {</span></span>
<span class="line"><span>    setNews()</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const deleteItem = (item) =&gt; {</span></span>
<span class="line"><span>    let id = item.id;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    axios.post(&quot;/list&quot;, {</span></span>
<span class="line"><span>        params: {</span></span>
<span class="line"><span>            id //属性简写</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>    }).then((res) =&gt; {</span></span>
<span class="line"><span>        content.list = res.data.data;</span></span>
<span class="line"><span>        message.success(&#39;删除成功!&#39;)</span></span>
<span class="line"><span>    })</span></span>
<span class="line"><span>    .catch((error) =&gt; {</span></span>
<span class="line"><span>        console.log(error);</span></span>
<span class="line"><span>    });</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;/script&gt;</span></span></code></pre></div><h2 id="mock拦截处理" tabindex="-1">mock拦截处理 <a class="header-anchor" href="#mock拦截处理" aria-label="Permalink to &quot;mock拦截处理&quot;">​</a></h2><h3 id="mock-js" tabindex="-1">mock.js <a class="header-anchor" href="#mock-js" aria-label="Permalink to &quot;mock.js&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// 拦截该url，获取（查询），新增，删除数据</span></span>
<span class="line"><span>// const Mock = require(&#39;mockjs&#39;) // 导入mockjs</span></span>
<span class="line"><span>import Mock from &#39;mockjs&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 获取数据</span></span>
<span class="line"><span>import { get } from &#39;./get.js&#39;</span></span>
<span class="line"><span>Mock.mock(&#39;/mock/news&#39;, get.newList)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 新增数据</span></span>
<span class="line"><span>import &#39;./add.js&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 删除数据</span></span>
<span class="line"><span>import &#39;./delete.js&#39;</span></span></code></pre></div><h3 id="delete-js" tabindex="-1">delete.js <a class="header-anchor" href="#delete-js" aria-label="Permalink to &quot;delete.js&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>console.log(&#39;模拟删除数据&#39;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// const Mock = require(&#39;mockjs&#39;) // 导入mockjs</span></span>
<span class="line"><span>import Mock from &#39;mockjs&#39;;</span></span>
<span class="line"><span>const Random = Mock.Random // 获取 mock.Random 对象</span></span>
<span class="line"><span></span></span>
<span class="line"><span>let arr = []</span></span>
<span class="line"><span>for (let i = 0; i &lt; 20; i++) {</span></span>
<span class="line"><span>    let newArticleObject = {</span></span>
<span class="line"><span>        name: Random.cname(), // Random.cname() 随机生成一个常见的中文姓名</span></span>
<span class="line"><span>        content: Random.csentence(5, 30), // Random.csentence( min, max )</span></span>
<span class="line"><span>        id: i,</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    arr.push(newArticleObject)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function list(options) {</span></span>
<span class="line"><span>    let rtype = options.type.toLowerCase() // 获取请求类型</span></span>
<span class="line"><span>    switch (rtype) {</span></span>
<span class="line"><span>        case &#39;get&#39;:</span></span>
<span class="line"><span>            break</span></span>
<span class="line"><span>        case &#39;post&#39;:</span></span>
<span class="line"><span>            // eslint-disable-next-line no-case-declarations, radix</span></span>
<span class="line"><span>            let id = parseInt(JSON.parse(options.body).params.id) // 获取删除的id</span></span>
<span class="line"><span>            arr = arr.filter((val) =&gt; {</span></span>
<span class="line"><span>                return val.id !== id // 把这个id对应的对象从数组里删除</span></span>
<span class="line"><span>            })</span></span>
<span class="line"><span>            break</span></span>
<span class="line"><span>        default:</span></span>
<span class="line"><span>            break</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    return {</span></span>
<span class="line"><span>        data: arr,</span></span>
<span class="line"><span>    } // 返回这个数组,也就是返回处理后的假数据</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>Mock.mock(&#39;/list&#39;, /get|post/i, list) // get用于请求数据，post用于删除数据</span></span></code></pre></div>`,8),t=[l];function i(c,o,r,d,m,u){return a(),n("div",null,t)}const k=s(e,[["render",i]]);export{g as __pageData,k as default};
