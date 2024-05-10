import{n as x,i as G,d as j,p as ae}from"./index.QCmupQ0Q.js";import{d as N,N as Q,h,k as C,c6 as se,c7 as F,o as L,b as M,w as Z,c3 as le,m as O,n as B,p as g,Q as A,c4 as oe,T as re,c as J,I,F as ne,y as U,R as V,Z as ie,c5 as ce,l as ue,C as fe,r as ve,K as de,e as me,cu as pe}from"./framework.FpOEJISx.js";import{b as W,_ as D,u as ee,d as he,f as R,w as ye,g as be}from"./plugin-vue_export-helper.5bvupO3q.js";import{t as ge}from"./event.V_JNIUhO.js";const We=t=>t,T=4,Se={vertical:{offset:"offsetHeight",scroll:"scrollTop",scrollSize:"scrollHeight",size:"height",key:"vertical",axis:"Y",client:"clientY",direction:"top"},horizontal:{offset:"offsetWidth",scroll:"scrollLeft",scrollSize:"scrollWidth",size:"width",key:"horizontal",axis:"X",client:"clientX",direction:"left"}},we=({move:t,size:a,bar:s})=>({[s.size]:a,transform:`translate${s.axis}(${t}%)`}),$=Symbol("scrollbarContextKey"),ze=W({vertical:Boolean,size:String,move:Number,ratio:{type:Number,required:!0},always:Boolean}),Ee="Thumb",_e=N({__name:"thumb",props:ze,setup(t){const a=t,s=Q($),o=ee("scrollbar");s||ge(Ee,"can not inject scrollbar context");const n=h(),c=h(),u=h({}),f=h(!1);let r=!1,y=!1,b=G?document.onselectstart:null;const l=C(()=>Se[a.vertical?"vertical":"horizontal"]),i=C(()=>we({size:a.size,move:a.move,bar:l.value})),m=C(()=>n.value[l.value.offset]**2/s.wrapElement[l.value.scrollSize]/a.ratio/c.value[l.value.offset]),p=d=>{var w;if(d.stopPropagation(),d.ctrlKey||[1,2].includes(d.button))return;(w=window.getSelection())==null||w.removeAllRanges(),_(d);const H=d.currentTarget;H&&(u.value[l.value.axis]=H[l.value.offset]-(d[l.value.client]-H.getBoundingClientRect()[l.value.direction]))},E=d=>{if(!c.value||!n.value||!s.wrapElement)return;const w=Math.abs(d.target.getBoundingClientRect()[l.value.direction]-d[l.value.client]),H=c.value[l.value.offset]/2,P=(w-H)*100*m.value/n.value[l.value.offset];s.wrapElement[l.value.scroll]=P*s.wrapElement[l.value.scrollSize]/100},_=d=>{d.stopImmediatePropagation(),r=!0,document.addEventListener("mousemove",S),document.addEventListener("mouseup",v),b=document.onselectstart,document.onselectstart=()=>!1},S=d=>{if(!n.value||!c.value||r===!1)return;const w=u.value[l.value.axis];if(!w)return;const H=(n.value.getBoundingClientRect()[l.value.direction]-d[l.value.client])*-1,P=c.value[l.value.offset]-w,te=(H-P)*100*m.value/n.value[l.value.offset];s.wrapElement[l.value.scroll]=te*s.wrapElement[l.value.scrollSize]/100},v=()=>{r=!1,u.value[l.value.axis]=0,document.removeEventListener("mousemove",S),document.removeEventListener("mouseup",v),K(),y&&(f.value=!1)},e=()=>{y=!1,f.value=!!a.size},k=()=>{y=!0,f.value=r};se(()=>{K(),document.removeEventListener("mouseup",v)});const K=()=>{document.onselectstart!==b&&(document.onselectstart=b)};return x(F(s,"scrollbarElement"),"mousemove",e),x(F(s,"scrollbarElement"),"mouseleave",k),(d,w)=>(L(),M(re,{name:g(o).b("fade"),persisted:""},{default:Z(()=>[le(O("div",{ref_key:"instance",ref:n,class:B([g(o).e("bar"),g(o).is(g(l).key)]),onMousedown:E},[O("div",{ref_key:"thumb",ref:c,class:B(g(o).e("thumb")),style:A(g(i)),onMousedown:p},null,38)],34),[[oe,d.always||f.value]])]),_:1},8,["name"]))}});var X=D(_e,[["__file","thumb.vue"]]);const He=W({always:{type:Boolean,default:!0},minSize:{type:Number,required:!0}}),Te=N({__name:"bar",props:He,setup(t,{expose:a}){const s=t,o=Q($),n=h(0),c=h(0),u=h(""),f=h(""),r=h(1),y=h(1);return a({handleScroll:i=>{if(i){const m=i.offsetHeight-T,p=i.offsetWidth-T;c.value=i.scrollTop*100/m*r.value,n.value=i.scrollLeft*100/p*y.value}},update:()=>{const i=o==null?void 0:o.wrapElement;if(!i)return;const m=i.offsetHeight-T,p=i.offsetWidth-T,E=m**2/i.scrollHeight,_=p**2/i.scrollWidth,S=Math.max(E,s.minSize),v=Math.max(_,s.minSize);r.value=E/(m-E)/(S/(m-S)),y.value=_/(p-_)/(v/(p-v)),f.value=S+T<m?`${S}px`:"",u.value=v+T<p?`${v}px`:""}}),(i,m)=>(L(),J(ne,null,[I(X,{move:n.value,ratio:y.value,size:u.value,always:i.always},null,8,["move","ratio","size","always"]),I(X,{move:c.value,ratio:r.value,size:f.value,vertical:"",always:i.always},null,8,["move","ratio","size","always"])],64))}});var Ce=D(Te,[["__file","bar.vue"]]);const ke=W({height:{type:[String,Number],default:""},maxHeight:{type:[String,Number],default:""},native:{type:Boolean,default:!1},wrapStyle:{type:he([String,Object,Array]),default:""},wrapClass:{type:[String,Array],default:""},viewClass:{type:[String,Array],default:""},viewStyle:{type:[String,Array,Object],default:""},noresize:Boolean,tag:{type:String,default:"div"},always:Boolean,minSize:{type:Number,default:20},id:String,role:String,ariaLabel:String,ariaOrientation:{type:String,values:["horizontal","vertical"]}}),Re={scroll:({scrollTop:t,scrollLeft:a})=>[t,a].every(R)},Le="ElScrollbar",Be=N({name:Le}),Ne=N({...Be,props:ke,emits:Re,setup(t,{expose:a,emit:s}){const o=t,n=ee("scrollbar");let c,u;const f=h(),r=h(),y=h(),b=h(),l=C(()=>{const e={};return o.height&&(e.height=j(o.height)),o.maxHeight&&(e.maxHeight=j(o.maxHeight)),[o.wrapStyle,e]}),i=C(()=>[o.wrapClass,n.e("wrap"),{[n.em("wrap","hidden-default")]:!o.native}]),m=C(()=>[n.e("view"),o.viewClass]),p=()=>{var e;r.value&&((e=b.value)==null||e.handleScroll(r.value),s("scroll",{scrollTop:r.value.scrollTop,scrollLeft:r.value.scrollLeft}))};function E(e,k){pe(e)?r.value.scrollTo(e):R(e)&&R(k)&&r.value.scrollTo(e,k)}const _=e=>{R(e)&&(r.value.scrollTop=e)},S=e=>{R(e)&&(r.value.scrollLeft=e)},v=()=>{var e;(e=b.value)==null||e.update()};return U(()=>o.noresize,e=>{e?(c==null||c(),u==null||u()):({stop:c}=ae(y,v),u=x("resize",v))},{immediate:!0}),U(()=>[o.maxHeight,o.height],()=>{o.native||V(()=>{var e;v(),r.value&&((e=b.value)==null||e.handleScroll(r.value))})}),ie($,ce({scrollbarElement:f,wrapElement:r})),ue(()=>{o.native||V(()=>{v()})}),fe(()=>v()),a({wrapRef:r,update:v,scrollTo:E,setScrollTop:_,setScrollLeft:S,handleScroll:p}),(e,k)=>(L(),J("div",{ref_key:"scrollbarRef",ref:f,class:B(g(n).b())},[O("div",{ref_key:"wrapRef",ref:r,class:B(g(i)),style:A(g(l)),onScroll:p},[(L(),M(de(e.tag),{id:e.id,ref_key:"resizeRef",ref:y,class:B(g(m)),style:A(e.viewStyle),role:e.role,"aria-label":e.ariaLabel,"aria-orientation":e.ariaOrientation},{default:Z(()=>[ve(e.$slots,"default")]),_:3},8,["id","class","style","role","aria-label","aria-orientation"]))],38),e.native?me("v-if",!0):(L(),M(Ce,{key:0,ref_key:"barRef",ref:b,always:e.always,"min-size":e.minSize},null,8,["always","min-size"]))],2))}});var Pe=D(Ne,[["__file","scrollbar.vue"]]);const De=ye(Pe),z=new Map;let Y;G&&(document.addEventListener("mousedown",t=>Y=t),document.addEventListener("mouseup",t=>{for(const a of z.values())for(const{documentHandler:s}of a)s(t,Y)}));function q(t,a){let s=[];return Array.isArray(a.arg)?s=a.arg:be(a.arg)&&s.push(a.arg),function(o,n){const c=a.instance.popperRef,u=o.target,f=n==null?void 0:n.target,r=!a||!a.instance,y=!u||!f,b=t.contains(u)||t.contains(f),l=t===u,i=s.length&&s.some(p=>p==null?void 0:p.contains(u))||s.length&&s.includes(f),m=c&&(c.contains(u)||c.contains(f));r||y||b||l||i||m||a.value(o,n)}}const $e={beforeMount(t,a){z.has(t)||z.set(t,[]),z.get(t).push({documentHandler:q(t,a),bindingFn:a.value})},updated(t,a){z.has(t)||z.set(t,[]);const s=z.get(t),o=s.findIndex(c=>c.bindingFn===a.oldValue),n={documentHandler:q(t,a),bindingFn:a.value};o>=0?s.splice(o,1,n):s.push(n)},unmounted(t){z.delete(t)}};export{$e as C,De as E,We as m};