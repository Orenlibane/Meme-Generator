'use strict';
function onChangeColor(pickedColor) {
  changeColor(pickedColor);
}

function onChangePos(diraction) {
  changePos(diraction);
  drawText();
}

function onChangeSize(sizeVariation) {
  changeSize(sizeVariation);
}

function saveCanvas(elLink) {
  gDownload = true;
  drawText();
  const data = gCanvas.toDataURL();
  elLink.href = data;
  elLink.download = 'my-img.jpg';
  gDownload = false;
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

function onupLoadToFb(elbtn, ev) {
  upLoadToFb(elbtn, ev);
}

function onClearMeme() {
  document.querySelector('.editor input').value = '';
  clearMeme();
}
