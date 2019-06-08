'use strict';

var gCurrLang = 'en';

var gTrans = {
  'about-us': {
    en: 'About Us',
    he: 'קצת עליינו'
  },
  'memes-gallery': {
    en: 'Memes-Gallery',
    he: 'גלרייה'
  },
  langaue: {
    en: 'Langaue',
    he: 'שפה'
  },
  'enter-messege': {
    en: 'Enter-Messege',
    he: 'הכנס טקסט'
  },
  'brand': {
    en: 'The Ultimate Meme Generator',
    he: 'מכולל הממים האולטימטיבי'
  },
  'keywords': {
    en: 'Key Words',
    he: 'מילות מפתח'
  },
  'search': {
    en: 'Search Meme',
    he: 'חפש/י מימ'
  }
};

function doTrans() {
  var els = document.querySelectorAll('[data-trans]');

  for (var i = 0; i < els.length; i++) {
    var el = els[i];
    var transKey = el.dataset.trans;

    var txt = getTrans(transKey);

    if (el.nodeName === 'INPUT') {
      el.setAttribute('placeholder', txt);
    } else {
      el.innerText = txt;
    }
  }
}

function getTrans(transKey) {
  var keyTrans = gTrans[transKey];
  if (!keyTrans) return 'UNKNOWN';

  var txt = keyTrans[gCurrLang];

  // If not found - use english
  if (!txt) txt = keyTrans['en'];

  return txt;
}

function setLang(lang) {
  gCurrLang = lang;
}
