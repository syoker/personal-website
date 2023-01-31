document.getElementById('btn_menu').addEventListener('click', menu);
document.getElementById("backgroundMenu").addEventListener('click', menu);

logo = document.getElementById('logo');
hamburgerMenu = document.getElementById('hamburgerMenu');
backgroundMenu = document.getElementById('backgroundMenu');
hamburgerButton = document.getElementById('hamburgerButton');
hamburgerButtonAfter = document.head.appendChild(document.createElement('style'));
hamburgerButtonBefore = document.head.appendChild(document.createElement('style'));

function menu() {

    state = backgroundMenu.style.display
    color = logo.style.color

    if (state == 'none'){
        hamburgerMenu.style.left = '0rem';
        backgroundMenu.style.display = 'block';
        hamburgerButton.style.background = 'transparent';
        hamburgerButtonAfter.innerHTML = '.hamburgerButton:after {transform: rotate(-45deg); top: 0rem;}';
        hamburgerButtonBefore.innerHTML = '.hamburgerButton:before {transform: rotate(45deg); top: 0rem;}';
    } else {
        hamburgerMenu.style.left = '-15rem';
        backgroundMenu.style.display = 'none';
        hamburgerButton.style.background = color;
        hamburgerButtonAfter.innerHTML = '.hamburgerButton:after {transform: rotate(0deg); top: 10px;}';
        hamburgerButtonBefore.innerHTML = '.hamburgerButton:before {transform: rotate(0deg); top: -10px;}';
    }

}