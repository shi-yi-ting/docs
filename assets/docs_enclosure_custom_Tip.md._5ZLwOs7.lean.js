import{M as u}from"./chunks/markDownBox.DqsVtTuw.js";import{_ as v,o as p,c as d,r as T,m as t,a as r,t as h,D as m,I as n,w as s,n as w,Q as N,d as b,h as y,p as x}from"./chunks/framework.FpOEJISx.js";import{E as C}from"./chunks/index.s6BjabQE.js";import{E as k}from"./chunks/index.IqE9FYKB.js";import"./chunks/axios.AkAIBCGB.js";import"./chunks/jquery.pJ0uB8Ep.js";import"./chunks/theme.FAMzooZR.js";import"./chunks/index.QCmupQ0Q.js";import"./chunks/plugin-vue_export-helper.5bvupO3q.js";import"./chunks/fromPairs.E3iD47Fd.js";import"./chunks/use-form-item.9h_frHX9.js";import"./chunks/index._Y40OLZn.js";const S={class:"trigger-tips"},O={class:"trigger-tips-content"},B={class:"trigger-tips-content-warpper"},I={__name:"triggerTips",props:{content:{type:String,default:""}},setup(i){return(o,e)=>(p(),d("div",S,[T(o.$slots,"default",{},void 0,!0),t("div",O,[t("div",null,[t("div",B,[T(o.$slots,"content",{},()=>[r(h(i.content),1)],!0)])])])]))}},M=v(I,[["__scopeId","data-v-d63f3b4d"]]),W={name:"TooltipOver",components:{ElTooltip:C},props:{content:{type:String,default:""},className:{type:String,default:""},refName:{type:String,default:""},isInline:{type:Boolean,default:!1},popperClass:{type:String},width:{type:Number},effect:{type:String}},data(){return{isShowTooltip:!0}},methods:{onMouseOver(i){let o=this.$refs[i].parentNode;const e=this.$refs[i].parentNode.getBoundingClientRect().width,c=this.$refs[i].getBoundingClientRect().width;console.log("parentWidth",e),console.log("contentWidth",c),console.log("aaa",o),this.isShowTooltip=c<=e},tooltipClick(){this.$emit("tooltipClick")}}},$={key:0,id:"tooltip_over"},P={key:1,id:"tooltip_over"};function E(i,o,e,c,f,l){const _=m("el-tooltip");return e.isInline?(p(),d("span",$,[n(_,{class:"item",effect:e.effect,disabled:f.isShowTooltip,content:e.content,placement:"top",popperClass:e.popperClass},{default:s(()=>[t("span",{class:w(["text_overflow full_height",e.className]),style:N({width:`${e.width}px`,display:"inline-block"}),onClick:o[0]||(o[0]=(...a)=>l.tooltipClick&&l.tooltipClick(...a)),onMouseover:o[1]||(o[1]=a=>l.onMouseOver(e.refName))},[t("span",{ref:e.refName,class:"text_overflow"},h(e.content||""),513)],38)]),_:1},8,["effect","disabled","content","popperClass"])])):(p(),d("div",P,[n(_,{class:"item",content:e.content,effect:e.effect,disabled:f.isShowTooltip,popperClass:e.popperClass,placement:"top"},{default:s(()=>[t("p",{class:w(["text_overflow full_height",e.className]),style:N({width:`${e.width}px`}),onClick:o[2]||(o[2]=(...a)=>l.tooltipClick&&l.tooltipClick(...a)),onMouseover:o[3]||(o[3]=a=>l.onMouseOver(e.refName))},[t("span",{ref:e.refName,class:"text_overflow"},h(e.content||""),513)],38)]),_:1},8,["content","effect","disabled","popperClass"])]))}const D=v(W,[["render",E],["__scopeId","data-v-80313492"]]),V=b({components:{ElButton:k,ElTooltip:C,TooltipOver:D},setup(){return{refName:y("toolTip")}}}),z={style:{"margin-top":"10px"}},R={style:{"margin-top":"10px"}};function j(i,o,e,c,f,l){const _=m("el-button"),a=m("el-tooltip"),g=m("TooltipOver");return p(),d("div",null,[t("div",null,[n(a,{class:"item",effect:"dark",content:"Top Center 提示文字",placement:"top"},{default:s(()=>[n(_,null,{default:s(()=>[r("element中的提示组件: el-tooltip")]),_:1})]),_:1})]),t("div",z,[n(g,{content:"没超过规定宽度时不展示tip",refName:i.refName,className:"valid_tooltip_width500",popperClass:"tippy_width500",isInline:""},null,8,["refName"])]),t("div",R,[n(g,{content:"基于el-tooltip封装的提示组件(超出设定的宽度之后鼠标悬浮才有提示)基于el-tooltip封装的提示组件(超出设定的宽度之后鼠标悬浮才有提示)",refName:i.refName,className:"valid_tooltip_width500",popperClass:"tippy_width500",isInline:""},null,8,["refName"])])])}const J=v(V,[["render",j]]),Q=t("h1",{id:"tip",tabindex:"-1"},[r("Tip "),t("a",{class:"header-anchor",href:"#tip","aria-label":'Permalink to "Tip"'},"​")],-1),q=t("h2",{id:"基于el-tooltip再封装",tabindex:"-1"},[r("基于el-tooltip再封装 "),t("a",{class:"header-anchor",href:"#基于el-tooltip再封装","aria-label":'Permalink to "基于el-tooltip再封装"'},"​")],-1),A={class:"common_container"},F={class:"codeWrap"},G=t("h2",{id:"封装triggertips",tabindex:"-1"},[r("封装triggerTips "),t("a",{class:"header-anchor",href:"#封装triggertips","aria-label":'Permalink to "封装triggerTips"'},"​")],-1),H={class:"common_container"},K={class:"codeWrap"},L=t("h2",{id:"vue-tippy插件",tabindex:"-1"},[t("a",{href:"https://madewith.cn/14",target:"_blank",rel:"noreferrer"},"vue-tippy插件"),r(),t("a",{class:"header-anchor",href:"#vue-tippy插件","aria-label":'Permalink to "[vue-tippy插件](https://madewith.cn/14)"'},"​")],-1),U={class:"common_container"},X={class:"codeWrap"},Y=t("div",null,[t("a",{href:"https://madewith.cn/14"},"使用文档")],-1),_t=JSON.parse('{"title":"Tip","description":"","frontmatter":{},"headers":[],"relativePath":"docs/enclosure/custom/Tip.md","filePath":"docs/enclosure/custom/Tip.md"}'),Z={name:"docs/enclosure/custom/Tip.md"},mt=Object.assign(Z,{setup(i){const o=y("/static/_file/md/enclosure/tip/");return(e,c)=>(p(),d("div",null,[Q,q,t("div",A,[t("div",F,[n(u,{content:e.content,url:`${o.value}elTip.md`},{default:s(()=>[n(J)]),_:1},8,["content","url"])])]),G,t("div",H,[t("div",K,[n(u,{content:e.content,url:`${o.value}triggerTips.md`},{default:s(()=>[n(M,{content:"测试内容"},{default:s(()=>[n(x(k),null,{default:s(()=>[r("鼠标放上来试试")]),_:1})]),_:1})]),_:1},8,["content","url"])])]),L,t("div",U,[t("div",X,[n(u,{content:e.content,url:`${o.value}vue-tippy.md`},{default:s(()=>[Y]),_:1},8,["content","url"])])])]))}});export{_t as __pageData,mt as default};
