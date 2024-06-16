import{M as g}from"./chunks/markDownBox.am9sQI3a.js";import{I as b}from"./chunks/index.GMOV0Yq2.js";import{B as x}from"./chunks/index.uGl-01Ch.js";import{a as p,F as S}from"./chunks/index.9Zca03xH.js";import{d as $,h as f,c5 as w,o as u,c as v,m as a,I as o,w as l,p as r,F as B,E as C,b as y,a as c,t as O,q as P,s as E,_ as F}from"./chunks/framework.FpOEJISx.js";import{S as W,b as L}from"./chunks/index.klcFR2Ql.js";import"./chunks/axios.AkAIBCGB.js";import"./chunks/jquery.xd2zrwf8.js";import"./chunks/theme.BhQF1MTw.js";import"./chunks/useConfigInject.EE0UmG98.js";import"./chunks/index._Y40OLZn.js";import"./chunks/FormItemContext.pHFsNRUI.js";import"./chunks/index.Wgg-PeWO.js";import"./chunks/vnode.JAVjTnbO.js";import"./chunks/omit.tydo68F1.js";import"./chunks/isPlainObject.LbEOpjII.js";import"./chunks/isObject.u1V2KUQz.js";import"./chunks/overArg.clypzKbc.js";import"./chunks/isArrayLikeObject.QzTxMw9v.js";import"./chunks/flatten.lPjqfmc_.js";import"./chunks/isEqual.L5aOBdXd.js";import"./chunks/isArray.ZyNFv1vC.js";import"./chunks/baseIteratee.6BhFgZ6Z.js";import"./chunks/get.CN6VB36A.js";import"./chunks/debounce.7vty6ZOk.js";import"./chunks/useFlexGapSupport.D2vPbA1J.js";import"./chunks/styleChecker.joRX2Kc6.js";import"./chunks/Trigger.QQxzGiSs.js";import"./chunks/contains.Xo8Erpdn.js";import"./chunks/Portal.1fgz_vF8.js";import"./chunks/baseFindIndex.CG3ccTGJ.js";import"./chunks/toInteger.cdoqv0r-.js";import"./chunks/collapseMotion.Cczcee-l.js";import"./chunks/arrayIncludesWith.zi7SfS7v.js";import"./chunks/KeyCode.JfLR25He.js";import"./chunks/pickAttrs.XY8JcjML.js";import"./chunks/Overflow.mfDX5I4e.js";const N=i=>(P("data-v-2decc23a"),i=i(),E(),i),U={class:"container"},q={class:"form"},D=N(()=>a("div",{class:"title"},"集群告警参数配置",-1)),M=$({__name:"validate",setup(i){const d=(n,t,e)=>new RegExp("^(\\d|[1-9]\\d|100)$").test(t)?e():(e(new Error("请输入0-100之间的整数")),!1),m=(n,t,e)=>/^(0|[1-9]\d{0,7}|10{8})$/.test(t.toString().trim())?e():(e(new Error("请输入0-100000000之间的整数")),!1),_=f(""),V=f([{label:"选项01",value:"1"},{label:"选项02",value:"2"}]),s=w({cpu:"",part:""}),I=w({cpu:[{required:!0,message:"",trigger:"blur"},{validator:d,trigger:"blur"}],part:[{required:!0,message:"",trigger:"blur"},{validator:m,trigger:"blur"}]}),k=n=>{console.log("event",n)};return(n,t)=>(u(),v("div",U,[a("div",q,[D,o(r(S),{ref:"form",model:s,rules:I,labelWidth:"140px",style:{width:"500px"}},{default:l(()=>[o(r(p),{label:"选择集群"},{default:l(()=>[o(r(W),{modelValue:_.value,"onUpdate:modelValue":t[0]||(t[0]=e=>_.value=e),placeholder:"请选择活动区域",style:{width:"100%"},onChange:t[1]||(t[1]=e=>k(e))},{default:l(()=>[(u(!0),v(B,null,C(V.value,(e,h)=>(u(),y(r(L),{key:h,ref_for:!0,ref:"option",label:e.label,value:e.value},{default:l(()=>[c(O(e.label),1)]),_:2},1032,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),o(r(p),{label:"CPU使用率",prop:"cpu"},{default:l(()=>[o(r(b),{modelValue:s.cpu,"onUpdate:modelValue":t[2]||(t[2]=e=>s.cpu=e),maxlength:"3",showWordLimit:""},null,8,["modelValue"])]),_:1}),o(r(p),{label:"分区(Part)阈值",prop:"part"},{default:l(()=>[o(r(b),{modelValue:s.part,"onUpdate:modelValue":t[3]||(t[3]=e=>s.part=e),maxlength:"9",showWordLimit:""},null,8,["modelValue"])]),_:1}),o(r(p),null,{default:l(()=>[o(r(x),{type:"primary",onClick:n.saveInfo},{default:l(()=>[c("确定")]),_:1},8,["onClick"])]),_:1})]),_:1},8,["model","rules"])])]))}}),R=F(M,[["__scopeId","data-v-2decc23a"]]),T=a("h2",{id:"自定义校验规则",tabindex:"-1"},[c("自定义校验规则 "),a("a",{class:"header-anchor",href:"#自定义校验规则","aria-label":'Permalink to "自定义校验规则"'},"​")],-1),j={class:"common_container"},J={class:"codeWrap"},z=a("h2",{id:"校验规则用于iview表单",tabindex:"-1"},[c("校验规则用于iview表单 "),a("a",{class:"header-anchor",href:"#校验规则用于iview表单","aria-label":'Permalink to "校验规则用于iview表单"'},"​")],-1),A={class:"common_container"},G={class:"codeWrap"},H=a("div",null,"iviewValidate，未实践验证",-1),Fe=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"docs/demo/Validate.md","filePath":"docs/demo/Validate.md"}'),K={name:"docs/demo/Validate.md"},We=Object.assign(K,{setup(i){const d=f("/static/_file/md/demo/validate/");return(m,_)=>(u(),v("div",null,[T,a("div",j,[a("div",J,[o(g,{content:m.content,url:`${d.value}validate.md`},{default:l(()=>[o(R)]),_:1},8,["content","url"])])]),z,a("div",A,[a("div",G,[o(g,{content:m.content,url:`${d.value}iviewValidate.md`},{default:l(()=>[H]),_:1},8,["content","url"])])])]))}});export{Fe as __pageData,We as default};