const body = document.getElementById('body');
const cards = document.querySelectorAll('.card');
const lastEntrys = document.querySelector('.lastEntrys');

var width = window.innerWidth;
var maxWidth = 1280

if (width >= maxWidth) {
    var currentWidth = maxWidth - 48;
    cards.forEach(( perCard , i )=>{
        cards[i].style.width = `${ currentWidth }px`;
    })
} else {
    var currentWidth = width - 48;
    cards.forEach(( perCard , i )=>{
        cards[i].style.width = `${ currentWidth }px`;
    })
}