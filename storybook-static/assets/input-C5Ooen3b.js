import{j as e}from"./jsx-runtime-DEdD30eg.js";import{useMDXComponents as i}from"./index-CcnH5Kt0.js";import"./chunk-HLWAVYOI-Cw-bIfa7.js";import{ae as s}from"./index-Ck3KPMy2.js";import{I as l}from"./Input-B9JbCenw.js";import"./index-RYns6xqu.js";import"./iframe-DyWSG_Xz.js";import"../sb-preview/runtime.js";import"./index-C6Iyy7v6.js";import"./index-D-8MO0q_.js";import"./index-DrFu-skq.js";function r(t){const n={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Components/Input",component:l}),`
`,e.jsx(n.h1,{id:"input-component-documentation",children:"Input Component Documentation"}),`
`,e.jsx(n.h2,{id:"overview",children:"Overview"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"Input"})," component provides a customizable input field for text, numbers, or other types of data. It supports additional features such as validation for required fields and styling for focus and error states."]}),`
`,e.jsx(n.h2,{id:"basic-example",children:"Basic Example"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import Input from './Input';\r
\r
function App() {\r
  return (\r
    <div>\r
      <Input\r
        type="text"\r
        value="Sample Text"\r
        onChange={(e) => console.log(e.target.value)}\r
      />\r
    </div>\r
  );\r
}\r
\r
export default App;
`})}),`
`,e.jsx(n.p,{children:"This example demonstrates the usage of the Input component with a text input type, where a value is provided and changes are logged on each update."}),`
`,e.jsx(n.h2,{id:"input-properties",children:"Input Properties"}),`
`,e.jsx(n.p,{children:"The Input component accepts the following props:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"type"})," (string): Specifies the type of the input (e.g., text, number, date, etc.). Default is 'text'."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"isRequired"})," (boolean): If set to true, the input will be marked as required. This will also apply a red border to indicate the required field."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"className"})," (string): Custom classes to apply additional styling to the input field."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"value"})," (string | number): The current value of the input field."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"onChange"})," (function): The function to handle changes to the input value."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"placeholder"})," (string): Placeholder text displayed inside the input field."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"disabled"})," (boolean): If set to true, the input will be disabled, preventing interaction."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"readonly"})," (boolean): If set to true, the input will be in a read-only state."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"required"})," (boolean): Marks the input as required (overrides the isRequired prop)."]}),`
`]}),`
`,e.jsx(n.h2,{id:"example-with-required-field",children:"Example with Required Field"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import Input from './Input';\r
\r
function App() {\r
  return (\r
    <div>\r
      <Input\r
        type="text"\r
        isRequired={true}\r
        value="Sample Text"\r
        onChange={(e) => console.log(e.target.value)}\r
      />\r
    </div>\r
  );\r
}\r
\r
export default App;
`})}),`
`,e.jsx(n.p,{children:"In this example, the Input component is used with the isRequired prop set to true, which applies a red border to indicate the field is required."}),`
`,e.jsx(n.h2,{id:"example-with-number-input",children:"Example with Number Input"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import Input from './Input';\r
\r
function App() {\r
  return (\r
    <div>\r
      <Input\r
        type="number"\r
        value={10}\r
        onChange={(e) => console.log(e.target.value)}\r
      />\r
    </div>\r
  );\r
}\r
\r
export default App;
`})}),`
`,e.jsx(n.p,{children:"In this example, the Input component is used with the number input type."}),`
`,e.jsx(n.h2,{id:"customization",children:"Customization"}),`
`,e.jsx(n.p,{children:"The Input component can be customized in the following ways:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"type"}),": Set the input type (e.g., text, number, date, etc.)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"isRequired"}),": Adds a red border to indicate the field is required and marks it as required."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"className"}),": Allows custom styling using Tailwind classes."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"value"}),": The input's value, which can be a string or number."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"onChange"}),": Handles input value changes."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"placeholder"}),": Sets a placeholder for the input field."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"disabled"}),": If true, disables the input."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"readonly"}),": Makes the input read-only."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"required"}),": This is used to mark the input as required."]}),`
`]}),`
`,e.jsx(n.h2,{id:"notes",children:"Notes"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"The Input component uses Tailwind CSS for easy customization of styles."}),`
`,e.jsx(n.li,{children:"The red border appears when the input field is required, providing visual feedback to the user."}),`
`,e.jsx(n.li,{children:"The component automatically supports standard HTML input attributes, such as value, onChange, disabled, and readonly."}),`
`]})]})}function f(t={}){const{wrapper:n}={...i(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(r,{...t})}):r(t)}export{f as default};
