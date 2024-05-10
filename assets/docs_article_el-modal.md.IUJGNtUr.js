import{_ as s,c as n,o as a,U as p}from"./chunks/framework.FpOEJISx.js";const _=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"docs/article/el-modal.md","filePath":"docs/article/el-modal.md"}'),l={name:"docs/article/el-modal.md"},e=p(`<div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>    &lt;div style=&quot;padding: 40px;&quot;&gt;</span></span>
<span class="line"><span>        &lt;label for=&quot;&quot;&gt;element中的MessageBox.confirm&lt;/label&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        &lt;div&gt;</span></span>
<span class="line"><span>            &lt;Button @click=&quot;showConfigOne&quot;&gt;点击触发确认弹框(原始样式)&lt;/Button&gt;</span></span>
<span class="line"><span>            &lt;Button @click=&quot;showConfigTwo&quot;&gt;点击触发确认弹框(样式调整-文本居中/添加自定义类)&lt;/Button&gt;</span></span>
<span class="line"><span>        &lt;/div&gt;</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script&gt;</span></span>
<span class="line"><span>import { defineComponent } from &#39;@vue/composition-api&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export default defineComponent({</span></span>
<span class="line"><span>    setup() {</span></span>
<span class="line"><span>        // 不居中,不添加自定义类</span></span>
<span class="line"><span>        const showConfigOne = () =&gt; {</span></span>
<span class="line"><span>            $this.$confirm(&#39;主题内容&#39;, &#39;标题&#39;, {</span></span>
<span class="line"><span>                confirmButtonText: &#39;确定&#39;, // 确定按钮的文本内容</span></span>
<span class="line"><span>                cancelButtonText: &#39;取消&#39;, // 取消按钮的自定义类名</span></span>
<span class="line"><span>                closeOnClickModal: false, // 是否可通过点击遮罩关闭</span></span>
<span class="line"><span>                type: &#39;warning&#39;, // 消息类型，用于显示图标(跟随主题内容)</span></span>
<span class="line"><span>                // center: true, // 居中(居中之后图标跟随标题)</span></span>
<span class="line"><span>                // customClass: &#39;common_confirm&#39;, // MessageBox 的自定义类名</span></span>
<span class="line"><span>                // iconClass: &#39;iconClass&#39;, // 自定义图标的类名，会覆盖 type</span></span>
<span class="line"><span>            }).then(() =&gt; {</span></span>
<span class="line"><span>                console.log(&#39;点击确定&#39;)</span></span>
<span class="line"><span>                $this.$message.success(&#39;点击了确定按钮&#39;)</span></span>
<span class="line"><span>            }).catch(() =&gt; {</span></span>
<span class="line"><span>                $this.$message(&#39;取消了操作&#39;) // message默认为info $this.$message === $this.$message.info</span></span>
<span class="line"><span>            })</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 居中并添加自定义类</span></span>
<span class="line"><span>        const showConfigTwo = () =&gt; {</span></span>
<span class="line"><span>            $this.$confirm(&#39;主题内容&#39;, &#39;标题&#39;, {</span></span>
<span class="line"><span>                confirmButtonText: &#39;确定&#39;, // 确定按钮的文本内容</span></span>
<span class="line"><span>                cancelButtonText: &#39;取消&#39;, // 取消按钮的自定义类名</span></span>
<span class="line"><span>                closeOnClickModal: false, // 是否可通过点击遮罩关闭</span></span>
<span class="line"><span>                type: &#39;warning&#39;, // 消息类型，用于显示图标(跟随主题内容)</span></span>
<span class="line"><span>                center: true, // 居中(居中之后图标跟随标题)</span></span>
<span class="line"><span>                customClass: &#39;common_confirm&#39;, // MessageBox 的自定义类名</span></span>
<span class="line"><span>                iconClass: &#39;iconClass&#39;, // 自定义图标的类名，会覆盖 type</span></span>
<span class="line"><span>            }).then(() =&gt; {</span></span>
<span class="line"><span>                console.log(&#39;点击确定&#39;)</span></span>
<span class="line"><span>                $this.$message.success(&#39;点击了确定按钮&#39;)</span></span>
<span class="line"><span>            }).catch(() =&gt; {</span></span>
<span class="line"><span>                $this.$message(&#39;取消了操作&#39;) // message默认为info $this.$message === $this.$message.info</span></span>
<span class="line"><span>            })</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        return {</span></span>
<span class="line"><span>            showConfigOne,</span></span>
<span class="line"><span>            showConfigTwo,</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;style scoped&gt;</span></span>
<span class="line"><span>&lt;/style&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;style&gt;</span></span>
<span class="line"><span>/* confirm弹框(注意放在全局不然不生效) */</span></span>
<span class="line"><span>.common_confirm.el-message-box {</span></span>
<span class="line"><span>    width: 350px !important;</span></span>
<span class="line"><span>    border-radius: 0;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/* header  */</span></span>
<span class="line"><span>.common_confirm .el-message-box__header {</span></span>
<span class="line"><span>    height: 42px;</span></span>
<span class="line"><span>    padding: 0px !important;</span></span>
<span class="line"><span>    border-bottom: 1px solid #e6eaf1;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>.common_confirm .el-message-box__title {</span></span>
<span class="line"><span>    top: 72px;</span></span>
<span class="line"><span>    font-size: 16px !important;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>.common_confirm .el-message-box__headerbtn {</span></span>
<span class="line"><span>    top: 9px !important;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/* content */</span></span>
<span class="line"><span>.common_confirm .el-message-box__content {</span></span>
<span class="line"><span>    height: 85px;</span></span>
<span class="line"><span>    font-size: 16px;</span></span>
<span class="line"><span>    font-weight: 700;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>.common_confirm .el-message-box__container {</span></span>
<span class="line"><span>    left: -130px;</span></span>
<span class="line"><span>    top: -44px;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/* button */</span></span>
<span class="line"><span>.common_confirm .el-message-box__btns .el-button {</span></span>
<span class="line"><span>    width: 25%;</span></span>
<span class="line"><span>    height: 35px;</span></span>
<span class="line"><span>    font-size: 16px !important;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/* 自定义图标 */</span></span>
<span class="line"><span>.iconClass {</span></span>
<span class="line"><span>    width: 32px;</span></span>
<span class="line"><span>    height: 32px;</span></span>
<span class="line"><span>    margin-right: 8px;</span></span>
<span class="line"><span>    background-image: url(~@/assets/images/warning.png);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&lt;/style&gt;</span></span></code></pre></div>`,1),i=[e];function c(t,o,m,g,r,d){return a(),n("div",null,i)}const f=s(l,[["render",c]]);export{_ as __pageData,f as default};
