import mdui from "../lib/mdui.js";
import { refresh, logout, Login, GetAllLinks} from "../utils";
import { click } from "./checkupdate";
import { ToggleListener } from "./menu.js";
import GetLangStr from "../Lang/index.js";
import pack from "../pack.js";
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
      new mdui.dialog({
        content: `<div class="mdui-textfield mdui-textfield-floating-label mdui-textfield-not-empty mdui-textfield-disabled"><label class="mdui-textfield-label">URL</label><input class="mdui-textfield-input" type="email" value="${location.href.replace(
          "?preview",
          ""
        )}" id="url-input" disabled=""></div>`,
        title: `File URL`,
        buttons: [
          {
            text: "确定",
            onClick: () => {
              ToggleListener();
            },
          },
        ],
      });
      mdui.mutation();
    });
  });
  $(".back").each((a, b) => {
    b.addEventListener("click", () => {
      window.history.back();
    });
  });
  $(".back-page").each((a, b) => {
    b.addEventListener("click", () => {
      window.renexmoe.pjax.loadUrl("../");
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
  $(".getalllink").each((a,b)=>b.addEventListener('click',()=>{
    ToggleListener();
    mdui.dialog(
      {
        content:`<div class="mdui-typo"><pre>${GetAllLinks(document.querySelector('#file-list'))}</pre>`,
        title:'全部链接',
        buttons: [
          {
            text: "确定",
            onClick: () => ToggleListener(),
          },
        ],
      },
    );
  }));
  $("#logout").on("click", () => {
    mdui.snackbar("尝试退出登陆……");
    logout();
  });
  $("#login_btn").on("click",async() => {
    const password = document.querySelector('input[name=password1]').value;
    document.querySelector("#login_close").click();
    // let awaitLogin = mdui.dialog({
    //   title: "Loading...",
    //   content: '<div class="mdui-spinner mdui-theme-pink"></div>',
    //   buttons: [],
    //   closeOnEsc: false
    // });
    // mdui.mutation();
    mdui.snackbar("正在登陆……")
    const status = await Login(
      password
    );
    if(!status.status){
      mdui.dialog(
        {
          title: "Login Failed",
          content: GetLangStr(status.msg),
          buttons:[
            {
              text: "OK",
              onClick:(dialog)=>{
                dialog.close();
                document.querySelector("li[mdui-dialog]").click();
              }
            }
          ]
        }
      );

    }else{
      mdui.snackbar(GetLangStr(status.msg));
      window.location.reload();
    }
  })
};
const drawertoggle = () => {
  $("#about_theme").on("click", () => {
    new mdui.alert(
      `<div class="mdui-typo"><a href="https://github.com/186526/onemanager-theme-renexmoe">Onemanager-theme-renexmoe ${pack.version}</a><br>Open source under GPL-3.0 License<br>Build with Love & MDUI & Gulp & snowpack | webpack<br>Author:<a href="https://186526.xyz">186526</a></div>`,
      "关于renexmoe"
    );
    mdui.mutation();
  });
  $("#checkupdate").on("click", () => {
    click();
  });
};
export { drawertoggle };
