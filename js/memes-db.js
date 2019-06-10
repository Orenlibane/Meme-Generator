'use strict';

var gImgs = [
  {
    id: gImgId++,
    keywords: [
      'happy',
      'dancing',
      'singing',
      'שירה',
      'ריקוד',
      'שמח',
      'רוקד',
      'שר'
    ]
  },
  {
    id: gImgId++,
    keywords: ['survivour', 'guy', 'שורד', 'בחור', 'גבר', 'אולטימטיבי']
  },
  {
    id: gImgId++,
    keywords: ['angry', 'doodle', 'כועס']
  },
  {
    id: gImgId++,
    keywords: ['sleep', 'baby', 'dog', 'כלב', 'תינוק', 'שינה', 'ישן']
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
    keywords: ['geek', 'face', 'פנים', 'חנון']
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
    keywords: ['time', 'hours', 'geek', 'זמן', 'שעות', 'חנון']
  },
  {
    id: gImgId++,
    keywords: [
      'crying',
      'face',
      'big-eyes',
      'geek',
      'חנון',
      'עיניים-גדולות',
      'בכי',
      'פנים'
    ]
  },
  {
    id: gImgId++,
    keywords: ['geek', 'resting', 'חנון', 'מנוחה']
  },
  {
    id: gImgId++,
    keywords: ['food', 'suprise', 'אוכל', 'הפתעה']
  },
  {
    id: gImgId++,
    keywords: ['sword', 'computer', 'blood', 'guy', 'חרב', 'מחשב', 'דם', 'כעס']
  },
  {
    id: gImgId++,
    keywords: ['dog', 'phone', 'כלב', 'פלאפון']
  },
  {
    id: gImgId++,
    keywords: ['yuda', 'יודה', 'מלחמת-הכוכבים']
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
      'angry',
      'annoyed',
      'eating',
      'cereal',
      'כועס',
      'עצבני',
      'אוכל',
      'זעם'
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
    keywords: ['are', 'man', 'thumb', 'בסדר', 'גבר', 'אגודל']
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
    keywords: ['hide', 'computer', 'scared', 'מחשב', 'מפחד', 'מסתתר']
  },
  {
    id: gImgId++,
    keywords: ['guy', 'arabic', 'בחור', 'ערבי']
  }
];
