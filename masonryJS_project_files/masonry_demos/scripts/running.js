  $(function() {
  var $main = $('#main');
  var $footer = $('footer');
  var $appendB = $('#append-btn');
  var $reldB = $('#reld-lyout');
  var imgSrcs = ['10-Emily.jpg', '417_1nb_wilz_ilz0065_v4.jpg',
    '501_1wilz_newbalance_ilz1876.jpg', '2013-5-1-TrailRunning.jpg',
    '2013-07-22-16-07-16-5.jpg', 'Anton-running.jpg', 'Bull-Run-fun.jpg',
    'DaveTrailRun-1.jpg', 'dolomites-trailrunning-av1-patitucciphoto-5.jpg',
    'Kilian-Jornet_MDalmasso.jpg', 'laufschuhe-fuer-trailrunning-.jpg',
    'Mile_for_Mile_header.jpg', 'PranaFlo-Trail-Running-Gear_214611_image.jpg',
    'Trail_Running_Photo1.jpg', 'trail_shoes_shutterstock_p.jpg',
    'trail-running-beginner-tips-1200.jpg', 'TrailRunning_1000x500.jpg',
    'TrailRunning-WenatcheeFoothills.jpg', 'trailrunninghawaii.jpg',
    'trails.jpg', 'tumblr_n0c3djGnF71qbqhgpo2_1280.jpg'];
  var counter = 0;


  function checkForImgSrcs(e) {
    var $eTar = $(e.target);

    e.preventDefault();

    if ($eTar.is($appendB)) {
      loadNext();
    } else {
      reloadImgs();
    }
  }

  function loadNext(e) {
    var appending = setInterval(function() {
      var imgSet = '<img src="images/trail_running/' + imgSrcs.splice(0, 1) + '" class="' + counter + '" />';

      $(imgSet).appendTo($main);

    }, 100);
    var $newImgs;

    setTimeout(function() {

      clearInterval(appending);
      $newImgs = $('.' + counter);

      $main.imagesLoaded(function() {
        $main.masonry('appended', $newImgs);
      });
      counter++;

      if (imgSrcs.length === 3) {  //on last iteration of appending
        $appendB.hide();
        $reldB.show();
      }

    }, 350);
  }

  function reloadImgs() {
    var $imgs = $('img');

    $reldB.hide();
    $imgs.css('width', "25%");
    $main.masonry({
      itemSelector: 'img'
    });
  }

//=================//simplest to get masonry loaded
   $main.imagesLoaded(function() {
    $main.masonry({
      itemSelector: 'img'
    });
  });
  //=================//


  $footer.on('click', 'button', checkForImgSrcs);
})