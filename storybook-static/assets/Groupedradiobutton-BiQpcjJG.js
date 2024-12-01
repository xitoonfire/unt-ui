import{j as n}from"./jsx-runtime-DEdD30eg.js";import{R as l}from"./Radiobutton-PghXUi5O.js";function m({name:a,options:t,onChange:i}){const o=e=>{i(e)};return n.jsx("div",{children:t.map(({id:e,label:s,value:r,checked:u,disabled:d})=>n.jsx(l,{id:e,label:s,name:a,value:r,checked:u,onChange:()=>o(r),disabled:d},e))})}m.__docgenInfo={description:"",methods:[],displayName:"RadioButtonGroup",props:{name:{required:!0,tsType:{name:"string"},description:""},options:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{\r
  id: string;\r
  label: string;\r
  value: string;\r
  checked: boolean;\r
  disabled?: boolean;\r
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}},{key:"checked",value:{name:"boolean",required:!0}},{key:"disabled",value:{name:"boolean",required:!1}}]}}],raw:`{\r
  id: string;\r
  label: string;\r
  value: string;\r
  checked: boolean;\r
  disabled?: boolean;\r
}[]`},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""}}};export{m as R};
