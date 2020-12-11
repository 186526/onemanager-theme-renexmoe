import mdui from 'mdui';
import cookies from './cookies.js';
const $ = mdui.$;
const func = {
    mutation: () => {
        if (window.disableddarkmode) {
            $('li[onclick^=changecolor]').remove();
            cookies.setItem("darkmode", false, 1200, "/");
            return;
        }
        if (!cookies.getItem("darkmode")) {
            if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
                cookies.setItem("darkmode", true, 1200, "/");
                $("body").addClass("mdui-theme-layout-dark");
            } else {
                cookies.setItem("darkmode", false, 1200, "/");
                $("body").removeClass("mdui-theme-layout-dark");
            }
        }
        func.toggle();
    },
    toggle: () => {
        if (eval(cookies.getItem("darkmode"))) {
            $("body").removeClass("mdui-theme-layout-dark");
            cookies.setItem("darkmode", false, 1200, "/");
        } else {
            $("body").addClass("mdui-theme-layout-dark", "/");
            cookies.setItem("darkmode", true, 1200, "/");
        }
        return;
    }
};
export default func;