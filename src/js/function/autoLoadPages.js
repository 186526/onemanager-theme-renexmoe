import { Form } from "../utils.js";
import mdui from "../lib/mdui.js";

const randomString = (r) => {
  let s = "abcdefhijkmnprstwxyz",
    n = s.length,
    t = "";
  for (let o = 0; o < r; o++) t += s.charAt(Math.floor(Math.random() * n));
  return t;
};

async function loadNextPage() {
  if (window.renexmoe.thisPage + 1 <= window.MorePage.length) {
    let o = new mdui.dialog({
      title: "Loading...",
      content: '<div class="mdui-spinner mdui-theme-pink"></div>',
      buttons: [],
      closeOnEsc: false,
      history: false,
      modal: true,
    });
    mdui.mutation();
    const nextPage = await fetch("#file-list", {
      method: "POST",
      body: await new Form({
        pagenum: window.renexmoe.thisPage + 1,
      }).BuildString(),
    })
      .then((e) => {
        o.close();
        return e;
      })
      .then(async (e) => (e.status != 200 ? new Error(e) : await e.text()));
    let wrapper = document.createElement("div");
    wrapper.innerHTML = nextPage;
    const filelist = wrapper.querySelectorAll("li[data-sort]");
    // console.log(filelist);
    window.renexmoe.thisPage += 1;
    filelist.forEach((e) =>
      document.querySelector("#file-list").appendChild(e)
    );
    if (window.renexmoe.thisPage + 1 <= window.MorePage.length) {
      setTimeout(makeNewPageListener, 1);
    }
  }
}
const makeNewPageListener = async () => {
  var div = document.createElement("div");
  div.id = randomString(10);
  div.setAttribute("isOb", "true");

  document.querySelector("#file-list").appendChild(div);

  var runningOnBrowser = typeof window !== "undefined";
  // 通过检查 scroll 事件 API 和 User-Agent 来匹配爬虫
  var isBot =
    (runningOnBrowser && !("onscroll" in window)) ||
    (typeof navigator !== "undefined" &&
      /(gle|ing|ro|msn)bot|crawl|spider|yand|duckgo/i.test(
        navigator.userAgent
      ));
  // 检查当前浏览器是否支持 IntersectionObserver API
  var supportsIntersectionObserver =
    runningOnBrowser && "IntersectionObserver" in window;

  setTimeout(function () {
    if (!isBot && supportsIntersectionObserver) {
      // 当前环境不是爬虫、并且浏览器兼容 IntersectionObserver API
      var observer = new IntersectionObserver(
        function (entries) {
          // 当前视窗中已出现 Disqus 评论框所在位置
          if (entries[0].isIntersecting) {
            // 加载 Disqus
            loadNextPage();
            // 停止当前的 Observer
            observer.disconnect();
            div.parentNode.removeChild(div);
          }
        },
        { threshold: [0] }
      );
      // 设置让 Observer 观察 #disqus_thread 元素
      observer.observe(div);
    } else {
      // 当前环境是爬虫、或当前浏览器其不兼容 IntersectionObserver API
      // 直接加载 Disqus
      setTimeout(loadNextPage, 10000);
    }
  }, 1);
};

export default makeNewPageListener;
