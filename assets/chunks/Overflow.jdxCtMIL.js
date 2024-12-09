import{P,a as W,_ as r,c as Y}from"./useConfigInject.TplfaHhS.js";import{R as ne}from"./index.fX_50-bV.js";import{d as B,Z as we,k as o,N as Re,h as R,A as he,I as f,y as Ne}from"./framework.FpOEJISx.js";var ae=Symbol("OverflowContextProviderKey"),H=B({compatConfig:{MODE:3},name:"OverflowContextProvider",inheritAttrs:!1,props:{value:{type:Object}},setup:function(e,d){var v=d.slots;return we(ae,o(function(){return e.value})),function(){var c;return(c=v.default)===null||c===void 0?void 0:c.call(v)}}}),Ie=function(){return Re(ae,o(function(){return null}))},_e=["prefixCls","invalidate","item","renderItem","responsive","registerSize","itemKey","display","order","component"],K=void 0;const T=B({compatConfig:{MODE:3},name:"Item",props:{prefixCls:String,item:P.any,renderItem:Function,responsive:Boolean,itemKey:{type:[String,Number]},registerSize:Function,display:Boolean,order:Number,component:P.any,invalidate:Boolean},setup:function(e,d){var v=d.slots,c=d.expose,s=o(function(){return e.responsive&&!e.display}),S=R();c({itemNodeRef:S});function w(i){e.registerSize(e.itemKey,i)}return he(function(){w(null)}),function(){var i,h=e.prefixCls,N=e.invalidate,y=e.item,g=e.renderItem,m=e.responsive;e.registerSize,e.itemKey,e.display;var z=e.order,C=e.component,k=C===void 0?"div":C,O=W(e,_e),$=(i=v.default)===null||i===void 0?void 0:i.call(v),I=g&&y!==K?g(y):$,M;N||(M={opacity:s.value?0:1,height:s.value?0:K,overflowY:s.value?"hidden":K,order:m?z:K,pointerEvents:s.value?"none":K,position:s.value?"absolute":K});var j={};return s.value&&(j["aria-hidden"]=!0),f(ne,{disabled:!m,onResize:function(F){var A=F.offsetWidth;w(A)}},{default:function(){return f(k,r(r(r({class:Y(!N&&h),style:M},j),O),{},{ref:S}),{default:function(){return[I]}})}})}}});var be=["component"],ze=["className"],Oe=["class"];const Fe=B({compatConfig:{MODE:3},name:"RawItem",inheritAttrs:!1,props:{component:P.any,title:P.any,id:String,onMouseenter:{type:Function},onMouseleave:{type:Function},onClick:{type:Function},onKeydown:{type:Function},onFocus:{type:Function}},setup:function(e,d){var v=d.slots,c=d.attrs,s=Ie();return function(){if(!s.value){var S,w=e.component,i=w===void 0?"div":w,h=W(e,be);return f(i,r(r({},h),c),{default:function(){return[(S=v.default)===null||S===void 0?void 0:S.call(v)]}})}var N=s.value,y=N.className,g=W(N,ze),m=c.class,z=W(c,Oe);return f(H,{value:null},{default:function(){return[f(T,r(r(r({class:Y(y,m)},g),z),e),v)]}})}}});var Ee=["class","style"],re="responsive",ue="invalidate";function Ke(b){return"+ ".concat(b.length," ...")}var Pe=function(){return{id:String,prefixCls:String,data:Array,itemKey:[String,Number,Function],itemWidth:{type:Number,default:10},renderItem:Function,renderRawItem:Function,maxCount:[Number,String],renderRest:Function,renderRawRest:Function,suffix:P.any,component:String,itemComponent:P.any,onVisibleChange:Function,ssr:String,onMousedown:Function}},G=B({name:"Overflow",inheritAttrs:!1,props:Pe(),emits:["visibleChange"],setup:function(e,d){var v=d.attrs,c=d.emit,s=d.slots,S=o(function(){return e.ssr==="full"}),w=R(null),i=o(function(){return w.value||0}),h=R(new Map),N=R(0),y=R(0),g=R(0),m=R(null),z=R(null),C=o(function(){return z.value===null&&S.value?Number.MAX_SAFE_INTEGER:z.value||0}),k=R(!1),O=o(function(){return"".concat(e.prefixCls,"-item")}),$=o(function(){return Math.max(N.value,y.value)}),I=o(function(){return!!(e.data.length&&e.maxCount===re)}),M=o(function(){return e.maxCount===ue}),j=o(function(){return I.value||typeof e.maxCount=="number"&&e.data.length>e.maxCount}),_=o(function(){var n=e.data;return I.value?w.value===null&&S.value?n=e.data:n=e.data.slice(0,Math.min(e.data.length,i.value/e.itemWidth)):typeof e.maxCount=="number"&&(n=e.data.slice(0,e.maxCount)),n}),F=o(function(){return I.value?e.data.slice(C.value+1):e.data.slice(_.value.length)}),A=function(t,a){var u;return typeof e.itemKey=="function"?e.itemKey(t):(u=e.itemKey&&(t==null?void 0:t[e.itemKey]))!==null&&u!==void 0?u:a},ie=o(function(){return e.renderItem||function(n){return n}}),V=function(t,a){z.value=t,a||(k.value=t<e.data.length-1,c("visibleChange",t))},le=function(t,a){w.value=a.clientWidth},Z=function(t,a){var u=new Map(h.value);a===null?u.delete(t):u.set(t,a),h.value=u},oe=function(t,a){N.value=y.value,y.value=a},ve=function(t,a){g.value=a},L=function(t){return h.value.get(A(_.value[t],t))};return Ne([i,h,y,g,function(){return e.itemKey},_],function(){if(i.value&&$.value&&_.value){var n=g.value,t=_.value.length,a=t-1;if(!t){V(0),m.value=null;return}for(var u=0;u<t;u+=1){var p=L(u);if(p===void 0){V(u-1,!0);break}if(n+=p,a===0&&n<=i.value||u===a-1&&n+L(a)<=i.value){V(a),m.value=null;break}else if(n+$.value>i.value){V(u-1),m.value=n-p-g.value+y.value;break}}e.suffix&&L(0)+g.value>i.value&&(m.value=null)}}),function(){var n=k.value&&!!F.value.length,t=e.itemComponent,a=e.renderRawItem,u=e.renderRawRest,p=e.renderRest,q=e.prefixCls,se=q===void 0?"rc-overflow":q,J=e.suffix,Q=e.component,fe=Q===void 0?"div":Q,de=e.id,ce=e.onMousedown,me=v.class,ye=v.style,ge=W(v,Ee),ee={};m.value!==null&&I.value&&(ee={position:"absolute",left:"".concat(m.value,"px"),top:0});var D={prefixCls:O.value,responsive:I.value,component:t,invalidate:M.value},Ce=a?function(x,l){var E=A(x,l);return f(H,{key:E,value:r(r({},D),{},{order:l,item:x,itemKey:E,registerSize:Z,display:l<=C.value})},{default:function(){return[a(x,l)]}})}:function(x,l){var E=A(x,l);return f(T,r(r({},D),{},{order:l,key:E,item:x,renderItem:ie.value,itemKey:E,registerSize:Z,display:l<=C.value}),null)},U=function(){return null},te={order:n?C.value:Number.MAX_SAFE_INTEGER,className:"".concat(O.value," ").concat(O.value,"-rest"),registerSize:oe,display:n};if(u)u&&(U=function(){return f(H,{value:r(r({},D),te)},{default:function(){return[u(F.value)]}})});else{var X=p||Ke;U=function(){return f(T,r(r({},D),te),{default:function(){return typeof X=="function"?X(F.value):X}})}}var xe=function(){var l;return f(fe,r({id:de,class:Y(!M.value&&se,me),style:ye,onMousedown:ce},ge),{default:function(){return[_.value.map(Ce),j.value?U():null,J&&f(T,r(r({},D),{},{order:C.value,class:"".concat(O.value,"-suffix"),registerSize:ve,display:!0,style:ee}),{default:function(){return J}}),(l=s.default)===null||l===void 0?void 0:l.call(s)]}})};return f(ne,{disabled:!I.value,onResize:le},{default:xe})}}});G.Item=Fe;G.RESPONSIVE=re;G.INVALIDATE=ue;const De=G;export{De as O};
