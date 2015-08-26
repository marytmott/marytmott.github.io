$(function() {
  var $main = $('#main');

  $main.imagesLoaded(function() {
    $main.masonry({
      itemSelector: 'img',
      columnWidth: 'img'

    });
  });

})