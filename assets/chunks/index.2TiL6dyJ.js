import{u as Y,f as at,h as it,P as Tt,L as rt,i as Ct,j as St,b as f,d as kt,k as gt,_ as L,l as xt}from"./useConfigInject.TplfaHhS.js";import{d as V,l as bt,R as yt,c6 as pt,c8 as wt,I as h,T as Nt,h as R,k as G,y as At,z as Lt,C as _t,c9 as Bt}from"./framework.FpOEJISx.js";var q={transitionstart:{transition:"transitionstart",WebkitTransition:"webkitTransitionStart",MozTransition:"mozTransitionStart",OTransition:"oTransitionStart",msTransition:"MSTransitionStart"},animationstart:{animation:"animationstart",WebkitAnimation:"webkitAnimationStart",MozAnimation:"mozAnimationStart",OAnimation:"oAnimationStart",msAnimation:"MSAnimationStart"}},Q={transitionend:{transition:"transitionend",WebkitTransition:"webkitTransitionEnd",MozTransition:"mozTransitionEnd",OTransition:"oTransitionEnd",msTransition:"MSTransitionEnd"},animationend:{animation:"animationend",WebkitAnimation:"webkitAnimationEnd",MozAnimation:"mozAnimationEnd",OAnimation:"oAnimationEnd",msAnimation:"MSAnimationEnd"}},_=[],B=[];function It(){var n=document.createElement("div"),t=n.style;"AnimationEvent"in window||(delete q.animationstart.animation,delete Q.animationend.animation),"TransitionEvent"in window||(delete q.transitionstart.transition,delete Q.transitionend.transition);function a(i,b){for(var d in i)if(i.hasOwnProperty(d)){var y=i[d];for(var s in y)if(s in t){b.push(y[s]);break}}}a(q,_),a(Q,B)}typeof window<"u"&&typeof document<"u"&&It();function ot(n,t,a){n.addEventListener(t,a,!1)}function lt(n,t,a){n.removeEventListener(t,a,!1)}var U={startEvents:_,addStartEventListener:function(t,a){if(_.length===0){setTimeout(a,0);return}_.forEach(function(i){ot(t,i,a)})},removeStartEventListener:function(t,a){_.length!==0&&_.forEach(function(i){lt(t,i,a)})},endEvents:B,addEndEventListener:function(t,a){if(B.length===0){setTimeout(a,0);return}B.forEach(function(i){ot(t,i,a)})},removeEndEventListener:function(t,a){B.length!==0&&B.forEach(function(i){lt(t,i,a)})}},w;function ut(n){return!n||n.offsetParent===null}function Mt(n){var t=(n||"").match(/rgba?\((\d*), (\d*), (\d*)(, [\.\d]*)?\)/);return t&&t[1]&&t[2]&&t[3]?!(t[1]===t[2]&&t[2]===t[3]):!0}const Ot=V({compatConfig:{MODE:3},name:"Wave",props:{insertExtraNode:Boolean,disabled:Boolean},setup:function(t,a){var i=a.slots,b=a.expose,d=wt(),y=Y("",t),s=y.csp,l=y.prefixCls;b({csp:s});var C=null,S=null,P=null,k=!1,v=null,A=!1,p=function(e){if(!A){var u=at(d);!e||e.target!==u||k||O(u)}},x=function(e){!e||e.animationName!=="fadeEffect"||O(e.target)},I=function(){var e=t.insertExtraNode;return e?"".concat(l.value,"-click-animating"):"".concat(l.value,"-click-animating-without-extra-node")},M=function(e,u){var N=t.insertExtraNode,o=t.disabled;if(!(o||!e||ut(e)||e.className.indexOf("-leave")>=0)){v=document.createElement("div"),v.className="".concat(l.value,"-click-animating-node");var r=I();if(e.removeAttribute(r),e.setAttribute(r,"true"),w=w||document.createElement("style"),u&&u!=="#ffffff"&&u!=="rgb(255, 255, 255)"&&Mt(u)&&!/rgba\(\d*, \d*, \d*, 0\)/.test(u)&&u!=="transparent"){var m;(m=s.value)!==null&&m!==void 0&&m.nonce&&(w.nonce=s.value.nonce),v.style.borderColor=u,w.innerHTML=`
        [`.concat(l.value,"-click-animating-without-extra-node='true']::after, .").concat(l.value,`-click-animating-node {
          --antd-wave-shadow-color: `).concat(u,`;
        }`),document.body.contains(w)||document.body.appendChild(w)}N&&e.appendChild(v),U.addStartEventListener(e,p),U.addEndEventListener(e,x)}},O=function(e){if(!(!e||e===v||!(e instanceof Element))){var u=t.insertExtraNode,N=I();e.setAttribute(N,"false"),w&&(w.innerHTML=""),u&&v&&e.contains(v)&&e.removeChild(v),U.removeStartEventListener(e,p),U.removeEndEventListener(e,x)}},z=function(e){if(!(!e||!e.getAttribute||e.getAttribute("disabled")||e.className.indexOf("disabled")>=0)){var u=function(o){if(!(o.target.tagName==="INPUT"||ut(o.target))){O(e);var r=getComputedStyle(e).getPropertyValue("border-top-color")||getComputedStyle(e).getPropertyValue("border-color")||getComputedStyle(e).getPropertyValue("background-color");S=setTimeout(function(){return M(e,r)},0),it.cancel(P),k=!0,P=it(function(){k=!1},10)}};return e.addEventListener("click",u,!0),{cancel:function(){e.removeEventListener("click",u,!0)}}}};return bt(function(){yt(function(){var c=at(d);c.nodeType===1&&(C=z(c))})}),pt(function(){C&&C.cancel(),clearTimeout(S),A=!0}),function(){var c;return(c=i.default)===null||c===void 0?void 0:c.call(i)[0]}}});function Gt(n){return n==="danger"?{danger:!0}:{type:n}}var Pt=function(){return{prefixCls:String,type:String,htmlType:{type:String,default:"button"},shape:{type:String},size:{type:String},loading:{type:[Boolean,Object],default:function(){return!1}},disabled:{type:Boolean,default:void 0},ghost:{type:Boolean,default:void 0},block:{type:Boolean,default:void 0},danger:{type:Boolean,default:void 0},icon:Tt.any,href:String,target:String,title:String,onClick:{type:Function},onMousedown:{type:Function}}},st=function(t){t&&(t.style.width="0px",t.style.opacity="0",t.style.transform="scale(0)")},ct=function(t){yt(function(){t&&(t.style.width="".concat(t.scrollWidth,"px"),t.style.opacity="1",t.style.transform="scale(1)")})},ft=function(t){t&&t.style&&(t.style.width=null,t.style.opacity=null,t.style.transform=null)};const zt=V({compatConfig:{MODE:3},name:"LoadingIcon",props:{prefixCls:String,loading:[Boolean,Object],existIcon:Boolean},setup:function(t){return function(){var a=t.existIcon,i=t.prefixCls,b=t.loading;if(a)return h("span",{class:"".concat(i,"-loading-icon")},[h(rt,null,null)]);var d=!!b;return h(Nt,{name:"".concat(i,"-loading-icon-motion"),onBeforeEnter:st,onEnter:ct,onAfterEnter:ft,onBeforeLeave:ct,onLeave:function(s){setTimeout(function(){st(s)})},onAfterLeave:ft},{default:function(){return[d?h("span",{class:"".concat(i,"-loading-icon")},[h(rt,null,null)]):null]}})}}});var dt=/^[\u4e00-\u9fa5]{2}$/,vt=dt.test.bind(dt);function $(n){return n==="text"||n==="link"}const F=V({compatConfig:{MODE:3},name:"AButton",inheritAttrs:!1,__ANT_BUTTON:!0,props:Ct(Pt(),{type:"default"}),slots:["icon"],setup:function(t,a){var i=a.slots,b=a.attrs,d=a.emit,y=a.expose,s=Y("btn",t),l=s.prefixCls,C=s.autoInsertSpaceInButton,S=s.direction,P=s.size,k=R(null),v=R(void 0),A=!1,p=R(!1),x=R(!1),I=G(function(){return C.value!==!1}),M=G(function(){return St(t.loading)==="object"&&t.loading.delay?t.loading.delay||!0:!!t.loading});At(M,function(o){clearTimeout(v.value),typeof M.value=="number"?v.value=setTimeout(function(){p.value=o},M.value):p.value=o},{immediate:!0});var O=G(function(){var o,r=t.type,m=t.shape,E=m===void 0?"default":m,T=t.ghost,H=t.block,J=t.danger,g=l.value,W={large:"lg",small:"sm",middle:void 0},j=P.value,D=j&&W[j]||"";return o={},f(o,"".concat(g),!0),f(o,"".concat(g,"-").concat(r),r),f(o,"".concat(g,"-").concat(E),E!=="default"&&E),f(o,"".concat(g,"-").concat(D),D),f(o,"".concat(g,"-loading"),p.value),f(o,"".concat(g,"-background-ghost"),T&&!$(r)),f(o,"".concat(g,"-two-chinese-chars"),x.value&&I.value),f(o,"".concat(g,"-block"),H),f(o,"".concat(g,"-dangerous"),!!J),f(o,"".concat(g,"-rtl"),S.value==="rtl"),o}),z=function(){var r=k.value;if(!(!r||C.value===!1)){var m=r.textContent;A&&vt(m)?x.value||(x.value=!0):x.value&&(x.value=!1)}},c=function(r){if(p.value||t.disabled){r.preventDefault();return}d("click",r)},e=function(r,m){var E=m?" ":"";if(r.type===Bt){var T=r.children.trim();return vt(T)&&(T=T.split("").join(E)),h("span",null,[T])}return r};Lt(function(){kt(!(t.ghost&&$(t.type)),"Button","`link` or `text` button can't be a `ghost` button.")}),bt(z),_t(z),pt(function(){v.value&&clearTimeout(v.value)});var u=function(){var r;(r=k.value)===null||r===void 0||r.focus()},N=function(){var r;(r=k.value)===null||r===void 0||r.blur()};return y({focus:u,blur:N}),function(){var o,r,m=t.icon,E=m===void 0?(o=i.icon)===null||o===void 0?void 0:o.call(i):m,T=gt((r=i.default)===null||r===void 0?void 0:r.call(i));A=T.length===1&&!E&&!$(t.type);var H=t.type,J=t.htmlType,g=t.disabled,W=t.href,j=t.title,D=t.target,Et=t.onMousedown,ht=p.value?"loading":E,K=L(L({},b),{},{title:j,disabled:g,class:[O.value,b.class,f({},"".concat(l.value,"-icon-only"),T.length===0&&!!ht)],onClick:c,onMousedown:Et});g||delete K.disabled;var Z=E&&!p.value?E:h(zt,{existIcon:!!E,prefixCls:l.value,loading:!!p.value},null),tt=T.map(function(et){return e(et,A&&I.value)});if(W!==void 0)return h("a",L(L({},K),{},{href:W,target:D,ref:k}),[Z,tt]);var nt=h("button",L(L({},K),{},{ref:k,type:J}),[Z,tt]);return $(H)?nt:h(Ot,{ref:"wave",disabled:!!p.value},{default:function(){return[nt]}})}}});function mt(n,t){for(var a=0;a<t.length;a++){var i=t[a];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,xt(i.key),i)}}function Wt(n,t,a){return t&&mt(n.prototype,t),a&&mt(n,a),Object.defineProperty(n,"prototype",{writable:!1}),n}function jt(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}var Dt=Wt(function n(t){jt(this,n),this.error=new Error("unreachable case: ".concat(JSON.stringify(t)))}),Rt=function(){return{prefixCls:String,size:{type:String}}};const X=V({compatConfig:{MODE:3},name:"AButtonGroup",props:Rt(),setup:function(t,a){var i=a.slots,b=Y("btn-group",t),d=b.prefixCls,y=b.direction,s=G(function(){var l,C=t.size,S="";switch(C){case"large":S="lg";break;case"small":S="sm";break;case"middle":case void 0:break;default:console.warn(new Dt(C).error)}return l={},f(l,"".concat(d.value),!0),f(l,"".concat(d.value,"-").concat(S),S),f(l,"".concat(d.value,"-rtl"),y.value==="rtl"),l});return function(){var l;return h("div",{class:s.value},[gt((l=i.default)===null||l===void 0?void 0:l.call(i))])}}});F.Group=X;F.install=function(n){return n.component(F.name,F),n.component(X.name,X),n};export{F as B,Ot as W,Wt as _,jt as a,Pt as b,Gt as c};
