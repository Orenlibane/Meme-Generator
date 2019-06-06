'use strict';

var gId = 1;

//service

var gCanvas;
var ctx;
// var canvasFactorHeight;
var canvasFactorWidth = 650;

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

  var image = new Image();

  image.src = `graphic/img/${id}.jpg`;
  ctx.drawImage(image, 0, 0, gCanvas.width, gCanvas.height);
}
