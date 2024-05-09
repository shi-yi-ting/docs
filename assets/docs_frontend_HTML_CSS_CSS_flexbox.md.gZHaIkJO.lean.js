import{c as da,g as fa}from"./chunks/commonjsHelpers.4gQjN7DL.js";import{_ as T,D as ya,o as g,c as _,m as d,F as I,E as P,Q as ra,t as ia,n as _a,a as X,c2 as pa,c3 as ha,b as V,q as O,s as U,U as w,I as $}from"./chunks/framework.zpeVKxWT.js";var oa={exports:{}};(function(o){var c=typeof window<"u"?window:typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope?self:{};/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */var t=function(v){var r=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,E=0,b={},i={manual:v.Prism&&v.Prism.manual,disableWorkerMessageHandler:v.Prism&&v.Prism.disableWorkerMessageHandler,util:{encode:function s(a){return a instanceof k?new k(a.type,s(a.content),a.alias):Array.isArray(a)?a.map(s):a.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(s){return Object.prototype.toString.call(s).slice(8,-1)},objId:function(s){return s.__id||Object.defineProperty(s,"__id",{value:++E}),s.__id},clone:function s(a,e){e=e||{};var n,l;switch(i.util.type(a)){case"Object":if(l=i.util.objId(a),e[l])return e[l];n={},e[l]=n;for(var h in a)a.hasOwnProperty(h)&&(n[h]=s(a[h],e));return n;case"Array":return l=i.util.objId(a),e[l]?e[l]:(n=[],e[l]=n,a.forEach(function(u,p){n[p]=s(u,e)}),n);default:return a}},getLanguage:function(s){for(;s;){var a=r.exec(s.className);if(a)return a[1].toLowerCase();s=s.parentElement}return"none"},setLanguage:function(s,a){s.className=s.className.replace(RegExp(r,"gi"),""),s.classList.add("language-"+a)},currentScript:function(){if(typeof document>"u")return null;if("currentScript"in document&&1<2)return document.currentScript;try{throw new Error}catch(n){var s=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(n.stack)||[])[1];if(s){var a=document.getElementsByTagName("script");for(var e in a)if(a[e].src==s)return a[e]}return null}},isActive:function(s,a,e){for(var n="no-"+a;s;){var l=s.classList;if(l.contains(a))return!0;if(l.contains(n))return!1;s=s.parentElement}return!!e}},languages:{plain:b,plaintext:b,text:b,txt:b,extend:function(s,a){var e=i.util.clone(i.languages[s]);for(var n in a)e[n]=a[n];return e},insertBefore:function(s,a,e,n){n=n||i.languages;var l=n[s],h={};for(var u in l)if(l.hasOwnProperty(u)){if(u==a)for(var p in e)e.hasOwnProperty(p)&&(h[p]=e[p]);e.hasOwnProperty(u)||(h[u]=l[u])}var x=n[s];return n[s]=h,i.languages.DFS(i.languages,function(C,q){q===x&&C!=s&&(this[C]=h)}),h},DFS:function s(a,e,n,l){l=l||{};var h=i.util.objId;for(var u in a)if(a.hasOwnProperty(u)){e.call(a,u,a[u],n||u);var p=a[u],x=i.util.type(p);x==="Object"&&!l[h(p)]?(l[h(p)]=!0,s(p,e,null,l)):x==="Array"&&!l[h(p)]&&(l[h(p)]=!0,s(p,e,u,l))}}},plugins:{},highlightAll:function(s,a){i.highlightAllUnder(document,s,a)},highlightAllUnder:function(s,a,e){var n={callback:e,container:s,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};i.hooks.run("before-highlightall",n),n.elements=Array.prototype.slice.apply(n.container.querySelectorAll(n.selector)),i.hooks.run("before-all-elements-highlight",n);for(var l=0,h;h=n.elements[l++];)i.highlightElement(h,a===!0,n.callback)},highlightElement:function(s,a,e){var n=i.util.getLanguage(s),l=i.languages[n];i.util.setLanguage(s,n);var h=s.parentElement;h&&h.nodeName.toLowerCase()==="pre"&&i.util.setLanguage(h,n);var u=s.textContent,p={element:s,language:n,grammar:l,code:u};function x(q){p.highlightedCode=q,i.hooks.run("before-insert",p),p.element.innerHTML=p.highlightedCode,i.hooks.run("after-highlight",p),i.hooks.run("complete",p),e&&e.call(p.element)}if(i.hooks.run("before-sanity-check",p),h=p.element.parentElement,h&&h.nodeName.toLowerCase()==="pre"&&!h.hasAttribute("tabindex")&&h.setAttribute("tabindex","0"),!p.code){i.hooks.run("complete",p),e&&e.call(p.element);return}if(i.hooks.run("before-highlight",p),!p.grammar){x(i.util.encode(p.code));return}if(a&&v.Worker){var C=new Worker(i.filename);C.onmessage=function(q){x(q.data)},C.postMessage(JSON.stringify({language:p.language,code:p.code,immediateClose:!0}))}else x(i.highlight(p.code,p.grammar,p.language))},highlight:function(s,a,e){var n={code:s,grammar:a,language:e};if(i.hooks.run("before-tokenize",n),!n.grammar)throw new Error('The language "'+n.language+'" has no grammar.');return n.tokens=i.tokenize(n.code,n.grammar),i.hooks.run("after-tokenize",n),k.stringify(i.util.encode(n.tokens),n.language)},tokenize:function(s,a){var e=a.rest;if(e){for(var n in e)a[n]=e[n];delete a.rest}var l=new R;return L(l,l.head,s),H(s,l,a,l.head,0),G(l)},hooks:{all:{},add:function(s,a){var e=i.hooks.all;e[s]=e[s]||[],e[s].push(a)},run:function(s,a){var e=i.hooks.all[s];if(!(!e||!e.length))for(var n=0,l;l=e[n++];)l(a)}},Token:k};v.Prism=i;function k(s,a,e,n){this.type=s,this.content=a,this.alias=e,this.length=(n||"").length|0}k.stringify=function s(a,e){if(typeof a=="string")return a;if(Array.isArray(a)){var n="";return a.forEach(function(x){n+=s(x,e)}),n}var l={type:a.type,content:s(a.content,e),tag:"span",classes:["token",a.type],attributes:{},language:e},h=a.alias;h&&(Array.isArray(h)?Array.prototype.push.apply(l.classes,h):l.classes.push(h)),i.hooks.run("wrap",l);var u="";for(var p in l.attributes)u+=" "+p+'="'+(l.attributes[p]||"").replace(/"/g,"&quot;")+'"';return"<"+l.tag+' class="'+l.classes.join(" ")+'"'+u+">"+l.content+"</"+l.tag+">"};function y(s,a,e,n){s.lastIndex=a;var l=s.exec(e);if(l&&n&&l[1]){var h=l[1].length;l.index+=h,l[0]=l[0].slice(h)}return l}function H(s,a,e,n,l,h){for(var u in e)if(!(!e.hasOwnProperty(u)||!e[u])){var p=e[u];p=Array.isArray(p)?p:[p];for(var x=0;x<p.length;++x){if(h&&h.cause==u+","+x)return;var C=p[x],q=C.inside,ea=!!C.lookbehind,ta=!!C.greedy,ka=C.alias;if(ta&&!C.pattern.global){var ua=C.pattern.toString().match(/[imsuy]*$/)[0];C.pattern=RegExp(C.pattern.source,ua+"g")}for(var na=C.pattern||C,A=n.next,B=l;A!==a.tail&&!(h&&B>=h.reach);B+=A.value.length,A=A.next){var M=A.value;if(a.length>s.length)return;if(!(M instanceof k)){var N=1,S;if(ta){if(S=y(na,B,s,ea),!S||S.index>=s.length)break;var W=S.index,ga=S.index+S[0].length,j=B;for(j+=A.value.length;W>=j;)A=A.next,j+=A.value.length;if(j-=A.value.length,B=j,A.value instanceof k)continue;for(var z=A;z!==a.tail&&(j<ga||typeof z.value=="string");z=z.next)N++,j+=z.value.length;N--,M=s.slice(B,j),S.index-=B}else if(S=y(na,0,M,ea),!S)continue;var W=S.index,Z=S[0],K=M.slice(0,W),la=M.slice(W+Z.length),aa=B+M.length;h&&aa>h.reach&&(h.reach=aa);var Y=A.prev;K&&(Y=L(a,Y,K),B+=K.length),Q(a,Y,N);var Ea=new k(u,q?i.tokenize(Z,q):Z,ka,Z);if(A=L(a,Y,Ea),la&&L(a,A,la),N>1){var sa={cause:u+","+x,reach:aa};H(s,a,e,A.prev,B,sa),h&&sa.reach>h.reach&&(h.reach=sa.reach)}}}}}}function R(){var s={value:null,prev:null,next:null},a={value:null,prev:s,next:null};s.next=a,this.head=s,this.tail=a,this.length=0}function L(s,a,e){var n=a.next,l={value:e,prev:a,next:n};return a.next=l,n.prev=l,s.length++,l}function Q(s,a,e){for(var n=a.next,l=0;l<e&&n!==s.tail;l++)n=n.next;a.next=n,n.prev=a,s.length-=l}function G(s){for(var a=[],e=s.head.next;e!==s.tail;)a.push(e.value),e=e.next;return a}if(!v.document)return v.addEventListener&&(i.disableWorkerMessageHandler||v.addEventListener("message",function(s){var a=JSON.parse(s.data),e=a.language,n=a.code,l=a.immediateClose;v.postMessage(i.highlight(n,i.languages[e],e)),l&&v.close()},!1)),i;var m=i.util.currentScript();m&&(i.filename=m.src,m.hasAttribute("data-manual")&&(i.manual=!0));function f(){i.manual||i.highlightAll()}if(!i.manual){var F=document.readyState;F==="loading"||F==="interactive"&&m&&m.defer?document.addEventListener("DOMContentLoaded",f):window.requestAnimationFrame?window.requestAnimationFrame(f):window.setTimeout(f,16)}return i}(c);o.exports&&(o.exports=t),typeof da<"u"&&(da.Prism=t),t.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},t.languages.markup.tag.inside["attr-value"].inside.entity=t.languages.markup.entity,t.languages.markup.doctype.inside["internal-subset"].inside=t.languages.markup,t.hooks.add("wrap",function(v){v.type==="entity"&&(v.attributes.title=v.content.replace(/&amp;/,"&"))}),Object.defineProperty(t.languages.markup.tag,"addInlined",{value:function(r,E){var b={};b["language-"+E]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:t.languages[E]},b.cdata=/^<!\[CDATA\[|\]\]>$/i;var i={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:b}};i["language-"+E]={pattern:/[\s\S]+/,inside:t.languages[E]};var k={};k[r]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return r}),"i"),lookbehind:!0,greedy:!0,inside:i},t.languages.insertBefore("markup","cdata",k)}}),Object.defineProperty(t.languages.markup.tag,"addAttribute",{value:function(v,r){t.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+v+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[r,"language-"+r],inside:t.languages[r]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),t.languages.html=t.languages.markup,t.languages.mathml=t.languages.markup,t.languages.svg=t.languages.markup,t.languages.xml=t.languages.extend("markup",{}),t.languages.ssml=t.languages.xml,t.languages.atom=t.languages.xml,t.languages.rss=t.languages.xml,function(v){var r=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;v.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+r.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+r.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+r.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+r.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:r,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},v.languages.css.atrule.inside.rest=v.languages.css;var E=v.languages.markup;E&&(E.tag.addInlined("style","css"),E.tag.addAttribute("style","css"))}(t),t.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},t.languages.javascript=t.languages.extend("clike",{"class-name":[t.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),t.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,t.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:t.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:t.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:t.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:t.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:t.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),t.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:t.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),t.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),t.languages.markup&&(t.languages.markup.tag.addInlined("script","javascript"),t.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),t.languages.js=t.languages.javascript,function(){if(typeof t>"u"||typeof document>"u")return;Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);var v="Loading…",r=function(m,f){return"✖ Error "+m+" while fetching file: "+f},E="✖ Error: File does not exist or is empty",b={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},i="data-src-status",k="loading",y="loaded",H="failed",R="pre[data-src]:not(["+i+'="'+y+'"]):not(['+i+'="'+k+'"])';function L(m,f,F){var s=new XMLHttpRequest;s.open("GET",m,!0),s.onreadystatechange=function(){s.readyState==4&&(s.status<400&&s.responseText?f(s.responseText):s.status>=400?F(r(s.status,s.statusText)):F(E))},s.send(null)}function Q(m){var f=/^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(m||"");if(f){var F=Number(f[1]),s=f[2],a=f[3];return s?a?[F,Number(a)]:[F,void 0]:[F,F]}}t.hooks.add("before-highlightall",function(m){m.selector+=", "+R}),t.hooks.add("before-sanity-check",function(m){var f=m.element;if(f.matches(R)){m.code="",f.setAttribute(i,k);var F=f.appendChild(document.createElement("CODE"));F.textContent=v;var s=f.getAttribute("data-src"),a=m.language;if(a==="none"){var e=(/\.(\w+)$/.exec(s)||[,"none"])[1];a=b[e]||e}t.util.setLanguage(F,a),t.util.setLanguage(f,a);var n=t.plugins.autoloader;n&&n.loadLanguages(a),L(s,function(l){f.setAttribute(i,y);var h=Q(f.getAttribute("data-range"));if(h){var u=l.split(/\r\n?|\n/g),p=h[0],x=h[1]==null?u.length:h[1];p<0&&(p+=u.length),p=Math.max(0,Math.min(p-1,u.length)),x<0&&(x+=u.length),x=Math.max(0,Math.min(x,u.length)),l=u.slice(p,x).join(`
`),f.hasAttribute("data-start")||f.setAttribute("data-start",String(p+1))}F.textContent=l,t.highlightElement(F)},function(l){f.setAttribute(i,H),F.textContent=l})}}),t.plugins.fileHighlight={highlight:function(f){for(var F=(f||document).querySelectorAll(R),s=0,a;a=F[s++];)t.highlightElement(a)}};var G=!1;t.fileHighlight=function(){G||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),G=!0),t.plugins.fileHighlight.highlight.apply(this,arguments)}}()})(oa);var xa=oa.exports;const J=fa(xa),ba={name:"flex",data(){return{containerStyle:{"flex-direction":"row","flex-wrap":"nowrap","justify-content":"flex-start","align-items":"flex-start","align-content":"flex-start"},itemStyles:[{order:0,"flex-grow":0,"flex-shrink":1,"flex-basis":"auto","align-self":"stretch"},{order:0,"flex-grow":0,"flex-shrink":1,"flex-basis":"auto","align-self":"stretch"},{order:0,"flex-grow":0,"flex-shrink":1,"flex-basis":"auto","align-self":"stretch"},{order:0,"flex-grow":0,"flex-shrink":1,"flex-basis":"auto","align-self":"stretch"},{order:0,"flex-grow":0,"flex-shrink":1,"flex-basis":"auto","align-self":"stretch"}],choosenItemIndex:-1,choosenItem:{},hideTop:!1,flexDirection:["row","row-reverse","column","column-reverse"],flexWrap:["nowrap","wrap","wrap-reverse"],justifyContent:["flex-start","flex-end","center","space-between","space-around"],alignItems:["flex-start","flex-end","center","baseline","stretch"],alignContent:["flex-start","flex-end","center","space-between","space-around"],flexGrow:[0,1],flexShrink:[0,1],alignSelf:["auto","flex-start","flex-end","center","baseline"]}},watch:{containerStyle:{handler(){this.setContainerStyleStr()},deep:!0}},computed:{order(){let o=[];for(let c=0;c<this.itemStyles.length;c++)o.push(c);return o}},methods:{styleToString(o){let c="";for(let t in o)c+=`${t}: ${o[t]};
`;return c},setContainerStyleStr(){this.$refs.flexContainer.innerHTML=J.highlight(this.styleToString(this.containerStyle),J.languages.css)},changeItemCss(o,c){this.$refs.flexItem.innerHTML=J.highlight(this.styleToString(o),J.languages.css),this.choosenItem=o,this.choosenItemIndex=c}},mounted(){this.setContainerStyleStr()}},D=o=>(O("data-v-4e4f3e9d"),o=o(),U(),o),ma={class:"live-flex"},Fa=D(()=>d("p",{class:"tip"},"click item to change stlye",-1)),Ca=["onClick"],Aa={class:"title"},wa=D(()=>d("span",null,"style of container",-1)),Sa={class:"bottom-border"},$a={class:"language-css extra-class"},Ta={class:"language-css"},Da={ref:"flexContainer"},Ba={class:"key-value"},Ia=D(()=>d("span",{class:"key"},"flex-direction:",-1)),Pa={class:"key-value"},Va=D(()=>d("span",{class:"key"},"flex-wrap:",-1)),qa={class:"key-value"},ja=D(()=>d("span",{class:"key"},"justify-content:",-1)),La={class:"key-value"},Ma=D(()=>d("span",{class:"key"},"align-items:",-1)),Ra={class:"key-value"},za=D(()=>d("span",{class:"key"},"align-content:",-1)),Oa={class:"bottom-border"},Ua={class:"title"},Ha={class:"language-css extra-class"},Ga={class:"language-css"},Na={ref:"flexItem"},Wa={class:"key-value"},Za=D(()=>d("span",{class:"key"},"order:",-1)),Ya={class:"key-value"},Ja=D(()=>d("span",{class:"key"},"flex-grow:",-1)),Xa={class:"key-value"},Qa=D(()=>d("span",{class:"key"},"flex-shrink:",-1)),Ka={class:"key-value"},as=D(()=>d("span",{class:"key"},"align-self:",-1));function ss(o,c,t,v,r,E){const b=ya("el-radio");return g(),_("div",ma,[Fa,d("div",{class:"flex-container",style:ra(r.containerStyle)},[(g(!0),_(I,null,P(r.itemStyles,(i,k)=>(g(),_("div",{class:"flex-item",key:k,style:ra(i),onClick:y=>E.changeItemCss(i,k)},"item-"+ia(k+1),13,Ca))),128))],4),d("p",Aa,[wa,d("span",{class:"tip hide-btn",onClick:c[0]||(c[0]=()=>this.hideTop=!this.hideTop)},[d("i",{class:_a(r.hideTop?"el-icon-arrow-up":"el-icon-arrow-down")},null,2),X(" "+ia(r.hideTop?"show":"hide"),1)])]),pa(d("div",Sa,[d("div",$a,[d("pre",Ta,[d("code",Da,null,512)])]),d("div",Ba,[Ia,(g(!0),_(I,null,P(r.flexDirection,(i,k)=>(g(),V(b,{modelValue:r.containerStyle["flex-direction"],"onUpdate:modelValue":c[1]||(c[1]=y=>r.containerStyle["flex-direction"]=y),key:k,label:i},null,8,["modelValue","label"]))),128))]),d("div",Pa,[Va,(g(!0),_(I,null,P(r.flexWrap,(i,k)=>(g(),V(b,{modelValue:r.containerStyle["flex-wrap"],"onUpdate:modelValue":c[2]||(c[2]=y=>r.containerStyle["flex-wrap"]=y),key:k,label:i},null,8,["modelValue","label"]))),128))]),d("div",qa,[ja,(g(!0),_(I,null,P(r.justifyContent,(i,k)=>(g(),V(b,{modelValue:r.containerStyle["justify-content"],"onUpdate:modelValue":c[3]||(c[3]=y=>r.containerStyle["justify-content"]=y),key:k,label:i},null,8,["modelValue","label"]))),128))]),d("div",La,[Ma,(g(!0),_(I,null,P(r.alignItems,(i,k)=>(g(),V(b,{modelValue:r.containerStyle["align-items"],"onUpdate:modelValue":c[4]||(c[4]=y=>r.containerStyle["align-items"]=y),key:k,label:i},null,8,["modelValue","label"]))),128))]),d("div",Ra,[za,(g(!0),_(I,null,P(r.alignContent,(i,k)=>(g(),V(b,{modelValue:r.containerStyle["align-content"],"onUpdate:modelValue":c[5]||(c[5]=y=>r.containerStyle["align-content"]=y),key:k,label:i},null,8,["modelValue","label"]))),128))])],512),[[ha,!r.hideTop]]),pa(d("div",Oa,[d("p",Ua,"style of item-"+ia(r.choosenItemIndex+1),1),d("div",Ha,[d("pre",Ga,[d("code",Na,null,512)])]),d("div",Wa,[Za,(g(!0),_(I,null,P(E.order,(i,k)=>(g(),V(b,{modelValue:r.choosenItem.order,"onUpdate:modelValue":c[6]||(c[6]=y=>r.choosenItem.order=y),key:k,label:i},null,8,["modelValue","label"]))),128))]),d("div",Ya,[Ja,(g(!0),_(I,null,P(r.flexGrow,(i,k)=>(g(),V(b,{modelValue:r.choosenItem["flex-grow"],"onUpdate:modelValue":c[7]||(c[7]=y=>r.choosenItem["flex-grow"]=y),key:k,label:i},null,8,["modelValue","label"]))),128))]),d("div",Xa,[Qa,(g(!0),_(I,null,P(r.flexShrink,(i,k)=>(g(),V(b,{modelValue:r.choosenItem["flex-shrink"],"onUpdate:modelValue":c[8]||(c[8]=y=>r.choosenItem["flex-shrink"]=y),key:k,label:i},null,8,["modelValue","label"]))),128))]),d("div",Ka,[as,(g(!0),_(I,null,P(r.alignSelf,(i,k)=>(g(),V(b,{modelValue:r.choosenItem["align-self"],"onUpdate:modelValue":c[9]||(c[9]=y=>r.choosenItem["align-self"]=y),key:k,label:i},null,8,["modelValue","label"]))),128))])],512),[[ha,r.choosenItemIndex!=-1]])])}const is=T(ba,[["render",ss],["__scopeId","data-v-4e4f3e9d"]]),es={name:"flexbox",data(){return{}}},ts=o=>(O("data-v-e17b505f"),o=o(),U(),o),ns={class:"container"},ls=ts(()=>d("div",{class:"wrap"},[d("div",null,"1"),d("div",null,"2"),d("div",null,"3")],-1)),ds=[ls];function rs(o,c,t,v,r,E){return g(),_("div",ns,ds)}const ps=T(es,[["render",rs],["__scopeId","data-v-e17b505f"]]),hs={name:"flexDirection",data(){return{}}},os={class:"container"},cs=w('<div data-v-799cddc7><span data-v-799cddc7>flex-direction：row</span><div class="row" data-v-799cddc7><div data-v-799cddc7>1</div><div data-v-799cddc7>2</div><div data-v-799cddc7>3</div></div></div><div data-v-799cddc7><span data-v-799cddc7>flex-direction：row-reverse</span><div class="row-reverse" data-v-799cddc7><div data-v-799cddc7>1</div><div data-v-799cddc7>2</div><div data-v-799cddc7>3</div></div></div><div data-v-799cddc7><span data-v-799cddc7>flex-direction：column</span><div class="column" data-v-799cddc7><div data-v-799cddc7>1</div><div data-v-799cddc7>2</div><div data-v-799cddc7>3</div></div></div><div data-v-799cddc7><span data-v-799cddc7>flex-direction：column-reverse</span><div class="column-reverse" data-v-799cddc7><div data-v-799cddc7>1</div><div data-v-799cddc7>2</div><div data-v-799cddc7>3</div></div></div>',4),vs=[cs];function ks(o,c,t,v,r,E){return g(),_("div",os,vs)}const us=T(hs,[["render",ks],["__scopeId","data-v-799cddc7"]]),gs={name:"flexWrap",data(){return{}}},Es={class:"container"},fs=w('<div data-v-cd775012><span data-v-cd775012>flex-wrap：wrap</span><div class="wrap" data-v-cd775012><div data-v-cd775012>1</div><div data-v-cd775012>2</div><div data-v-cd775012>3</div><div data-v-cd775012>4</div><div data-v-cd775012>5</div><div data-v-cd775012>6</div><div data-v-cd775012>7</div><div data-v-cd775012>8</div><div data-v-cd775012>9</div></div></div><div data-v-cd775012><span data-v-cd775012>flex-wrap：wrap-reverse</span><div class="wrap-reverse" data-v-cd775012><div data-v-cd775012>1</div><div data-v-cd775012>2</div><div data-v-cd775012>3</div><div data-v-cd775012>4</div><div data-v-cd775012>5</div><div data-v-cd775012>6</div><div data-v-cd775012>7</div><div data-v-cd775012>8</div><div data-v-cd775012>9</div></div></div><div data-v-cd775012><span data-v-cd775012>flex-wrap：nowrap</span><div class="nowrap" data-v-cd775012><div data-v-cd775012>1</div><div data-v-cd775012>2</div><div data-v-cd775012>3</div><div data-v-cd775012>4</div><div data-v-cd775012>5</div><div data-v-cd775012>6</div><div data-v-cd775012>7</div><div data-v-cd775012>8</div><div data-v-cd775012>9</div></div></div>',3),ys=[fs];function _s(o,c,t,v,r,E){return g(),_("div",Es,ys)}const xs=T(gs,[["render",_s],["__scopeId","data-v-cd775012"]]),bs={name:"flexJustifyContent",data(){return{}}},ms={class:"container"},Fs=w('<div data-v-4e3ea2e2><span data-v-4e3ea2e2>justify-content：flex-start</span><div class="flex-start" data-v-4e3ea2e2><div data-v-4e3ea2e2>1</div><div data-v-4e3ea2e2>2</div><div data-v-4e3ea2e2>3</div></div></div><div data-v-4e3ea2e2><span data-v-4e3ea2e2>justify-content：flex-end</span><div class="flex-end" data-v-4e3ea2e2><div data-v-4e3ea2e2>1</div><div data-v-4e3ea2e2>2</div><div data-v-4e3ea2e2>3</div></div></div><div data-v-4e3ea2e2><span data-v-4e3ea2e2>justify-content：center</span><div class="center" data-v-4e3ea2e2><div data-v-4e3ea2e2>1</div><div data-v-4e3ea2e2>2</div><div data-v-4e3ea2e2>3</div></div></div><div data-v-4e3ea2e2><span data-v-4e3ea2e2>justify-content：space-between</span><div class="space-between" data-v-4e3ea2e2><div data-v-4e3ea2e2>1</div><div data-v-4e3ea2e2>2</div><div data-v-4e3ea2e2>3</div></div></div><div data-v-4e3ea2e2><span data-v-4e3ea2e2>justify-content：space-around</span><div class="space-around" data-v-4e3ea2e2><div data-v-4e3ea2e2>1</div><div data-v-4e3ea2e2>2</div><div data-v-4e3ea2e2>3</div></div></div>',5),Cs=[Fs];function As(o,c,t,v,r,E){return g(),_("div",ms,Cs)}const ws=T(bs,[["render",As],["__scopeId","data-v-4e3ea2e2"]]),Ss={name:"flexAlignItems",data(){return{}}},$s={class:"container"},Ts=w('<div data-v-7e9baa05><span data-v-7e9baa05>align-items：flex-start</span><div class="flex-start" data-v-7e9baa05><div data-v-7e9baa05>1</div><div data-v-7e9baa05>2</div><div data-v-7e9baa05>3</div></div></div><div data-v-7e9baa05><span data-v-7e9baa05>align-items：flex-end</span><div class="flex-end" data-v-7e9baa05><div data-v-7e9baa05>1</div><div data-v-7e9baa05>2</div><div data-v-7e9baa05>3</div></div></div><div data-v-7e9baa05><span data-v-7e9baa05>align-items：center</span><div class="center" data-v-7e9baa05><div data-v-7e9baa05>1</div><div data-v-7e9baa05>2</div><div data-v-7e9baa05>3</div></div></div><div data-v-7e9baa05><span data-v-7e9baa05>align-items：stretch</span><div class="stretch" data-v-7e9baa05><div data-v-7e9baa05>1</div><div data-v-7e9baa05>2</div><div data-v-7e9baa05>3</div></div></div><div data-v-7e9baa05><span data-v-7e9baa05>align-items：baseline</span><div class="baseline" data-v-7e9baa05><div data-v-7e9baa05>1</div><div data-v-7e9baa05>2</div><div data-v-7e9baa05>3</div></div></div>',5),Ds=[Ts];function Bs(o,c,t,v,r,E){return g(),_("div",$s,Ds)}const Is=T(Ss,[["render",Bs],["__scopeId","data-v-7e9baa05"]]),Ps={name:"flexAlignContent",data(){return{}}},Vs={class:"container"},qs=w('<div data-v-135582da><span data-v-135582da>align-content：flex-start</span><div class="flex-start" data-v-135582da><div data-v-135582da>1</div><div data-v-135582da>2</div><div data-v-135582da>3</div><div data-v-135582da>4</div><div data-v-135582da>5</div><div data-v-135582da>6</div><div data-v-135582da>7</div><div data-v-135582da>8</div><div data-v-135582da>9</div></div></div><div data-v-135582da><span data-v-135582da>align-content：flex-end</span><div class="flex-end" data-v-135582da><div data-v-135582da>1</div><div data-v-135582da>2</div><div data-v-135582da>3</div><div data-v-135582da>4</div><div data-v-135582da>5</div><div data-v-135582da>6</div><div data-v-135582da>7</div><div data-v-135582da>8</div><div data-v-135582da>9</div></div></div><div data-v-135582da><span data-v-135582da>align-content：center</span><div class="center" data-v-135582da><div data-v-135582da>1</div><div data-v-135582da>2</div><div data-v-135582da>3</div><div data-v-135582da>4</div><div data-v-135582da>5</div><div data-v-135582da>6</div><div data-v-135582da>7</div><div data-v-135582da>8</div><div data-v-135582da>9</div></div></div><div data-v-135582da><span data-v-135582da>align-content：space-around </span><div class="space-around" data-v-135582da><div data-v-135582da>1</div><div data-v-135582da>2</div><div data-v-135582da>3</div><div data-v-135582da>4</div><div data-v-135582da>5</div><div data-v-135582da>6</div><div data-v-135582da>7</div><div data-v-135582da>8</div><div data-v-135582da>9</div></div></div><div data-v-135582da><span data-v-135582da>align-content：space-between</span><div class="space-between" data-v-135582da><div data-v-135582da>1</div><div data-v-135582da>2</div><div data-v-135582da>3</div><div data-v-135582da>4</div><div data-v-135582da>5</div><div data-v-135582da>6</div><div data-v-135582da>7</div><div data-v-135582da>8</div><div data-v-135582da>9</div></div></div><div data-v-135582da><span data-v-135582da>align-content：stretch</span><div class="stretch" data-v-135582da><div data-v-135582da>1</div><div data-v-135582da>2</div><div data-v-135582da>3</div><div data-v-135582da>4</div><div data-v-135582da>5</div><div data-v-135582da>6</div><div data-v-135582da>7</div><div data-v-135582da>8</div><div data-v-135582da>9</div></div></div>',6),js=[qs];function Ls(o,c,t,v,r,E){return g(),_("div",Vs,js)}const Ms=T(Ps,[["render",Ls],["__scopeId","data-v-135582da"]]),Rs={name:"flexOrder",data(){return{}}},zs=o=>(O("data-v-760f94f6"),o=o(),U(),o),Os={class:"container"},Us=zs(()=>d("div",{class:"wrap"},[d("div",null,"1"),d("div",null,"2"),d("div",null,"3")],-1)),Hs=[Us];function Gs(o,c,t,v,r,E){return g(),_("div",Os,Hs)}const Ns=T(Rs,[["render",Gs],["__scopeId","data-v-760f94f6"]]),Ws={name:"flexGrow",data(){return{}}},ca=o=>(O("data-v-bf2c411c"),o=o(),U(),o),Zs={class:"container"},Ys=ca(()=>d("div",null,[d("span",null,"子容器未加flex-grow"),d("div",{class:"wrap"},[d("div",null,"1"),d("div",null,"2")])],-1)),Js=ca(()=>d("div",null,[d("span",null,"子容器flex-grow:1,flex-grow:2"),d("div",{class:"wrap flex-grow"},[d("div",null,"1"),d("div",null,"2")])],-1)),Xs=[Ys,Js];function Qs(o,c,t,v,r,E){return g(),_("div",Zs,Xs)}const Ks=T(Ws,[["render",Qs],["__scopeId","data-v-bf2c411c"]]),ai={name:"flexShrink",data(){return{}}},va=o=>(O("data-v-496dc57e"),o=o(),U(),o),si={class:"container"},ii=va(()=>d("div",null,[d("span",null,"子容器未加flex-shrink"),d("div",{class:"wrap"},[d("div",null,"1"),d("div",null,"2")])],-1)),ei=va(()=>d("div",null,[d("span",null,"子容器flex-shrink:1,flex-shrink:2"),d("div",{class:"wrap flex-shrink"},[d("div",null,"1"),d("div",null,"2")])],-1)),ti=[ii,ei];function ni(o,c,t,v,r,E){return g(),_("div",si,ti)}const li=T(ai,[["render",ni],["__scopeId","data-v-496dc57e"]]),di={name:"flexAlignSelf",data(){return{}}},ri={class:"container"},pi=w('<div data-v-cb0a52ee><span data-v-cb0a52ee>align-self：flex-start</span><div class="flex-start" data-v-cb0a52ee><div data-v-cb0a52ee>align-self：flex-start</div><div data-v-cb0a52ee>2</div><div data-v-cb0a52ee>3</div></div></div><div data-v-cb0a52ee><span data-v-cb0a52ee>align-self：flex-end</span><div class="flex-end" data-v-cb0a52ee><div data-v-cb0a52ee>align-self：flex-end</div><div data-v-cb0a52ee>2</div><div data-v-cb0a52ee>3</div></div></div><div data-v-cb0a52ee><span data-v-cb0a52ee>align-self：center</span><div class="center" data-v-cb0a52ee><div data-v-cb0a52ee>align-self：center</div><div data-v-cb0a52ee>2</div><div data-v-cb0a52ee>3</div></div></div><div data-v-cb0a52ee><span data-v-cb0a52ee>align-self：stretch</span><div class="stretch" data-v-cb0a52ee><div data-v-cb0a52ee>align-self：stretch</div><div data-v-cb0a52ee>2</div><div data-v-cb0a52ee>3</div></div></div><div data-v-cb0a52ee><span data-v-cb0a52ee>align-self：baseline</span><div class="baseline" data-v-cb0a52ee><div data-v-cb0a52ee>align-self: baseline;</div><div data-v-cb0a52ee>2</div><div data-v-cb0a52ee>align-self: baseline;</div></div></div>',5),hi=[pi];function oi(o,c,t,v,r,E){return g(),_("div",ri,hi)}const ci=T(di,[["render",oi],["__scopeId","data-v-cb0a52ee"]]),vi=d("h2",{id:"live-demo",tabindex:"-1"},[X("live demo "),d("a",{class:"header-anchor",href:"#live-demo","aria-label":'Permalink to "live demo"'},"​")],-1),ki=d("br",null,null,-1),ui=d("br",null,null,-1),gi=d("h2",{id:"属性解释",tabindex:"-1"},[X("属性解释 "),d("a",{class:"header-anchor",href:"#属性解释","aria-label":'Permalink to "属性解释"'},"​")],-1),Ei=d("h3",{id:"flexbox",tabindex:"-1"},[X("flexbox "),d("a",{class:"header-anchor",href:"#flexbox","aria-label":'Permalink to "flexbox"'},"​")],-1),fi=d("p",null,"对Flex容器设置display:flex或者display:inline-flex",-1),yi=w("",4),_i=w("",3),xi=w("",6),bi=w("",3),mi=w("",3),Fi=w("",3),Ci=w("",6),Ai=w("",3),wi=w("",3),Si=w("",1),Bi=JSON.parse('{"title":"flex布局","description":"","frontmatter":{"title":"flex布局","date":"2020-11-06T00:00:00.000Z"},"headers":[],"relativePath":"docs/frontend/HTML+CSS/CSS/flexbox.md","filePath":"docs/frontend/HTML+CSS/CSS/flexbox.md"}'),$i={name:"docs/frontend/HTML+CSS/CSS/flexbox.md"},Ii=Object.assign($i,{setup(o){return(c,t)=>(g(),_("div",null,[vi,$(is),ki,ui,gi,Ei,fi,$(ps),yi,$(us),_i,$(xs),xi,$(ws),bi,$(Is),mi,$(Ms),Fi,$(Ns),Ci,$(Ks),Ai,$(li),wi,$(ci),Si]))}});export{Bi as __pageData,Ii as default};