(function() {
  var body = document.querySelector('body');
  var currentColor;
  var mainDiv;
  var clearButton;
  var drag = false;

  function makeContainerDiv(n) {
    for (var i = 0; i < n; i++) {
      var containerDiv = document.createElement('div');

      containerDiv.style.width = '1050px';
      containerDiv.style.margin = '0 auto';
      body.appendChild(containerDiv);
    }
  }

  function makePaintPixels() {
    var colors = ['0, 0, 0', '32, 32, 32', '64, 64, 64', '128, 128, 128', '255, 255, 255',
      '249, 217, 113', '198, 96, 0', '127, 50, 0', '255, 0, 0', '65, 0, 0', '130, 0, 0',
      '194, 0, 0', '255, 61, 56', '255, 127, 125', '255, 192, 191', '255, 255, 0', '64, 64, 0',
      '128, 129, 0', '192, 194, 0', '255, 255, 29', '255, 255, 119', '255, 255, 189',
      '0, 255, 0', '0, 65, 0', '0, 129, 0', '0, 194, 0', '47, 255, 42', '123, 255, 121',
      '190, 255, 190', '0, 255, 255', '0, 64, 64', '0, 128, 129', '0, 192, 193',
      '45, 255, 255', '122, 255, 255', '190, 255, 255', '0, 0, 255', '0, 0, 65',
      '0, 0, 195', '127, 124, 255', '192, 191, 255', '255, 0, 255', '65, 0, 65',
      '129, 0, 130', '194, 0, 194', '255, 48, 255', '255, 123, 255', '255, 190, 255'];

    // 48 divs per row
    for(var i = 0; i < 48; i++) {
      var paintDiv = document.createElement('div');

      paintDiv.style.backgroundColor = 'rgb(' + colors[i] + ')';
      paintDiv.style.margin = '1px';
      paintDiv.style.border = '1px solid black';
      paintDiv.style.width = '1.70%';
      paintDiv.style.paddingBottom = '1.70%';
      paintDiv.style.float = 'left';
      paintDiv.setAttribute('class', 'paintColor');
      paintDiv.addEventListener('click', function() {
        currentColor = this.style.backgroundColor;
      });

      mainDiv.appendChild(paintDiv);
    }
  }

  function makeBlankPixels() {

    // 48 divs per row
    // 28 rows
    for(var i = 0; i < 1344; i++) {
      var blankDiv = document.createElement('div');

      blankDiv.style.margin = '1px';
      blankDiv.style.border = '1px solid black';
      blankDiv.style.width = '1.70%';
      blankDiv.style.paddingBottom = '1.70%';
      blankDiv.style.float = 'left';
      blankDiv.setAttribute('class', 'blank');

      //allows user to color cells one at a time
      blankDiv.addEventListener('click', function() {
        this.style.backgroundColor = currentColor;
      });

      //next three functions allow user to drag colors over cells!
      blankDiv.addEventListener('mousedown', function() {
        // add ternary b/c if user mouseup off screen, it bugs out; so, clicking again will
        // toggle drag to false and make it stop
        drag = drag === false ? true : false;
      });
      blankDiv.addEventListener('mouseenter', function(e) {
        if (drag) {
          this.style.backgroundColor = currentColor;
        }
      });
      blankDiv.addEventListener('mouseup', function() {
        drag = false;
        });

      mainDiv.appendChild(blankDiv);
    }
  }

  function addClearButton() {
    var blankCells = document.querySelectorAll('.blank');

    clearButton = document.createElement('button');
    clearButton.innerHTML = 'Clear Canvas';
    clearButton.style.height = '30px';
    clearButton.addEventListener('click', function() {
      for (var i = 0; i < blankCells.length; i++) {
        blankCells[i].style.backgroundColor = '';
        currentColor = '';
      }
    });

    buttonDiv.appendChild(clearButton);
  }

  makeContainerDiv(2);
  mainDiv = document.querySelectorAll('div')[0];
  buttonDiv = document.querySelectorAll('div')[1];
  makePaintPixels();
  makeBlankPixels();
  addClearButton();

})();

