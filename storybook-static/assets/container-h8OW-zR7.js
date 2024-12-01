import{j as n}from"./jsx-runtime-DEdD30eg.js";import{useMDXComponents as r}from"./index-CcnH5Kt0.js";import"./chunk-HLWAVYOI-Cw-bIfa7.js";import{ae as o}from"./index-Ck3KPMy2.js";import{C as s}from"./Container-DUKs-Ggu.js";import"./index-RYns6xqu.js";import"./iframe-DyWSG_Xz.js";import"../sb-preview/runtime.js";import"./index-C6Iyy7v6.js";import"./index-D-8MO0q_.js";import"./index-DrFu-skq.js";function i(t){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(o,{title:"Layout/Container",component:s}),`
`,n.jsx(e.h1,{id:"container-component-documentation",children:"Container Component Documentation"}),`
`,n.jsx(e.h2,{id:"overview",children:"Overview"}),`
`,n.jsxs(e.p,{children:["The ",n.jsx(e.code,{children:"Container"})," component is a flexible wrapper that allows you to constrain the width of its content while providing options to center the content, apply padding, and display boundaries around the container. It's designed to help you build responsive layouts that adapt to various screen sizes."]}),`
`,n.jsx(e.h2,{id:"basic-example",children:"Basic Example"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import Container from "./Container";\r
\r
function App() {\r
  return (\r
    <Container maxWidth="lg" center padding showBoundary>\r
      <div>Your content goes here</div>\r
    </Container>\r
  );\r
}\r
\r
export default App;
`})}),`
`,n.jsx(e.p,{children:"In this example, the Container component limits the content to a maximum width of lg, centers the content, applies padding, and shows a boundary around the container."}),`
`,n.jsx(e.h2,{id:"container-properties",children:"Container Properties"}),`
`,n.jsx(e.p,{children:"The Container component accepts the following props:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"children"}),": The content or elements to be wrapped inside the container (required)."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"maxWidth"}),": Defines the maximum width of the container. Possible values:",`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"'sm'"})," - Small width."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"'md'"})," - Medium width."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"'lg'"})," - Large width."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"'xl'"})," - Extra large width."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"'2xl'"})," - Double extra large width."]}),`
`,n.jsxs(e.li,{children:["Default value: ",n.jsx(e.code,{children:"'xl'"}),"."]}),`
`]}),`
`]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"center"}),": If true, the content inside the container is centered horizontally. Default value: false."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"padding"}),": If true, padding is applied to the left and right of the container. This ensures the content does not touch the edges. Default value: true."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"showBoundary"}),": If true, a border and background color are applied to the container, creating a visible boundary around the content. Default value: false."]}),`
`]}),`
`,n.jsx(e.h2,{id:"example-usage",children:"Example Usage"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`<Container maxWidth="2xl" center={true} padding={false} showBoundary={true}>\r
  <div>This container has a boundary, no padding, and is centered.</div>\r
</Container>
`})}),`
`,n.jsx(e.p,{children:"In this example, the container has a maximum width of 2xl, is centered, has no padding, and shows a boundary around it."})]})}function f(t={}){const{wrapper:e}={...r(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(i,{...t})}):i(t)}export{f as default};
