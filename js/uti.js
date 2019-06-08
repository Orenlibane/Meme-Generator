'use strict';

const KEY = 'search-keywords';

/*  Assist function*/
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
}

function loadKeywordsFromLocalStorage() {
  if (JSON.parse(localStorage.getItem(KEY))) {
    gkeywords = JSON.parse(localStorage.getItem(KEY));
    return true;
  }
  return false;
}

function uploadKeywordsToLocalStorage() {
  var toLoadKeywords = JSON.stringify(gkeywords);
  localStorage.setItem(KEY, toLoadKeywords);
}

// facebook api
(function(d, s, id) {
  var js,
    fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s);
  js.id = id;
  js.src =
    'https://connect.facebook.net/he_IL/sdk.js#xfbml=1&version=v3.0&appId=807866106076694&autoLogAppEvents=1';
  fjs.parentNode.insertBefore(js, fjs);
})(document, 'script', 'facebook-jssdk');
