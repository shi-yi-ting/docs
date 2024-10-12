import{b as N,n as B,P as D,o as O,h as W,p as I,j as U}from"./useConfigInject.ak-tdefz.js";import{g as H}from"./getScrollBarSize.KoyaLeRI.js";import{P as V}from"./Portal.ZllYqHEB.js";import{_ as X,a as Y}from"./index.KNguOK4V.js";import{d as q,h as S,C as G,l as K,y as F,R as J,c6 as Q,I as Z,c8 as ee}from"./framework.FpOEJISx.js";function C(m){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.element,o=n===void 0?document.body:n,e={},r=Object.keys(m);return r.forEach(function(c){e[c]=o.style[c]}),r.forEach(function(c){o.style[c]=m[c]}),e}function te(){return document.body.scrollHeight>(window.innerHeight||document.documentElement.clientHeight)&&window.innerWidth>document.body.offsetWidth}var E={};const x=function(m){if(!(!te()&&!m)){var t="ant-scrolling-effect",n=new RegExp("".concat(t),"g"),o=document.body.className;if(m){if(!n.test(o))return;C(E),E={},document.body.className=o.replace(n,"").trim();return}var e=H();if(e&&(E=C({position:"relative",width:"calc(100% - ".concat(e,"px)")}),!n.test(o))){var r="".concat(o," ").concat(t);document.body.className=r.trim()}}};var u=[],j="ant-scrolling-effect",P=new RegExp("".concat(j),"g"),ne=0,T=new Map,oe=X(function m(t){var n=this;Y(this,m),N(this,"getContainer",function(){var o;return(o=n.options)===null||o===void 0?void 0:o.container}),N(this,"reLock",function(o){var e=u.find(function(r){var c=r.target;return c===n.lockTarget});e&&n.unLock(),n.options=o,e&&(e.options=o,n.lock())}),N(this,"lock",function(){var o;if(!u.some(function(i){var a=i.target;return a===n.lockTarget})){if(u.some(function(i){var a,d=i.options;return(d==null?void 0:d.container)===((a=n.options)===null||a===void 0?void 0:a.container)})){u=[].concat(B(u),[{target:n.lockTarget,options:n.options}]);return}var e=0,r=((o=n.options)===null||o===void 0?void 0:o.container)||document.body;(r===document.body&&window.innerWidth-document.documentElement.clientWidth>0||r.scrollHeight>r.clientHeight)&&(e=H());var c=r.className;if(u.filter(function(i){var a,d=i.options;return(d==null?void 0:d.container)===((a=n.options)===null||a===void 0?void 0:a.container)}).length===0&&T.set(r,C({width:e!==0?"calc(100% - ".concat(e,"px)"):void 0,overflow:"hidden",overflowX:"hidden",overflowY:"hidden"},{element:r})),!P.test(c)){var f="".concat(c," ").concat(j);r.className=f.trim()}u=[].concat(B(u),[{target:n.lockTarget,options:n.options}])}}),N(this,"unLock",function(){var o,e=u.find(function(f){var i=f.target;return i===n.lockTarget});if(u=u.filter(function(f){var i=f.target;return i!==n.lockTarget}),!(!e||u.some(function(f){var i,a=f.options;return(a==null?void 0:a.container)===((i=e.options)===null||i===void 0?void 0:i.container)}))){var r=((o=n.options)===null||o===void 0?void 0:o.container)||document.body,c=r.className;P.test(c)&&(C(T.get(r),{element:r}),T.delete(r),r.className=r.className.replace(P,"").trim())}}),this.lockTarget=ne++,this.options=t}),g=0,w=I(),k={},h=function(t){if(!w)return null;if(t){if(typeof t=="string")return document.querySelectorAll(t)[0];if(typeof t=="function")return t();if(U(t)==="object"&&t instanceof window.HTMLElement)return t}return document.body};const se=q({compatConfig:{MODE:3},name:"PortalWrapper",inheritAttrs:!1,props:{wrapperClassName:String,forceRender:{type:Boolean,default:void 0},getContainer:D.any,visible:{type:Boolean,default:void 0}},setup:function(t,n){var o=n.slots,e=S(),r=S(),c=S(),f=new oe({container:h(t.getContainer)}),i=function(){var l,v;(l=e.value)===null||l===void 0||(v=l.parentNode)===null||v===void 0||v.removeChild(e.value)},a=function(){var l=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1;if(l||e.value&&!e.value.parentNode){var v=h(t.getContainer);return v?(v.appendChild(e.value),!0):!1}return!0},d=function(){return w?(e.value||(e.value=document.createElement("div"),a(!0)),$(),e.value):null},$=function(){var l=t.wrapperClassName;e.value&&l&&l!==e.value.className&&(e.value.className=l)};G(function(){$(),a()});var A=function(){g===1&&!Object.keys(k).length?(x(),k=C({overflow:"hidden",overflowX:"hidden",overflowY:"hidden"})):g||(C(k),k={},x(!0))},M=ee();return K(function(){var s=!1;F([function(){return t.visible},function(){return t.getContainer}],function(l,v){var b=O(l,2),y=b[0],p=b[1],L=O(v,2),R=L[0],_=L[1];if(w&&h(t.getContainer)===document.body&&(y&&!R?g+=1:s&&(g-=1)),s){var z=typeof p=="function"&&typeof _=="function";(z?p.toString()!==_.toString():p!==_)&&i(),y&&y!==R&&w&&h(p)!==f.getContainer()&&f.reLock({container:h(p)})}s=!0},{immediate:!0,flush:"post"}),J(function(){a()||(c.value=W(function(){M.update()}))})}),Q(function(){var s=t.visible,l=t.getContainer;w&&h(l)===document.body&&(g=s&&g?g-1:g),i(),W.cancel(c.value)}),function(){var s=t.forceRender,l=t.visible,v=null,b={getOpenCount:function(){return g},getContainer:d,switchScrollingEffect:A,scrollLocker:f};return(s||l||r.value)&&(v=Z(V,{getContainer:d,ref:r},{default:function(){var p;return(p=o.default)===null||p===void 0?void 0:p.call(o,b)}})),v}}});export{se as P};
