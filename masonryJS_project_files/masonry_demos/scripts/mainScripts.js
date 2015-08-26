$(function() {
  var $body = $('body');
  var $main = $('.main');
  var $button = $('#img-btn')


  WebFont.load({
    google: {
        families: ["Merriweather+Sans:700"]
    },
    active: function() {

        $main.masonry({
          itemSelector: '.quote',
          isFitWidth: true,
          isResizable: true
        });

      }
    });

  function addImages(e) {
    var $h1 = $('h1');
    e.preventDefault();


    $('body').css('background-color', 'rgb(61, 127, 127)' );
    $('header').css('background-color', 'transparent');
    $h1.css('color', 'rgb(194, 128, 128)');
    $h1.css('font-weight', 'bold');
    $button.remove();

    appendImages();
  }

  function appendImages() {
    var srcs = ['Perfect-Moment-Inspiration-Picture-Quotes.jpg', 'moving-forward-quote.jpg',
      'm61963.jpg', 'inspirational-quotes5.jpg', 'Inspirational-Quotes-53.jpg',
      'Inspirational-Quotes-19.jpg', 'inspirational-quotes-3_zps809af04c.jpg',
      'inspirational-quotes-2.jpg', 'gandhi-inspirational-quotes.png', 'unnamed.jpg',
      '5021034407ce4.jpg', '0925887.jpg', '3V3PJ.jpg', 'strength_motivational_quote.jpg',
      ];
    var $grid;
    var $images;

    $main.remove();
    $body.append('<div class="main"></div>');
    $main.addClass('main');
    $main = $('.main');

    for (var i = 0; i < srcs.length; i++) {
      var insert = '<img src="images/insp_quotes/' + srcs[i] + '"alt="' + i + '" />';


      $(insert).appendTo($main);

    }

    setTimeout(function() {
      $main.imagesLoaded(function() {
        $main.masonry({
          itemSelector: 'img',
          isFitWidth: true,
          isResizable: true
        });
      });

      $main.hide().fadeIn(4000);


    }, 4000);
  }


  $button.on('click', addImages)


})