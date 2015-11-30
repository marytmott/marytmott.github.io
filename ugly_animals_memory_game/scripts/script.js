(function() {
  var tilesDiv = document.querySelector('.tiles');
  var shuffledImages;
  var oneCardFlipped = false;
  var imgSrc1;
  var divId1;
  var imgSrc2;
  var divId2;
  var clickedDiv1;
  var clickedDiv2;
  var div1Class;
  var div2Class;
  var matched = false;
  var notSameImage = false;
  var displayCardsCheck;
  var button = document.querySelector('.button-newGame');


  function addGameImgDivs() {
    for (var i = 0; i < 16; i++) {
      var newDiv = document.createElement('div');

      newDiv.style.margin = '5px';
      newDiv.style.display = 'inline-block';
      newDiv.setAttribute('class', 'game-image');
      newDiv.setAttribute('id', i);

      tilesDiv.appendChild(newDiv);
    }
  }


  function cardBacks() {
    var gameDivs = document.querySelectorAll('.game-image');

    for (var j = 0; j < 16; j++) {
      var newImg = document.createElement('img');

      newImg.setAttribute('src', 'images/ugly_card_front.jpg');
      newImg.addEventListener('click', clickHandler);

      gameDivs[j].appendChild(newImg);
    }
    return shuffledImages = getGameboardAnswer();
  }


   function shuffle(arr) {
    var randomNum;
    var randomIndexNums = [];
    var indexValueOfSample;
    var sampleArray = [];

      while (randomIndexNums.length < arr.length) {
        randomNum = Math.floor(Math.random() * arr.length);

        if (randomIndexNums.indexOf(randomNum) === -1) {
          randomIndexNums.push(randomNum);
        }
      }
      //populate sample array by looping through the randomIndexNums array
      for (var i = 0; i < arr.length; i++) {
      //pull index Value from randomIndexNums array to populate to return array w/ sample nums from arr
      indexValueOfSample = randomIndexNums[i];
      sampleArray.push(arr[indexValueOfSample]);
      }
      return sampleArray;
    }


    function getGameboardAnswer() {
      var images = ['images/ugly_cat.jpg', 'images/ugly_dog.jpg', 'images/ugly_dog_tongue.jpg',
        'images/ugly_dude.jpg', 'images/ugly_kim.jpg', 'images/ugly_llama.jpg',
        'images/ugly_monkey.jpg', 'images/ugly_tiger.jpg','images/ugly_cat.jpg', 'images/ugly_dog.jpg', 'images/ugly_dog_tongue.jpg',
        'images/ugly_dude.jpg', 'images/ugly_kim.jpg', 'images/ugly_llama.jpg',
        'images/ugly_monkey.jpg', 'images/ugly_tiger.jpg'
        ];
      var shuffledImages = shuffle(images);

      return shuffledImages;
    }

    function clickHandler() {
      oneCardFlipped = !oneCardFlipped;

      if (oneCardFlipped) {
        if (displayCardsCheck) {
          //will break game if this runs on first turn
          clearTimeout(displayCardsCheck);
          cardsNoMatch();
        }

        divId1 = this.parentNode.getAttribute('id');
        this.setAttribute('src', shuffledImages[divId1]);
        imgSrc1 = shuffledImages[divId1];

      } else {
        divId2 = this.parentNode.getAttribute('id');
        this.setAttribute('src', shuffledImages[divId2]);
        changeImage2();

        if (!notSameDiv) {
          //reset to allow another image to turn if player clicks same image twice
          oneCardFlipped = true;
        } else if (div1Class === 'game-image' && div2Class === 'game-image' && matched && notSameDiv) {
          matchedCards();
        } else {
          displayCardsCheck = setTimeout(function() {
            cardsNoMatch();
          }, 2000);
        }
      }
    }

    function changeImage2() {
      imgSrc2 = shuffledImages[divId2];
      clickedDiv1 = document.getElementById(divId1);
      clickedDiv2 = document.getElementById(divId2);
      div1Class = clickedDiv1.getAttribute('class');
      div2Class = clickedDiv2.getAttribute('class');
      matched = imgSrc1 === imgSrc2;
      notSameDiv = divId1 !== divId2;
    }

    function matchedCards() {
      clickedDiv1.setAttribute('class', 'matched');
      clickedDiv2.setAttribute('class', 'matched');
      //need to redefine here so these won't reset when cardsNoMatch() is called in first
      //conditional above
      div1Class = clickedDiv1.getAttribute('class');
      div2Class = clickedDiv2.getAttribute('class');
    }


    function cardsNoMatch() {
        //only change if last 2 were game-image class and 2 pics have been turned
        if (div1Class === 'game-image' && div2Class === 'game-image') {

        clickedDiv1.firstChild.setAttribute('src', 'images/ugly_card_front.jpg');
        clickedDiv2.firstChild.setAttribute('src', 'images/ugly_card_front.jpg');
      }
    }

  addGameImgDivs();
  cardBacks();

  button.addEventListener('mousedown', function() {
    tilesDiv.innerHTML = '';
    addGameImgDivs();
    cardBacks();
  });

})();
