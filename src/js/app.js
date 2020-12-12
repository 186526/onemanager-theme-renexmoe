import '../css/notosans.css';
import '../css/notosans.css';
import '../css/mdui.css';
import '../css/app.css';
import mdui from 'mdui';
import pjax from './pjax.js';
import theme from './theme.js';
import toggle from './toggle.js';
import sort from './sort.js';
import menu from './menu.js';
menu();
window.mdui = mdui;
window.renexmoe = {
    toggle_theme: theme.toggle,
    mutation: ()=>{
        toggle();
        theme.mutation();
        sort();
        mdui.mutation();
    },
    pjax: pjax(),
};
mdui.$(()=>{
    window.renexmoe.mutation();
    document.addEventListener("pjax:success", window.renexmoe.mutation);
});
export default window.renexmoe;