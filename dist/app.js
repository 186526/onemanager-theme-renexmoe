"use strict";

var $ = mdui.$;

function loadjs(url) {
    var defer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    var i = document.createElement("script");
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
            docCookies.setItem("darkmod", false, 1200, "/");
        } else {
            $("#app").addClass("mdui-theme-layout-dark", "/");
            docCookies.setItem("darkmod", true, 1200, "/");
        }
    });
}

async function geturl(b) {
    try {
        new URL(b);
    } catch (error) {
        return;
    }
    if (new URL(b).host !== window.location.host) {
        return;
    }
    var host = window.location.protocol + "//" + window.location.host;
    if (new URL(b).search === "?preview") {
        return host + new URL(b).pathname + "?preview";
    }
    var a = await "/";
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = new URL(b).pathname.split("/").slice(1, -1)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var i = _step.value;

            a = a + i + "/";
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }

    return host + a;
}

$.fn.extend({
    sortElements: function sortElements(comparator, getSortable) {
        getSortable = getSortable || function () {
            return this;
        };
        var placements = this.map(function () {
            var sortElement = getSortable.call(this),
                parentNode = sortElement.parentNode,
                nextSibling = parentNode.insertBefore(document.createTextNode(''), sortElement.nextSibling);
            return function () {
                parentNode.insertBefore(this, nextSibling);
                parentNode.removeChild(nextSibling);
            };
        });
        return [].sort.call(this, comparator).each(function (i) {
            placements[i].call(getSortable.call(this));
        });
    }
});

async function getpreload() {
    var includeKeywords = [];
    var a = await document.getElementsByTagName("a");
    for (var i in a) {
        includeKeywords.push((await geturl(a[i].href)));
    }
    return $.unique(includeKeywords).filter(Boolean);
}

function loadcss(url) {
    var i = document.createElement("link");
    i.rel = "stylesheet";
    i.href = url;
    $("head").append(i);
}

async function prefetch(url) {
    var link = document.createElement("link");
    link.rel = "prefetch";
    link.href = url;
    $("head").append(link);
}

{
    $("#app").addClass("mdui-theme-primary-" + primary_color + " mdui-theme-accent-" + accent_color);
    if (document.getElementById("head")) {
        loadjs("https://cdn.jsdelivr.net/npm/marked@1.2.0/marked.min.js");
        loadcss("https://fonts.googleapis.com/css2?family=Montserrat&display=swap");
        whenAvailable("marked", function () {
            $('#head').html(marked($('#head-md').html()));
        });
    }
    if (document.getElementById("readme")) {
        loadjs("https://cdn.jsdelivr.net/npm/marked@1.2.0/marked.min.js");
        loadcss("https://fonts.googleapis.com/css2?family=Montserrat&display=swap");
        whenAvailable("marked", function () {
            $('#readme').html(marked($('#readme-md').html()));
        });
    }
}

{
    $(function () {
        $('.icon-sort').on('click', function () {
            var sort_type = $(this).attr("data-sort"),
                sort_order = $(this).attr("data-order");
            var sort_order_to = sort_order === "less" ? "more" : "less";
            $('li[data-sort]').sortElements(function (a, b) {
                var data_a = $(a).attr("data-sort-" + sort_type),
                    data_b = $(b).attr("data-sort-" + sort_type);
                var rt = data_a.localeCompare(data_b, undefined, {
                    numeric: true
                });
                return sort_order === "more" ? 0 - rt : rt;
            });
            $(this).attr("data-order", sort_order_to).text("expand_" + sort_order_to);
        });
    });
}

{
    window.onload = function () {
        (async function () {
            var a = await getpreload();
            for (var i in a) {
                prefetch(a[i]);
            }
        })();
    };
}