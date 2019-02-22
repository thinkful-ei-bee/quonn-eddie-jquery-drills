/* global $*/

$(function() {
  $(".thumbnail").on("click", "img", function(event) {
    $(".hero img").attr("src", $(this).attr("src"));
  });
});
