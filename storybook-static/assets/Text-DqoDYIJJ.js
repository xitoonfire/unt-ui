import{j as n}from"./jsx-runtime-DEdD30eg.js";import{useMDXComponents as r}from"./index-CcnH5Kt0.js";import"./chunk-HLWAVYOI-Cw-bIfa7.js";import{ae as o}from"./index-Ck3KPMy2.js";import{T as s}from"./Text-C6BxvdHW.js";import"./index-RYns6xqu.js";import"./iframe-DyWSG_Xz.js";import"../sb-preview/runtime.js";import"./index-C6Iyy7v6.js";import"./index-D-8MO0q_.js";import"./index-DrFu-skq.js";function i(t){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...r(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(o,{title:"Components/Text",component:s}),`
`,n.jsx(e.h1,{id:"text-component-documentation",children:"Text Component Documentation"}),`
`,n.jsx(e.h2,{id:"overview",children:"Overview"}),`
`,n.jsxs(e.p,{children:["The ",n.jsx(e.code,{children:"Text"})," component is a versatile React component for rendering various types of text elements in a consistent and customizable way. It supports multiple HTML tags, including headings, paragraphs, blockquotes, inline text (",n.jsx(e.code,{children:"span"}),"), and more, with additional styling options like bold, italics, and highlights. It is built using TypeScript and supports Tailwind CSS for easy styling."]}),`
`,n.jsx(e.h2,{id:"installation",children:"Installation"}),`
`,n.jsx(e.p,{children:"Ensure you have React, TypeScript, and Tailwind CSS set up in your project."}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`npm install react\r
npm install typescript\r
npm install tailwindcss
`})}),`
`,n.jsx(e.h2,{id:"usage",children:"Usage"}),`
`,n.jsx(e.h3,{id:"basic-example",children:"Basic Example"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import React from "react";\r
import Text from "./Text";\r
\r
function App() {\r
  return (\r
    <div>\r
      <Text variant="h1">This is an H1 heading</Text>\r
      <Text variant="p">This is a paragraph of text.</Text>\r
      <Text variant="blockquote">This is a blockquote.</Text>\r
    </div>\r
  );\r
}\r
\r
export default App;
`})})]})}function g(t={}){const{wrapper:e}={...r(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(i,{...t})}):i(t)}export{g as default};
