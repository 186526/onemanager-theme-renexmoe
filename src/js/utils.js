import mdui from "mdui";
import cookies from "./lib/cookies";
export default {
  /**
   *
   *  Return MDUI JQ
   *
   *  @param {String} [args] - MDUI JQ arguments
   *  @return {Object} - MDUI JQ result
   *  @api public
   *
   */
  $: mdui.$,
};
/**
 *
 *  refresh onemanager
 *
 *  @param {String} - URL for OM
 *  @return {Boolean} - Status of refresh
 *
 */
export async function refresh(url) {
  const GetURL = new URL(url);
  GetURL.search = "?RefreshCache";
  const req = await fetch(GetURL.href);
  if (req.status === 302 || req.status === 202) {
    return true;
  } else {
    return false;
  }
}
/**
 *
 *  Logout Onemanager
 *
 *  @param {null} - Nothing to param here
 *  @return {undefined} - Nothing Can return here
 *
 */
export async function logout() {
  cookies.removeItem("admin", "/");
  location.reload();
}
async function ListDisk() {
  let diskList = [];
  const diskDom = document.querySelectorAll(".disk_name");
  for (let x of diskDom) {
    diskList.push({
      displayName: x.innerHTML,
      path: x.getAttribute("href"),
      DOM: x,
    });
  }
  return diskList;
}
/**
 *
 *  Get disk list
 *
 *  @param {String} - this URL
 *  @return {Object} - return a Object
 *
 */
export async function GetDisk(URL = globalThis.location.pathname) {
  let answer = {
    diskList: await ListDisk(),
  };
  for (let x of answer.diskList) {
    if (URL.indexOf(x.path) > -1) {
      answer.this = x;
      break;
    }
  }
  if (!answer.this) {
    answer.this = {
      displayName: "Home",
      path: "/",
      DOM: document.querySelector("#home"),
    };
  }
  answer.diskList.push({
    displayName: "Home",
    path: "/",
    DOM: document.querySelector("#home"),
  });
  return answer;
}
