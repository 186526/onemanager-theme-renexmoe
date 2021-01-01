import '../css/notosans.css';
import '../css/mdui.css';
import '../css/app.css';
import mdui from 'mdui';
import pjax from './pjax.js';
import theme from './theme.js';
import toggle from './toggle.js';
import {drawertoggle} from './toggle.js';
import sort from './sort.js';
import menu from './menu.js';
import marked from './marked.js';
import flyingPages from './flyingpages.js';
globalThis.mdui = mdui;
globalThis.renexmoe = {
    toggle_theme: theme.toggle,
    mutation: ()=>{
        marked();
        theme.mutation();
        sort();
        mdui.mutation();
        toggle();
    },
    pjax: pjax(),
};
mdui.$(()=>{
    menu();
    flyingPages();
    drawertoggle();
    window.renexmoe.mutation();
    document.addEventListener("pjax:success", window.renexmoe.mutation);
});
window.mdui = globalThis.mdui;
window.renexmoe = globalThis.renexmoe;
export default renexmoe;