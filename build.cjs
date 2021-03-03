const fs = require("fs");
const pkg = require("./package.json");
const assets = require("./build/asset-manifest.json");
let index = fs.readFileSync("./src/html/index.html", { encoding: "utf8" });
index = index.replace(
  '<meta name="theme-color" content="#fff" />',
  `<link rel="stylesheet" href="${pkg.homepage}/css/app.css">` +
    `<meta name="theme-color" content="#fff" />`
);
index = index.replace(
  '<script type="module" src="/renexmoe_assets/js/app.js"></script>',
  ((assets) => {
    let a = "";
    for (let b in assets) {
      if (b.split(".")[b.split(".").length - 1] === "js") {
        a += `<script src="${pkg.homepage + assets[b]}"></script>`;
      }
    }
    return a;
  })(assets)
);
fs.writeFileSync("./build/index.html", index, { encoding: "utf8" });
