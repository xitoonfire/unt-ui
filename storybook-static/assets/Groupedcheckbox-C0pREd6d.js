import{j as r}from"./jsx-runtime-DEdD30eg.js";import{C as d}from"./Checkbox-DuG8wt5J.js";function u({checkboxes:n,onChange:a}){const i=e=>{a(e)};return r.jsx("div",{children:n.map(({id:e,label:o,checked:t,disabled:s})=>r.jsx(d,{id:e,label:o,checked:t,onChange:()=>i(e),disabled:s},e))})}u.__docgenInfo={description:"",methods:[],displayName:"CheckboxGroup",props:{checkboxes:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{\r
  id: string;\r
  label: string;\r
  checked: boolean;\r
  disabled?: boolean;\r
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"checked",value:{name:"boolean",required:!0}},{key:"disabled",value:{name:"boolean",required:!1}}]}}],raw:`{\r
  id: string;\r
  label: string;\r
  checked: boolean;\r
  disabled?: boolean;\r
}[]`},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(id: string) => void",signature:{arguments:[{type:{name:"string"},name:"id"}],return:{name:"void"}}},description:""}}};export{u as C};
