import{j as e}from"./jsx-runtime-DEdD30eg.js";import{useMDXComponents as r}from"./index-CcnH5Kt0.js";import"./chunk-HLWAVYOI-Cw-bIfa7.js";import{ae as s}from"./index-Ck3KPMy2.js";import{T as l}from"./Table-7QaLd9iP.js";import"./index-RYns6xqu.js";import"./iframe-DyWSG_Xz.js";import"../sb-preview/runtime.js";import"./index-C6Iyy7v6.js";import"./index-D-8MO0q_.js";import"./index-DrFu-skq.js";function o(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Components/Table",component:l}),`
`,e.jsx(n.h1,{id:"table-component-documentation",children:"Table Component Documentation"}),`
`,e.jsx(n.h2,{id:"overview",children:"Overview"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"Table"})," component provides a flexible and customizable table that can display rows of data with a set of defined columns. It supports an optional delete feature, which allows removing rows dynamically. This component is useful for displaying data in a structured, tabular format and can be customized with column width and delete functionality."]}),`
`,e.jsx(n.h2,{id:"basic-example",children:"Basic Example"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import Table from './Table';\r
\r
function App() {\r
  const columns = [\r
    { header: 'Name', accessor: 'name' },\r
    { header: 'Age', accessor: 'age' },\r
  ];\r
\r
  const data = [\r
    { name: 'John Doe', age: 30 },\r
    { name: 'Jane Smith', age: 25 },\r
  ];\r
\r
  return <Table columns={columns} data={data} />;\r
}\r
\r
export default App;
`})}),`
`,e.jsx(n.p,{children:"In this example, the Table component is used to display two columns: Name and Age. The table is populated with two rows of data."}),`
`,e.jsx(n.h2,{id:"table-properties",children:"Table Properties"}),`
`,e.jsx(n.p,{children:"The Table component accepts the following props:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"columns"})," (",e.jsx(n.code,{children:"Column[]"}),"): An array of objects that define the columns of the table. Each column must have a header (",e.jsx(n.code,{children:"string"}),") for the column's header and an accessor (",e.jsx(n.code,{children:"string"}),") to reference the key in the data rows."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"data"})," (",e.jsx(n.code,{children:"Record<string, any>[]"}),"): An array of objects representing the rows of data to display in the table. Each object should have keys that correspond to the column accessor values."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"allowDelete"})," (",e.jsx(n.code,{children:"boolean"}),"): A flag to enable or disable the delete button in the last column of each row. Defaults to true."]}),`
`]}),`
`,e.jsx(n.h3,{id:"column-object",children:"Column Object"}),`
`,e.jsx(n.p,{children:"Each object in the columns array should have:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"header"})," (",e.jsx(n.code,{children:"string"}),"): The title or name of the column displayed in the table header."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"accessor"})," (",e.jsx(n.code,{children:"string"}),"): The key in each row object that corresponds to the value shown in the cell of that column."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"width"})," (",e.jsx(n.code,{children:"string"}),", optional): The width of the column, which can be specified as a string (e.g., '100px', '20%'). If not provided, the width defaults to 'auto'."]}),`
`]}),`
`,e.jsx(n.h2,{id:"example-with-delete-feature-disabled",children:"Example with Delete Feature Disabled"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import Table from './Table';\r
\r
function App() {\r
  const columns = [\r
    { header: 'Product', accessor: 'product' },\r
    { header: 'Price', accessor: 'price' },\r
  ];\r
\r
  const data = [\r
    { product: 'Laptop', price: '$1000' },\r
    { product: 'Phone', price: '$500' },\r
  ];\r
\r
  return <Table columns={columns} data={data} allowDelete={false} />;\r
}\r
\r
export default App;
`})}),`
`,e.jsx(n.p,{children:"In this example, the delete functionality is disabled by setting the allowDelete prop to false, meaning no delete buttons will be shown in the table."}),`
`,e.jsx(n.h1,{id:"customization",children:"Customization"}),`
`,e.jsx(n.h2,{id:"columns",children:"columns"}),`
`,e.jsx(n.p,{children:"The columns prop defines the structure of your table. You can customize each column's header and the data it should display using the accessor property."}),`
`,e.jsx(n.h2,{id:"allowdelete",children:"allowDelete"}),`
`,e.jsx(n.p,{children:"If you don't want to allow row deletion, set allowDelete to false."}),`
`,e.jsx(n.h2,{id:"width",children:"width"}),`
`,e.jsxs(n.p,{children:["You can set the width of each column by passing a width property in the columns array. For example, ",e.jsx(n.code,{children:"{ header: 'Age', accessor: 'age', width: '150px' }"}),"."]}),`
`,e.jsx(n.h1,{id:"styling",children:"Styling"}),`
`,e.jsx(n.p,{children:"The Table component uses Tailwind CSS utility classes for styling. The table is responsive and will adapt based on its content and the width of its container. The allowDelete prop adds a delete button in the last column of each row, which uses the red color theme for visual emphasis."}),`
`,e.jsx(n.h1,{id:"example-with-custom-column-width",children:"Example with Custom Column Width"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import Table from './Table';\r
\r
function App() {\r
  const columns = [\r
    { header: 'Product', accessor: 'product', width: '200px' },\r
    { header: 'Price', accessor: 'price', width: '100px' },\r
  ];\r
\r
  const data = [\r
    { product: 'Laptop', price: '$1000' },\r
    { product: 'Phone', price: '$500' },\r
  ];\r
\r
  return <Table columns={columns} data={data} />;\r
}\r
\r
export default App;
`})}),`
`,e.jsx(n.p,{children:"This example demonstrates how you can set custom column widths for better table control and presentation."}),`
`,e.jsx(n.h1,{id:"notes",children:"Notes"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["The Table component provides basic row deletion functionality. When ",e.jsx(n.code,{children:"allowDelete"})," is set to true, each row will have a delete button (represented by a red ❌ icon)."]}),`
`,e.jsxs(n.li,{children:["If the ",e.jsx(n.code,{children:"allowDelete"})," prop is set to false, the delete button will be hidden, and no row deletion functionality will be available."]}),`
`,e.jsxs(n.li,{children:["The ",e.jsx(n.code,{children:"tableData"})," state is updated whenever a row is deleted, ensuring the table reflects the changes."]}),`
`]})]})}function w(t={}){const{wrapper:n}={...r(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(o,{...t})}):o(t)}export{w as default};
