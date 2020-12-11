import '../css/notosans.css';
import '../css/notosans.css';
import '../css/mdui.css';
import '../css/app.css';
import pjax from './pjax.js';
import theme from './theme.js';
import mdui from 'mdui';
import toggle from './toggle.js';
window.mdui = mdui;
window.renexmoe = {
    toggle_theme: theme.toggle,
    mutation: ()=>{
        toggle();
        theme.mutation();
    }
};
mdui.$(()=>{window.renexmoe.mutation();});
export default window.renexmoe;