import{_ as g}from"./index.d6aa8a79.js";import{ah as a,o as u,c as d,V as r,P as l,a as f,T as y,F as v,a8 as k,U as b,S as w}from"./vendor-vue.9e61e0af.js";import{d as $}from"./element-plus.30eb1cab.js";import{i as C,p as V,c as S}from"./vendor-lib.76301fc3.js";import"./element-icon.1ce1c350.js";const D={mail_host:[{message:"\u670D\u52A1\u5668\u5730\u5740\u4E0D\u80FD\u4E3A\u7A7A",required:!0,trigger:"blur"}],mail_port:[{message:"\u670D\u52A1\u5668\u7AEF\u53E3\u4E0D\u80FD\u4E3A\u7A7A",required:!0,trigger:"blur"}],mail_alias:[{message:"\u53D1\u4EF6\u4EBA\u540D\u79F0\u4E0D\u80FD\u4E3A\u7A7A",required:!1,trigger:"blur"}],mail_username:[{message:"\u53D1\u4EF6\u4EBA\u8D26\u53F7\u4E0D\u80FD\u4E3A\u7A7A",required:!1,trigger:"blur"}],mail_password:[{message:"\u53D1\u4EF6\u4EBA\u5BC6\u7801\u4E0D\u80FD\u4E3A\u7A7A",required:!1,trigger:"blur"}]},E={name:"",props:{row:{type:Object,default:null}},components:{},data(){return{rules:D,form:{mail_host:"",mail_port:"",mail_alias:"",mail_username:"",mail_password:""}}},computed:{},methods:{async getData(){let t={};const e=await this.$http.getAllSystemConfig(t);if(e.code!=0)return;let s=e.data;this.form.mail_host=s.mail_host,this.form.mail_port=s.mail_port,this.form.mail_alias=s.mail_alias,this.form.mail_username=s.mail_username,this.form.mail_password=s.mail_password},handleCancel(){this.$emit("on-cancel")},handleSubmit(){this.$refs.form.validate(t=>{if(t)this.confirmSubmit();else return!1})},async confirmSubmit(){let t=this.$loading({fullscreen:!0}),e={mail_host:this.form.mail_host,mail_port:this.form.mail_port,mail_alias:this.form.mail_alias,mail_username:this.form.mail_username,mail_password:this.form.mail_password};const s=await this.$http.updateSystemConfig(e);s.code==0?(this.$msg.success("\u64CD\u4F5C\u6210\u529F"),this.$emit("on-success")):this.$msg.error(s.msg),this.$nextTick(()=>{t.close()})}},created(){this.getData()}},N={class:""},F={class:"text-center"};function T(t,e,s,h,o,c){const m=a("el-input"),i=a("el-form-item"),_=a("el-form"),p=a("el-button");return u(),d("div",N,[r(_,{ref:"form",model:o.form,rules:o.rules,"label-width":"100px"},{default:l(()=>[r(i,{label:"\u670D\u52A1\u5668\u5730\u5740",prop:"mail_host"},{default:l(()=>[r(m,{type:"text",modelValue:o.form.mail_host,"onUpdate:modelValue":e[0]||(e[0]=n=>o.form.mail_host=n),placeholder:"\u8BF7\u8F93\u5165\u670D\u52A1\u5668\u5730\u5740"},null,8,["modelValue"])]),_:1}),r(i,{label:"\u670D\u52A1\u5668\u7AEF\u53E3",prop:"mail_port"},{default:l(()=>[r(m,{type:"text",modelValue:o.form.mail_port,"onUpdate:modelValue":e[1]||(e[1]=n=>o.form.mail_port=n),placeholder:"\u8BF7\u8F93\u5165\u670D\u52A1\u5668\u7AEF\u53E3"},null,8,["modelValue"])]),_:1}),r(i,{label:"\u53D1\u4EF6\u4EBA\u540D\u79F0",prop:"mail_alias"},{default:l(()=>[r(m,{type:"text",modelValue:o.form.mail_alias,"onUpdate:modelValue":e[2]||(e[2]=n=>o.form.mail_alias=n),placeholder:"\u8BF7\u8F93\u5165\u53D1\u4EF6\u4EBA\u540D\u79F0"},null,8,["modelValue"])]),_:1}),r(i,{label:"\u53D1\u4EF6\u4EBA\u8D26\u53F7",prop:"mail_username"},{default:l(()=>[r(m,{type:"text",modelValue:o.form.mail_username,"onUpdate:modelValue":e[3]||(e[3]=n=>o.form.mail_username=n),placeholder:"\u8BF7\u8F93\u5165\u53D1\u4EF6\u4EBA\u8D26\u53F7"},null,8,["modelValue"])]),_:1}),r(i,{label:"\u53D1\u4EF6\u4EBA\u5BC6\u7801",prop:"mail_password"},{default:l(()=>[r(m,{type:"text",modelValue:o.form.mail_password,"onUpdate:modelValue":e[4]||(e[4]=n=>o.form.mail_password=n),placeholder:"\u8BF7\u8F93\u5165\u53D1\u4EF6\u4EBA\u5BC6\u7801","show-password":""},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules"]),f("div",F,[r(p,{type:"primary",onClick:c.handleSubmit},{default:l(()=>[y("\u4FDD \u5B58")]),_:1},8,["onClick"])])])}const q=g(E,[["render",T]]),U={scheduler_cron:[{message:"\u5B9A\u65F6\u68C0\u6D4B\u4E0D\u80FD\u4E3A\u7A7A",required:!0,trigger:"blur"},{trigger:"blur",validator:(t,e,s)=>{if(C(e))s();else return s(new Error("cron\u8868\u8FBE\u5F0F\u4E0D\u6B63\u786E"))}}]};function L(t){if(!C(t))return[];let e=[];try{let s=V.parseExpression(t);for(let h=0;h<5;h++){let o=$(s.next().toString()).format("YYYY-MM-DD HH:mm:ss");e.push(o)}}catch{}return e}const Y={name:"",props:{row:{type:Object,default:null}},components:{},data(){return{rules:U,form:{scheduler_cron:""},cronNextList:[]}},computed:{},methods:{async getData(){let t={};const e=await this.$http.getCronConfig(t);if(e.code!=0)return;let s=e.data;this.form.scheduler_cron=s.scheduler_cron,this.parseCrontab()},handleCancel(){this.$emit("on-cancel")},handleSubmit(){this.$refs.form.validate(t=>{if(t)this.confirmSubmit();else return!1})},async confirmSubmit(){let t=this.$loading({fullscreen:!0}),e={scheduler_cron:this.form.scheduler_cron};this.row&&(e.id=this.row.id);const s=await this.$http.updateCronConfig(e);s.code==0?(this.$msg.success("\u64CD\u4F5C\u6210\u529F"),this.$emit("on-success")):this.$msg.error(s.msg),this.$nextTick(()=>{t.close()})},parseCrontab(){this.cronNextList=L(this.form.scheduler_cron)}},created(){this.getData()}},j={key:0},I={key:1,class:"mo-empty"},z={class:"text-center"};function B(t,e,s,h,o,c){const m=a("el-input"),i=a("el-form-item"),_=a("el-form"),p=a("el-button");return u(),d("div",null,[r(_,{ref:"form",model:o.form,rules:o.rules,"label-width":"100px"},{default:l(()=>[r(i,{label:"\u5B9A\u65F6\u8BBE\u7F6E",prop:"scheduler_cron"},{default:l(()=>[r(m,{type:"text",modelValue:o.form.scheduler_cron,"onUpdate:modelValue":e[0]||(e[0]=n=>o.form.scheduler_cron=n),onChange:c.parseCrontab,placeholder:"crontab \u8868\u8FBE\u5F0F\uFF1A\u5206 \u65F6 \u65E5 \u6708 \u5468"},null,8,["modelValue","onChange"])]),_:1}),r(i,{label:"\u6267\u884C\u8BA1\u5212",prop:"cronNextList"},{default:l(()=>[o.cronNextList&&o.cronNextList.length>0?(u(),d("div",j,[(u(!0),d(v,null,k(o.cronNextList,n=>(u(),d("div",null,b(n),1))),256))])):(u(),d("div",I," \u6682\u65E0\u8BA1\u5212 "))]),_:1})]),_:1},8,["model","rules"]),f("div",z,[r(p,{type:"primary",onClick:c.handleSubmit},{default:l(()=>[y("\u4FDD \u5B58")]),_:1},8,["onClick"])])])}const O=g(Y,[["render",B]]),P={prometheus_key:[{message:"prometheus_key\u4E0D\u80FD\u4E3A\u7A7A",required:!1,trigger:"blur"}],token_expire_days:[{message:"Token\u6709\u6548\u671F\uFF08\u5929\uFF09\u4E0D\u80FD\u4E3A\u7A7A",required:!1,trigger:"blur"}]},R={name:"",props:{row:{type:Object,default:null}},components:{},data(){return{rules:P,form:{prometheus_key:"",token_expire_days:""}}},computed:{},methods:{async getData(){let t={};const e=await this.$http.getSystemEnvConfig(t);if(e.code!=0)return;let s=e.data;this.form.prometheus_key=s.prometheus_key,this.form.token_expire_days=s.token_expire_days},handleCancel(){this.$emit("on-cancel")},handleSubmit(){this.$refs.form.validate(t=>{if(t)this.confirmSubmit();else return!1})},async confirmSubmit(){let t=this.$loading({fullscreen:!0}),e={prometheus_key:this.form.prometheus_key,token_expire_days:this.form.token_expire_days};this.row&&(e.id=this.row.id);const s=await this.$http.function(e);s.code==0?(this.$msg.success("\u64CD\u4F5C\u6210\u529F"),this.$emit("on-success")):this.$msg.error(s.msg),this.$nextTick(()=>{t.close()})},handleCopyClick(t){S(t),this.$msg.success("\u5DF2\u590D\u5236\u5230\u526A\u5207\u677F")}},created(){this.getData()}};function A(t,e,s,h,o,c){const m=a("DocumentCopy"),i=a("el-icon"),_=a("el-form-item"),p=a("el-form");return a("el-button"),u(),d("div",null,[r(p,{ref:"form",model:o.form,rules:o.rules,"label-width":"150px","aria-label":"left"},{default:l(()=>[r(_,{label:"Prometheus Key",prop:"prometheus_key"},{default:l(()=>[f("span",null,b(o.form.prometheus_key),1),f("span",{onClick:e[0]||(e[0]=n=>c.handleCopyClick(o.form.prometheus_key)),class:"mo-link ml-sm"},[r(i,null,{default:l(()=>[r(m)]),_:1})])]),_:1})]),_:1},8,["model","rules"]),w("",!0)])}const H=g(R,[["render",A]]);const K={name:"index",props:{},components:{SystemEditDataForm:q,CronConfigEditDataForm:O,SystemEnvEditDataForm:H},data(){return{activeName:"email-config"}},computed:{},methods:{async getData(){},handleTabChange(t){localStorage.setItem("system-setup/tab",t)}},created(){let t=localStorage.getItem("system-setup/tab");this.activeName=this.$route.query.tab||t||this.activeName,this.getData()}},M={class:"app-container"},G={class:"tab-container"},J={class:"tab-container"},Q={class:"tab-container"};function W(t,e,s,h,o,c){const m=a("SystemEditDataForm"),i=a("el-tab-pane"),_=a("CronConfigEditDataForm"),p=a("SystemEnvEditDataForm"),n=a("el-tabs");return u(),d("div",M,[r(n,{modelValue:o.activeName,"onUpdate:modelValue":e[0]||(e[0]=x=>o.activeName=x),onTabChange:c.handleTabChange},{default:l(()=>[r(i,{label:"\u90AE\u4EF6\u8BBE\u7F6E",name:"email-config",lazy:""},{default:l(()=>[f("div",G,[r(m)])]),_:1}),r(i,{label:"\u76D1\u6D4B\u8BBE\u7F6E",name:"cron-config",lazy:""},{default:l(()=>[f("div",J,[r(_)])]),_:1}),r(i,{label:"API KEY",name:"system-env",lazy:""},{default:l(()=>[f("div",Q,[r(p)])]),_:1})]),_:1},8,["modelValue","onTabChange"])])}const se=g(K,[["render",W],["__scopeId","data-v-8d8ef6bf"]]);export{se as default};
