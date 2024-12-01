import{j as d}from"./jsx-runtime-DEdD30eg.js";const n={1:"grid-cols-1",2:"grid-cols-2",3:"grid-cols-3",4:"grid-cols-4",5:"grid-cols-5",6:"grid-cols-6",7:"grid-cols-7",8:"grid-cols-8",9:"grid-cols-9",10:"grid-cols-10",11:"grid-cols-11",12:"grid-cols-12"},m={none:"gap-0",small:"gap-2",medium:"gap-4",large:"gap-6"},c=({children:e,columns:l=3,gap:s="medium",responsive:a=!1,className:r=""})=>{const i=n[l]||"grid-cols-3",o=a?"sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4":"";return d.jsx("div",{className:`grid ${i} ${o} ${m[s]} ${r} bg-gray-100`,children:e})};c.__docgenInfo={description:"",methods:[],displayName:"Grid",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},columns:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"3",computed:!1}},gap:{required:!1,tsType:{name:"union",raw:"'none' | 'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'none'"},{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"",defaultValue:{value:"'medium'",computed:!1}},responsive:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}}}};export{c as G};
