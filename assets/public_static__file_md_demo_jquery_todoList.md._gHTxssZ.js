import{_ as s,c as n,o as a,U as p}from"./chunks/framework.FpOEJISx.js";const x=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"public/static/_file/md/demo/jquery/todoList.md","filePath":"public/static/_file/md/demo/jquery/todoList.md"}'),l={name:"public/static/_file/md/demo/jquery/todoList.md"},e=p(`<h2 id="todolist组件代码" tabindex="-1">todoList组件代码 <a class="header-anchor" href="#todolist组件代码" aria-label="Permalink to &quot;todoList组件代码&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>    &lt;div class=&quot;jq-todoList&quot; style=&quot;margin-top: 15px;&quot;&gt;</span></span>
<span class="line"><span>        &lt;header&gt;</span></span>
<span class="line"><span>            &lt;section&gt;</span></span>
<span class="line"><span>                &lt;label for=&quot;title&quot;&gt;ToDoList&lt;/label&gt;</span></span>
<span class="line"><span>                &lt;input id=&quot;title&quot; type=&quot;text&quot; name=&quot;title&quot; placeholder=&quot;添加ToDo&quot; required=&quot;required&quot; autocomplete=&quot;off&quot; /&gt;</span></span>
<span class="line"><span>            &lt;/section&gt;</span></span>
<span class="line"><span>        &lt;/header&gt;</span></span>
<span class="line"><span>        &lt;section&gt;</span></span>
<span class="line"><span>            &lt;h2&gt;正在进行 &lt;span id=&quot;todocount&quot;&gt;&lt;/span&gt;&lt;/h2&gt;</span></span>
<span class="line"><span>            &lt;ol id=&quot;todolist&quot; class=&quot;demo-box&quot;&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            &lt;/ol&gt;</span></span>
<span class="line"><span>            &lt;h2&gt;已经完成 &lt;span id=&quot;donecount&quot;&gt;&lt;/span&gt;&lt;/h2&gt;</span></span>
<span class="line"><span>            &lt;ul id=&quot;donelist&quot;&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            &lt;/ul&gt;</span></span>
<span class="line"><span>        &lt;/section&gt;</span></span>
<span class="line"><span>        &lt;footer&gt;</span></span>
<span class="line"><span>            Copyright &amp;copy; 2014 todolist.cn</span></span>
<span class="line"><span>        &lt;/footer&gt;</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script&gt;</span></span>
<span class="line"><span>import { defineComponent, onMounted } from &#39;vue&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import { todoList } from &#39;./js/todoList.js&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export default defineComponent({</span></span>
<span class="line"><span>    setup() {</span></span>
<span class="line"><span>        onMounted(() =&gt; {</span></span>
<span class="line"><span>            todoList()</span></span>
<span class="line"><span>        })</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        return {}</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;style scoped&gt;</span></span>
<span class="line"><span>body {</span></span>
<span class="line"><span>    margin: 0;</span></span>
<span class="line"><span>    padding: 0;</span></span>
<span class="line"><span>    font-size: 16px;</span></span>
<span class="line"><span>    background: #cdcdcd;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>.jq-todoList &gt;&gt;&gt; header {</span></span>
<span class="line"><span>    height: 50px;</span></span>
<span class="line"><span>    background: #333;</span></span>
<span class="line"><span>    background: rgba(47, 47, 47, 0.98);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>.jq-todoList &gt;&gt;&gt; section {</span></span>
<span class="line"><span>    margin: 0 auto;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>.jq-todoList &gt;&gt;&gt; label {</span></span>
<span class="line"><span>    float: left;</span></span>
<span class="line"><span>    width: 100px;</span></span>
<span class="line"><span>    line-height: 50px;</span></span>
<span class="line"><span>    color: #ddd;</span></span>
<span class="line"><span>    font-size: 24px;</span></span>
<span class="line"><span>    cursor: pointer;</span></span>
<span class="line"><span>    font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>.jq-todoList &gt;&gt;&gt; header input {</span></span>
<span class="line"><span>    float: right;</span></span>
<span class="line"><span>    width: 60%;</span></span>
<span class="line"><span>    height: 24px;</span></span>
<span class="line"><span>    margin-top: 12px;</span></span>
<span class="line"><span>    text-indent: 10px;</span></span>
<span class="line"><span>    border-radius: 5px;</span></span>
<span class="line"><span>    box-shadow: 0 1px 0 rgba(255, 255, 255, 0.24),</span></span>
<span class="line"><span>        0 1px 6px rgba(0, 0, 0, 0.45) inset;</span></span>
<span class="line"><span>    border: none;</span></span>
<span class="line"><span>    background: #fff;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>.jq-todoList &gt;&gt;&gt; input:focus {</span></span>
<span class="line"><span>    outline-width: 0;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>.jq-todoList &gt;&gt;&gt; h2 {</span></span>
<span class="line"><span>    position: relative;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>.jq-todoList &gt;&gt;&gt; span {</span></span>
<span class="line"><span>    position: absolute;</span></span>
<span class="line"><span>    top: 30px;</span></span>
<span class="line"><span>    right: 10px;</span></span>
<span class="line"><span>    display: inline-block;</span></span>
<span class="line"><span>    padding: 0 5px;</span></span>
<span class="line"><span>    height: 20px;</span></span>
<span class="line"><span>    border-radius: 20px;</span></span>
<span class="line"><span>    background: #e6e6fa;</span></span>
<span class="line"><span>    line-height: 22px;</span></span>
<span class="line"><span>    text-align: center;</span></span>
<span class="line"><span>    color: #666;</span></span>
<span class="line"><span>    font-size: 14px;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>.jq-todoList &gt;&gt;&gt; ol,</span></span>
<span class="line"><span>.jq-todoList &gt;&gt;&gt; ul {</span></span>
<span class="line"><span>    padding: 0;</span></span>
<span class="line"><span>    list-style: none;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>.jq-todoList &gt;&gt;&gt; li input {</span></span>
<span class="line"><span>    position: absolute;</span></span>
<span class="line"><span>    top: 4px;</span></span>
<span class="line"><span>    left: 10px;</span></span>
<span class="line"><span>    width: 22px;</span></span>
<span class="line"><span>    height: 22px;</span></span>
<span class="line"><span>    cursor: pointer;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>.jq-todoList &gt;&gt;&gt; p {</span></span>
<span class="line"><span>    margin: 0;</span></span>
<span class="line"><span>    padding-top: 5px;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>.jq-todoList &gt;&gt;&gt; li p input {</span></span>
<span class="line"><span>    top: 3px;</span></span>
<span class="line"><span>    left: 40px;</span></span>
<span class="line"><span>    width: 70%;</span></span>
<span class="line"><span>    height: 20px;</span></span>
<span class="line"><span>    line-height: 14px;</span></span>
<span class="line"><span>    text-indent: 5px;</span></span>
<span class="line"><span>    font-size: 14px;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>.jq-todoList &gt;&gt;&gt; li {</span></span>
<span class="line"><span>    height: 32px;</span></span>
<span class="line"><span>    line-height: 32px;</span></span>
<span class="line"><span>    background: #fff;</span></span>
<span class="line"><span>    position: relative;</span></span>
<span class="line"><span>    margin-bottom: 10px;</span></span>
<span class="line"><span>    padding: 0 45px;</span></span>
<span class="line"><span>    border-radius: 3px;</span></span>
<span class="line"><span>    border-left: 5px solid #629a9c;</span></span>
<span class="line"><span>    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.07);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>.jq-todoList &gt;&gt;&gt; ol li {</span></span>
<span class="line"><span>    cursor: move;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>.jq-todoList &gt;&gt;&gt; ul li {</span></span>
<span class="line"><span>    border-left: 5px solid #999;</span></span>
<span class="line"><span>    opacity: 0.5;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>.jq-todoList &gt;&gt;&gt; li a {</span></span>
<span class="line"><span>    position: absolute;</span></span>
<span class="line"><span>    top: 2px;</span></span>
<span class="line"><span>    right: 5px;</span></span>
<span class="line"><span>    display: inline-block;</span></span>
<span class="line"><span>    width: 24px;</span></span>
<span class="line"><span>    height: 24px;</span></span>
<span class="line"><span>    border-radius: 14px;</span></span>
<span class="line"><span>    border: 6px double #fff;</span></span>
<span class="line"><span>    background: #ccc;</span></span>
<span class="line"><span>    line-height: 14px;</span></span>
<span class="line"><span>    text-align: center;</span></span>
<span class="line"><span>    color: #fff;</span></span>
<span class="line"><span>    font-weight: bold;</span></span>
<span class="line"><span>    font-size: 14px;</span></span>
<span class="line"><span>    cursor: pointer;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>.jq-todoList &gt;&gt;&gt; footer {</span></span>
<span class="line"><span>    color: #666;</span></span>
<span class="line"><span>    font-size: 14px;</span></span>
<span class="line"><span>    text-align: center;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>.jq-todoList &gt;&gt;&gt; footer a {</span></span>
<span class="line"><span>    color: #666;</span></span>
<span class="line"><span>    text-decoration: none;</span></span>
<span class="line"><span>    color: #999;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@media screen and (max-device-width: 620px) {</span></span>
<span class="line"><span>    section {</span></span>
<span class="line"><span>        width: 96%;</span></span>
<span class="line"><span>        padding: 0 2%;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@media screen and (min-width: 620px) {</span></span>
<span class="line"><span>    section {</span></span>
<span class="line"><span>        width: 600px;</span></span>
<span class="line"><span>        padding: 0 10px;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&lt;/style&gt;</span></span></code></pre></div><h2 id="todolist-js" tabindex="-1">todoList.js <a class="header-anchor" href="#todolist-js" aria-label="Permalink to &quot;todoList.js&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span></span></span>
<span class="line"><span>import $ from &#39;jquery&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export const todoList = () =&gt; {</span></span>
<span class="line"><span>// alert(11);</span></span>
<span class="line"><span>    // 1. 按下回车 把完整数据 存储到本地存储里面</span></span>
<span class="line"><span>    // 存储的数据格式  var todolist = [{title: &quot;xxx&quot;, done: false}]</span></span>
<span class="line"><span>    load()</span></span>
<span class="line"><span>    $(&#39;.jq-todoList #title&#39;).on(&#39;keydown&#39;, function(event) {</span></span>
<span class="line"><span>        if (event.keyCode === 13) {</span></span>
<span class="line"><span>            if ($(this).val() === &#39;&#39;) {</span></span>
<span class="line"><span>                // eslint-disable-next-line no-alert</span></span>
<span class="line"><span>                alert(&#39;请输入您要的操作&#39;)</span></span>
<span class="line"><span>            } else {</span></span>
<span class="line"><span>                // 先读取本地存储原来的数据</span></span>
<span class="line"><span>                let local = getDate()</span></span>
<span class="line"><span>                // console.log(local);</span></span>
<span class="line"><span>                // 把local数组进行更新数据 把最新的数据追加给local数组</span></span>
<span class="line"><span>                local.push({ title: $(this).val(), done: false })</span></span>
<span class="line"><span>                // 把这个数组local 存储给本地存储</span></span>
<span class="line"><span>                saveDate(local)</span></span>
<span class="line"><span>                // 2. toDoList 本地存储数据渲染加载到页面</span></span>
<span class="line"><span>                load()</span></span>
<span class="line"><span>                $(this).val(&#39;&#39;)</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    })</span></span>
<span class="line"><span>    // 3. toDoList 删除操作</span></span>
<span class="line"><span>    $(&#39;.jq-todoList ol, .jq-todoList ul&#39;).on(&#39;click&#39;, &#39;a&#39;, function() {</span></span>
<span class="line"><span>        // alert(11);</span></span>
<span class="line"><span>        // 先获取本地存储</span></span>
<span class="line"><span>        let data = getDate()</span></span>
<span class="line"><span>        console.log(data)</span></span>
<span class="line"><span>        // 修改数据</span></span>
<span class="line"><span>        let index = $(this).attr(&#39;id&#39;)</span></span>
<span class="line"><span>        console.log(index)</span></span>
<span class="line"><span>        data.splice(index, 1)</span></span>
<span class="line"><span>        // 保存到本地存储</span></span>
<span class="line"><span>        saveDate(data)</span></span>
<span class="line"><span>        // 重新渲染页面</span></span>
<span class="line"><span>        load()</span></span>
<span class="line"><span>    })</span></span>
<span class="line"><span>    // 4. toDoList 正在进行和已完成选项操作</span></span>
<span class="line"><span>    $(&#39;.jq-todoList ol, .jq-todoList ul&#39;).on(&#39;click&#39;, &#39;input&#39;, function() {</span></span>
<span class="line"><span>        // alert(11);</span></span>
<span class="line"><span>        // 先获取本地存储的数据</span></span>
<span class="line"><span>        let data = getDate()</span></span>
<span class="line"><span>        // 修改数据</span></span>
<span class="line"><span>        let index = $(this).siblings(&#39;a&#39;).attr(&#39;id&#39;)</span></span>
<span class="line"><span>        console.log(index)</span></span>
<span class="line"><span>        // data[?].done = ?</span></span>
<span class="line"><span>        data[index].done = $(this).prop(&#39;checked&#39;)</span></span>
<span class="line"><span>        console.log(data)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 保存到本地存储</span></span>
<span class="line"><span>        saveDate(data)</span></span>
<span class="line"><span>        // 重新渲染页面</span></span>
<span class="line"><span>        load()</span></span>
<span class="line"><span>    })</span></span>
<span class="line"><span>    // 读取本地存储的数据</span></span>
<span class="line"><span>    function getDate() {</span></span>
<span class="line"><span>        let data = localStorage.getItem(&#39;todolist&#39;)</span></span>
<span class="line"><span>        if (data !== null) {</span></span>
<span class="line"><span>            // 本地存储里面的数据是字符串格式的 但是我们需要的是对象格式的</span></span>
<span class="line"><span>            return JSON.parse(data)</span></span>
<span class="line"><span>        } else {</span></span>
<span class="line"><span>            return []</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    // 保存本地存储数据</span></span>
<span class="line"><span>    function saveDate(data) {</span></span>
<span class="line"><span>        localStorage.setItem(&#39;todolist&#39;, JSON.stringify(data))</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    // 渲染加载数据</span></span>
<span class="line"><span>    function load() {</span></span>
<span class="line"><span>        // 读取本地存储的数据</span></span>
<span class="line"><span>        let data = getDate()</span></span>
<span class="line"><span>        console.log(data)</span></span>
<span class="line"><span>        // 遍历之前先要清空ol里面的元素内容</span></span>
<span class="line"><span>        $(&#39;.jq-todoList ol, .jq-todoList ul&#39;).empty()</span></span>
<span class="line"><span>        let todoCount = 0 // 正在进行的个数</span></span>
<span class="line"><span>        let doneCount = 0 // 已经完成的个数</span></span>
<span class="line"><span>        // 遍历这个数据</span></span>
<span class="line"><span>        $.each(data, (i, n) =&gt; {</span></span>
<span class="line"><span>            // console.log(n);</span></span>
<span class="line"><span>            if (n.done) {</span></span>
<span class="line"><span>                $(&#39;.jq-todoList ul&#39;).prepend(&#39;&lt;li&gt;&lt;input type=\\&#39;checkbox\\&#39; checked=\\&#39;checked\\&#39; &gt; &lt;p&gt;&#39; + n.title + &#39;&lt;/p&gt; &lt;a href=\\&#39;javascript:;\\&#39; id=&#39; + i + &#39; &gt;&lt;/a&gt;&lt;/li&gt;&#39;)</span></span>
<span class="line"><span>                doneCount++</span></span>
<span class="line"><span>            } else {</span></span>
<span class="line"><span>                $(&#39;.jq-todoList ol&#39;).prepend(&#39;&lt;li&gt;&lt;input type=\\&#39;checkbox\\&#39; &gt; &lt;p&gt;&#39; + n.title + &#39;&lt;/p&gt; &lt;a href=\\&#39;javascript:;\\&#39; id=&#39; + i + &#39; &gt;&lt;/a&gt;&lt;/li&gt;&#39;)</span></span>
<span class="line"><span>                todoCount++</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        })</span></span>
<span class="line"><span>        $(&#39;#todocount&#39;).text(todoCount)</span></span>
<span class="line"><span>        $(&#39;#donecount&#39;).text(doneCount)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div>`,4),t=[e];function i(c,o,d,g,r,u){return a(),n("div",null,t)}const f=s(l,[["render",i]]);export{x as __pageData,f as default};
