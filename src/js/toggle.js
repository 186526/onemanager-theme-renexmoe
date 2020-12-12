import mdui from 'mdui';
import { refresh } from './utils';
const $ = mdui.$;
export default () => {
    $("#toggle-drawer").on("click", () => {
        new mdui.Drawer("#main-drawer", {
            swipe: true,
        }).toggle();
    });
    $("#about_theme").on("click", () => {
        new mdui.alert('<div class="mdui-typo"><a href="https://github.com/186526/onemanager-theme-renexmoe">Onemanager-theme-renexmoe</a><br>Open source With GPL-3.0 License<br>Build with Love & ejs & MDUI<br>Author:<a href="https://186526.xyz">186526</a></div>', "关于renexmoe");
        mdui.mutation();
    });
    $(".downloadurl").each((a, b) => {
        b.addEventListener("click", () => {
            console.log(b);
            new mdui.alert(`<div class="mdui-textfield mdui-textfield-floating-label mdui-textfield-not-empty mdui-textfield-disabled"><label class="mdui-textfield-label">URL</label><input class="mdui-textfield-input" type="email" value="${location.href.replace("?preview", "")}" id="url-input" disabled=""></div>`, '链接');
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
            console.log(b);
            mdui.snackbar("刷新缓存中……");
            refresh(location.href).then(e=>{
                if(e){
                    mdui.snackbar("已成功刷新缓存");
                    window.renexmoe.pjax.loadUrl(location.href);
                }else{
                    mdui.snackbar("刷新缓存遇到未知错误，请检查是否在盘符目录页面");
                    throw response;
                }
            });
        });
    });
};