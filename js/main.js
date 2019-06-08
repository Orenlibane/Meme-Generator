'use strict';

//service

// clear canvas + input

// this is the part for the filter by keyWord
var gkeywords = {};

function showWordsSearchCount() {
  gImgs.forEach(function(img) {
    img.keywords.forEach(function(keywords) {
      var count = gkeywords[keywords];
      if (keywords) {
        gkeywords[keywords] = count ? count + 1 : 1;
      }
    });
  });
}

function sortSmallObj() {
  var swapped;

  do {
    swapped = false;

    for (var i = 0; i < smallObj.length - 1; i++) {
      if (smallObj[i].count < smallObj[i + 1].count) {
        var temp = smallObj[i];

        smallObj[i] = smallObj[i + 1];
        smallObj[i + 1] = temp;

        swapped = true;
      }
    }
  } while (swapped);
}

//

function createSmallObj() {
  showWordsSearchCount();
  var keys = Object.keys(gkeywords);

  for (var i = 0; i < 5; i++) {
    var obj = {};
    obj.keys = keys[i];
    obj.count = gkeywords[keys[i]];
    smallObj.push(obj);
  }
}
//TODO:creating new obj is double code! make it a function!

function findTop5Maxes() {
  var keys = Object.keys(gkeywords);

  //   debugger;
  for (var i = 5; i < keys.length; i++) {
    if (gkeywords[keys[i]] > smallObj[smallObj.length - 1].count) {
      var newMax = {};
      newMax.name = keys[i];
      newMax.count = gkeywords[keys[i]];

      smallObj.pop();
      smallObj.push(newMax);
      sortSmallObj();
    }
  }
}

function gettingTop5MaxesKeyWords() {
  createSmallObj();
  sortSmallObj();
  findTop5Maxes();
  console.log(smallObj);
}
