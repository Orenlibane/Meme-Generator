'use strict';

var gId = 1;

//service

var gCanvas;
var ctx;

function showModal(id) {
  onUpdateId(id);
  document.querySelector('.memes-container').style.display = 'none';
  document.querySelector('.modal-container').style.transform = 'scale(1)';
  document.querySelector('.modal-container').style.display = 'flex';

  gCanvas = document.querySelector('#canvas');
  ctx = gCanvas.getContext('2d');
  gCanvas.width = window.innerWidth - 200;
  gCanvas.height = window.innerHeight - 300;
}
