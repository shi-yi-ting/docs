import{_ as s,c as n,o as a,U as p}from"./chunks/framework.FpOEJISx.js";const _=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"public/static/_file/md/demo/upload/iUpload.md","filePath":"public/static/_file/md/demo/upload/iUpload.md"}'),l={name:"public/static/_file/md/demo/upload/iUpload.md"},e=p(`<div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>    &lt;span&gt;</span></span>
<span class="line"><span>        &lt;Upload v-bind=&quot;uploadConfig&quot; style=&quot;display: inline-block;&quot;&gt;</span></span>
<span class="line"><span>            &lt;button class=&quot;Button White&quot;&gt;&lt;i class=&quot;import2_blue&quot; /&gt;导入&lt;/button&gt;</span></span>
<span class="line"><span>        &lt;/Upload&gt;</span></span>
<span class="line"><span>        &lt;loadingText :show=&quot;showWaitResolveFile&quot; text=&quot;文件解析中, 请稍候...&quot; /&gt;</span></span>
<span class="line"><span>    &lt;/span&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script&gt;</span></span>
<span class="line"><span>import { defineComponent, reactive, ref } from &#39;@vue/composition-api&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export default defineComponent({</span></span>
<span class="line"><span>    props: {</span></span>
<span class="line"><span>        pageType: {</span></span>
<span class="line"><span>            required: true,</span></span>
<span class="line"><span>            type: String,</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    setup(props, { emit }) {</span></span>
<span class="line"><span>        const showWaitResolveFile = ref(false)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        const uploadConfig = reactive({</span></span>
<span class="line"><span>            type: &#39;select&#39;,</span></span>
<span class="line"><span>            action: &#39;&#39;,</span></span>
<span class="line"><span>            showUploadList: false,</span></span>
<span class="line"><span>            format: [&#39;xlsx&#39;],</span></span>
<span class="line"><span>            onFormatError: () =&gt; {</span></span>
<span class="line"><span>                $this.$Message.warning(&#39;请选择xlsx文件&#39;)</span></span>
<span class="line"><span>                $this.$loading.hide()</span></span>
<span class="line"><span>            },</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            beforeUpload: () =&gt; {</span></span>
<span class="line"><span>                $this.$loading.show()</span></span>
<span class="line"><span>            },</span></span>
<span class="line"><span>            onSuccess: (response) =&gt; {</span></span>
<span class="line"><span>                $this.$loading.hide()</span></span>
<span class="line"><span>                $this.$Modal.info({</span></span>
<span class="line"><span>                    title: &#39;导入完成&#39;,</span></span>
<span class="line"><span>                    content: \`导入数据总数：\${response.data.totalCount}, 成功:\${response.data.successCount}条，失败：\${response.data.totalCount - response.data.successCount}条。\${response.data.failRowNo ? \`&lt;br /&gt;失败行: \${response.data.failRowNo}。\` : &#39;&#39;}\`,</span></span>
<span class="line"><span>                    scrollable: true,</span></span>
<span class="line"><span>                })</span></span>
<span class="line"><span>                emit(&#39;refreshed&#39;)</span></span>
<span class="line"><span>            },</span></span>
<span class="line"><span>        })</span></span>
<span class="line"><span>        return {</span></span>
<span class="line"><span>            showWaitResolveFile,</span></span>
<span class="line"><span>            uploadConfig,</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span></span></span>
<span class="line"><span>})</span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;style scoped&gt;</span></span>
<span class="line"><span>i.import2_blue {</span></span>
<span class="line"><span>    display: inline-block;</span></span>
<span class="line"><span>    margin: 7px 7px 7px 0;</span></span>
<span class="line"><span>    width: 16px;</span></span>
<span class="line"><span>    height: 16px;</span></span>
<span class="line"><span>    background-image: url(~@/assets/images/import2_blue.png);</span></span>
<span class="line"><span>    vertical-align: top;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&lt;/style&gt;</span></span></code></pre></div>`,1),t=[e];function i(o,c,d,r,u,g){return a(),n("div",null,t)}const h=s(l,[["render",i]]);export{_ as __pageData,h as default};
