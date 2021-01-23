import hljs from '../lib/highlight.js';
import marked from '../lib/marked.js';
import mdui from '../lib/mdui';
import 'highlight.js/styles/github.css';
let markdown, isRichText = false;
const markdownThis = () => {
    console.log(`renexmoe::Markdown::Start Markdown Render`);
    mdui.snackbar("解析为Markdown中……");
    try {
        markdown = document.getElementById("code").innerText;
        marked.setOptions({
            renderer: new marked.Renderer(),
            mangle: false,
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
        isRichText = true;
        console.log(`renexmoe::Markdown::Render Fininsh`);
    } catch (e) {
        console.log(`Not Markdown`);
        isRichText = false;
    }
};
const highlight = () => {
    return import('../lib/highlight.js').then(({ default: hljs }) => {
        if (document.getElementById("code")) {
            console.log(`renexmoe::Markdown::Start EventLister`);
            if (location.pathname.split("/")[location.pathname.split("/").length-1].split(".")[location.pathname.split("/")[location.pathname.split("/").length-1].split(".").length-1] === "md") {
                markdownThis();
            }
            mdui.$('.highlight').each((a, b) => {
                b.addEventListener("click", () => {
                    if (isRichText) {
                        document.getElementById("code").innerHTML = markdown;
                        isRichText = false;
                    } else {
                        markdownThis();
                    }
                });
            });
        }
    });
};
export default highlight;