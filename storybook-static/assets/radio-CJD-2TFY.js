import{j as e}from"./jsx-runtime-DEdD30eg.js";import{useMDXComponents as i}from"./index-CcnH5Kt0.js";import"./chunk-HLWAVYOI-Cw-bIfa7.js";import{ae as r}from"./index-Ck3KPMy2.js";import{R as a}from"./Radiobutton-PghXUi5O.js";import"./index-RYns6xqu.js";import"./iframe-DyWSG_Xz.js";import"../sb-preview/runtime.js";import"./index-C6Iyy7v6.js";import"./index-D-8MO0q_.js";import"./index-DrFu-skq.js";function o(t){const n={br:"br",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Components/RadioButton",component:a}),`
`,e.jsx(n.h1,{id:"radiobutton-component-documentation",children:"RadioButton Component Documentation"}),`
`,e.jsx(n.h2,{id:"overview",children:"Overview"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"RadioButton"})," component allows users to select a single option from a set of mutually exclusive choices. It is designed to be used in forms or scenarios where only one choice can be selected at a time from a group of radio buttons."]}),`
`,e.jsx(n.h2,{id:"basic-example",children:"Basic Example"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import RadioButton from './RadioButton';\r
import { useState } from 'react';\r
\r
function App() {\r
  const [selectedValue, setSelectedValue] = useState('');\r
\r
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {\r
    setSelectedValue(e.target.value);\r
  };\r
\r
  return (\r
    <div>\r
      <RadioButton\r
        id="option1"\r
        label="Option 1"\r
        name="example"\r
        value="option1"\r
        checked={selectedValue === 'option1'}\r
        onChange={handleChange}\r
      />\r
      <RadioButton\r
        id="option2"\r
        label="Option 2"\r
        name="example"\r
        value="option2"\r
        checked={selectedValue === 'option2'}\r
        onChange={handleChange}\r
      />\r
    </div>\r
  );\r
}\r
\r
export default App;
`})}),`
`,e.jsx(n.p,{children:"In this example, two RadioButton components are used with a shared name (example). The checked state is controlled based on the selectedValue state."}),`
`,e.jsx(n.h2,{id:"radiobutton-properties",children:"RadioButton Properties"}),`
`,e.jsx(n.p,{children:"The RadioButton component accepts the following props:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"id"})," (string): A unique identifier for the radio button (required)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"label"})," (string): The label text displayed next to the radio button (required)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"name"})," (string): The name for the group of radio buttons. All radio buttons with the same name are considered part of the same group (required)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"value"})," (string): The value that will be sent when the radio button is selected (required)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"checked"})," (boolean): A boolean indicating whether the radio button is selected (required)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"onChange"})," (function): A callback function that is triggered when the radio button's state changes. It receives the change event as an argument (required)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"disabled"})," (boolean): Optionally, disable the radio button (optional)."]}),`
`]}),`
`,e.jsx(n.h2,{id:"example-with-disabled-radiobutton",children:"Example with Disabled RadioButton"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import RadioButton from './RadioButton';\r
import { useState } from 'react';\r
\r
function App() {\r
  const [selectedValue, setSelectedValue] = useState('');\r
\r
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {\r
    setSelectedValue(e.target.value);\r
  };\r
\r
  return (\r
    <div>\r
      <RadioButton\r
        id="option1"\r
        label="Option 1"\r
        name="example"\r
        value="option1"\r
        checked={selectedValue === 'option1'}\r
        onChange={handleChange}\r
      />\r
      <RadioButton\r
        id="option2"\r
        label="Option 2"\r
        name="example"\r
        value="option2"\r
        checked={selectedValue === 'option2'}\r
        onChange={handleChange}\r
        disabled\r
      />\r
    </div>\r
  );\r
}\r
\r
export default App;
`})}),`
`,e.jsx(n.p,{children:"In this example, the second RadioButton is disabled, preventing it from being selected."}),`
`,e.jsx(n.h1,{id:"customization",children:"Customization"}),`
`,e.jsx(n.p,{children:"The RadioButton component can be customized in the following ways:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"id"}),": Use a unique ID for each radio button in a group."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"label"}),": Customize the label text."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"name"}),": Group multiple radio buttons by assigning them the same name value."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"value"}),": Define the value for each radio button."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"checked"}),": Bind the checked state to a variable or state."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"onChange"}),": Pass a function to handle state changes when a radio button is selected."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"disabled"}),": Optionally, disable the radio button."]}),`
`]}),`
`,e.jsx(n.h2,{id:"notes",children:"Notes"}),`
`,e.jsxs(n.p,{children:["The RadioButton component is designed to be used in groups, where only one option can be selected at a time.",e.jsx(n.br,{}),`
`,"It is important to use the same name for radio buttons in the same group to ensure only one selection is possible.",e.jsx(n.br,{}),`
`,"The ",e.jsx(n.code,{children:"onChange"})," function is required to handle the state change when the user selects a radio button."]})]})}function b(t={}){const{wrapper:n}={...i(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(o,{...t})}):o(t)}export{b as default};
