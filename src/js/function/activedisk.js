import { GetDisk } from "../utils";
const ActiveDisk = async () => {
  const diskList = await GetDisk();
  diskList.diskList.forEach((e) => {
    e.DOM.parentNode.classList.remove("mdui-list-item-active");
  });
  diskList.this.DOM.parentNode.classList.add("mdui-list-item-active");
};
export default ActiveDisk;
