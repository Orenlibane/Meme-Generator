'use strict';

var gImgs = [
  {
    id: gId++,
    keyword: []
  },
  {
    id: gId++,
    keyword: []
  },
  {
    id: gId++,
    keyword: []
  },
  {
    id: gId++,
    keyword: []
  },
  {
    id: gId++,
    keyword: []
  },
  {
    id: gId++,
    keyword: []
  },
  {
    id: gId++,
    keyword: []
  },
  {
    id: gId++,
    keyword: []
  },
  {
    id: gId++,
    keyword: []
  },
  {
    id: gId++,
    keyword: []
  },
  {
    id: gId++,
    keyword: []
  },
  {
    id: gId++,
    keyword: []
  },
  {
    id: gId++,
    keyword: []
  },
  {
    id: gId++,
    keyword: []
  },
  {
    id: gId++,
    keyword: []
  },
  {
    id: gId++,
    keyword: []
  },
  {
    id: gId++,
    keyword: []
  },
  {
    id: gId++,
    keyword: []
  },
  {
    id: gId++,
    keyword: []
  },
  {
    id: gId++,
    keyword: []
  }
];
var gcurrentImgId;
var gKeywords = { happy: 12, 'funny puk': 1 };
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
        align: 'left',
        color: 'white',
        font: 'impact'
      },
      {
        content: '',
        size: 3,
        align: 'left',
        color: 'white',
        font: 'impact'
      },
      {
        content: '',
        size: 3,
        align: 'left',
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
  var test = document.querySelector('.editor input').value;
  document.querySelector('.editor input').value =
    gMeme.text[gMeme.position].content;
}

function changeSize(sizeVariation) {
  gMeme.text[gMeme.position].size += sizeVariation;
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
