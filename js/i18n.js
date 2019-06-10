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
  brand: {
    en: 'The Ultimate Meme Generator',
    he: 'מחולל הממים האולטימטיבי'
  },
  keywords: {
    en: 'Key Words',
    he: 'מילות מפתח'
  },
  search: {
    en: 'Search Meme',
    he: 'חפש/י מימ'
  },
  heberew: {
    en: 'heberew',
    he: 'עברית'
  },
  english: {
    en: 'English',
    he: 'אנגלית'
  },
  'alon-dai': {
    en: 'Alon Dai',
    he: 'אלון דאי'
  },
  'oren-tzezana': {
    en: 'Oren Tzezana',
    he: 'אורן ציזאנה'
  },
  story: {
    en:
      'we are 2 developers with passion for memes! we wanted to make the world a better place, and of course adding memes will do just that.',
    he:
      'אנחנו 2 מתכנתים עם תשוקה לממים! רצינו לעשות את העולם מקום יותר טוב, ובוודאי שהדרך לעשות את זה היא להוסיף עוד ממים. תהנו!'
  },
  'add-file': {
    en: 'Add File',
    he: 'הוסף קובץ'
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
