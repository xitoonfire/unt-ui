import{j as a}from"./jsx-runtime-DEdD30eg.js";import{useMDXComponents as s}from"./index-CcnH5Kt0.js";import"./chunk-HLWAVYOI-Cw-bIfa7.js";import{ae as i}from"./index-Ck3KPMy2.js";import{A as n}from"./Avatar-9bKVqnjO.js";import"./index-RYns6xqu.js";import"./iframe-DyWSG_Xz.js";import"../sb-preview/runtime.js";import"./index-C6Iyy7v6.js";import"./index-D-8MO0q_.js";import"./index-DrFu-skq.js";function t(e){const r={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...s(),...e.components};return a.jsxs(a.Fragment,{children:[a.jsx(i,{title:"Utility/Avatar",component:n}),`
`,a.jsx(r.h1,{id:"avatar-component-documentation",children:"Avatar Component Documentation"}),`
`,a.jsx(r.h2,{id:"overview",children:"Overview"}),`
`,a.jsxs(r.p,{children:["The ",a.jsx(r.code,{children:"Avatar"})," component is a customizable and flexible component used to display user profile images or initials. It supports various sizes and shapes, including circles and squares, and can display an image or initials. The component is built with TypeScript and uses Tailwind CSS for styling."]}),`
`,a.jsx(r.h2,{id:"basic-example",children:"Basic Example"}),`
`,a.jsx(r.pre,{children:a.jsx(r.code,{className:"language-tsx",children:`import React from "react";\r
import Avatar from "./Avatar";\r
\r
function App() {\r
  return (\r
    <div>\r
      <Avatar src="https://randomuser.me/api/portraits/women/1.jpg" alt="User Avatar" />\r
      <Avatar initials="AB" size="large" shape="square" bgColor="#4CAF50" />\r
      <Avatar initials="CD" size="small" bgColor="#FF5722" />\r
    </div>\r
  );\r
}\r
\r
export default App;
`})}),`
`,a.jsx(r.h2,{id:"avatar-sizes",children:"Avatar Sizes"}),`
`,a.jsx(r.p,{children:"The Avatar component supports different sizes to adjust the avatar's display. The available sizes are:"}),`
`,a.jsxs(r.ul,{children:[`
`,a.jsx(r.li,{children:"Small: A small avatar."}),`
`,a.jsx(r.li,{children:"Medium: A medium-sized avatar (default size)."}),`
`,a.jsx(r.li,{children:"Large: A larger avatar."}),`
`]}),`
`,a.jsx(r.pre,{children:a.jsx(r.code,{className:"language-tsx",children:`<Avatar src="https://randomuser.me/api/portraits/men/1.jpg" size="small" alt="User Avatar" />\r
<Avatar src="https://randomuser.me/api/portraits/men/2.jpg" size="medium" alt="User Avatar" />\r
<Avatar src="https://randomuser.me/api/portraits/men/3.jpg" size="large" alt="User Avatar" />
`})}),`
`,a.jsx(r.h2,{id:"avatar-shapes",children:"Avatar Shapes"}),`
`,a.jsx(r.p,{children:"The Avatar component can have different shapes. The available shapes are:"}),`
`,a.jsxs(r.ul,{children:[`
`,a.jsx(r.li,{children:"Circle: A round avatar (default shape)."}),`
`,a.jsx(r.li,{children:"Square: A square avatar."}),`
`]}),`
`,a.jsx(r.pre,{children:a.jsx(r.code,{className:"language-tsx",children:`<Avatar src="https://randomuser.me/api/portraits/men/1.jpg" shape="circle" alt="User Avatar" />\r
<Avatar src="https://randomuser.me/api/portraits/men/2.jpg" shape="square" alt="User Avatar" />
`})}),`
`,a.jsx(r.h2,{id:"avatar-with-initials",children:"Avatar with Initials"}),`
`,a.jsx(r.p,{children:"If no image is provided, the Avatar component will display initials inside the avatar."}),`
`,a.jsx(r.pre,{children:a.jsx(r.code,{className:"language-tsx",children:`<Avatar initials="AB" size="medium" />\r
<Avatar initials="CD" size="large" shape="square" bgColor="#4CAF50" />
`})}),`
`,a.jsx(r.h2,{id:"avatar-with-custom-background-color",children:"Avatar with Custom Background Color"}),`
`,a.jsx(r.p,{children:"You can set a custom background color for the avatar by passing a valid CSS color to the bgColor prop."}),`
`,a.jsx(r.pre,{children:a.jsx(r.code,{className:"language-tsx",children:`<Avatar initials="XY" size="small" bgColor="#FF5722" />\r
<Avatar src="https://randomuser.me/api/portraits/women/1.jpg" size="medium" alt="User Avatar" />
`})}),`
`,a.jsx(r.h2,{id:"avatar-with-image",children:"Avatar with Image"}),`
`,a.jsx(r.p,{children:"If the src prop is provided, the component will display the image inside the avatar; otherwise, it will display the initials."}),`
`,a.jsx(r.pre,{children:a.jsx(r.code,{className:"language-tsx",children:`<Avatar src="https://randomuser.me/api/portraits/men/1.jpg" alt="User Avatar" />\r
<Avatar src="https://randomuser.me/api/portraits/men/2.jpg" alt="User Avatar" shape="square" size="large" />
`})})]})}function A(e={}){const{wrapper:r}={...s(),...e.components};return r?a.jsx(r,{...e,children:a.jsx(t,{...e})}):t(e)}export{A as default};
