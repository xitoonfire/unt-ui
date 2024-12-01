import { addons } from "@storybook/addons";
import { create } from "@storybook/theming";

addons.setConfig({
  theme: create({
    base: "light", 
    brandTitle: "UNT UI Library",
    brandUrl: "http://www.unt.edu.mk/",
    brandImage: "/unt.png", 
  }),
});


document.addEventListener("DOMContentLoaded", () => {
  const link = document.createElement("link");
  link.rel = "icon";
  link.href = "/favicon.ico"; 
  document.head.appendChild(link);
});