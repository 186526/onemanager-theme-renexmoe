import mdui from "mdui";
import cookies from "./cookies";
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
  if (req.status === 302) {
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
 *  @return {null} - Nothing Can return here
 *
 */
export async function logout() {
  cookies.removeItem("admin", "/");
  location.reload();
}
