import{i as C,b as M,a as I,r as N}from"./isObject.u1V2KUQz.js";var j="[object Symbol]";function B(e){return typeof e=="symbol"||C(e)&&M(e)==j}var R=/\s/;function $(e){for(var r=e.length;r--&&R.test(e.charAt(r)););return r}var F=/^\s+/;function _(e){return e&&e.slice(0,$(e)+1).replace(F,"")}var k=NaN,D=/^[-+]0x[0-9a-f]+$/i,G=/^0b[01]+$/i,H=/^0o[0-7]+$/i,P=parseInt;function S(e){if(typeof e=="number")return e;if(B(e))return k;if(I(e)){var r=typeof e.valueOf=="function"?e.valueOf():e;e=I(r)?r+"":r}if(typeof e!="string")return e===0?e:+e;e=_(e);var t=G.test(e);return t||H.test(e)?P(e.slice(2),t?2:8):D.test(e)?k:+e}var y=function(){return N.Date.now()},U="Expected a function",X=Math.max,q=Math.min;function J(e,r,t){var s,o,l,u,i,f,c=0,h=!1,d=!1,T=!0;if(typeof e!="function")throw new TypeError(U);r=S(r)||0,I(t)&&(h=!!t.leading,d="maxWait"in t,l=d?X(S(t.maxWait)||0,r):l,T="trailing"in t?!!t.trailing:T);function b(n){var a=s,m=o;return s=o=void 0,c=n,u=e.apply(m,a),u}function O(n){return c=n,i=setTimeout(g,r),h?b(n):u}function W(n){var a=n-f,m=n-c,E=r-a;return d?q(E,l-m):E}function p(n){var a=n-f,m=n-c;return f===void 0||a>=r||a<0||d&&m>=l}function g(){var n=y();if(p(n))return v(n);i=setTimeout(g,W(n))}function v(n){return i=void 0,T&&s?b(n):(s=o=void 0,u)}function L(){i!==void 0&&clearTimeout(i),c=0,s=f=o=i=void 0}function A(){return i===void 0?u:v(y())}function x(){var n=y(),a=p(n);if(s=arguments,o=this,f=n,a){if(i===void 0)return O(f);if(d)return clearTimeout(i),i=setTimeout(g,r),b(f)}return i===void 0&&(i=setTimeout(g,r)),u}return x.cancel=L,x.flush=A,x}export{J as d,B as i,S as t};
