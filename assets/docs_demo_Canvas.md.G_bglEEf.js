import{M as _}from"./chunks/markDownBox.am9sQI3a.js";import{$ as e}from"./chunks/jquery.xd2zrwf8.js";import{_ as m,o as d,c as r,m as a,t as c,q as p,s as u,h as f,I as i,w as g,a as w}from"./chunks/framework.FpOEJISx.js";import"./chunks/axios.AkAIBCGB.js";import"./chunks/theme.BhQF1MTw.js";const x={data(){return{TOP_HEAD_HEIGHT:50,canvasX:"",canvasY:""}},methods:{drawing(){this.ctx=this.$refs.canvas.getContext("2d")},canvasDown(t){const s=t.clientX-t.target.offsetLeft+document.documentElement.scrollLeft,o=t.clientY-t.target.offsetTop+document.documentElement.scrollTop-this.TOP_HEAD_HEIGHT;this.canvasX=s,this.canvasY=o},showDrawing(){this.drawing();const t=Number(e("#video").width()),s=Number(e("#video").height());e("#video").css({width:`${t}px`,height:`${s}px`}),e("#canvas").attr("width",this.videoWidth),e("#canvas").attr("height",this.videoHeight)}},mounted(){this.showDrawing()}},D=t=>(p("data-v-9ffc697e"),t=t(),u(),t),$=D(()=>a("div",null,"这里只是做了点击画布获取坐标点",-1)),H={class:"content"},b={id:"video",class:"hrtc-video-theme",style:{width:"100%",height:"100%"}},E={class:"sign-canvas"};function I(t,s,o,v,n,h){return d(),r("div",null,[a("div",null,[$,a("div",H,[a("span",null,"鼠标点击坐标：x("+c(n.canvasX)+"), y("+c(n.canvasY)+")",1),a("div",b,[a("div",E,[a("canvas",{id:"canvas",ref:"canvas",style:{background:"black"},onMousedown:s[0]||(s[0]=l=>h.canvasDown(l))},"你的浏览器不支持canvas",544)])])])])])}const T=m(x,[["render",I],["__scopeId","data-v-9ffc697e"]]),k=a("h2",{id:"画布-canvas",tabindex:"-1"},[w("画布-canvas "),a("a",{class:"header-anchor",href:"#画布-canvas","aria-label":'Permalink to "画布-canvas"'},"​")],-1),C={class:"common_container"},N={class:"codeWrap"},B=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"docs/demo/Canvas.md","filePath":"docs/demo/Canvas.md"}'),O={name:"docs/demo/Canvas.md"},M=Object.assign(O,{setup(t){const s=f("/static/_file/md/demo/DOM/");return(o,v)=>(d(),r("div",null,[k,a("div",C,[a("div",N,[i(_,{content:o.content,url:`${s.value}canvas.md`},{default:g(()=>[i(T)]),_:1},8,["content","url"])])])]))}});export{B as __pageData,M as default};
