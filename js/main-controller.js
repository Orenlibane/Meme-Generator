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
  drawText(color, txt);
  gMeme.text.content = txt;
}

// prettier-ignore
function drawText(color = gMeme.text[gMeme.position].color , txt= gMeme.text[gMeme.position].content ,fontSize = gMeme.text[gMeme.position].size,font = gMeme.text[gMeme.position].font) {
  updateImgCanvas(gMeme.id, gCanvasHeight, gCanvasWidth);
  var x;
  var y;
  if (gMeme.position===1){
    x = gCanvasWidth / 3
    y= gCanvasHeight / 10
  }else if(gMeme.position===2){
    x = gCanvasWidth / 3
    y= gCanvasHeight / 2
  }
  else if(gMeme.position===2){
    x = gCanvasWidth / 3
    y= gCanvasHeight / 70
  }
  
  ctx.strokeStyle = 'black';
  var w = (ctx.font = fontSize + ' ' + font);
  ctx.font = fontSize + ' ' + 'impact';
  ctx.fillText(txt, x, y);
  ctx.fillStyle = color;
  ctx.strokeText(txt, x, y);
}
