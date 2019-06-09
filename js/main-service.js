'use strict';
// var canvasFactorHeight = 150;

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
var smallObj = [];
var gkeywords = {};

var gImgs = [
  {
    id: gImgId++,
    keywords: [
      'happy',
      'dancing',
      'singing',
      'שירה',
      'ריקוד',
      'שמח',
      'רוקד',
      'שר'
    ]
  },
  {
    id: gImgId++,
    keywords: ['survivour', 'guy', 'שורד', 'בחור', 'גבר', 'אולטימטיבי']
  },
  {
    id: gImgId++,
    keywords: ['angry', 'doodle', 'כועס']
  },
  {
    id: gImgId++,
    keywords: ['sleep', 'baby', 'dog', 'כלב', 'תינוק', 'שינה', 'ישן']
  },
  {
    id: gImgId++,
    keywords: [
      'black',
      'terantino',
      'pulp fiction',
      'שחור',
      'טרנטינו',
      'ספרות',
      'זולה'
    ]
  },
  {
    id: gImgId++,
    keywords: ['geek', 'face', 'פנים', 'חנון']
  },
  {
    id: gImgId++,
    keywords: [
      'gameOfThorns',
      'actor',
      'movie',
      'שחקן',
      'סרט',
      'משחקי-הכס',
      'חורף'
    ]
  },
  {
    id: gImgId++,
    keywords: ['time', 'hours', 'geek', 'זמן', 'שעות', 'חנון']
  },
  {
    id: gImgId++,
    keywords: [
      'crying',
      'face',
      'big-eyes',
      'geek',
      'חנון',
      'עיניים-גדולות',
      'בכי',
      'פנים'
    ]
  },
  {
    id: gImgId++,
    keywords: ['geek', 'resting', 'חנון', 'מנוחה']
  },
  {
    id: gImgId++,
    keywords: ['food', 'suprise', 'אוכל', 'הפתעה']
  },
  {
    id: gImgId++,
    keywords: ['sword', 'computer', 'blood', 'guy', 'חרב', 'מחשב', 'דם', 'כעס']
  },
  {
    id: gImgId++,
    keywords: ['dog', 'phone', 'כלב', 'פלאפון']
  },
  {
    id: gImgId++,
    keywords: ['yuda', 'יודה', 'מלחמת-הכוכבים']
  },
  {
    id: gImgId++,
    keywords: ['baby', 'boss', 'suit', 'תינוק', 'בוס', 'חליפה', 'קשוח']
  },
  {
    id: gImgId++,
    keywords: ['olympic', 'lift', 'women', 'אישה', 'משקולות', 'אולימפי', 'חזק']
  },
  {
    id: gImgId++,
    keywords: [
      'angry',
      'annoyed',
      'eating',
      'cereal',
      'כועס',
      'עצבני',
      'אוכל',
      'זעם'
    ]
  },
  {
    id: gImgId++,
    keywords: ['challenge', 'accepted', 'אתגר', 'התקבל']
  },
  {
    id: gImgId++,
    keywords: [
      'cat',
      'smart',
      'board',
      'potions',
      'חתול',
      'חכם',
      'לוח',
      'שיקויים'
    ]
  },
  {
    id: gImgId++,
    keywords: ['cry', 'cat', 'sad', 'חתול', 'בכי', 'עצוב']
  },
  {
    id: gImgId++,
    keywords: ['nerd', 'bad-ass', 'hat', 'חנון', 'כובע', 'מגניב']
  },
  {
    id: gImgId++,
    keywords: ['duck', 'colors', 'ברווז', 'צבעים']
  },
  {
    id: gImgId++,
    keywords: ['god', 'wtf', 'אלוהים', 'מה']
  },
  {
    id: gImgId++,
    keywords: ['dog', 'suprise', 'colors', 'כלב', 'מופתע', 'צבעים']
  },
  {
    id: gImgId++,
    keywords: ['girl', 'scream', 'ילדה', 'צעקה', 'צועקת']
  },
  {
    id: gImgId++,
    keywords: ['chicken', 'colors', 'תרנגול', 'צבעים']
  },
  {
    id: gImgId++,
    keywords: ['nerd', 'boy', 'smile', 'חנון', 'חיוך', 'ילד']
  },
  {
    id: gImgId++,
    keywords: ['sponge-bob', 'minutes', 'later', 'בובספוג', 'דקות', 'לאחר-מכן']
  },
  {
    id: gImgId++,
    keywords: ['girl', 'smile', 'burn', 'שריפה', 'ילדה', 'חיוך']
  },
  {
    id: gImgId++,
    keywords: ['look', 'amaze', 'rainbow', 'מבט', 'נדהם', 'קשת']
  },
  {
    id: gImgId++,
    keywords: ['xzibit', 'black', 'guy', 'smile', 'בחור', 'חיוך']
  },
  {
    id: gImgId++,
    keywords: ['nicolas', 'cage', 'say', 'ניקולס', 'קייג', 'אומר']
  },
  {
    id: gImgId++,
    keywords: ['are', 'man', 'thumb', 'בסדר', 'גבר', 'אגודל']
  },
  {
    id: gImgId++,
    keywords: ['success', 'smile', 'happy', 'הצלחה', 'חיוך', 'שמחה']
  },
  {
    id: gImgId++,
    keywords: ['pink', 'pokemon', 'פוקימון', 'ורוד']
  },
  {
    id: gImgId++,
    keywords: ['hours', 'later', 'spongebob', 'בובספוג', 'שעות', 'אחר-כך']
  },
  {
    id: gImgId++,
    keywords: ['brain', 'smart', 'מוח', 'חכם']
  },
  {
    id: gImgId++,
    keywords: ['guy', 'girl', 'computer', 'בחור', 'בחורה', 'מחשב']
  },
  {
    id: gImgId++,
    keywords: ['hide', 'computer', 'scared', 'מחשב', 'מפחד', 'מסתתר']
  },
  {
    id: gImgId++,
    keywords: ['guy', 'arabic', 'בחור', 'ערבי']
  }
];

function showModal(id) {
  updateKeywordMap();
  onUpdateId(id);
  createGmemeStrucute();
  document.body.classList.toggle('footer-display');
  document.querySelector('.memes-container').style.display = 'none';
  document.querySelector('.modal-container').style.transform = 'scale(1)';
  document.querySelector('.modal-container').style.display = 'flex';

  gCanvas = document.querySelector('#canvas');
  ctx = gCanvas.getContext('2d');

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
  } else {
    canvasFactorWidth = 50;
  }

  gCanvas.width = window.innerWidth - canvasFactorWidth;
  gCanvas.height = window.innerHeight - 250;

  //TODO: Remove if no change

  gCanvasHeight = gCanvas.height;
  gCanvasWidth = gCanvas.width;

  updateImgCanvas();
}

function updateImgCanvas() {
  var image = new Image();

  if (gUploadFile) {
    image.src = gUploadFile;
  } else image.src = `graphic/img/${gMeme.id}.jpg`;
  ctx.drawImage(image, 0, 0, gCanvas.width, gCanvas.height);
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

function changeColor(pickedColor) {
  gMeme.text[gMeme.position].color = pickedColor;
  drawText();
}

function changePos(direction) {
  if (direction) {
    if (gMeme.position > 0) gMeme.position--;
  } else {
    if (gMeme.position < 2) gMeme.position++;
  }
  document.querySelector('.editor input').value =
    gMeme.text[gMeme.position].content;
}

function changeSize(sizeVariation) {
  gMeme.text[gMeme.position].size += sizeVariation;
  drawText();
}

function changeAlign(dir) {
  gMeme.text[gMeme.position].align = dir;
  drawText();
}

function showFonts() {
  document.querySelector('.fonts').classList.toggle('show');
}

//TODO: need to update so we build array of fonts and then putting the idx into gmeme font
function changeFont(fontNumber) {
  if (!fontNumber) {
    gMeme.text[gMeme.position].font = 'VT';
  } else if (fontNumber === 1) {
    gMeme.text[gMeme.position].font = 'DancingScript';
  } else if (fontNumber === 2) {
    gMeme.text[gMeme.position].font = 'Impact';
  } else if (fontNumber === 3) {
    gMeme.text[gMeme.position].font = 'Indie';
  }

  drawText();
}

function clearMeme() {
  updateImgCanvas();
  for (var i = 0; i < gMeme.text.length; i++) {
    gMeme.text[i].content = '';
  }
  gMeme.text[gMeme.position].content = '';
}

function handleImageFromInput(ev, onImageReady) {
  var reader = new FileReader();
  reader.onload = function(event) {
    var img = new Image();
    img.onload = onImageReady.bind(null, img);
    img.src = event.target.result;
    gUploadFile = img.src;
  };
  reader.readAsDataURL(ev.target.files[0]);
}

function backToGallery() {
  gUploadFile = false;
}

function upLoadToFb(elForm, ev) {
  ev.preventDefault();

  document.getElementById('imgData').value = canvas.toDataURL('image/jpeg');

  // A function to be called if request succeeds
  function onSuccess(uploadedImgUrl) {
    console.log('uploadedImgUrl', uploadedImgUrl);

    uploadedImgUrl = encodeURIComponent(uploadedImgUrl);
    document.querySelector('.share').innerHTML = `
      <a class="w-inline-block social-share-btn fb" href="https://www.facebook.com/sharer/sharer.php?u=${uploadedImgUrl}&t=${uploadedImgUrl}" title="Share on Facebook" target="_blank" onclick="window.open('https://www.facebook.com/sharer/sharer.php?u=${uploadedImgUrl}&t=${uploadedImgUrl}'); return false;">
      <i class="fas fa-arrow-up"></i>   Share  </a>`;
  }

  doupLoadToFb(elForm, onSuccess);
}

function doupLoadToFb(elForm, onSuccess) {
  var formData = new FormData(elForm);

  fetch('http://ca-upload.com/here/upload.php', {
    method: 'POST',
    body: formData
  })
    .then(function(response) {
      return response.text();
    })
    .then(onSuccess)
    .catch(function(error) {
      console.error(error);
    });
}

function showAboutUsModal() {
  document.querySelector('.about-us-modal').classList.toggle('show');
  document.querySelector('.screen').classList.toggle('show');
}

function getMemes() {
  var fromIdx = gCurrPageIdx * gPageSize;
  var memes = gImgs.slice(fromIdx, fromIdx + gPageSize);
  return memes;
}

function setMemesCount(width) {
  if (width < 650) gPageSize = 8;
}

function nextPage() {
  if (gCurrPageIdx + 1 < gImgs.length / gPageSize) {
    gCurrPageIdx++;
  }
}

function prevPage() {
  if (gCurrPageIdx > 0) {
    gCurrPageIdx--;
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

function sortSmallObj() {
  var swapped;

  do {
    swapped = false;

    for (var i = 0; i < smallObj.length - 1; i++) {
      if (smallObj[i].count < smallObj[i + 1].count) {
        var temp = smallObj[i];

        smallObj[i] = smallObj[i + 1];
        smallObj[i + 1] = temp;

        swapped = true;
      }
    }
  } while (swapped);
}

//

function createSmallObj() {
  showWordsSearchCount();
  var keys = Object.keys(gkeywords);

  for (var i = 0; i < 5; i++) {
    var obj = {};
    obj.key = keys[i];
    obj.count = gkeywords[keys[i]];
    smallObj.push(obj);
  }

  if (loadKeywordsFromLocalStorage()) {
    loadKeywordsFromLocalStorage();
    return true;
  } else {
    uploadKeywordsToLocalStorage();
  }
}
//TODO:creating new obj is a bit of double code! make it a function!

function findTop5Maxes() {
  var keys = Object.keys(gkeywords);

  //   debugger;
  for (var i = 5; i < keys.length; i++) {
    if (gkeywords[keys[i]] > smallObj[smallObj.length - 1].count) {
      var isKeyIn = smallObj.filter(function(idx) {
        return idx.name === keys[i];
      });

      // if( )

      var newMax = {};
      newMax.key = keys[i];
      newMax.count = gkeywords[keys[i]];

      smallObj.pop();
      smallObj.push(newMax);
      sortSmallObj();
    }
  }
}

function gettingTop5MaxesKeyWords() {
  sortSmallObj();
  findTop5Maxes();
}

function updateKeywordMap() {
  var newKeyword = document.querySelector('.meme-searcher').value;
  if (newKeyword) {
    var count = gkeywords[newKeyword];
    if (newKeyword) {
      gkeywords[newKeyword] = count ? count + 1 : 1;
    }
  }
  uploadKeywordsToLocalStorage();
}

function sendMsg() {
  window.open(
    'https://mail.google.com/mail/?view=cm&fs=1&to=me@example.com&su=SUBJECT&body=BODY'
  );
}
