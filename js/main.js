'use strict';

var gId = 1;

//service

var gCanvas;
var ctx;
var canvasFactorHeight;
var canvasFactorWidth = 650;
var gCanvasHeight;
var gCanvasWidth;

function showModal(id) {
  onUpdateId(id);
  updateGmeme();
  document.body.classList.toggle('meme-on');
  document.querySelector('.memes-container').style.display = 'none';
  document.querySelector('.modal-container').style.transform = 'scale(1)';
  document.querySelector('.modal-container').style.display = 'flex';

  gCanvas = document.querySelector('#canvas');
  ctx = gCanvas.getContext('2d');
  if (window.innerWidth > 1295) {
    canvasFactorWidth = 650;
  } else if (window.innerWidth > 740) {
    canvasFactorWidth = 300;
  } else canvasFactorWidth = 100;

  // if (window.innerWidth > 1295) {
  //   canvasFactorHeight = 650;
  // } else if (window.innerWidth > 740) {
  //   canvasFactorHeight = 500;
  // } else canvasFactorHeight = 100;

  gCanvas.width = window.innerWidth - canvasFactorWidth;
  gCanvas.height = window.innerHeight - 200;

  gCanvasHeight = gCanvas.height;
  gCanvasWidth = gCanvas.width;

  updateImgCanvas();
}

function updateImgCanvas() {
  var image = new Image();

  if (gUploadFile) {
    image.src = gUploadFile;
  } else image.src = `graphic/img/${gMeme.id}.jpg`;
  ctx.drawImage(image, 0, 0, gCanvas.width, gCanvas.height);
}

// clear canvas + input
function onClearMeme() {
  document.querySelector('.editor input').value = '';
  clearMeme();
}

function onFileInputChange(ev) {
  handleImageFromInput(ev, showModal);
}
