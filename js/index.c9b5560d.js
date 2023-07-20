import{i as Y,E as K}from"./event-enums.6c6f25e7.js";import{S as L,u as E}from"./SelectGroup.647a0c37.js";import{ah as s,ar as z,Q as P,o as m,c as b,V as o,P as l,a as _,a9 as N,F as U,a8 as W,O as w,T as y,U as h,az as Q,aA as X,S as v,L as J,ax as j,ay as Z}from"./vendor-vue.9e61e0af.js";import{_ as k,R as A,d as G,r as ee}from"./index.8cc6f444.js";import{E as q,A as te,a as oe,b as ie,C as ne}from"./ConditionFilterGroup.dfd73222.js";import{F as le}from"./vendor-lib.cb4f08bf.js";import{a as ae}from"./element-plus.c20bc0dd.js";import"./element-icon.1ce1c350.js";const se={domain:[{message:"\u57DF\u540D\u4E0D\u80FD\u4E3A\u7A7A",required:!0,trigger:"blur"}],port:[{required:!1,trigger:"blur",validator:(i,e,t)=>{if(!e)return t();if(Y(e))t();else return t(new Error("\u7AEF\u53E3\u53F7\u53EA\u80FD\u662F\u6570\u5B57"))}}]};const re={name:"",props:{row:{type:Object,default:null}},components:{SelectGroup:L},data(){return{loading:!1,tag:"",form:{domain:"",comment:"",port:443,group_id:"",domain_start_time:"",domain_expire_time:"",is_auto_update:!0,icp_company:"",icp_licence:"",tags:[]},options:[],rules:se,disabledTime:!1,is_auto_subdomain:!1}},computed:{disabledDomain(){return!!this.row}},methods:{async getData(){if(this.loading=!0,this.row){let i={domain_info_id:this.row.id},t=(await this.$http.getDomainInfoById(i)).data;this.form.domain=t.domain,this.form.comment=t.comment,this.form.group_id=t.group_id,this.form.domain_start_time=t.domain_start_time,this.form.domain_expire_time=t.domain_expire_time,this.form.is_auto_update=t.is_auto_update,this.form.icp_company=t.icp_company,this.form.icp_licence=t.icp_licence,this.form.tags=t.tags||[],this.form.group_id==0&&(this.form.group_id=""),t.is_auto_update&&(this.disabledTime=!0)}this.loading=!1},handleCancel(){this.$emit("on-cancel")},handleSubmit(){console.log("handleSubmit",this.form),this.$refs.form.validate(i=>{if(console.log(i),i)this.confirmSubmit();else return!1})},async confirmSubmit(){let i=this.$loading({fullscreen:!0}),e={domain:this.form.domain.trim(),comment:this.form.comment.trim(),group_id:this.form.group_id,is_auto_update:this.form.is_auto_update,domain_start_time:this.form.domain_start_time,domain_expire_time:this.form.domain_expire_time,is_auto_subdomain:this.form.is_auto_subdomain,tags:this.form.tags,icp_company:this.form.icp_company,icp_licence:this.form.icp_licence},t=null;this.row?(e.domain_info_id=this.row.id,t=await this.$http.updateDomainInfoById(e)):t=await this.$http.addDomainInfo(e),t.code==0?(this.$msg.success("\u64CD\u4F5C\u6210\u529F"),this.$emit("on-success")):this.$msg.error(t.msg),this.$nextTick(()=>{i.close()})},handleAddTag(){!this.tag||(this.form.tags.push(this.tag),this.tag="")},handleCloseTag(i){this.form.tags.splice(i,1)},async handleDomainChange(){if(!this.form.domain||this.form.icp_company&&this.form.icp_licence)return;let i={domain:this.form.domain};const e=await this.$http.getICP(i);e.ok&&(this.form.icp_company||(this.form.icp_company=e.data.name),this.form.icp_licence||(this.form.icp_licence=e.data.icp))}},created(){this.getData()}},de=i=>(Q("data-v-61b80b9e"),i=i(),X(),i),ce={class:"flex justify-between w-full"},me=de(()=>_("span",null," - ",-1)),_e={class:"grid grid-cols-2"},ue={class:"grid grid-cols-2"},pe={class:"text-center"};function he(i,e,t,u,n,a){const c=s("el-input"),d=s("el-form-item"),f=s("el-date-picker"),C=s("el-switch"),S=s("Warning"),I=s("el-icon"),D=s("el-link"),x=s("el-tooltip"),O=s("SelectGroup"),F=s("el-tag"),T=s("el-form"),R=s("el-button"),B=z("loading");return P((m(),b("div",null,[o(T,{ref:"form",model:n.form,rules:n.rules,"label-width":"70px"},{default:l(()=>[o(d,{label:"\u57DF\u540D",prop:"domain"},{default:l(()=>[o(c,{type:"text",modelValue:n.form.domain,"onUpdate:modelValue":e[0]||(e[0]=p=>n.form.domain=p),placeholder:"\u8BF7\u8F93\u5165\u57DF\u540D",onBlur:a.handleDomainChange},null,8,["modelValue","onBlur"])]),_:1}),o(d,{label:"\u57DF\u540D\u65F6\u95F4",prop:"start_time"},{default:l(()=>[_("div",ce,[o(f,{modelValue:n.form.domain_start_time,"onUpdate:modelValue":e[1]||(e[1]=p=>n.form.domain_start_time=p),type:"date","value-format":"YYYY-MM-DD HH:mm:ss",placeholder:"\u57DF\u540D\u6CE8\u518C\u65F6\u95F4",disabled:n.form.is_auto_update,style:{width:"170px"}},null,8,["modelValue","disabled"]),me,o(f,{modelValue:n.form.domain_expire_time,"onUpdate:modelValue":e[2]||(e[2]=p=>n.form.domain_expire_time=p),type:"date","value-format":"YYYY-MM-DD HH:mm:ss",placeholder:"\u57DF\u540D\u5230\u671F\u65F6\u95F4",disabled:n.form.is_auto_update,style:{width:"170px"}},null,8,["modelValue","disabled"])])]),_:1}),_("div",_e,[o(d,{label:"\u81EA\u52A8\u66F4\u65B0",prop:"is_auto_update"},{default:l(()=>[o(C,{modelValue:n.form.is_auto_update,"onUpdate:modelValue":e[3]||(e[3]=p=>n.form.is_auto_update=p)},null,8,["modelValue"]),o(x,{effect:"dark",content:"\u5982\u9700\u624B\u52A8\u8BBE\u7F6E\u8FC7\u671F\u65F6\u95F4\uFF0C\u9700\u5173\u95ED\u81EA\u52A8\u66F4\u65B0",placement:"top-start","show-after":500},{default:l(()=>[o(D,{underline:!1},{default:l(()=>[o(I,{class:"ml-sm"},{default:l(()=>[o(S)]),_:1})]),_:1})]),_:1})]),_:1}),o(d,{label:"\u5B50\u57DF\u8BC1\u4E66",prop:"is_auto_subdomain"},{default:l(()=>[o(C,{modelValue:n.form.is_auto_subdomain,"onUpdate:modelValue":e[4]||(e[4]=p=>n.form.is_auto_subdomain=p)},null,8,["modelValue"]),o(x,{effect:"dark",content:"\u81EA\u52A8\u8BC6\u522B\u5B50\u57DF\u540D\uFF0C\u5E76\u6DFB\u52A0\u8BC1\u4E66\u76D1\u63A7\uFF0C\u4EC5\u672C\u6B21\u63D0\u4EA4\u6709\u6548",placement:"top-start","show-after":500},{default:l(()=>[o(D,{underline:!1},{default:l(()=>[o(I,{class:"ml-sm"},{default:l(()=>[o(S)]),_:1})]),_:1})]),_:1})]),_:1})]),_("div",ue,[o(d,{label:"\u5206\u7EC4",prop:"group_id",style:{"align-self":"flex-start"}},{default:l(()=>[o(O,{class:"w-[150px]",modelValue:n.form.group_id,"onUpdate:modelValue":e[5]||(e[5]=p=>n.form.group_id=p),clearable:""},null,8,["modelValue"])]),_:1})]),o(d,{label:"\u6807\u7B7E",prop:"tags"},{default:l(()=>[_("div",null,[o(c,{type:"text",modelValue:n.tag,"onUpdate:modelValue":e[6]||(e[6]=p=>n.tag=p),placeholder:"\u6807\u7B7E\uFF0C\u56DE\u8F66\u786E\u8BA4",onKeypress:N(a.handleAddTag,["native","enter"]),style:{width:"150px"},class:"mr-sm"},null,8,["modelValue","onKeypress"]),_("div",null,[(m(!0),b(U,null,W(n.form.tags,(p,r)=>(m(),w(F,{closable:"",onClose:g=>a.handleCloseTag(r)},{default:l(()=>[y(h(p),1)]),_:2},1032,["onClose"]))),256))])])]),_:1}),o(d,{label:"\u4E3B\u529E\u5355\u4F4D",prop:"icp_company"},{default:l(()=>[o(c,{type:"text",modelValue:n.form.icp_company,"onUpdate:modelValue":e[7]||(e[7]=p=>n.form.icp_company=p),placeholder:"\u8BF7\u8F93\u5165\u4E3B\u529E\u5355\u4F4D\u540D\u79F0"},null,8,["modelValue"])]),_:1}),o(d,{label:"ICP\u5907\u6848",prop:"icp_licence"},{default:l(()=>[o(c,{type:"text",modelValue:n.form.icp_licence,"onUpdate:modelValue":e[8]||(e[8]=p=>n.form.icp_licence=p),placeholder:"\u8BF7\u8F93\u5165ICP\u5907\u6848"},null,8,["modelValue"])]),_:1}),o(d,{label:"\u5907\u6CE8",prop:"comment"},{default:l(()=>[o(c,{type:"textarea",modelValue:n.form.comment,"onUpdate:modelValue":e[9]||(e[9]=p=>n.form.comment=p),rows:3,placeholder:"\u8BF7\u8F93\u5165\u5907\u6CE8"},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules"]),_("div",pe,[o(R,{onClick:a.handleCancel},{default:l(()=>[y("\u53D6 \u6D88")]),_:1},8,["onClick"]),o(R,{type:"primary",onClick:a.handleSubmit},{default:l(()=>[y("\u786E \u5B9A")]),_:1},8,["onClick"])])])),[[B,n.loading]])}const fe=k(re,[["render",he],["__scopeId","data-v-61b80b9e"]]),ge={name:"",props:{row:{type:Object,default:null},visible:{type:Boolean,default:!1}},emits:["update:visible"],components:{DataForm:fe},data(){return{}},computed:{dialogTitle(){return this.row?"\u7F16\u8F91\u57DF\u540D":"\u6DFB\u52A0\u57DF\u540D"},dialogVisible:{get(){return this.visible},set(i){this.$emit("update:visible",i)}}},methods:{handleClose(){this.$emit("on-success"),this.$emit("update:visible",!1)},handleOpen(){this.$emit("update:visible",!0)},handleSuccess(){this.handleClose(),this.$emit("on-success")}},created(){}};function be(i,e,t,u,n,a){const c=s("DataForm"),d=s("el-dialog");return m(),w(d,{title:a.dialogTitle,modelValue:a.dialogVisible,"onUpdate:modelValue":e[0]||(e[0]=f=>a.dialogVisible=f),width:"500px",center:"","append-to-body":"","lock-scroll":!1},{default:l(()=>[a.dialogVisible?(m(),w(c,{key:0,row:t.row,onOnCancel:a.handleClose,onOnSuccess:a.handleSuccess},null,8,["row","onOnCancel","onOnSuccess"])):v("",!0)]),_:1},8,["title","modelValue"])}const H=k(ge,[["render",be]]);const ye={name:"ShowOverflowTooltip",props:{content:{type:String}},data(){return{id:Math.random().toString(36).slice(2),disabled:!0}},watch:{content(){this.handleInit()}},methods:{handleInit(){function i(c,d=null){const f=window.getComputedStyle(c,null);return d?f[d]:f}const e=this.$refs.ShowOverflowTooltip;console.log(e);const t=document.createRange();t.setStart(e,0),t.setEnd(e,e.childNodes.length);const u=t.getBoundingClientRect().width,n=(parseInt(i(e,"paddingLeft"),10)||0)+(parseInt(i(e,"paddingRight"),10)||0);let a={rangeWidth:u,padding:n,"rangeWidth+padding":u+n,offsetWidth:e.offsetWidth,scrollWidth:e.scrollWidth};console.table(a),u+n>e.offsetWidth||e.scrollWidth>e.offsetWidth?(console.log("\u6709\u9690\u85CF\u6587\u5B57..."),this.content&&this.content.length>5?this.disabled=!1:this.disabled=!0):(console.log("\u6CA1\u6709\u9690\u85CF\u6587\u5B57"),this.disabled=!0)}},mounted(){this.$nextTick(()=>{this.handleInit()})}};function we(i,e,t,u,n,a){const c=s("el-tooltip");return m(),w(c,{effect:"dark",disabled:n.disabled,content:t.content,placement:"top-start"},{default:l(()=>[_("div",{ref:"ShowOverflowTooltip",class:"overflow-tooltip"},h(t.content),513)]),_:1},8,["disabled","content"])}const Ce=k(ye,[["render",we],["__scopeId","data-v-9e813693"]]),De={name:"",props:{row:{type:Object,default:null}},components:{ExpireDays:q,AddressList:te,ShowOverflowTooltip:Ce},data(){return{form:{domain:"",domain_url:"",ip:"",start_time:"",expire_time:"",check_time:"",connect_status:"",total_days:"",expire_days:"",create_time:"",update_time:"",detail:{issuer:{},subject:{}},real_time_expire_days:"",domain_start_time:"",domain_expire_time:"",real_time_domain_expire_days:"",alias:"",domain_auto_update:"",domain_auto_update_label:"",domain_expire_monitor:"",domain_check_time_label:"",port:"",real_domain_expire_days:"",ssl_count:"",comment:"",domain_registrar:"",domain_registrar_url:"",icp_company:"",icp_licence:""},ipInfo:{isp:""},icpInfo:null}},computed:{},methods:{async getICP(){if(!this.form.domain)return;this.loading=!0;let i={domain:this.form.domain};try{const e=await this.$http.getICP(i);this.icpInfo=e.data||{}}catch(e){console.log(e)}finally{this.loading=!1}},async getData(){if(this.row){let i={domain_info_id:this.row.id};const e=await this.$http.getDomainInfoById(i);if(e.code!=0)return;let t=e.data;this.form.domain=t.domain,this.form.update_time_label=t.update_time_label,this.form.ssl_count=t.ssl_count,this.form.comment=t.comment,this.form.domain_url=t.domain_url,this.form.domain_registrar_url=t.domain_registrar_url,this.form.domain_registrar=t.domain_registrar,this.form.ip=t.ip,this.form.start_time=t.start_time,this.form.expire_time=t.expire_time,this.form.check_time=t.check_time,this.form.connect_status=t.connect_status,this.form.total_days=t.total_days,this.form.expire_days=t.expire_days,this.form.real_time_expire_days=t.real_time_expire_days,this.form.create_time=t.create_time,this.form.update_time=t.update_time,this.form.domain_auto_update=t.domain_auto_update,this.form.domain_auto_update_label=t.is_auto_update==!0?"\u662F":"\u5426",this.form.domain_expire_monitor=t.is_expire_monitor==!0?"\u662F":"\u5426",this.form.domain_check_time_label=t.domain_check_time_label,this.form.port=t.port,this.form.real_domain_expire_days=t.real_domain_expire_days,this.form.alias=t.alias,this.form.icp_company=t.icp_company,this.form.icp_licence=t.icp_licence,this.form.domain_start_time=t.domain_start_time,this.form.domain_expire_time=t.domain_expire_time,this.form.real_time_domain_expire_days=t.real_time_domain_expire_days}},handleCancel(){this.$emit("on-cancel")},async handleUpdateRowDomainInfo(){let i=this.$loading({lock:!0,text:"\u66F4\u65B0\u4E2D"}),e={domain_info_id:this.row.id};(await this.$http.updateDomainInfoRowById(e)).code==0&&(this.$msg.success("\u64CD\u4F5C\u6210\u529F"),this.getData()),i.close()},async getIpInfo(){let i={ip:this.form.ip};const e=await this.$http.getIpInfo(i);e.code==0&&(this.ipInfo=e.data)}},created(){this.getData()}},xe={class:"domain-detail"},ve={class:"mo-form-detail grid grid-cols-2"},ke={class:"truncate"},Se={class:"flex justify-between flex-1"},Ie={class:"truncate"},Ve={class:"truncate"},Re={class:"truncate"},Ue={class:"mo-form-detail mt-[20px]"},Oe=["href"],Fe={key:1},Te={class:"truncate"},Be={class:"text-center mt-md"};function Ee(i,e,t,u,n,a){const c=s("el-link"),d=s("el-form-item"),f=s("ShowOverflowTooltip"),C=s("el-form"),S=s("ExpireDays"),I=s("Refresh"),D=s("el-icon"),x=s("el-button");return m(),b("div",xe,[_("div",ve,[o(C,{"label-width":"130px"},{default:l(()=>[o(d,{label:"\u57DF\u540D",prop:"domain"},{default:l(()=>[o(c,{underline:!1},{default:l(()=>[y(h(n.form.domain),1)]),_:1})]),_:1}),o(d,{label:"\u6CE8\u518C\u65F6\u95F4",prop:"create_time"},{default:l(()=>[_("span",null,h(n.form.domain_start_time||"-"),1)]),_:1}),o(d,{label:"\u5230\u671F\u65F6\u95F4",prop:"create_time"},{default:l(()=>[_("span",null,h(n.form.domain_expire_time||"-"),1)]),_:1}),o(d,{label:"\u81EA\u52A8\u66F4\u65B0",prop:"isp"},{default:l(()=>[_("span",ke,h(n.form.domain_auto_update_label||"-"),1)]),_:1}),o(d,{label:"\u4E3B\u529E\u5355\u4F4D\u540D\u79F0",prop:"isp"},{default:l(()=>[o(f,{content:n.form.icp_company||"-"},null,8,["content"])]),_:1})]),_:1}),o(C,{"label-width":"130px",style:{"margin-right":"-1px"}},{default:l(()=>[o(d,{label:"\u8BC1\u4E66\u6570\u91CF",prop:"domain"},{default:l(()=>[_("span",null,h(n.form.ssl_count||"-"),1)]),_:1}),o(d,{label:"\u5269\u4F59\u5929\u6570",prop:"create_time"},{default:l(()=>[o(S,{value:n.form.real_domain_expire_days},null,8,["value"])]),_:1}),o(d,{label:"\u68C0\u67E5\u65F6\u95F4",prop:"isp"},{default:l(()=>[_("div",Se,[_("span",Ie,h(n.form.update_time_label||"-"),1),o(c,{underline:!1,type:"primary",class:"mr-sm",onClick:a.handleUpdateRowDomainInfo},{default:l(()=>[o(D,null,{default:l(()=>[o(I)]),_:1})]),_:1},8,["onClick"])])]),_:1}),o(d,{label:"\u5230\u671F\u63D0\u9192",prop:"isp"},{default:l(()=>[_("span",Ve,h(n.form.domain_expire_monitor||"-"),1)]),_:1}),o(d,{label:"ICP\u5907\u6848",prop:"isp"},{default:l(()=>[_("span",Re,h(n.form.icp_licence||"-"),1)]),_:1})]),_:1})]),_("div",Ue,[o(C,{"label-width":"130px"},{default:l(()=>[o(d,{label:"\u6CE8\u518C\u5546",prop:"domain_registrar"},{default:l(()=>[n.form.domain_registrar_url?(m(),b("a",{key:0,href:n.form.domain_registrar_url,target:"_blank",class:"mo-link"},h(n.form.domain_registrar),9,Oe)):(m(),b("span",Fe,h(n.form.domain_registrar||"-"),1))]),_:1}),o(d,{label:"\u5907\u6CE8",prop:"comment"},{default:l(()=>[_("span",Te,h(n.form.comment||"-"),1)]),_:1})]),_:1})]),_("div",Be,[o(x,{type:"primary",onClick:a.handleCancel},{default:l(()=>[y("\u5173 \u95ED")]),_:1},8,["onClick"])])])}const Ae=k(De,[["render",Ee]]),ze={name:"",props:{row:{type:Object,default:null},visible:{type:Boolean,default:!1}},emits:["update:visible"],components:{DataForm:Ae},data(){return{}},computed:{dialogTitle(){return this.row?"\u7F16\u8F91":"\u6DFB\u52A0"},dialogVisible:{get(){return this.visible},set(i){this.$emit("update:visible",i)}}},methods:{handleClose(){this.dialogVisible=!1},handleOpen(){this.dialogVisible=!0},handleSuccess(){this.handleClose()},handleDialogClose(){this.$emit("on-success")}},created(){}};function Pe(i,e,t,u,n,a){const c=s("DataForm"),d=s("el-dialog");return m(),w(d,{title:"\u57DF\u540D\u8BE6\u60C5",modelValue:a.dialogVisible,"onUpdate:modelValue":e[0]||(e[0]=f=>a.dialogVisible=f),width:"800px",center:"","append-to-body":"","lock-scroll":!1,onClose:a.handleDialogClose},{default:l(()=>[a.dialogVisible?(m(),w(c,{key:0,row:t.row,onOnCancel:a.handleClose,onOnSuccess:a.handleSuccess},null,8,["row","onOnCancel","onOnSuccess"])):v("",!0)]),_:1},8,["modelValue","onClose"])}const $e=k(ze,[["render",Pe]]);const Ge={name:"",components:{DataFormDialog:H,DataDetailDialog:$e,ExpireDays:q,ExpireProgress:oe,AddressListgDialog:ie},emits:["on-success","selection-change","sort-change","on-refresh-row"],props:{role:{type:Number}},computed:{},data(){return{RoleEnum:A,currentRow:null,dialogVisible:!1,dialogDetailVisible:!1,AddressListgDialogVisible:!1}},methods:{handleEditRow(i){this.currentRow=i,this.dialogVisible=!0},async handleDeleteClick(i){let e={domain_info_id:i.id};const t=await this.$http.deleteDomainInfoById(e);t.code==0?(this.$msg.success("\u64CD\u4F5C\u6210\u529F"),this.$emit("on-success")):this.$msg.error(t.msg)},async handleStatusChange(i){let e={id:i.id};const t=await this.$Http.function(e);t.code==0?(this.$msg.success("\u64CD\u4F5C\u6210\u529F"),this.$emit("on-success")):this.$msg.error(t.msg)},async handleMonitorStatusChange(i,e){let t={domain_info_id:i.id,field:"is_expire_monitor",value:e};const u=await this.$http.updateDomainInfoFieldById(t);u.code==0?this.$msg.success("\u64CD\u4F5C\u6210\u529F"):this.$msg.error(u.msg)},async handleAutoUpdateStatusChange(i,e){let t={domain_info_id:i.id,field:"is_auto_update",value:e};const u=await this.$http.updateDomainInfoFieldById(t);u.code==0?this.$msg.success("\u64CD\u4F5C\u6210\u529F"):this.$msg.error(u.msg)},async handleUpdateRowDomainInfo(i){let e=this.$loading({lock:!0,text:"\u66F4\u65B0\u4E2D"}),t={domain_info_id:i.id};(await this.$http.updateDomainInfoRowById(t)).code==0&&(this.$msg.success("\u64CD\u4F5C\u6210\u529F"),this.$emit("on-success")),e.close()},handleUpdateSuccess(){this.$emit("on-success")},handleDetailSuccess(){},handleShowDetail(i){this.currentRow=i,this.dialogDetailVisible=!0},handleShowAddressListgDialog(i){this.currentRow=i,this.AddressListgDialogVisible=!0},handleCertCountClick(i){let e=this.$router.resolve({name:"cert-list",query:{keyword:i.domain}});window.open(e.href,"_blank")},handleRefreshRow(i){this.$emit("on-refresh-row",i)},handleSelectable(i,e){return i.has_edit_permission}},created(){}},Le={key:1},Ne={class:"domain-info-list__table__tag"},We={key:1};function je(i,e,t,u,n,a){const c=s("el-table-column"),d=s("el-link"),f=s("ExpireDays"),C=s("el-tag"),S=s("el-switch"),I=s("Refresh"),D=s("el-icon"),x=s("Edit"),O=s("Delete"),F=s("el-popconfirm"),T=s("el-table"),R=s("DataFormDialog"),B=s("DataDetailDialog"),p=s("AddressListgDialog");return m(),b("div",null,[o(T,J({stripe:"",border:""},i.$attrs,{onSortChange:e[0]||(e[0]=r=>i.$emit("sort-change",r)),onSelectionChange:e[1]||(e[1]=r=>i.$emit("selection-change",r))}),{default:l(()=>[t.role==n.RoleEnum.User?(m(),w(c,{key:0,type:"selection","header-align":"center",align:"center",width:"40",selectable:a.handleSelectable},null,8,["selectable"])):v("",!0),o(c,{label:"\u57DF\u540D","header-align":"center",align:"center",width:"250","show-overflow-tooltip":"",prop:"domain"},{default:l(r=>[o(d,{underline:!1,onClick:g=>a.handleShowDetail(r.row)},{default:l(()=>[y(h(r.row.domain),1)]),_:2},1032,["onClick"])]),_:1}),o(c,{label:"\u57DF\u540D\u5929\u6570","header-align":"center",align:"center",width:"90",sortable:"custom",prop:"domain_expire_days"},{default:l(r=>[o(f,{value:r.row.real_domain_expire_days},null,8,["value"])]),_:1}),o(c,{label:"\u8BC1\u4E66\u6570\u91CF","header-align":"center",align:"center",width:"100"},{default:l(r=>[r.row.ssl_count&&r.row.ssl_count>0?(m(),w(d,{key:0,underline:!1,onClick:g=>a.handleCertCountClick(r.row)},{default:l(()=>[y(h(r.row.ssl_count),1)]),_:2},1032,["onClick"])):(m(),b("span",Le,"-"))]),_:1}),o(c,{label:"\u5206\u7EC4","header-align":"center",align:"center",width:"100",sortable:"custom",prop:"group_name"},{default:l(r=>[_("span",null,h(r.row.group_name||"-"),1)]),_:1}),o(c,{label:"\u6807\u7B7E","header-align":"center",align:"left",width:"100",prop:"tags","show-overflow-tooltip":""},{default:l(r=>[r.row.tags&&r.row.tags.length>0?(m(!0),b(U,{key:0},W(r.row.tags,(g,$)=>(m(),b("div",Ne,[o(C,null,{default:l(()=>[y(h(g),1)]),_:2},1024)]))),256)):(m(),b("span",We,"-"))]),_:1}),o(c,{label:"\u5907\u6CE8","header-align":"center",align:"left",prop:"comment","show-overflow-tooltip":""},{default:l(r=>[_("span",null,h(r.row.comment||"-"),1)]),_:1}),o(c,{label:"\u66F4\u65B0\u65F6\u95F4","header-align":"center",align:"center",width:"110",prop:"update_time",sortable:"custom","show-overflow-tooltip":""},{default:l(r=>[_("span",null,h(r.row.update_time_label||"-"),1)]),_:1}),t.role==n.RoleEnum.User?(m(),b(U,{key:1},[o(c,{label:"\u81EA\u52A8\u66F4\u65B0",width:"90","header-align":"center",align:"center",sortable:"custom",prop:"domain_expire_monitor"},{default:l(r=>[o(S,{modelValue:r.row.is_auto_update,"onUpdate:modelValue":g=>r.row.is_auto_update=g,disabled:!r.row.has_edit_permission,onChange:g=>a.handleAutoUpdateStatusChange(r.row,g)},null,8,["modelValue","onUpdate:modelValue","disabled","onChange"])]),_:1}),o(c,{label:"\u5230\u671F\u63D0\u9192",width:"90","header-align":"center",align:"center",sortable:"custom",prop:"is_expire_monitor"},{default:l(r=>[o(S,{modelValue:r.row.is_expire_monitor,"onUpdate:modelValue":g=>r.row.is_expire_monitor=g,disabled:!r.row.has_edit_permission,onChange:g=>a.handleMonitorStatusChange(r.row,g)},null,8,["modelValue","onUpdate:modelValue","disabled","onChange"])]),_:1})],64)):v("",!0),o(c,{label:"\u64CD\u4F5C",width:"100","header-align":"center",align:"center"},{default:l(r=>[o(d,{underline:!1,type:"primary",class:"mr-sm",onClick:g=>a.handleUpdateRowDomainInfo(r.row)},{default:l(()=>[o(D,null,{default:l(()=>[o(I)]),_:1})]),_:2},1032,["onClick"]),t.role==n.RoleEnum.User?(m(),b(U,{key:0},[o(d,{underline:!1,type:"primary",class:"mr-sm",disabled:!r.row.has_edit_permission,onClick:g=>a.handleEditRow(r.row)},{default:l(()=>[o(D,null,{default:l(()=>[o(x)]),_:1})]),_:2},1032,["disabled","onClick"]),o(F,{title:"\u786E\u5B9A\u5220\u9664\uFF1F",onConfirm:g=>a.handleDeleteClick(r.row),disabled:!r.row.has_edit_permission},{reference:l(()=>[o(d,{underline:!1,type:"danger",disabled:!r.row.has_edit_permission},{default:l(()=>[o(D,null,{default:l(()=>[o(O)]),_:1})]),_:2},1032,["disabled"])]),_:2},1032,["onConfirm","disabled"])],64)):v("",!0)]),_:1})]),_:1},16),o(R,{visible:n.dialogVisible,"onUpdate:visible":e[2]||(e[2]=r=>n.dialogVisible=r),row:n.currentRow,onOnSuccess:e[3]||(e[3]=r=>a.handleRefreshRow(n.currentRow))},null,8,["visible","row"]),o(B,{row:n.currentRow,visible:n.dialogDetailVisible,"onUpdate:visible":e[4]||(e[4]=r=>n.dialogDetailVisible=r),onOnSuccess:e[5]||(e[5]=r=>a.handleRefreshRow(n.currentRow))},null,8,["row","visible"]),n.currentRow?(m(),w(p,{key:0,domainId:n.currentRow.id,visible:n.AddressListgDialogVisible,"onUpdate:visible":e[6]||(e[6]=r=>n.AddressListgDialogVisible=r),onOnSuccess:a.handleUpdateSuccess},null,8,["domainId","visible","onOnSuccess"])):v("",!0)])}const qe=k(Ge,[["render",je],["__scopeId","data-v-b6cf52b9"]]),He={name:"updateDomainInfo",props:{},components:{},data(){return{updateTimer:null}},computed:{disableUpdateButton(){return this.updateTimer!=null},updateText(){return this.disableUpdateButton?"\u6B63\u5728\u66F4\u65B0":"\u5168\u90E8\u66F4\u65B0"}},methods:{async updateAllDomainCertInfoOfUser(){this.updateTimer=!0,(await this.$http.updateDomainInfoOfUser()).code==0&&this.$msg.success("\u540E\u53F0\u66F4\u65B0\u4E2D\uFF0C\u5237\u65B0\u67E5\u770B")}},beforeUnmount(){clearInterval(this.updateTimer),this.updateTimer=null},created(){}};function Me(i,e,t,u,n,a){const c=s("Refresh"),d=s("el-icon"),f=s("el-link");return m(),w(f,{underline:!1,type:"primary",onClick:a.updateAllDomainCertInfoOfUser,disabled:a.disableUpdateButton},{default:l(()=>[o(d,null,{default:l(()=>[o(c)]),_:1}),y(h(a.updateText),1)]),_:1},8,["onClick","disabled"])}const Ye=k(He,[["render",Me]]),Ke={name:"updateDomainInfo",props:{},components:{},data(){return{updateTimer:null}},computed:{disableUpdateButton(){return this.updateTimer!=null},updateText(){return this.disableUpdateButton?"\u6B63\u5728\u68C0\u67E5":"\u57DF\u540D\u68C0\u67E5"}},methods:{async handleNotifyByEventId(){let i=this.$loading({lock:!0,text:"\u68C0\u67E5\u4E2D",fullscreen:!0});try{const e=await this.$http.handleNotifyByEventId({event_id:K.DOMAIN_EXPIRE});e.ok&&this.$msg.success(`\u68C0\u67E5\u6E20\u9053\uFF1A${e.data.success}`)}catch(e){console.log(e)}finally{this.$nextTick(()=>{i.close()})}}},beforeUnmount(){clearInterval(this.updateTimer),this.updateTimer=null},created(){}};function Qe(i,e,t,u,n,a){const c=s("Position"),d=s("el-icon"),f=s("el-link");return m(),w(f,{underline:!1,type:"primary",onClick:a.handleNotifyByEventId,disabled:a.disableUpdateButton},{default:l(()=>[o(d,null,{default:l(()=>[o(c)]),_:1}),y(h(a.updateText),1)]),_:1},8,["onClick","disabled"])}const Xe=k(Ke,[["render",Qe]]),Je={name:"ConditionFilter",props:{},components:{ConditionFilterGroup:ne},data(){return{loading:!0,options:[{title:"\u57DF\u540D\u72B6\u6001",field:"domain_expire_days",selected:[],maxCount:1,options:[{label:"\u5DF2\u8FC7\u671F",value:[null,3]},{label:"3\u5929\u5185\u8FC7\u671F",value:[0,3]},{label:"7\u5929\u5185\u8FC7\u671F",value:[0,7]},{label:"30\u5929\u5185\u8FC7\u671F",value:[0,30]}]},{title:"\u57DF\u540D\u5206\u7EC4",field:"group_ids",hidden:!0,selected:[],options:[]}]}},computed:{...j(E,{groupOptions:"getGroupOptions"})},methods:{async resetData(){const i=await this.$http.getGroupList();i.ok&&this.options.forEach(e=>{e.field=="group_ids"&&(i.data.list&&i.data.list.length>0?(e.options=i.data.list.map(t=>{let u=t.name;return{...t,value:t.id,label:u}}),e.hidden=!1):e.hidden=!0)}),this.loading=!1},handleChange(i){this.$emit("on-change",this.options)}},created(){this.resetData()}},Ze={class:""};function et(i,e,t,u,n,a){const c=s("ConditionFilterGroup"),d=z("loading");return P((m(),b("div",Ze,[o(c,{options:n.options,onOnChange:a.handleChange},null,8,["options","onOnChange"])])),[[d,n.loading]])}const tt=k(Je,[["render",et]]),ot={name:"domain-list",props:{role:{type:Number,default:A.User}},components:{DataFormDialog:H,DataTable:qe,SelectGroup:L,UpdateDomainInfo:Ye,CheckDomainInfo:Xe,ConditionFilter:tt},data(){return{RoleEnum:A,dataApi:G,list:[],total:0,page:1,size:20,keyword:"",group_id:"",pageSizeCachekey:"pageSize",loading:!0,dialogVisible:!1,export_to_file_url:ee(G.exportDomainToFile),order_type:"ascending",order_prop:"domain_expire_days",hasInitData:!1,ConditionFilterParams:[],selectedRows:[]}},computed:{...j(E,{groupOptions:"getGroupOptions"}),showBatchDeleteButton(){return!!(this.selectedRows&&this.selectedRows.length>0)}},methods:{...Z(E,{updateGroupOptions:"updateGroupOptions"}),resetData(){this.page=1,this.getData()},refreshData(){this.getData()},async getData(){this.loading=!0;let i={page:this.page,size:this.size,group_id:this.group_id,keyword:this.keyword.trim(),order_type:this.order_type,order_prop:this.order_prop,role:this.role};for(let t of this.ConditionFilterParams)t.selected&&t.selected.length>0&&(t.maxCount==1?i[t.field]=t.selected[0]:i[t.field]=t.selected);const e=await this.$http.getDomainInfoList(i);e.code==0?(this.list=e.data.list,this.total=e.data.total):this.$msg.error(e.msg),this.loading=!1},getGroupName(i){let e=this.groupOptions.find(t=>t.value==i);if(e)return e.name},async handleHttpRequest(i){let e=this.$loading({fullscreen:!0}),t=new FormData;t.append("file",i.file),(await this.$http.importDomainInFromFile(t)).code==0&&(this.$msg.success("\u4E0A\u4F20\u6210\u529F\uFF0C\u540E\u53F0\u5BFC\u5165\u4E2D"),this.resetData(),this.$refs.ConditionFilter&&this.$refs.ConditionFilter.resetData(),this.updateGroupOptions()),e.close()},handleAddRow(){this.dialogVisible=!0},handleAddSuccess(){this.resetData()},async handleExportToFile(){const i=await this.$http.exportDomainInfoFile();i.ok&&le.saveAs(i.data.url,i.data.name)},handleSearch(){this.resetData()},handleSizeChange(i){localStorage.setItem(this.pageSizeCachekey,i),this.resetData()},loadPageSize(){let i=localStorage.getItem(this.pageSizeCachekey);i&&(this.size=parseInt(i))},handleExceed(i){this.$refs.upload.clearFiles();const e=i[0];e.uid=ae(),this.handleHttpRequest({file:e})},handleSortChange({column:i,prop:e,order:t}){console.log(i,e,t),this.order_prop="",this.order_type="",t&&(this.order_type=t,this.order_prop=e),this.resetData()},async initData(){this.loadPageSize(),await this.updateGroupOptions(),this.hasInitData=!0,this.getData()},handleSelectionChange(i){this.selectedRows=i},handleConditionFilterChange(i){console.log(i),this.ConditionFilterParams=i,this.resetData()},async handleBatchDeleteConfirm(){let i=this.$loading({fullscreen:!0}),e={domain_info_ids:this.selectedRows.map(t=>t.id)};try{const t=await this.$http.deleteDomainInfoByIds(e);t.code==0?(this.$msg.success("\u64CD\u4F5C\u6210\u529F"),this.resetData()):this.$msg.error(t.msg)}catch(t){console.log(t)}finally{this.$nextTick(()=>{i.close()})}},async handleRefreshRow(i){let e={domain_info_id:i.id};const t=await this.$http.getDomainInfoById(e);if(t.ok){let u=this.list.findIndex(n=>n.id==i.id);this.list.splice(u,1,t.data),console.log(this.list)}}},created(){this.initData()}},it={class:"app-container"},nt={class:"flex",style:{"justify-content":"space-between"}},lt={key:1},at={class:"flex mt-sm",style:{"align-items":"center"}},st={style:{"font-size":"14px",color:"#333333"}},rt={class:"flex",style:{"margin-left":"auto"}},dt=_("div",{style:{position:"absolute",top:"0",left:"0",right:"0",bottom:"0"}},null,-1);function ct(i,e,t,u,n,a){const c=s("Plus"),d=s("el-icon"),f=s("el-button"),C=s("Search"),S=s("el-input"),I=s("ConditionFilter"),D=s("Delete"),x=s("el-link"),O=s("el-popconfirm"),F=s("UpdateDomainInfo"),T=s("CheckDomainInfo"),R=s("Upload"),B=s("el-upload"),p=s("Download"),r=s("DataTable"),g=s("el-pagination"),$=s("DataFormDialog"),M=z("loading");return m(),b("div",it,[_("div",nt,[t.role==n.RoleEnum.User?(m(),w(f,{key:0,type:"primary",onClick:a.handleAddRow},{default:l(()=>[o(d,null,{default:l(()=>[o(c)]),_:1}),y("\u6DFB\u52A0")]),_:1},8,["onClick"])):(m(),b("span",lt)),o(S,{class:"ml-sm",style:{width:"260px"},modelValue:n.keyword,"onUpdate:modelValue":e[0]||(e[0]=V=>n.keyword=V),placeholder:"\u641C\u7D22\u57DF\u540D",clearable:"",onKeypress:N(a.handleSearch,["enter"]),onClear:a.handleSearch},{append:l(()=>[o(f,{onClick:a.handleSearch},{default:l(()=>[o(d,null,{default:l(()=>[o(C)]),_:1})]),_:1},8,["onClick"])]),_:1},8,["modelValue","onKeypress","onClear"])]),t.role==n.RoleEnum.User?(m(),b(U,{key:0},[n.hasInitData?(m(),w(I,{key:0,class:"mt-md",ref:"ConditionFilter",onOnChange:a.handleConditionFilterChange},null,8,["onOnChange"])):v("",!0)],64)):v("",!0),_("div",at,[_("div",st,"\u5171\u8BA1 "+h(n.total)+" \u6761\u6570\u636E",1),_("div",rt,[a.showBatchDeleteButton?(m(),w(O,{key:0,title:"\u786E\u5B9A\u5220\u9664\u9009\u4E2D\uFF1F",onConfirm:a.handleBatchDeleteConfirm},{reference:l(()=>[o(x,{underline:!1,type:"danger",class:"mr-sm"},{default:l(()=>[o(d,null,{default:l(()=>[o(D)]),_:1}),y("\u6279\u91CF\u5220\u9664")]),_:1})]),_:1},8,["onConfirm"])):v("",!0),o(F,{onOnSuccess:a.resetData},null,8,["onOnSuccess"]),t.role==n.RoleEnum.User?(m(),b(U,{key:1},[o(T,{class:"ml-sm",onOnSuccess:a.resetData},null,8,["onOnSuccess"]),o(x,{underline:!1,type:"primary",class:"ml-sm",style:{position:"relative"}},{default:l(()=>[o(d,null,{default:l(()=>[o(R)]),_:1}),y("\u5BFC\u5165 "),o(B,{ref:"upload",action:"action",accept:".txt",limit:1,"on-exceed":a.handleExceed,"show-file-list":!1,"http-request":a.handleHttpRequest},{default:l(()=>[dt]),_:1},8,["on-exceed","http-request"])]),_:1}),o(x,{underline:!1,type:"primary",class:"ml-sm",onClick:a.handleExportToFile},{default:l(()=>[o(d,null,{default:l(()=>[o(p)]),_:1}),y("\u5BFC\u51FA")]),_:1},8,["onClick"])],64)):v("",!0)])]),P(o(r,{class:"mt-sm",data:n.list,role:t.role,onOnSuccess:a.resetData,onSortChange:a.handleSortChange,onSelectionChange:a.handleSelectionChange,onOnRefreshRow:a.handleRefreshRow},null,8,["data","role","onOnSuccess","onSortChange","onSelectionChange","onOnRefreshRow"]),[[M,n.loading]]),o(g,{class:"mt-md justify-center",background:"",layout:"total, sizes, prev, pager, next",total:n.total,"page-size":n.size,"onUpdate:pageSize":e[1]||(e[1]=V=>n.size=V),"current-page":n.page,"onUpdate:currentPage":e[2]||(e[2]=V=>n.page=V),onCurrentChange:a.getData,onSizeChange:a.handleSizeChange},null,8,["total","page-size","current-page","onCurrentChange","onSizeChange"]),o($,{visible:n.dialogVisible,"onUpdate:visible":e[3]||(e[3]=V=>n.dialogVisible=V),onOnSuccess:a.handleAddSuccess},null,8,["visible","onOnSuccess"])])}const yt=k(ot,[["render",ct]]);export{yt as default};
