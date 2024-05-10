import{_ as s,c as n,o as a,U as p}from"./chunks/framework.FpOEJISx.js";const _=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"public/static/_file/md/demo/tip/elTip.md","filePath":"public/static/_file/md/demo/tip/elTip.md"}'),l={name:"public/static/_file/md/demo/tip/elTip.md"},t=p(`<div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>    &lt;div&gt;</span></span>
<span class="line"><span>        &lt;el-tooltip</span></span>
<span class="line"><span>            class=&quot;box-item&quot;</span></span>
<span class="line"><span>            effect=&quot;dark&quot;</span></span>
<span class="line"><span>            content=&quot;Top Left prompts info&quot;</span></span>
<span class="line"><span>            placement=&quot;top-start&quot;</span></span>
<span class="line"><span>        &gt;</span></span>
<span class="line"><span>            &lt;el-button&gt;top-start&lt;/el-button&gt;</span></span>
<span class="line"><span>        &lt;/el-tooltip&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        &lt;!-- 悬浮信息写在标签中 --&gt;</span></span>
<span class="line"><span>        &lt;el-tooltip placement=&quot;top&quot;&gt;</span></span>
<span class="line"><span>            &lt;label style=&quot;margin: 0 10px 40px;&quot;&gt;</span></span>
<span class="line"><span>                悬浮提示: 悬浮信息写在标签中</span></span>
<span class="line"><span>            &lt;/label&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            &lt;template #content&gt;</span></span>
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
<span class="line"><span>            &lt;/template&gt;</span></span>
<span class="line"><span>        &lt;/el-tooltip&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        &lt;!-- 动态展示鼠标悬浮内容 --&gt;</span></span>
<span class="line"><span>        &lt;el-tooltip :content=&quot;{</span></span>
<span class="line"><span>            0: &#39;定时任务中止&#39;,</span></span>
<span class="line"><span>            1: \`下次执行时间: \${taskItem.nextfiretime}\`,</span></span>
<span class="line"><span>            2: &#39;定时任务编辑中&#39;,</span></span>
<span class="line"><span>            3: &#39;定时任务审核中&#39;,</span></span>
<span class="line"><span>            undefined: &#39;创建定时任务&#39;,</span></span>
<span class="line"><span>            &#39;&#39;: &#39;创建定时任务&#39;,</span></span>
<span class="line"><span>            null: &#39;创建定时任务&#39;,</span></span>
<span class="line"><span>        }[taskItem.schedule_status]&quot;&gt;</span></span>
<span class="line"><span>            &lt;img src=&quot;./img/airplane_blue.png&quot; alt=&quot;&quot;&gt;</span></span>
<span class="line"><span>        &lt;/el-tooltip&gt;</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script&gt;</span></span>
<span class="line"><span>import { defineComponent, reactive, ref } from &#39;vue&#39;</span></span>
<span class="line"><span>import { ElButton, ElTooltip } from &#39;element-plus&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export default defineComponent({</span></span>
<span class="line"><span>    components: {</span></span>
<span class="line"><span>        ElButton,</span></span>
<span class="line"><span>        ElTooltip,</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    setup() {</span></span>
<span class="line"><span>        const taskItem = reactive({</span></span>
<span class="line"><span>            nextfiretime: 123,</span></span>
<span class="line"><span>            schedule_status: 1,</span></span>
<span class="line"><span>        })</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        return {</span></span>
<span class="line"><span>            taskItem</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span>&lt;/script&gt;</span></span></code></pre></div>`,1),e=[t];function i(c,o,r,g,u,m){return a(),n("div",null,e)}const f=s(l,[["render",i]]);export{_ as __pageData,f as default};
