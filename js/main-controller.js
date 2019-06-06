'use strict';

function onInit() {
  renderMeme();
}

function renderMeme() {
  //   debugger;
  var elMemes = document.querySelector('.memes-container');
  var strHTML = '';

  gImgs.forEach(function(meme) {
    strHTML += `<div data-id=${meme.id} onclick=showModal(${
      meme.id
    }) style="background-image:url('graphic/img/${
      meme.id
    }.jpg')" class='meme'></div>`;
  });

  elMemes.innerHTML = strHTML;
}

function showId(id) {
  console.log(id);
}

function onUpdateId(id) {
  updateId(id);
}

function draw(ev, txt, color) {
  console.log(ev);
  drawText(gCanvasWidth / 3, gCanvasHeight / 10, color, txt);
  gMeme.text.content = txt;
}

// prettier-ignore
function drawText(x,y,color = gMeme.text.color , txt= gMeme.text.content ,fontSize = gMeme.text.size,font = gMeme.text.font,position = 1) {
  ctx.strokeStyle = 'black';
  var w = (ctx.font = fontSize + ' ' + font);
  ctx.font = fontSize + ' ' + 'impact';
  ctx.fillText(txt, x, y);
  ctx.fillStyle = color;
  ctx.strokeText(txt, x, y);
}
