import{Z as s}from"./useConfigInject.EE0UmG98.js";function y(r,l){var e=typeof Symbol<"u"&&r[Symbol.iterator]||r["@@iterator"];if(!e){if(Array.isArray(r)||(e=s(r))||l&&r&&typeof r.length=="number"){e&&(r=e);var a=0,o=function(){};return{s:o,n:function(){return a>=r.length?{done:!0}:{done:!1,value:r[a++]}},e:function(n){throw n},f:o}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var i=!0,f=!1,u;return{s:function(){e=e.call(r)},n:function(){var n=e.next();return i=n.done,n},e:function(n){f=!0,u=n},f:function(){try{!i&&e.return!=null&&e.return()}finally{if(f)throw u}}}}export{y as _};
