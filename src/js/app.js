/*
 * renexmoe v1.2 (https://github.com/186526/onemanager-theme-renexmoe)
 * Copyright 2020-2021 186526 <i@186526.xyz>
 * Licensed under GPL-3.0
 */
import "../css/notosans.css";
import "../css/mdui.css";
import "../css/app.css";
import mdui from "./lib/mdui.js";
import pjax from "./function/pjax.js";
import theme from "./theme.js";
import toggle from "./function/toggle.js";
import { drawertoggle } from "./function/toggle.js";
import sort from "./function/sort.js";
import menu from "./function/menu.js";
import marked from "./function/marked.js";
import flyingPages from "./lib/flyingpages.js";
import highlight from "./function/code.js";
import pack from "./pack.js";
import ActiveDisk from "./function/activedisk";
import autoLoadPages from "./function/autoLoadPages.js";
window.mdui = mdui;
window.renexmoe = {
  toggle_theme: theme.toggle,
  mutation: () => {
    ActiveDisk();
    console.log(`renexmoe::pjax::Page Load Success`);
    console.log(`renexmoe::marked::Update Marked`);
    marked();
    console.log(`renexmoe::mdui::Init Theme`);
    theme.mutation();
    console.log(`renexmoe::sort::Init Sort`);
    sort();
    mdui.mutation();
    console.log(`renexmoe::init::Start EventLister`);
    toggle();
    highlight();
    console.log(`renexmoe::init::FlyingPages Preload`);
    window.renexmoe.flyingPages = flyingPages();
    if(!window.MorePage){
      window.renexmoe.thisPage = 1;
      window.renexmoe.needMorePages = false;
      document.querySelectorAll('div[isob=true]').forEach(e=>e.parentElement.removeChild(e));
    }else{
      window.renexmoe.thisPage = 1;
      window.renexmoe.needMorePages = true;
    }
    if(window.renexmoe.needMorePages){
      autoLoadPages();
    }
  },
  pjax: pjax(),
  renexmoe: pack,
  version: pack,
};
mdui.$(() => {
  console.log(
    "\n %c OneManager-theme-renexmoe | Powered by OneManager-php && Webpack | 186526 \n",
    "color: #fff; background: #444; padding:5px 0;"
  );
  console.log(`renexmoe::init::Start Load`);
  console.log(`renexmoe::init::Start EventLister`);
  menu();
  drawertoggle();
  console.log(`renexmoe::init::Start FlyingPages`);
  console.log(`renexmoe::init::Init MDUI`);
  window.renexmoe.mutation();
  document.addEventListener("pjax:success", window.renexmoe.mutation);
});

export default window.renexmoe;
