import{M as u}from"./chunks/markDownBox.ElYCyWak.js";import{_ as p,d as f,o as n,c as o,m as t,F as b,E as v,n as $,t as h,c5 as D,e as L,h as w,I as r,w as _,a as m}from"./chunks/framework.FpOEJISx.js";import"./chunks/axios.AkAIBCGB.js";import"./chunks/jquery.wmcOd_Lo.js";import"./chunks/theme.I9it6eQT.js";const C=f({setup(){function a(){const e=D({isActive:"result",list:[{name:"检测结果",url:"",active:"result"},{name:"操作日志",url:"remoteDiagnosisDpDfsTv/tv",active:"operationLog"},{name:"评价信息",url:"remoteDiagnosisDpDfsTv/tv",active:"evaluationInfo"}]});return{tab:e,tabSwitch:c=>{e.isActive=c.active}}}return{...a()}}}),S={class:"tabList"},A=["onClick"];function y(a,e,i,c,k,T){return n(),o("div",S,[t("ul",null,[(n(!0),o(b,null,v(a.tab.list,(s,l)=>(n(),o("li",{key:l},[t("div",{class:$({active:a.tab.isActive===s.active}),onClick:d=>a.tabSwitch(s)},[t("span",null,h(s.name),1)],10,A)]))),128))])])}const I=p(C,[["render",y],["__scopeId","data-v-63729124"]]),N=f({setup(){function a(){const e=D({isActive:"result",list:[{name:"检测结果",url:"",active:"result",child:[{name:"DataLab查询",icon:"",routeUrl:""},{name:"DataLab查询",icon:"",routeUrl:""}]},{name:"操作日志",url:"remoteDiagnosisDpDfsTv/tv",active:"operationLog",child:[{name:"DataLab查询",icon:"",routeUrl:""},{name:"DataLab查询",icon:"",routeUrl:""},{name:"DataLab查询",icon:"",routeUrl:""}]},{name:"评价信息",url:"remoteDiagnosisDpDfsTv/tv",active:"evaluationInfo",child:[]}]});return{tab:e,tabSwitch:c=>{e.isActive=c.active}}}return{...a()}}}),P={class:"tabList"},U=["onClick"],B={key:0};function V(a,e,i,c,k,T){return n(),o("div",P,[t("ul",null,[(n(!0),o(b,null,v(a.tab.list,(s,l)=>(n(),o("li",{key:l},[t("div",{class:$({active:a.tab.isActive===s.active}),onClick:d=>a.tabSwitch(s)},[t("span",null,h(s.name),1)],10,U),s.child&&s.child.length>0?(n(),o("dl",B,[(n(!0),o(b,null,v(s.child,(d,g)=>(n(),o("dt",{key:g},[t("span",null,h(d.name),1)]))),128))])):L("",!0)]))),128))])])}const W=p(N,[["render",V],["__scopeId","data-v-afb2765d"]]),x=t("h2",{id:"tabs简易",tabindex:"-1"},[m("tabs简易 "),t("a",{class:"header-anchor",href:"#tabs简易","aria-label":'Permalink to "tabs简易"'},"​")],-1),E={class:"common_container"},F={class:"codeWrap"},M=t("h2",{id:"tabs带二级悬浮",tabindex:"-1"},[m("tabs带二级悬浮 "),t("a",{class:"header-anchor",href:"#tabs带二级悬浮","aria-label":'Permalink to "tabs带二级悬浮"'},"​")],-1),O={class:"common_container"},j={class:"codeWrap"},z=t("h2",{id:"tabs通过路由跳转",tabindex:"-1"},[m("tabs通过路由跳转 "),t("a",{class:"header-anchor",href:"#tabs通过路由跳转","aria-label":'Permalink to "tabs通过路由跳转"'},"​")],-1),J={class:"common_container"},q={class:"codeWrap"},G=t("div",null,"tabs通过路由跳转(vitepress暂无法使用vue-router)",-1),Z=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"docs/demo/Tabs.md","filePath":"docs/demo/Tabs.md"}'),H={name:"docs/demo/Tabs.md"},tt=Object.assign(H,{setup(a){const e=w("/static/_file/md/demo/tabs/");return(i,c)=>(n(),o("div",null,[x,t("div",E,[t("div",F,[r(u,{content:i.content,url:`${e.value}tabs.md`},{default:_(()=>[r(I)]),_:1},8,["content","url"])])]),M,t("div",O,[t("div",j,[r(u,{content:i.content,url:`${e.value}tabs02.md`},{default:_(()=>[r(W)]),_:1},8,["content","url"])])]),z,t("div",J,[t("div",q,[r(u,{content:i.content,url:`${e.value}tabs03.md`},{default:_(()=>[G]),_:1},8,["content","url"])])])]))}});export{Z as __pageData,tt as default};