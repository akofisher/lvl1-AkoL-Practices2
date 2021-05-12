// Burger NavBar

function firstFunction() {
   let x = document.getElementById("myLinks");
   if (x.style.display === "block") {
    x.style.display = "none";
   } else {
    x.style.display = "block";
   }
  }

// Slider

let slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  let i;
  let x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block"; }

  // Modal

const addModal = document.getElementById('add-modal');
const startButton = document.querySelector('header button');
const cancelButton = addModal.querySelector('.btn--passive');

const toggleBackdrop = () => {
  backdrop.classList.toggle('visible');
};

const toggleModal = () => { 
  addModal.classList.toggle('visible');
  toggleBackdrop();
};

const cancelAdd = () => {
  toggleModal();
};


startButton.addEventListener('click', toggleModal);
cancelButton.addEventListener('click', cancelAdd)