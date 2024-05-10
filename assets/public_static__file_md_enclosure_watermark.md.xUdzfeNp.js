import{_ as s,c as n,o as a,U as p}from"./chunks/framework.FpOEJISx.js";const m=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"public/static/_file/md/enclosure/watermark.md","filePath":"public/static/_file/md/enclosure/watermark.md"}'),l={name:"public/static/_file/md/enclosure/watermark.md"},e=p(`<h2 id="使用" tabindex="-1">使用 <a class="header-anchor" href="#使用" aria-label="Permalink to &quot;使用&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>    &lt;div&gt;</span></span>
<span class="line"><span>        &lt;Watermark /&gt;</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script  setup&gt;</span></span>
<span class="line"><span>import { ref, reactive, computed, watch, onMounted, onUnmounted } from &#39;vue&#39;</span></span>
<span class="line"><span>import Watermark from &#39;@/views/enclosure/watermark/watermark.vue&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// TODO</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;/script&gt;</span></span></code></pre></div><h2 id="watermark组件封装代码" tabindex="-1">watermark组件封装代码 <a class="header-anchor" href="#watermark组件封装代码" aria-label="Permalink to &quot;watermark组件封装代码&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>    &lt;div class=&quot;watermark&quot;&gt;</span></span>
<span class="line"><span>        &lt;div v-for=&quot;index in 300&quot; :key=&quot;index&quot; :style=&quot;contentStyle&quot;&gt;</span></span>
<span class="line"><span>            &lt;!-- &lt;img src=&quot;http://yuqing.huawei.com/assets/watermark/yuqingLogo.png&quot; class=&quot;logo&quot;&gt; --&gt;</span></span>
<span class="line"><span>            &lt;div class=&quot;user&quot;&gt;</span></span>
<span class="line"><span>                &lt;span&gt;{{ userName }}&lt;/span&gt;</span></span>
<span class="line"><span>                &lt;span&gt;{{ userId }}&lt;/span&gt;</span></span>
<span class="line"><span>            &lt;/div&gt;</span></span>
<span class="line"><span>        &lt;/div&gt;</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script&gt;</span></span>
<span class="line"><span>export default {</span></span>
<span class="line"><span>    name: &#39;Watermark&#39;,</span></span>
<span class="line"><span>    props: {</span></span>
<span class="line"><span>        settings: {</span></span>
<span class="line"><span>            type: Object,</span></span>
<span class="line"><span>            default: () =&gt; {</span></span>
<span class="line"><span>                return {}</span></span>
<span class="line"><span>            },</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    data() {</span></span>
<span class="line"><span>        return {</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    computed: {</span></span>
<span class="line"><span>        userName() {</span></span>
<span class="line"><span>            // return this.$store.state.UserInfo.givenName</span></span>
<span class="line"><span>            // return this.$store.state.userInfo.givenName || &#39;shuiyin&#39; // 模拟数据</span></span>
<span class="line"><span>            return &#39;拾忆&#39; // 模拟数据</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>        userId() {</span></span>
<span class="line"><span>            // return this.$store.state.UserInfo.uid</span></span>
<span class="line"><span>            // return this.$store.state.userInfo.uid || &#39;123456&#39;</span></span>
<span class="line"><span>            return &#39;1032731503&#39;</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        config() {</span></span>
<span class="line"><span>            return {</span></span>
<span class="line"><span>                // rows: this.settings.rows || 6, // 水印行数</span></span>
<span class="line"><span>                // cols: this.settings.cols || 5, // 水印列数</span></span>
<span class="line"><span>                color: this.settings.color || &#39;#888888&#39;, // 水印字体颜色</span></span>
<span class="line"><span>                fontSize: this.settings.fontSize || &#39;15px&#39;, // 水印字体大小</span></span>
<span class="line"><span>                fontFamily: this.settings.fontFamily || &#39;微软雅黑&#39;, // 水印字体</span></span>
<span class="line"><span>                opacity: this.settings.opacity || 0.12, // 水印透明度</span></span>
<span class="line"><span>                angle: this.settings.angle || 15, // 水印倾斜度数</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>        contentStyle() {</span></span>
<span class="line"><span>            let cof = this.config</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            let style = {</span></span>
<span class="line"><span>                display: &#39;inline-block&#39;,</span></span>
<span class="line"><span>                width: &#39;320px&#39;,</span></span>
<span class="line"><span>                height: &#39;140px&#39;,</span></span>
<span class="line"><span>                padding: &#39;40px 0&#39;,</span></span>
<span class="line"><span>                color: \`\${cof.color}\`,</span></span>
<span class="line"><span>                fontSize: \`\${cof.fontSize}\`,</span></span>
<span class="line"><span>                fontFamily: \`\${cof.fontFamily}\`,</span></span>
<span class="line"><span>                opacity: \`\${cof.opacity}\`,</span></span>
<span class="line"><span>                transform: \`rotate(-\${cof.angle}deg)\`,</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            return style</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    methods: {</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;style scoped&gt;</span></span>
<span class="line"><span>.watermark {</span></span>
<span class="line"><span>    position: fixed;</span></span>
<span class="line"><span>    width: inherit;</span></span>
<span class="line"><span>    height: inherit;</span></span>
<span class="line"><span>    text-align: center;</span></span>
<span class="line"><span>    pointer-events: none;</span></span>
<span class="line"><span>    overflow: hidden;</span></span>
<span class="line"><span>    z-index: 999999999;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>.logo {</span></span>
<span class="line"><span>    display: inline-block;</span></span>
<span class="line"><span>    width: 45px;</span></span>
<span class="line"><span>    height: 31px;</span></span>
<span class="line"><span>    margin: 4px 15px 5px 0;</span></span>
<span class="line"><span>    vertical-align: middle;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>.user {</span></span>
<span class="line"><span>    display: inline-block;</span></span>
<span class="line"><span>    height: 40px;</span></span>
<span class="line"><span>    vertical-align: middle;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>.user &gt; span {</span></span>
<span class="line"><span>    display: block;</span></span>
<span class="line"><span>    height: 20px;</span></span>
<span class="line"><span>    line-height: 20px;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&lt;/style&gt;</span></span></code></pre></div>`,4),t=[e];function i(c,o,r,d,g,u){return a(),n("div",null,t)}const f=s(l,[["render",i]]);export{m as __pageData,f as default};
