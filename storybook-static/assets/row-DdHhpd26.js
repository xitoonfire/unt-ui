import{j as e}from"./jsx-runtime-DEdD30eg.js";import{useMDXComponents as r}from"./index-CcnH5Kt0.js";import"./chunk-HLWAVYOI-Cw-bIfa7.js";import{ae as o}from"./index-Ck3KPMy2.js";import{R as s}from"./Row-VgUs_CnK.js";import"./index-RYns6xqu.js";import"./iframe-DyWSG_Xz.js";import"../sb-preview/runtime.js";import"./index-C6Iyy7v6.js";import"./index-D-8MO0q_.js";import"./index-DrFu-skq.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"Layout/Row",component:s}),`
`,e.jsx(n.h1,{id:"row-component-documentation",children:"Row Component Documentation"}),`
`,e.jsx(n.h2,{id:"overview",children:"Overview"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"Row"})," component is a layout component used to create a row-based container for aligning and spacing children elements. It provides flexibility in controlling the gap between items, vertical alignment, and horizontal alignment using Tailwind CSS utility classes."]}),`
`,e.jsx(n.h2,{id:"basic-example",children:"Basic Example"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import Row from './Row';\r
\r
function App() {\r
  return (\r
    <Row gap="medium" alignItems="center" justifyContent="between">\r
      <div>Item 1</div>\r
      <div>Item 2</div>\r
      <div>Item 3</div>\r
    </Row>\r
  );\r
}\r
\r
export default App;
`})}),`
`,e.jsx(n.p,{children:"In this example, the Row component arranges three items in a row, with medium spacing between them, vertically aligned in the center, and the items spaced between horizontally."}),`
`,e.jsx(n.h2,{id:"row-properties",children:"Row Properties"}),`
`,e.jsx(n.p,{children:"The Row component accepts the following props:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"children"})," (",e.jsx(n.code,{children:"ReactNode"}),"): The content to be placed inside the row (required)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"gap"})," (",e.jsx(n.code,{children:"'none' | 'small' | 'medium' | 'large'"}),"): Specifies the gap between the items in the row. Default is 'medium'."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"alignItems"})," (",e.jsx(n.code,{children:"'start' | 'center' | 'end'"}),"): Controls the vertical alignment of items within the row. Default is 'start'."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"justifyContent"})," (",e.jsx(n.code,{children:"'start' | 'center' | 'end' | 'between' | 'around'"}),"): Specifies how the items are distributed horizontally within the row. Default is 'start'."]}),`
`]}),`
`,e.jsx(n.h2,{id:"example-with-different-gap-and-alignment",children:"Example with Different Gap and Alignment"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import Row from './Row';\r
\r
function App() {\r
  return (\r
    <Row gap="large" alignItems="end" justifyContent="around">\r
      <div>Item 1</div>\r
      <div>Item 2</div>\r
      <div>Item 3</div>\r
    </Row>\r
  );\r
}\r
\r
export default App;
`})}),`
`,e.jsx(n.p,{children:"In this example, the Row component arranges the items with large gaps between them, aligned at the bottom vertically, and distributed evenly around the row horizontally."}),`
`,e.jsx(n.h2,{id:"customization",children:"Customization"}),`
`,e.jsx(n.p,{children:"The Row component can be customized in the following ways:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"gap"}),": Control the spacing between child elements with values 'none', 'small', 'medium', or 'large'. The default is 'medium'."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"alignItems"}),": Adjust the vertical alignment of the children with values 'start', 'center', or 'end'. The default is 'start'."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"justifyContent"}),": Manage the horizontal alignment of the children with options like 'start', 'center', 'end', 'between', or 'around'. The default is 'start'."]}),`
`]}),`
`,e.jsx(n.h2,{id:"notes",children:"Notes"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"The Row component uses Tailwind CSS classes to handle the layout styles, ensuring responsiveness and flexibility."}),`
`,e.jsx(n.li,{children:"The default gap is 'medium', which provides a reasonable space between items."}),`
`,e.jsx(n.li,{children:"The alignItems and justifyContent properties provide simple control over vertical and horizontal alignment."}),`
`]})]})}function j(t={}){const{wrapper:n}={...r(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{j as default};
