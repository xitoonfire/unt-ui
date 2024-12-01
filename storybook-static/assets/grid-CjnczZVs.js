import{j as e}from"./jsx-runtime-DEdD30eg.js";import{useMDXComponents as r}from"./index-CcnH5Kt0.js";import"./chunk-HLWAVYOI-Cw-bIfa7.js";import{ae as l}from"./index-Ck3KPMy2.js";import{G as o}from"./Grid-CzcUQR0-.js";import"./index-RYns6xqu.js";import"./iframe-DyWSG_Xz.js";import"../sb-preview/runtime.js";import"./index-C6Iyy7v6.js";import"./index-D-8MO0q_.js";import"./index-DrFu-skq.js";function s(i){const n={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Layout/Grid",component:o}),`
`,e.jsx(n.h1,{id:"grid-component-documentation",children:"Grid Component Documentation"}),`
`,e.jsx(n.h2,{id:"overview",children:"Overview"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"Grid"})," component provides a flexible and customizable grid layout system. It allows you to define the number of columns, the gap between items, and make the grid responsive based on different screen sizes. The grid is built using Tailwind CSS's grid utilities for easy customization."]}),`
`,e.jsx(n.h2,{id:"basic-example",children:"Basic Example"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import Grid from './Grid';\r
\r
function App() {\r
  return (\r
    <Grid columns={3} gap="medium">\r
      <div className="bg-blue-500 p-4">Item 1</div>\r
      <div className="bg-blue-500 p-4">Item 2</div>\r
      <div className="bg-blue-500 p-4">Item 3</div>\r
      <div className="bg-blue-500 p-4">Item 4</div>\r
    </Grid>\r
  );\r
}\r
\r
export default App;
`})}),`
`,e.jsx(n.p,{children:"In this example, the Grid component creates a grid with 3 columns and a medium gap between items."}),`
`,e.jsx(n.h2,{id:"grid-properties",children:"Grid Properties"}),`
`,e.jsx(n.p,{children:"The Grid component accepts the following props:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"children"}),": The content to be displayed inside the grid."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"columns"}),": Specifies the number of columns in the grid. This can be any number from 1 to 12. Default is 3."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"gap"}),": Defines the spacing between grid items. The available values are:",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"'none'"})," for no gap."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"'small'"})," for a small gap."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"'medium'"})," for a medium gap."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"'large'"})," for a large gap."]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"responsive"}),": If set to true, the grid becomes responsive, adjusting the number of columns at different breakpoints. Default is false."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"className"}),": Allows additional custom classes to be applied to the grid container."]}),`
`]}),`
`,e.jsx(n.h2,{id:"example-with-responsive-grid",children:"Example with Responsive Grid"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import Grid from './Grid';\r
\r
function App() {\r
  return (\r
    <Grid columns={4} responsive>\r
      <div className="bg-blue-500 p-4">Item 1</div>\r
      <div className="bg-blue-500 p-4">Item 2</div>\r
      <div className="bg-blue-500 p-4">Item 3</div>\r
      <div className="bg-blue-500 p-4">Item 4</div>\r
      <div className="bg-blue-500 p-4">Item 5</div>\r
    </Grid>\r
  );\r
}\r
\r
export default App;
`})}),`
`,e.jsx(n.p,{children:"In this example, the Grid component uses 4 columns by default, and it becomes responsive based on the screen size. On small screens, it will show 2 columns, on medium screens 3 columns, and on large screens 4 columns."}),`
`,e.jsx(n.h2,{id:"customization",children:"Customization"}),`
`,e.jsx(n.p,{children:"You can customize the appearance and behavior of the grid using the following props:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"columns"}),": Adjust the number of columns in the grid (default is 3)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"gap"}),": Control the spacing between grid items. Choose from ",e.jsx(n.code,{children:"'none'"}),", ",e.jsx(n.code,{children:"'small'"}),", ",e.jsx(n.code,{children:"'medium'"}),", or ",e.jsx(n.code,{children:"'large'"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"responsive"}),": Set to true to make the grid responsive across different screen sizes."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"className"}),": Add additional CSS classes for further customization."]}),`
`]}),`
`,e.jsx(n.h2,{id:"notes",children:"Notes"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"The responsive prop, when set to true, ensures the grid adjusts based on the screen size."}),`
`,e.jsx(n.li,{children:"Tailwind CSS grid utilities are used for layout, making the grid highly flexible and responsive."}),`
`,e.jsx(n.li,{children:"You can pass any valid Tailwind classes via the className prop for additional styling."}),`
`]})]})}function f(i={}){const{wrapper:n}={...r(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(s,{...i})}):s(i)}export{f as default};
