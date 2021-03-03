import mdui from "./lib/mdui.js";
import cookies from "./lib/cookies.js";
const $ = mdui.$;
const func = {
  mutation: () => {
    $("body").removeClass("mdui-theme-layout-auto");
    if (window.disableddarkmode) {
      mdui.$("li[onclick^=renexmoe]").remove();
      cookies.setItem("darkmode", false, 1200, "/");
      return;
    }
    if (!cookies.getItem("darkmode")) {
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        cookies.setItem("darkmode", true, 1200, "/");
        $("body").addClass("mdui-theme-layout-dark");
      } else {
        cookies.setItem("darkmode", false, 1200, "/");
        $("body").removeClass("mdui-theme-layout-dark");
      }
    }
    if (eval(cookies.getItem("darkmode"))) {
      $("body").addClass("mdui-theme-layout-dark");
    } else {
      $("body").removeClass("mdui-theme-layout-dark");
    }
    return;
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
  },
};
export default func;
