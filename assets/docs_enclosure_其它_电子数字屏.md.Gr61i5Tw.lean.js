import{_ as u,k as o,o as h,c as k,F as t,E,Q as A,h as D,l as m,m as e,I as b,a as f,U as _}from"./chunks/framework.FpOEJISx.js";import{d as S}from"./chunks/dayjs.min.ygEfSShL.js";import"./chunks/theme.BhQF1MTw.js";const x={class:"electronic-number"},v={__name:"ElectronicNumber",props:{numbers:{type:String},numberColor:{type:String,default:"black"},numberSize:{type:String,default:"1rem"}},setup(r){const n=r,d=o(()=>n.numbers&&n.numbers.length>0?n.numbers.split(","):[]),g=i=>{switch(i.toString()){case"0":return[[1,1,1],[1,0,1],[1,0,1],[1,0,1],[1,1,1]];case"1":return[[0,1,0],[0,1,0],[0,1,0],[0,1,0],[0,1,0]];case"2":return[[1,1,1],[0,0,1],[1,1,1],[1,0,0],[1,1,1]];case"3":return[[1,1,1],[0,0,1],[1,1,1],[0,0,1],[1,1,1]];case"4":return[[1,0,1],[1,0,1],[1,1,1],[0,0,1],[0,0,1]];case"5":return[[1,1,1],[1,0,0],[1,1,1],[0,0,1],[1,1,1]];case"6":return[[1,1,1],[1,0,0],[1,1,1],[1,0,1],[1,1,1]];case"7":return[[1,1,1],[0,0,1],[0,0,1],[0,0,1],[0,0,1]];case"8":return[[1,1,1],[1,0,1],[1,1,1],[1,0,1],[1,1,1]];case"9":return[[1,1,1],[1,0,1],[1,1,1],[0,0,1],[1,1,1]];case":":return[[0,0,0],[0,1,0],[0,0,0],[0,1,0],[0,0,0]];case".":return[[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,1,0]];case"/":return[[0,0,0],[0,0,1],[0,1,0],[1,0,0],[0,0,0]];case"\\":return[[0,0,0],[1,0,0],[0,1,0],[0,0,1],[0,0,0]];case"+":return[[0,0,0],[0,1,0],[1,1,1],[0,1,0],[0,0,0]];case"-":return[[0,0,0],[0,0,0],[1,1,1],[0,0,0],[0,0,0]];case"=":return[[0,0,0],[1,1,1],[0,0,0],[1,1,1],[0,0,0]];case" ":return[[0],[0],[0],[0],[0]]}return[]},y=i=>{let a=`width:calc(${n.numberSize}/5);height:calc(${n.numberSize}/5);`;return i===1&&(a+=`background-color: ${n.numberColor};`),a},F=i=>{i=i.toString();let a=[];for(let l=0;l<i.length;l++){const p=g(i[l]);if(i[l]!==1)for(let s=0;s<p.length;s++)p[s].push(0);if(a.length===0)a=p;else for(let s=0;s<a.length;s++)a[s]=a[s].concat(p[s])}return a};return(i,a)=>(h(),k("div",x,[(h(!0),k(t,null,E(d.value,(l,p)=>(h(),k("div",{key:p,class:"electronic-number-item"},[(h(!0),k(t,null,E(F(l),(s,C)=>(h(),k("div",{key:C,class:"item-column"},[(h(!0),k(t,null,E(s,(c,B)=>(h(),k("div",{key:B,style:A(y(c))},null,4))),128))]))),128))]))),128))]))}},q=u(v,[["__scopeId","data-v-a3dc7bcf"]]),w=e("h1",{id:"电子数字屏",tabindex:"-1"},[f("电子数字屏 "),e("a",{class:"header-anchor",href:"#电子数字屏","aria-label":'Permalink to "电子数字屏"'},"​")],-1),j={class:"m-[50px_0]"},N=_("",4),$=JSON.parse('{"title":"电子数字屏","description":"","frontmatter":{},"headers":[],"relativePath":"docs/enclosure/其它/电子数字屏.md","filePath":"docs/enclosure/其它/电子数字屏.md"}'),I={name:"docs/enclosure/其它/电子数字屏.md"},V=Object.assign(I,{setup(r){const n=D(null);return m(()=>{setInterval(()=>{n.value=S().format("YYYY-MM-DD HH:mm:ss")},200)}),(d,g)=>(h(),k("div",null,[w,e("div",j,[b(q,{numbers:n.value,numberSize:"30px"},null,8,["numbers"])]),N]))}});export{$ as __pageData,V as default};
