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
  console.log(gcurrentImgId);
}

function updateGmeme() {
  gMeme = {
    id: gcurrentImgId,
    position: 1,
    text: [
      {
        content: '',
        size: '3rem',
        align: 'left',
        color: 'white',
        font: 'impact'
      },
      {
        content: '',
        size: '3rem',
        align: 'left',
        color: 'white',
        font: 'impact'
      },
      {
        content: '',
        size: '3rem',
        align: 'left',
        color: 'white',
        font: 'impact'
      }
    ]
  };
}

function changeColor(pickedColor) {
  gMeme.text[gMeme.position - 1].color = pickedColor;
  drawText(
    gMeme.text[gMeme.position - 1].color,
    gMeme.text[gMeme.position - 1].content
  );
}

function changePos(direction) {
  if (direction) {
    if (gMeme.position > 1) gMeme.position--;
  } else {
    if (gMeme.position < 3) gMeme.position++;
  }

  console.log(gMeme.position);
}
