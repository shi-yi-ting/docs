import{l as U,E as w}from"./index.QCmupQ0Q.js";import{u as O,i as T}from"./index.s6BjabQE.js";import{h as G,c8 as R,N as F,k as f,a2 as Z,c9 as q,d as S,o as b,b as y,w as C,c as $,F as H,r as B,p as n,n as V,K as N,e as E,M as J,Z as L,c5 as Q,c7 as x}from"./framework.FpOEJISx.js";import{u as W,a as X,b as D,c as Y}from"./use-form-item.9h_frHX9.js";import{b as oo,d as to,u as I,_ as K,w as eo,a as no}from"./plugin-vue_export-helper.5bvupO3q.js";import{T as ao}from"./index._Y40OLZn.js";const so=Symbol(),P=G();function lo(t,r=void 0){const e=R()?F(so,P):P;return t?f(()=>{var s,l;return(l=(s=e.value)==null?void 0:s[t])!=null?l:r}):e}const j=Symbol("buttonGroupContextKey"),ro=(t,r)=>{O({from:"type.text",replacement:"link",version:"3.0.0",scope:"props",ref:"https://element-plus.org/en-US/component/button.html#button-attributes"},f(()=>t.type==="text"));const e=F(j,void 0),s=lo("button"),{form:l}=W(),o=X(f(()=>e==null?void 0:e.size)),i=D(),m=G(),c=Z(),g=f(()=>t.type||(e==null?void 0:e.type)||""),h=f(()=>{var u,p,v;return(v=(p=t.autoInsertSpace)!=null?p:(u=s.value)==null?void 0:u.autoInsertSpace)!=null?v:!1}),k=f(()=>t.tag==="button"?{ariaDisabled:i.value||t.loading,disabled:i.value||t.loading,autofocus:t.autofocus,type:t.nativeType}:{}),_=f(()=>{var u;const p=(u=c.default)==null?void 0:u.call(c);if(h.value&&(p==null?void 0:p.length)===1){const v=p[0];if((v==null?void 0:v.type)===q){const M=v.children;return new RegExp("^\\p{Unified_Ideograph}{2}$","u").test(M.trim())}}return!1});return{_disabled:i,_size:o,_type:g,_ref:m,_props:k,shouldAddSpace:_,handleClick:u=>{t.nativeType==="reset"&&(l==null||l.resetFields()),r("click",u)}}},io=["default","primary","success","warning","info","danger","text",""],co=["button","submit","reset"],z=oo({size:Y,disabled:Boolean,type:{type:String,values:io,default:""},icon:{type:T},nativeType:{type:String,values:co,default:"button"},loading:Boolean,loadingIcon:{type:T,default:()=>U},plain:Boolean,text:Boolean,link:Boolean,bg:Boolean,autofocus:Boolean,round:Boolean,circle:Boolean,color:String,dark:Boolean,autoInsertSpace:{type:Boolean,default:void 0},tag:{type:to([String,Object]),default:"button"}}),uo={click:t=>t instanceof MouseEvent};function d(t,r=20){return t.mix("#141414",r).toString()}function bo(t){const r=D(),e=I("button");return f(()=>{let s={};const l=t.color;if(l){const o=new ao(l),i=t.dark?o.tint(20).toString():d(o,20);if(t.plain)s=e.cssVarBlock({"bg-color":t.dark?d(o,90):o.tint(90).toString(),"text-color":l,"border-color":t.dark?d(o,50):o.tint(50).toString(),"hover-text-color":`var(${e.cssVarName("color-white")})`,"hover-bg-color":l,"hover-border-color":l,"active-bg-color":i,"active-text-color":`var(${e.cssVarName("color-white")})`,"active-border-color":i}),r.value&&(s[e.cssVarBlockName("disabled-bg-color")]=t.dark?d(o,90):o.tint(90).toString(),s[e.cssVarBlockName("disabled-text-color")]=t.dark?d(o,50):o.tint(50).toString(),s[e.cssVarBlockName("disabled-border-color")]=t.dark?d(o,80):o.tint(80).toString());else{const m=t.dark?d(o,30):o.tint(30).toString(),c=o.isDark()?`var(${e.cssVarName("color-white")})`:`var(${e.cssVarName("color-black")})`;if(s=e.cssVarBlock({"bg-color":l,"text-color":c,"border-color":l,"hover-bg-color":m,"hover-text-color":c,"hover-border-color":m,"active-bg-color":i,"active-border-color":i}),r.value){const g=t.dark?d(o,50):o.tint(50).toString();s[e.cssVarBlockName("disabled-bg-color")]=g,s[e.cssVarBlockName("disabled-text-color")]=t.dark?"rgba(255, 255, 255, 0.5)":`var(${e.cssVarName("color-white")})`,s[e.cssVarBlockName("disabled-border-color")]=g}}}return s})}const fo=S({name:"ElButton"}),mo=S({...fo,props:z,emits:uo,setup(t,{expose:r,emit:e}){const s=t,l=bo(s),o=I("button"),{_ref:i,_size:m,_type:c,_disabled:g,_props:h,shouldAddSpace:k,handleClick:_}=ro(s,e);return r({ref:i,size:m,type:c,disabled:g,shouldAddSpace:k}),(a,u)=>(b(),y(N(a.tag),J({ref_key:"_ref",ref:i},n(h),{class:[n(o).b(),n(o).m(n(c)),n(o).m(n(m)),n(o).is("disabled",n(g)),n(o).is("loading",a.loading),n(o).is("plain",a.plain),n(o).is("round",a.round),n(o).is("circle",a.circle),n(o).is("text",a.text),n(o).is("link",a.link),n(o).is("has-bg",a.bg)],style:n(l),onClick:n(_)}),{default:C(()=>[a.loading?(b(),$(H,{key:0},[a.$slots.loading?B(a.$slots,"loading",{key:0}):(b(),y(n(w),{key:1,class:V(n(o).is("loading"))},{default:C(()=>[(b(),y(N(a.loadingIcon)))]),_:1},8,["class"]))],64)):a.icon||a.$slots.icon?(b(),y(n(w),{key:1},{default:C(()=>[a.icon?(b(),y(N(a.icon),{key:0})):B(a.$slots,"icon",{key:1})]),_:3})):E("v-if",!0),a.$slots.default?(b(),$("span",{key:2,class:V({[n(o).em("text","expand")]:n(k)})},[B(a.$slots,"default")],2)):E("v-if",!0)]),_:3},16,["class","style","onClick"]))}});var go=K(mo,[["__file","button.vue"]]);const po={size:z.size,type:z.type},vo=S({name:"ElButtonGroup"}),yo=S({...vo,props:po,setup(t){const r=t;L(j,Q({size:x(r,"size"),type:x(r,"type")}));const e=I("button");return(s,l)=>(b(),$("div",{class:V(`${n(e).b("group")}`)},[B(s.$slots,"default")],2))}});var A=K(yo,[["__file","button-group.vue"]]);const No=eo(go,{ButtonGroup:A});no(A);export{No as E,lo as u};
