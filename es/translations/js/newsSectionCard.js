const body = document.getElementById('body');
const card1 = document.getElementById('card-1');
const card2 = document.getElementById('card-2');

var width = window.innerWidth;
var maxWidth = 1280;

if (width >= maxWidth) {
    var currentWidth = maxWidth - 48;
    card1.style.width = `${ currentWidth }px`;
    card2.style.width = `${ currentWidth }px`;
} else {
    var currentWidth = width - 48;
    card1.style.width = `${ currentWidth }px`;
    card2.style.width = `${ currentWidth }px`;
}