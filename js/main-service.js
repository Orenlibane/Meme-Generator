'use strict';

var gImgs = [
  {
    id: gId++,
    keyword: ['happy', 'dancing', 'singing']
  },
  {
    id: gId++,
    keyword: ['survivour', 'guy']
  },
  {
    id: gId++,
    keyword: ['angry', 'doodle']
  },
  {
    id: gId++,
    keyword: ['sleep', 'baby', 'dog']
  },
  {
    id: gId++,
    keyword: ['black', 'terantino', 'pulp fiction']
  },
  {
    id: gId++,
    keyword: ['geek', 'face']
  },
  {
    id: gId++,
    keyword: ['gameOfThorns', 'actor', 'movie']
  },
  {
    id: gId++,
    keyword: ['time', 'hours', 'geek']
  },
  {
    id: gId++,
    keyword: ['crying', 'face', 'big-eyes', 'geek']
  },
  {
    id: gId++,
    keyword: ['geek', 'resting']
  },
  {
    id: gId++,
    keyword: ['food', 'suprise']
  },
  {
    id: gId++,
    keyword: ['sword', 'computer', 'blood']
  },
  {
    id: gId++,
    keyword: ['dog', 'phone']
  },
  {
    id: gId++,
    keyword: ['yuda']
  },
  {
    id: gId++,
    keyword: ['baby', 'boss', 'suit']
  },
  {
    id: gId++,
    keyword: ['olympic', 'lift', 'women']
  },
  {
    id: gId++,
    keyword: ['angry', 'annoyed', 'eating', 'cereal']
  },
  {
    id: gId++,
    keyword: ['challenge', 'accepted']
  },
  {
    id: gId++,
    keyword: ['cat', 'smart', 'board', 'potions']
  },
  {
    id: gId++,
    keyword: ['matrix', 'morphius', 'sunglasses']
  }
];
var gcurrentImgId;
var gKeywords = {};
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
    if (gMeme.position < 3) gMeme.position++;
  }
  // debugger;
  document.querySelector('.editor input').value =
    gMeme.text[gMeme.position].content;
}

function changeSize(sizeVariation) {
  gMeme.text[gMeme.position].size += sizeVariation;
  drawText();
}

function  changeAlign (dir) {
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

var gKeywords = {};

function showWordsSearchCount() {
  gImgs.forEach(function(img) {
    img.keyword.forEach(function(keyword) {
      var count = gKeywords[keyword];
      if (keyword) {
        gKeywords[keyword] = count ? count + 1 : 1;
      }
    });
  });
}
