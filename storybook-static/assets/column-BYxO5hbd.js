import{j as e}from"./jsx-runtime-DEdD30eg.js";import{useMDXComponents as s}from"./index-CcnH5Kt0.js";import"./chunk-HLWAVYOI-Cw-bIfa7.js";import{ae as l}from"./index-Ck3KPMy2.js";import{C as r}from"./Column-BIQDZZdC.js";import"./index-RYns6xqu.js";import"./iframe-DyWSG_Xz.js";import"../sb-preview/runtime.js";import"./index-C6Iyy7v6.js";import"./index-D-8MO0q_.js";import"./index-DrFu-skq.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Layout/Column",component:r}),`
`,e.jsx(n.h1,{id:"column-component-documentation",children:"Column Component Documentation"}),`
`,e.jsx(n.h2,{id:"overview",children:"Overview"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"Column"})," component is a flexible container used to arrange its children in a vertical stack (column) layout. It provides options to control the spacing between items, the alignment of items, and the justification of items within the column. It uses Tailwind CSS classes to manage layout behavior."]}),`
`,e.jsx(n.h2,{id:"basic-example",children:"Basic Example"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import Column from './Column';\r
\r
function App() {\r
  return (\r
    <Column gap="medium" alignItems="center" justifyContent="center">\r
      <div>Item 1</div>\r
      <div>Item 2</div>\r
      <div>Item 3</div>\r
    </Column>\r
  );\r
}\r
\r
export default App;
`})}),`
`,e.jsx(n.p,{children:"In this example, the Column component arranges the items vertically with medium gaps, centered alignment, and centered justification."}),`
`,e.jsx(n.h2,{id:"column-properties",children:"Column Properties"}),`
`,e.jsx(n.p,{children:"The Column component accepts the following props:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"children"}),": The content or elements to be arranged within the column (required)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"gap"}),": Defines the space between child elements. It can be one of the following:",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"'none'"})," - No gap."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"'small'"})," - Small gap (2 units)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"'medium'"})," - Medium gap (4 units)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"'large'"})," - Large gap (6 units)."]}),`
`,e.jsxs(n.li,{children:["Default value: ",e.jsx(n.code,{children:"'medium'"}),"."]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"alignItems"}),": Controls the vertical alignment of the items within the column. Possible values:",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"'start'"})," - Align items at the start (top)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"'center'"})," - Align items at the center."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"'end'"})," - Align items at the end (bottom)."]}),`
`,e.jsxs(n.li,{children:["Default value: ",e.jsx(n.code,{children:"'start'"}),"."]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"justifyContent"}),": Defines how the items are spaced and aligned along the main axis. Possible values:",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"'start'"})," - Items align at the start (top)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"'center'"})," - Items align at the center."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"'end'"})," - Items align at the end (bottom)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"'between'"})," - Items are spaced evenly with the first item at the start and the last item at the end."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"'around'"})," - Items are spaced evenly with equal space around each item."]}),`
`,e.jsxs(n.li,{children:["Default value: ",e.jsx(n.code,{children:"'start'"}),"."]}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<Column gap="large" alignItems="center" justifyContent="between">\r
  <div>Item 1</div>\r
  <div>Item 2</div>\r
  <div>Item 3</div>\r
</Column>
`})}),`
`,e.jsx(n.p,{children:"In this example, the column has large gaps between items, the items are aligned in the center, and the items are justified with space between them."})]})}function f(t={}){const{wrapper:n}={...s(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{f as default};
