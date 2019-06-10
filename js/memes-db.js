'use strict';

var gImgs = [
  {
    id: gImgId++,
    keywords: ['happy', 'dancing', 'raccon', 'ראקון', 'ריקוד', 'שמח', 'רוקד']
  },
  {
    id: gImgId++,
    keywords: [
      'survivour',
      'guy',
      'ultimate',
      'שורד',
      'בחור',
      'גבר',
      'אולטימטיבי'
    ]
  },
  {
    id: gImgId++,
    keywords: ['angry', 'doodle', 'כועס', 'ציור']
  },
  {
    id: gImgId++,
    keywords: [
      'feminist',
      'rastot',
      'hair',
      'women',
      'אישה',
      'שיער',
      'ראסטות',
      'פמיניסטית'
    ]
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
    keywords: [
      'geek',
      'face',
      'hair',
      'eyeglasses',
      'משקפיים',
      'שיער',
      'פנים',
      'חנון'
    ]
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
    keywords: ['ape', 'orangutang', 'angry', 'עצבני', 'אורנגוטנג', 'קוף']
  },
  {
    id: gImgId++,
    keywords: ['crying', 'face', 'big-eyes', 'עיניים-גדולות', 'בכי', 'פנים']
  },
  {
    id: gImgId++,
    keywords: ['geek', 'resting', 'חנון', 'מנוחה']
  },
  {
    id: gImgId++,
    keywords: ['food', 'boss', 'בוס', 'אוכל']
  },
  {
    id: gImgId++,
    keywords: [
      'thug',
      'ciggarete',
      'smile',
      'eyes',
      'עיניים',
      'חיוך',
      'סיגריה',
      'בריון'
    ]
  },
  {
    id: gImgId++,
    keywords: ['dog', 'bear', 'phone', , 'דב', 'כלב', 'פלאפון']
  },
  {
    id: gImgId++,
    keywords: ['yoda', 'יודה', 'מלחמת-הכוכבים']
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
      'girl',
      'red',
      'standing',
      'look',
      'ילדה',
      'אדום',
      'עומדת',
      'מבט'
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
    keywords: ['chinese', 'man', 'glasses', 'סיני', 'גבר', 'משקפיים']
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
    keywords: ['cat', 'meow', 'scream', 'חתול', 'מיאו', 'צעקה']
  },
  {
    id: gImgId++,
    keywords: ['guy', 'arabic', 'בחור', 'ערבי']
  }
];
