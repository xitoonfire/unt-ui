import{j as n}from"./jsx-runtime-DEdD30eg.js";import{useMDXComponents as i}from"./index-CcnH5Kt0.js";import"./chunk-HLWAVYOI-Cw-bIfa7.js";import{ae as o}from"./index-Ck3KPMy2.js";import{C as c}from"./Card-Bn42QacJ.js";import"./index-RYns6xqu.js";import"./iframe-DyWSG_Xz.js";import"../sb-preview/runtime.js";import"./index-C6Iyy7v6.js";import"./index-D-8MO0q_.js";import"./index-DrFu-skq.js";function r(e){const t={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...i(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(o,{title:"Components/Card",component:c}),`
`,n.jsx(t.h1,{id:"card-component-documentation",children:"Card Component Documentation"}),`
`,n.jsx(t.h2,{id:"overview",children:"Overview"}),`
`,n.jsxs(t.p,{children:["The ",n.jsx(t.code,{children:"Card"})," component is a flexible and customizable card used to display content such as images, titles, descriptions, and action buttons. It provides a simple way to present content in a visually appealing layout. The component is built with TypeScript and Tailwind CSS for styling."]}),`
`,n.jsx(t.h2,{id:"basic-example",children:"Basic Example"}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-tsx",children:`import React from "react";\r
import Card from "./Card";\r
\r
function App() {\r
  const handleButtonClick = () => {\r
    alert("Button clicked!");\r
  };\r
\r
  return (\r
    <div>\r
      <Card\r
        title="Card Title"\r
        imageUrl="https://via.placeholder.com/150"\r
        content="This is a description of the card's content."\r
        buttonText="Learn More"\r
        onButtonClick={handleButtonClick}\r
      />\r
    </div>\r
  );\r
}\r
\r
export default App;
`})}),`
`,n.jsx(t.h2,{id:"card-properties",children:"Card Properties"}),`
`,n.jsx(t.p,{children:"The Card component accepts the following props:"}),`
`,n.jsxs(t.ul,{children:[`
`,n.jsxs(t.li,{children:[n.jsx(t.code,{children:"title"}),`: A string representing the card's title (e.g., "Card Title").`]}),`
`,n.jsxs(t.li,{children:[n.jsx(t.code,{children:"imageUrl"}),": A string representing the URL of the image to be displayed in the card."]}),`
`,n.jsxs(t.li,{children:[n.jsx(t.code,{children:"content"}),": A string representing the main content or description of the card."]}),`
`,n.jsxs(t.li,{children:[n.jsx(t.code,{children:"buttonText"}),": A string for the text to be displayed on the action button."]}),`
`,n.jsxs(t.li,{children:[n.jsx(t.code,{children:"onButtonClick"}),": A function that will be called when the action button is clicked."]}),`
`]}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-tsx",children:`<Card\r
  title="Card Title"\r
  imageUrl="https://via.placeholder.com/150"\r
  content="This is a description of the card."\r
  buttonText="Click Me"\r
  onButtonClick={() => console.log("Button clicked!")}\r
/>
`})}),`
`,n.jsx(t.h2,{id:"button-functionality",children:"Button Functionality"}),`
`,n.jsxs(t.p,{children:["The card includes an action button that can trigger a custom action when clicked. The ",n.jsx(t.code,{children:"onButtonClick"})," prop accepts a function that will be executed when the button is clicked."]}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-tsx",children:`<Card\r
  title="Card with Button"\r
  imageUrl="https://via.placeholder.com/150"\r
  content="This card has a button that performs an action."\r
  buttonText="Click Me"\r
  onButtonClick={() => alert("Button clicked!")}\r
/>
`})})]})}function g(e={}){const{wrapper:t}={...i(),...e.components};return t?n.jsx(t,{...e,children:n.jsx(r,{...e})}):r(e)}export{g as default};
