import{M as w}from"./chunks/markDownBox.am9sQI3a.js";import{d as g,D as x,o as v,c as k,m as o,a as C,t as _,p as e,c3 as f,c4 as h,I as u,w as M,h as O,q as b,s as S,_ as y}from"./chunks/framework.FpOEJISx.js";import"./chunks/axios.AkAIBCGB.js";import"./chunks/jquery.xd2zrwf8.js";import"./chunks/theme.BhQF1MTw.js";const B=t=>(b("data-v-a24d5339"),t=t(),S(),t),D=B(()=>o("i",{class:"delete2_white"},null,-1)),I={id:"model",class:"mask"},$={class:"text"},N={style:{"text-align":"center"}},T=g({__name:"selfModal",props:{buttonTitle:{type:String,default:"进入调试模式"},tip:{type:String,default:"确定已完成任务编排后进入任务调试模式?调试模式下只能修改service属性"},onOk:{type:Function},onCancel:{type:Function}},setup(t){const s=t;function i(){const l=O(!1);return{model:l,showModal:()=>{l.value=!0},onOk:()=>{s.onOk&&s.onOk(),l.value=!1},onCancel:()=>{s.onCancel&&s.onCancel(),l.value=!1}}}const{model:c,showModal:d,onOk:r,onCancel:m}=i();return(l,n)=>{const p=x("dir");return v(),k("div",null,[o("button",{class:"Button",onClick:n[0]||(n[0]=(...a)=>e(d)&&e(d)(...a))},[D,C(" "+_(t.buttonTitle),1)]),f(o("div",I,null,512),[[h,e(c)]]),f(u(p,{class:"model"},{default:M(()=>[o("div",$,_(t.tip),1),o("div",N,[o("button",{class:"Button",style:{"margin-right":"10px"},onClick:n[1]||(n[1]=(...a)=>e(r)&&e(r)(...a))},"确定"),o("button",{class:"Button White",onClick:n[2]||(n[2]=(...a)=>e(m)&&e(m)(...a))},"取消")])]),_:1},512),[[h,e(c)]])])}}}),P=y(T,[["__scopeId","data-v-a24d5339"]]),V=o("h2",{id:"自定义弹框",tabindex:"-1"},[C("自定义弹框 "),o("a",{class:"header-anchor",href:"#自定义弹框","aria-label":'Permalink to "自定义弹框"'},"​")],-1),F={class:"common_container"},W={class:"codeWrap"},A=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"docs/enclosure/custom/Modal.md","filePath":"docs/enclosure/custom/Modal.md"}'),j={name:"docs/enclosure/custom/Modal.md"},G=Object.assign(j,{setup(t){const s=O("/static/_file/md/enclosure/modal/"),i=()=>{console.log("传入的onOK")},c=()=>{console.log("传入的onCancel")};return(d,r)=>(v(),k("div",null,[V,o("div",F,[o("div",W,[u(w,{content:d.content,url:`${s.value}selfModal.md`},{default:M(()=>[o("div",null,[u(P,{buttonTitle:"按钮标题",tip:"弹框提示语",onOk:i,onCancel:c})])]),_:1},8,["content","url"])])])]))}});export{A as __pageData,G as default};
