import{j as e}from"./jsx-runtime-DEdD30eg.js";import{useMDXComponents as i}from"./index-CcnH5Kt0.js";import"./chunk-HLWAVYOI-Cw-bIfa7.js";import{ae as o}from"./index-Ck3KPMy2.js";import{N as t}from"./Navbar-BETlSsSW.js";import"./index-RYns6xqu.js";import"./iframe-DyWSG_Xz.js";import"../sb-preview/runtime.js";import"./index-C6Iyy7v6.js";import"./index-D-8MO0q_.js";import"./index-DrFu-skq.js";function r(s){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...i(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"Header/Navbar",component:t}),`
`,e.jsx(n.h1,{id:"navbar-component-documentation",children:"Navbar Component Documentation"}),`
`,e.jsx(n.h2,{id:"overview",children:"Overview"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"Navbar"})," component is used to create a navigation bar with a logo and a set of links. It is responsive, displaying the links horizontally on larger screens and as a toggleable dropdown on smaller screens. This component supports custom logos and optional text descriptions."]}),`
`,e.jsx(n.h2,{id:"basic-example",children:"Basic Example"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import Navbar from './Navbar';  \r
\r
function App() {  \r
  const links = [  \r
    { name: 'Home', href: '/' },  \r
    { name: 'About', href: '/about' },  \r
    { name: 'Contact', href: '/contact' },  \r
  ];  \r
\r
  return (  \r
    <div>  \r
      <Navbar links={links} logoSrc="/logo.png" />  \r
    </div>  \r
  );  \r
}  \r
\r
export default App;  
`})}),`
`,e.jsx(n.p,{children:"This example demonstrates the basic usage of the Navbar component with a logo and links."}),`
`,e.jsx(n.h2,{id:"navbar-properties",children:"Navbar Properties"}),`
`,e.jsx(n.p,{children:"The Navbar component accepts the following props:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"links"})," (",e.jsx(n.code,{children:"{ name: string; href: string }[]"}),"): An array of objects representing the links in the navbar (required)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"logoSrc"})," (string): The source URL for the logo image (required)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"altText"})," (string): Optional text to describe the logo for accessibility. Defaults to 'Logo'."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"className"})," (string): Custom class names to apply additional styling to the entire navbar."]}),`
`]}),`
`,e.jsx(n.h2,{id:"example-with-custom-logo-and-links",children:"Example with Custom Logo and Links"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import Navbar from './Navbar';  \r
\r
function App() {  \r
  const links = [  \r
    { name: 'Home', href: '/' },  \r
    { name: 'Services', href: '/services' },  \r
    { name: 'Contact', href: '/contact' },  \r
  ];  \r
\r
  return (  \r
    <div>  \r
      <Navbar  \r
        links={links}  \r
        logoSrc="/custom-logo.png"  \r
        altText="Custom Logo"  \r
        className="bg-gray-900"  \r
      />  \r
    </div>  \r
  );  \r
}  \r
\r
export default App;  
`})}),`
`,e.jsx(n.p,{children:"In this example, a custom logo and links are passed as props, and an additional background color is added to the navbar using the className prop."}),`
`,e.jsx(n.h2,{id:"responsive-design",children:"Responsive Design"}),`
`,e.jsx(n.p,{children:"The Navbar component is fully responsive. On larger screens (medium and above), the links are displayed in a horizontal row. On smaller screens, a hamburger menu is displayed, and the links can be toggled open or closed."}),`
`,e.jsx(n.h3,{id:"mobile-view",children:"Mobile View"}),`
`,e.jsx(n.p,{children:"On smaller screens, the links are hidden by default. When the menu button is clicked, the links appear in a vertical list:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<button onClick={() => setIsOpen(!isOpen)} className="text-white">  \r
  {isOpen ? 'Close' : 'Menu'}  \r
</button>  
`})}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"isOpen"})," state controls whether the mobile menu is shown or hidden."]}),`
`,e.jsx(n.h2,{id:"customization",children:"Customization"}),`
`,e.jsx(n.p,{children:"The Navbar component can be customized in the following ways:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"links"}),": An array of objects representing the navigation links. Each object must contain a name (link text) and a href (link URL)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"logoSrc"}),": The source URL for the logo image."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"altText"}),": A description of the logo for accessibility purposes. Defaults to 'Logo'."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"className"}),": Use this to apply additional styles or override default styles with Tailwind classes."]}),`
`]}),`
`,e.jsx(n.h2,{id:"notes",children:"Notes"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"The navbar is designed to be fully responsive, with a mobile-friendly dropdown for smaller screens."}),`
`,e.jsxs(n.li,{children:["The ",e.jsx(n.code,{children:"className"})," prop allows you to customize the appearance of the navbar, such as background color, padding, and spacing."]}),`
`,e.jsxs(n.li,{children:["The ",e.jsx(n.code,{children:"isOpen"})," state is used to control the visibility of the dropdown menu on mobile screens. This state is toggled when the menu button is clicked."]}),`
`]})]})}function b(s={}){const{wrapper:n}={...i(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(r,{...s})}):r(s)}export{b as default};
