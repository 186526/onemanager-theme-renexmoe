import mdui from "../lib/mdui.js";
const $ = mdui.$;
export default () => {
  $.fn.extend({
    sortElements: function (comparator, getSortable) {
      getSortable =
        getSortable ||
        function () {
          return this;
        };
      var placements = this.map(function () {
        var sortElement = getSortable.call(this),
          parentNode = sortElement.parentNode,
          nextSibling = parentNode.insertBefore(
            document.createTextNode(""),
            sortElement.nextSibling
          );
        return function () {
          parentNode.insertBefore(this, nextSibling);
          parentNode.removeChild(nextSibling);
        };
      });
      return [].sort.call(this, comparator).each(function (i) {
        placements[i].call(getSortable.call(this));
      });
    },
  });
  $(() => {
    $(".icon-sort").on("click", function () {
      let sort_type = $(this).attr("data-sort"),
        sort_order = $(this).attr("data-order");
      let sort_order_to = sort_order === "less" ? "more" : "less";
      $("li[data-sort]").sortElements(function (a, b) {
        let data_a = $(a).attr("data-sort-" + sort_type),
          data_b = $(b).attr("data-sort-" + sort_type);
        let rt = data_a.localeCompare(data_b, undefined, {
          numeric: true,
        });
        return sort_order === "more" ? 0 - rt : rt;
      });
      $(this)
        .attr("data-order", sort_order_to)
        .text("expand_" + sort_order_to);
    });
  });
};
