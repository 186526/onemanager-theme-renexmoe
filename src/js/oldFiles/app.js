import GetLink from "./method/getlink";
class file {
  constructor(file) {
    this.orginfile = file;
    if (this.orginfile.size > 100 * 1024 * 1024 * 1024) {
      return {
        success: false,
        msg: "File too big",
        code: 1,
      };
    }
    this.init();
    this.success = true;
    this.code = 0;
    this.result = "OK";
  }
  async init() {
    this.file = {};
    this.file.name = encodeURIComponent(
      this.orginfile.webkitRelativePath || this.orginfile.name
    );
    this.file.size = this.orginfile.size;
    this.file.lastModified = this.orginfile.lastModified;
    this.file.orginfile = this.orginfile;
  }
  async GetUploadURL() {
    const answer = await GetLink(this.file);
    if (answer.status) {
      this.file.url = answer.result;
    }
    return answer;
  }
}
