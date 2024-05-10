import{_ as s,c as n,o as a,U as p}from"./chunks/framework.FpOEJISx.js";const h=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"public/static/_file/md/demo/export/iExport.md","filePath":"public/static/_file/md/demo/export/iExport.md"}'),l={name:"public/static/_file/md/demo/export/iExport.md"},e=p(`<h2 id="使用" tabindex="-1">使用 <a class="header-anchor" href="#使用" aria-label="Permalink to &quot;使用&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>    &lt;button class=&quot;Button White&quot; @click=&quot;startExport&quot;&gt;&lt;i class=&quot;export2_blue&quot; /&gt;导出&lt;/button&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script&gt;</span></span>
<span class="line"><span>import { defineComponent } from &#39;vue&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import doExport from &#39;./_js/exportExcel.js&#39;</span></span>
<span class="line"><span>export default defineComponent({</span></span>
<span class="line"><span>    props: {</span></span>
<span class="line"><span>        pageType: {</span></span>
<span class="line"><span>            required: true,</span></span>
<span class="line"><span>            type: String,</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>        fuzzySearch: {</span></span>
<span class="line"><span>            type: String,</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>        total: {</span></span>
<span class="line"><span>            required: true,</span></span>
<span class="line"><span>            type: Number,</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>        ids: {</span></span>
<span class="line"><span>            required: true,</span></span>
<span class="line"><span>            type: Array,</span></span>
<span class="line"><span>            default: () =&gt; {</span></span>
<span class="line"><span>                return []</span></span>
<span class="line"><span>            },</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    setup(props) {</span></span>
<span class="line"><span>        const startExport = () =&gt; {</span></span>
<span class="line"><span>            doExport(&#39;/ssdSpecial/dataExportAction/export.do&#39;, {</span></span>
<span class="line"><span>                apiName: &#39;/ssdController/doExport.do&#39;,</span></span>
<span class="line"><span>                taskType: &#39;ssdCustomerConfigList&#39;,</span></span>
<span class="line"><span>                exportType: &#39;ssdCustomerConfig&#39;,</span></span>
<span class="line"><span>                exportFileName: \`\${props.pageType}客户配置\`,</span></span>
<span class="line"><span>                totalRecord: props.ids.length || props.total,</span></span>
<span class="line"><span>                id: props.ids.length &gt; 0 ? props.ids.join(&#39;,&#39;) : undefined,</span></span>
<span class="line"><span>                customerType: props.pageType,</span></span>
<span class="line"><span>                fuzzySearch: props.fuzzySearch,</span></span>
<span class="line"><span>            })</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        return {</span></span>
<span class="line"><span>            startExport,</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span></span></span>
<span class="line"><span>})</span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;style scoped&gt;</span></span>
<span class="line"><span>i.export2_blue {</span></span>
<span class="line"><span>    display: inline-block;</span></span>
<span class="line"><span>    margin: 7px 7px 7px 0;</span></span>
<span class="line"><span>    width: 16px;</span></span>
<span class="line"><span>    height: 16px;</span></span>
<span class="line"><span>    background-image: url(@/assets/images/export2_blue.png);</span></span>
<span class="line"><span>    vertical-align: top;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/* 自定义button样式 */</span></span>
<span class="line"><span>.Button {</span></span>
<span class="line"><span>    display: inline-block;</span></span>
<span class="line"><span>    height: 32px;</span></span>
<span class="line"><span>    line-height: 30px;</span></span>
<span class="line"><span>    padding-left: 15px;</span></span>
<span class="line"><span>    padding-right: 15px;</span></span>
<span class="line"><span>    font-size: 14px;</span></span>
<span class="line"><span>    color: white;</span></span>
<span class="line"><span>    text-align: center;</span></span>
<span class="line"><span>    text-decoration: none;</span></span>
<span class="line"><span>    cursor: pointer;</span></span>
<span class="line"><span>    vertical-align: middle;</span></span>
<span class="line"><span>    outline: none;</span></span>
<span class="line"><span>    border: 1px solid #418ef8;</span></span>
<span class="line"><span>    background-color: #418ef8;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>.Button:hover {</span></span>
<span class="line"><span>    color: white;</span></span>
<span class="line"><span>    background-color: #0087dd;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>.Button.White {</span></span>
<span class="line"><span>    border-color: #cccccc;</span></span>
<span class="line"><span>    color: #666666;</span></span>
<span class="line"><span>    background-color: #ffffff;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>.Button.White:hover {</span></span>
<span class="line"><span>    color: #666666;</span></span>
<span class="line"><span>    background-color: #f0f0f0;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>.Button.Gray {</span></span>
<span class="line"><span>    border-color: #bebebe;</span></span>
<span class="line"><span>    background-color: #bebebe;</span></span>
<span class="line"><span>    cursor: default;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>.Button.Orange {</span></span>
<span class="line"><span>    border-color: #fd9a00;</span></span>
<span class="line"><span>    background-color: #fd9a00;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>.Button.Orange:hover {</span></span>
<span class="line"><span>    background-color: #ed9100;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&lt;/style&gt;</span></span></code></pre></div><h2 id="doexport" tabindex="-1">doExport <a class="header-anchor" href="#doexport" aria-label="Permalink to &quot;doExport&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span></span></span>
<span class="line"><span>import axios from &#39;axios&#39;</span></span>
<span class="line"><span>import { Modal } from &#39;ant-design-vue&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>let getExportStatus = function (taskId) {</span></span>
<span class="line"><span>    return new Promise((resolve) =&gt; {</span></span>
<span class="line"><span>        axios({</span></span>
<span class="line"><span>            method: &#39;post&#39;,</span></span>
<span class="line"><span>            url: &#39;/ssdSpecial/dataExportAction/exportResult.do&#39;,</span></span>
<span class="line"><span>            data: taskId</span></span>
<span class="line"><span>            // data: qs.stringify({</span></span>
<span class="line"><span>            //     taskId,</span></span>
<span class="line"><span>            // }),</span></span>
<span class="line"><span>        })</span></span>
<span class="line"><span>            .then((resp) =&gt; {</span></span>
<span class="line"><span>                resolve(resp.data)</span></span>
<span class="line"><span>            })</span></span>
<span class="line"><span>    })</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>let doExport = function (url, params) {</span></span>
<span class="line"><span>    // 测试弹框</span></span>
<span class="line"><span>    Modal.info({</span></span>
<span class="line"><span>        title: &#39;导出失败&#39;,</span></span>
<span class="line"><span>        okText: &#39;关闭&#39;,</span></span>
<span class="line"><span>        content: &#39;&lt;p style=&quot;text-align: center;&quot;&gt;数据导出失败，请刷新页面后重新操作，或者联系管理员处理&lt;/p&gt;&#39;,</span></span>
<span class="line"><span>        scrollable: true,</span></span>
<span class="line"><span>    })</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // $this.$loading.show()</span></span>
<span class="line"><span>    axios({</span></span>
<span class="line"><span>        method: &#39;post&#39;,</span></span>
<span class="line"><span>        url,</span></span>
<span class="line"><span>        data: params,</span></span>
<span class="line"><span>        // data: qs.stringify(params),</span></span>
<span class="line"><span>    })</span></span>
<span class="line"><span>        .then(async (resp) =&gt; {</span></span>
<span class="line"><span>            if (resp.data.taskId) {</span></span>
<span class="line"><span>                while (true) {</span></span>
<span class="line"><span>                    let exportStatus = await getExportStatus(resp.data.taskId)</span></span>
<span class="line"><span>                    if (exportStatus.fileStatus === &#39;Success&#39;) {</span></span>
<span class="line"><span>                        // $this.$loading.hide()</span></span>
<span class="line"><span>                        Modal.info({</span></span>
<span class="line"><span>                            title: &#39;文件下载&#39;,</span></span>
<span class="line"><span>                            okText: &#39;关闭&#39;,</span></span>
<span class="line"><span>                            content: \`&lt;a download=&quot;\${exportStatus.fileName}&quot; href=&quot;\${exportStatus.fullPath}&quot; target=&quot;_blank&quot; rel=&quot;noopener noreferrer&quot; style=&quot;text-decoration: underline; color: #337ab7;&quot;&gt;\${exportStatus.fileName}&lt;/a&gt;\`,</span></span>
<span class="line"><span>                            scrollable: true,</span></span>
<span class="line"><span>                        })</span></span>
<span class="line"><span>                        break</span></span>
<span class="line"><span>                    } else if (exportStatus.fileStatus === &#39;Fail&#39;) {</span></span>
<span class="line"><span>                        // $this.$loading.hide()</span></span>
<span class="line"><span>                        Modal.info({</span></span>
<span class="line"><span>                            title: &#39;导出失败&#39;,</span></span>
<span class="line"><span>                            okText: &#39;关闭&#39;,</span></span>
<span class="line"><span>                            content: &#39;&lt;p style=&quot;text-align: center;&quot;&gt;数据导出失败，请刷新页面后重新操作，或者联系管理员处理&lt;/p&gt;&#39;,</span></span>
<span class="line"><span>                            scrollable: true,</span></span>
<span class="line"><span>                        })</span></span>
<span class="line"><span>                        break</span></span>
<span class="line"><span>                    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                    // await util.sleep(1000)</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        })</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export default doExport</span></span></code></pre></div>`,4),t=[e];function i(c,o,r,d,u,g){return a(),n("div",null,t)}const f=s(l,[["render",i]]);export{h as __pageData,f as default};
