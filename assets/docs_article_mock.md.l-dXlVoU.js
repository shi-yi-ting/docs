import{_ as s,c as a,o as n,U as p,a4 as e,a5 as l}from"./chunks/framework.FpOEJISx.js";const b=JSON.parse('{"title":"vue中mock.js的使用","description":"","frontmatter":{},"headers":[],"relativePath":"docs/article/mock.md","filePath":"docs/article/mock.md"}'),t={name:"docs/article/mock.md"},i=p(`<h1 id="vue中mock-js的使用" tabindex="-1">vue中mock.js的使用 <a class="header-anchor" href="#vue中mock-js的使用" aria-label="Permalink to &quot;vue中mock.js的使用&quot;">​</a></h1><p>参考链接：<a href="https://juejin.cn/post/6901615700364918791" target="_blank" rel="noreferrer">https://juejin.cn/post/6901615700364918791</a></p><p>mock官网：<a href="http://mockjs.com/" target="_blank" rel="noreferrer">http://mockjs.com/</a></p><h2 id="什么是mock-js" tabindex="-1">什么是mock.js <a class="header-anchor" href="#什么是mock-js" aria-label="Permalink to &quot;什么是mock.js&quot;">​</a></h2><p>Mock.js是一个模拟数据生成器，可帮助前端开发和原型与后端进度分开，并减少某些单调性，尤其是在编写自动化测试时。 提供了以下模拟功能：</p><ol><li>根据数据模板生成模拟数据</li><li>为ajax请求提供请求/响应模拟</li></ol><h2 id="mock基本语法的介绍" tabindex="-1">Mock基本语法的介绍 <a class="header-anchor" href="#mock基本语法的介绍" aria-label="Permalink to &quot;Mock基本语法的介绍&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>Mock.mock( rurl, rtype, template|function( options ) )</span></span>
<span class="line"><span></span></span>
<span class="line"><span>rurl(可选)</span></span>
<span class="line"><span>表示需要拦截的 URL，可以是 URL 字符串或 URL 正则。例如 &#39;/domian/list.json&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>rtype(可选)</span></span>
<span class="line"><span>表示需要拦截的 Ajax 请求类型。例如 GET、POST、PUT、DELETE 等。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>template(可选)</span></span>
<span class="line"><span>表示数据模板，可以是对象或字符串。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>数据模板中的每个属性由 3 部分构成：属性名、生成规则、属性值：</span></span>
<span class="line"><span>// 属性名   name</span></span>
<span class="line"><span>// 生成规则 rule</span></span>
<span class="line"><span>// 属性值   value</span></span>
<span class="line"><span>&#39;name|rule&#39;: value</span></span>
<span class="line"><span>例如：&#39;name|1-10&#39;:1 会产生一个1-10之间的整数，详细规则参见官方文档</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function(options) (可选)</span></span>
<span class="line"><span>表示用于生成响应数据的函数</span></span>
<span class="line"><span></span></span>
<span class="line"><span>options</span></span>
<span class="line"><span>指向本次请求的 Ajax 选项集，含有 url、type 和 body 三个属性</span></span></code></pre></div><h2 id="vue中使用mock" tabindex="-1">vue中使用mock <a class="header-anchor" href="#vue中使用mock" aria-label="Permalink to &quot;vue中使用mock&quot;">​</a></h2><p>注意 axios 的 baseUrl要为空，不然无法正常拦截</p><h3 id="_1-安装axios和mock-js" tabindex="-1">1.安装axios和mock.js <a class="header-anchor" href="#_1-安装axios和mock-js" aria-label="Permalink to &quot;1.安装axios和mock.js&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>npm install -S axios</span></span>
<span class="line"><span>npm install -D mockjs</span></span></code></pre></div><h3 id="_2-新建mock-js文件示例如下" tabindex="-1">2.新建mock.js文件示例如下 <a class="header-anchor" href="#_2-新建mock-js文件示例如下" aria-label="Permalink to &quot;2.新建mock.js文件示例如下&quot;">​</a></h3><p>模拟一个新闻列表包括新闻标题、新闻内容和创建时间</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// 导入mockjs</span></span>
<span class="line"><span>// const Mock = require(&#39;mockjs&#39;)</span></span>
<span class="line"><span>import Mock from &#39;mockjs&#39;;</span></span>
<span class="line"><span>// 获取 mock.Random 对象</span></span>
<span class="line"><span>const Random = Mock.Random</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// mock新闻数据，包括新闻标题title、内容content、创建时间createdTime</span></span>
<span class="line"><span>function produceNewsData() {</span></span>
<span class="line"><span>let newsList = []</span></span>
<span class="line"><span>for (let i = 0; i &lt; 20; i++) {</span></span>
<span class="line"><span>    let newNewsObject = {</span></span>
<span class="line"><span>    //  Random.ctitle( min, max) 随机产生一个中文标题，长度默认在3-7之间</span></span>
<span class="line"><span>    title: Random.ctitle(),</span></span>
<span class="line"><span>    // Random.cparagraph(min, max) 随机生成一个中文段落，段落里的句子个数默认3-7个</span></span>
<span class="line"><span>    content: Random.cparagraph(),</span></span>
<span class="line"><span>    // Random.date()指示生成的日期字符串的格式,默认为yyyy-MM-dd</span></span>
<span class="line"><span>    createdTime: Random.date() ；</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    newsList.push(newNewsObject)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>    return newList</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 拦截该url （/mock/news），就可以返回newsList</span></span>
<span class="line"><span>Mock.mock(&#39;/mock/news&#39;, produceNewsData)</span></span></code></pre></div><h3 id="_3-在main-js引入mock-js" tabindex="-1">3.在main.js引入mock.js <a class="header-anchor" href="#_3-在main-js引入mock-js" aria-label="Permalink to &quot;3.在main.js引入mock.js&quot;">​</a></h3><p><img src="`+e+`" alt="Alt Text"></p><h2 id="发送get请求获取新闻列表数据" tabindex="-1">发送get请求获取新闻列表数据 <a class="header-anchor" href="#发送get请求获取新闻列表数据" aria-label="Permalink to &quot;发送get请求获取新闻列表数据&quot;">​</a></h2><h3 id="vue组件" tabindex="-1">vue组件 <a class="header-anchor" href="#vue组件" aria-label="Permalink to &quot;vue组件&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>    &lt;div id=&quot;#app&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script&gt;</span></span>
<span class="line"><span>import axios from &#39;axios&#39;</span></span>
<span class="line"><span>export default {</span></span>
<span class="line"><span>    // 组件创建完成获取新闻列表</span></span>
<span class="line"><span>    created() {</span></span>
<span class="line"><span>        // 这里的url是在mock.js中拦截的地址</span></span>
<span class="line"><span>        axios.get(&#39;/mock/news&#39;).then(res =&gt; {</span></span>
<span class="line"><span>            console.log(res.data) // 打印一下响应数据</span></span>
<span class="line"><span>        })</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&lt;script&gt;</span></span></code></pre></div><h3 id="发送请求" tabindex="-1">发送请求 <a class="header-anchor" href="#发送请求" aria-label="Permalink to &quot;发送请求&quot;">​</a></h3><p>当发送请求之后/mock/news 将会被 mock.js的中的 Mock.mock(&#39;/mock/news&#39;, produceNewsData) 拦截 Mock.mock(&#39;/mock/news&#39;, produceNewsData)中的 /mock/news 就是拦截的地址，当发送请求地址为 /mock/news 就会被拦截，produceNewsData为拦截后的处理函数</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>import http from &#39;@/api/mockAxios.js&#39;</span></span>
<span class="line"><span>import qs from &#39;qs&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export const getNewsApi = () =&gt; http.get(&#39;/mock/news&#39;)</span></span></code></pre></div><h3 id="mock-js中的拦截处理" tabindex="-1">mock.js中的拦截处理 <a class="header-anchor" href="#mock-js中的拦截处理" aria-label="Permalink to &quot;mock.js中的拦截处理&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// 导入mockjs</span></span>
<span class="line"><span>const Mock = require(&#39;mockjs&#39;)</span></span>
<span class="line"><span>// 获取 mock.Random 对象</span></span>
<span class="line"><span>const Random = Mock.Random</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// mock新闻数据，包括新闻标题title、内容content、创建时间createdTime</span></span>
<span class="line"><span>function produceNewsData() {</span></span>
<span class="line"><span>  let newsList = []</span></span>
<span class="line"><span>  for (let i = 0; i &lt; 20; i++) {</span></span>
<span class="line"><span>    let newNewsObject = {</span></span>
<span class="line"><span>      //  Random.ctitle( min, max) 随机产生一个中文标题，长度默认在3-7之间</span></span>
<span class="line"><span>      title: Random.ctitle(),</span></span>
<span class="line"><span>      // Random.cparagraph(min, max) 随机生成一个中文段落，段落里的句子个数默认3-7个</span></span>
<span class="line"><span>      content: Random.cparagraph(),</span></span>
<span class="line"><span>      // Random.date()指示生成的日期字符串的格式,默认为yyyy-MM-dd</span></span>
<span class="line"><span>      createdTime: Random.date() ；</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    newsList.push(newNewsObject)</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  return newList</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 拦截该url，就可以返回newsList</span></span>
<span class="line"><span>Mock.mock(&#39;/mock/news&#39;, produceNewsData)</span></span></code></pre></div><h2 id="增加数据" tabindex="-1">增加数据 <a class="header-anchor" href="#增加数据" aria-label="Permalink to &quot;增加数据&quot;">​</a></h2><h3 id="vue组件-1" tabindex="-1">vue组件 <a class="header-anchor" href="#vue组件-1" aria-label="Permalink to &quot;vue组件&quot;">​</a></h3><p>App.vue内简单写个表单，输入标题，点击提交、获取，可以看到返回了我们提交的数据，并且是js对象的形式，拿到数据后就可以做进一步的操作了。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>  &lt;div id=&quot;app&quot;&gt;</span></span>
<span class="line"><span>    &lt;div&gt;</span></span>
<span class="line"><span>      &lt;input type=&quot;text&quot; v-model=&quot;title&quot;&gt;</span></span>
<span class="line"><span>      &lt;button type=&quot;button&quot; @click=&quot;submit&quot;&gt;提交&lt;/button&gt;</span></span>
<span class="line"><span>      &lt;button type=&quot;button&quot; @click=&quot;getProjects&quot;&gt;获取&lt;/button&gt;</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span>  &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script&gt;</span></span>
<span class="line"><span>export default {</span></span>
<span class="line"><span>  data () {</span></span>
<span class="line"><span>    return {</span></span>
<span class="line"><span>      title: &#39;&#39;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  methods: {</span></span>
<span class="line"><span>    submit () {</span></span>
<span class="line"><span>      this.$http.post(&#39;/mock/addProject&#39;, { // 添加数据的接口,数据为一个对象，有个title属性</span></span>
<span class="line"><span>        title: this.title</span></span>
<span class="line"><span>      })</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    getProjects () {</span></span>
<span class="line"><span>      this.$http.get(&#39;/mock/projects&#39;).then(res =&gt; { // 获取数据</span></span>
<span class="line"><span>        console.log(res.data)</span></span>
<span class="line"><span>      })</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&lt;/script&gt;</span></span></code></pre></div><h3 id="发送请求-1" tabindex="-1">发送请求 <a class="header-anchor" href="#发送请求-1" aria-label="Permalink to &quot;发送请求&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>import http from &#39;@/api/mockAxios.js&#39;</span></span>
<span class="line"><span>import qs from &#39;qs&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// export const addProjectApi = (params) =&gt; http.post(&#39;/mock/addProject&#39;, qs.stringify(params))</span></span>
<span class="line"><span>export const addProjectApi = (params) =&gt; http.post(&#39;/mock/addProject&#39;, params)</span></span>
<span class="line"><span>export const getProjectsApi = () =&gt; http.get(&#39;/mock/projects&#39;)</span></span></code></pre></div><h3 id="mock-js中的拦截处理-1" tabindex="-1">mock.js中的拦截处理 <a class="header-anchor" href="#mock-js中的拦截处理-1" aria-label="Permalink to &quot;mock.js中的拦截处理&quot;">​</a></h3><p>如果我们想测试增加数据的功能，mock.js也可以实现，对于Mock.mock(url,function(ops))，ops参数就可以拿到传送的数据。</p><p>我们在mock.js中模拟一个添加数据的接口，拿到数据后存到数组中。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// 添加信息</span></span>
<span class="line"><span>let projectList = []</span></span>
<span class="line"><span>Mock.mock(&#39;/mock/addProject&#39;, ops =&gt; { // 拦截ajax请求，调用函数</span></span>
<span class="line"><span>  console.log(ops)    // 先看一下这个ops是什么</span></span>
<span class="line"><span>  projectList.push(ops)</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 获取信息</span></span>
<span class="line"><span>Mock.mock(&#39;/mock/projects&#39;, projectList)</span></span></code></pre></div><p><img src="`+l+`" alt="Alt Text"></p><p>在App.js中的输入框中输入标题后，点击提交，数据发送到/mock/addProject,mock.js拦截到请求后，调用function(ops)方法，打印看到ops是个对象，有3个属性，url,type和body，而我们输入的数据就在body属性值里，同时因为axios默认发送的是json格式的数据，所以body里面的数据是json字符串，更改function(ops)函数，将数据以js对象的形式存入数组中。当然实际开发中可以看后端的数据返回格式，选择在前端进行json转js的操作，这里只是演示一下。</p><h2 id="删除数据" tabindex="-1">删除数据 <a class="header-anchor" href="#删除数据" aria-label="Permalink to &quot;删除数据&quot;">​</a></h2><h3 id="vue组件-2" tabindex="-1">vue组件 <a class="header-anchor" href="#vue组件-2" aria-label="Permalink to &quot;vue组件&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>  &lt;div id=&quot;app&quot;&gt;</span></span>
<span class="line"><span>    &lt;ul&gt;</span></span>
<span class="line"><span>      &lt;li v-for=&quot;item in data&quot; :key=&quot;item.id&quot;&gt;</span></span>
<span class="line"><span>        &lt;span&gt;{{ item.content }}&lt;/span&gt;</span></span>
<span class="line"><span>        &lt;button @click=&quot;deleteList(item)&quot;&gt;删除&lt;/button&gt;</span></span>
<span class="line"><span>      &lt;/li&gt;</span></span>
<span class="line"><span>    &lt;/ul&gt;</span></span>
<span class="line"><span>  &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script&gt;</span></span>
<span class="line"><span>export default {</span></span>
<span class="line"><span>  data() {</span></span>
<span class="line"><span>    return {</span></span>
<span class="line"><span>      data: [],</span></span>
<span class="line"><span>    };</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  created() {</span></span>
<span class="line"><span>    this.setNewsApi();</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  methods: {</span></span>
<span class="line"><span>    setNewsApi: function() {</span></span>
<span class="line"><span>      this.$http.get(&quot;/list&quot;).then((res) =&gt; {</span></span>
<span class="line"><span>        this.data = res.data.data;</span></span>
<span class="line"><span>      });</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    deleteList(data) {</span></span>
<span class="line"><span>      //删除数据</span></span>
<span class="line"><span>      let id = data.id;</span></span>
<span class="line"><span>      this.$http.post(&quot;/list&quot;, {</span></span>
<span class="line"><span>        params: {</span></span>
<span class="line"><span>          id //属性简写</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>      }).then((res) =&gt; {</span></span>
<span class="line"><span>         this.data = res.data.data;</span></span>
<span class="line"><span>         alert(data.name + &quot;删除成功&quot;);</span></span>
<span class="line"><span>       })</span></span>
<span class="line"><span>       .catch((error) =&gt; {</span></span>
<span class="line"><span>         console.log(error);</span></span>
<span class="line"><span>       });</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span>&lt;/script&gt;</span></span></code></pre></div><h3 id="发送请求-2" tabindex="-1">发送请求 <a class="header-anchor" href="#发送请求-2" aria-label="Permalink to &quot;发送请求&quot;">​</a></h3><h3 id="mock-js中的拦截处理-2" tabindex="-1">mock.js中的拦截处理 <a class="header-anchor" href="#mock-js中的拦截处理-2" aria-label="Permalink to &quot;mock.js中的拦截处理&quot;">​</a></h3><p>删除数据一般是把数据的id以get形式传递给后端，url形式为: /xxx/xxx?id=value, 实际开发中后端可以很好的处理id值不同的url，我们只需要关心怎么获取到id，使用mock.js时，只需要在发送ajax请求时，携带一个参数id,在mock.js的响应函数内根据id删除数组对应的某一项即可</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>let arr = [];</span></span>
<span class="line"><span>for (let i = 0; i &lt; 20; i++) {</span></span>
<span class="line"><span>  let newArticleObject = {</span></span>
<span class="line"><span>    name: Random.cname(), // Random.cname() 随机生成一个常见的中文姓名</span></span>
<span class="line"><span>    content: Random.csentence(5, 30), // Random.csentence( min, max )</span></span>
<span class="line"><span>    id: i,</span></span>
<span class="line"><span>  };</span></span>
<span class="line"><span>  arr.push(newArticleObject);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function list(options) {</span></span>
<span class="line"><span>  let rtype = options.type.toLowerCase(); //获取请求类型</span></span>
<span class="line"><span>  switch (rtype) {</span></span>
<span class="line"><span>    case &quot;get&quot;:</span></span>
<span class="line"><span>      break;</span></span>
<span class="line"><span>    case &quot;post&quot;:</span></span>
<span class="line"><span>      let id = parseInt(JSON.parse(options.body).params.id); //获取删除的id</span></span>
<span class="line"><span>      arr = arr.filter(function(val) {</span></span>
<span class="line"><span>        return val.id != id; //把这个id对应的对象从数组里删除</span></span>
<span class="line"><span>      });</span></span>
<span class="line"><span>      break;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  return {</span></span>
<span class="line"><span>    data: arr,</span></span>
<span class="line"><span>  }; //返回这个数组,也就是返回处理后的假数据</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>Mock.mock(&quot;/list&quot;, /get|post/i, list); //get用于请求数据，post用于删除数据</span></span></code></pre></div>`,44),c=[i];function o(r,d,m,h,u,k){return n(),a("div",null,c)}const j=s(t,[["render",o]]);export{b as __pageData,j as default};
