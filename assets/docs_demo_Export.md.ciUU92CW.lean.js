import{M as u}from"./chunks/markDownBox.0P6YsIB1.js";import{a as n}from"./chunks/axios.AkAIBCGB.js";import{M as i}from"./chunks/index.l64p2xUu.js";import{_ as m,d as f,o as d,c as l,a as p,q as x,s as _,m as a,h,I as s,w as y}from"./chunks/framework.FpOEJISx.js";import"./chunks/jquery.mE_SOKaf.js";import"./chunks/theme.5wfSrMJJ.js";import"./chunks/useConfigInject.HSKnNMqX.js";import"./chunks/index._Y40OLZn.js";import"./chunks/contains.SQkeJ0xF.js";import"./chunks/KeyCode.S8dia2Uh.js";import"./chunks/pickAttrs.ABg5saZY.js";import"./chunks/objectDestructuringEmpty.1PR54iw-.js";import"./chunks/PortalWrapper.FHKGZbeb.js";import"./chunks/getScrollBarSize.KoyaLeRI.js";import"./chunks/Portal.3HvYVhRv.js";import"./chunks/index.vMHbGGvX.js";import"./chunks/styleChecker.UrA0N4LC.js";import"./chunks/ActionButton.u6bwCjuZ.js";let S=function(t){return new Promise(e=>{n({method:"post",url:"/ssdSpecial/dataExportAction/exportResult.do",data:t}).then(o=>{e(o.data)})})},g=function(t,e){i.info({title:"导出失败",okText:"关闭",content:'<p style="text-align: center;">数据导出失败，请刷新页面后重新操作，或者联系管理员处理</p>',scrollable:!0}),n({method:"post",url:t,data:e}).then(async o=>{if(o.data.taskId)for(;;){let r=await S(o.data.taskId);if(r.fileStatus==="Success"){i.info({title:"文件下载",okText:"关闭",content:`<a download="${r.fileName}" href="${r.fullPath}" target="_blank" rel="noopener noreferrer" style="text-decoration: underline; color: #337ab7;">${r.fileName}</a>`,scrollable:!0});break}else if(r.fileStatus==="Fail"){i.info({title:"导出失败",okText:"关闭",content:'<p style="text-align: center;">数据导出失败，请刷新页面后重新操作，或者联系管理员处理</p>',scrollable:!0});break}}})};const E=f({props:{pageType:{required:!0,type:String},fuzzySearch:{type:String},total:{required:!0,type:Number},ids:{required:!0,type:Array,default:()=>[]}},setup(t){return{startExport:()=>{g("/ssdSpecial/dataExportAction/export.do",{apiName:"/ssdController/doExport.do",taskType:"ssdCustomerConfigList",exportType:"ssdCustomerConfig",exportFileName:`${t.pageType}客户配置`,totalRecord:t.ids.length||t.total,id:t.ids.length>0?t.ids.join(","):void 0,customerType:t.pageType,fuzzySearch:t.fuzzySearch})}}}}),k=t=>(x("data-v-3f31e102"),t=t(),_(),t),b=k(()=>a("i",{class:"export2_blue"},null,-1));function v(t,e,o,r,I,z){return d(),l("button",{class:"Button White",onClick:e[0]||(e[0]=(...c)=>t.startExport&&t.startExport(...c))},[b,p("导出")])}const w=m(E,[["render",v],["__scopeId","data-v-3f31e102"]]),$=a("h2",{id:"导出-使用到了iview的弹框",tabindex:"-1"},[p("导出，使用到了iview的弹框 "),a("a",{class:"header-anchor",href:"#导出-使用到了iview的弹框","aria-label":'Permalink to "导出，使用到了iview的弹框"'},"​")],-1),T={class:"common_container"},N={class:"codeWrap"},U=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"docs/demo/Export.md","filePath":"docs/demo/Export.md"}'),C={name:"docs/demo/Export.md"},X=Object.assign(C,{setup(t){const e=h("/static/_file/md/demo/export/");return(o,r)=>(d(),l("div",null,[$,a("div",T,[a("div",N,[s(u,{content:o.content,url:`${e.value}iExport.md`},{default:y(()=>[a("div",null,[s(w)])]),_:1},8,["content","url"])])])]))}});export{U as __pageData,X as default};