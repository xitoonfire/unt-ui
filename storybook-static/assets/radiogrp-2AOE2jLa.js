import{j as e}from"./jsx-runtime-DEdD30eg.js";import{useMDXComponents as i}from"./index-CcnH5Kt0.js";import"./chunk-HLWAVYOI-Cw-bIfa7.js";import{ae as r}from"./index-Ck3KPMy2.js";import{R as l}from"./Groupedradiobutton-BiQpcjJG.js";import"./index-RYns6xqu.js";import"./iframe-DyWSG_Xz.js";import"../sb-preview/runtime.js";import"./index-C6Iyy7v6.js";import"./index-D-8MO0q_.js";import"./index-DrFu-skq.js";import"./Radiobutton-PghXUi5O.js";function o(t){const n={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Components/RadioButtonGroup",component:l}),`
`,e.jsx(n.h1,{id:"radiobuttongroup-component-documentation",children:"RadioButtonGroup Component Documentation"}),`
`,e.jsx(n.h2,{id:"overview",children:"Overview"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"RadioButtonGroup"})," component is used to group multiple ",e.jsx(n.code,{children:"RadioButton"})," components together. It allows the user to select a single option from a list of radio buttons. The component handles the selection logic and passes the selected value to the parent component via the ",e.jsx(n.code,{children:"onChange"})," handler."]}),`
`,e.jsx(n.h2,{id:"basic-example",children:"Basic Example"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import RadioButtonGroup from './RadioButtonGroup';\r
import { useState } from 'react';\r
\r
function App() {\r
  const [selectedValue, setSelectedValue] = useState('');\r
\r
  const handleChange = (value: string) => {\r
    setSelectedValue(value);\r
  };\r
\r
  const options = [\r
    { id: 'option1', label: 'Option 1', value: 'option1', checked: selectedValue === 'option1' },\r
    { id: 'option2', label: 'Option 2', value: 'option2', checked: selectedValue === 'option2' },\r
    { id: 'option3', label: 'Option 3', value: 'option3', checked: selectedValue === 'option3' },\r
  ];\r
\r
  return (\r
    <div>\r
      <RadioButtonGroup name="example" options={options} onChange={handleChange} />\r
    </div>\r
  );\r
}\r
\r
export default App;
`})}),`
`,e.jsxs(n.p,{children:["In this example, the ",e.jsx(n.code,{children:"RadioButtonGroup"})," component is used with an array of options. The ",e.jsx(n.code,{children:"selectedValue"})," state controls which radio button is selected."]}),`
`,e.jsx(n.h2,{id:"radiobuttongroup-properties",children:"RadioButtonGroup Properties"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"RadioButtonGroup"})," component accepts the following props:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"name"})," (string): The name for the group of radio buttons. All radio buttons in the group must have the same name (required)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"options"})," (array): An array of objects representing the individual radio buttons. Each object should contain:",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"id"})," (string): A unique identifier for the radio button (required)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"label"})," (string): The label text displayed next to the radio button (required)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"value"})," (string): The value that will be sent when the radio button is selected (required)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"checked"})," (boolean): A boolean indicating whether the radio button is selected (required)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"disabled"})," (boolean): Optionally, disable the radio button (optional)."]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"onChange"})," (function): A callback function triggered when a radio button is selected. It receives the selected value as an argument (required)."]}),`
`]}),`
`,e.jsx(n.h2,{id:"example-with-disabled-radiobutton",children:"Example with Disabled RadioButton"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import RadioButtonGroup from './RadioButtonGroup';\r
import { useState } from 'react';\r
\r
function App() {\r
  const [selectedValue, setSelectedValue] = useState('');\r
\r
  const handleChange = (value: string) => {\r
    setSelectedValue(value);\r
  };\r
\r
  const options = [\r
    { id: 'option1', label: 'Option 1', value: 'option1', checked: selectedValue === 'option1' },\r
    { id: 'option2', label: 'Option 2', value: 'option2', checked: selectedValue === 'option2', disabled: true },\r
    { id: 'option3', label: 'Option 3', value: 'option3', checked: selectedValue === 'option3' },\r
  ];\r
\r
  return (\r
    <div>\r
      <RadioButtonGroup name="example" options={options} onChange={handleChange} />\r
    </div>\r
  );\r
}\r
\r
export default App;
`})}),`
`,e.jsx(n.p,{children:"In this example, the second radio button (Option 2) is disabled, preventing it from being selected."}),`
`,e.jsx(n.h1,{id:"customization",children:"Customization"}),`
`,e.jsx(n.p,{children:"The RadioButtonGroup component can be customized in the following ways:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"name"}),": Use a unique name to group the radio buttons. All radio buttons in the group will share the same name, allowing only one selection at a time."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"options"}),": Provide an array of objects representing the individual radio buttons. Each object can have the following properties:",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"id"}),": A unique ID for each radio button."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"label"}),": The label text displayed next to the radio button."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"value"}),": The value that will be selected when the radio button is checked."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"checked"}),": A boolean indicating whether the radio button is selected."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"disabled"}),": Optionally disable the radio button."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"onChange"}),": Pass a function that handles the value change when a radio button is selected."]}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(n.h2,{id:"notes",children:"Notes"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"The RadioButtonGroup component relies on the RadioButton component for each individual button in the group."}),`
`,e.jsx(n.li,{children:"Only one radio button in a group can be selected at a time, as determined by the shared name prop."}),`
`,e.jsxs(n.li,{children:["The ",e.jsx(n.code,{children:"onChange"})," function receives the selected value when a radio button is selected, allowing the parent component to update its state accordingly."]}),`
`]})]})}function v(t={}){const{wrapper:n}={...i(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(o,{...t})}):o(t)}export{v as default};
