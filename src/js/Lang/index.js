import language from "./languageList.js";
const GetLangStr = (msg, lang = navigator.language) => {
  if (!language[lang]) {
    return language["en-US"][msg];
  } else {
    return language[lang][msg];
  }
};
export default GetLangStr;
