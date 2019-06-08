'use strict';

var gPageSize = 14;
var gCurrPageIdx = 0;
var gId = 1;
var gCanvas;
var ctx;
var canvasFactorHeight;
var canvasFactorWidth;
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
    id: gId++,
    keywords: ['happy', 'dancing', 'singing', 'שירה', 'ריקוד', 'שמח', 'רוקד', 'שר']
  },
  {
    id: gId++,
    keywords: ['survivour', 'guy', 'שורד', 'בחור', 'גבר', 'אולטימטיבי']
  },
  {
    id: gId++,
    keywords: ['angry', 'doodle', 'כועס']
  },
  {
    id: gId++,
    keywords: ['sleep', 'baby', 'dog', 'כלב', 'תינוק', 'שינה', 'ישן']
  },
  {
    id: gId++,
    keywords: ['black', 'terantino', 'pulp fiction', 'שחור', 'טרנטינו', 'ספרות', 'זולה']
  },
  {
    id: gId++,
    keywords: ['geek', 'face', 'פנים', 'חנון']
  },
  {
    id: gId++,
    keywords: ['gameOfThorns', 'actor', 'movie', 'שחקן', 'סרט', 'משחקי-הכס', 'חורף']
  },
  {
    id: gId++,
    keywords: ['time', 'hours', 'geek', 'זמן', 'שעות', 'חנון']
  },
  {
    id: gId++,
    keywords: ['crying', 'face', 'big-eyes', 'geek', 'חנון', 'עיניים-גדולות', 'בכי', 'פנים']
  },
  {
    id: gId++,
    keywords: ['geek', 'resting', 'חנון', 'מנוחה']
  },
  {
    id: gId++,
    keywords: ['food', 'suprise', 'אוכל', 'הפתעה']
  },
  {
    id: gId++,
    keywords: ['sword', 'computer', 'blood','guy', 'חרב', 'מחשב', 'דם', 'כעס']
  },
  {
    id: gId++,
    keywords: ['dog', 'phone', 'כלב', 'פלאפון']
  },
  {
    id: gId++,
    keywords: ['yuda', 'יודה', 'מלחמת-הכוכבים']
  },
  {
    id: gId++,
    keywords: ['baby', 'boss', 'suit', 'תינוק', 'בוס', 'חליפה', 'קשוח']
  },
  {
    id: gId++,
    keywords: ['olympic', 'lift', 'women', 'אישה', 'משקולות', 'אולימפי', 'חזק']
  },
  {
    id: gId++,
    keywords: ['angry', 'annoyed', 'eating', 'cereal', 'כועס', 'עצבני', 'אוכל', 'זעם']
  },
  {
    id: gId++,
    keywords: ['challenge', 'accepted', 'אתגר', 'התקבל']
  },
  {
    id: gId++,
    keywords: ['cat', 'smart', 'board', 'potions', 'חתול', 'חכם', 'לוח', 'שיקויים']
  },
  {
    id: gId++,
    keywords: ['cry', 'cat', 'sad', 'חתול', 'בכי', 'עצוב']
  },
  {
    id: gId++,
    keywords: ['nerd', 'bad-ass', 'hat', 'חנון', 'כובע', 'מגניב']
  },
  {
    id: gId++,
    keywords: ['duck', 'colors', 'ברווז', 'צבעים']
  },
  {
    id: gId++,
    keywords: ['god', 'wtf', 'אלוהים', 'מה']
  },
  {
    id: gId++,
    keywords: ['dog', 'suprise', 'colors', 'כלב', 'מופתע', 'צבעים']
  },
  {
    id: gId++,
    keywords: ['girl', 'scream', 'ילדה', 'צעקה', 'צועקת']
  },
  {
    id: gId++,
    keywords: ['chicken', 'colors', 'תרנגול', 'צבעים']
  },
  {
    id: gId++,
    keywords: ['nerd', 'boy', 'smile', 'חנון', 'חיוך', 'ילד']
  },
  {
    id: gId++,
    keywords: ['sponge-bob', 'minutes', 'later', 'בובספוג', 'דקות', 'לאחר-מכן']
  },
  {
    id: gId++,
    keywords: ['girl', 'smile', 'burn', 'שריפה', 'ילדה', 'חיוך']
  },
  {
    id: gId++,
    keywords: ['look', 'amaze', 'rainbow', 'מבט', 'נדהם', 'קשת']
  },
  {
    id: gId++,
    keywords: ['xzibit', 'black', 'guy', 'smile', 'בחור', 'חיוך']
  },
  {
    id: gId++,
    keywords: ['nicolas', 'cage', 'say', 'ניקולס', 'קייג', 'אומר']
  },
  {
    id: gId++,
    keywords: ['are', 'man', 'thumb', 'בסדר', 'גבר', 'אגודל']
  },
  {
    id: gId++,
    keywords: ['success', 'smile', 'happy', 'הצלחה', 'חיוך', 'שמחה']
  },
  {
    id: gId++,
    keywords: ['pink', 'pokemon', 'פוקימון', 'ורוד']
  },
  {
    id: gId++,
    keywords: ['hours', 'later', 'spongebob', 'בובספוג', 'שעות', 'אחר-כך']
  },
  {
    id: gId++,
    keywords: ['brain', 'smart', 'מוח', 'חכם']
  },
  {
    id: gId++,
    keywords: ['guy', 'girl', 'computer', 'בחור', 'בחורה', 'מחשב']
  },
  {
    id: gId++,
    keywords: ['hide', 'computer', 'scared', 'מחשב', 'מפחד', 'מסתתר']
  },
  {
    id: gId++,
    keywords: ['guy', 'arabic', 'בחור', 'ערבי']
  }
];
var gcurrentImgId;
var gkeywords = {};
var gMeme;

function showModal(id) {
  updateKeywordMap();
  onUpdateId(id);
  updateGmeme();
  document.body.classList.toggle('meme-on');
  document.querySelector('.memes-container').style.display = 'none';
  document.querySelector('.modal-container').style.transform = 'scale(1)';
  document.querySelector('.modal-container').style.display = 'flex';

  gCanvas = document.querySelector('#canvas');
  ctx = gCanvas.getContext('2d');
  if (window.innerWidth > 1295) {
    canvasFactorWidth = 650;
  } else if (window.innerWidth > 740) {
    canvasFactorWidth = 300;
  } else canvasFactorWidth = 100;

  // if (window.innerWidth > 1295) {
  //   canvasFactorHeight = 650;
  // } else if (window.innerWidth > 740) {
  //   canvasFactorHeight = 500;
  // } else canvasFactorHeight = 100;

  gCanvas.width = window.innerWidth - canvasFactorWidth;
  gCanvas.height = window.innerHeight - 200;

  // gCanvasHeight = gCanvas.height;
  // gCanvasWidth = gCanvas.width;

  updateImgCanvas();

  document.querySelector('.editor input').focus();
}

function updateImgCanvas() {

  var image = new Image();

  if (gUploadFile) {
    image.src = gUploadFile;
  } else image.src = `graphic/img/${gMeme.id}.jpg`;
  gCanvas.width = image.width*(gCanvas.width/image.width); //keep the ratio
  ctx.drawImage(image, 0, 0, gCanvas.width, gCanvas.height);
  // ctx.drawImage(image, 0, 0, image.width, image.height, 0, 0, gCanvas.width, gCanvas.height);

}

function updateId(id) {
  gcurrentImgId = id;
}

function updateGmeme() {
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
  drawText(
    gMeme.text[gMeme.position].color,
    gMeme.text[gMeme.position].content
  );
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
  // debugger;
  for (var i = 0; i < gMeme.text.length; i++) {
    gMeme.text[i].content = '';
  }
  gMeme.text[gMeme.position].content = '';
}

function handleImageFromInput(ev, onImageReady) {
  var reader = new FileReader();
  reader.onload = function (event) {
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

function uploadImg(elForm, ev) {
  ev.preventDefault();

  document.getElementById('imgData').value = canvas.toDataURL('image/jpeg');

  // A function to be called if request succeeds
  function onSuccess(uploadedImgUrl) {
    console.log('uploadedImgUrl', uploadedImgUrl);

    uploadedImgUrl = encodeURIComponent(uploadedImgUrl);
    document.querySelector('.share').innerHTML = `
      <a class="w-inline-block social-share-btn fb" href="https://www.facebook.com/sharer/sharer.php?u=${uploadedImgUrl}&t=${uploadedImgUrl}" title="Share on Facebook" target="_blank" onclick="window.open('https://www.facebook.com/sharer/sharer.php?u=${uploadedImgUrl}&t=${uploadedImgUrl}'); return false;">
      <i class="fas fa-arrow-up"></i>   Share   
      </a>`;
  }

  doUploadImg(elForm, onSuccess);
}

function doUploadImg(elForm, onSuccess) {
  console.log(elForm);
  var formData = new FormData(elForm);
  console.log(formData);

  fetch('http://ca-upload.com/here/upload.php', {
    method: 'POST',
    body: formData
  })
    .then(function (response) {
      return response.text();
    })
    .then(onSuccess)
    .catch(function (error) {
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

  var filterImages = gImgs.filter(function (img) {
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
  gImgs.forEach(function (img) {
    img.keywords.forEach(function (keywords) {
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
//TODO:creating new obj is double code! make it a function!

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

function changePageSize(num) {
  gPageSize = num;
}
