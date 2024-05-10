import{_ as s,c as n,o as a,U as p}from"./chunks/framework.FpOEJISx.js";const q=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"public/static/_file/md/demo/DOM/media.md","filePath":"public/static/_file/md/demo/DOM/media.md"}'),l={name:"public/static/_file/md/demo/DOM/media.md"},e=p(`<h2 id="音频" tabindex="-1">音频 <a class="header-anchor" href="#音频" aria-label="Permalink to &quot;音频&quot;">​</a></h2><h3 id="简易使用" tabindex="-1">简易使用 <a class="header-anchor" href="#简易使用" aria-label="Permalink to &quot;简易使用&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>    &lt;div @click=&quot;autoPlay&quot;&gt;</span></span>
<span class="line"><span>        &lt;div&gt;</span></span>
<span class="line"><span>            &lt;!-- &lt;audio src=&quot;media/snow.mp3&quot; controls=&quot;controls&quot; controls：控件&gt;&lt;/audio&gt; --&gt;</span></span>
<span class="line"><span>            &lt;!-- &lt;audio src=&quot;./media/snow.mp3&quot; autoplay loop hidden&gt;&lt;/audio&gt; hidden: 隐藏 --&gt;</span></span>
<span class="line"><span>            &lt;!-- &lt;audio src=&quot;./media/snow.mp3&quot; autoplay loop hidden muted&gt;&lt;/audio&gt; muted：静音 --&gt;</span></span>
<span class="line"><span>            &lt;audio id=&quot;audio&quot; ref=&quot;audioRef&quot; controls=&quot;controls&quot; loop&gt;</span></span>
<span class="line"><span>                &lt;source src=&quot;./media/snow.mp3&quot; type=&quot;audio/mpeg&quot; /&gt;</span></span>
<span class="line"><span>                &lt;!-- &lt;source src=&quot;media/snow.ogg&quot; type=&quot;audio/ogg&quot; /&gt; --&gt;</span></span>
<span class="line"><span>                您的浏览器不支持播放声音</span></span>
<span class="line"><span>            &lt;/audio&gt;</span></span>
<span class="line"><span>        &lt;/div&gt;</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script&gt;</span></span>
<span class="line"><span>import { defineComponent, onMounted, nextTick, ref } from &#39;vue&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export default defineComponent({</span></span>
<span class="line"><span>    setup() {</span></span>
<span class="line"><span>        function handleMusic() {</span></span>
<span class="line"><span>            const audioRef = ref(null)</span></span>
<span class="line"><span>            const autoPlay = () =&gt; {</span></span>
<span class="line"><span>                let music = document.getElementById(&#39;audio&#39;)</span></span>
<span class="line"><span>                music.play()</span></span>
<span class="line"><span>                // if (music.paused) { // 判断是否播放</span></span>
<span class="line"><span>                //     music.paused = false</span></span>
<span class="line"><span>                //     music.play()</span></span>
<span class="line"><span>                // }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                // audioRef.value.play()</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            // setTimeout(() =&gt; {</span></span>
<span class="line"><span>            //     autoPlay</span></span>
<span class="line"><span>            // }, 500)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            onMounted(() =&gt; {</span></span>
<span class="line"><span>                nextTick(() =&gt; {</span></span>
<span class="line"><span>                    // let box = document.getElementById(&#39;box&#39;)</span></span>
<span class="line"><span>                    // box.click()</span></span>
<span class="line"><span>                    // autoPlay()</span></span>
<span class="line"><span>                    // // let music = document.getElementById(&#39;audio&#39;)</span></span>
<span class="line"><span>                    // // music.click()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                    setTimeout(() =&gt; {</span></span>
<span class="line"><span>                        autoPlay</span></span>
<span class="line"><span>                    }, 500)</span></span>
<span class="line"><span>                })</span></span>
<span class="line"><span>            })</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            return { audioRef, autoPlay }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        return {</span></span>
<span class="line"><span>            ...handleMusic()</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span>&lt;/script&gt;</span></span></code></pre></div><h3 id="音频-隐藏控件图标旋转" tabindex="-1">音频-隐藏控件图标旋转 <a class="header-anchor" href="#音频-隐藏控件图标旋转" aria-label="Permalink to &quot;音频-隐藏控件图标旋转&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>    &lt;div id=&quot;box&quot; @click=&quot;autoPlay&quot;&gt;</span></span>
<span class="line"><span>        &lt;div&gt;</span></span>
<span class="line"><span>            &lt;div&gt;</span></span>
<span class="line"><span>                &lt;div v-show=&quot;isMusicIcon&quot; class=&quot;img-box&quot;&gt;</span></span>
<span class="line"><span>                    &lt;img ref=&quot;imgRef&quot; :class=&quot;{ rotate: playStatus }&quot; src=&quot;https://storage.beta.custouch.com/res/8080/music.png&quot; @click.stop=&quot;controlMusic&quot; /&gt;</span></span>
<span class="line"><span>                &lt;/div&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                &lt;audio id=&quot;audio&quot; ref=&quot;audioRef&quot; controls=&quot;controls&quot; loop autoplay hidden&gt;</span></span>
<span class="line"><span>                    &lt;source src=&quot;./media/snow.mp3&quot; type=&quot;audio/mpeg&quot; /&gt;</span></span>
<span class="line"><span>                    您的浏览器不支持 audio 标签。</span></span>
<span class="line"><span>                &lt;/audio&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                &lt;!-- &lt;audio id=&quot;audio&quot; ref=&quot;audioRef&quot; src=&quot;./media/snow.mp3&quot; loop autoplay&gt;</span></span>
<span class="line"><span>                    您的浏览器不支持 audio 标签。</span></span>
<span class="line"><span>                &lt;/audio&gt; --&gt;</span></span>
<span class="line"><span>            &lt;/div&gt;</span></span>
<span class="line"><span>        &lt;/div&gt;</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script&gt;</span></span>
<span class="line"><span>import { defineComponent, onMounted, nextTick, ref } from &#39;vue&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export default defineComponent({</span></span>
<span class="line"><span>    setup() {</span></span>
<span class="line"><span>        function useMusic() {</span></span>
<span class="line"><span>            // 音乐播放</span></span>
<span class="line"><span>            const isMusicIcon = ref(false)</span></span>
<span class="line"><span>            const audioRef = ref(null)</span></span>
<span class="line"><span>            const imgRef = ref(null)</span></span>
<span class="line"><span>            let playStatus = ref(false)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            const musicImg = ref({</span></span>
<span class="line"><span>                play: &#39;https://storage.beta.custouch.com/res/8080/music.png&#39;,</span></span>
<span class="line"><span>                pause: &#39;https://storage.beta.custouch.com/res/8082/stopMusic.png&#39;,</span></span>
<span class="line"><span>            })</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            const controlMusic = () =&gt; {</span></span>
<span class="line"><span>                if (audioRef.value &amp;&amp; imgRef.value) {</span></span>
<span class="line"><span>                    if (playStatus.value) {</span></span>
<span class="line"><span>                        audioRef.value.pause()</span></span>
<span class="line"><span>                        imgRef.value.src = musicImg.value.pause</span></span>
<span class="line"><span>                    } else {</span></span>
<span class="line"><span>                        audioRef.value.play()</span></span>
<span class="line"><span>                        imgRef.value.src = musicImg.value.play</span></span>
<span class="line"><span>                    }</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>                playStatus.value = !playStatus.value</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            // 用户无感自动播放</span></span>
<span class="line"><span>            const autoPlay = () =&gt; {</span></span>
<span class="line"><span>            // 点击 事先将交互事件绑定到document元素上在用户不知情并且很自然的情况下，完成交互</span></span>
<span class="line"><span>                document.addEventListener(&#39;click&#39;, () =&gt; {</span></span>
<span class="line"><span>                    document.querySelector(&#39;audio&#39;).play()</span></span>
<span class="line"><span>                    isMusicIcon.value = true</span></span>
<span class="line"><span>                    playStatus.value = true</span></span>
<span class="line"><span>                }, { once: true }) // once: true表示只是触发一次</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            // // 监听鼠标移动的事件,自动播放音乐</span></span>
<span class="line"><span>            // let music = document.getElementById(&#39;audio&#39;)</span></span>
<span class="line"><span>            // music.addEventListener(&#39;mousemove&#39;, () =&gt; {</span></span>
<span class="line"><span>            //     document.querySelector(&#39;audio&#39;).play()</span></span>
<span class="line"><span>            // })</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            onMounted(() =&gt; {</span></span>
<span class="line"><span>                nextTick(() =&gt; {</span></span>
<span class="line"><span>                    autoPlay()</span></span>
<span class="line"><span>                })</span></span>
<span class="line"><span>            })</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            return { isMusicIcon, audioRef, imgRef, playStatus, controlMusic }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        return {</span></span>
<span class="line"><span>            ...useMusic(),</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;style lang=&quot;less&quot; scoped&gt;</span></span>
<span class="line"><span>// music</span></span>
<span class="line"><span>// 元素持续旋转关键帧</span></span>
<span class="line"><span>@keyframes rotation {</span></span>
<span class="line"><span>    from {</span></span>
<span class="line"><span>        transform: rotate(0deg);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    to {</span></span>
<span class="line"><span>        transform: rotate(360deg);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>.img-box {</span></span>
<span class="line"><span>    position: fixed;</span></span>
<span class="line"><span>    right: 46px;</span></span>
<span class="line"><span>    bottom: 46px;</span></span>
<span class="line"><span>    z-index: 99;</span></span>
<span class="line"><span>    width: 27px;</span></span>
<span class="line"><span>    height: 27px;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    img {</span></span>
<span class="line"><span>        width: 100%;</span></span>
<span class="line"><span>        height: 100%;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 旋转类</span></span>
<span class="line"><span>.rotate {</span></span>
<span class="line"><span>    animation: rotation 3s linear infinite;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&lt;/style&gt;</span></span></code></pre></div><h2 id="视频" tabindex="-1">视频 <a class="header-anchor" href="#视频" aria-label="Permalink to &quot;视频&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>    &lt;div&gt;</span></span>
<span class="line"><span>        &lt;!-- &lt;video src=&quot;media/video.mp4&quot; controls=&quot;controls&quot;&gt;&lt;/video&gt; --&gt;</span></span>
<span class="line"><span>        &lt;!-- 谷歌浏览器把自动播放功能给禁用了 有解决方案： 给视频添加静音属性 --&gt;</span></span>
<span class="line"><span>        &lt;video muted=&quot;muted&quot; loop=&quot;loop&quot; poster=&quot;./media/pic.jpg&quot; controls&gt;</span></span>
<span class="line"><span>            &lt;source src=&quot;./media/video.mp4&quot; type=&quot;video/mp4&quot; /&gt;</span></span>
<span class="line"><span>            &lt;!-- &lt;source src=&quot;media/video.ogg&quot; type=&quot;video/ogg&quot; /&gt; --&gt;</span></span>
<span class="line"><span>            您的浏览器太low了，不支持播放此视频</span></span>
<span class="line"><span>        &lt;/video&gt;</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script&gt;</span></span>
<span class="line"><span>import { defineComponent, onMounted, nextTick, ref } from &#39;vue&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export default defineComponent({</span></span>
<span class="line"><span>    setup() {</span></span>
<span class="line"><span>        return {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;style lang=&quot;less&quot; scoped&gt;</span></span>
<span class="line"><span>video {</span></span>
<span class="line"><span>    width: 300px;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&lt;/style&gt;</span></span></code></pre></div><h2 id="注意-音频" tabindex="-1">注意-音频 <a class="header-anchor" href="#注意-音频" aria-label="Permalink to &quot;注意-音频&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;!-- 注意：在 chrome 浏览器中已经禁用了 autoplay 属性 --&gt;</span></span>
<span class="line"><span>&lt;!-- &lt;audio src=&quot;./media/snow.mp3&quot; controls autoplay&gt;&lt;/audio&gt; --&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;!-- 因为不同浏览器支持不同的格式，所以我们采取的方案是这个音频准备多个文件 --&gt;</span></span>
<span class="line"><span>&lt;audio controls&gt;</span></span>
<span class="line"><span>    &lt;source src=&quot;./media/snow.mp3&quot; type=&quot;audio/mpeg&quot; /&gt;</span></span>
<span class="line"><span>&lt;/audio&gt;</span></span></code></pre></div><h2 id="注意-视频" tabindex="-1">注意-视频 <a class="header-anchor" href="#注意-视频" aria-label="Permalink to &quot;注意-视频&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;!-- &lt;video src=&quot;./media/video.mp4&quot; controls=&quot;controls&quot;&gt;&lt;/video&gt; --&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;!-- 谷歌浏览器禁用了自动播放功能，如果想自动播放，需要添加 muted 属性 --&gt;</span></span>
<span class="line"><span>&lt;video controls=&quot;controls&quot; autoplay muted loop poster=&quot;./media/pig.jpg&quot;&gt;</span></span>
<span class="line"><span>    &lt;source src=&quot;./media/video.mp4&quot; type=&quot;video/mp4&quot;&gt;</span></span>
<span class="line"><span>    &lt;!-- &lt;source src=&quot;./media/video.ogg&quot; type=&quot;video/ogg&quot;&gt; --&gt;</span></span>
<span class="line"><span>&lt;/video&gt;</span></span></code></pre></div><h2 id="多媒体标签总结" tabindex="-1">多媒体标签总结 <a class="header-anchor" href="#多媒体标签总结" aria-label="Permalink to &quot;多媒体标签总结&quot;">​</a></h2><p>音频标签与视频标签使用基本一致</p><p>多媒体标签在不同浏览器下情况不同，存在兼容性问题</p><p>谷歌浏览器把音频和视频标签的自动播放都禁止了</p><p>谷歌浏览器中视频添加 muted 标签可以自己播放</p><p>注意：重点记住使用方法以及自动播放即可，其他属性可以在使用时查找对应的手册</p>`,17),t=[e];function i(o,c,u,d,r,g){return a(),n("div",null,t)}const h=s(l,[["render",i]]);export{q as __pageData,h as default};
