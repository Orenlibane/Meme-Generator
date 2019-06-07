'use strict';
var gFilterArr;
var gFilterBy;
var gIsFilterOn = false;
var gImgs = [
  {
    id: gId++,
    keywords: ['happy', 'dancing', 'singing']
  },
  {
    id: gId++,
    keywords: ['survivour', 'guy']
  },
  {
    id: gId++,
    keywords: ['angry', 'doodle']
  },
  {
    id: gId++,
    keywords: ['sleep', 'baby', 'dog']
  },
  {
    id: gId++,
    keywords: ['black', 'terantino', 'pulp fiction']
  },
  {
    id: gId++,
    keywords: ['geek', 'face']
  },
  {
    id: gId++,
    keywords: ['gameOfThorns', 'actor', 'movie']
  },
  {
    id: gId++,
    keywords: ['time', 'hours', 'geek']
  },
  {
    id: gId++,
    keywords: ['crying', 'face', 'big-eyes', 'geek']
  },
  {
    id: gId++,
    keywords: ['geek', 'resting']
  },
  {
    id: gId++,
    keywords: ['food', 'suprise']
  },
  {
    id: gId++,
    keywords: ['sword', 'computer', 'blood']
  },
  {
    id: gId++,
    keywords: ['dog', 'phone']
  },
  {
    id: gId++,
    keywords: ['yuda']
  },
  {
    id: gId++,
    keywords: ['baby', 'boss', 'suit']
  },
  {
    id: gId++,
    keywords: ['olympic', 'lift', 'women']
  },
  {
    id: gId++,
    keywords: ['angry', 'annoyed', 'eating', 'cereal']
  },
  {
    id: gId++,
    keywords: ['challenge', 'accepted']
  },
  {
    id: gId++,
    keywords: ['cat', 'smart', 'board', 'potions']
  },
  {
    id: gId++,
    keywords: ['matrix', 'morphius', 'sunglasses']
  }
];
var gcurrentImgId;
var gkeywordss = {};
var gMeme;

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
        align: 'start',
        color: 'white',
        font: 'impact'
      },
      {
        content: '',
        size: 3,
        align: 'end',
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

var gkeywordss = {};

function showWordsSearchCount() {
  gImgs.forEach(function(img) {
    img.keywords.forEach(function(keywords) {
      var count = gkeywordss[keywords];
      if (keywords) {
        gkeywordss[keywords] = count ? count + 1 : 1;
      }
    });
  });
}

function showAboutUsModal() {
  document.querySelector('.about-us-modal').classList.toggle('show');
  document.querySelector('.screen').classList.toggle('show');
}

function filterMeme() {
  gFilterArr = getFilterArr();
  console.log(gFilterArr);
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
    return myRe.exec(img.keywords);
  });
  return filterImages;
}
