import{d as $}from"./element-plus.dcbfaaa8.js";import{_ as C}from"./index.96f73414.js";import{o as r,c as m,J as I,U as b,ah as l,V as i,P as o,a as c,T as v,O as w,S as x,ar as E,Q as F,F as k,a8 as O,L as R}from"./vendor-vue.edbe275b.js";const U={name:"ExpireDays",props:{value:{type:[Number,String],default:null}},components:{},data(){return{}},computed:{showValue(){return Number.isInteger(this.value)},className(){return this.showValue?this.value<7?["color--danger"]:this.value<30?["color--warning"]:["color--success"]:[]}},methods:{async getData(){}},created(){this.getData()}},M={class:"ExpireDays"},z={key:1};function N(s,e,t,f,a,n){return r(),m("div",M,[n.showValue?(r(),m("span",{key:0,class:I(n.className)},b(t.value),3)):(r(),m("span",z,"-"))])}const P=C(U,[["render",N]]),K={host:[{message:"\u4E3B\u673A\u5730\u5740\u4E0D\u80FD\u4E3A\u7A7A",required:!0,trigger:"blur"}],host_connect_status:[{message:"\u4E3B\u673A\u8FDE\u63A5\u72B6\u6001\u4E0D\u80FD\u4E3A\u7A7A",required:!0,trigger:"blur"}],host_check_time:[{message:"\u4E3B\u673A\u68C0\u67E5\u65F6\u95F4\u4E0D\u80FD\u4E3A\u7A7A",required:!0,trigger:"blur"}]},Y={name:"",props:{row:{type:Object,default:null},domainId:{type:Number,default:null}},components:{},data(){return{rules:K,is_auto_update:!0,form:{host:"",host_connect_status:"",host_check_time:"",ssl_start_time:"",ssl_expire_time:"",ssl_check_time:"",ssl_expire_days:"",ssl_expire_monitor:!0,ssl_auto_update:!0}}},computed:{disabledTime(){return this.is_auto_update}},methods:{async getDomainById(){let s={domain_id:this.domainId};const e=await this.$http.getDomainById(s);e.ok&&(this.is_auto_update=e.data.auto_update)},async getData(){if(await this.getDomainById(),this.row){let s={address_id:this.row.id};const e=await this.$http.getAddressById(s);if(e.code!=0)return;let t=e.data;this.form.host=t.host,this.form.host_connect_status=t.host_connect_status,this.form.host_check_time=t.host_check_time,this.form.ssl_start_time=t.ssl_start_time,this.form.ssl_expire_time=t.ssl_expire_time,this.form.ssl_check_time=t.ssl_check_time,this.form.ssl_expire_days=t.ssl_expire_days,this.form.ssl_auto_update=t.ssl_auto_update,this.form.ssl_expire_monitor=t.ssl_expire_monitor}},handleCancel(){this.$emit("on-cancel")},handleSubmit(){this.$refs.form.validate(s=>{if(s)this.confirmSubmit();else return!1})},async confirmSubmit(){let s=this.$loading({fullscreen:!0}),e={domain_id:this.domainId,host:this.form.host.trim(),ssl_start_time:this.form.ssl_start_time,ssl_expire_time:this.form.ssl_expire_time},t=null;this.row?(e.address_id=this.row.id,t=await this.$http.updateAddressById(e)):t=await this.$http.addAddress(e),t.code==0?(this.$msg.success("\u64CD\u4F5C\u6210\u529F"),this.$emit("on-success")):this.$msg.error(t.msg),this.$nextTick(()=>{s.close()})}},created(){this.getData()}},H={class:"text-center mt-md"};function j(s,e,t,f,a,n){const d=l("el-input"),_=l("el-form-item"),p=l("el-date-picker"),h=l("el-form"),g=l("el-button");return r(),m("div",null,[i(h,{ref:"form",model:a.form,rules:a.rules,"label-width":"100px"},{default:o(()=>[i(_,{label:"\u4E3B\u673AIP\u5730\u5740",prop:"host"},{default:o(()=>[i(d,{type:"text",style:{width:"220px"},modelValue:a.form.host,"onUpdate:modelValue":e[0]||(e[0]=y=>a.form.host=y),placeholder:"\u8BF7\u8F93\u5165\u4E3B\u673A\u5730\u5740"},null,8,["modelValue"])]),_:1}),i(_,{label:"\u8BC1\u4E66\u9881\u53D1\u65F6\u95F4",prop:"ssl_start_time"},{default:o(()=>[i(p,{modelValue:a.form.ssl_start_time,"onUpdate:modelValue":e[1]||(e[1]=y=>a.form.ssl_start_time=y),type:"date","value-format":"YYYY-MM-DD HH:mm:ss",placeholder:"\u8BC1\u4E66\u9881\u53D1\u65F6\u95F4",teleported:!1,disabled:n.disabledTime},null,8,["modelValue","disabled"])]),_:1}),i(_,{label:"\u8BC1\u4E66\u8FC7\u671F\u65F6\u95F4",prop:"ssl_expire_time"},{default:o(()=>[i(p,{modelValue:a.form.ssl_expire_time,"onUpdate:modelValue":e[2]||(e[2]=y=>a.form.ssl_expire_time=y),type:"date","value-format":"YYYY-MM-DD HH:mm:ss",placeholder:"\u8BC1\u4E66\u8FC7\u671F\u65F6\u95F4",teleported:!1,disabled:n.disabledTime},null,8,["modelValue","disabled"])]),_:1})]),_:1},8,["model","rules"]),c("div",H,[i(g,{onClick:n.handleCancel},{default:o(()=>[v("\u53D6 \u6D88")]),_:1},8,["onClick"]),i(g,{type:"primary",onClick:n.handleSubmit},{default:o(()=>[v("\u786E \u5B9A")]),_:1},8,["onClick"])])])}const L=C(Y,[["render",j]]),G={name:"",props:{row:{type:Object,default:null},visible:{type:Boolean,default:!1},domainId:{type:Number,default:null}},emits:["update:visible"],components:{DataForm:L},data(){return{}},computed:{dialogTitle(){return this.row?"\u7F16\u8F91\u4E3B\u673A\u5730\u5740":"\u6DFB\u52A0\u4E3B\u673A\u5730\u5740"},dialogVisible:{get(){return this.visible},set(s){this.$emit("update:visible",s)}}},methods:{handleClose(){this.$emit("update:visible",!1)},handleOpen(){this.$emit("update:visible",!0)},handleSuccess(){this.handleClose(),this.$emit("on-success")}},created(){}};function q(s,e,t,f,a,n){const d=l("DataForm"),_=l("el-dialog");return r(),w(_,{title:n.dialogTitle,modelValue:n.dialogVisible,"onUpdate:modelValue":e[0]||(e[0]=p=>n.dialogVisible=p),width:"400px",center:"","append-to-body":""},{default:o(()=>[n.dialogVisible?(r(),w(d,{key:0,row:t.row,domainId:t.domainId,onOnCancel:n.handleClose,onOnSuccess:n.handleSuccess},null,8,["row","domainId","onOnCancel","onOnSuccess"])):x("",!0)]),_:1},8,["title","modelValue"])}const A=C(G,[["render",q]]),J={name:"",components:{DataFormDialog:A,ExpireDays:P},props:{list:{type:Array},domainId:{type:Number,default:null},disableUpdateButton:{type:Boolean,default:!1}},emits:["on-selection-change"],computed:{},data(){return{currentRow:null,dialogVisible:!1}},methods:{handleEditRow(s){this.currentRow=s,this.dialogVisible=!0},async handleDeleteClick(s){let e={address_id:s.id};const t=await this.$http.deleteAddressById(e);t.code==0?(this.$msg.success("\u64CD\u4F5C\u6210\u529F"),this.$emit("on-success")):this.$msg.error(t.msg)},async handleStatusChange(s){let e={id:s.id};const t=await this.$http.function(e);t.code==0?(this.$msg.success("\u64CD\u4F5C\u6210\u529F"),this.$emit("on-success")):this.$msg.error(t.msg)},handleUpdateSuccess(){this.$emit("on-success")},async handleUpdateRowDomainInfo(s){let e=this.$loading({fullscreen:!0}),t={address_id:s.id};const f=await this.$http.updateAddressRowInfoById(t);f.code==0?(this.$msg.success("\u64CD\u4F5C\u6210\u529F"),this.$emit("on-success")):this.$msg.error(f.msg),this.$nextTick(()=>{e.close()})}},created(){}};function Q(s,e,t,f,a,n){const d=l("el-table-column"),_=l("ExpireDays"),p=l("Refresh"),h=l("el-icon"),g=l("el-link"),y=l("Edit"),S=l("Delete"),V=l("el-popconfirm"),B=l("el-table"),T=l("DataFormDialog");return r(),m("div",null,[i(B,{data:t.list,stripe:"",border:"",onSelectionChange:e[0]||(e[0]=u=>s.$emit("on-selection-change",u))},{default:o(()=>[i(d,{type:"selection","header-align":"center",align:"center",width:"40"}),i(d,{label:"\u4E3B\u673AIP\u5730\u5740","header-align":"center",align:"center",prop:"host"},{default:o(u=>[c("span",null,b(u.row.host||"-"),1)]),_:1}),i(d,{label:"\u8BC1\u4E66\u9881\u53D1\u65F6\u95F4","header-align":"center",align:"center",prop:"ssl_start_time"},{default:o(u=>[c("span",null,b(u.row.ssl_start_date||"-"),1)]),_:1}),i(d,{label:"\u8BC1\u4E66\u8FC7\u671F\u65F6\u95F4","header-align":"center",align:"center",prop:"ssl_expire_time"},{default:o(u=>[c("span",null,b(u.row.ssl_expire_date||"-"),1)]),_:1}),i(d,{label:"\u8BC1\u4E66\u5269\u4F59\u5929\u6570","header-align":"center",align:"center",prop:"ssl_expire_days"},{default:o(u=>[i(_,{value:u.row.real_time_ssl_expire_days},null,8,["value"])]),_:1}),i(d,{label:"\u8BC1\u4E66\u68C0\u67E5\u65F6\u95F4","header-align":"center",align:"center",prop:"ssl_check_time"},{default:o(u=>[c("span",null,b(u.row.update_time_label||"-"),1)]),_:1}),i(d,{label:"\u64CD\u4F5C",width:"90",align:"center",prop:"tag"},{default:o(u=>[i(g,{underline:!1,type:"primary",class:"mr-sm",disabled:t.disableUpdateButton,onClick:D=>n.handleUpdateRowDomainInfo(u.row)},{default:o(()=>[i(h,null,{default:o(()=>[i(p)]),_:1})]),_:2},1032,["disabled","onClick"]),i(g,{underline:!1,type:"primary",class:"mr-sm",onClick:D=>n.handleEditRow(u.row)},{default:o(()=>[i(h,null,{default:o(()=>[i(y)]),_:1})]),_:2},1032,["onClick"]),i(V,{title:"\u786E\u5B9A\u5220\u9664\uFF1F",onConfirm:D=>n.handleDeleteClick(u.row)},{reference:o(()=>[i(g,{underline:!1,type:"danger"},{default:o(()=>[i(h,null,{default:o(()=>[i(S)]),_:1})]),_:1})]),_:2},1032,["onConfirm"])]),_:1})]),_:1},8,["data"]),i(T,{visible:a.dialogVisible,"onUpdate:visible":e[1]||(e[1]=u=>a.dialogVisible=u),row:a.currentRow,domainId:t.domainId,onOnSuccess:n.handleUpdateSuccess},null,8,["visible","row","domainId","onOnSuccess"])])}const W=C(J,[["render",Q]]),X={name:"address-list",props:{domainId:{type:Number,default:null}},components:{DataFormDialog:A,DataTable:W},data(){return{list:[],total:0,page:1,size:10,keyword:"",selectedRows:[],loading:!0,dialogVisible:!1,is_auto_update:!0}},computed:{disableUpdateButton(){return!this.is_auto_update},showBatchDeleteButton(){return!!(this.selectedRows&&this.selectedRows.length>0)}},methods:{async resetData(){this.page=1,await this.getData()},async getDomainById(){let s={domain_id:this.domainId};const e=await this.$http.getDomainById(s);e.ok&&(this.is_auto_update=e.data.auto_update)},async getData(){this.loading=!0;let s={domain_id:this.domainId,page:this.page,size:this.size};try{const e=await this.$http.getAddressListByDomainId(s);e.code==0&&(this.list=e.data.list,this.total=e.data.total)}catch(e){console.log(e)}finally{this.loading=!1}},handleAddRow(){this.dialogVisible=!0},handleAddSuccess(){this.resetData()},handleSearch(){this.resetData()},async updateAllAddress(){let s=this.$loading({fullscreen:!0}),e={domain_id:this.domainId},t=await this.$http.updateAddressListInfoByDomainId(e);t.code==0?(this.$msg.success("\u64CD\u4F5C\u6210\u529F"),this.resetData()):this.$msg.error(t.msg),this.$nextTick(()=>{s.close()})},handleSizeChange(s){this.resetData()},handleSelectionChange(s){this.selectedRows=s},async handleBatchDeleteConfirm(){let s=this.$loading({fullscreen:!0}),e={address_ids:this.selectedRows.map(t=>t.id)};try{(await this.$http.deleteAddressByIds(e)).ok&&(this.$msg.success("\u64CD\u4F5C\u6210\u529F"),this.resetData())}catch(t){console.log(t)}finally{this.$nextTick(()=>{s.close()})}}},created(){this.resetData()}},Z={class:""},ee={class:"flex justify-between items-center"};function te(s,e,t,f,a,n){const d=l("Plus"),_=l("el-icon"),p=l("el-button"),h=l("Delete"),g=l("el-link"),y=l("el-popconfirm"),S=l("Refresh"),V=l("DataTable"),B=l("el-pagination"),T=l("DataFormDialog"),u=E("loading");return r(),m("div",Z,[c("div",ee,[i(p,{type:"primary",onClick:n.handleAddRow},{default:o(()=>[i(_,null,{default:o(()=>[i(d)]),_:1}),v("\u6DFB\u52A0")]),_:1},8,["onClick"]),c("div",null,[n.showBatchDeleteButton?(r(),w(y,{key:0,title:"\u786E\u5B9A\u5220\u9664\u9009\u4E2D\uFF1F",onConfirm:n.handleBatchDeleteConfirm},{reference:o(()=>[i(g,{underline:!1,type:"danger",class:"mr-sm"},{default:o(()=>[i(_,null,{default:o(()=>[i(h)]),_:1}),v("\u6279\u91CF\u5220\u9664")]),_:1})]),_:1},8,["onConfirm"])):x("",!0),i(g,{underline:!1,type:"primary",disabled:n.disableUpdateButton,onClick:n.updateAllAddress},{default:o(()=>[i(_,null,{default:o(()=>[i(S)]),_:1}),v("\u5168\u90E8\u66F4\u65B0")]),_:1},8,["disabled","onClick"])])]),F(i(V,{class:"mt-md",list:a.list,domainId:t.domainId,disableUpdateButton:n.disableUpdateButton,onOnSuccess:n.resetData,onOnSelectionChange:n.handleSelectionChange},null,8,["list","domainId","disableUpdateButton","onOnSuccess","onOnSelectionChange"]),[[u,a.loading]]),i(B,{class:"mt-md justify-center",background:"",layout:"total, sizes, prev, pager, next",total:a.total,"page-size":a.size,"onUpdate:pageSize":e[0]||(e[0]=D=>a.size=D),"current-page":a.page,"onUpdate:currentPage":e[1]||(e[1]=D=>a.page=D),onCurrentChange:n.getData,onSizeChange:n.handleSizeChange},null,8,["total","page-size","current-page","onCurrentChange","onSizeChange"]),i(T,{visible:a.dialogVisible,"onUpdate:visible":e[2]||(e[2]=D=>a.dialogVisible=D),domainId:t.domainId,onOnSuccess:n.handleAddSuccess},null,8,["visible","domainId","onOnSuccess"])])}const se=C(X,[["render",te]]);const ne={name:"ExpireProgress",props:{startTime:{type:String},endTime:{type:String},isManual:{type:Boolean}},components:{},data(){return{nowTime:$()}},computed:{parsedStartTime(){return $(this.startTime)},parsedEndTime(){return $(this.endTime)},totalDays(){return this.parsedEndTime.diff(this.parsedStartTime,"day")},expireDays(){return this.parsedEndTime.diff(this.nowTime,"day")},percentage(){let s=null;return this.expireDays&&this.totalDays&&(s=this.expireDays/this.totalDays*100),s},percentageStatus(){let s;return this.expireDays>7?s="":this.expireDays>0?s="warning":s="exception",s}},methods:{async getData(){}},created(){this.getData()}},ie={class:"ExpireProgress"},le={class:"ExpireProgress__info"},ae={class:"el-text-color-primary"},oe=c("span",null," / ",-1),re={class:"el-text-color-secondary"};function de(s,e,t,f,a,n){const d=l("el-progress");return r(),m("div",ie,[n.percentage?(r(),w(d,{key:0,percentage:n.percentage,"show-text":!1,status:n.percentageStatus},null,8,["percentage","status"])):x("",!0),c("div",le,[c("span",ae,b(n.expireDays||"-"),1),oe,c("span",re,b(n.totalDays||"-"),1)])])}const Te=C(ne,[["render",de]]),ce={name:"",props:{row:{type:Object,default:null},visible:{type:Boolean,default:!1},domainId:{type:Number,default:null}},components:{DataTableIndex:se},data(){return{}},computed:{dialogTitle(){return this.row?"\u7F16\u8F91":"\u6DFB\u52A0"},dialogVisible:{get(){return this.visible},set(s){this.$emit("update:visible",s)}}},methods:{handleClose(){this.dialogVisible=!1},handleOpen(){this.dialogVisible=!0},handleSuccess(){this.handleClose(),this.$emit("on-success")},handleDialogClose(){this.$emit("on-close")}},created(){}};function ue(s,e,t,f,a,n){const d=l("DataTableIndex"),_=l("el-dialog");return r(),w(_,{title:"\u57DF\u540D\u4E3B\u673A\u5217\u8868",modelValue:n.dialogVisible,"onUpdate:modelValue":e[0]||(e[0]=p=>n.dialogVisible=p),width:"900px",center:"","append-to-body":"",onClose:n.handleDialogClose},{default:o(()=>[n.dialogVisible?(r(),w(d,{key:0,row:t.row,domainId:t.domainId,onOnCancel:n.handleClose,onOnSuccess:n.handleSuccess},null,8,["row","domainId","onOnCancel","onOnSuccess"])):x("",!0)]),_:1},8,["modelValue","onClose"])}const $e=C(ce,[["render",ue]]);const _e={name:"ConditionFilter",props:{title:{type:String},field:{type:String},options:{type:Array},selected:{type:Array,default:()=>[]},maxCount:{type:Number,default:0},labelKey:{type:String,default:"label"},valueKey:{type:String,default:"value"},level:{type:Number,default:0}},components:{},data(){return{childrenKey:0,showMoreButton:!1,hiddenMore:!0,itemTagHeight:20}},computed:{selectedIsEmpty(){return this.selected.length==0}},methods:{async getData(){},handleClear(){this.selected.splice(0,this.selected.length),this.handleChange()},handleClick(s){let e=this.selected.findIndex(t=>s[this.valueKey]==t);e>-1?this.selected.splice(e,1):(this.maxCount==1&&this.selected.splice(0,this.selected.length),this.selected.push(s[this.valueKey])),this.childrenKey++,this.handleChange()},handleChange(){this.$emit("on-change",{selected:this.selected,title:this.title,field:this.field,options:this.options})},handleChildrenChange(s){this.$emit("on-change",s)},handleMoreClick(){this.hiddenMore=!this.hiddenMore},handleWindowResize(){!this.$refs["condition-item__list"]||(this.$refs["condition-item__list"].clientHeight>this.itemTagHeight?(this.showMoreButton=!0,this.selected&&this.selected.length>0?this.hiddenMore=!1:this.hiddenMore=!0):(this.hiddenMore=!1,this.showMoreButton=!1))}},mounted(){},created(){this.getData()}},he={class:"condition-filter"},me={key:0,class:"condition-filter__title"},pe={class:"condition-filter__group_button"},fe={class:"condition-filter__list-wrap"},ge={class:"condition-item__list-box"},ye={class:"condition-item__list",ref:"condition-item__list"},be=["onClick"],Ce={class:"condition-filter__tag__close"},De={class:"condition-filter__children"};function we(s,e,t,f,a,n){const d=l("Close"),_=l("el-icon"),p=l("ConditionFilter");return r(),m("div",he,[t.title?(r(),m("div",me,b(t.title),1)):x("",!0),c("div",pe,[c("div",{class:I(["condition-filter__tag condition-filter__clear",{"condition-filter__tag--seleted":n.selectedIsEmpty}]),onClick:e[0]||(e[0]=(...h)=>n.handleClear&&n.handleClear(...h))}," \u4E0D\u9650 ",2),c("div",fe,[c("div",ge,[c("div",{class:I({"condition-item__list--overflow":a.hiddenMore})},[c("div",ye,[(r(!0),m(k,null,O(t.options,h=>(r(),m("div",{class:I(["condition-filter__tag",{"condition-filter__tag--seleted":t.selected.indexOf(h[t.valueKey])>-1}]),onClick:g=>n.handleClick(h)},[c("span",null,b(h[t.labelKey]),1),c("span",Ce,[i(_,null,{default:o(()=>[i(d)]),_:1})])],10,be))),256))],512)],2)]),c("div",De,[(r(!0),m(k,null,O(t.options,h=>(r(),m(k,null,[t.selected.indexOf(h[t.valueKey])>-1&&h.child?(r(),w(p,R({key:a.childrenKey,class:"condition-filter__child",ref_for:!0,ref:"child"},h.child,{level:h.level||t.level+1,onOnChange:n.handleChildrenChange}),null,16,["level","onOnChange"])):x("",!0)],64))),256))])])])])}const xe=C(_e,[["render",we]]);const ve={name:"ConditionFilterGroup",props:{options:{type:Array}},components:{ConditionFilterRow:xe},data(){return{}},computed:{},methods:{async getData(){},handleChange(s){console.log(s),this.$emit("on-change",s)}},created(){this.getData()}},ke={class:"ConditionFilterGroup"};function Ie(s,e,t,f,a,n){const d=l("ConditionFilterRow");return r(),m("div",ke,[(r(!0),m(k,null,O(t.options,_=>(r(),m(k,null,[_.hidden?x("",!0):(r(),w(d,R({key:0,class:"ConditionFilterGroup__row"},_,{onOnChange:n.handleChange}),null,16,["onOnChange"]))],64))),256))])}const Oe=C(ve,[["render",Ie]]);export{se as A,Oe as C,P as E,Te as a,$e as b};
