const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./index-CcnH5Kt0.js","./index-RYns6xqu.js"])))=>i.map(i=>d[i]);
import{_ as h}from"./iframe-DyWSG_Xz.js";import{r as s,R as n}from"./index-RYns6xqu.js";import{af as E,ag as d,ah as R,ao as v}from"./index-Ck3KPMy2.js";import{r as f}from"./index-C6Iyy7v6.js";import"../sb-preview/runtime.js";import"./jsx-runtime-DEdD30eg.js";import"./index-D-8MO0q_.js";import"./index-DrFu-skq.js";var l,c=f;l=c.createRoot,c.hydrateRoot;var a=new Map;function w(){return globalThis.IS_REACT_ACT_ENVIRONMENT}var _=({callback:e,children:t})=>{let r=s.useRef();return s.useLayoutEffect(()=>{r.current!==e&&(r.current=e,e())},[e]),t};typeof Promise.withResolvers>"u"&&(Promise.withResolvers=()=>{let e=null,t=null;return{promise:new Promise((r,o)=>{e=r,t=o}),resolve:e,reject:t}});var g=async(e,t,r)=>{let o=await y(t,r);if(w()){o.render(e);return}let{promise:i,resolve:m}=Promise.withResolvers();return o.render(s.createElement(_,{callback:m},e)),i},x=(e,t)=>{let r=a.get(e);r&&(r.unmount(),a.delete(e))},y=async(e,t)=>{let r=a.get(e);return r||(r=l(e,t),a.set(e,r)),r},D={code:E,a:d,...R},C=class extends s.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(e){let{showException:t}=this.props;t(e)}render(){let{hasError:e}=this.state,{children:t}=this.props;return e?null:n.createElement(n.Fragment,null,t)}},F=class{constructor(){this.render=async(e,t,r)=>{let o={...D,...t==null?void 0:t.components},i=v;return new Promise((m,p)=>{h(async()=>{const{MDXProvider:u}=await import("./index-CcnH5Kt0.js");return{MDXProvider:u}},__vite__mapDeps([0,1]),import.meta.url).then(({MDXProvider:u})=>g(n.createElement(C,{showException:p,key:Math.random()},n.createElement(u,{components:o},n.createElement(i,{context:e,docsParameter:t}))),r)).then(()=>m())})},this.unmount=e=>{x(e)}}};export{F as DocsRenderer,D as defaultComponents};
