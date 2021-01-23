import mdui from "../lib/mdui";
import { refresh, logout } from "../utils";
import { click } from "./checkupdate";
import { ToggleListener }from "./menu.js";
const $ = mdui.$;
export default () => {
  $("#toggle-drawer").on("click", () => {
    new mdui.Drawer("#main-drawer", {
      swipe: true,
    }).toggle();
  });
  $(".downloadurl").each((a, b) => {
    b.addEventListener("click", () => {
      ToggleListener();
      new mdui.dialog(
        {
          content:`<div class="mdui-textfield mdui-textfield-floating-label mdui-textfield-not-empty mdui-textfield-disabled"><label class="mdui-textfield-label">URL</label><input class="mdui-textfield-input" type="email" value="${location.href.replace(
            "?preview",
            ""
          )}" id="url-input" disabled=""></div>`,
          title: `File URL`,
          buttons: [{
            text: '确定',
            onClick: ()=>{ToggleListener();},
          }]
        },
      );
      mdui.mutation();
    });
  });
  $(".back").each((a, b) => {
    b.addEventListener("click", () => {
      window.history.back();
    });
  });
  $(".refresh").each((a, b) => {
    b.addEventListener("click", () => {
      mdui.snackbar("刷新缓存中……");
      refresh(location.href).then((e) => {
        if (e) {
          mdui.snackbar("已成功刷新缓存");
          window.renexmoe.pjax.loadUrl(location.href);
        } else {
          mdui.snackbar("刷新缓存遇到未知错误，请检查是否在盘符目录页面");
          throw response;
        }
      });
    });
  });
  $("#logout").on("click", () => {
    mdui.snackbar("尝试退出登陆……");
    logout();
  });
};
const drawertoggle = () => {
  $("#about_theme").on("click", () => {
    new mdui.alert(
      '<div class="mdui-typo"><a href="https://github.com/186526/onemanager-theme-renexmoe">Onemanager-theme-renexmoe</a><br>Open source under GPL-3.0 License<br>Build with Love & MDUI & Gulp & snowpack | webpack<br>Author:<a href="https://186526.xyz">186526</a></div>',
      "关于renexmoe"
    );
    mdui.mutation();
  });
  $("#checkupdate").on("click", () => {
    click();
  });
};
export { drawertoggle };
