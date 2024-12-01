import{j as e}from"./jsx-runtime-DEdD30eg.js";import{useMDXComponents as o}from"./index-CcnH5Kt0.js";import"./chunk-HLWAVYOI-Cw-bIfa7.js";import{ae as r}from"./index-Ck3KPMy2.js";import{T as a}from"./Toast-7uJ0vWJb.js";import"./index-RYns6xqu.js";import"./iframe-DyWSG_Xz.js";import"../sb-preview/runtime.js";import"./index-C6Iyy7v6.js";import"./index-D-8MO0q_.js";import"./index-DrFu-skq.js";function t(n){const s={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Feedback/Toast",component:a}),`
`,e.jsx(s.h1,{id:"toast-component-documentation",children:"Toast Component Documentation"}),`
`,e.jsx(s.h2,{id:"overview",children:"Overview"}),`
`,e.jsxs(s.p,{children:["The ",e.jsx(s.code,{children:"Toast"})," component is used to display temporary messages or notifications, typically for success, error, warning, or informational purposes. It automatically disappears after a set duration, but can also be manually closed using the close button. This component is ideal for showing non-intrusive alerts in a user interface."]}),`
`,e.jsx(s.h2,{id:"basic-example",children:"Basic Example"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-tsx",children:`import Toast from './Toast';\r
\r
function App() {\r
  const [showToast, setShowToast] = React.useState(false);\r
\r
  const handleClose = () => {\r
    setShowToast(false);\r
  };\r
\r
  return (\r
    <div>\r
      {showToast && <Toast message="This is an info message" onClose={handleClose} />}\r
      <button onClick={() => setShowToast(true)}>Show Toast</button>\r
    </div>\r
  );\r
}\r
\r
export default App;
`})}),`
`,e.jsx(s.p,{children:"In this example, the Toast component is shown when the button is clicked, and the toast message can be closed by clicking the close button."}),`
`,e.jsx(s.h2,{id:"toast-properties",children:"Toast Properties"}),`
`,e.jsx(s.p,{children:"The Toast component accepts the following props:"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"message"})," (string): The message to display in the toast."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"type"})," ('success' | 'error' | 'warning' | 'info', optional): The type of toast. This affects the background and text color. Defaults to 'info'."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"duration"})," (number, optional): The time in milliseconds for which the toast will be displayed before it automatically disappears. Defaults to 3000 milliseconds (3 seconds)."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"onClose"})," (function, optional): A callback function that is triggered when the toast is closed, either automatically after the duration or when the close button is clicked."]}),`
`]}),`
`,e.jsx(s.h2,{id:"example-with-different-types",children:"Example with Different Types"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-tsx",children:`import Toast from './Toast';\r
\r
function App() {\r
  const [showToast, setShowToast] = React.useState(true);\r
\r
  const handleClose = () => {\r
    setShowToast(false);\r
  };\r
\r
  return (\r
    <div>\r
      {showToast && <Toast message="Success message!" type="success" onClose={handleClose} />}\r
      <Toast message="Error message!" type="error" onClose={handleClose} />\r
      <Toast message="Warning message!" type="warning" onClose={handleClose} />\r
      <Toast message="Info message!" type="info" onClose={handleClose} />\r
    </div>\r
  );\r
}\r
\r
export default App;
`})}),`
`,e.jsx(s.p,{children:"This example demonstrates how to display toasts with different types: success, error, warning, and info."}),`
`,e.jsx(s.h1,{id:"example-with-custom-duration",children:"Example with Custom Duration"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-tsx",children:`import Toast from './Toast';\r
\r
function App() {\r
  const [showToast, setShowToast] = React.useState(true);\r
\r
  const handleClose = () => {\r
    setShowToast(false);\r
  };\r
\r
  return (\r
    <div>\r
      <Toast message="This message will disappear after 5 seconds" duration={5000} onClose={handleClose} />\r
    </div>\r
  );\r
}\r
\r
export default App;
`})}),`
`,e.jsx(s.p,{children:"In this example, the toast will automatically disappear after 5 seconds, as specified by the duration prop."}),`
`,e.jsx(s.h2,{id:"custom-styling",children:"Custom Styling"}),`
`,e.jsxs(s.p,{children:["The Toast component uses Tailwind CSS classes for styling. You can override or extend the default styles by passing a custom ",e.jsx(s.code,{children:"className"})," prop."]}),`
`,e.jsx(s.p,{children:"For example:"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-tsx",children:`<Toast message="Custom styled toast!" className="text-purple-700 bg-purple-100" onClose={handleClose} />
`})}),`
`,e.jsx(s.p,{children:"This example applies a custom text and background color to the toast."}),`
`,e.jsx(s.h2,{id:"notes",children:"Notes"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Type"}),": The ",e.jsx(s.code,{children:"type"})," prop determines the style of the toast. You can choose from the following types: success, error, warning, or info. Each type has a corresponding color scheme."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Duration"}),": The ",e.jsx(s.code,{children:"duration"})," prop controls how long the toast is displayed before it disappears. If the duration is not specified, the toast will stay visible for 3 seconds by default."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Close"}),": The toast can be closed manually by clicking the close (×) button, or it will automatically close after the specified duration."]}),`
`]})]})}function T(n={}){const{wrapper:s}={...o(),...n.components};return s?e.jsx(s,{...n,children:e.jsx(t,{...n})}):t(n)}export{T as default};
