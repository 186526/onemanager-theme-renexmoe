import mdui from "./lib/mdui.js";
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
 *  Check Onemanager-PHP Login status
 *
 *  @param {null}
 *  @return {Boolean} - Status of Onemanager-PHP User
 */
export function CheckLoginStatus() {
  return cookies.hasItem("admin");
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
/**
 *
 *  Login Onemanager-PHP
 *
 *  @param {string} - password (Plaintext)
 *  @return {object} - {status:boolean,msg:string}
 *
 */
export async function Login(password) {
  const answer = await fetch("?admin", {
    method: "POST",
    credentials: "same-origin",
    cache: "no-cache",
    headers: {
      "content-type": "application/x-www-form-urlencoded",
    },
    body: new Form({
      password1: password,
    }).String,
  })
    .then((e) => e)
    .catch((e) => e);
  if (answer.status === 201) {
    return { status: true, msg: "Login Successful" };
  } else if (answer.status === 401) {
    return { status: false, msg: "Check Password" };
  } else {
    return { status: false, msg: "Unknown Error" };
  }
}
/**
 *
 *  new Form
 *
 *  @param {Object} - {key1:value1,key2:value2}
 *  @return {function}
 *
 */
export class Form {
  constructor(Object) {
    this.KV = Object;
    return this.init();
  }
  init() {
    this.BuildArray();
    this.BuildString();
    this.BuildObject();
    return this;
  }
  async BuildString() {
    this.String = this.Array.join("&");
    return this.String;
  }
  async BuildObject() {
    this.Object = this.KV;
    return this.Object;
  }
  async BuildArray() {
    let formBody = [];
    for (let property in this.KV) {
      let encodedKey = encodeURIComponent(property);
      let encodedValue = encodeURIComponent(this.KV[property]);
      formBody.push(encodedKey + "=" + encodedValue);
    }
    this.Array = formBody;
    return this.Array;
  }
  /**
   * append KV
   *
   * @param {Object} - {key1:value1,key2:value2}
   * @return {Object}
   *
   */
  append(obj) {
    KV = Object.assign(obj, this.KV);
    this.KV = KV;
    this.init();
    return this.KV;
  }
  /**
   * remove KV
   *
   * @param {Array} - [key1,key2]
   * @return {Object}
   *
   */
  delete(arr) {
    for (let x of arr) {
      delete this.KV[x];
    }
    this.init();
    return this.KV;
  }
  get(name) {
    return this.KV[name];
  }
  set(key, value) {
    this.KV[key] = value;
    this.init();
    return this.KV;
  }
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

export function GetAllLinks(DOM) {
  let a = "";
  DOM.querySelectorAll("a[aria-label=Download]").forEach(
    (e) => (a += `${e}\n`)
  );
  return a;
}
