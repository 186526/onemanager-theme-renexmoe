const getlink = async (file) => {
  const headers = new Headers();
  headers.append("x-requested-with", "XMLHttpRequest");
  const answer = await fetch(
    `?action=upbigfile&upbigfilename=${file.name}&filesize=${file.size}&lastModified=${file.lastModified}`,
    {
      headers: headers,
    }
  )
    .then((data) => {
      return {
        status: data.status,
        responseText: data.text(),
      };
    })
    .then((data) => {
      console.log(
        `Upload File - Get Upload URL -  ${data.status} - ${data.responseText}`
      );
      if (data.status === 409) {
        return {
          status: false,
          msg: "Duplicate name",
          code: 2,
        };
      } else if (data.status === 200) {
        var answer;
        try {
          answer = JSON.parse(data.responseText);
        } catch (e) {
          return {
            status: false,
            msg: "Backend Error",
            code: 3,
          };
        }
        if (!answer.uploadUrl) {
          return {
            status: false,
            msg: "Backend Error",
            code: 3,
          };
        } else {
          return {
            status: true,
            result: answer,
            code: 0,
          };
        }
      }
    });
};
export default getlink;
