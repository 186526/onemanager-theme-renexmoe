import json from "./pack";
import env from "/__snowpack__/env";
export default async function check() {
    let url = new URL("https://static.186526.top/api/renexmoe/checkupdate");
    url.search = `?version=${json.version}`;
    const rep = await fetch(url.href);
    return rep.json();
}
export async function click() {
    let o = new mdui.dialog({
        title: "Loading...",
        content: '<div class="mdui-spinner mdui-theme-pink"></div>',
        buttons: [],
        closeOnEsc: !1
    });
    mdui.mutation();
    const answer = await check();
    o.close();
    new mdui.alert(
        `
        <div class="mdui-typo">
        本版本日志: ${answer.log}
            <h5>主线版本</h5>
            <ul>
                <li>版本: ${answer.version.main.ver}</li>
                <li>主题链接: <a href="${answer.version.main.url}">This</a></li>
                <li>LOG: ${answer.version.main.log}</li>
            </ul>
            <h5>LTS版本</h5>
            <ul>
                <li>版本: ${answer.version.lts.ver}</li>
                <li>主题链接: <a href="${answer.version.lts.url}">This</a></li>
                <li>LOG: ${answer.version.lts.log}</li>
            </ul>
        </div>
        `,
        `当前版本是 ${json.version}-${env.MODE}-${json.builder},${answer.status}`);
}