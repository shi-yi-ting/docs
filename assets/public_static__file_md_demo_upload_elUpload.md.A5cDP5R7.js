import{_ as n,c as s,o as a,U as p}from"./chunks/framework.FpOEJISx.js";const m=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"public/static/_file/md/demo/upload/elUpload.md","filePath":"public/static/_file/md/demo/upload/elUpload.md"}'),l={name:"public/static/_file/md/demo/upload/elUpload.md"},e=p(`<div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>    &lt;div&gt;</span></span>
<span class="line"><span>        &lt;div class=&quot;content&quot;&gt;</span></span>
<span class="line"><span>            &lt;div style=&quot;font-size: 30px; text-align: center; color: #ffff&quot;&gt;终端大数据音频检测服务平台&lt;/div&gt;</span></span>
<span class="line"><span>            &lt;div style=&quot;margin-top: 20px; margin-bottom: 30px; text-align: center;&quot;&gt;</span></span>
<span class="line"><span>                &lt;el-button slot=&quot;trigger&quot; size=&quot;large&quot; type=&quot;primary&quot; @click=&quot;dialogVisible = true&quot;&gt;选取文件&lt;/el-button&gt;</span></span>
<span class="line"><span>                &lt;el-button style=&quot;margin-left: 10px;&quot; size=&quot;large&quot; type=&quot;success&quot; @click=&quot;downTxt&quot;&gt;检测结果下载&lt;/el-button&gt;</span></span>
<span class="line"><span>            &lt;/div&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            &lt;div v-for=&quot;(files, index1) of defaultFileList&quot; :key=&quot;index1&quot;&gt;</span></span>
<span class="line"><span>                &lt;div style=&quot;margin-bottom: 40px;&quot;&gt;</span></span>
<span class="line"><span>                    &lt;div style=&quot;margin-bottom: 10px; font-size: 16px; color: #fff&quot;&gt;name: {{ files.name }}&lt;/div&gt;</span></span>
<span class="line"><span>                    &lt;div&gt;</span></span>
<span class="line"><span>                        &lt;el-table</span></span>
<span class="line"><span>                            :data=&quot;files.tableData&quot;</span></span>
<span class="line"><span>                            style=&quot;width: 100%; background-color: #2c3447;&quot;</span></span>
<span class="line"><span>                        &gt;</span></span>
<span class="line"><span>                            &lt;template v-for=&quot;(column, index2) of Object.keys(files.tableData[0])&quot;  :key=&quot;index2&quot;&gt;</span></span>
<span class="line"><span>                                &lt;el-table-column</span></span>
<span class="line"><span>                                    :prop=&quot;column&quot;</span></span>
<span class="line"><span>                                    :label=&quot;column&quot;</span></span>
<span class="line"><span>                                &gt;</span></span>
<span class="line"><span>                                &lt;/el-table-column&gt;</span></span>
<span class="line"><span>                            &lt;/template&gt;</span></span>
<span class="line"><span>                        &lt;/el-table&gt;</span></span>
<span class="line"><span>                    &lt;/div&gt;</span></span>
<span class="line"><span>                &lt;/div&gt;</span></span>
<span class="line"><span>            &lt;/div&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            &lt;el-dialog title=&quot;上传文件&quot; v-model=&quot;dialogVisible&quot; width=&quot;30%&quot;&gt;</span></span>
<span class="line"><span>                &lt;template #default&gt;</span></span>
<span class="line"><span>                    &lt;div&gt;</span></span>
<span class="line"><span>                        &lt;label style=&quot;display: inline-block; width: 100px; margin-top: 15px; padding-right: 0;&quot;&gt;</span></span>
<span class="line"><span>                            &lt;span&gt;文件&lt;/span&gt;</span></span>
<span class="line"><span>                            &lt;span style=&quot;font-size: 12px;&quot;&gt;(最大50M)&lt;/span&gt;</span></span>
<span class="line"><span>                        &lt;/label&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                        &lt;el-upload ref=&quot;uploadFileRef&quot; v-bind=&quot;uploaSettings&quot;&gt;</span></span>
<span class="line"><span>                            &lt;p style=&quot;height: 32px; line-height: 32px;&quot;&gt;点击或拖拽上传文件 (最大50M)&lt;/p&gt;</span></span>
<span class="line"><span>                        &lt;/el-upload&gt;</span></span>
<span class="line"><span>                    &lt;/div&gt;</span></span>
<span class="line"><span>                &lt;/template&gt;</span></span>
<span class="line"><span>                &lt;template #footer&gt;</span></span>
<span class="line"><span>                    &lt;span slot=&quot;footer&quot; class=&quot;dialog-footer&quot;&gt;</span></span>
<span class="line"><span>                        &lt;el-button @click=&quot;dialogVisible = false&quot;&gt;取 消&lt;/el-button&gt;</span></span>
<span class="line"><span>                        &lt;el-button type=&quot;primary&quot;  @click=&quot;dialogVisible = false&quot;&gt;确 定&lt;/el-button&gt;</span></span>
<span class="line"><span>                    &lt;/span&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                    &lt;a ref=&quot;downFileRef&quot; target=&quot;_blank&quot; rel=&quot;noopener noreferrer&quot; style=&quot;display: none;&quot; /&gt;</span></span>
<span class="line"><span>                &lt;/template&gt;</span></span>
<span class="line"><span>            &lt;/el-dialog&gt;</span></span>
<span class="line"><span>        &lt;/div&gt;</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script&gt;</span></span>
<span class="line"><span>import { defineComponent, ref, reactive, computed, onMounted } from &#39;vue&#39;</span></span>
<span class="line"><span>import { ElButton, ElTable, ElTableColumn, ElDialog, ElUpload } from &#39;element-plus&#39;</span></span>
<span class="line"><span>import detectionService from &#39;./_js/detectionService.js&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export default defineComponent({</span></span>
<span class="line"><span>    components: {</span></span>
<span class="line"><span>        ElButton,</span></span>
<span class="line"><span>        ElTable,</span></span>
<span class="line"><span>        ElTableColumn,</span></span>
<span class="line"><span>        ElDialog,</span></span>
<span class="line"><span>        ElUpload,</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    setup() {</span></span>
<span class="line"><span>        const dialogVisible = ref(false)</span></span>
<span class="line"><span>        const uploadFileRef = ref(null)</span></span>
<span class="line"><span>        const downFileRef = ref(null)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        const list = reactive({</span></span>
<span class="line"><span>            arr: JSON.parse(window.localStorage.getItem(&#39;data&#39;)),</span></span>
<span class="line"><span>        })</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        const defaultFileList = computed({</span></span>
<span class="line"><span>            get() {</span></span>
<span class="line"><span>                console.log(&#39;get&#39;, JSON.parse(window.localStorage.getItem(&#39;data&#39;)))</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                return detectionService // 模拟数据</span></span>
<span class="line"><span>                // return JSON.parse(window.localStorage.getItem(&#39;data&#39;))</span></span>
<span class="line"><span>            },</span></span>
<span class="line"><span>            set(newVal) {</span></span>
<span class="line"><span>                console.log(&#39;set&#39;, newVal)</span></span>
<span class="line"><span>                window.localStorage.setItem(&#39;data&#39;, JSON.stringify(newVal))</span></span>
<span class="line"><span>                console.log(&#39;保存好了&#39;)</span></span>
<span class="line"><span>            },</span></span>
<span class="line"><span>        })</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        const uploaSettings = reactive({</span></span>
<span class="line"><span>            action: &#39;/audio_detect/request&#39;,</span></span>
<span class="line"><span>            class: &#39;uploadDemo&#39;,</span></span>
<span class="line"><span>            multiple: true,</span></span>
<span class="line"><span>            autoUpload: true,</span></span>
<span class="line"><span>            showFileList: true,</span></span>
<span class="line"><span>            fileList: JSON.parse(window.localStorage.getItem(&#39;data&#39;)) || [],</span></span>
<span class="line"><span>            drag: true,</span></span>
<span class="line"><span>            beforeUpload: (file) =&gt; {</span></span>
<span class="line"><span>                console.log(&#39;上传之前&#39;, file)</span></span>
<span class="line"><span>                const isJPG = file.type === &#39;audio/wav&#39;</span></span>
<span class="line"><span>                const isLt2m = file.size / 1024 / 1024 &lt; 50</span></span>
<span class="line"><span>                if (!isJPG) {</span></span>
<span class="line"><span>                    $this.$Message.error(&#39;请上传音频 wav 格式文件!&#39;)</span></span>
<span class="line"><span>                    return false</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>                if (!isLt2m) {</span></span>
<span class="line"><span>                    $this.$Message.error(&#39;上传图片大小不能超过 50MB!&#39;)</span></span>
<span class="line"><span>                    return false</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>                return {</span></span>
<span class="line"><span>                    isJPG,</span></span>
<span class="line"><span>                    isLt2m,</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                // for (let item of lodash.cloneDeep(defaultFileList.value)) {</span></span>
<span class="line"><span>                //     if (item.name === file.name) {</span></span>
<span class="line"><span>                //         return false</span></span>
<span class="line"><span>                //     }</span></span>
<span class="line"><span>                // }</span></span>
<span class="line"><span>            },</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            onSuccess: (response, file) =&gt; {</span></span>
<span class="line"><span>                if (file.status === &#39;success&#39;) {</span></span>
<span class="line"><span>                    let content = file.response.result.split(&#39;,&#39;)[1].split(&#39;#&#39;)</span></span>
<span class="line"><span>                    content.splice(content.findIndex((item) =&gt; (item === &#39;score:0.0&#39;)), 1)</span></span>
<span class="line"><span>                    content.splice(content.findIndex((item) =&gt; (item === &#39;score:-0.0&#39;)), 1)</span></span>
<span class="line"><span>                    console.log(&#39;content&#39;, content)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                    let obj = {}</span></span>
<span class="line"><span>                    let tableData = []</span></span>
<span class="line"><span>                    for (let item of content) {</span></span>
<span class="line"><span>                        obj[item.split(&#39;:&#39;)[0]] = item.split(&#39;:&#39;)[1]</span></span>
<span class="line"><span>                    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                    tableData.push(obj)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                    defaultFileList.value.push({</span></span>
<span class="line"><span>                        name: file.name,</span></span>
<span class="line"><span>                        tableData,</span></span>
<span class="line"><span>                    })</span></span>
<span class="line"><span>                    console.log(&#39;defaultFileList2&#39;, defaultFileList.value)</span></span>
<span class="line"><span>                    window.localStorage.setItem(&#39;data&#39;, JSON.stringify(defaultFileList.value))</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>            },</span></span>
<span class="line"><span>            onRemove: (file) =&gt; {</span></span>
<span class="line"><span>                let index = defaultFileList.value.findIndex((item) =&gt; {</span></span>
<span class="line"><span>                    return item.name === file.name</span></span>
<span class="line"><span>                })</span></span>
<span class="line"><span>                defaultFileList.value.splice(index, 1)</span></span>
<span class="line"><span>                window.localStorage.setItem(&#39;data&#39;, JSON.stringify(defaultFileList.value))</span></span>
<span class="line"><span>            },</span></span>
<span class="line"><span>        })</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        const downTxt = () =&gt; {</span></span>
<span class="line"><span>            let blob = new Blob([window.localStorage.getItem(&#39;data&#39;)], { type: &#39;text/plain&#39; })</span></span>
<span class="line"><span>            let aLink = document.createElement(&#39;a&#39;)</span></span>
<span class="line"><span>            aLink.href = URL.createObjectURL(blob)</span></span>
<span class="line"><span>            aLink.setAttribute(&#39;download&#39;, &#39;检测结果.txt&#39;)</span></span>
<span class="line"><span>            aLink.innerHTML = &#39;下载&#39;</span></span>
<span class="line"><span>            aLink.click()</span></span>
<span class="line"><span>            // document.body.appendChild(aLink)</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        return {</span></span>
<span class="line"><span>            dialogVisible,</span></span>
<span class="line"><span>            uploadFileRef,</span></span>
<span class="line"><span>            list,</span></span>
<span class="line"><span>            defaultFileList,</span></span>
<span class="line"><span>            uploaSettings,</span></span>
<span class="line"><span>            downFileRef,</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            downTxt,</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;style scoped&gt;</span></span>
<span class="line"><span>.content {</span></span>
<span class="line"><span>    height: 50vh;</span></span>
<span class="line"><span>    margin-top: 15px;</span></span>
<span class="line"><span>    padding: 30px 10px 10px 10px;</span></span>
<span class="line"><span>    background-color: #2c3447;</span></span>
<span class="line"><span>    overflow: auto;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>.uploadDemo {</span></span>
<span class="line"><span>    /* width: calc(100% - 100px); */</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>.content &gt;&gt;&gt; .el-dialog__body {</span></span>
<span class="line"><span>    border-top: 1px solid #e8eaec;</span></span>
<span class="line"><span>    border-bottom: 1px solid #e8eaec;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>.content &gt;&gt;&gt; .el-upload-dragger {</span></span>
<span class="line"><span>    /* height: 36px; */</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>.loading {</span></span>
<span class="line"><span>    position: fixed;</span></span>
<span class="line"><span>    left: 53%;</span></span>
<span class="line"><span>    right: 0;</span></span>
<span class="line"><span>    top: 299px;</span></span>
<span class="line"><span>    bottom: 0;</span></span>
<span class="line"><span>    z-index: 9999999;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>.content &gt;&gt;&gt; .el-table th,</span></span>
<span class="line"><span>.content &gt;&gt;&gt; .el-table tr {</span></span>
<span class="line"><span>    background-color: #343e58;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>.content &gt;&gt;&gt; .el-table td,</span></span>
<span class="line"><span>.content &gt;&gt;&gt; .el-table th.is-leaf {</span></span>
<span class="line"><span>    border-bottom: 1px solid #67779e;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>.content &gt;&gt;&gt; .el-table--border::after,</span></span>
<span class="line"><span>.content &gt;&gt;&gt; .el-table--group::after,</span></span>
<span class="line"><span>.content &gt;&gt;&gt; .el-table::before {</span></span>
<span class="line"><span>    background-color: #67779e;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>.content &gt;&gt;&gt; .el-table--enable-row-hover .el-table__body tr:hover &gt; td {</span></span>
<span class="line"><span>    background-color: #343e58;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>.content &gt;&gt;&gt; .el-table th &gt; .cell,</span></span>
<span class="line"><span>.content &gt;&gt;&gt; .el-table .cell {</span></span>
<span class="line"><span>    color: #e2e7ed;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&lt;/style&gt;</span></span></code></pre></div>`,1),t=[e];function i(c,o,u,g,d,r){return a(),s("div",null,t)}const b=n(l,[["render",i]]);export{m as __pageData,b as default};
