import{_ as s,c as n,o as a,U as p}from"./chunks/framework.FpOEJISx.js";const q=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"public/static/_file/md/demo/validate/iviewValidate.md","filePath":"public/static/_file/md/demo/validate/iviewValidate.md"}'),l={name:"public/static/_file/md/demo/validate/iviewValidate.md"},e=p(`<div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>    &lt;div style=&quot;padding: 40px;&quot;&gt;</span></span>
<span class="line"><span>        &lt;div&gt;</span></span>
<span class="line"><span>            &lt;Form ref=&quot;ruleBox&quot; :model=&quot;formBox&quot; :rules=&quot;ruleBox&quot; :labelWidth=&quot;140&quot;&gt;</span></span>
<span class="line"><span>                &lt;Form-item label=&quot;选取标签类别&quot; required&gt;</span></span>
<span class="line"><span>                    &lt;Form-item prop=&quot;tagsort&quot;&gt;</span></span>
<span class="line"><span>                        &lt;Select v-model=&quot;formBox.tagsort&quot; placeholder=&quot;请选择一级标签&quot; :disabled=&quot;algorithm === &#39;algorithm&#39; ? true : false&quot; @on-change=&quot;changeOne&quot;&gt;</span></span>
<span class="line"><span>                            &lt;Option v-for=&quot;item in tagList&quot; :key=&quot;item.id&quot; :value=&quot;item.id&quot;&gt;{{ item.label }}&lt;/Option&gt;</span></span>
<span class="line"><span>                        &lt;/Select&gt;</span></span>
<span class="line"><span>                    &lt;/Form-item&gt;</span></span>
<span class="line"><span>                &lt;/Form-item&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                &lt;Form-item label=&quot;填写标签名称&quot; required&gt;</span></span>
<span class="line"><span>                    &lt;Form-item prop=&quot;tagName&quot;&gt;</span></span>
<span class="line"><span>                        &lt;Input v-model=&quot;formBox.tagName&quot; placeholder=&quot;请输入英文名称&quot; maxlength=&quot;50&quot; /&gt;</span></span>
<span class="line"><span>                    &lt;/Form-item&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                    &lt;Form-item prop=&quot;tagNameChina&quot;&gt;</span></span>
<span class="line"><span>                        &lt;Input v-model=&quot;formBox.tagNameChina&quot; placeholder=&quot;请输入中文名称&quot; maxlength=&quot;50&quot; /&gt;</span></span>
<span class="line"><span>                    &lt;/Form-item&gt;</span></span>
<span class="line"><span>                &lt;/Form-item&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                &lt;Form-item prop=&quot;tagLeader&quot; label=&quot;领域owner审批人&quot;&gt;</span></span>
<span class="line"><span>                    &lt;Select v-model=&quot;formBox.tagLeader&quot; placeholder=&quot;请选择审批人&quot;&gt;</span></span>
<span class="line"><span>                        &lt;VirtualList :size=&quot;10&quot; :remain=&quot;200&quot;&gt;</span></span>
<span class="line"><span>                            &lt;Option v-for=&quot;(item) in leaderList&quot; :key=&quot;item.approvew3&quot; :value=&quot;item.nodeid&quot; :label=&quot;item.approvew3&quot;&gt;</span></span>
<span class="line"><span>                                &lt;span&gt;{{ item.approveuser }}&lt;/span&gt;</span></span>
<span class="line"><span>                                &lt;span style=&quot;float:right;color:#ccc&quot;&gt;{{ item.approvew3 }}&lt;/span&gt;</span></span>
<span class="line"><span>                            &lt;/Option&gt;</span></span>
<span class="line"><span>                        &lt;/VirtualList&gt;</span></span>
<span class="line"><span>                    &lt;/Select&gt;</span></span>
<span class="line"><span>                &lt;/Form-item&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                &lt;Form-item prop=&quot;tagMsg&quot; label=&quot;标签用途描述&quot;&gt;</span></span>
<span class="line"><span>                    &lt;Input v-model=&quot;formBox.tagMsg&quot; type=&quot;textarea&quot; :autosize=&quot;true&quot; placeholder=&quot;请简要描述标签的业务逻辑和特征含义&quot; /&gt;</span></span>
<span class="line"><span>                &lt;/Form-item&gt;</span></span>
<span class="line"><span>            &lt;/Form&gt;</span></span>
<span class="line"><span>        &lt;/div&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        &lt;div&gt;</span></span>
<span class="line"><span>            &lt;Button type=&quot;primary&quot; style=&quot;margin-right:10px&quot; @click=&quot;next&quot;&gt;保存&lt;/Button&gt;</span></span>
<span class="line"><span>        &lt;/div&gt;</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script&gt;</span></span>
<span class="line"><span>export default {</span></span>
<span class="line"><span>    data() {</span></span>
<span class="line"><span>        const validatePass = (rule, value, callback) =&gt; {</span></span>
<span class="line"><span>            if (value === &#39;&#39;) {</span></span>
<span class="line"><span>                callback(new Error(&#39;请选择直接主管&#39;))</span></span>
<span class="line"><span>            } else {</span></span>
<span class="line"><span>                callback()</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        const validatePass2 = async (rule, value, callback) =&gt; {</span></span>
<span class="line"><span>            if (value === &#39;&#39;) {</span></span>
<span class="line"><span>                callback(new Error(&#39;请输入标签英文名称&#39;))</span></span>
<span class="line"><span>            } else {</span></span>
<span class="line"><span>                let reg = /^[0-9a-zA-Z_]{1,}$/</span></span>
<span class="line"><span>                if (!reg.test(value)) {</span></span>
<span class="line"><span>                    callback(new Error(&#39;请输入数字、26个英文字母&#39;))</span></span>
<span class="line"><span>                } else {</span></span>
<span class="line"><span>                    await this.getCntByNameen()</span></span>
<span class="line"><span>                    if (this.nameRepFlag) {</span></span>
<span class="line"><span>                        callback(new Error(&#39;标签名称重复&#39;))</span></span>
<span class="line"><span>                    }</span></span>
<span class="line"><span>                    callback()</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        // const validatePass3 = (rule, value, callback) =&gt; {</span></span>
<span class="line"><span>        //     if (value === &#39;&#39;) {</span></span>
<span class="line"><span>        //         callback(new Error(&#39;请输入标签中文名称&#39;))</span></span>
<span class="line"><span>        //     } else {</span></span>
<span class="line"><span>        //         // let reg = /^[\\u4E00-\\u9FA5]/g</span></span>
<span class="line"><span>        //         let reg = /[A-Za-z]+/</span></span>
<span class="line"><span>        //         if (reg.test(value)) {</span></span>
<span class="line"><span>        //             callback(new Error(&#39;请输入标签中文名称&#39;))</span></span>
<span class="line"><span>        //         } else if (value.indexOf(&#39;{&#39;) &gt; -1 || value.indexOf(&#39;}&#39;) &gt; -1) {</span></span>
<span class="line"><span>        //             callback(new Error(&#39;中文名称不能输入{、}&#39;))</span></span>
<span class="line"><span>        //         } else {</span></span>
<span class="line"><span>        //             callback()</span></span>
<span class="line"><span>        //         }</span></span>
<span class="line"><span>        //     }</span></span>
<span class="line"><span>        // }</span></span>
<span class="line"><span>        const validatePass3 = (rule, value, callback) =&gt; {</span></span>
<span class="line"><span>            if (value === &#39;&#39;) {</span></span>
<span class="line"><span>                callback(new Error(&#39;请输入标签中文名称&#39;))</span></span>
<span class="line"><span>            } else {</span></span>
<span class="line"><span>                if (value.indexOf(&#39;{&#39;) &gt; -1 || value.indexOf(&#39;}&#39;) &gt; -1) {</span></span>
<span class="line"><span>                    callback(new Error(&#39;中文名称不能输入{、}&#39;))</span></span>
<span class="line"><span>                } else {</span></span>
<span class="line"><span>                    callback()</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        return {</span></span>
<span class="line"><span>            tagList: [],</span></span>
<span class="line"><span>            leaderList: [],</span></span>
<span class="line"><span>            tagLeader: &#39;&#39;,</span></span>
<span class="line"><span>            nameRepFlag: false, // 名称重复的标识</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            algorithm: undefined,</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            formBox: {</span></span>
<span class="line"><span>                tagsort: &#39;&#39;,</span></span>
<span class="line"><span>                tagName: &#39;&#39;,</span></span>
<span class="line"><span>                tagNameChina: &#39;&#39;,</span></span>
<span class="line"><span>                tagLeader: &#39;&#39;,</span></span>
<span class="line"><span>                tagMsg: &#39;&#39;,</span></span>
<span class="line"><span>            },</span></span>
<span class="line"><span>            ruleBox: {</span></span>
<span class="line"><span>                tagsort: [</span></span>
<span class="line"><span>                    { required: true, message: &#39;请选择一级标签&#39;, trigger: &#39;change&#39; },</span></span>
<span class="line"><span>                ],</span></span>
<span class="line"><span>                tagName: [</span></span>
<span class="line"><span>                    { required: true, validator: validatePass2, trigger: &#39;blur&#39; },</span></span>
<span class="line"><span>                ],</span></span>
<span class="line"><span>                tagNameChina: [</span></span>
<span class="line"><span>                    { required: true, validator: validatePass3, trigger: &#39;blur&#39; },</span></span>
<span class="line"><span>                ],</span></span>
<span class="line"><span>                tagLeader: [</span></span>
<span class="line"><span>                    { required: true, validator: validatePass, trigger: &#39;change&#39; },</span></span>
<span class="line"><span>                ],</span></span>
<span class="line"><span>                tagMsg: [</span></span>
<span class="line"><span>                    { required: true, message: &#39;请简要描述标签的业务逻辑和特征含义&#39;, trigger: &#39;blur&#39; },</span></span>
<span class="line"><span>                ],</span></span>
<span class="line"><span>            },</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    methods: {</span></span>
<span class="line"><span>        changeOne() {</span></span>
<span class="line"><span>            console.log(&#39;改变了下拉框的值&#39;)</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        next() {</span></span>
<span class="line"><span>            this.$refs.ruleBox.validate((valid) =&gt; {</span></span>
<span class="line"><span>                if (valid) {</span></span>
<span class="line"><span>                    // eslint-disable-next-line no-alert</span></span>
<span class="line"><span>                    alert(&#39;验证通过&#39;)</span></span>
<span class="line"><span>                } else {</span></span>
<span class="line"><span>                    // eslint-disable-next-line no-alert</span></span>
<span class="line"><span>                    alert(&#39;验证未通过&#39;)</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>            })</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;style lang=&quot;less&quot; scoped&gt;</span></span>
<span class="line"><span>// 样式未用只是用于参考less如何进行样式穿透</span></span>
<span class="line"><span>.tooltip-site {</span></span>
<span class="line"><span>    width: 100%;</span></span>
<span class="line"><span>    position: absolute;</span></span>
<span class="line"><span>    left: -30px;</span></span>
<span class="line"><span>    top: 5px;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>.level-form {</span></span>
<span class="line"><span>    /deep/.ivu-form-item {</span></span>
<span class="line"><span>        flex: 1;</span></span>
<span class="line"><span>        /deep/.ivu-form-item-content {</span></span>
<span class="line"><span>            width: 100%;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>.leader {</span></span>
<span class="line"><span>    /deep/.ivu-select-dropdown {</span></span>
<span class="line"><span>        padding: 0 !important;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>/deep/.ivu-select-dropdown-list {</span></span>
<span class="line"><span>    &gt; div {</span></span>
<span class="line"><span>        max-height: 200px !important;</span></span>
<span class="line"><span>        height: auto !important;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>.leader {</span></span>
<span class="line"><span>    height: 0px;</span></span>
<span class="line"><span>    float: left;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>/deep/.leader,</span></span>
<span class="line"><span>.ivu-select {</span></span>
<span class="line"><span>    .ivu-select-selection {</span></span>
<span class="line"><span>        top: -30px;</span></span>
<span class="line"><span>        opacity: 0;</span></span>
<span class="line"><span>        // display: none;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>.my-select {</span></span>
<span class="line"><span>    /deep/ .ivu-select-dropdown {</span></span>
<span class="line"><span>        display: none;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&lt;/style&gt;</span></span></code></pre></div>`,1),t=[e];function i(c,o,r,u,g,d){return a(),n("div",null,t)}const v=s(l,[["render",i]]);export{q as __pageData,v as default};
