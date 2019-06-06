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

function draw(txt) {
  gMeme.text[gMeme.position].content = txt;
  drawText();
}

// prettier-ignore
function drawText() {
  updateImgCanvas(gMeme.id, gCanvasHeight, gCanvasWidth);


  for (var i=0; i<gMeme.text.length;i++){
    var color = gMeme.text[i].color
    var txt = gMeme.text[i].content 
    var fontSize = gMeme.text[i].size +"rem"
    var font = gMeme.text[i].font
    
    var x;
    var y;
        if (i===0){
        x = gCanvasWidth / 3
        y= gCanvasHeight / 10
        }else if(i===1){
        x = gCanvasWidth / 3
        y= gCanvasHeight / 2
        }
        else if(i===2){
        x = gCanvasWidth / 3
        y= gCanvasHeight -10
        }
    
    ctx.strokeStyle = 'black';
    ctx.font = fontSize + ' ' + font;
    ctx.fillStyle = color;
    ctx.fillText(txt, x, y);
    ctx.strokeText(txt, x, y);
  }

     
}

function onChangeColor(pickedColor) {
  changeColor(pickedColor);
}
function onChangePos(diraction) {
  changePos(diraction);
}

function onChangeSize(sizeVariation) {
  changeSize(sizeVariation);
}
function saveCanvas(elLink) {
  const data = gCanvas.toDataURL();
  elLink.href = data;
  elLink.download = 'my-img.jpg';
}

function onShowFonts() {
  showFonts();
}

function onChangeFont(fontNumber) {
  changeFont(fontNumber);
}
