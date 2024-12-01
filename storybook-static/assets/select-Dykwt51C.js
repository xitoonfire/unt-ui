import{j as e}from"./jsx-runtime-DEdD30eg.js";import{useMDXComponents as r}from"./index-CcnH5Kt0.js";import"./chunk-HLWAVYOI-Cw-bIfa7.js";import{ae as i}from"./index-Ck3KPMy2.js";import{S as s}from"./Select-BWQAUmj6.js";import"./index-RYns6xqu.js";import"./iframe-DyWSG_Xz.js";import"../sb-preview/runtime.js";import"./index-C6Iyy7v6.js";import"./index-D-8MO0q_.js";import"./index-DrFu-skq.js";function l(t){const n={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Components/Select",component:s}),`
`,e.jsx(n.h1,{id:"select-component-documentation",children:"Select Component Documentation"}),`
`,e.jsx(n.h2,{id:"overview",children:"Overview"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"Select"})," component provides a customizable dropdown menu for selecting a single value from a list of options. It allows for customization of size, variant, and handling of the selection state. This component can be used in forms or as a standalone element for gathering user input."]}),`
`,e.jsx(n.h2,{id:"basic-example",children:"Basic Example"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import Select from './Select';\r
\r
function App() {\r
  const options = [\r
    { value: 'apple', label: 'Apple' },\r
    { value: 'orange', label: 'Orange' },\r
    { value: 'banana', label: 'Banana' },\r
  ];\r
\r
  const [selectedValue, setSelectedValue] = useState('apple');\r
\r
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {\r
    setSelectedValue(event.target.value);\r
  };\r
\r
  return (\r
    <Select\r
      id="fruit-select"\r
      options={options}\r
      value={selectedValue}\r
      onChange={handleChange}\r
    />\r
  );\r
}\r
\r
export default App;
`})}),`
`,e.jsx(n.p,{children:"In this example, the Select component is used to display a dropdown with three fruit options, and the selected value is tracked using the selectedValue state."}),`
`,e.jsx(n.h2,{id:"select-properties",children:"Select Properties"}),`
`,e.jsx(n.p,{children:"The Select component accepts the following props:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"id"})," (string): The unique identifier for the select element (required)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"options"})," (SelectOption[]): An array of objects representing the options in the select dropdown, each with a value and label (required)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"value"})," (string): The current selected value (required)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"onChange"})," (function): A callback function triggered when the selection changes (required)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"size"})," ('small' | 'medium' | 'large'): The size of the select input. Default is 'medium'."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"variant"})," ('default' | 'outlined' | 'filled'): The style variant of the select input. Default is 'default'."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"disabled"})," (boolean): Whether the select is disabled. Defaults to false."]}),`
`]}),`
`,e.jsx(n.h2,{id:"example-with-custom-size-and-variant",children:"Example with Custom Size and Variant"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import Select from './Select';\r
\r
function App() {\r
  const options = [\r
    { value: 'red', label: 'Red' },\r
    { value: 'green', label: 'Green' },\r
    { value: 'blue', label: 'Blue' },\r
  ];\r
\r
  const [selectedValue, setSelectedValue] = useState('red');\r
\r
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {\r
    setSelectedValue(event.target.value);\r
  };\r
\r
  return (\r
    <Select\r
      id="color-select"\r
      options={options}\r
      value={selectedValue}\r
      onChange={handleChange}\r
      size="large"\r
      variant="outlined"\r
    />\r
  );\r
}\r
\r
export default App;
`})}),`
`,e.jsx(n.p,{children:"In this example, the Select component is used with a custom size of 'large' and a variant of 'outlined' for a more prominent dropdown style."}),`
`,e.jsx(n.h2,{id:"customization",children:"Customization"}),`
`,e.jsx(n.p,{children:"The Select component can be customized in the following ways:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"size"}),": Choose from 'small', 'medium', or 'large' to adjust the padding and font size of the dropdown. The default size is 'medium'."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"variant"}),": Select between 'default', 'outlined', or 'filled' to change the appearance of the select input.",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"'default'"})," applies a simple border with focus styles."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"'outlined'"})," applies a bold border and more focus styling."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"'filled'"})," applies a background color with a border."]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"disabled"}),": When set to true, the dropdown will be disabled and non-interactive. By default, this is set to false."]}),`
`]}),`
`,e.jsx(n.h1,{id:"notes",children:"Notes"}),`
`,e.jsxs(n.p,{children:[`The Select component automatically adjusts its appearance based on the size and variant props.\r
The component supports disabled functionality to prevent user interaction when needed.\r
The `,e.jsx(n.code,{children:"onChange"})," handler allows easy integration with state management to track the selected value."]})]})}function g(t={}){const{wrapper:n}={...r(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(l,{...t})}):l(t)}export{g as default};
