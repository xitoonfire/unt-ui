import{j as e}from"./jsx-runtime-DEdD30eg.js";import{useMDXComponents as s}from"./index-CcnH5Kt0.js";import"./chunk-HLWAVYOI-Cw-bIfa7.js";import{ae as r}from"./index-Ck3KPMy2.js";import{C as t}from"./Groupedcheckbox-C0pREd6d.js";import"./index-RYns6xqu.js";import"./iframe-DyWSG_Xz.js";import"../sb-preview/runtime.js";import"./index-C6Iyy7v6.js";import"./index-D-8MO0q_.js";import"./index-DrFu-skq.js";import"./Checkbox-DuG8wt5J.js";function o(n){const c={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...s(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Components/CheckboxGroup",component:t}),`
`,e.jsx(c.h1,{id:"checkbox-group-component-documentation",children:"Checkbox Group Component Documentation"}),`
`,e.jsx(c.h2,{id:"overview",children:"Overview"}),`
`,e.jsxs(c.p,{children:["The ",e.jsx(c.code,{children:"CheckboxGroup"})," component is used to group multiple checkboxes together, allowing users to select multiple options at once. It uses the ",e.jsx(c.code,{children:"Checkbox"})," component for each individual option and handles the selection state and changes for all checkboxes in the group. It is useful for situations where users need to select multiple items, such as preferences or settings."]}),`
`,e.jsx(c.h2,{id:"basic-example",children:"Basic Example"}),`
`,e.jsx(c.pre,{children:e.jsx(c.code,{className:"language-tsx",children:`import React, { useState } from 'react';\r
import CheckboxGroup from './CheckboxGroup';\r
\r
function App() {\r
  const [selectedCheckboxes, setSelectedCheckboxes] = useState<string[]>([]);\r
\r
  const handleCheckboxChange = (id: string) => {\r
    setSelectedCheckboxes(prevState => {\r
      if (prevState.includes(id)) {\r
        return prevState.filter(item => item !== id);\r
      } else {\r
        return [...prevState, id];\r
      }\r
    });\r
  };\r
\r
  const checkboxes = [\r
    { id: 'checkbox1', label: 'Option 1', checked: selectedCheckboxes.includes('checkbox1') },\r
    { id: 'checkbox2', label: 'Option 2', checked: selectedCheckboxes.includes('checkbox2') },\r
    { id: 'checkbox3', label: 'Option 3', checked: selectedCheckboxes.includes('checkbox3') },\r
  ];\r
\r
  return (\r
    <div>\r
      <CheckboxGroup checkboxes={checkboxes} onChange={handleCheckboxChange} />\r
    </div>\r
  );\r
}\r
\r
export default App;
`})}),`
`,e.jsx(c.h2,{id:"checkboxgroup-properties",children:"CheckboxGroup Properties"}),`
`,e.jsx(c.p,{children:"The CheckboxGroup component accepts the following props:"}),`
`,e.jsxs(c.ul,{children:[`
`,e.jsxs(c.li,{children:[e.jsx(c.code,{children:"checkboxes"}),": An array of objects, each representing a checkbox with the following properties:",`
`,e.jsxs(c.ul,{children:[`
`,e.jsxs(c.li,{children:[e.jsx(c.code,{children:"id"}),": The unique identifier for the checkbox."]}),`
`,e.jsxs(c.li,{children:[e.jsx(c.code,{children:"label"}),": The label text for the checkbox."]}),`
`,e.jsxs(c.li,{children:[e.jsx(c.code,{children:"checked"}),": A boolean indicating whether the checkbox is checked."]}),`
`,e.jsxs(c.li,{children:[e.jsx(c.code,{children:"disabled"}),": (Optional) A boolean to disable the checkbox."]}),`
`,e.jsxs(c.li,{children:[e.jsx(c.code,{children:"onChange"}),": A function that is called when a checkbox is toggled. It receives the id of the checkbox as an argument."]}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(c.pre,{children:e.jsx(c.code,{className:"language-tsx",children:`const checkboxes = [\r
  { id: 'checkbox1', label: 'Option 1', checked: selectedCheckboxes.includes('checkbox1') },\r
  { id: 'checkbox2', label: 'Option 2', checked: selectedCheckboxes.includes('checkbox2') },\r
  { id: 'checkbox3', label: 'Option 3', checked: selectedCheckboxes.includes('checkbox3') },\r
];\r
\r
<CheckboxGroup checkboxes={checkboxes} onChange={handleCheckboxChange} />
`})}),`
`,e.jsx(c.h2,{id:"disabled-state",children:"Disabled State"}),`
`,e.jsx(c.p,{children:"Each checkbox within the group can be disabled individually by passing the disabled prop:"}),`
`,e.jsx(c.pre,{children:e.jsx(c.code,{className:"language-tsx",children:`const checkboxes = [\r
  { id: 'checkbox1', label: 'Option 1', checked: selectedCheckboxes.includes('checkbox1') },\r
  { id: 'checkbox2', label: 'Option 2', checked: selectedCheckboxes.includes('checkbox2'), disabled: true },\r
  { id: 'checkbox3', label: 'Option 3', checked: selectedCheckboxes.includes('checkbox3') },\r
];\r
\r
<CheckboxGroup checkboxes={checkboxes} onChange={handleCheckboxChange} />
`})})]})}function j(n={}){const{wrapper:c}={...s(),...n.components};return c?e.jsx(c,{...n,children:e.jsx(o,{...n})}):o(n)}export{j as default};
