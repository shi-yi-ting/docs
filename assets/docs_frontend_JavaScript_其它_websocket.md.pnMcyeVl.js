import{_ as s,c as n,o as a,U as p}from"./chunks/framework.FpOEJISx.js";const g=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"docs/frontend/JavaScript/其它/websocket.md","filePath":"docs/frontend/JavaScript/其它/websocket.md"}'),e={name:"docs/frontend/JavaScript/其它/websocket.md"},l=p(`<h2 id="什么是websocket" tabindex="-1">什么是WebSocket <a class="header-anchor" href="#什么是websocket" aria-label="Permalink to &quot;什么是WebSocket&quot;">​</a></h2><p>WebSocket 是 HTML5 开始提供的一种在单个 TCP 连接上进行全双工通讯的协议,它支持服务端主动给客户端发送消息。</p><p>在 WebSocket 出现之前,我们要获取服务端的数据只能通过 客户端向服务端发送请求,服务端接到请求后返回数据,</p><p>但是这样有一个很明显的缺点就是那些需要 频繁接收数据 的场景就需要不断的向服务端发送请求.</p><p>比如聊天室,实时天气等, 以前的方法就是&quot;轮询&quot;,意思就是每隔一段时间,发送一次请求.这样就会有两个很明显的弊端.</p><p>一是非常浪费资源,二是做不到真正的实时刷新 WebSocket 的出现很好的解决了这个问题.</p><h2 id="websocket-创建" tabindex="-1">WebSocket 创建 <a class="header-anchor" href="#websocket-创建" aria-label="Permalink to &quot;WebSocket 创建&quot;">​</a></h2><p>WebSocket 对象作为一个构造函数，用于新建 WebSocket 实例。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;script&gt;</span></span>
<span class="line"><span>import { defineComponent, onMounted, reactive } from &#39;@vue/composition-api&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export default defineComponent({</span></span>
<span class="line"><span>    setup() {</span></span>
<span class="line"><span>        const ws = reactive({</span></span>
<span class="line"><span>            websock: &#39;&#39;,</span></span>
<span class="line"><span>        })</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 连接服务器成功</span></span>
<span class="line"><span>        const websocketonopen = () =&gt; {</span></span>
<span class="line"><span>            console.log(&#39;连接服务器成功&#39;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            // 心跳保活</span></span>
<span class="line"><span>            this.websock.send(JSON.stringify({ msgId: 1, message: &#39;ping&#39; }))</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            // 向服务器发送消息</span></span>
<span class="line"><span>            this.websock.send(&#39;来自客户端的消息&#39;)</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        // 接收服务器的消息</span></span>
<span class="line"><span>        const websocketonmessage = (e) =&gt; {</span></span>
<span class="line"><span>            let message = &#39;message:&#39; + e.data + &#39;&#39;</span></span>
<span class="line"><span>            console.log(message)</span></span>
<span class="line"><span>            // document.getElementById(&#39;test&#39;).innerHTML = message</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        // 连接出错</span></span>
<span class="line"><span>        const websocketonerror = () =&gt; {</span></span>
<span class="line"><span>            console.log(&#39;连接出错&#39;)</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        // 服务器关闭</span></span>
<span class="line"><span>        const websocketclose = () =&gt; {</span></span>
<span class="line"><span>            console.log(&#39;服务器关闭&#39;)</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 数据发送</span></span>
<span class="line"><span>        const websocketsend = () =&gt; {</span></span>
<span class="line"><span>            ws.websock.send(&#39;{msgId: 1, message: &quot;ping&quot; }&#39;)</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 初始化weosocket</span></span>
<span class="line"><span>        const initWebSocket = () =&gt; {</span></span>
<span class="line"><span>            ws.websock = new WebSocket(&#39;ws://localhost:8666&#39;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            ws.websock.onopen = websocketonopen // 连接服务器成功</span></span>
<span class="line"><span>            ws.websock.onmessage = websocketonmessage // 接收服务器的消息</span></span>
<span class="line"><span>            ws.websock.onerror = websocketonerror</span></span>
<span class="line"><span>            ws.websock.onclose = websocketclose</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        onMounted(() =&gt; {</span></span>
<span class="line"><span>            setInterval(() =&gt; {</span></span>
<span class="line"><span>                if (ws.websock) {</span></span>
<span class="line"><span>                    ws.websock.send(&#39;{ msgId: 1, message: &quot;ping&quot; }&#39;)</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>            }, 10000)</span></span>
<span class="line"><span>        })</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>        return {</span></span>
<span class="line"><span>            ws,</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span>&lt;script&gt;</span></span></code></pre></div>`,9),c=[l];function o(t,i,r,d,b,k){return a(),n("div",null,c)}const m=s(e,[["render",o]]);export{g as __pageData,m as default};
