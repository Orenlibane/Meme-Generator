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
    text: [
      {
        content: 'hello world',
        size: '1rem',
        align: 'left',
        color: 'red'
      }
    ]
  };
}
