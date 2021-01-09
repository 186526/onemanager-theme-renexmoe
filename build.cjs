const fs = require("fs");
const pkg = require("./package.json");
const assets = require("./build/asset-manifest.json");
let index = fs.readFileSync("./src/html_dist/index.html", { encoding: "utf8" });
index = index.replace(
  '<meta name="theme-color" content="#fff" />',
  `<link rel="stylesheet" href="${pkg.homepage}css/app.css">` +
    `<meta name="theme-color" content="#fff" />`
);
index = index.replace(
  '<script type="module" src="/renexmoe_assets/js/app.js"></script>',
  `<script src="${assets["webpack-runtime.js"]}"></script>
    <script src="${assets["app.js"]}"></script>`
);
fs.writeFileSync("./build/index.html", index, { encoding: "utf8" });
