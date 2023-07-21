import{_ as C}from"./index.d6aa8a79.js";import{ah as i,o as b,c as k,V as t,P as l,a as h,T as v,O as x,S as z,U as g,ar as O,a9 as R,Q as T}from"./vendor-vue.9e61e0af.js";import{c as P}from"./vendor-lib.76301fc3.js";import"./element-icon.1ce1c350.js";import"./element-plus.30eb1cab.js";const $={username:[{message:"\u7528\u6237\u540D\u4E0D\u80FD\u4E3A\u7A7A",required:!0,trigger:"blur"}],password:[{message:"\u5BC6\u7801\u4E0D\u80FD\u4E3A\u7A7A",required:!0,trigger:"blur"}],avatar_url:[{message:"\u5934\u50CF\u4E0D\u80FD\u4E3A\u7A7A",required:!0,trigger:"blur"}],before_expire_days:[{message:"\u8FC7\u671F\u524D\u591A\u5C11\u5929\u63D0\u9192\u4E0D\u80FD\u4E3A\u7A7A",required:!0,trigger:"blur"}],email_list:[{message:"\u90AE\u4EF6\u5217\u8868\u4E0D\u80FD\u4E3A\u7A7A",required:!0,trigger:"blur"}]},F={name:"",props:{row:{type:Object,default:null}},components:{},data(){return{rules:$,form:{username:"",password:"",avatar_url:"",before_expire_days:"",email_list:""}}},computed:{},methods:{async getData(){if(this.row){let n={id:this.row.id};const a=await this.$http.function(n);if(a.code!=0)return;let d=a.data;this.form.username=d.username,this.form.avatar_url=d.avatar_url,this.form.before_expire_days=d.before_expire_days,this.form.email_list=d.email_list}},handleCancel(){this.$emit("on-cancel")},handleSubmit(){this.$refs.form.validate(n=>{if(n)this.confirmSubmit();else return!1})},async confirmSubmit(){let n=this.$loading({fullscreen:!0}),a={username:this.form.username.trim(),password:this.form.password.trim()};this.row&&(a.id=this.row.id);const d=await this.$http.addUser(a);d.code==0?(this.$msg.success("\u64CD\u4F5C\u6210\u529F"),this.$emit("on-success")):this.$msg.error(d.msg),this.$nextTick(()=>{n.close()})}},created(){this.getData()}},B={class:"text-center"};function q(n,a,d,w,r,o){const c=i("el-input"),u=i("el-form-item"),m=i("el-form"),_=i("el-button");return b(),k("div",null,[t(m,{ref:"form",model:r.form,rules:r.rules,"label-width":"100px"},{default:l(()=>[t(u,{label:"\u7528\u6237\u540D",prop:"username"},{default:l(()=>[t(c,{type:"text",modelValue:r.form.username,"onUpdate:modelValue":a[0]||(a[0]=p=>r.form.username=p),placeholder:"\u8BF7\u8F93\u5165\u7528\u6237\u540D"},null,8,["modelValue"])]),_:1}),t(u,{label:"\u5BC6\u7801",prop:"password"},{default:l(()=>[t(c,{type:"text",modelValue:r.form.password,"onUpdate:modelValue":a[1]||(a[1]=p=>r.form.password=p),placeholder:"\u8BF7\u8F93\u5165\u5BC6\u7801"},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules"]),h("div",B,[t(_,{onClick:o.handleCancel},{default:l(()=>[v("\u53D6 \u6D88")]),_:1},8,["onClick"]),t(_,{type:"primary",onClick:o.handleSubmit},{default:l(()=>[v("\u786E \u5B9A")]),_:1},8,["onClick"])])])}const A=C(F,[["render",q]]),j={name:"",props:{row:{type:Object,default:null},visible:{type:Boolean,default:!1}},emits:["update:visible"],components:{DataForm:A},data(){return{}},computed:{dialogTitle(){return this.row?"\u7F16\u8F91\u7528\u6237":"\u6DFB\u52A0\u7528\u6237"},dialogVisible:{get(){return this.visible},set(n){this.$emit("update:visible",n)}}},methods:{handleClose(){this.$emit("update:visible",!1)},handleOpen(){this.$emit("update:visible",!0)},handleSuccess(){this.handleClose(),this.$emit("on-success")}},created(){}};function N(n,a,d,w,r,o){const c=i("DataForm"),u=i("el-dialog");return b(),x(u,{title:o.dialogTitle,modelValue:o.dialogVisible,"onUpdate:modelValue":a[0]||(a[0]=m=>o.dialogVisible=m),width:"400px",center:"","append-to-body":"","lock-scroll":!1},{default:l(()=>[o.dialogVisible?(b(),x(c,{key:0,row:d.row,onOnCancel:o.handleClose,onOnSuccess:o.handleSuccess},null,8,["row","onOnCancel","onOnSuccess"])):z("",!0)]),_:1},8,["title","modelValue"])}const U=C(j,[["render",N]]),I={name:"",components:{DataFormDailog:U},props:{list:{type:Array}},computed:{},data(){return{currentRow:null,dialogVisible:!1}},methods:{handleEditRow(n){this.currentRow=n,this.dialogVisible=!0},async handleDeleteClick(n){let a={user_id:n.id};(await this.$http.deleteUser(a)).code==0&&(this.$msg.success("\u64CD\u4F5C\u6210\u529F"),this.$emit("on-success"))},async handleResetUserPasswordUser(n){let a={user_id:n.id};const d=await this.$http.resetUserPasswordUser(a);d.ok&&this.$alert(`\u65B0\u5BC6\u7801\uFF1A${d.data.password}`,"\u5BC6\u7801\u91CD\u7F6E\u6210\u529F",{center:!0,autofocus:!1,confirmButtonText:"\u590D\u5236",type:"success"}).then(()=>{P(d.data.password),this.$msg.success("\u5DF2\u590D\u5236\u5230\u526A\u5207\u677F")}).catch(()=>{})},async handleStatusChange(n,a){let d={user_id:n.id,status:a};(await this.$http.updateUserStatus(d)).code==0&&this.$msg.success("\u64CD\u4F5C\u6210\u529F")},handleUpdateSuccess(){this.$emit("on-success")}},created(){}};function K(n,a,d,w,r,o){const c=i("el-table-column"),u=i("el-switch"),m=i("Refresh"),_=i("el-icon"),p=i("el-link"),y=i("el-popconfirm"),S=i("Delete"),D=i("el-table"),V=i("DataFormDailog");return b(),k("div",null,[t(D,{data:d.list,stripe:"",border:""},{default:l(()=>[t(c,{label:"\u5E8F\u53F7",align:"center",prop:"id",width:"60"},{default:l(s=>[h("span",null,g(s.$index+1),1)]),_:1}),t(c,{label:"\u7528\u6237\u540D","header-align":"center",align:"center",prop:"username"},{default:l(s=>[h("span",null,g(s.row.username||"-"),1)]),_:1}),t(c,{label:"\u8BC1\u4E66\u6570\u91CF","header-align":"center",align:"center",prop:"cert_count",width:"100"},{default:l(s=>[h("span",null,g(s.row.cert_count||"-"),1)]),_:1}),t(c,{label:"\u57DF\u540D\u6570\u91CF","header-align":"center",align:"center",prop:"notify_count",width:"100"},{default:l(s=>[h("span",null,g(s.row.domain_count||"-"),1)]),_:1}),t(c,{label:"\u5206\u7EC4\u6570\u91CF","header-align":"center",align:"center",prop:"group_count",width:"100"},{default:l(s=>[h("span",null,g(s.row.group_count||"-"),1)]),_:1}),t(c,{label:"\u901A\u77E5\u6E20\u9053","header-align":"center",align:"center",prop:"notify_count",width:"100"},{default:l(s=>[h("span",null,g(s.row.notify_count||"-"),1)]),_:1}),t(c,{label:"\u72B6\u6001","header-align":"center",align:"center",width:"80"},{default:l(s=>[t(u,{disabled:s.row.username=="admin",modelValue:s.row.status,"onUpdate:modelValue":f=>s.row.status=f,onChange:f=>o.handleStatusChange(s.row,f)},null,8,["disabled","modelValue","onUpdate:modelValue","onChange"])]),_:1}),t(c,{label:"\u91CD\u7F6E\u5BC6\u7801",width:"80",align:"center",prop:"tag"},{default:l(s=>[t(y,{title:"\u786E\u5B9A\u91CD\u7F6E\u5BC6\u7801\uFF1F",onConfirm:f=>o.handleResetUserPasswordUser(s.row),disabled:s.row.username=="admin"},{reference:l(()=>[t(p,{disabled:s.row.username=="admin",underline:!1,type:"primary"},{default:l(()=>[t(_,null,{default:l(()=>[t(m)]),_:1})]),_:2},1032,["disabled"])]),_:2},1032,["onConfirm","disabled"])]),_:1}),t(c,{label:"\u5220\u9664",width:"60",align:"center",prop:"tag"},{default:l(s=>[t(y,{title:"\u786E\u5B9A\u5220\u9664\uFF1F",onConfirm:f=>o.handleDeleteClick(s.row),disabled:s.row.username=="admin"},{reference:l(()=>[t(p,{disabled:s.row.username=="admin",underline:!1,type:"danger"},{default:l(()=>[t(_,null,{default:l(()=>[t(S)]),_:1})]),_:2},1032,["disabled"])]),_:2},1032,["onConfirm","disabled"])]),_:1})]),_:1},8,["data"]),t(V,{visible:r.dialogVisible,"onUpdate:visible":a[0]||(a[0]=s=>r.dialogVisible=s),row:r.currentRow,onOnSuccess:o.handleUpdateSuccess},null,8,["visible","row","onOnSuccess"])])}const E=C(I,[["render",K]]),L={name:"user-admin-list",props:{},components:{DataFormDailog:U,DataTable:E},data(){return{list:[],total:0,page:1,size:20,keyword:"",pageSizeCachekey:"pageSize",loading:!0,dialogVisible:!1}},computed:{},methods:{resetData(){this.page=1,this.getData()},refreshData(){this.getData()},async getData(){this.loading=!0;let n={page:this.page,size:this.size,keyword:this.keyword.trim()};const a=await this.$http.getUserList(n);a.code==0?(this.list=a.data.list,this.total=a.data.total):this.$msg.error(e.msg),this.loading=!1},handleAddRow(){this.dialogVisible=!0},handleAddSuccess(){this.resetData()},handleSearch(){this.resetData()},handleSizeChange(n){localStorage.setItem(this.pageSizeCachekey,n),this.resetData()},loadPageSize(){let n=localStorage.getItem(this.pageSizeCachekey);n&&(this.size=parseInt(n))}},created(){this.loadPageSize(),this.getData()}},Q={class:"app-container"},G={class:"flex justify-between margin-bottom--20"};function H(n,a,d,w,r,o){const c=i("Plus"),u=i("el-icon"),m=i("el-button"),_=i("Search"),p=i("el-input"),y=i("DataTable"),S=i("el-pagination"),D=i("DataFormDailog"),V=O("loading");return b(),k("div",Q,[h("div",G,[t(m,{type:"primary",onClick:o.handleAddRow},{default:l(()=>[t(u,null,{default:l(()=>[t(c)]),_:1}),v("\u6DFB\u52A0")]),_:1},8,["onClick"]),t(p,{class:"ml-sm",style:{width:"260px"},modelValue:r.keyword,"onUpdate:modelValue":a[0]||(a[0]=s=>r.keyword=s),placeholder:"\u641C\u7D22\u7528\u6237\u540D",clearable:"",onKeypress:R(o.handleSearch,["enter"]),onClear:o.handleSearch},{append:l(()=>[t(m,{onClick:o.handleSearch},{default:l(()=>[t(u,null,{default:l(()=>[t(_)]),_:1})]),_:1},8,["onClick"])]),_:1},8,["modelValue","onKeypress","onClear"])]),T(t(y,{class:"mt-md",list:r.list,onOnSuccess:o.resetData},null,8,["list","onOnSuccess"]),[[V,r.loading]]),t(S,{class:"mt-md justify-center",background:"",layout:"total, sizes, prev, pager, next",total:r.total,"page-size":r.size,"onUpdate:pageSize":a[1]||(a[1]=s=>r.size=s),"current-page":r.page,"onUpdate:currentPage":a[2]||(a[2]=s=>r.page=s),onCurrentChange:o.getData,onSizeChange:o.handleSizeChange},null,8,["total","page-size","current-page","onCurrentChange","onSizeChange"]),t(D,{visible:r.dialogVisible,"onUpdate:visible":a[3]||(a[3]=s=>r.dialogVisible=s),onOnSuccess:o.handleAddSuccess},null,8,["visible","onOnSuccess"])])}const Z=C(L,[["render",H]]);export{Z as default};
