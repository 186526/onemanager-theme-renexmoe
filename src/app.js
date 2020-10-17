var $ = mdui.$;

function loadjs(url, defer = false) {
    let i = document.createElement("script");
    i.src = url;
    i.defer = defer;
    $("head").append(i);
}

loadjs("https://cdn.jsdelivr.net/gh/186526/onemanager-theme-renexmoe@v1/dependence/cookie.min.js");
whenAvailable("docCookies", function () {
    if (!docCookies.getItem("darkmod")) {
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            docCookies.setItem("darkmod", true, 1200, "/");
            $("#app").addClass("mdui-theme-layout-dark");
        } else {
            docCookies.setItem("darkmod", false, 1200, "/");
            $("#app").removeClass("mdui-theme-layout-dark");
        }
    }
    $("#app").removeClass("mdui-theme-layout-auto");
    if (eval(docCookies.getItem("darkmod"))) {
        $("#app").addClass("mdui-theme-layout-dark");
    } else {
        $("#app").removeClass("mdui-theme-layout-dark");
    }
});

function whenAvailable(name, callback) {
    var interval = 100;
    window.setTimeout(function () {
        if (window[name]) {
            callback(window[name]);
        } else {
            window.setTimeout(arguments.callee, interval);
        }
    }, interval);
}

function changecolor() {
    whenAvailable("docCookies", function () {
        if (eval(docCookies.getItem("darkmod"))) {
            $("#app").removeClass("mdui-theme-layout-dark");
            docCookies.setItem("darkmod", false, 1200, "/")
        } else {
            $("#app").addClass("mdui-theme-layout-dark", "/");
            docCookies.setItem("darkmod", true, 1200);
        }
    })
};

function geturl(b) {
    try {
        new URL(b);
    } catch (error) {
        return;
    };
    if (new URL(b).host !== window.location.host) {
        return;
    }
    let host = window.location.protocol + "//" + window.location.host;
    if (new URL(b).search === "?preview") {
        return host + new URL(b).pathname + "?preview";
    }
    let a = "/";
    for (let i of new URL(b).pathname.split("/").slice(1, -1)) {
        a = a + i + "/";
    }
    return host + a;
}

function getpreload() {
    let includeKeywords = [];
    let a = document.getElementsByTagName("a");
    for (let i in a) {
        includeKeywords.push(geturl(a[i].href))
    }
    return $.unique(includeKeywords).filter(Boolean);
}

{
    let a = getpreload();
    for (let i in a) {
        const link = document.createElement(`link`);
        link.rel = `prefetch`;
        link.href = a[i];
        document.head.appendChild(link);
    }
}

{
    $("#app").addClass("mdui-theme-primary-" + primary_color + " mdui-theme-accent-" + accent_color);
    if (document.getElementById("head")) {
        loadjs("https://cdn.jsdelivr.net/npm/marked@1.2.0/marked.min.js");
        whenAvailable("marked", function () {
            $('#head').html(marked($('#head-md').html()));
        })
    }
    if (document.getElementById("readme")) {
        loadjs("https://cdn.jsdelivr.net/npm/marked@1.2.0/marked.min.js");
        whenAvailable("marked", function () {
            $('#readme').html(marked($('#readme-md').html()));
        })
    }
}