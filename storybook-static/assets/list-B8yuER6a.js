import{j as e}from"./jsx-runtime-DEdD30eg.js";import{useMDXComponents as r}from"./index-CcnH5Kt0.js";import"./chunk-HLWAVYOI-Cw-bIfa7.js";import{ae as i}from"./index-Ck3KPMy2.js";import{L as o}from"./List-DdrxXgfv.js";import"./index-RYns6xqu.js";import"./iframe-DyWSG_Xz.js";import"../sb-preview/runtime.js";import"./index-C6Iyy7v6.js";import"./index-D-8MO0q_.js";import"./index-DrFu-skq.js";function n(s){const t={blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Utility/List",component:o}),`
`,e.jsx(t.h1,{id:"list-component-documentation",children:"List Component Documentation"}),`
`,e.jsx(t.h2,{id:"overview",children:"Overview"}),`
`,e.jsxs(t.p,{children:["The ",e.jsx(t.code,{children:"List"})," component is used to render ordered or unordered lists. You can provide a list of items, specify whether the list should be ordered or unordered, and customize the styles for the list and individual items."]}),`
`,e.jsx(t.h2,{id:"basic-example",children:"Basic Example"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-tsx",children:`import List from './List';\r
\r
function App() {\r
  const items = ['Item 1', 'Item 2', 'Item 3'];\r
  return (\r
    <div>\r
      <List items={items} />\r
    </div>\r
  );\r
}\r
\r
export default App;
`})}),`
`,e.jsx(t.p,{children:"This example demonstrates the basic usage of the List component where an unordered list is rendered with the items provided."}),`
`,e.jsx(t.h2,{id:"list-properties",children:"List Properties"}),`
`,e.jsx(t.p,{children:"The List component accepts the following props:"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"items"})," (",e.jsx(t.code,{children:"string[]"}),"): An array of strings representing the list items (required)."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"type"})," (",e.jsx(t.code,{children:"'ordered' | 'unordered'"}),"): The type of the list. It can be either ordered or unordered. Defaults to unordered."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"className"})," (",e.jsx(t.code,{children:"string"}),"): Custom class names to apply to the entire list element."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"itemClassName"})," (",e.jsx(t.code,{children:"string"}),"): Custom class names to apply to each list item."]}),`
`]}),`
`,e.jsx(t.h2,{id:"example-with-ordered-list",children:"Example with Ordered List"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-tsx",children:`import List from './List';\r
\r
function App() {\r
  const items = ['First Item', 'Second Item', 'Third Item'];\r
  return (\r
    <div>\r
      <List items={items} type="ordered" />\r
    </div>\r
  );\r
}\r
\r
export default App;
`})}),`
`,e.jsxs(t.p,{children:["In this example, the type prop is set to ordered, which renders an ordered list (",e.jsx(t.code,{children:"<ol>"}),")."]}),`
`,e.jsx(t.h2,{id:"example-with-custom-item-styles",children:"Example with Custom Item Styles"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-tsx",children:`import List from './List';\r
\r
function App() {\r
  const items = ['First Item', 'Second Item', 'Third Item'];\r
  return (\r
    <div>\r
      <List items={items} itemClassName="text-red-500" />\r
    </div>\r
  );\r
}\r
\r
export default App;
`})}),`
`,e.jsx(t.p,{children:"In this example, the itemClassName prop is used to apply custom styles to each list item, in this case, the text color is set to red."}),`
`,e.jsx(t.h2,{id:"customization",children:"Customization"}),`
`,e.jsx(t.p,{children:"The List component can be customized in the following ways:"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"items"}),": A required array of strings that defines the list items."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"type"}),": Choose between an ordered or unordered list. Defaults to unordered."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"className"}),": Add custom Tailwind classes to style the entire list."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"itemClassName"}),": Add custom Tailwind classes to style individual list items."]}),`
`]}),`
`,e.jsx(t.h2,{id:"notes",children:"Notes"}),`
`,e.jsxs(t.blockquote,{children:[`
`,e.jsxs(t.p,{children:["The component uses Tailwind CSS to style the list and list items. You can further customize the styles using the className and itemClassName props.",e.jsx(t.br,{}),`
`,"The type prop determines whether the list is ordered (",e.jsx(t.code,{children:"<ol>"}),") or unordered (",e.jsx(t.code,{children:"<ul>"}),"), and applies the appropriate CSS class for list bullets or numbering."]}),`
`]})]})}function g(s={}){const{wrapper:t}={...r(),...s.components};return t?e.jsx(t,{...s,children:e.jsx(n,{...s})}):n(s)}export{g as default};
