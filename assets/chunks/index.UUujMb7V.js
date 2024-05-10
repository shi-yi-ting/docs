import{k as p,c8 as Fe,h as N,G,y as Q,cs as je,cv as ae,d as ke,cp as We,a2 as Ue,R as P,l as _e,c7 as Ye,c3 as Xe,c4 as Ge,o as v,c as S,e as m,F as oe,n as y,p as t,r as _,m as V,b as I,w as A,K as Y,M as ne,I as Qe,a1 as Ze,ct as qe,t as X,Q as Je,cu as we}from"./framework.FpOEJISx.js";import{i as Pe,n as et,F as tt,G as at,p as ot,E as L,b as nt}from"./index.QCmupQ0Q.js";import{f as Se,b as st,d as se,u as Ce,_ as lt,w as rt}from"./plugin-vue_export-helper.5bvupO3q.js";import{c as it,u as ut,g as ct,a as dt,b as pt}from"./use-form-item.9h_frHX9.js";import{i as Ie,V as ft,a as vt}from"./index.s6BjabQE.js";import{m as mt}from"./index.xqhuAsWc.js";import{U as le,d as Ee}from"./event.V_JNIUhO.js";import{f as ht}from"./fromPairs.E3iD47Fd.js";const yt=()=>Pe&&/firefox/i.test(window.navigator.userAgent),gt=o=>/([\uAC00-\uD7AF\u3130-\u318F])+/gi.test(o),bt=["class","style"],xt=/^on[A-Z]/,wt=(o={})=>{const{excludeListeners:f=!1,excludeKeys:u}=o,a=p(()=>((u==null?void 0:u.value)||[]).concat(bt)),r=Fe();return r?p(()=>{var i;return ht(Object.entries((i=r.proxy)==null?void 0:i.$attrs).filter(([c])=>!a.value.includes(c)&&!(f&&xt.test(c))))}):p(()=>({}))};function St(o){const f=N();function u(){if(o.value==null)return;const{selectionStart:r,selectionEnd:i,value:c}=o.value;if(r==null||i==null)return;const g=c.slice(0,Math.max(0,r)),d=c.slice(Math.max(0,i));f.value={selectionStart:r,selectionEnd:i,value:c,beforeTxt:g,afterTxt:d}}function a(){if(o.value==null||f.value==null)return;const{value:r}=o.value,{beforeTxt:i,afterTxt:c,selectionStart:g}=f.value;if(i==null||c==null||g==null)return;let d=r.length;if(r.endsWith(c))d=r.length-c.length;else if(r.startsWith(i))d=i.length;else{const x=i[g-1],w=r.indexOf(x,g-1);w!==-1&&(d=w+1)}o.value.setSelectionRange(d,d)}return[u,a]}function Ct(o,{afterFocus:f,beforeBlur:u,afterBlur:a}={}){const r=Fe(),{emit:i}=r,c=G(),g=N(!1),d=s=>{g.value||(g.value=!0,i("focus",s),f==null||f())},x=s=>{var T;je(u)&&u(s)||s.relatedTarget&&((T=c.value)!=null&&T.contains(s.relatedTarget))||(g.value=!1,i("blur",s),a==null||a())},w=()=>{var s;(s=o.value)==null||s.focus()};return Q(c,s=>{s&&s.setAttribute("tabindex","-1")}),et(c,"click",w),{wrapperRef:c,isFocused:g,handleFocus:d,handleBlur:x}}let b;const It=`
  height:0 !important;
  visibility:hidden !important;
  ${yt()?"":"overflow:hidden !important;"}
  position:absolute !important;
  z-index:-1000 !important;
  top:0 !important;
  right:0 !important;
`,Et=["letter-spacing","line-height","padding-top","padding-bottom","font-family","font-weight","font-size","text-rendering","text-transform","width","text-indent","padding-left","padding-right","border-width","box-sizing"];function zt(o){const f=window.getComputedStyle(o),u=f.getPropertyValue("box-sizing"),a=Number.parseFloat(f.getPropertyValue("padding-bottom"))+Number.parseFloat(f.getPropertyValue("padding-top")),r=Number.parseFloat(f.getPropertyValue("border-bottom-width"))+Number.parseFloat(f.getPropertyValue("border-top-width"));return{contextStyle:Et.map(c=>`${c}:${f.getPropertyValue(c)}`).join(";"),paddingSize:a,borderSize:r,boxSizing:u}}function ze(o,f=1,u){var a;b||(b=document.createElement("textarea"),document.body.appendChild(b));const{paddingSize:r,borderSize:i,boxSizing:c,contextStyle:g}=zt(o);b.setAttribute("style",`${g};${It}`),b.value=o.value||o.placeholder||"";let d=b.scrollHeight;const x={};c==="border-box"?d=d+i:c==="content-box"&&(d=d-r),b.value="";const w=b.scrollHeight-r;if(Se(f)){let s=w*f;c==="border-box"&&(s=s+r+i),d=Math.max(s,d),x.minHeight=`${s}px`}if(Se(u)){let s=w*u;c==="border-box"&&(s=s+r+i),d=Math.min(s,d)}return x.height=`${d}px`,(a=b.parentNode)==null||a.removeChild(b),b=void 0,x}const Ft=st({id:{type:String,default:void 0},size:it,disabled:Boolean,modelValue:{type:se([String,Number,Object]),default:""},maxlength:{type:[String,Number]},minlength:{type:[String,Number]},type:{type:String,default:"text"},resize:{type:String,values:["none","both","horizontal","vertical"]},autosize:{type:se([Boolean,Object]),default:!1},autocomplete:{type:String,default:"off"},formatter:{type:Function},parser:{type:Function},placeholder:{type:String},form:{type:String},readonly:{type:Boolean,default:!1},clearable:{type:Boolean,default:!1},showPassword:{type:Boolean,default:!1},showWordLimit:{type:Boolean,default:!1},suffixIcon:{type:Ie},prefixIcon:{type:Ie},containerRole:{type:String,default:void 0},label:{type:String,default:void 0},tabindex:{type:[String,Number],default:0},validateEvent:{type:Boolean,default:!0},inputStyle:{type:se([Object,Array,String]),default:()=>mt({})},autofocus:{type:Boolean,default:!1}}),kt={[le]:o=>ae(o),input:o=>ae(o),change:o=>ae(o),focus:o=>o instanceof FocusEvent,blur:o=>o instanceof FocusEvent,clear:()=>!0,mouseleave:o=>o instanceof MouseEvent,mouseenter:o=>o instanceof MouseEvent,keydown:o=>o instanceof Event,compositionstart:o=>o instanceof CompositionEvent,compositionupdate:o=>o instanceof CompositionEvent,compositionend:o=>o instanceof CompositionEvent},Pt=["role"],Vt=["id","minlength","maxlength","type","disabled","readonly","autocomplete","tabindex","aria-label","placeholder","form","autofocus"],Nt=["id","minlength","maxlength","tabindex","disabled","readonly","autocomplete","aria-label","placeholder","form","autofocus"],Tt=ke({name:"ElInput",inheritAttrs:!1}),Rt=ke({...Tt,props:Ft,emits:kt,setup(o,{expose:f,emit:u}){const a=o,r=We(),i=Ue(),c=p(()=>{const e={};return a.containerRole==="combobox"&&(e["aria-haspopup"]=r["aria-haspopup"],e["aria-owns"]=r["aria-owns"],e["aria-expanded"]=r["aria-expanded"]),e}),g=p(()=>[a.type==="textarea"?ie.b():l.b(),l.m(re.value),l.is("disabled",z.value),l.is("exceed",Re.value),{[l.b("group")]:i.prepend||i.append,[l.bm("group","append")]:i.append,[l.bm("group","prepend")]:i.prepend,[l.m("prefix")]:i.prefix||a.prefixIcon,[l.m("suffix")]:i.suffix||a.suffixIcon||a.clearable||a.showPassword,[l.bm("suffix","password-clear")]:W.value&&J.value},r.class]),d=p(()=>[l.e("wrapper"),l.is("focus",q.value)]),x=wt({excludeKeys:p(()=>Object.keys(c.value))}),{form:w,formItem:s}=ut(),{inputId:T}=ct(a,{formItemContext:s}),re=dt(),z=pt(),l=Ce("input"),ie=Ce("textarea"),O=G(),C=G(),Z=N(!1),R=N(!1),H=N(!1),ue=N(),D=G(a.inputStyle),F=p(()=>O.value||C.value),{wrapperRef:Ve,isFocused:q,handleFocus:K,handleBlur:j}=Ct(F,{afterBlur(){var e;a.validateEvent&&((e=s==null?void 0:s.validate)==null||e.call(s,"blur").catch(n=>Ee()))}}),ce=p(()=>{var e;return(e=w==null?void 0:w.statusIcon)!=null?e:!1}),B=p(()=>(s==null?void 0:s.validateState)||""),de=p(()=>B.value&&ft[B.value]),Ne=p(()=>H.value?tt:at),Te=p(()=>[r.style]),pe=p(()=>[a.inputStyle,D.value,{resize:a.resize}]),E=p(()=>vt(a.modelValue)?"":String(a.modelValue)),W=p(()=>a.clearable&&!z.value&&!a.readonly&&!!E.value&&(q.value||Z.value)),J=p(()=>a.showPassword&&!z.value&&!a.readonly&&!!E.value&&(!!E.value||q.value)),k=p(()=>a.showWordLimit&&!!a.maxlength&&(a.type==="text"||a.type==="textarea")&&!z.value&&!a.readonly&&!a.showPassword),ee=p(()=>E.value.length),Re=p(()=>!!k.value&&ee.value>Number(a.maxlength)),Be=p(()=>!!i.suffix||!!a.suffixIcon||W.value||a.showPassword||k.value||!!B.value&&ce.value),[Me,$e]=St(O);ot(C,e=>{if(Ae(),!k.value||a.resize!=="both")return;const n=e[0],{width:h}=n.contentRect;ue.value={right:`calc(100% - ${h+15+6}px)`}});const M=()=>{const{type:e,autosize:n}=a;if(!(!Pe||e!=="textarea"||!C.value))if(n){const h=we(n)?n.minRows:void 0,U=we(n)?n.maxRows:void 0,xe=ze(C.value,h,U);D.value={overflowY:"hidden",...xe},P(()=>{C.value.offsetHeight,D.value=xe})}else D.value={minHeight:ze(C.value).minHeight}},Ae=(e=>{let n=!1;return()=>{var h;if(n||!a.autosize)return;((h=C.value)==null?void 0:h.offsetParent)===null||(e(),n=!0)}})(M),$=()=>{const e=F.value,n=a.formatter?a.formatter(E.value):E.value;!e||e.value===n||(e.value=n)},te=async e=>{Me();let{value:n}=e.target;if(a.formatter&&(n=a.parser?a.parser(n):n),!R.value){if(n===E.value){$();return}u(le,n),u("input",n),await P(),$(),$e()}},fe=e=>{u("change",e.target.value)},ve=e=>{u("compositionstart",e),R.value=!0},me=e=>{var n;u("compositionupdate",e);const h=(n=e.target)==null?void 0:n.value,U=h[h.length-1]||"";R.value=!gt(U)},he=e=>{u("compositionend",e),R.value&&(R.value=!1,te(e))},Le=()=>{H.value=!H.value,ye()},ye=async()=>{var e;await P(),(e=F.value)==null||e.focus()},Oe=()=>{var e;return(e=F.value)==null?void 0:e.blur()},He=e=>{Z.value=!1,u("mouseleave",e)},De=e=>{Z.value=!0,u("mouseenter",e)},ge=e=>{u("keydown",e)},Ke=()=>{var e;(e=F.value)==null||e.select()},be=()=>{u(le,""),u("change",""),u("clear"),u("input","")};return Q(()=>a.modelValue,()=>{var e;P(()=>M()),a.validateEvent&&((e=s==null?void 0:s.validate)==null||e.call(s,"change").catch(n=>Ee()))}),Q(E,()=>$()),Q(()=>a.type,async()=>{await P(),$(),M()}),_e(()=>{!a.formatter&&a.parser,$(),P(M)}),f({input:O,textarea:C,ref:F,textareaStyle:pe,autosize:Ye(a,"autosize"),focus:ye,blur:Oe,select:Ke,clear:be,resizeTextarea:M}),(e,n)=>Xe((v(),S("div",ne(t(c),{class:t(g),style:t(Te),role:e.containerRole,onMouseenter:De,onMouseleave:He}),[m(" input "),e.type!=="textarea"?(v(),S(oe,{key:0},[m(" prepend slot "),e.$slots.prepend?(v(),S("div",{key:0,class:y(t(l).be("group","prepend"))},[_(e.$slots,"prepend")],2)):m("v-if",!0),V("div",{ref_key:"wrapperRef",ref:Ve,class:y(t(d))},[m(" prefix slot "),e.$slots.prefix||e.prefixIcon?(v(),S("span",{key:0,class:y(t(l).e("prefix"))},[V("span",{class:y(t(l).e("prefix-inner"))},[_(e.$slots,"prefix"),e.prefixIcon?(v(),I(t(L),{key:0,class:y(t(l).e("icon"))},{default:A(()=>[(v(),I(Y(e.prefixIcon)))]),_:1},8,["class"])):m("v-if",!0)],2)],2)):m("v-if",!0),V("input",ne({id:t(T),ref_key:"input",ref:O,class:t(l).e("inner")},t(x),{minlength:e.minlength,maxlength:e.maxlength,type:e.showPassword?H.value?"text":"password":e.type,disabled:t(z),readonly:e.readonly,autocomplete:e.autocomplete,tabindex:e.tabindex,"aria-label":e.label,placeholder:e.placeholder,style:e.inputStyle,form:e.form,autofocus:e.autofocus,onCompositionstart:ve,onCompositionupdate:me,onCompositionend:he,onInput:te,onFocus:n[0]||(n[0]=(...h)=>t(K)&&t(K)(...h)),onBlur:n[1]||(n[1]=(...h)=>t(j)&&t(j)(...h)),onChange:fe,onKeydown:ge}),null,16,Vt),m(" suffix slot "),t(Be)?(v(),S("span",{key:1,class:y(t(l).e("suffix"))},[V("span",{class:y(t(l).e("suffix-inner"))},[!t(W)||!t(J)||!t(k)?(v(),S(oe,{key:0},[_(e.$slots,"suffix"),e.suffixIcon?(v(),I(t(L),{key:0,class:y(t(l).e("icon"))},{default:A(()=>[(v(),I(Y(e.suffixIcon)))]),_:1},8,["class"])):m("v-if",!0)],64)):m("v-if",!0),t(W)?(v(),I(t(L),{key:1,class:y([t(l).e("icon"),t(l).e("clear")]),onMousedown:Ze(t(qe),["prevent"]),onClick:be},{default:A(()=>[Qe(t(nt))]),_:1},8,["class","onMousedown"])):m("v-if",!0),t(J)?(v(),I(t(L),{key:2,class:y([t(l).e("icon"),t(l).e("password")]),onClick:Le},{default:A(()=>[(v(),I(Y(t(Ne))))]),_:1},8,["class"])):m("v-if",!0),t(k)?(v(),S("span",{key:3,class:y(t(l).e("count"))},[V("span",{class:y(t(l).e("count-inner"))},X(t(ee))+" / "+X(e.maxlength),3)],2)):m("v-if",!0),t(B)&&t(de)&&t(ce)?(v(),I(t(L),{key:4,class:y([t(l).e("icon"),t(l).e("validateIcon"),t(l).is("loading",t(B)==="validating")])},{default:A(()=>[(v(),I(Y(t(de))))]),_:1},8,["class"])):m("v-if",!0)],2)],2)):m("v-if",!0)],2),m(" append slot "),e.$slots.append?(v(),S("div",{key:1,class:y(t(l).be("group","append"))},[_(e.$slots,"append")],2)):m("v-if",!0)],64)):(v(),S(oe,{key:1},[m(" textarea "),V("textarea",ne({id:t(T),ref_key:"textarea",ref:C,class:t(ie).e("inner")},t(x),{minlength:e.minlength,maxlength:e.maxlength,tabindex:e.tabindex,disabled:t(z),readonly:e.readonly,autocomplete:e.autocomplete,style:t(pe),"aria-label":e.label,placeholder:e.placeholder,form:e.form,autofocus:e.autofocus,onCompositionstart:ve,onCompositionupdate:me,onCompositionend:he,onInput:te,onFocus:n[2]||(n[2]=(...h)=>t(K)&&t(K)(...h)),onBlur:n[3]||(n[3]=(...h)=>t(j)&&t(j)(...h)),onChange:fe,onKeydown:ge}),null,16,Nt),t(k)?(v(),S("span",{key:0,style:Je(ue.value),class:y(t(l).e("count"))},X(t(ee))+" / "+X(e.maxlength),7)):m("v-if",!0)],64))],16,Pt)),[[Ge,e.type!=="hidden"]])}});var Bt=lt(Rt,[["__file","input.vue"]]);const Wt=rt(Bt);export{Wt as E,gt as i,Ct as u};