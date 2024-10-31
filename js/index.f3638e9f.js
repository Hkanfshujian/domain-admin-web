import{i as J,_ as S,R as L,d as G,r as Q}from"./index.7bc61245.js";import{S as N}from"./SelectGroup.ff2f85f6.js";import{ai as a,aq as T,P as A,o as u,c as g,U as o,O as n,a as c,F as O,a8 as Z,M as v,S as D,T as _,R as C,K as ee,ay as q,az as te,a9 as oe}from"./vendor-vue.81b81d06.js";import{E as j,A as le,a as ie}from"./DataTableDialog.cc1a3c66.js";import{C as ne}from"./ConnectStatus.51b2b343.js";import{E as ae}from"./ExpireProgress.b80bcfa1.js";import{F as se}from"./vendor-lib.8db6a55f.js";import{u as P}from"./group-store.67c1af27.js";import{E as re}from"./event-enums.90907e50.js";import{C as de,E as me,g as ue}from"./export-util.b9eaadd6.js";import{D as ce}from"./DataCount.57542af1.js";import{d as pe}from"./element-plus.2f06b8ac.js";import"./element-icon.4cb553e0.js";const _e=[{label:"SSL/TLS",value:0},{label:"STARTTLS",value:1}],he={domain:[{message:"\u57DF\u540D\u4E0D\u80FD\u4E3A\u7A7A",required:!0,trigger:"blur"}],port:[{required:!0,trigger:"blur",validator:(t,e,l)=>{if(!e)return l();if(J(e))l();else return l(new Error("\u7AEF\u53E3\u53F7\u53EA\u80FD\u662F\u6570\u5B57"))}}]},fe={name:"",props:{row:{type:Object,default:null}},components:{SelectGroup:N},data(){return{sslTypeOptions:_e,loading:!1,form:{domain:"",alias:"",port:443,group_id:"",is_dynamic_host:!1,ssl_type:0,start_time:"",expire_time:"",auto_update:!0},rules:he}},computed:{disabledDomain(){return!!this.row}},methods:{async getData(){if(this.loading=!0,this.row){let t={id:this.row.id},l=(await this.$http.getDomainById(t)).data;this.form.domain=l.domain,this.form.alias=l.alias,this.form.group_id=l.group_id,this.form.port=l.port,this.form.ssl_type=l.ssl_type,this.form.start_time=l.start_time,this.form.expire_time=l.expire_time,this.form.auto_update=l.auto_update,this.form.group_id==0&&(this.form.group_id="")}this.loading=!1},handleCancel(){this.$emit("on-cancel")},handleSubmit(){console.log("handleSubmit",this.form),this.$refs.form.validate(t=>{if(console.log(t),t)this.confirmSubmit();else return!1})},async confirmSubmit(){let t=this.$loading({fullscreen:!0}),e={domain:this.form.domain.trim(),alias:this.form.alias.trim(),group_id:this.form.group_id,port:this.form.port,ssl_type:this.form.ssl_type,start_time:this.form.start_time,expire_time:this.form.expire_time,auto_update:this.form.auto_update},l=null;this.row?(e.id=this.row.id,l=await this.$http.updateDomainById(e)):l=await this.$http.addDomain(e),l.ok&&(this.$msg.success("\u64CD\u4F5C\u6210\u529F"),this.$emit("on-success")),this.$nextTick(()=>{t.close()})},async handleDomainChange(){}},created(){this.getData()}},ge={class:"flex"},be={class:"flex justify-between w-full"},we={class:"grid grid-cols-2"},ye={class:"text-center"};function De(t,e,l,h,i,s){const m=a("el-input"),d=a("el-form-item"),p=a("el-date-picker"),V=a("el-switch"),y=a("Warning"),b=a("el-icon"),R=a("el-link"),U=a("el-tooltip"),x=a("el-option"),I=a("el-select"),$=a("SelectGroup"),E=a("el-form"),F=a("el-button"),B=T("loading");return A((u(),g("div",null,[o(E,{ref:"form",model:i.form,rules:i.rules,"label-width":"100px"},{default:n(()=>[c("div",ge,[o(d,{label:t.$t("\u57DF\u540D"),prop:"domain",class:"flex-1"},{default:n(()=>[o(m,{type:"text",modelValue:i.form.domain,"onUpdate:modelValue":e[0]||(e[0]=f=>i.form.domain=f),placeholder:t.$t("\u8BF7\u8F93\u5165\u57DF\u540D"),onBlur:s.handleDomainChange},null,8,["modelValue","placeholder","onBlur"])]),_:1},8,["label"]),o(d,{label:t.$t("\u7AEF\u53E3"),prop:"port",style:{width:"160px"}},{default:n(()=>[o(m,{type:"text",modelValue:i.form.port,"onUpdate:modelValue":e[1]||(e[1]=f=>i.form.port=f),placeholder:t.$t("\u8BF7\u8F93\u5165\u7AEF\u53E3")},null,8,["modelValue","placeholder"])]),_:1},8,["label"])]),o(d,{label:t.$t("\u8BC1\u4E66\u65F6\u95F4"),prop:"start_time"},{default:n(()=>[c("div",be,[o(p,{modelValue:i.form.start_time,"onUpdate:modelValue":e[2]||(e[2]=f=>i.form.start_time=f),type:"date","value-format":"YYYY-MM-DD HH:mm:ss",placeholder:t.$t("\u8BC1\u4E66\u9881\u53D1\u65F6\u95F4"),disabled:i.form.auto_update,style:{width:"180px"}},null,8,["modelValue","placeholder","disabled"]),e[8]||(e[8]=c("span",null," - ",-1)),o(p,{modelValue:i.form.expire_time,"onUpdate:modelValue":e[3]||(e[3]=f=>i.form.expire_time=f),type:"date","value-format":"YYYY-MM-DD HH:mm:ss",placeholder:t.$t("\u8BC1\u4E66\u8FC7\u671F\u65F6\u95F4"),disabled:i.form.auto_update,style:{width:"180px"}},null,8,["modelValue","placeholder","disabled"])])]),_:1},8,["label"]),c("div",we,[o(d,{label:t.$t("\u81EA\u52A8\u66F4\u65B0"),prop:"auto_update"},{default:n(()=>[o(V,{modelValue:i.form.auto_update,"onUpdate:modelValue":e[4]||(e[4]=f=>i.form.auto_update=f)},null,8,["modelValue"]),o(U,{effect:"dark",content:"\u5982\u9700\u624B\u52A8\u8BBE\u7F6E\u8BC1\u4E66\u65F6\u95F4\uFF0C\u9700\u5173\u95ED\u81EA\u52A8\u66F4\u65B0",placement:"top-start","show-after":500},{default:n(()=>[o(R,{underline:!1},{default:n(()=>[o(b,{class:"ml-sm"},{default:n(()=>[o(y)]),_:1})]),_:1})]),_:1})]),_:1},8,["label"]),o(d,{label:t.$t("\u52A0\u5BC6\u65B9\u5F0F"),prop:"ssl_type"},{default:n(()=>[o(I,{modelValue:i.form.ssl_type,"onUpdate:modelValue":e[5]||(e[5]=f=>i.form.ssl_type=f),placeholder:t.$t("\u52A0\u5BC6\u65B9\u5F0F")},{default:n(()=>[(u(!0),g(O,null,Z(i.sslTypeOptions,f=>(u(),v(x,{key:f.value,label:f.label,value:f.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue","placeholder"])]),_:1},8,["label"])]),o(d,{label:t.$t("\u5206\u7EC4"),prop:"group_id"},{default:n(()=>[o($,{class:"w-[150px]",modelValue:i.form.group_id,"onUpdate:modelValue":e[6]||(e[6]=f=>i.form.group_id=f),clearable:""},null,8,["modelValue"])]),_:1},8,["label"]),o(d,{label:t.$t("\u5907\u6CE8"),prop:"alias"},{default:n(()=>[o(m,{type:"textarea",modelValue:i.form.alias,"onUpdate:modelValue":e[7]||(e[7]=f=>i.form.alias=f),rows:3,placeholder:t.$t("\u8BF7\u8F93\u5165\u5907\u6CE8")},null,8,["modelValue","placeholder"])]),_:1},8,["label"])]),_:1},8,["model","rules"]),c("div",ye,[o(F,{onClick:s.handleCancel},{default:n(()=>[D(_(t.$t("\u53D6\u6D88")),1)]),_:1},8,["onClick"]),o(F,{type:"primary",onClick:s.handleSubmit},{default:n(()=>[D(_(t.$t("\u786E\u5B9A")),1)]),_:1},8,["onClick"])])])),[[B,i.loading]])}const Ce=S(fe,[["render",De]]),ke={name:"",props:{row:{type:Object,default:null},visible:{type:Boolean,default:!1}},emits:["update:visible"],components:{DataForm:Ce},data(){return{}},computed:{dialogTitle(){return this.row?this.$t("\u7F16\u8F91\u57DF\u540D"):this.$t("\u6DFB\u52A0\u57DF\u540D")},dialogVisible:{get(){return this.visible},set(t){this.$emit("update:visible",t)}}},methods:{handleClose(){this.dialogVisible=!1},handleOpen(){this.dialogVisible=!0},handleSuccess(){this.handleClose(),this.$emit("on-success")}},created(){}};function ve(t,e,l,h,i,s){const m=a("DataForm"),d=a("el-dialog");return u(),v(d,{title:s.dialogTitle,modelValue:s.dialogVisible,"onUpdate:modelValue":e[0]||(e[0]=p=>s.dialogVisible=p),width:"530px",center:"","append-to-body":"","lock-scroll":!1},{default:n(()=>[s.dialogVisible?(u(),v(m,{key:0,row:l.row,onOnCancel:s.handleClose,onOnSuccess:s.handleSuccess},null,8,["row","onOnCancel","onOnSuccess"])):C("",!0)]),_:1},8,["title","modelValue"])}const H=S(ke,[["render",ve]]),Ve={name:"",props:{row:{type:Object,default:null}},components:{ExpireDays:j,AddressList:le},data(){return{form:{domain:"",domain_url:"",ip:"",start_time:"",expire_time:"",check_time:"",connect_status:"",total_days:"",expire_days:"",create_time:"",update_time:"",group_name:"",real_time_expire_days:"",domain_start_time:"",domain_expire_time:"",real_time_domain_expire_days:"",alias:"",domain_auto_update:"",domain_auto_update_label:"",domain_expire_monitor:"",domain_check_time_label:"",port:"",address_count:0,group:null},ipInfo:{isp:""}}},computed:{},methods:{async getData(){if(this.row){let t={id:this.row.id};const e=await this.$http.getDomainById(t);if(!e.ok)return;let l=e.data;this.form.domain=l.domain,this.form.domain_url=l.domain_url,this.form.ip=l.ip,this.form.start_time=l.start_time,this.form.expire_time=l.expire_time,this.form.check_time=l.check_time,this.form.connect_status=l.connect_status,this.form.total_days=l.total_days,this.form.expire_days=l.expire_days,this.form.real_time_expire_days=l.real_time_expire_days,this.form.create_time=l.create_time,this.form.update_time_label=l.update_time_label,this.form.domain_auto_update=l.domain_auto_update,this.form.domain_auto_update_label=l.domain_auto_update==!0?"\u662F":"\u5426",this.form.domain_expire_monitor=l.domain_expire_monitor==!0?"\u662F":"\u5426",this.form.domain_check_time_label=l.domain_check_time_label,this.form.port=l.port,this.form.alias=l.alias,this.form.domain_start_time=l.domain_start_time,this.form.domain_expire_time=l.domain_expire_time,this.form.real_time_domain_expire_days=l.real_time_domain_expire_days,this.form.address_count=l.address_count,this.form.group=l.group,this.form.group_name=l.group_name}},handleCancel(){this.$emit("on-cancel")},async handleUpdateRowDomainInfo(){let t=this.$loading({lock:!0,text:"\u66F4\u65B0\u4E2D"}),e={domain_id:this.row.id};(await this.$http.updateDomainCertInfoById(e)).code==0&&(this.$msg.success("\u64CD\u4F5C\u6210\u529F"),this.getData()),t.close()},async getIpInfo(){let t={ip:this.form.ip};const e=await this.$http.getIpInfo(t);e.code==0&&(this.ipInfo=e.data)}},created(){this.getData()}},Se={class:"domain-detail"},xe={class:"mo-form-detail grid grid-cols-2"},Re={key:0},Ue={key:1},Fe={class:"flex justify-between flex-1"},Oe={class:"truncate"},Ie={class:"mo-form-detail mt-[20px]"},$e={class:"truncate"},Ee={class:"text-center mt-md"};function Be(t,e,l,h,i,s){const m=a("el-link"),d=a("el-form-item"),p=a("el-form"),V=a("ExpireDays"),y=a("Refresh"),b=a("el-icon"),R=a("el-button");return u(),g("div",Se,[c("div",xe,[o(p,{"label-width":"130px"},{default:n(()=>[o(d,{label:"\u57DF\u540D",prop:"domain"},{default:n(()=>[o(m,{underline:!1,href:i.form.domain_url,target:"_blank"},{default:n(()=>[D(_(i.form.domain),1)]),_:1},8,["href"])]),_:1}),o(d,{label:"\u8BC1\u4E66\u9881\u53D1\u65F6\u95F4",prop:"create_time"},{default:n(()=>[c("span",null,_(i.form.start_time||"-"),1)]),_:1}),o(d,{label:"\u8BC1\u4E66\u8FC7\u671F\u65F6\u95F4",prop:"create_time"},{default:n(()=>[c("span",null,_(i.form.expire_time||"-"),1)]),_:1}),o(d,{label:"\u5206\u7EC4",prop:"create_time"},{default:n(()=>[i.form.group_name?(u(),g("span",Re,_(i.form.group_name||"-"),1)):(u(),g("span",Ue,"-"))]),_:1})]),_:1}),o(p,{"label-width":"130px",style:{"margin-right":"-1px"}},{default:n(()=>[o(d,{label:"\u7AEF\u53E3\u53F7",prop:"domain"},{default:n(()=>[c("span",null,_(i.form.port||"-"),1)]),_:1}),o(d,{label:"\u5269\u4F59\u5929\u6570",prop:"create_time"},{default:n(()=>[o(V,{value:i.form.real_time_expire_days},null,8,["value"])]),_:1}),o(d,{label:"\u68C0\u67E5\u65F6\u95F4",prop:"isp"},{default:n(()=>[c("div",Fe,[c("span",Oe,_(i.form.update_time_label||"-"),1),o(m,{underline:!1,type:"primary",class:"mr-sm",onClick:s.handleUpdateRowDomainInfo},{default:n(()=>[o(b,null,{default:n(()=>[o(y)]),_:1})]),_:1},8,["onClick"])])]),_:1}),o(d,{label:"\u4E3B\u673A\u6570\u91CF",prop:"create_time"},{default:n(()=>[c("span",null,_(i.form.address_count||"-"),1)]),_:1})]),_:1})]),c("div",Ie,[o(p,{"label-width":"130px"},{default:n(()=>[o(d,{label:"\u5907\u6CE8",prop:"isp"},{default:n(()=>[c("span",$e,_(i.form.alias||"-"),1)]),_:1})]),_:1})]),c("div",Ee,[o(R,{type:"primary",onClick:s.handleCancel},{default:n(()=>e[0]||(e[0]=[D("\u5173 \u95ED")])),_:1},8,["onClick"])])])}const Te=S(Ve,[["render",Be]]),Ae={name:"",props:{row:{type:Object,default:null},visible:{type:Boolean,default:!1}},emits:["update:visible"],components:{DataForm:Te},data(){return{}},computed:{dialogTitle(){return this.row?"\u7F16\u8F91":"\u6DFB\u52A0"},dialogVisible:{get(){return this.visible},set(t){this.$emit("update:visible",t)}}},methods:{handleClose(){this.dialogVisible=!1},handleOpen(){this.dialogVisible=!0},handleSuccess(){this.handleClose()},handleDialogClose(){this.$emit("on-success")}},created(){}};function ze(t,e,l,h,i,s){const m=a("DataForm"),d=a("el-dialog");return u(),v(d,{title:"\u8BC1\u4E66\u8BE6\u60C5",modelValue:s.dialogVisible,"onUpdate:modelValue":e[0]||(e[0]=p=>s.dialogVisible=p),width:"800px",center:"","append-to-body":"","lock-scroll":!1,onClose:s.handleDialogClose},{default:n(()=>[s.dialogVisible?(u(),v(m,{key:0,row:l.row,onOnCancel:s.handleClose,onOnSuccess:s.handleSuccess},null,8,["row","onOnCancel","onOnSuccess"])):C("",!0)]),_:1},8,["modelValue","onClose"])}const Le=S(Ae,[["render",ze]]),Pe={name:"",components:{DataFormDialog:H,DataDetailDialog:Le,ConnectStatus:ne,ExpireDays:j,ExpireProgress:ae,AddressListgDialog:ie},emits:["on-success","selection-change","sort-change","on-refresh-row"],props:{role:{type:Number}},computed:{},data(){return{RoleEnum:L,currentRow:null,dialogVisible:!1,dialogDetailVisible:!1,AddressListgDialogVisible:!1}},methods:{handleEditRow(t){this.currentRow=t,this.dialogVisible=!0},async handleDeleteClick(t){let e={id:t.id};const l=await this.$http.deleteDomainById(e);l.code==0?(this.$msg.success("\u64CD\u4F5C\u6210\u529F"),this.$emit("on-success")):this.$msg.error(l.msg)},async handleStatusChange(t){let e={id:t.id};const l=await this.$Http.function(e);l.code==0?(this.$msg.success("\u64CD\u4F5C\u6210\u529F"),this.$emit("on-success")):this.$msg.error(l.msg)},async handleMonitorStatusChange(t,e){let l={domain_id:t.id,is_monitor:e};const h=await this.$http.updateDomainExpireMonitorById(l);h.code==0?this.$msg.success("\u64CD\u4F5C\u6210\u529F"):this.$msg.error(h.msg)},async handleUpdateRowDomainInfo(t){let e=this.$loading({lock:!0,text:"\u66F4\u65B0\u4E2D"}),l={id:t.id};(await this.$http.updateDomainRowInfoById(l)).code==0&&(this.$msg.success("\u64CD\u4F5C\u6210\u529F"),this.$emit("on-success")),e.close()},handleUpdateSuccess(){this.$emit("on-success")},handleDetailSuccess(){},handleShowDetail(t){this.currentRow=t,this.dialogDetailVisible=!0},handleShowAddressListgDialog(t){this.currentRow=t,this.AddressListgDialogVisible=!0},async handleAutoUpdateStatusChange(t,e){let l={domain_id:t.id,field:"auto_update",value:e};const h=await this.$http.updateDomainFieldById(l);h.code==0?this.$msg.success("\u64CD\u4F5C\u6210\u529F"):this.$msg.error(h.msg)},handleRefreshRow(t){this.$emit("on-refresh-row",t)},handleSelectable(t,e){return t.has_edit_permission}},created(){}},Ge={class:"inline-flex items-center"},Ne={class:"mr-[2px]"},qe={key:0},je={key:0,class:"color--danger"},He={class:"inline-flex items-center"},Me={class:"mr-[2px]"};function Ye(t,e,l,h,i,s){const m=a("el-table-column"),d=a("Warning"),p=a("el-icon"),V=a("el-tooltip"),y=a("el-link"),b=a("ConnectStatus"),R=a("ExpireProgress"),U=a("el-switch"),x=a("Refresh"),I=a("Edit"),$=a("Delete"),E=a("el-popconfirm"),F=a("el-table"),B=a("DataFormDialog"),f=a("DataDetailDialog"),z=a("AddressListgDialog");return u(),g("div",null,[o(F,ee({stripe:"",border:""},t.$attrs,{onSortChange:e[0]||(e[0]=r=>t.$emit("sort-change",r)),onSelectionChange:e[1]||(e[1]=r=>t.$emit("selection-change",r))}),{default:n(()=>[i.RoleEnum.Admin!=l.role?(u(),v(m,{key:0,type:"selection","header-align":"center",align:"center",width:"40",selectable:s.handleSelectable},null,8,["selectable"])):C("",!0),o(m,{label:t.$t("\u57DF\u540D"),"header-align":"center",align:"center",width:"230","show-overflow-tooltip":"",prop:"domain"},{header:n(()=>[o(V,{effect:"dark",content:"\u9ED8\u8BA4\u7AEF\u53E3\uFF1A443",placement:"top-start","show-after":800},{default:n(()=>[c("div",Ge,[c("span",Ne,_(t.$t("\u57DF\u540D")),1),o(p,null,{default:n(()=>[o(d)]),_:1})])]),_:1})]),default:n(r=>[o(y,{underline:!1,onClick:w=>s.handleShowDetail(r.row)},{default:n(()=>[c("span",null,_(r.row.domain),1),r.row.port!="443"?(u(),g("span",qe,":"+_(r.row.port),1)):C("",!0)]),_:2},1032,["onClick"])]),_:1},8,["label"]),o(m,{label:t.$t("\u4E3B\u673A\u6570\u91CF"),"header-align":"center",align:"center",width:"80",prop:"address_count"},{default:n(r=>[r.row.is_dynamic_host?(u(),g("span",je,"*")):C("",!0),o(y,{underline:!1,onClick:w=>s.handleShowAddressListgDialog(r.row)},{default:n(()=>[D(_(r.row.address_count||"-"),1)]),_:2},1032,["onClick"])]),_:1},8,["label"]),o(m,{label:t.$t("\u72B6\u6001"),"header-align":"center",align:"center",width:"80",sortable:"custom",prop:"expire_status"},{default:n(r=>[o(b,{value:r.row.expire_status,onOnClick:w=>s.handleShowAddressListgDialog(r.row)},null,8,["value","onOnClick"])]),_:1},8,["label"]),o(m,{label:t.$t("\u8BC1\u4E66\u5929\u6570"),"header-align":"center",align:"center",width:"110",sortable:"custom",prop:"expire_days"},{header:n(()=>[o(V,{effect:"dark",content:"\u5982\u6709\u591A\u4E2A\u4E3B\u673AIP\u5730\u5740\uFF0C\u6B64\u5904\u4EC5\u663E\u793A\u5230\u671F\u65F6\u95F4\u6700\u77ED\u7684\u8BC1\u4E66",placement:"top-start","show-after":800},{default:n(()=>[c("div",He,[c("span",Me,_(t.$t("\u8BC1\u4E66\u5929\u6570")),1),o(p,null,{default:n(()=>[o(d)]),_:1})])]),_:1})]),default:n(r=>[o(R,{startTime:r.row.start_time,endTime:r.row.expire_time},null,8,["startTime","endTime"])]),_:1},8,["label"]),o(m,{label:t.$t("\u5206\u7EC4"),"header-align":"center",align:"center",width:"100",sortable:"custom",prop:"group_name"},{default:n(r=>[c("span",null,_(r.row.group_name||"-"),1)]),_:1},8,["label"]),o(m,{label:t.$t("\u5907\u6CE8"),"header-align":"center",align:"left",prop:"check_time","min-width":"100","show-overflow-tooltip":""},{default:n(r=>[c("span",null,_(r.row.alias||"-"),1)]),_:1},8,["label"]),o(m,{label:t.$t("\u66F4\u65B0\u65F6\u95F4"),"header-align":"center",align:"center",width:"120",prop:"update_time",sortable:"custom","show-overflow-tooltip":""},{default:n(r=>[c("span",null,_(r.row.update_time_label||"-"),1)]),_:1},8,["label"]),i.RoleEnum.Admin!=l.role?(u(),g(O,{key:1},[o(m,{label:t.$t("\u81EA\u52A8\u66F4\u65B0"),width:"120","header-align":"center",align:"center",sortable:"custom",prop:"auto_update"},{default:n(r=>[o(U,{disabled:!r.row.has_edit_permission,modelValue:r.row.auto_update,"onUpdate:modelValue":w=>r.row.auto_update=w,onChange:w=>s.handleAutoUpdateStatusChange(r.row,w)},null,8,["disabled","modelValue","onUpdate:modelValue","onChange"])]),_:1},8,["label"]),o(m,{label:t.$t("\u5230\u671F\u63D0\u9192"),width:"90","header-align":"center",align:"center",sortable:"custom",prop:"is_monitor"},{default:n(r=>[o(U,{disabled:!r.row.has_edit_permission,modelValue:r.row.is_monitor,"onUpdate:modelValue":w=>r.row.is_monitor=w,onChange:w=>s.handleMonitorStatusChange(r.row,w)},null,8,["disabled","modelValue","onUpdate:modelValue","onChange"])]),_:1},8,["label"])],64)):C("",!0),o(m,{label:t.$t("\u64CD\u4F5C"),width:"100","header-align":"center",align:"center"},{default:n(r=>[o(y,{underline:!1,type:"primary",class:"mr-sm",onClick:w=>s.handleUpdateRowDomainInfo(r.row)},{default:n(()=>[o(p,null,{default:n(()=>[o(x)]),_:1})]),_:2},1032,["onClick"]),i.RoleEnum.Admin!=l.role?(u(),g(O,{key:0},[o(y,{underline:!1,type:"primary",class:"mr-sm",disabled:!r.row.has_edit_permission,onClick:w=>s.handleEditRow(r.row)},{default:n(()=>[o(p,null,{default:n(()=>[o(I)]),_:1})]),_:2},1032,["disabled","onClick"]),o(E,{title:`${t.$t("\u786E\u5B9A\u5220\u9664")}\uFF1F`,onConfirm:w=>s.handleDeleteClick(r.row),disabled:!r.row.has_edit_permission},{reference:n(()=>[o(y,{underline:!1,type:"danger",disabled:!r.row.has_edit_permission},{default:n(()=>[o(p,null,{default:n(()=>[o($)]),_:1})]),_:2},1032,["disabled"])]),_:2},1032,["title","onConfirm","disabled"])],64)):C("",!0)]),_:1},8,["label"])]),_:1},16),o(B,{visible:i.dialogVisible,"onUpdate:visible":e[2]||(e[2]=r=>i.dialogVisible=r),row:i.currentRow,onOnSuccess:e[3]||(e[3]=r=>s.handleRefreshRow(i.currentRow))},null,8,["visible","row"]),o(f,{row:i.currentRow,visible:i.dialogDetailVisible,"onUpdate:visible":e[4]||(e[4]=r=>i.dialogDetailVisible=r),onOnSuccess:e[5]||(e[5]=r=>s.handleRefreshRow(i.currentRow))},null,8,["row","visible"]),i.currentRow?(u(),v(z,{key:0,role:l.role,domainId:i.currentRow.id,domainRow:i.currentRow,visible:i.AddressListgDialogVisible,"onUpdate:visible":e[6]||(e[6]=r=>i.AddressListgDialogVisible=r),onOnClose:e[7]||(e[7]=r=>s.handleRefreshRow(i.currentRow))},null,8,["role","domainId","domainRow","visible"])):C("",!0)])}const Ke=S(Pe,[["render",Ye]]),We={name:"updateDomainInfo",props:{},components:{},data(){return{updateTimer:null}},computed:{disableUpdateButton(){return this.updateTimer!=null},updateText(){return this.disableUpdateButton?this.$t("\u6B63\u5728\u66F4\u65B0"):this.$t("\u5168\u90E8\u66F4\u65B0")}},methods:{async updateAllDomainCertInfoOfUser(){this.updateTimer=!0,await this.$http.updateAllDomainCertInfoOfUser()}},beforeUnmount(){clearInterval(this.updateTimer),this.updateTimer=null},created(){}};function Xe(t,e,l,h,i,s){const m=a("Refresh"),d=a("el-icon"),p=a("el-link");return u(),v(p,{underline:!1,type:"primary",onClick:s.updateAllDomainCertInfoOfUser,disabled:s.disableUpdateButton},{default:n(()=>[o(d,null,{default:n(()=>[o(m)]),_:1}),D(_(s.updateText),1)]),_:1},8,["onClick","disabled"])}const Je=S(We,[["render",Xe]]),Qe={name:"updateDomainInfo",props:{},components:{},data(){return{updateTimer:null}},computed:{disableUpdateButton(){return this.updateTimer!=null},updateText(){return this.disableUpdateButton?this.$t("\u6B63\u5728\u68C0\u67E5"):this.$t("\u8BC1\u4E66\u68C0\u67E5")}},methods:{async handleNotifyByEventId(){let t=this.$loading({lock:!0,text:"\u68C0\u67E5\u4E2D",fullscreen:!0});try{const e=await this.$http.handleNotifyByEventId({event_id:re.SSL_CERT_EXPIRE});e.ok&&this.$msg.success(`\u68C0\u67E5\u6E20\u9053\uFF1A${e.data.success}`)}catch(e){console.log(e)}finally{this.$nextTick(()=>{t.close()})}}},beforeUnmount(){clearInterval(this.updateTimer),this.updateTimer=null},created(){}};function Ze(t,e,l,h,i,s){const m=a("Position"),d=a("el-icon"),p=a("el-link");return u(),v(p,{underline:!1,type:"primary",onClick:s.handleNotifyByEventId,disabled:s.disableUpdateButton},{default:n(()=>[o(d,null,{default:n(()=>[o(m)]),_:1}),D(_(s.updateText),1)]),_:1},8,["onClick","disabled"])}const et=S(Qe,[["render",Ze]]),tt={name:"ConditionFilter",props:{},components:{ConditionFilterGroup:de},data(){return{loading:!0,options:[{title:"\u8BC1\u4E66\u72B6\u6001",maxCount:1,field:"expire_days",selected:[],options:[{label:"\u5DF2\u8FC7\u671F",value:[null,3]},{label:"3\u5929\u5185\u8FC7\u671F",value:[0,3]},{label:"7\u5929\u5185\u8FC7\u671F",value:[0,7]},{label:"30\u5929\u5185\u8FC7\u671F",value:[0,30]}]},{title:"\u57DF\u540D\u5206\u7EC4",field:"group_ids",hidden:!0,selected:[],options:[]}]}},computed:{...q(P,{groupOptions:"getGroupOptions"})},methods:{async resetData(){const t=await this.$http.getGroupList();t.ok&&this.options.forEach(e=>{e.field=="group_ids"&&(t.data.list&&t.data.list.length>0?(e.options=t.data.list.map(l=>{let h=l.name;return{...l,value:l.id,label:h}}),e.hidden=!1):e.hidden=!0)}),this.loading=!1},handleChange(t){this.$emit("on-change",this.options)}},created(){this.resetData()}},ot={class:""};function lt(t,e,l,h,i,s){const m=a("ConditionFilterGroup"),d=T("loading");return A((u(),g("div",ot,[o(m,{options:i.options,onOnChange:s.handleChange},null,8,["options","onOnChange"])])),[[d,i.loading]])}const it=S(tt,[["render",lt]]),nt={name:"",props:{selectedRows:{type:Array,default:[]}},components:{},data(){return{loading:!1,form:{auto_update:!0,is_monitor:!0},rules:{}}},computed:{},methods:{initData(){let t=this.selectedRows.filter(l=>l.auto_update).length,e=this.selectedRows.filter(l=>l.is_monitor).length;t>this.selectedRows.length/2?this.form.auto_update=!0:this.form.auto_update=!1,e>this.selectedRows.length/2?this.form.is_monitor=!0:this.form.is_monitor=!1},handleCancel(){this.$emit("on-cancel")},async handleValueChange(t,e){let l={domain_ids:this.selectedRows.map(i=>i.id),field:t,value:e};const h=await this.$http.updateDomainFieldByIds(l);h.code==0?(this.$msg.success("\u64CD\u4F5C\u6210\u529F"),this.$emit("on-success")):this.$msg.error(h.msg)}},created(){this.initData()}},at={class:"text-center"},st={class:"text-center"};function rt(t,e,l,h,i,s){const m=a("el-switch"),d=a("el-form-item"),p=a("el-form"),V=a("el-button"),y=T("loading");return A((u(),g("div",null,[c("div",at,"\u5DF2\u9009\u4E2D\uFF1A"+_(l.selectedRows.length)+" \u6761\u6570\u636E",1),o(p,{class:"mt-md",ref:"form",inline:!0,model:i.form,rules:i.rules,"label-width":"80px"},{default:n(()=>[o(d,{label:t.$t("\u81EA\u52A8\u66F4\u65B0"),prop:"auto_update"},{default:n(()=>[o(m,{modelValue:i.form.auto_update,"onUpdate:modelValue":e[0]||(e[0]=b=>i.form.auto_update=b),onChange:e[1]||(e[1]=b=>s.handleValueChange("auto_update",b))},null,8,["modelValue"])]),_:1},8,["label"]),o(d,{label:t.$t("\u5230\u671F\u63D0\u9192"),prop:"is_monitor"},{default:n(()=>[o(m,{modelValue:i.form.is_monitor,"onUpdate:modelValue":e[2]||(e[2]=b=>i.form.is_monitor=b),onChange:e[3]||(e[3]=b=>s.handleValueChange("is_monitor",b))},null,8,["modelValue"])]),_:1},8,["label"])]),_:1},8,["model","rules"]),c("div",st,[o(V,{onClick:s.handleCancel},{default:n(()=>[D(_(t.$t("\u53D6\u6D88")),1)]),_:1},8,["onClick"])])])),[[y,i.loading]])}const dt=S(nt,[["render",rt]]),mt={name:"domain-list",props:{role:{type:Number,default:L.User}},components:{DataFormDialog:H,DataTable:Ke,SelectGroup:N,UpdateDomainInfo:Je,CheckDomainInfo:et,ConditionFilter:it,DataCount:ce,ExportFileDialog:me,BatchUpdateForm:dt},data(){return{RoleEnum:L,dataApi:G,list:[],total:0,page:1,size:20,keyword:"",group_id:"",pageSizeCachekey:"pageSize",loading:!0,dialogVisible:!1,export_to_file_url:Q(G.exportDomainToFile),order_type:"ascending",order_prop:"expire_days",hasInitData:!1,ConditionFilterParams:[],selectedRows:[],params:{},exportFileDialogVisible:!1,batchUpdateDialogVisible:!1}},computed:{...q(P,{groupOptions:"getGroupOptions"}),showBatchActionButton(){return!!(this.selectedRows&&this.selectedRows.length>0)}},methods:{...te(P,{updateGroupOptions:"updateGroupOptions"}),resetData(){this.page=1,this.getData()},refreshData(){this.getData()},async getData(){this.loading=!0;let t={page:this.page,size:this.size,group_id:this.group_id,keyword:this.keyword.trim(),order_type:this.order_type,order_prop:this.order_prop,role:this.role};for(let l of this.ConditionFilterParams)l.selected&&l.selected.length>0&&(l.maxCount==1?t[l.field]=l.selected[0]:t[l.field]=l.selected);this.params=t;const e=await this.$http.getDomainList(t);e.code==0?(this.list=e.data.list,this.total=e.data.total):this.$msg.error(e.msg),this.loading=!1},getGroupName(t){let e=this.groupOptions.find(l=>l.value==t);if(e)return e.name},async handleHttpRequest(t){let e=this.$loading({fullscreen:!0}),l=new FormData;l.append("file",t.file),(await this.$http.importDomainFromFile(l)).code==0&&(this.$msg.success("\u4E0A\u4F20\u6210\u529F\uFF0C\u540E\u53F0\u5BFC\u5165\u4E2D"),this.resetData(),this.$refs.ConditionFilter&&this.$refs.ConditionFilter.resetData(),this.updateGroupOptions()),e.close()},handleAddRow(){this.dialogVisible=!0},handleAddSuccess(){this.resetData()},async handleExportConfirm(t){const e=await this.$http.exportDomainFile({...this.params,ext:t.ext});e.ok&&se.saveAs(ue(e.data.url),e.data.name)},handleExportToFile(){this.exportFileDialogVisible=!0},handleSearch(){this.resetData()},handleSizeChange(t){localStorage.setItem(this.pageSizeCachekey,t),this.resetData()},loadPageSize(){let t=localStorage.getItem(this.pageSizeCachekey);t&&(this.size=parseInt(t))},handleExceed(t){this.$refs.upload.clearFiles();const e=t[0];e.uid=pe(),this.handleHttpRequest({file:e})},handleSortChange({column:t,prop:e,order:l}){console.log(t,e,l),this.order_prop="",this.order_type="",l&&(this.order_type=l,this.order_prop=e),this.resetData()},async initData(){this.loadPageSize(),await this.updateGroupOptions(),this.hasInitData=!0,this.getData()},handleSelectionChange(t){this.selectedRows=t},handleConditionFilterChange(t){console.log(t),this.ConditionFilterParams=t,this.resetData()},async handleBatchDeleteConfirm(){let t=this.$loading({fullscreen:!0}),e={ids:this.selectedRows.map(l=>l.id)};try{const l=await this.$http.deleteDomainByIds(e);l.code==0?(this.$msg.success("\u64CD\u4F5C\u6210\u529F"),this.resetData()):this.$msg.error(l.msg)}catch(l){console.log(l)}finally{this.$nextTick(()=>{t.close()})}},async handleRefreshRow(t){let e={id:t.id};const l=await this.$http.getDomainById(e);if(l.ok){let h=this.list.findIndex(i=>i.id==t.id);this.list.splice(h,1,l.data),console.log(this.list)}},handleAddCert(){const t=this.$router.resolve({path:"/cert/issue-certificate-list"});window.open(t.href,"_blank")},handleEditCert(t){this.$router.push({name:"CertEdit",query:{id:t.id}})},handleShowBatchUpdateDialog(){this.batchUpdateDialogVisible=!0},handleBatchUpdateFormCancel(){this.batchUpdateDialogVisible=!1},handleBatchUpdateFormSuccess(){this.batchUpdateDialogVisible=!1,this.refreshData()}},created(){this.keyword=this.$route.query.keyword||this.keyword,this.initData()}},ut={class:"app-container"},ct={class:"flex",style:{"justify-content":"space-between"}},pt={key:0},_t={key:1},ht={key:0},ft={class:"flex mt-sm",style:{"align-items":"center"}},gt={class:"flex",style:{"margin-left":"auto"}};function bt(t,e,l,h,i,s){const m=a("Plus"),d=a("el-icon"),p=a("el-button"),V=a("Search"),y=a("el-input"),b=a("ConditionFilter"),R=a("DataCount"),U=a("Delete"),x=a("el-link"),I=a("el-popconfirm"),$=a("Edit"),E=a("UpdateDomainInfo"),F=a("CheckDomainInfo"),B=a("Upload"),f=a("el-upload"),z=a("Download"),r=a("DataTable"),w=a("el-pagination"),M=a("DataFormDialog"),Y=a("ExportFileDialog"),K=a("BatchUpdateForm"),W=a("el-dialog"),X=T("loading");return u(),g("div",ut,[c("div",ct,[i.RoleEnum.Admin==l.role?(u(),g("span",pt)):(u(),g("div",_t,[o(p,{type:"primary",onClick:s.handleAddRow},{default:n(()=>[o(d,null,{default:n(()=>[o(m)]),_:1}),D(_(t.$t("\u6DFB\u52A0")),1)]),_:1},8,["onClick"])])),o(y,{class:"ml-sm",style:{width:"260px"},modelValue:i.keyword,"onUpdate:modelValue":e[0]||(e[0]=k=>i.keyword=k),placeholder:t.$t("\u641C\u7D22\u57DF\u540D"),clearable:"",onKeypress:oe(s.handleSearch,["enter"]),onClear:s.handleSearch},{append:n(()=>[o(p,{onClick:s.handleSearch},{default:n(()=>[o(d,null,{default:n(()=>[o(V)]),_:1})]),_:1},8,["onClick"])]),_:1},8,["modelValue","placeholder","onKeypress","onClear"])]),i.RoleEnum.Admin==l.role?(u(),g("span",ht)):(u(),g(O,{key:1},[i.hasInitData?(u(),v(b,{key:0,class:"mt-md",ref:"ConditionFilter",onOnChange:s.handleConditionFilterChange},null,8,["onOnChange"])):C("",!0)],64)),c("div",ft,[o(R,{value:i.total},null,8,["value"]),c("div",gt,[s.showBatchActionButton?(u(),g(O,{key:0},[o(I,{title:"\u786E\u5B9A\u5220\u9664\u9009\u4E2D\uFF1F",onConfirm:s.handleBatchDeleteConfirm},{reference:n(()=>[o(x,{underline:!1,type:"danger",class:"mr-sm"},{default:n(()=>[o(d,null,{default:n(()=>[o(U)]),_:1}),e[6]||(e[6]=D("\u6279\u91CF\u5220\u9664"))]),_:1})]),_:1},8,["onConfirm"]),o(x,{underline:!1,type:"primary",class:"mr-sm",onClick:s.handleShowBatchUpdateDialog},{default:n(()=>[o(d,null,{default:n(()=>[o($)]),_:1}),e[7]||(e[7]=D("\u6279\u91CF\u64CD\u4F5C"))]),_:1},8,["onClick"])],64)):C("",!0),o(E,{onOnSuccess:s.resetData},null,8,["onOnSuccess"]),i.RoleEnum.Admin!=l.role?(u(),g(O,{key:1},[o(F,{class:"ml-sm",onOnSuccess:s.resetData},null,8,["onOnSuccess"]),o(x,{underline:!1,type:"primary",class:"ml-sm",style:{position:"relative"}},{default:n(()=>[o(d,null,{default:n(()=>[o(B)]),_:1}),D(_(t.$t("\u5BFC\u5165"))+" ",1),o(f,{ref:"upload",action:"action",accept:".txt,.csv,.xlsx",limit:1,"on-exceed":s.handleExceed,"show-file-list":!1,"http-request":s.handleHttpRequest},{default:n(()=>e[8]||(e[8]=[c("div",{style:{position:"absolute",top:"0",left:"0",right:"0",bottom:"0"}},null,-1)])),_:1},8,["on-exceed","http-request"])]),_:1}),o(x,{underline:!1,type:"primary",class:"ml-sm",onClick:s.handleExportToFile},{default:n(()=>[o(d,null,{default:n(()=>[o(z)]),_:1}),D(_(t.$t("\u5BFC\u51FA")),1)]),_:1},8,["onClick"])],64)):C("",!0)])]),A(o(r,{class:"mt-sm",role:l.role,data:i.list,onOnSuccess:s.resetData,onOnRefreshRow:s.handleRefreshRow,onSortChange:s.handleSortChange,onSelectionChange:s.handleSelectionChange},null,8,["role","data","onOnSuccess","onOnRefreshRow","onSortChange","onSelectionChange"]),[[X,i.loading]]),o(w,{class:"mt-md justify-center",background:"",layout:"total, sizes, prev, pager, next",total:i.total,"page-size":i.size,"onUpdate:pageSize":e[1]||(e[1]=k=>i.size=k),"current-page":i.page,"onUpdate:currentPage":e[2]||(e[2]=k=>i.page=k),onCurrentChange:s.getData,onSizeChange:s.handleSizeChange},null,8,["total","page-size","current-page","onCurrentChange","onSizeChange"]),o(M,{visible:i.dialogVisible,"onUpdate:visible":e[3]||(e[3]=k=>i.dialogVisible=k),onOnSuccess:s.handleAddSuccess},null,8,["visible","onOnSuccess"]),o(Y,{visible:i.exportFileDialogVisible,"onUpdate:visible":e[4]||(e[4]=k=>i.exportFileDialogVisible=k),onOnConfirm:s.handleExportConfirm},null,8,["visible","onOnConfirm"]),o(W,{title:"\u6279\u91CF\u64CD\u4F5C",modelValue:i.batchUpdateDialogVisible,"onUpdate:modelValue":e[5]||(e[5]=k=>i.batchUpdateDialogVisible=k),width:"400px",center:"","append-to-body":""},{default:n(()=>[i.batchUpdateDialogVisible?(u(),v(K,{key:0,selectedRows:i.selectedRows,onOnCancel:s.handleBatchUpdateFormCancel,onOnSuccess:s.handleBatchUpdateFormSuccess},null,8,["selectedRows","onOnCancel","onOnSuccess"])):C("",!0)]),_:1},8,["modelValue"])])}const It=S(mt,[["render",bt]]);export{It as default};
