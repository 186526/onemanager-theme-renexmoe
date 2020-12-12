import mdui from "mdui";
import axios from "axios";
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
  const req = await axios.get(GetURL.href);
  if (req.status === 302) {
    return true;
  } else {
    return false;
  }
}
