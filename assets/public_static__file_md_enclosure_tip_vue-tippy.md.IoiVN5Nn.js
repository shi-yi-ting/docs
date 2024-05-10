import{_ as s,c as n,o as a,U as p}from"./chunks/framework.FpOEJISx.js";const m=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"public/static/_file/md/enclosure/tip/vue-tippy.md","filePath":"public/static/_file/md/enclosure/tip/vue-tippy.md"}'),t={name:"public/static/_file/md/enclosure/tip/vue-tippy.md"},e=p(`<h2 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>npm install --save vue-tippy</span></span></code></pre></div><h2 id="注册-版本-vue-tippy-4-7-2" tabindex="-1">注册(版本：&quot;vue-tippy&quot;: &quot;4.7.2&quot;,) <a class="header-anchor" href="#注册-版本-vue-tippy-4-7-2" aria-label="Permalink to &quot;注册(版本：&quot;vue-tippy&quot;: &quot;4.7.2&quot;,)&quot;">​</a></h2><p>在plugins文件加中新建 base.js 对该组件进配置导入 在 main.js 入口文件中导入这个 base.js 文件</p><h2 id="vue2-base-js配置如下-版本-vue-tippy-4-7-2" tabindex="-1">vue2 base.js配置如下(版本：&quot;vue-tippy&quot;: &quot;4.7.2&quot;,) <a class="header-anchor" href="#vue2-base-js配置如下-版本-vue-tippy-4-7-2" aria-label="Permalink to &quot;vue2 base.js配置如下(版本：&quot;vue-tippy&quot;: &quot;4.7.2&quot;,)&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>import Vue from &#39;vue&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import VueTippy, { TippyComponent } from &#39;vue-tippy&#39;</span></span>
<span class="line"><span>import &#39;tippy.js/themes/light.css&#39;</span></span>
<span class="line"><span>import &#39;tippy.js/themes/light-border.css&#39;</span></span>
<span class="line"><span>import &#39;tippy.js/themes/google.css&#39;</span></span>
<span class="line"><span>import &#39;tippy.js/themes/translucent.css&#39;</span></span>
<span class="line"><span>Vue.use(VueTippy, {</span></span>
<span class="line"><span>    arrow: true, // 是否有箭头</span></span>
<span class="line"><span>    maxWidth: 500, // 悬浮框最大宽度</span></span>
<span class="line"><span>    boundary: &#39;viewport&#39;,</span></span>
<span class="line"><span>    onShow: (options) =&gt; {</span></span>
<span class="line"><span>        return !!options.props.content</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span>// Vue.use(VueTippy)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Vue.component(&#39;tippy&#39;, TippyComponent)</span></span></code></pre></div><h2 id="配置-版本-vue-tippy-6-4-1" tabindex="-1">配置（版本：&quot;vue-tippy&quot;: &quot;^6.4.1&quot;,） <a class="header-anchor" href="#配置-版本-vue-tippy-6-4-1" aria-label="Permalink to &quot;配置（版本：&quot;vue-tippy&quot;: &quot;^6.4.1&quot;,）&quot;">​</a></h2><p>主题配置待研究</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>import type { App } from &#39;vue&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// vue-tippy插件</span></span>
<span class="line"><span>import VueTippy from &#39;vue-tippy&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export function setupBaseComponents(app: App&lt;Element&gt;) {</span></span>
<span class="line"><span>    app.use(VueTippy);</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="tippy的使用" tabindex="-1">tippy的使用 <a class="header-anchor" href="#tippy的使用" aria-label="Permalink to &quot;tippy的使用&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>    &lt;div style=&quot;padding-bottom: 40px;&quot;&gt;</span></span>
<span class="line"><span>        &lt;div v-tippy content=&quot;I&#39;m a Tippy tooltip!&quot;&gt;</span></span>
<span class="line"><span>            tippy 悬浮提示: 悬浮信息写在标签内部;</span></span>
<span class="line"><span>        &lt;/div&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>        &lt;!-- placement 指定悬浮信息的位置， theme指定背景主题颜色 --&gt;</span></span>
<span class="line"><span>        &lt;tippy placement=&quot;right&quot; theme=&quot;light&quot; style=&quot;display: inline-block; margin-top: 5px;&quot;&gt;</span></span>
<span class="line"><span>            &lt;!-- #trigger 指定唯一性，不然可能会出现不可预期的错位 --&gt;</span></span>
<span class="line"><span>            &lt;template #trigger&gt;</span></span>
<span class="line"><span>                &lt;label style=&quot;margin: 0 10px 40px;&quot;&gt;</span></span>
<span class="line"><span>                    &lt;!-- &lt;img src=&quot;@/assets/images/help.png&quot;&gt; --&gt;</span></span>
<span class="line"><span>                    tippy 悬浮提示: 悬浮信息写在标签中</span></span>
<span class="line"><span>                &lt;/label&gt;</span></span>
<span class="line"><span>            &lt;/template&gt;</span></span>
<span class="line"><span>            &lt;div style=&quot;text-align: left; padding: 10px;&quot;&gt;</span></span>
<span class="line"><span>                &lt;span&gt;数据说明：&lt;/span&gt;</span></span>
<span class="line"><span>                &lt;ul&gt;</span></span>
<span class="line"><span>                    &lt;li&gt;1、FDR(true positive rate ,TPR) 表示有多少比例的故障盘被成功地提前预测到。描述的是故障预测的覆盖率&lt;/li&gt;</span></span>
<span class="line"><span>                    &lt;li&gt;2、FAR(false positive rate, FPR)计算的是分类器错认为正类的负实例占所有负实例的比例，表示正常盘被误报为故障盘的比例&lt;/li&gt;</span></span>
<span class="line"><span>                    &lt;li&gt;3、AUC（Area Under Curve)为ROC曲线与x轴部分的积分值，通常这个值大于0.5小于1&lt;/li&gt;</span></span>
<span class="line"><span>                    &lt;li&gt;4、FNR（false negative rate）表示实际的故障盘没有被预测到，漏报率&lt;/li&gt;</span></span>
<span class="line"><span>                    &lt;li&gt;5、F值：Fβ Score是 precision 和 FDR的调和平均值，接近两者中的最小值，可以通过F值来评测模型性能&lt;/li&gt;</span></span>
<span class="line"><span>                    &lt;li&gt;6、ACC(Accuracy)表示正常盘和故障盘分别被正确预测的概率，描述的是预测的准确率&lt;/li&gt;</span></span>
<span class="line"><span>                    &lt;li&gt;7、precision 表示有多少比例的故障告警得到了应验（被告警的盘发生了故障），描述的是故障预测的精确率&lt;/li&gt;</span></span>
<span class="line"><span>                    &lt;li&gt;8、FAR(false positive rate, FPR)，计算的是分类器错认为正类的负实例占所有负实例的比例，表示正常盘被误报为故障盘的比例&lt;/li&gt;</span></span>
<span class="line"><span>                    &lt;li&gt;9、FAR(false positive rate, FPR)，计算的是分类器错认为正类的负实例占所有负实例的比例，表示正常盘被误报为故障盘的比例&lt;/li&gt;</span></span>
<span class="line"><span>                &lt;/ul&gt;</span></span>
<span class="line"><span>            &lt;/div&gt;</span></span>
<span class="line"><span>        &lt;/tippy&gt;</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>使用可参考网址：https://madewith.cn/14</span></span>
<span class="line"><span></span></span>
<span class="line"><span>1. 首先执行 npm install --save vue-tippy 安装插件</span></span>
<span class="line"><span>2. 在plugins文件加中新建 base.js 对该组件进配置导入</span></span>
<span class="line"><span>3. 在 main.js 入口文件中导入这个 base.js 文件</span></span>
<span class="line"><span>4. 配置如下</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import Vue from &#39;vue&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import VueTippy, { TippyComponent } from &#39;vue-tippy&#39;</span></span>
<span class="line"><span>import &#39;tippy.js/themes/light.css&#39;</span></span>
<span class="line"><span>import &#39;tippy.js/themes/light-border.css&#39;</span></span>
<span class="line"><span>import &#39;tippy.js/themes/google.css&#39;</span></span>
<span class="line"><span>import &#39;tippy.js/themes/translucent.css&#39;</span></span>
<span class="line"><span>Vue.use(VueTippy, {</span></span>
<span class="line"><span>    arrow: true, // 是否有箭头</span></span>
<span class="line"><span>    maxWidth: 500, // 悬浮框最大宽度</span></span>
<span class="line"><span>    boundary: &#39;viewport&#39;,</span></span>
<span class="line"><span>    onShow: (options) =&gt; {</span></span>
<span class="line"><span>        return !!options.props.content</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span>// Vue.use(VueTippy)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Vue.component(&#39;tippy&#39;, TippyComponent)</span></span></code></pre></div><h2 id="v-tippy" tabindex="-1">v-tippy <a class="header-anchor" href="#v-tippy" aria-label="Permalink to &quot;v-tippy&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>    &lt;div style=&quot;padding: 40px;&quot;&gt;</span></span>
<span class="line"><span>        &lt;label for=&quot;&quot;&gt;动态展示鼠标悬浮内容&lt;/label&gt;</span></span>
<span class="line"><span>        &lt;div&gt;</span></span>
<span class="line"><span>            &lt;img v-tippy=&quot;{ placement: &#39;top&#39;, content: {</span></span>
<span class="line"><span>                0: &#39;定时任务中止&#39;,</span></span>
<span class="line"><span>                1: \`下次执行时间：&lt;br&gt;\${taskItem.nextfiretime}\`,</span></span>
<span class="line"><span>                2: &#39;定时任务编辑中&#39;,</span></span>
<span class="line"><span>                3: &#39;定时任务审核中&#39;,</span></span>
<span class="line"><span>                undefined: &#39;创建定时任务&#39;,</span></span>
<span class="line"><span>                &#39;&#39;: &#39;创建定时任务&#39;,</span></span>
<span class="line"><span>                null: &#39;创建定时任务&#39;,</span></span>
<span class="line"><span>            }[taskItem.schedule_status] }&quot; src=&quot;./img/airplane_blue.png&quot;</span></span>
<span class="line"><span>            &gt;</span></span>
<span class="line"><span>        &lt;/div&gt;</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script&gt;</span></span>
<span class="line"><span>export default {</span></span>
<span class="line"><span>    data() {</span></span>
<span class="line"><span>        return {</span></span>
<span class="line"><span>            taskItem: {</span></span>
<span class="line"><span>                nextfiretime: 123,</span></span>
<span class="line"><span>                schedule_status: 1,</span></span>
<span class="line"><span>            },</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&lt;/script&gt;</span></span></code></pre></div>`,13),l=[e];function i(c,o,u,r,g,d){return a(),n("div",null,l)}const v=s(t,[["render",i]]);export{m as __pageData,v as default};
