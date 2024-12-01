import{j as a}from"./jsx-runtime-DEdD30eg.js";import{r as c}from"./index-RYns6xqu.js";import{T as E}from"./Toast-7uJ0vWJb.js";const h={title:"Feedback/Toast",component:E,argTypes:{type:{control:{type:"radio",options:["success","error","warning","info"]}},duration:{control:{type:"number",min:1e3,max:1e4,step:1e3}}}},n=o=>{const[x,i]=c.useState(!0);return c.useEffect(()=>{i(!0)},[o]),a.jsx(a.Fragment,{children:x?a.jsx(E,{...o,onClose:()=>i(!1)}):a.jsx("div",{})})},e=n.bind({});e.args={message:"This is an info toast.",type:"info",duration:3e3};const s=n.bind({});s.args={message:"Operation was successful!",type:"success",duration:3e3};const r=n.bind({});r.args={message:"An error occurred!",type:"error",duration:3e3};const t=n.bind({});t.args={message:"Warning: Check your inputs!",type:"warning",duration:3e3};var u,l,p;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`args => {
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    setVisible(true);
  }, [args]);
  return <>\r
      {visible ? <Toast {...args} onClose={() => setVisible(false)} /> : <div />}\r
    </>;
}`,...(p=(l=e.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var m,d,g;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`args => {
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    setVisible(true);
  }, [args]);
  return <>\r
      {visible ? <Toast {...args} onClose={() => setVisible(false)} /> : <div />}\r
    </>;
}`,...(g=(d=s.parameters)==null?void 0:d.docs)==null?void 0:g.source}}};var b,f,v;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`args => {
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    setVisible(true);
  }, [args]);
  return <>\r
      {visible ? <Toast {...args} onClose={() => setVisible(false)} /> : <div />}\r
    </>;
}`,...(v=(f=r.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};var V,S,T;t.parameters={...t.parameters,docs:{...(V=t.parameters)==null?void 0:V.docs,source:{originalSource:`args => {
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    setVisible(true);
  }, [args]);
  return <>\r
      {visible ? <Toast {...args} onClose={() => setVisible(false)} /> : <div />}\r
    </>;
}`,...(T=(S=t.parameters)==null?void 0:S.docs)==null?void 0:T.source}}};const w=["Default","Success","Error","Warning"];export{e as Default,r as Error,s as Success,t as Warning,w as __namedExportsOrder,h as default};
