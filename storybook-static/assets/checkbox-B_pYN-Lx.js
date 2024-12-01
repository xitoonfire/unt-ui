import{j as e}from"./jsx-runtime-DEdD30eg.js";import{useMDXComponents as t}from"./index-CcnH5Kt0.js";import"./chunk-HLWAVYOI-Cw-bIfa7.js";import{ae as r}from"./index-Ck3KPMy2.js";import{C as s}from"./Checkbox-DuG8wt5J.js";import"./index-RYns6xqu.js";import"./iframe-DyWSG_Xz.js";import"../sb-preview/runtime.js";import"./index-C6Iyy7v6.js";import"./index-D-8MO0q_.js";import"./index-DrFu-skq.js";function o(c){const n={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...t(),...c.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Components/Checkbox",component:s}),`
`,e.jsx(n.h1,{id:"checkbox-component-documentation",children:"Checkbox Component Documentation"}),`
`,e.jsx(n.h2,{id:"overview",children:"Overview"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"Checkbox"})," component is a simple, customizable checkbox used to select or deselect options. It is commonly used in forms or settings where users can choose from multiple options. This component supports the ",e.jsx(n.code,{children:"disabled"})," state and is styled with Tailwind CSS."]}),`
`,e.jsx(n.h2,{id:"basic-example",children:"Basic Example"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import React, { useState } from 'react';\r
import Checkbox from './Checkbox';\r
\r
function App() {\r
  const [isChecked, setIsChecked] = useState(false);\r
\r
  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {\r
    setIsChecked(event.target.checked);\r
  };\r
\r
  return (\r
    <div>\r
      <Checkbox\r
        id="checkbox1"\r
        label="Accept terms and conditions"\r
        checked={isChecked}\r
        onChange={handleCheckboxChange}\r
      />\r
    </div>\r
  );\r
}\r
\r
export default App;
`})}),`
`,e.jsx(n.h2,{id:"checkbox-properties",children:"Checkbox Properties"}),`
`,e.jsx(n.p,{children:"The Checkbox component accepts the following props:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"id"}),": The unique identifier for the checkbox element."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"label"}),": The text label displayed next to the checkbox."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"checked"}),": A boolean indicating whether the checkbox is checked or not."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"onChange"}),": A function that handles the change event when the checkbox is toggled."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"disabled"}),": A boolean that, when true, disables the checkbox and prevents user interaction."]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<Checkbox\r
  id="checkbox1"\r
  label="Accept terms and conditions"\r
  checked={isChecked}\r
  onChange={handleCheckboxChange}\r
/>
`})}),`
`,e.jsx(n.h2,{id:"disabled-checkbox",children:"Disabled Checkbox"}),`
`,e.jsxs(n.p,{children:["You can disable the checkbox by passing the ",e.jsx(n.code,{children:"disabled"})," prop:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<Checkbox\r
  id="checkbox1"\r
  label="Accept terms and conditions"\r
  checked={isChecked}\r
  onChange={handleCheckboxChange}\r
  disabled\r
/>
`})})]})}function j(c={}){const{wrapper:n}={...t(),...c.components};return n?e.jsx(n,{...c,children:e.jsx(o,{...c})}):o(c)}export{j as default};
