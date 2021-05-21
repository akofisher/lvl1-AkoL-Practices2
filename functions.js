// HIDDEN BAR

let CLICKER = document.getElementById('clicker');
let SHOWING = document.getElementById('showing');
let BACKCALL = document.getElementById('back');

function transition() {
  SHOWING.style.marginLeft = '-80px';
  SHOWING.style.transition = '1s';
}

function backcall() {
  SHOWING.style.marginLeft = '-500px';
  SHOWING.style.transition = '1s';
}

CLICKER.addEventListener('click', transition);
BACKCALL.addEventListener('click', backcall);