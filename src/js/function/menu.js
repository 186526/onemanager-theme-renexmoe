import mdui from "../lib/mdui.js";
window.listenerStatus = false;
const openadminmenu = () => {
  let menu = new mdui.Menu("#mouseplace", "#admin-menu");
  let menudom = document.getElementById("admin-menu");
  let mouseplace = document.getElementById("mouseplace");
  menudom.style.left = mouseplace.style.left;
  menudom.style.top = mouseplace.style.top;
  menu.open();
};
export default StartListener;
export async function StopListener() {
  document.onmousemove = undefined;
  document.body.oncontextmenu = undefined;
  listenerStatus = false;
}
export async function StartListener() {
  document.onmousemove = function (e) {
    let $e = event || window.event;
    let $scrollX =
      document.documentElement.scrollLeft || document.body.scrollLeft;
    let $scrollY =
      document.documentElement.scrollTop || document.body.scrollTop;
    let $x = $e.pageX || $e.clientX + $scrollX;
    let $y = $e.pageY || $e.clientY + $scrollY;
    let mouseplace = document.getElementById("mouseplace");
    mouseplace.style.left = $x + "px";
    mouseplace.style.top = $y + "px";
  };
  document.body.oncontextmenu = function (e) {
    var c = e || window.event;
    c.preventDefault();
    openadminmenu();
  };
  listenerStatus = true;
}
export async function ToggleListener() {
  if (listenerStatus) {
    return StopListener();
  } else {
    return StartListener();
  }
}
window.ToggleListener = ToggleListener;
