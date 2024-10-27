import{_ as l,u as c}from"./index.0c11f5a0.js";import{ay as i,ai as d,o as u,M as h}from"./vendor-vue.43598ec5.js";const m={name:"SearchUser",props:{keyword:{type:String,default:""}},emits:["on-select","update:keyword"],components:{},data(){return{loading:!1}},computed:{keyword_:{get(){return this.keyword},set(e){this.$emit("update:keyword",e)}},...i(c,{userInfo:"userInfo",isAdmin:"isAdmin"})},methods:{async getData(){},async querySearchAsync(e,t){const s=await this.searchUser();t(s)},async searchUser(){this.loading=!0;let e={keyword:this.keyword},t=[],s;return this.isAdmin?s=await this.$http.getUserList(e):s=await this.$http.getUserListByName(e),s.ok&&(t=s.data.list.map(a=>(a.value=a.username,a))),this.loading=!1,t},handleSelectUser(e){this.$emit("on-select",e)}},created(){this.getData()}};function p(e,t,s,a,y,r){const o=d("el-autocomplete");return u(),h(o,{modelValue:r.keyword_,"onUpdate:modelValue":t[0]||(t[0]=n=>r.keyword_=n),"fetch-suggestions":r.querySearchAsync,placeholder:e.$t("\u641C\u7D22\u7528\u6237\u540D"),debounce:500,clearable:"",onSelect:r.handleSelectUser},null,8,["modelValue","fetch-suggestions","placeholder","onSelect"])}const S=l(m,[["render",p]]);export{S};
