import mdui from 'mdui';
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
    $("#downloadurl").each((a,b) => {
        b.addEventListener("click",() => {
            new mdui.alert(`<div class="mdui-textfield mdui-textfield-floating-label mdui-textfield-not-empty mdui-textfield-disabled"><label class="mdui-textfield-label">URL</label><input class="mdui-textfield-input" type="email" value="${location.href.replace("?preview", "")}" id="url-input" disabled=""></div>`, '链接');
            mdui.mutation();
        });
    });
};