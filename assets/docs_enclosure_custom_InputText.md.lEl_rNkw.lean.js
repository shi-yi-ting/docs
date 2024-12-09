import{M as I}from"./chunks/markDownBox.DqsVtTuw.js";import{_ as y,D as m,o as r,c as o,m as a,Q as h,n as b,a0 as S,b as g,e as f,d as B,c5 as p,I as c,w as v,q as N,s as k,h as x,a as V}from"./chunks/framework.FpOEJISx.js";import"./chunks/axios.AkAIBCGB.js";import"./chunks/jquery.pJ0uB8Ep.js";import"./chunks/theme.FAMzooZR.js";const C={name:"InputText",props:{value:{type:[String,Number],default:""},textarea:{type:Boolean,default:!1},noLineBreaks:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},search:{type:Boolean,default:!1},clear:{type:Boolean,default:!1},enterPromise:{type:Function,default:void 0},number:{type:[Boolean,String],default:!1,validator:e=>[!0,!1,">=0",">0",">=0.",">0.","0","0."].includes(e)},placeholder:{type:String,default:void 0},height:{type:Number},left:{type:Boolean,default:!1},center:{type:Boolean,default:!1},right:{type:Boolean,default:!1},noBorder:{type:Boolean,default:!1}},data(){return{forbid:!1}},computed:{heightSync(){return this.height!==void 0?this.height:this.textarea?80:32},inputStyle(){let e={};if(this.left?e.textAlign="left":this.center?e.textAlign="center":this.right&&(e.textAlign="right"),this.textarea)e.height=`${this.heightSync}px`;else if(e.height=`${this.heightSync}px`,e.lineHeight=`${this.heightSync-2}px`,this.search||this.clear){let t=4;this.search&&(t+=this.heightSync-10-2),this.clear&&(t+=this.heightSync-10-2),e.paddingRight=`${t}px`}return e},placeholderText(){return this.placeholder?this.placeholder:this.search?`请输入搜索关键字${this.enterPromise?"后回车":""}`:""},numberConfig(){let e=this.number;return this.number===!0&&(e=">=0"),e}},watch:{value(){if(this.number){let e=this.$refs.input.value;if(this.value===0&&["0","-0","0.","-0."].includes(e)||this.numberConfig.includes(".")&&this.value.toString()+"."===e)return}this.setValueText(),this.emitValue()}},methods:{getFocus(){this.$refs.input.focus()},execEnterPromise(){this.enterPromise&&(this.forbid=!0,this.$nextTick(async()=>{let e=await this.enterPromise();e===void 0&&(e=!0),this.forbid=!1,e&&this.$nextTick(()=>{this.getFocus()})}))},pasteEmit(e){this.$emit("paste",e)},clearClick(){this.$refs.input.value="",this.emitValue(),this.execEnterPromise()},inputEnter(){this.$emit("inputEnter"),this.execEnterPromise()},blurInput(){this.setValueText(),this.$nextTick(()=>{this.$emit("blur")})},setValueText(){let e=this.value;this.noLineBreaks&&(e=e.replace(/\n/g,"")),this.number&&(Number.isNaN(this.value)||this.value===void 0||this.value===null?e="":e=String(this.value)),this.$refs.input.value!==e&&(this.$refs.input.value=e)},emitValue(){let e=this.$refs.input.value,t=e;if(this.number){let l=this.formatNumberText(e);if(e!==l&&(this.$refs.input.value=l),l==="0."||l==="-"||l==="-0.")return;let n;if(l==="")n=NaN;else{if(this.numberConfig.includes(".")?n=parseFloat(l):n=parseInt(l,10),n===0&&this.numberConfig===">0.")return;this.numberConfig.includes(">=0")?(Number.isNaN(n)||n<0)&&(n=0):this.numberConfig.includes(">0")?(Number.isNaN(n)||n<=0)&&(n=1):Number.isNaN(n)&&(n=0)}t=n}t!==this.value&&this.$emit("input",t)},formatNumberText(e){e=e.replace(/[^\d\-.]/,"");let t=e.split(".");return t.length>2&&(e=t.slice(0,2).join(".")),t=e.split("-"),t.length>2&&(e=t.slice(0,2).join("-")),e.indexOf("-")>0&&(e=e.replace("-","")),this.numberConfig.includes(".")||(e=e.replace(".","")),this.numberConfig.includes(">")&&(e=e.replace("-","")),(e==="."||e==="-.")&&(e=""),e}},mounted(){this.setValueText(),this.emitValue()}},P=["placeholder","disabled"],E={key:0,class:"button-wp"},w=["placeholder","disabled"];function D(e,t,l,n,u,i){const d=m("el-icon");return l.textarea?(r(),o("textarea",{key:1,ref:"input",placeholder:i.placeholderText,disabled:l.disabled||u.forbid,style:h(i.inputStyle),class:b(["textarea",{noBorder:l.noBorder}]),onInput:t[4]||(t[4]=(...s)=>i.emitValue&&i.emitValue(...s)),onBlur:t[5]||(t[5]=(...s)=>i.blurInput&&i.blurInput(...s)),onPaste:t[6]||(t[6]=(...s)=>i.pasteEmit&&i.pasteEmit(...s))},null,46,w)):(r(),o("span",{key:0,class:"inputWp",style:h({height:`${i.heightSync}px`})},[a("input",{ref:"input",style:h(i.inputStyle),placeholder:i.placeholderText,disabled:l.disabled||u.forbid,class:b(["input",{noBorder:l.noBorder}]),onInput:t[0]||(t[0]=(...s)=>i.emitValue&&i.emitValue(...s)),onBlur:t[1]||(t[1]=(...s)=>i.blurInput&&i.blurInput(...s)),onKeyup:t[2]||(t[2]=S((...s)=>i.inputEnter&&i.inputEnter(...s),["enter"])),onPaste:t[3]||(t[3]=(...s)=>i.pasteEmit&&i.pasteEmit(...s))},null,46,P),l.search||l.clear?(r(),o("div",E,[l.clear&&!["",NaN].includes(l.value)?(r(),g(d,{key:0,type:"md-close",size:i.heightSync-10,onClick:i.clearClick},null,8,["size","onClick"])):f("",!0),l.search?(r(),g(d,{key:1,type:"ios-search",size:i.heightSync-10,onClick:i.inputEnter},null,8,["size","onClick"])):f("",!0)])):f("",!0)],4))}const j=y(C,[["render",D],["__scopeId","data-v-2b9c0f76"]]),z=B({components:{InputText:j},setup(){const e=p({isExpand01:!1}),t=p({list01:[{title:"HTML",code:`
                        <div>
                            <label class="item-label">SR: </label>

                            <!-- enterPromise,输入参数回车调接口 -->
                            <InputText v-model.trim="search.params" :enterPromise="ajaxData" placeholder="请输入" class="inputText" />
                        </div>
                    `},{title:"JS",code:`
                        const ajaxData = () => {
                            // 调接口获取数据
                            console.log('调接口获取数据')
                        }
                    `},{title:"CSS",code:`
                        <style scoped>
                        .inputText {
                            width: 220px;
                            margin-right: 20px;
                        }
                        .item-label {
                            display: inline-block;
                            height: 32px;
                            padding-right: 16px;
                            padding-top: 9px;
                            padding-bottom: 9px;
                            font-size: 14px;
                            line-height: 14px;
                            color: #545454;
                            vertical-align: middle;
                        }
                        .required {
                            position: relative;
                        }
                        .required:before {
                            content: "*";
                            display: inline-block;
                            width: 8px;
                            height: 14px;
                            margin-right: 3px;
                            color: red;
                            text-align: center;
                            font-weight: 700;
                        }
                        </style>
                    `}]}),l=p({params:""});return{bol:e,content:t,search:l,ajaxData:()=>{console.log("调接口获取数据")}}}}),_=e=>(N("data-v-dbd37b46"),e=e(),k(),e),M={class:"common_container"},F={class:"mt10"},R=_(()=>a("div",null,[a("span",{class:"ft20 fw700 mr8"},"输入框组件"),a("p",{class:"mt10"}," 自封输入框组件，之所以要封装是因为UI组件库的输入框样式不满足开发要求; 组件通过vue.component进行注册之后,可直接使用 ")],-1)),$={class:"mt10"},q=_(()=>a("label",{class:"item-label"},"SR: ",-1));function A(e,t,l,n,u,i){const d=m("InputText",!0),s=m("MarkDownBox");return r(),o("div",M,[a("div",F,[c(s,{url:"static/file/md/demo/antDesign/modal/modal.md"},{default:v(()=>[a("div",null,[R,a("div",$,[a("div",null,[q,c(d,{modelValue:e.search.params,"onUpdate:modelValue":t[0]||(t[0]=T=>e.search.params=T),modelModifiers:{trim:!0},enterPromise:e.ajaxData,placeholder:"请输入",class:"inputText"},null,8,["modelValue","enterPromise"])])])])]),_:1},8,["url"])])])}const L=y(z,[["render",A],["__scopeId","data-v-dbd37b46"]]),O=a("h2",{id:"inputtext输入框",tabindex:"-1"},[V("InputText输入框 "),a("a",{class:"header-anchor",href:"#inputtext输入框","aria-label":'Permalink to "InputText输入框"'},"​")],-1),U={class:"common_container"},H={class:"codeWrap"},Y=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"docs/enclosure/custom/InputText.md","filePath":"docs/enclosure/custom/InputText.md"}'),J={name:"docs/enclosure/custom/InputText.md"},Z=Object.assign(J,{setup(e){const t=x("/static/_file/md/enclosure/inputText/"),l=x("");return(n,u)=>(r(),o("div",null,[O,a("div",U,[a("div",H,[c(I,{url:`${t.value}inputText.md`},{default:v(()=>[a("div",null,[c(L,{modelValue:l.value,"onUpdate:modelValue":u[0]||(u[0]=i=>l.value=i),modelModifiers:{trim:!0},disabled:""},null,8,["modelValue"])])]),_:1},8,["url"])])])]))}});export{Y as __pageData,Z as default};
