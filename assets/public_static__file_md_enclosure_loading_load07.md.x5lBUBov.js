import{_ as n,c as s,o as a,U as p}from"./chunks/framework.zpeVKxWT.js";const b=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"public/static/_file/md/enclosure/loading/load07.md","filePath":"public/static/_file/md/enclosure/loading/load07.md"}'),l={name:"public/static/_file/md/enclosure/loading/load07.md"},i=p(`<div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>    &lt;div class=&quot;load-container&quot;&gt;</span></span>
<span class="line"><span>        &lt;div class=&quot;container container1&quot;&gt;</span></span>
<span class="line"><span>            &lt;div class=&quot;circle circle1&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span>            &lt;div class=&quot;circle circle2&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span>            &lt;div class=&quot;circle circle3&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span>            &lt;div class=&quot;circle circle4&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span>        &lt;/div&gt;</span></span>
<span class="line"><span>        &lt;div class=&quot;container container2&quot;&gt;</span></span>
<span class="line"><span>            &lt;div class=&quot;circle circle1&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span>            &lt;div class=&quot;circle circle2&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span>            &lt;div class=&quot;circle circle3&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span>            &lt;div class=&quot;circle circle4&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span>        &lt;/div&gt;</span></span>
<span class="line"><span>        &lt;div class=&quot;container container3&quot;&gt;</span></span>
<span class="line"><span>            &lt;div class=&quot;circle circle1&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span>            &lt;div class=&quot;circle circle2&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span>            &lt;div class=&quot;circle circle3&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span>            &lt;div class=&quot;circle circle4&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span>        &lt;/div&gt;</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script&gt;</span></span>
<span class="line"><span>export default {</span></span>
<span class="line"><span>    name: &quot;load7&quot;,</span></span>
<span class="line"><span>    data() {</span></span>
<span class="line"><span>        return {}</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;style scoped lang=&quot;scss&quot;&gt;</span></span>
<span class="line"><span>.load-container {</span></span>
<span class="line"><span>    margin: 50px auto;</span></span>
<span class="line"><span>    width: 48px;</span></span>
<span class="line"><span>    height: 48px;</span></span>
<span class="line"><span>    position: relative;</span></span>
<span class="line"><span>    .container{</span></span>
<span class="line"><span>        position: absolute;</span></span>
<span class="line"><span>        width: 100%;</span></span>
<span class="line"><span>        height: 100%;</span></span>
<span class="line"><span>        .circle{</span></span>
<span class="line"><span>            width: 12px;</span></span>
<span class="line"><span>            height: 12px;</span></span>
<span class="line"><span>            background-color: #00adb5;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            border-radius: 100%;</span></span>
<span class="line"><span>            position: absolute;</span></span>
<span class="line"><span>            -webkit-animation: bouncedelay 1.2s infinite ease-in-out;</span></span>
<span class="line"><span>            animation: bouncedelay 1.2s infinite ease-in-out;</span></span>
<span class="line"><span>            -webkit-animation-fill-mode: both;</span></span>
<span class="line"><span>            animation-fill-mode: both;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        .circle1 { top: 0; left: 0; }</span></span>
<span class="line"><span>        .circle2 { top: 0; right: 0; }</span></span>
<span class="line"><span>        .circle3 { right: 0; bottom: 0; }</span></span>
<span class="line"><span>        .circle4 { left: 0; bottom: 0; }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    .container1 {</span></span>
<span class="line"><span>        .circle2 {</span></span>
<span class="line"><span>            -webkit-animation-delay: -0.9s;</span></span>
<span class="line"><span>            animation-delay: -0.9s;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        .circle3 {</span></span>
<span class="line"><span>            -webkit-animation-delay: -0.6s;</span></span>
<span class="line"><span>            animation-delay: -0.6s;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        .circle4 {</span></span>
<span class="line"><span>            -webkit-animation-delay: -0.3s;</span></span>
<span class="line"><span>            animation-delay: -0.3s;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    .container2 {</span></span>
<span class="line"><span>        -webkit-transform: rotateZ(45deg);</span></span>
<span class="line"><span>        transform: rotateZ(45deg);</span></span>
<span class="line"><span>        .circle1 {</span></span>
<span class="line"><span>            -webkit-animation-delay: -1.1s;</span></span>
<span class="line"><span>            animation-delay: -1.1s;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        .circle2 {</span></span>
<span class="line"><span>            -webkit-animation-delay: -0.8s;</span></span>
<span class="line"><span>            animation-delay: -0.8s;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        .circle3 {</span></span>
<span class="line"><span>            -webkit-animation-delay: -0.5s;</span></span>
<span class="line"><span>            animation-delay: -0.5s;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        .circle4 {</span></span>
<span class="line"><span>            -webkit-animation-delay: -0.2s;</span></span>
<span class="line"><span>            animation-delay: -0.2s;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    .container3 {</span></span>
<span class="line"><span>        -webkit-transform: rotateZ(90deg);</span></span>
<span class="line"><span>        transform: rotateZ(90deg);</span></span>
<span class="line"><span>        .circle1 {</span></span>
<span class="line"><span>            -webkit-animation-delay: -1.0s;</span></span>
<span class="line"><span>            animation-delay: -1.0s;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        .circle2 {</span></span>
<span class="line"><span>            -webkit-animation-delay: -0.7s;</span></span>
<span class="line"><span>            animation-delay: -0.7s;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        .circle3 {</span></span>
<span class="line"><span>            -webkit-animation-delay: -0.4s;</span></span>
<span class="line"><span>            animation-delay: -0.4s;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        .circle4 {</span></span>
<span class="line"><span>            -webkit-animation-delay: -0.1s;</span></span>
<span class="line"><span>            animation-delay: -0.1s;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@-webkit-keyframes bouncedelay {</span></span>
<span class="line"><span>  0%, 80%, 100% { -webkit-transform: scale(0.0) }</span></span>
<span class="line"><span>  40% { -webkit-transform: scale(1.0) }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@keyframes bouncedelay {</span></span>
<span class="line"><span>  0%, 80%, 100% {</span></span>
<span class="line"><span>    transform: scale(0.0);</span></span>
<span class="line"><span>    -webkit-transform: scale(0.0);</span></span>
<span class="line"><span>  } 40% {</span></span>
<span class="line"><span>    transform: scale(1.0);</span></span>
<span class="line"><span>    -webkit-transform: scale(1.0);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&lt;/style&gt;</span></span></code></pre></div>`,1),e=[i];function c(t,o,r,d,u,g){return a(),s("div",null,e)}const v=n(l,[["render",c]]);export{b as __pageData,v as default};
