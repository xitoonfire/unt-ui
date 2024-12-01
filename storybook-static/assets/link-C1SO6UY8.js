import{j as e}from"./jsx-runtime-DEdD30eg.js";import{useMDXComponents as r}from"./index-CcnH5Kt0.js";import"./chunk-HLWAVYOI-Cw-bIfa7.js";import{ae as l}from"./index-Ck3KPMy2.js";import{L as o}from"./Link-BXH2WORD.js";import"./index-RYns6xqu.js";import"./iframe-DyWSG_Xz.js";import"../sb-preview/runtime.js";import"./index-C6Iyy7v6.js";import"./index-D-8MO0q_.js";import"./index-DrFu-skq.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Utility/Link",component:o}),`
`,e.jsx(n.h1,{id:"link-component-documentation",children:"Link Component Documentation"}),`
`,e.jsx(n.h2,{id:"overview",children:"Overview"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"Link"})," component is used to render anchor tags (",e.jsx(n.code,{children:"<a>"}),") with customizable properties. It supports both internal and external links, customizable text styling, and the option to add an underline effect."]}),`
`,e.jsx(n.h2,{id:"basic-example",children:"Basic Example"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import Link from './Link';\r
\r
function App() {\r
  return (\r
    <div>\r
      <Link href="https://www.example.com" text="Go to Example" />\r
    </div>\r
  );\r
}\r
\r
export default App;
`})}),`
`,e.jsx(n.p,{children:'This example demonstrates the basic usage of the Link component where an external link is provided with the text "Go to Example."'}),`
`,e.jsx(n.h2,{id:"link-properties",children:"Link Properties"}),`
`,e.jsx(n.p,{children:"The Link component accepts the following props:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"href"})," (string): The URL the link points to (required)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"text"})," (string): The text content of the link (required)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"external"})," (boolean): If set to true, the link will open in a new tab (defaults to false)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"underline"})," (boolean): If set to true, the link text will be underlined (defaults to false)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"className"})," (string): Additional classes to apply custom styling to the link."]}),`
`]}),`
`,e.jsx(n.h2,{id:"example-with-underline",children:"Example with Underline"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import Link from './Link';\r
\r
function App() {\r
  return (\r
    <div>\r
      <Link href="https://www.example.com" text="Go to Example" underline={true} />\r
    </div>\r
  );\r
}\r
\r
export default App;
`})}),`
`,e.jsx(n.p,{children:"In this example, the underline prop is set to true, causing the link text to be underlined."}),`
`,e.jsx(n.h2,{id:"example-with-external-link",children:"Example with External Link"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import Link from './Link';\r
\r
function App() {\r
  return (\r
    <div>\r
      <Link href="https://www.example.com" text="Go to Example" external={true} />\r
    </div>\r
  );\r
}\r
\r
export default App;
`})}),`
`,e.jsx(n.p,{children:"In this example, the external prop is set to true, making the link open in a new tab."}),`
`,e.jsx(n.h2,{id:"customization",children:"Customization"}),`
`,e.jsx(n.p,{children:"The Link component can be customized in the following ways:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"href"}),": The URL the link will point to (required)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"text"}),": The text displayed for the link (required)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"external"}),": Set to true to open the link in a new tab."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"underline"}),": Set to true to underline the link text."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"className"}),": Add custom Tailwind classes to style the link further."]}),`
`]}),`
`,e.jsx(n.h2,{id:"notes",children:"Notes"}),`
`,e.jsx(n.p,{children:'The Link component uses Tailwind CSS for easy styling customization. If the external prop is set to true, the link will have the target="_blank" attribute to open the link in a new tab. It also includes rel="noopener noreferrer" for security purposes. The underline prop allows you to toggle the underline style for the link text.'})]})}function f(t={}){const{wrapper:n}={...r(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{f as default};
