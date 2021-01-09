import hljs from 'highlight.js';
import marked from 'marked';
import mdui from 'mdui';
import 'highlight.js/styles/github.css';
const highlight = () => {
    window.hljs = hljs;
    if (document.getElementById("code")) {
        console.log(`renexmoe - Markdown - Start EventLister`);
        mdui.$('.highlight').each((a, b) => {
            b.addEventListener("click", () => {
                mdui.snackbar("解析为Markdown中……");
                try {
                    const markdown = document.getElementById("code").innerText;
                    marked.setOptions({
                        renderer: new marked.Renderer(),
                        mangle:false,
                        highlight: function (code, language) {
                            const validLanguage = hljs.getLanguage(language) ? language : 'plaintext';
                            return hljs.highlight(validLanguage, code).value;
                        },
                        pedantic: false,
                        gfm: true,
                        breaks: false,
                        sanitize: false,
                        smartLists: true,
                        smartypants: false,
                        xhtml: false
                    });
                    const markdownresult = marked(markdown);
                    document.getElementById("code").innerHTML = `<div class="mdui-typo">${markdownresult}</div>`;
                } catch (e) {
                    console.log(`Not Markdown`);
                }
            });
        });
    }
};
export default highlight;