'use strict';

var gId = 1;

//service

var gCanvas;
var ctx;
// var canvasFactorHeight;
var canvasFactorWidth = 650;
var gCanvasHeight;
var gCanvasWidth;

function showModal(id) {
  onUpdateId(id);
  updateGmeme();
  document.querySelector('.memes-container').style.display = 'none';
  document.querySelector('.modal-container').style.transform = 'scale(1)';
  document.querySelector('.modal-container').style.display = 'flex';

  gCanvas = document.querySelector('#canvas');
  ctx = gCanvas.getContext('2d');
  if (window.innerWidth > 1295) {
    canvasFactorWidth = 650;
  } else canvasFactorWidth = 300;

  gCanvas.width = window.innerWidth - canvasFactorWidth;
  gCanvas.height = window.innerHeight - 200;

  gCanvasHeight = gCanvas.height;
  gCanvasWidth = gCanvas.width;

  updateImgCanvas();
}

function clearCanvas() {
  ctx.fillStyle = 'white';
  ctx.fillRect(0, 0, gCanvas.width, gCanvas.height);
}

function updateImgCanvas() {
  var image = new Image();
  image.src = `graphic/img/${gMeme.id}.jpg`;
  ctx.drawImage(image, 0, 0, gCanvas.width, gCanvas.height);
}

// clear canvas + input
function onClearMeme() {
  document.querySelector('.editor input').value = '';
  clearMeme();
}
