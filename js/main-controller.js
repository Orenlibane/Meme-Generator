'use strict';

function onInit() {
  renderMeme();
  document.querySelector('.meme-searcher').focus();
}

function renderMeme() {
  var elMemes = document.querySelector('.memes-container');
  var strHTML = '';

  strHTML += `     <i class="fas fa-arrow-circle-left" onclick="onPrevPage()"></i>
  <i class="fas fa-arrow-circle-right" onclick="onNextPage()"></i><div
  }) style="background-image:url('graphic/img/add.png')" class='meme'><input type="file" name="image" onchange="onFileInputChange(event)" /></div>`;

  if (gFilterArr && gFilterArr.length !== gImgs.length) {
    gFilterArr.forEach(function(meme) {
      strHTML += `<div data-id=${meme.id} onclick=showModal(${
        meme.id
      }) style="background-image:url('graphic/img/${
        meme.id
      }.jpg')" class='meme'></div>`;
    });
  } else {
    getMemes().forEach(function(meme) {
      strHTML += `<div data-id=${meme.id} onclick=showModal(${
        meme.id
      }) style="background-image:url('graphic/img/${
        meme.id
      }.jpg')" class='meme'></div>`;
    });
  }
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
    var textAlign = gMeme.text[i].align
    
    var x;
    var y;
        if (i===0){
        y= gCanvasHeight / 10
        }else if(i===1){
        y= gCanvasHeight / 2
        }
        else if(i===2){
        y= gCanvasHeight -10
        }

        if (textAlign==='center'){
        x = gCanvasWidth / 2
        }else if(textAlign==='start'){
        x = gCanvasWidth / 6
        }
        else if(textAlign==='end'){
        x = gCanvasWidth / 1.1
        }


    
    ctx.strokeStyle = 'black';
    ctx.textAlign = textAlign;
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

function onChangeAlign(dir) {
  changeAlign(dir);
}

function onBackToGallery() {
  backToGallery();
}
function onUploadImg() {
  uploadImg();
}

function onShowAboutUsModal() {
  showAboutUsModal();
}

function onFilterMeme() {
  filterMeme();
  renderMeme();
}

function onNextPage() {
  nextPage();
  renderMeme();
}
function onPrevPage() {
  prevPage();
  renderMeme();
}
function onClearMeme() {
  document.querySelector('.editor input').value = '';
  clearMeme();
}

function onFileInputChange(ev) {
  handleImageFromInput(ev, showModal);
}
