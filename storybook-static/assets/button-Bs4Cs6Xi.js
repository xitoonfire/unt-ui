import{j as n}from"./jsx-runtime-DEdD30eg.js";import{useMDXComponents as l}from"./index-CcnH5Kt0.js";import"./chunk-HLWAVYOI-Cw-bIfa7.js";import{ae as r}from"./index-Ck3KPMy2.js";import{B as s}from"./Button-BAus84kM.js";import"./index-RYns6xqu.js";import"./iframe-DyWSG_Xz.js";import"../sb-preview/runtime.js";import"./index-C6Iyy7v6.js";import"./index-D-8MO0q_.js";import"./index-DrFu-skq.js";function i(t){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...l(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(r,{title:"Components/Button",component:s}),`
`,n.jsx(e.h1,{id:"button-component-documentation",children:"Button Component Documentation"}),`
`,n.jsx(e.h2,{id:"overview",children:"Overview"}),`
`,n.jsxs(e.p,{children:["The ",n.jsx(e.code,{children:"Button"})," component is a flexible and customizable button used to trigger actions within your application. It allows various styling options through props like ",n.jsx(e.code,{children:"variant"}),", ",n.jsx(e.code,{children:"size"}),", and ",n.jsx(e.code,{children:"shape"}),". The component supports multiple button states, including a disabled state, and is built with TypeScript and Tailwind CSS for styling."]}),`
`,n.jsx(e.h2,{id:"basic-example",children:"Basic Example"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import React from "react";\r
import Button from "./Button";\r
\r
function App() {\r
  const handleClick = () => {\r
    alert("Button clicked!");\r
  };\r
\r
  return (\r
    <div>\r
      <Button label="Primary Button" onClick={handleClick} />\r
      <Button label="Success Button" variant="success" onClick={handleClick} />\r
      <Button label="Disabled Button" variant="danger" disabled onClick={handleClick} />\r
    </div>\r
  );\r
}\r
\r
export default App;
`})}),`
`,n.jsx(e.h2,{id:"button-variants",children:"Button Variants"}),`
`,n.jsx(e.p,{children:"The Button component supports various variants, which define the button's color and style. The available variants are:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Primary:"})," A standard button (default style)."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Success:"})," A green button indicating success."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Danger:"})," A red button indicating danger."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Warning:"})," A yellow button for warnings."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Secondary:"})," A gray button for secondary actions."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Link:"})," A text-based button styled like a link."]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`<Button label="Primary" variant="primary" onClick={handleClick} />\r
<Button label="Success" variant="success" onClick={handleClick} />\r
<Button label="Danger" variant="danger" onClick={handleClick} />\r
<Button label="Warning" variant="warning" onClick={handleClick} />\r
<Button label="Link" variant="link" onClick={handleClick} />
`})}),`
`,n.jsx(e.h2,{id:"button-sizes",children:"Button Sizes"}),`
`,n.jsx(e.p,{children:"The Button component also supports different sizes for the button. The available sizes are:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Small:"})," A smaller button."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Medium:"})," A medium-sized button (default size)."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Large:"})," A larger button."]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`<Button label="Small Button" size="small" onClick={handleClick} />\r
<Button label="Medium Button" size="medium" onClick={handleClick} />\r
<Button label="Large Button" size="large" onClick={handleClick} />
`})}),`
`,n.jsx(e.h2,{id:"disabled-state",children:"Disabled State"}),`
`,n.jsx(e.p,{children:"The Button component can be disabled by setting the disabled prop to true. When disabled, the button will have reduced opacity and prevent any click events."}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`<Button label="Disabled Button" disabled onClick={handleClick} />
`})})]})}function g(t={}){const{wrapper:e}={...l(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(i,{...t})}):i(t)}export{g as default};
