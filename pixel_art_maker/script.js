(function() {
  var body = document.querySelector('body');
  var paintDivs;
  var blankDivs;
  var currentColor;
  var mainDiv;
  var clearButton;
  var drag = false;

  function makeContainerDiv() {
    var containerDiv = document.createElement('div');
    containerDiv.style.width = '960px';
    containerDiv.style.margin = '0 auto';
    body.appendChild(containerDiv);
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

    // 51 divs per row
    for(var i = 0; i < 51; i++) {
      paintDiv = document.createElement('div');
      paintDiv.style.backgroundColor = 'rgb(' + colors[i] + ')';
      paintDiv.style.margin = '1px';
      paintDiv.style.border = '1px solid black';
      paintDiv.style.width = '1.52%';
      paintDiv.style.paddingBottom = '1.52%';
      paintDiv.style.float = 'left';
      paintDiv.setAttribute('class', 'paintColor');
      paintDiv.addEventListener('click', function() {
        currentColor = this.style.backgroundColor;
      });

      mainDiv.appendChild(paintDiv);
    }
  }

  function makeBlankPixels() {

    // 51 divs per row
    // 30 rows
    for(var i = 0; i < 1530; i++) {
      blankDiv = document.createElement('div');
      blankDiv.style.margin = '1px';
      blankDiv.style.border = '1px solid black';
      blankDiv.style.width = '1.52%';
      blankDiv.style.paddingBottom = '1.52%';
      blankDiv.style.float = 'left';
      blankDiv.setAttribute('class', 'blank');
      blankDiv.addEventListener('click', function() {
        // if (drag) {
        //   drag = false;
        // } else {
        //   drag = true;

        // }

        // if (drag)
        // drag = drag === true ? false : true;

        this.style.backgroundColor = currentColor;


      });
      // blankDiv.addEventListener('mouseover', )

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

    mainDiv.appendChild(clearButton);
  }

  makeContainerDiv();
  mainDiv = document.querySelector('div');
  makePaintPixels();
  makeBlankPixels();
  addClearButton();

console.log(drag);






})();
