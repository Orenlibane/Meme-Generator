'use strict';

var gId = 1;
var gCanvas;
var ctx;
var canvasFactorHeight;
var canvasFactorWidth = 650;
var gCanvasHeight;
var gCanvasWidth;
var gUploadFile;
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

function showModal(id) {
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

  gCanvasHeight = gCanvas.height;
  gCanvasWidth = gCanvas.width;

  updateImgCanvas();

  document.querySelector('.editor input').focus();
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
