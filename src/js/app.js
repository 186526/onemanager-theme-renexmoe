import "../css/notosans.css";
import "../css/mdui.css";
import "../css/app.css";
import mdui from "mdui";
import pjax from "./pjax.js";
import theme from "./theme.js";
import toggle from "./toggle.js";
import { drawertoggle } from "./toggle.js";
import sort from "./sort.js";
import menu from "./menu.js";
import marked from "./marked.js";
import flyingPages from "./flyingpages.js";
import highlight from "./code.js";
globalThis.mdui = mdui;
globalThis.renexmoe = {
  toggle_theme: theme.toggle,
  mutation: () => {
    console.log(`renexmoe - pjax - Init Page`);
    console.log(`renexmoe - marked - Update Marked`);
    marked();
    console.log(`renexmoe - mdui - Update Theme`);
    theme.mutation();
    console.log(`renexmoe - sort - Init Sort`);
    sort();
    mdui.mutation();
    console.log(`renexmoe - init - Start EventLister`);
    toggle();
    highlight();
  },
  pjax: pjax(),
};
mdui.$(() => {
  console.log("\n %c OneManager-theme-renexmoe | Powered by OneManager-php && Webpack | 186526 \n", "color: #fff; background: #444; padding:5px 0;");
  console.log(`renexmoe - init - Start Load`);
  console.log(`renexmoe - init - Start EventLister`);
  menu();
  drawertoggle();
  console.log(`renexmoe - init - Start FlyingPages`);
  flyingPages();
  console.log(`renexmoe - init - Init MDUI`);
  window.renexmoe.mutation();
  document.addEventListener("pjax:success", window.renexmoe.mutation);
});
window.mdui = globalThis.mdui;
window.renexmoe = globalThis.renexmoe;
export default globalThis.renexmoe;
