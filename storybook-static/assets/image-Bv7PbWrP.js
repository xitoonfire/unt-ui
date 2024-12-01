import{j as e}from"./jsx-runtime-DEdD30eg.js";import{useMDXComponents as i}from"./index-CcnH5Kt0.js";import"./chunk-HLWAVYOI-Cw-bIfa7.js";import{ae as t}from"./index-Ck3KPMy2.js";import{I as o}from"./Image-DDFFsn1a.js";import"./index-RYns6xqu.js";import"./iframe-DyWSG_Xz.js";import"../sb-preview/runtime.js";import"./index-C6Iyy7v6.js";import"./index-D-8MO0q_.js";import"./index-DrFu-skq.js";function s(r){const n={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{title:"Utility/Image",component:o}),`
`,e.jsx(n.h1,{id:"image-component-documentation",children:"Image Component Documentation"}),`
`,e.jsx(n.h2,{id:"overview",children:"Overview"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"Image"})," component provides a flexible and customizable way to display images. You can adjust the size, appearance, and additional styles such as borders, shadows, and rounded corners. This component leverages Tailwind CSS for quick styling adjustments."]}),`
`,e.jsx(n.h2,{id:"basic-example",children:"Basic Example"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import Image from './Image';\r
\r
function App() {\r
  return (\r
    <div>\r
      <Image\r
        src="https://via.placeholder.com/150"\r
        alt="Placeholder Image"\r
        width="150"\r
        height="150"\r
      />\r
    </div>\r
  );\r
}\r
\r
export default App;
`})}),`
`,e.jsx(n.p,{children:"This example displays a simple image with a specified width and height."}),`
`,e.jsx(n.h2,{id:"image-properties",children:"Image Properties"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"Image"})," component accepts the following props:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"src"}),": The source URL of the image (required)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"alt"}),": The alt text for the image (required)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"width"}),": The width of the image. Can be set to any valid CSS value (default is 'auto')."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"height"}),": The height of the image. Can be set to any valid CSS value (default is 'auto')."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"rounded"}),": If set to true, the image will have rounded corners. Default is false."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"shadow"}),": If set to true, the image will have a shadow effect. Default is false."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"border"}),": If set to true, the image will have a border. Default is false."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"className"}),": Additional custom classes to apply to the image."]}),`
`]}),`
`,e.jsx(n.h2,{id:"example-with-custom-styles",children:"Example with Custom Styles"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import Image from './Image';\r
\r
function App() {\r
  return (\r
    <div>\r
      <Image\r
        src="https://via.placeholder.com/300"\r
        alt="Placeholder Image"\r
        width="300"\r
        height="300"\r
        rounded\r
        shadow\r
        border\r
        className="mt-4"\r
      />\r
    </div>\r
  );\r
}\r
\r
export default App;
`})}),`
`,e.jsxs(n.p,{children:["In this example, the ",e.jsx(n.code,{children:"Image"})," component is styled with rounded corners, a shadow, and a border, along with some additional margin using the ",e.jsx(n.code,{children:"className"})," prop."]}),`
`,e.jsx(n.h2,{id:"customization",children:"Customization"}),`
`,e.jsx(n.p,{children:"You can customize the appearance of the image using the following props:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"width"}),": Set a specific width for the image (e.g., 150px, %, auto)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"height"}),": Set a specific height for the image (e.g., 150px, %, auto)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"rounded"}),": Set to true for rounded corners."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"shadow"}),": Set to true to apply a shadow effect."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"border"}),": Set to true to apply a border around the image."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"className"}),": Add any additional CSS classes to style the image further."]}),`
`]}),`
`,e.jsx(n.h2,{id:"notes",children:"Notes"}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["The component supports smooth transitions for visual effects like shadows and borders. Tailwind CSS utilities like ",e.jsx(n.code,{children:"rounded-lg"}),", ",e.jsx(n.code,{children:"shadow-md"}),", and ",e.jsx(n.code,{children:"border-gray-300"})," are used for styling, making it easy to modify the image's appearance with Tailwind's utility-first approach."]}),`
`]})]})}function f(r={}){const{wrapper:n}={...i(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(s,{...r})}):s(r)}export{f as default};
