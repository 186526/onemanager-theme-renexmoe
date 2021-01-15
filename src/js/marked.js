import marked from "marked";
//import $ from 'mdui.jq';
import mdui from "mdui";
const $ = mdui.$;
export default async () => {
  return import("./highlight.js").then(({default:hljs})=>{
    if (document.getElementById("head")) {
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
      $("#head").html(marked(document.querySelector("#head-md").innerText));
    }
    if (document.getElementById("readme")) {
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
      $("#readme").html(marked(document.querySelector("#readme-md").innerText));
    }
  });  
};
