import mdui from "mdui";
const openadminmenu = () => {
  let menu = new mdui.Menu("#mouseplace", "#admin-menu");
  let menudom = document.getElementById("admin-menu");
  let mouseplace = document.getElementById("mouseplace");
  menudom.style.left = mouseplace.style.left;
  menudom.style.top = mouseplace.style.top;
  menu.open();
};
export default () => {
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
    var e = e || window.event;
    e.preventDefault();
    openadminmenu();
  };
};
