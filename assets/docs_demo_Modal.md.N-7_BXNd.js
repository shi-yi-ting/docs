import{M as C}from"./chunks/markDownBox.0P6YsIB1.js";import{B as k}from"./chunks/index.vMHbGGvX.js";import{F as q,a as _}from"./chunks/index.O6wkJjl6.js";import{S as A,b as F}from"./chunks/index.memzo4Lr.js";import{I as N}from"./chunks/index.GoCHZY-3.js";import{M as I}from"./chunks/index.l64p2xUu.js";import{d as P,o as f,c as v,m as o,I as l,w as r,a as s,p as t,F as S,E as V,b as $,t as L,h as g,c5 as u,l as R,_ as U}from"./chunks/framework.FpOEJISx.js";import"./chunks/axios.AkAIBCGB.js";import"./chunks/jquery.mE_SOKaf.js";import"./chunks/theme.5wfSrMJJ.js";import"./chunks/useConfigInject.HSKnNMqX.js";import"./chunks/index._Y40OLZn.js";import"./chunks/isArrayLikeObject.QzTxMw9v.js";import"./chunks/flatten.lPjqfmc_.js";import"./chunks/isEqual.L5aOBdXd.js";import"./chunks/isArray.ZyNFv1vC.js";import"./chunks/isObject.u1V2KUQz.js";import"./chunks/overArg.clypzKbc.js";import"./chunks/isPlainObject.LbEOpjII.js";import"./chunks/baseIteratee.6BhFgZ6Z.js";import"./chunks/get.CN6VB36A.js";import"./chunks/debounce.7vty6ZOk.js";import"./chunks/useFlexGapSupport.HJQ8DfKP.js";import"./chunks/baseFindIndex.CG3ccTGJ.js";import"./chunks/styleChecker.UrA0N4LC.js";import"./chunks/Trigger.JjsnWSZU.js";import"./chunks/contains.SQkeJ0xF.js";import"./chunks/vnode.EveoWuW-.js";import"./chunks/Portal.3HvYVhRv.js";import"./chunks/toInteger.cdoqv0r-.js";import"./chunks/FormItemContext.YPhpiwCO.js";import"./chunks/KeyCode.S8dia2Uh.js";import"./chunks/pickAttrs.ABg5saZY.js";import"./chunks/objectDestructuringEmpty.1PR54iw-.js";import"./chunks/PortalWrapper.FHKGZbeb.js";import"./chunks/getScrollBarSize.KoyaLeRI.js";import"./chunks/ActionButton.u6bwCjuZ.js";const T={class:"sider-header"},E={class:"operate"},W=P({__name:"antModal02",setup(y){function m(){const i=g(null),a=u({visiable:!1,title:""}),e=u({id:"",title:"",chapterName:""});return{formRef:i,dialog:a,inputData:e,rules:{title:[{required:!0,message:"请填写篇名"}],chapterName:[{required:!0,message:"请填写章节名"}]},addModal:()=>{var n;(n=i.value)==null||n.clearValidate(),e.id="",e.title="",e.chapterName="",a.visiable=!0,a.title="新增"},editModal:n=>{var M;(M=i.value)==null||M.clearValidate(),e.id="1",e.title="123",e.chapterName="武汉",a.visiable=!0,a.title="编辑"},save:async()=>{try{const n={id:e.id,code:e.title,proName:e.chapterName};a.visiable=!1}catch(n){console.log(n),a.visiable=!1}}}}const{formRef:c,dialog:p,inputData:d,rules:w,addModal:x,editModal:j,save:B}=m();function O(){const i=u({jobContentList:[]}),a=u({jobContent:""}),e=async()=>{try{i.jobContentList=[{label:"选项01",value:"1"},{label:"选项02",value:"2"}]}catch(b){console.log("error",b)}};return R(()=>{e()}),{options:i,q:a}}const{options:D,q:h}=O();return(i,a)=>(f(),v("div",null,[o("div",T,[o("div",E,[l(t(k),{type:"primary",class:"mr15 pointer",onClick:t(x)},{default:r(()=>[s("新增")]),_:1},8,["onClick"]),l(t(k),{type:"primary",class:"mr15 pointer",onClick:t(j)},{default:r(()=>[s("编辑")]),_:1},8,["onClick"])])]),l(t(I),{visible:t(p).visiable,"onUpdate:visible":a[3]||(a[3]=e=>t(p).visiable=e),maskClosable:!1,title:t(p).title,okText:"保存",cancelText:"取消",width:580,onOk:t(B)},{default:r(()=>[l(t(q),{ref_key:"formRef",ref:c,model:t(d),rules:t(w),labelCol:{span:4},wrapperCol:{span:20},autocomplete:"off"},{default:r(()=>[l(t(_),{label:"工作内容",name:"jobContent"},{default:r(()=>[l(t(A),{value:t(h).jobContent,"onUpdate:value":a[0]||(a[0]=e=>t(h).jobContent=e),class:"width_220"},{default:r(()=>[(f(!0),v(S,null,V(t(D).jobContentList,e=>(f(),$(t(F),{key:e.value,value:e.value},{default:r(()=>[s(L(e.label),1)]),_:2},1032,["value"]))),128))]),_:1},8,["value"])]),_:1}),l(t(_),{label:"篇名",name:"title"},{default:r(()=>[l(t(N),{value:t(d).title,"onUpdate:value":a[1]||(a[1]=e=>t(d).title=e)},null,8,["value"])]),_:1}),l(t(_),{label:"章节名",name:"chapterName"},{default:r(()=>[l(t(N),{value:t(d).chapterName,"onUpdate:value":a[2]||(a[2]=e=>t(d).chapterName=e)},null,8,["value"])]),_:1})]),_:1},8,["model","rules"])]),_:1},8,["visible","title","onOk"])]))}}),J=U(W,[["__scopeId","data-v-d45c2cd5"]]),z=o("h2",{id:"ant-弹框",tabindex:"-1"},[s("Ant-弹框 "),o("a",{class:"header-anchor",href:"#ant-弹框","aria-label":'Permalink to "Ant-弹框"'},"​")],-1),G=o("h3",{id:"showantconfirm弹框函数",tabindex:"-1"},[s("showAntConfirm弹框函数 "),o("a",{class:"header-anchor",href:"#showantconfirm弹框函数","aria-label":'Permalink to "showAntConfirm弹框函数"'},"​")],-1),H={class:"common_container"},K={class:"codeWrap"},Q=o("div",null,[o("div",null,"基于Modal.confirm封装一个弹框方法")],-1),X=o("h3",{id:"modal新增编辑弹框",tabindex:"-1"},[s("Modal新增编辑弹框 "),o("a",{class:"header-anchor",href:"#modal新增编辑弹框","aria-label":'Permalink to "Modal新增编辑弹框"'},"​")],-1),Y={class:"common_container"},Z={class:"codeWrap"},Ut=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"docs/demo/Modal.md","filePath":"docs/demo/Modal.md"}'),tt={name:"docs/demo/Modal.md"},Tt=Object.assign(tt,{setup(y){const m=g("/static/_file/md/demo/modal/");return(c,p)=>(f(),v("div",null,[z,G,o("div",H,[o("div",K,[l(C,{content:c.content,url:`${m.value}modal.md`},{default:r(()=>[Q]),_:1},8,["content","url"])])]),X,o("div",Y,[o("div",Z,[l(C,{content:c.content,url:`${m.value}modal02.md`},{default:r(()=>[o("div",null,[l(J)])]),_:1},8,["content","url"])])])]))}});export{Ut as __pageData,Tt as default};
