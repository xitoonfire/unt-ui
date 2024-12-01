import{j as e}from"./jsx-runtime-DEdD30eg.js";import{useMDXComponents as t}from"./index-CcnH5Kt0.js";import"./chunk-HLWAVYOI-Cw-bIfa7.js";import{ae as l}from"./index-Ck3KPMy2.js";import{A as i}from"./Alert-DcEoe-j-.js";import"./index-RYns6xqu.js";import"./iframe-DyWSG_Xz.js";import"../sb-preview/runtime.js";import"./index-C6Iyy7v6.js";import"./index-D-8MO0q_.js";import"./index-DrFu-skq.js";function n(s){const r={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...t(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Feedback/Alert",component:i}),`
`,e.jsx(r.h1,{id:"alert-component-documentation",children:"Alert Component Documentation"}),`
`,e.jsx(r.h2,{id:"overview",children:"Overview"}),`
`,e.jsxs(r.p,{children:["The ",e.jsx(r.code,{children:"Alert"})," component is a simple and customizable alert box used to display messages to the user. It supports multiple types of alerts, such as success, error, warning, and info. The component can also be dismissible, allowing users to close the alert, and is built with TypeScript and Tailwind CSS for styling."]}),`
`,e.jsx(r.h2,{id:"basic-example",children:"Basic Example"}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-tsx",children:`import React, { useState } from "react";\r
import Alert from "./Alert";\r
\r
function App() {\r
  const [isAlertVisible, setAlertVisible] = useState(true);\r
\r
  const closeAlert = () => {\r
    setAlertVisible(false);\r
  };\r
\r
  return (\r
    <div>\r
      {isAlertVisible && (\r
        <Alert type="success" dismissible onClose={closeAlert}>\r
          This is a success message!\r
        </Alert>\r
      )}\r
      {isAlertVisible && (\r
        <Alert type="error" dismissible onClose={closeAlert}>\r
          This is an error message!\r
        </Alert>\r
      )}\r
    </div>\r
  );\r
}\r
\r
export default App;
`})}),`
`,e.jsx(r.h2,{id:"alert-types",children:"Alert Types"}),`
`,e.jsx(r.p,{children:"The Alert component supports the following types, which define the appearance and color scheme of the alert:"}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsx(r.li,{children:"Success: A green alert indicating success."}),`
`,e.jsx(r.li,{children:"Error: A red alert indicating an error."}),`
`,e.jsx(r.li,{children:"Warning: A yellow alert indicating a warning."}),`
`,e.jsx(r.li,{children:"Info: A blue alert for general information."}),`
`]}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-tsx",children:`<Alert type="success">Success alert message</Alert>\r
<Alert type="error">Error alert message</Alert>\r
<Alert type="warning">Warning alert message</Alert>\r
<Alert type="info">Info alert message</Alert>
`})}),`
`,e.jsx(r.h2,{id:"dismissible-alerts",children:"Dismissible Alerts"}),`
`,e.jsx(r.p,{children:"The Alert component can be made dismissible by setting the dismissible prop to true. When dismissible, a close button (×) will appear, allowing the user to close the alert."}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-tsx",children:`<Alert type="success" dismissible onClose={() => console.log("Alert closed")}>\r
  Dismissible success alert\r
</Alert>\r
<Alert type="error" dismissible onClose={() => console.log("Alert closed")}>\r
  Dismissible error alert\r
</Alert>
`})})]})}function b(s={}){const{wrapper:r}={...t(),...s.components};return r?e.jsx(r,{...s,children:e.jsx(n,{...s})}):n(s)}export{b as default};
