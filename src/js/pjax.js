import "nprogress/nprogress.css";
import Pjax from "pjax";
import nprogress from "nprogress";
const whenpjax = () => {
  nprogress.inc();
};
const whensuccess = () => {
  nprogress.done();
};
export default () => {
  let pjax = new Pjax({
    elements: "a:not([target=_blank])",
    selectors: [
      ".main-drawer",
      ".mdui-container",
      "title",
      ".pjax",
      ".mdui-toolbar",
    ],
    cacheBust: false,
  });
  pjax._handleResponse = pjax.handleResponse;
  pjax.handleResponse = function (responseText, request, href, options) {
    if (request.status === 401) {
      location.href = href;
    } else if (request.status === 302) {
      location.href = href;
    } else {
      pjax._handleResponse(responseText, request, href, options);
    }
  };
  document.addEventListener("pjax:send", whenpjax);
  document.addEventListener("pjax:success", whensuccess);
  return pjax;
};
