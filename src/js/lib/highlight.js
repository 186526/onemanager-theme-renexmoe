var hljs = require("highlight.js/lib/core");

// hljs.registerLanguage(
//   "accesslog",
//   require("highlight.js/lib/languages/accesslog")
// );
// hljs.registerLanguage(
//   "actionscript",
//   require("highlight.js/lib/languages/actionscript")
// );
// hljs.registerLanguage(
//   "angelscript",
//   require("highlight.js/lib/languages/angelscript")
// );
hljs.registerLanguage("apache", require("highlight.js/lib/languages/apache"));
// hljs.registerLanguage("arcade", require("highlight.js/lib/languages/arcade"));
//hljs.registerLanguage("arduino", require("highlight.js/lib/languages/arduino"));
//hljs.registerLanguage("armasm", require("highlight.js/lib/languages/armasm"));
hljs.registerLanguage("xml", require("highlight.js/lib/languages/xml"));
hljs.registerLanguage(
  "asciidoc",
  require("highlight.js/lib/languages/asciidoc")
);
hljs.registerLanguage(
  "autohotkey",
  require("highlight.js/lib/languages/autohotkey")
);
hljs.registerLanguage("autoit", require("highlight.js/lib/languages/autoit"));
// hljs.registerLanguage("avrasm", require("highlight.js/lib/languages/avrasm"));
hljs.registerLanguage("awk", require("highlight.js/lib/languages/awk"));
hljs.registerLanguage("bash", require("highlight.js/lib/languages/bash"));
hljs.registerLanguage("c", require("highlight.js/lib/languages/c"));
hljs.registerLanguage("cmake", require("highlight.js/lib/languages/cmake"));
hljs.registerLanguage(
  "coffeescript",
  require("highlight.js/lib/languages/coffeescript")
);
// hljs.registerLanguage("cos", require("highlight.js/lib/languages/cos"));
hljs.registerLanguage("cpp", require("highlight.js/lib/languages/cpp"));
hljs.registerLanguage("csharp", require("highlight.js/lib/languages/csharp"));
hljs.registerLanguage("csp", require("highlight.js/lib/languages/csp"));
hljs.registerLanguage("css", require("highlight.js/lib/languages/css"));
// hljs.registerLanguage("d", require("highlight.js/lib/languages/d"));
hljs.registerLanguage(
  "markdown",
  require("highlight.js/lib/languages/markdown")
);
hljs.registerLanguage("dart", require("highlight.js/lib/languages/dart"));
// hljs.registerLanguage("delphi", require("highlight.js/lib/languages/delphi"));
hljs.registerLanguage("diff", require("highlight.js/lib/languages/diff"));
hljs.registerLanguage("django", require("highlight.js/lib/languages/django"));
// hljs.registerLanguage("dns", require("highlight.js/lib/languages/dns"));
hljs.registerLanguage(
  "dockerfile",
  require("highlight.js/lib/languages/dockerfile")
);
hljs.registerLanguage("dos", require("highlight.js/lib/languages/dos"));
// hljs.registerLanguage(
//   "dsconfig",
//   require("highlight.js/lib/languages/dsconfig")
// );
// hljs.registerLanguage("dust", require("highlight.js/lib/languages/dust"));
hljs.registerLanguage("ruby", require("highlight.js/lib/languages/ruby"));
// hljs.registerLanguage("erb", require("highlight.js/lib/languages/erb"));
// hljs.registerLanguage(
//   "erlang-repl",
//   require("highlight.js/lib/languages/erlang-repl")
// );
// hljs.registerLanguage("erlang", require("highlight.js/lib/languages/erlang"));
hljs.registerLanguage("excel", require("highlight.js/lib/languages/excel"));
// hljs.registerLanguage("fix", require("highlight.js/lib/languages/fix"));
// hljs.registerLanguage("flix", require("highlight.js/lib/languages/flix"));
hljs.registerLanguage("fortran", require("highlight.js/lib/languages/fortran"));
hljs.registerLanguage("fsharp", require("highlight.js/lib/languages/fsharp"));
hljs.registerLanguage("glsl", require("highlight.js/lib/languages/glsl"));
// hljs.registerLanguage("gml", require("highlight.js/lib/languages/gml"));
hljs.registerLanguage("go", require("highlight.js/lib/languages/go"));
// hljs.registerLanguage("golo", require("highlight.js/lib/languages/golo"));
hljs.registerLanguage("gradle", require("highlight.js/lib/languages/gradle"));
hljs.registerLanguage("haml", require("highlight.js/lib/languages/haml"));
// hljs.registerLanguage(
//   "handlebars",
//   require("highlight.js/lib/languages/handlebars")
// );
hljs.registerLanguage("haskell", require("highlight.js/lib/languages/haskell"));
// hljs.registerLanguage("haxe", require("highlight.js/lib/languages/haxe"));
// hljs.registerLanguage("http", require("highlight.js/lib/languages/http"));
// hljs.registerLanguage("hy", require("highlight.js/lib/languages/hy"));
hljs.registerLanguage("ini", require("highlight.js/lib/languages/ini"));
// hljs.registerLanguage("irpf90", require("highlight.js/lib/languages/irpf90"));
hljs.registerLanguage("java", require("highlight.js/lib/languages/java"));
hljs.registerLanguage(
  "javascript",
  require("highlight.js/lib/languages/javascript")
);
hljs.registerLanguage(
  "jboss-cli",
  require("highlight.js/lib/languages/jboss-cli")
);
hljs.registerLanguage("json", require("highlight.js/lib/languages/json"));
hljs.registerLanguage("julia", require("highlight.js/lib/languages/julia"));
// hljs.registerLanguage(
//   "julia-repl",
//   require("highlight.js/lib/languages/julia-repl")
// );
hljs.registerLanguage("kotlin", require("highlight.js/lib/languages/kotlin"));
hljs.registerLanguage("lasso", require("highlight.js/lib/languages/lasso"));
hljs.registerLanguage("latex", require("highlight.js/lib/languages/latex"));
hljs.registerLanguage("leaf", require("highlight.js/lib/languages/leaf"));
hljs.registerLanguage("less", require("highlight.js/lib/languages/less"));
// hljs.registerLanguage(
//   "livecodeserver",
//   require("highlight.js/lib/languages/livecodeserver")
// );
// hljs.registerLanguage(
//   "livescript",
//   require("highlight.js/lib/languages/livescript")
// );
hljs.registerLanguage("llvm", require("highlight.js/lib/languages/llvm"));
// hljs.registerLanguage("lsl", require("highlight.js/lib/languages/lsl"));
hljs.registerLanguage("lua", require("highlight.js/lib/languages/lua"));
hljs.registerLanguage(
  "makefile",
  require("highlight.js/lib/languages/makefile")
);
hljs.registerLanguage("matlab", require("highlight.js/lib/languages/matlab"));
hljs.registerLanguage("perl", require("highlight.js/lib/languages/perl"));
// hljs.registerLanguage(
//   "mojolicious",
//   require("highlight.js/lib/languages/mojolicious")
// );
// hljs.registerLanguage("monkey", require("highlight.js/lib/languages/monkey"));
// hljs.registerLanguage(
//   "moonscript",
//   require("highlight.js/lib/languages/moonscript")
// );
hljs.registerLanguage("nginx", require("highlight.js/lib/languages/nginx"));
hljs.registerLanguage(
  "node-repl",
  require("highlight.js/lib/languages/node-repl")
);
// hljs.registerLanguage("nsis", require("highlight.js/lib/languages/nsis"));
hljs.registerLanguage(
  "objectivec",
  require("highlight.js/lib/languages/objectivec")
);
// hljs.registerLanguage("ocaml", require("highlight.js/lib/languages/ocaml"));
// hljs.registerLanguage(
//   "openscad",
//   require("highlight.js/lib/languages/openscad")
// );
//hljs.registerLanguage("oxygene", require("highlight.js/lib/languages/oxygene"));
hljs.registerLanguage("parser3", require("highlight.js/lib/languages/parser3"));
hljs.registerLanguage("pf", require("highlight.js/lib/languages/pf"));
//hljs.registerLanguage("pgsql", require("highlight.js/lib/languages/pgsql"));
hljs.registerLanguage("php", require("highlight.js/lib/languages/php"));
hljs.registerLanguage(
  "php-template",
  require("highlight.js/lib/languages/php-template")
);
hljs.registerLanguage(
  "plaintext",
  require("highlight.js/lib/languages/plaintext")
);
hljs.registerLanguage("pony", require("highlight.js/lib/languages/pony"));
hljs.registerLanguage(
  "powershell",
  require("highlight.js/lib/languages/powershell")
);
hljs.registerLanguage(
  "processing",
  require("highlight.js/lib/languages/processing")
);
hljs.registerLanguage("profile", require("highlight.js/lib/languages/profile"));
hljs.registerLanguage("prolog", require("highlight.js/lib/languages/prolog"));
hljs.registerLanguage(
  "properties",
  require("highlight.js/lib/languages/properties")
);
hljs.registerLanguage("python", require("highlight.js/lib/languages/python"));
hljs.registerLanguage("r", require("highlight.js/lib/languages/r"));
// hljs.registerLanguage(
//   "roboconf",
//   require("highlight.js/lib/languages/roboconf")
// );
hljs.registerLanguage("rsl", require("highlight.js/lib/languages/rsl"));
// hljs.registerLanguage(
//   "ruleslanguage",
//   require("highlight.js/lib/languages/ruleslanguage")
// );
hljs.registerLanguage("rust", require("highlight.js/lib/languages/rust"));
//hljs.registerLanguage("sas", require("highlight.js/lib/languages/sas"));
hljs.registerLanguage("scala", require("highlight.js/lib/languages/scala"));
hljs.registerLanguage("scheme", require("highlight.js/lib/languages/scheme"));
//hljs.registerLanguage("scilab", require("highlight.js/lib/languages/scilab"));
hljs.registerLanguage("scss", require("highlight.js/lib/languages/scss"));
hljs.registerLanguage("shell", require("highlight.js/lib/languages/shell"));
hljs.registerLanguage("sml", require("highlight.js/lib/languages/sml"));
//hljs.registerLanguage("sqf", require("highlight.js/lib/languages/sqf"));
// hljs.registerLanguage(
//   "sql_more",
//   require("highlight.js/lib/languages/sql_more")
// );
// hljs.registerLanguage("sql", require("highlight.js/lib/languages/sql"));
hljs.registerLanguage("stylus", require("highlight.js/lib/languages/stylus"));
hljs.registerLanguage("subunit", require("highlight.js/lib/languages/subunit"));
hljs.registerLanguage("swift", require("highlight.js/lib/languages/swift"));
hljs.registerLanguage(
  "taggerscript",
  require("highlight.js/lib/languages/taggerscript")
);
hljs.registerLanguage("yaml", require("highlight.js/lib/languages/yaml"));
hljs.registerLanguage("twig", require("highlight.js/lib/languages/twig"));
hljs.registerLanguage(
  "typescript",
  require("highlight.js/lib/languages/typescript")
);
hljs.registerLanguage("vbnet", require("highlight.js/lib/languages/vbnet"));
hljs.registerLanguage(
  "vbscript",
  require("highlight.js/lib/languages/vbscript")
);
hljs.registerLanguage(
  "vbscript-html",
  require("highlight.js/lib/languages/vbscript-html")
);
hljs.registerLanguage("vim", require("highlight.js/lib/languages/vim"));
// hljs.registerLanguage("x86asm", require("highlight.js/lib/languages/x86asm"));
hljs.registerLanguage("xl", require("highlight.js/lib/languages/xl"));
hljs.registerLanguage("xquery", require("highlight.js/lib/languages/xquery"));
hljs.registerLanguage("zephir", require("highlight.js/lib/languages/zephir"));

export default hljs;
