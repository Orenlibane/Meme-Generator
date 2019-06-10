'use strict';

function onInit() {
  handleMemesNumOnPage();
  renderMeme();
  document.querySelector('.meme-searcher').focus();
  createArrForCompare();
  gettingTop5MaxesKeyWords();
}

function renderMeme() {
  var elMemes = document.querySelector('.memes-container');
  var strHTML = '';

  strHTML += `     <i class="fas fa-arrow-circle-left" onclick="onPrevPage()"></i>
  <i class="fas fa-arrow-circle-right" onclick="onNextPage()"></i><div
  }) style="background-image:url('graphic/img/add.png')" class='up meme'><input type="file" name="image" onchange="onFileInputChange(event)" /></div>`;

  if (gFilterArr && gFilterArr.length !== gImgs.length) {
    gFilterArr.forEach(function(meme) {
      strHTML += `<div data-id=${meme.id} onclick=showModal(${
        meme.id
      }) style="background-image:url('graphic/img/${
        meme.id
      }.jpg')" class='meme hide'></div>`;
    });
  } else {
    getMemes().forEach(function(meme) {
      strHTML += `<div data-id=${meme.id} onclick=showModal(${
        meme.id
      }) style="background-image:url('graphic/img/${
        meme.id
      }.jpg')" class='meme hide'></div>`;
    });
  }
  elMemes.innerHTML = strHTML;
  showMemes();
}

function onUpdateId(id) {
  updateId(id);
}

// TODO: Ask if the draws function should be in controller.

function draw(txt) {
  gMeme.text[gMeme.position].content = txt;
  drawText();
}

// prettier-ignore
function drawText() {
  updateImgCanvas();


  for (var i=0; i<gMeme.text.length;i++){
    var color = gMeme.text[i].color
    var txt = gMeme.text[i].content 
    var fontSize = gMeme.text[i].size +"rem"
    var font = gMeme.text[i].font
    var textAlign = gMeme.text[i].align
    

//TODO: make this a function for aligning text - returning a object with x and y
    var x;
    var y;
        if (i===0){
        y= gCanvasHeight / 6
        }else if(i===1){
        y= gCanvasHeight / 2
        }
        else if(i===2){
        y= gCanvasHeight -10
        }

        x = alignText(textAlign,x)
      
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
function onupLoadToFb() {
  upLoadToFb();
}

function onShowAboutUsModal() {
  showAboutUsModal();
}

function onFilterMeme() {
  filterMeme();
  renderMeme();
}

function onNextPage() {
  var checkIfLastPage = nextPage();
  if (checkIfLastPage) renderMeme();
}
function onPrevPage() {
  var checkIfLastPage = prevPage();
  if (checkIfLastPage) renderMeme();
}

//we think its better to clean all, should we just clean 1 line
function onClearMeme() {
  document.querySelector('.editor input').value = '';
  clearMeme();
}

function onFileInputChange(ev) {
  handleImageFromInput(ev, showModal);
}

function onSetLang(lang) {
  setLang(lang);
  if (lang === 'he') {
    document.querySelector('body').style.direction = 'rtl';
    document.querySelector('body').classList.toggle('rtl');
  } else {
    if (document.body.classList.contains('rtl')) {
      document.querySelector('body').classList.toggle('rtl');
    }
    document.querySelector('body').style.direction = 'ltr';
  }
  document.querySelector('.controller').style.direction = 'ltr';

  doTrans();
}

function onAddSearch(elKeyWord) {
  document.querySelector('.key-words-modal').classList.toggle('show');
  document.querySelector('.main-nav-list').classList.toggle('toggle-menu');
  filterByKeyword(elKeyWord);
}

function onShowKeywordsSearch() {
  showKeywordSearch();
  renderTopKeyWords();
}

function renderTopKeyWords() {
  document.querySelector('.top1').innerText = `${compareArr[0].key}`;
  document.querySelector('.top2').innerText = `${compareArr[1].key}`;
  document.querySelector('.top3').innerText = `${compareArr[2].key}`;
  document.querySelector('.top4').innerText = `${compareArr[3].key}`;
  document.querySelector('.top5').innerText = `${compareArr[4].key}`;
}

function handleMemesNumOnPage() {
  var width = window.innerWidth;
  setMemesCount(width);
}

function onShowMenu() {
  document.querySelector('.main-nav-list').classList.toggle('toggle-menu');
}

function onSendMsg() {
  sendMsg();
}
