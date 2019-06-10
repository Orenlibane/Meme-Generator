'use strict';

function onInit() {
  handleMemesNumOnPage();
  renderMeme();
  document.querySelector('.meme-searcher').focus();
  createArrForCompare();
  gettingTop5MaxesKeyWords();
  handlePaging();
}

function renderMeme() {
  var elMemes = document.querySelector('.memes-container');
  var strHTML = '';

  strHTML += `<i class="fas fa-arrow-circle-left" onclick="onPrevPage()"></i>
  <i class="fas fa-arrow-circle-right" onclick="onNextPage()"></i><div
  }) style="background-image:url('graphic/img/add.png')" class='up-meme meme'><input type="file" name="image" onchange="onFileInputChange(event)" /></div>`;

  if (gFilterArr && gFilterArr.length !== gImgs.length) {
    gFilterArr.forEach(function(meme) {
      strHTML += `<div data-id=${meme.id} onclick=onShowModal(${
        meme.id
      }) style="background-image:url('graphic/img/${
        meme.id
      }.jpg')" class='meme hide'></div>`;
    });
  } else {
    getMemes().forEach(function(meme) {
      strHTML += `<div data-id=${meme.id} onclick=onShowModal(${
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

function onBackToGallery() {
  backToGallery();
}

function onShowAboutUsModal() {
  showAboutUsModal();
}

function onFilterMeme() {
  filterMeme();
  renderMeme();
}

function onNextPage() {
  var checkIfNotLastPage = nextPage();
  if (checkIfNotLastPage) {
    renderMeme();

    if (gCurrPageIdx + 1 === +parseFloat(gImgs.length / gPageSize).toFixed(0)) {
      document.querySelector('.fa-arrow-circle-right').style.display = 'none';
    }
  }
}
function onPrevPage() {
  var checkIfLastPage = prevPage();
  if (checkIfLastPage) {
    renderMeme();
    if (!gCurrPageIdx) {
      document.querySelector('.fa-arrow-circle-left').style.display = 'none';
    }
  }
}
//we think its better to clean all, should we just clean 1 line

function onFileInputChange(ev) {
  debugger;
  handleImageFromInput(ev, showModal);
}

function onSetLang(lang) {
  setLang(lang);
  if (lang === 'he') {
    document.querySelector('body').style.direction = 'rtl';
    document.querySelector('body').classList.toggle('rtl');
    handlePaging();
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

function handlePaging() {
  if (!gCurrPageIdx) {
    document.querySelector('.fa-arrow-circle-left').style.display = 'none';
  }
}

function onShowModal(id) {
  showModal(id);
}
