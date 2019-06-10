'use strict';

var gPageSize = 14;
var gCurrPageIdx = 0;
var gImgId = 1;
var gcurrentImgId;
var gCanvas;
var ctx;
var gMeme;
var canvasFactorWidth = 650;
var gCanvasHeight;
var gCanvasWidth;
var gUploadFile;
var gFilterArr;
var gFilterBy;
var gIsFilterOn = false;
var compareArr = [];
var gkeywords = {};
var gScreenSize = 500;
var gDownload;

function showModal(id) {
  updateKeywordMap();
  onUpdateId(id);
  createGmemeStrucute();

  // js media queries
  if (window.innerWidth > 1295) {
    canvasFactorWidth = 950;
  } else if (window.innerWidth > 1000) {
    canvasFactorWidth = 700;
  } else if (window.innerWidth > 850) {
    canvasFactorWidth = 450;
  } else if (window.innerWidth > 740) {
    canvasFactorWidth = 400;
  } else if (window.innerWidth > 550) {
    canvasFactorWidth = 250;
  } else if (window.innerWidth > 350) {
    canvasFactorWidth = 100;
    gScreenSize = 375;
  } else {
    canvasFactorWidth = 50;
    gScreenSize = 375;
  }

  gCanvas.width = window.innerWidth - canvasFactorWidth;
  gCanvas.height = window.innerHeight - 250;

  updateImgCanvas();
}

function updateId(id) {
  gcurrentImgId = id;
}

function createGmemeStrucute() {
  gMeme = {
    id: gcurrentImgId,
    position: 0,
    text: [
      {
        content: '',
        size: 3,
        align: 'center',
        color: 'white',
        font: 'impact'
      },
      {
        content: '',
        size: 3,
        align: 'center',
        color: 'white',
        font: 'impact'
      },
      {
        content: '',
        size: 3,
        align: 'center',
        color: 'white',
        font: 'impact'
      }
    ]
  };
}

function backToGallery() {
  gUploadFile = false;
}

function showAboutUsModal() {
  document.querySelector('.about-us-modal').classList.toggle('show');
  document.querySelector('.screen').classList.toggle('show');
}

function sendMsg() {
  window.open(
    'https://mail.google.com/mail/?view=cm&fs=1&to=me@example.com&su=SUBJECT&body=BODY'
  );
}

function getMemes() {
  var fromIdx = gCurrPageIdx * gPageSize;
  var memes = gImgs.slice(fromIdx, fromIdx + gPageSize);
  return memes;
}

function showMemes() {
  var memes = document.querySelectorAll('.meme');
  var i = 500;
  memes.forEach(function(meme) {
    setTimeout(function() {
      meme.classList.remove('hide');
    }, i);
    i += 30;
  });
}

// function for setting the memes per pages and pages navigation
function setMemesCount(width) {
  if (width < 650) gPageSize = 8;
}

function nextPage() {
  if (gCurrPageIdx + 1 < gImgs.length / gPageSize) {
    gCurrPageIdx++;
    return true;
  } else {
    return false;
  }
}

function prevPage() {
  if (gCurrPageIdx > 0) {
    gCurrPageIdx--;
    return true;
  } else {
    return false;
  }
}

// for regular filtering

function filterMeme() {
  gFilterArr = getFilterArr();
}

function checkIfFilterOn() {
  var filterInput = document.querySelector('.meme-searcher').value;

  if (!filterInput) gIsFilterOn = false;
}

function getFilterArr() {
  gIsFilterOn = true;
  gFilterBy = document.querySelector('.meme-searcher').value;
  if (!gFilterBy) return gImgs;
  var myRe = new RegExp('^' + `${gFilterBy}`, 'i');

  var filterImages = gImgs.filter(function(img) {
    for (var i = 0; i < img.keywords.length; i++) {
      if (myRe.exec(img.keywords[i])) {
        return myRe.exec(img.keywords[i]);
      }
    }
    return myRe.exec(img.keywords[i]);
  });
  return filterImages;
}

// Filter for key words

function filterByKeyword(elKeyWord) {
  document.querySelector('.meme-searcher').value = elKeyWord.innerText;
  filterMeme();
  renderMeme();
}

function showKeywordSearch() {
  document.querySelector('.key-words-modal').classList.toggle('show');
}

function showWordsSearchCount() {
  gImgs.forEach(function(img) {
    img.keywords.forEach(function(keywords) {
      var count = gkeywords[keywords];
      if (keywords) {
        gkeywords[keywords] = count ? count + 1 : 1;
      }
    });
  });
}

function createArrForCompare() {
  showWordsSearchCount();
  var keys = Object.keys(gkeywords);

  for (var i = 0; i < 5; i++) {
    var obj = {};
    obj.key = keys[i];
    obj.count = gkeywords[keys[i]];
    compareArr.push(obj);
  }

  if (loadKeywordsFromLocalStorage()) {
    loadKeywordsFromLocalStorage();
    return true;
  } else {
    uploadKeywordsToLocalStorage();
  }
}

function sortArrForComp() {
  var swapped;

  do {
    swapped = false;

    for (var i = 0; i < compareArr.length - 1; i++) {
      if (compareArr[i].count < compareArr[i + 1].count) {
        var temp = compareArr[i];

        compareArr[i] = compareArr[i + 1];
        compareArr[i + 1] = temp;

        swapped = true;
      }
    }
  } while (swapped);
}

function findTop5Maxes() {
  var keys = Object.keys(gkeywords);

  for (var i = 0; i < keys.length - 1; i++) {
    if (gkeywords[keys[i]] > compareArr[compareArr.length - 1].count) {
      var newMax = {};
      newMax.key = keys[i];
      newMax.count = gkeywords[keys[i]];

      compareArr.pop();
      compareArr.push(newMax);
      sortArrForComp();
    }
  }
}

function gettingTop5MaxesKeyWords() {
  sortArrForComp();
  findTop5Maxes();
}

function updateKeywordMap() {
  var newKeyword = document.querySelector('.meme-searcher').value;
  newKeyword = newKeyword.toLowerCase();
  if (newKeyword) {
    var count = gkeywords[newKeyword];
    if (newKeyword) {
      gkeywords[newKeyword] = count ? count + 1 : 1;
    }
  }

  updateComapreArr(newKeyword);
  uploadKeywordsToLocalStorage();
}

function updateComapreArr(newKeyword) {
  var duplicate = false;
  if (gkeywords[newKeyword] > compareArr[compareArr.length - 1].count) {
    for (var idx = 1; idx < compareArr.length; idx++) {
      if (newKeyword === compareArr[compareArr.length - idx].key) {
        compareArr[compareArr.length - idx].count++;
        duplicate = true;
      }
    }
    if (!duplicate) {
      compareArr.pop();
      var newMax = {};
      newMax.key = newKeyword;
      newMax.count = gkeywords[newKeyword];
      compareArr.push(newMax);
    }
  }
  sortArrForComp();
}
