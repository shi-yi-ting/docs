import{_ as s,c as n,o as a,U as p}from"./chunks/framework.zpeVKxWT.js";const m=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"public/static/_file/md/demo/DOM/canvas.md","filePath":"public/static/_file/md/demo/DOM/canvas.md"}'),l={name:"public/static/_file/md/demo/DOM/canvas.md"},e=p(`<div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>    &lt;div&gt;</span></span>
<span class="line"><span>        &lt;div&gt;</span></span>
<span class="line"><span>            &lt;div&gt;这里只是做了点击画布获取坐标点&lt;/div&gt;</span></span>
<span class="line"><span>            &lt;div class=&quot;content&quot;&gt;</span></span>
<span class="line"><span>                &lt;span&gt;鼠标点击坐标：x({{ canvasX }}), y({{ canvasY }})&lt;/span&gt;</span></span>
<span class="line"><span>                &lt;div id=&quot;video&quot; class=&quot;hrtc-video-theme&quot; style=&quot;width: 100%; height: 100%;&quot;&gt;</span></span>
<span class="line"><span>                    &lt;div class=&quot;sign-canvas&quot;&gt;</span></span>
<span class="line"><span>                        &lt;canvas id=&quot;canvas&quot; ref=&quot;canvas&quot; style=&quot;background: black&quot; @mousedown=&quot;canvasDown($event)&quot;&gt;你的浏览器不支持canvas&lt;/canvas&gt;</span></span>
<span class="line"><span>                    &lt;/div&gt;</span></span>
<span class="line"><span>                &lt;/div&gt;</span></span>
<span class="line"><span>            &lt;/div&gt;</span></span>
<span class="line"><span>        &lt;/div&gt;</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script&gt;</span></span>
<span class="line"><span>import $ from &#39;jquery&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export default {</span></span>
<span class="line"><span>    data() {</span></span>
<span class="line"><span>        return {</span></span>
<span class="line"><span>            TOP_HEAD_HEIGHT: 50,</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            canvasX: &#39;&#39;,</span></span>
<span class="line"><span>            canvasY: &#39;&#39;,</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    methods: {</span></span>
<span class="line"><span>        drawing() {</span></span>
<span class="line"><span>            // 初始化准备画笔</span></span>
<span class="line"><span>            this.ctx = this.$refs.canvas.getContext(&#39;2d&#39;)</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        canvasDown(e) {</span></span>
<span class="line"><span>            // console.log(e)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            const canvasX = e.clientX - e.target.offsetLeft + document.documentElement.scrollLeft</span></span>
<span class="line"><span>            const canvasY = e.clientY - e.target.offsetTop + document.documentElement.scrollTop - this.TOP_HEAD_HEIGHT</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            this.canvasX = canvasX</span></span>
<span class="line"><span>            this.canvasY = canvasY</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            // console.log(&#39;canvasX&#39;, canvasX)</span></span>
<span class="line"><span>            // console.log(&#39;canvasY&#39;, canvasY)</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        showDrawing() {</span></span>
<span class="line"><span>            this.drawing()</span></span>
<span class="line"><span>            const videoWidth = Number($(&#39;#video&#39;).width())</span></span>
<span class="line"><span>            const videoHeight = Number($(&#39;#video&#39;).height())</span></span>
<span class="line"><span>            // console.log(&#39;videoWidth&#39;, videoWidth)</span></span>
<span class="line"><span>            // console.log(&#39;videoHeight&#39;, videoHeight)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            // 加上单位</span></span>
<span class="line"><span>            $(&#39;#video&#39;).css({</span></span>
<span class="line"><span>                width: \`\${videoWidth}px\`,</span></span>
<span class="line"><span>                height: \`\${videoHeight}px\`,</span></span>
<span class="line"><span>            })</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            $(&#39;#canvas&#39;).attr(&#39;width&#39;, this.videoWidth)</span></span>
<span class="line"><span>            $(&#39;#canvas&#39;).attr(&#39;height&#39;, this.videoHeight)</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    mounted() {</span></span>
<span class="line"><span>        this.showDrawing()</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;style scoped&gt;</span></span>
<span class="line"><span>.hrtc-video-theme #local_stream {</span></span>
<span class="line"><span>    position: relative;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>.hrtc-video-theme #local_video_info {</span></span>
<span class="line"><span>    position: absolute;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>.hrtc-video-theme .video-view {</span></span>
<span class="line"><span>    position: relative;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>.hrtc-video-theme .video-view,</span></span>
<span class="line"><span>.hrtc-video-theme .video-placeholder,</span></span>
<span class="line"><span>.hrtc-video-theme #local_stream,</span></span>
<span class="line"><span>.hrtc-video-theme #local_video_info {</span></span>
<span class="line"><span>    width: auto;</span></span>
<span class="line"><span>    height: auto;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>.hrtc-video-theme .video-profile {</span></span>
<span class="line"><span>    position: absolute;</span></span>
<span class="line"><span>    top: 0;</span></span>
<span class="line"><span>    left: 0;</span></span>
<span class="line"><span>    display: block;</span></span>
<span class="line"><span>    width: 100%;</span></span>
<span class="line"><span>    font-size: 10px;</span></span>
<span class="line"><span>    color: #fff;</span></span>
<span class="line"><span>    opacity: 0.9;</span></span>
<span class="line"><span>    text-shadow: black 0.1em 0.1em 0.2em;</span></span>
<span class="line"><span>    z-index: 2;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>.hrtc-video-theme .video-grid {</span></span>
<span class="line"><span>    display: grid;</span></span>
<span class="line"><span>    grid-gap: 20px;</span></span>
<span class="line"><span>    grid-template-columns: repeat(2, auto);</span></span>
<span class="line"><span>    grid-template-rows: auto;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>.hrtc-video-theme .autoplay-fallback {</span></span>
<span class="line"><span>    position: absolute;</span></span>
<span class="line"><span>    width: 100%;</span></span>
<span class="line"><span>    height: 100%;</span></span>
<span class="line"><span>    top: 0;</span></span>
<span class="line"><span>    display: block;</span></span>
<span class="line"><span>    cursor: pointer;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>.content {</span></span>
<span class="line"><span>    font-family: Avenir, Helvetica, Arial, sans-serif;</span></span>
<span class="line"><span>    -webkit-font-smoothing: antialiased;</span></span>
<span class="line"><span>    -moz-osx-font-smoothing: grayscale;</span></span>
<span class="line"><span>    color: #2c3e50;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    margin-top: 10px;</span></span>
<span class="line"><span>    /* padding: 30px; */</span></span>
<span class="line"><span>    /* text-align: center; */</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&lt;/style&gt;</span></span></code></pre></div>`,1),i=[e];function t(c,o,d,v,h,r){return a(),n("div",null,i)}const u=s(l,[["render",t]]);export{m as __pageData,u as default};
