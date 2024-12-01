import{j as n}from"./jsx-runtime-DEdD30eg.js";import{useMDXComponents as r}from"./index-CcnH5Kt0.js";import"./chunk-HLWAVYOI-Cw-bIfa7.js";import{ae as s}from"./index-Ck3KPMy2.js";import{F as t}from"./Footer-CtmFmUjZ.js";import"./index-RYns6xqu.js";import"./iframe-DyWSG_Xz.js";import"../sb-preview/runtime.js";import"./index-C6Iyy7v6.js";import"./index-D-8MO0q_.js";import"./index-DrFu-skq.js";function i(e){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...r(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(s,{title:"Footer/Footer",component:t}),`
`,n.jsx(o.h1,{id:"footer-component-documentation",children:"Footer Component Documentation"}),`
`,n.jsx(o.h2,{id:"overview",children:"Overview"}),`
`,n.jsxs(o.p,{children:["The ",n.jsx(o.code,{children:"Footer"})," component provides a customizable footer for your application. It allows you to display links, social media icons, and a copyright message. This component is designed to be responsive and flexible, adapting to different screen sizes and layouts."]}),`
`,n.jsx(o.h2,{id:"basic-example",children:"Basic Example"}),`
`,n.jsx(o.pre,{children:n.jsx(o.code,{className:"language-tsx",children:`import Footer from './Footer';\r
\r
function App() {\r
  const footerLinks = [\r
    { name: 'Home', href: '/' },\r
    { name: 'About', href: '/about' },\r
    { name: 'Contact', href: '/contact' },\r
  ];\r
\r
  const socialLinks = [\r
    { name: 'Facebook', icon: <FaFacebook />, href: 'https://facebook.com' },\r
    { name: 'Twitter', icon: <FaTwitter />, href: 'https://twitter.com' },\r
  ];\r
\r
  return (\r
    <Footer\r
      links={footerLinks}\r
      socialMedia={socialLinks}\r
      copyright="My Company"\r
    />\r
  );\r
}\r
\r
export default App;
`})}),`
`,n.jsxs(o.p,{children:["In this example, the ",n.jsx(o.code,{children:"Footer"})," component displays navigation links, social media icons, and a copyright notice. The social media links use icons from a third-party library (such as Font Awesome)."]}),`
`,n.jsx(o.h2,{id:"footer-properties",children:"Footer Properties"}),`
`,n.jsxs(o.p,{children:["The ",n.jsx(o.code,{children:"Footer"})," component accepts the following props:"]}),`
`,n.jsxs(o.ul,{children:[`
`,n.jsxs(o.li,{children:[n.jsx(o.code,{children:"links"}),": An array of objects, each containing a name and href for the link."]}),`
`,n.jsxs(o.li,{children:[n.jsx(o.code,{children:"socialMedia"}),": An optional array of objects, each containing a name, icon, and href for the social media link. This can be used to display icons linked to social media platforms."]}),`
`,n.jsxs(o.li,{children:[n.jsx(o.code,{children:"copyright"}),": An optional string to display a copyright notice at the bottom of the footer."]}),`
`,n.jsxs(o.li,{children:[n.jsx(o.code,{children:"className"}),": An optional custom class name to style the footer."]}),`
`]}),`
`,n.jsx(o.pre,{children:n.jsx(o.code,{className:"language-tsx",children:`const footerLinks = [\r
  { name: 'Home', href: '/' },\r
  { name: 'About', href: '/about' },\r
];\r
\r
const socialLinks = [\r
  { name: 'Instagram', icon: <FaInstagram />, href: 'https://instagram.com' },\r
];\r
\r
<Footer\r
  links={footerLinks}\r
  socialMedia={socialLinks}\r
  copyright="My Company"\r
  className="custom-class"\r
/>
`})}),`
`,n.jsx(o.h2,{id:"customization",children:"Customization"}),`
`,n.jsx(o.p,{children:"You can customize the appearance and behavior of the footer using the following props:"}),`
`,n.jsxs(o.ul,{children:[`
`,n.jsxs(o.li,{children:[n.jsx(o.code,{children:"links"})," lets you define the navigation links to be displayed."]}),`
`,n.jsxs(o.li,{children:[n.jsx(o.code,{children:"socialMedia"})," allows you to provide social media icons along with the corresponding URLs."]}),`
`,n.jsxs(o.li,{children:[n.jsx(o.code,{children:"copyright"})," enables the display of a copyright message."]}),`
`,n.jsxs(o.li,{children:[n.jsx(o.code,{children:"className"})," allows you to apply additional CSS classes to the footer for further customization."]}),`
`]}),`
`,n.jsx(o.h2,{id:"notes",children:"Notes"}),`
`,n.jsxs(o.ul,{children:[`
`,n.jsxs(o.li,{children:["The ",n.jsx(o.code,{children:"socialMedia"})," prop is optional. If not provided, the footer will only display the navigation links."]}),`
`,n.jsx(o.li,{children:"The copyright message will display the current year along with the provided text."}),`
`,n.jsx(o.li,{children:"The component is responsive, with a layout that adapts from a column layout on smaller screens to a row layout on larger screens."}),`
`]})]})}function y(e={}){const{wrapper:o}={...r(),...e.components};return o?n.jsx(o,{...e,children:n.jsx(i,{...e})}):i(e)}export{y as default};
