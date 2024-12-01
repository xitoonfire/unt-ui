import{j as e}from"./jsx-runtime-DEdD30eg.js";import{useMDXComponents as r}from"./index-CcnH5Kt0.js";import"./chunk-HLWAVYOI-Cw-bIfa7.js";import{ae as i}from"./index-Ck3KPMy2.js";import{T as l}from"./Textarea-BmUq01rR.js";import"./index-RYns6xqu.js";import"./iframe-DyWSG_Xz.js";import"../sb-preview/runtime.js";import"./index-C6Iyy7v6.js";import"./index-D-8MO0q_.js";import"./index-DrFu-skq.js";function t(a){const n={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...a.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Components/Textarea",component:l}),`
`,e.jsx(n.h1,{id:"textarea-component-documentation",children:"Textarea Component Documentation"}),`
`,e.jsx(n.h2,{id:"overview",children:"Overview"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"Textarea"})," component is designed for multi-line text input, providing a customizable, flexible field that supports different sizes, variants, and resizing options. It is ideal for situations where more text input is needed, such as in forms or comments sections. This component also offers options to customize the appearance and behavior."]}),`
`,e.jsx(n.h2,{id:"basic-example",children:"Basic Example"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import Textarea from './Textarea';\r
\r
function App() {\r
  const [value, setValue] = React.useState('');\r
\r
  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {\r
    setValue(event.target.value);\r
  };\r
\r
  return <Textarea id="comment" value={value} onChange={handleChange} placeholder="Enter your comment" />;\r
}\r
\r
export default App;
`})}),`
`,e.jsx(n.p,{children:"In this example, the Textarea component is used with a value and onChange handler to allow the user to type in a comment."}),`
`,e.jsx(n.h2,{id:"textarea-properties",children:"Textarea Properties"}),`
`,e.jsx(n.p,{children:"The Textarea component accepts the following props:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"id"})," (string): The unique identifier for the textarea element."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"value"})," (string): The current value of the textarea."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"onChange"})," (function): A callback function to handle changes to the textarea value."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"placeholder"})," (string, optional): The placeholder text displayed in the textarea when it's empty."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"size"})," ('small' | 'medium' | 'large', optional): Defines the size of the textarea. Defaults to 'medium'."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"variant"})," ('default' | 'outlined' | 'filled', optional): Defines the style of the textarea. Defaults to 'default'."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"disabled"})," (boolean, optional): Disables the textarea if set to true. Defaults to false."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"rows"})," (number, optional): The number of rows to display. Defaults to 4."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"resize"})," ('none' | 'both' | 'horizontal' | 'vertical', optional): Controls whether the textarea is resizable. Defaults to 'both'."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"className"})," (string, optional): Additional custom CSS classes to apply to the textarea."]}),`
`]}),`
`,e.jsx(n.h2,{id:"example-with-different-sizes",children:"Example with Different Sizes"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import Textarea from './Textarea';\r
\r
function App() {\r
  const [value, setValue] = React.useState('');\r
\r
  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {\r
    setValue(event.target.value);\r
  };\r
\r
  return (\r
    <div>\r
      <Textarea id="small" value={value} onChange={handleChange} size="small" placeholder="Small size" />\r
      <Textarea id="medium" value={value} onChange={handleChange} size="medium" placeholder="Medium size" />\r
      <Textarea id="large" value={value} onChange={handleChange} size="large" placeholder="Large size" />\r
    </div>\r
  );\r
}\r
\r
export default App;
`})}),`
`,e.jsx(n.p,{children:"In this example, three Textarea components are rendered, each with a different size: small, medium, and large."}),`
`,e.jsx(n.h1,{id:"example-with-different-variants",children:"Example with Different Variants"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import Textarea from './Textarea';\r
\r
function App() {\r
  const [value, setValue] = React.useState('');\r
\r
  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {\r
    setValue(event.target.value);\r
  };\r
\r
  return (\r
    <div>\r
      <Textarea id="default" value={value} onChange={handleChange} variant="default" placeholder="Default variant" />\r
      <Textarea id="outlined" value={value} onChange={handleChange} variant="outlined" placeholder="Outlined variant" />\r
      <Textarea id="filled" value={value} onChange={handleChange} variant="filled" placeholder="Filled variant" />\r
    </div>\r
  );\r
}\r
\r
export default App;
`})}),`
`,e.jsx(n.p,{children:"This example demonstrates how to use the Textarea component with different variants: default, outlined, and filled."}),`
`,e.jsx(n.h1,{id:"customizing-resizing",children:"Customizing Resizing"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import Textarea from './Textarea';\r
\r
function App() {\r
  const [value, setValue] = React.useState('');\r
\r
  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {\r
    setValue(event.target.value);\r
  };\r
\r
  return (\r
    <div>\r
      <Textarea id="resize-none" value={value} onChange={handleChange} resize="none" placeholder="Non-resizable" />\r
      <Textarea id="resize-both" value={value} onChange={handleChange} resize="both" placeholder="Resizable both" />\r
      <Textarea id="resize-horizontal" value={value} onChange={handleChange} resize="horizontal" placeholder="Resizable horizontal" />\r
      <Textarea id="resize-vertical" value={value} onChange={handleChange} resize="vertical" placeholder="Resizable vertical" />\r
    </div>\r
  );\r
}\r
\r
export default App;
`})}),`
`,e.jsx(n.p,{children:"This example demonstrates different resize options: none, both, horizontal, and vertical."}),`
`,e.jsx(n.h1,{id:"custom-styling",children:"Custom Styling"}),`
`,e.jsx(n.p,{children:"The Textarea component uses Tailwind CSS classes for styling. You can extend or override the default styles by passing additional className values."}),`
`,e.jsx(n.p,{children:"For example:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<Textarea id="custom" value={value} onChange={handleChange} className="border-2 border-red-500" />
`})}),`
`,e.jsx(n.p,{children:"In this example, a custom border color (border-red-500) is applied to the Textarea component."}),`
`,e.jsx(n.h2,{id:"notes",children:"Notes"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Size"}),": You can adjust the size of the textarea by passing size with one of the following values: 'small', 'medium', or 'large'."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Variants"}),": You can choose from three variants: 'default', 'outlined', and 'filled', each offering a different style for the textarea."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Resizing"}),": The resize property determines if the textarea can be resized. By default, it's resizable in both directions (both), but you can restrict this to horizontal, vertical, or disable resizing entirely by setting it to none."]}),`
`]})]})}function v(a={}){const{wrapper:n}={...r(),...a.components};return n?e.jsx(n,{...a,children:e.jsx(t,{...a})}):t(a)}export{v as default};
