const upload = async (file, uploadfile, value) => {
  let reader = new FileReader();
  let start, end;
  const originfile = file.origin;
  if (!!originfile) {
    let asize = 0,
      totalsize = orginfile.size,
      xhr = new XMLHttpRequest();
    xhr.open("GET", file.url.uploadUrl);
    xhr.send(null);
    xhr.onload = (e) => {
      console.log(xhr);
    };
  }
};
export default upload;
