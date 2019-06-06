'use strict';


/*  Assist function*/
function getRandomInt(min, max) {
min = Math.ceil(min);
max = Math.floor(max);
return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
}

function loadFromLocalStorage() {
if (JSON.parse(localStorage.getItem('booksList'))) {
gBooks = JSON.parse(localStorage.getItem('booksList'));
return true;
}
return false;
}

function uploadToLocalStorage() {
var toLoadgBooks = JSON.stringify(gBooks);
localStorage.setItem('booksList', toLoadgBooks);
}