import{r as p,t as I,u as M,p as _,v as P,k as d}from"./isEqual.L5aOBdXd.js";import{a as C}from"./isObject.u1V2KUQz.js";import{c as L,t as h,i as O,g as w,b as y}from"./get.CN6VB36A.js";import{i as R}from"./isArray.ZyNFv1vC.js";function D(n){return function(r){return r==null?void 0:r[n]}}function G(n,r){return n!=null&&r in Object(n)}function x(n,r,i){r=L(r,n);for(var t=-1,e=r.length,u=!1;++t<e;){var s=h(r[t]);if(!(u=n!=null&&i(n,s)))break;n=n[s]}return u||++t!=e?u:(e=n==null?0:n.length,!!e&&p(e)&&I(s,e)&&(R(n)||M(n)))}function F(n,r){return n!=null&&x(n,r,G)}function v(n){return n}var S=1,K=2;function N(n,r,i,t){var e=i.length,u=e,s=!t;if(n==null)return!u;for(n=Object(n);e--;){var f=i[e];if(s&&f[2]?f[1]!==n[f[0]]:!(f[0]in n))return!1}for(;++e<u;){f=i[e];var a=f[0],l=n[a],A=f[1];if(s&&f[2]){if(l===void 0&&!(a in n))return!1}else{var g=new _;if(t)var o=t(l,A,a,n,r,g);if(!(o===void 0?P(A,l,S|K,t,g):o))return!1}}return!0}function m(n){return n===n&&!C(n)}function T(n){for(var r=d(n),i=r.length;i--;){var t=r[i],e=n[t];r[i]=[t,e,m(e)]}return r}function E(n,r){return function(i){return i==null?!1:i[n]===r&&(r!==void 0||n in Object(i))}}function U(n){var r=T(n);return r.length==1&&r[0][2]?E(r[0][0],r[0][1]):function(i){return i===n||N(i,n,r)}}var $=1,q=2;function H(n,r){return O(n)&&m(r)?E(h(n),r):function(i){var t=w(i,n);return t===void 0&&t===r?F(i,n):P(r,t,$|q)}}function c(n){return function(r){return y(r,n)}}function B(n){return O(n)?D(h(n)):c(n)}function Y(n){return typeof n=="function"?n:n==null?v:typeof n=="object"?R(n)?H(n[0],n[1]):U(n):B(n)}export{Y as b,F as h,v as i};
