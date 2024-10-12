import{M as u}from"./chunks/markDownBox.ElYCyWak.js";import{$ as t}from"./chunks/jquery.wmcOd_Lo.js";import{_,d as h,l as f,o as l,c as r,U as b,q as j,s as x,m as e,h as q,I as n,w as p,a as v}from"./chunks/framework.FpOEJISx.js";import"./chunks/axios.AkAIBCGB.js";import"./chunks/theme.I9it6eQT.js";const k="/docs/assets/01.YxzscZgv.jpg",y="/docs/assets/02.DOK3YPzp.jpg",L="/docs/assets/03.plKh16Pf.jpg",I="/docs/assets/04.MLpx-XaP.jpg",P="/docs/assets/05.uIcraPkG.jpg",B="/docs/assets/06.0hQ3NeOU.jpg",W=h({setup(){const a=()=>{t(".wrap").find("li").mouseenter(function(){t(this).css("opacity",1),t(this).siblings("li").css("opacity",.4)}),t(".wrap").mouseleave(function(){t(this).children().children("li").css("opacity",1)})};return f(()=>{a()}),{}}}),w=b('<div class="wrap" data-v-e694f1cd><ul data-v-e694f1cd><li data-v-e694f1cd><a href="#" data-v-e694f1cd><img src="'+k+'" alt="" data-v-e694f1cd></a></li><li data-v-e694f1cd><a href="#" data-v-e694f1cd><img src="'+y+'" alt="" data-v-e694f1cd></a></li><li data-v-e694f1cd><a href="#" data-v-e694f1cd><img src="'+L+'" alt="" data-v-e694f1cd></a></li><li data-v-e694f1cd><a href="#" data-v-e694f1cd><img src="'+I+'" alt="" data-v-e694f1cd></a></li><li data-v-e694f1cd><a href="#" data-v-e694f1cd><img src="'+P+'" alt="" data-v-e694f1cd></a></li><li data-v-e694f1cd><a href="#" data-v-e694f1cd><img src="'+B+'" alt="" data-v-e694f1cd></a></li></ul></div>',1),D=[w];function S(a,c,d,o,s,i){return l(),r("div",null,D)}const N=_(W,[["render",S],["__scopeId","data-v-e694f1cd"]]),O=h({setup(){const a=()=>{t(".ad").slideDown(1e3).slideUp(1e3).fadeIn(1e3).children("span").click(function(){t(this).parent().fadeOut(1e3)})};return f(()=>{a()}),{}}}),g=a=>(j("data-v-bc58a03d"),a=a(),x(),a),T=g(()=>e("div",{class:"ani"},"我是内容",-1)),C=g(()=>e("div",{class:"ad"},[e("span")],-1)),J=[T,C];function M(a,c,d,o,s,i){return l(),r("div",null,J)}const E=_(O,[["render",M],["__scopeId","data-v-bc58a03d"]]),V=h({setup(){const a=()=>{t(".jq-exclusive button").click(function(){t(this).css("color","red").siblings().css("color","")})};return f(()=>{a()}),{}}}),A=b('<div class="jq-exclusive" data-v-024f60d7><button class="Button White" data-v-024f60d7>快速</button><button class="Button White" data-v-024f60d7>快速</button><button class="Button White" data-v-024f60d7>快速</button><button class="Button White" data-v-024f60d7>快速</button><button class="Button White" data-v-024f60d7>快速</button><button class="Button White" data-v-024f60d7>快速</button></div>',1),U=[A];function z(a,c,d,o,s,i){return l(),r("div",null,U)}const K=_(V,[["render",z],["__scopeId","data-v-024f60d7"]]),Y=()=>{d(),t(".jq-todoList #title").on("keydown",function(o){if(o.keyCode===13)if(t(this).val()==="")alert("请输入您要的操作");else{let s=a();s.push({title:t(this).val(),done:!1}),c(s),d(),t(this).val("")}}),t(".jq-todoList ol, .jq-todoList ul").on("click","a",function(){let o=a();console.log(o);let s=t(this).attr("id");console.log(s),o.splice(s,1),c(o),d()}),t(".jq-todoList ol, .jq-todoList ul").on("click","input",function(){let o=a(),s=t(this).siblings("a").attr("id");console.log(s),o[s].done=t(this).prop("checked"),console.log(o),c(o),d()});function a(){let o=localStorage.getItem("todolist");return o!==null?JSON.parse(o):[]}function c(o){localStorage.setItem("todolist",JSON.stringify(o))}function d(){let o=a();console.log(o),t(".jq-todoList ol, .jq-todoList ul").empty();let s=0,i=0;t.each(o,($,m)=>{m.done?(t(".jq-todoList ul").prepend("<li><input type='checkbox' checked='checked' > <p>"+m.title+"</p> <a href='javascript:;' id="+$+" ></a></li>"),i++):(t(".jq-todoList ol").prepend("<li><input type='checkbox' > <p>"+m.title+"</p> <a href='javascript:;' id="+$+" ></a></li>"),s++)}),t("#todocount").text(s),t("#donecount").text(i)}},G=h({setup(){return f(()=>{Y()}),{}}}),H={class:"jq-todoList",style:{"margin-top":"15px"}},Q=b('<header data-v-239b333d><section data-v-239b333d><label for="title" data-v-239b333d>ToDoList</label><input id="title" type="text" name="title" placeholder="添加ToDo" required="required" autocomplete="off" data-v-239b333d></section></header><section data-v-239b333d><h2 data-v-239b333d>正在进行 <span id="todocount" data-v-239b333d></span></h2><ol id="todolist" class="demo-box" data-v-239b333d></ol><h2 data-v-239b333d>已经完成 <span id="donecount" data-v-239b333d></span></h2><ul id="donelist" data-v-239b333d></ul></section><footer data-v-239b333d> Copyright © 2014 todolist.cn </footer>',3),X=[Q];function Z(a,c,d,o,s,i){return l(),r("div",H,X)}const F=_(G,[["render",Z],["__scopeId","data-v-239b333d"]]),R=e("h2",{id:"todolist",tabindex:"-1"},[v("TodoList "),e("a",{class:"header-anchor",href:"#todolist","aria-label":'Permalink to "TodoList"'},"​")],-1),tt={class:"common_container"},ot={class:"codeWrap"},et=e("div",null,"ToDoList",-1),at=e("h2",{id:"高亮",tabindex:"-1"},[v("高亮 "),e("a",{class:"header-anchor",href:"#高亮","aria-label":'Permalink to "高亮"'},"​")],-1),st={class:"common_container"},dt={class:"codeWrap"},ct=e("h2",{id:"弹框广告",tabindex:"-1"},[v("弹框广告 "),e("a",{class:"header-anchor",href:"#弹框广告","aria-label":'Permalink to "弹框广告"'},"​")],-1),nt={class:"common_container"},it={class:"codeWrap"},lt=e("h2",{id:"排它思想",tabindex:"-1"},[v("排它思想 "),e("a",{class:"header-anchor",href:"#排它思想","aria-label":'Permalink to "排它思想"'},"​")],-1),rt={class:"common_container"},ut={class:"codeWrap"},bt=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"docs/demo/Jquery.md","filePath":"docs/demo/Jquery.md"}'),pt={name:"docs/demo/Jquery.md"},$t=Object.assign(pt,{setup(a){const c=q("/static/_file/md/demo/jquery/");return(d,o)=>(l(),r("div",null,[R,e("div",tt,[e("div",ot,[n(u,{content:d.content,url:`${c.value}todoList.md`},{default:p(()=>[e("div",null,[et,n(F)])]),_:1},8,["content","url"])])]),at,e("div",st,[e("div",dt,[n(u,{content:d.content,url:`${c.value}highlight.md`},{default:p(()=>[n(N)]),_:1},8,["content","url"])])]),ct,e("div",nt,[e("div",it,[n(u,{content:d.content,url:`${c.value}popAdv.md`},{default:p(()=>[n(E)]),_:1},8,["content","url"])])]),lt,e("div",rt,[e("div",ut,[n(u,{content:d.content,url:`${c.value}popAdv.md`},{default:p(()=>[n(K)]),_:1},8,["content","url"])])])]))}});export{bt as __pageData,$t as default};
