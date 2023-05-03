console.log('script is running');
var isChromium = window.chrome;
var winNav = window.navigator;
var vendorName = winNav.vendor;
if(
isChromium !== null &&
typeof isChromium !== "undefined" &&
vendorName === "Google Inc.")
{
console.log('Chrome Browser');
}else{

const links = document.getElementsByClassName('navbar-link')[0].getElementsByTagName('a');
const innerNav =document.getElementsByClassName('inner-nav')[0];

const secondLinks = document.getElementsByClassName('bottom-ul')[0].getElementsByTagName('a');

for (let i=0; i<links.length;i++){
links[i].style.paddingBottom=11;
}
innerNav.style.marginLeft=20;

for (let j=0; j<secondLinks.length;j++){
secondLinks[j].style.paddingBottom=8;
secondLinks[j].style.paddingTop=9;
}
}

//Slider Start

const dots = document.querySelectorAll(".img-dots");
const allSlides = document.getElementsByClassName('container-image-content-div')[0];

//const imageDiv = document.getElementsByClassName('main-image-div')[0];

const textDiv = document.getElementsByClassName('left-content')[0];

const image = document.querySelectorAll('.image');
const imageList = [  'images/image-1.jpg',  'images/image-2.jpg',  'images/image-3.jpg',  'images/image-4.jpg'];

const headingP = document.querySelectorAll(".image-heading");
const contentP = document.querySelectorAll(".heading-content");

let intervalId;
let currentIndex = 0;
let currentSlide = 0;
window.onload = function() {
  image.src=imageList[0];
  dots[0].setAttribute('id', 'active-dots');
  //imageDiv.style.opacity=1;
  //imageDiv.style.transform='translate3d(0, 0, 0)';
  autoSlide();
};

function dotsChange(index) {
  for (dotIndex = 0; dotIndex < dots.length; dotIndex++) {
    dots[dotIndex].removeAttribute('id');
  }
  dots[index].setAttribute('id', 'active-dots');
}

function slider(index) {

  //Image Part
  if(index==1){
    image[1].classList.remove('image-none');
    image[1].classList.add('image-right');
    image[0].classList.add('image-none');
    image[0].classList.remove('image-visible');
    image[2].classList.add('image-none');
    image[2].classList.remove('image-visible');
    image[3].classList.add('image-none');
    image[3].classList.remove('image-visible');

    headingP[1].classList.remove('text-none');
    headingP[1].classList.add('text-right');
    headingP[0].classList.add('text-none');
    headingP[0].classList.remove('text-visible');
    headingP[2].classList.add('text-none');
    headingP[2].classList.remove('text-visible');
    headingP[3].classList.add('text-none');
    headingP[3].classList.remove('text-visible');

    contentP[1].classList.remove('text-none');
    contentP[1].classList.add('text-right');
    contentP[0].classList.add('text-none');
    contentP[0].classList.remove('text-visible');
    contentP[2].classList.add('text-none');
    contentP[2].classList.remove('text-visible');
    contentP[3].classList.add('text-none');
    contentP[3].classList.remove('text-visible');

var thisTimeout = setTimeout(function() {
    image[1].classList.remove('image-right');
    image[1].classList.add('image-visible');
    headingP[1].classList.remove('text-right');
    headingP[1].classList.add('text-visible');
    contentP[1].classList.remove('text-right');
    contentP[1].classList.add('text-visible');
}, 50);
    currentSlide = 1;
  }
  else if(index==2){
    image[2].classList.remove('image-none');
    image[2].classList.add('image-right');
    image[0].classList.add('image-none');
    image[0].classList.remove('image-visible');
    image[1].classList.add('image-none');
    image[1].classList.remove('image-visible');
    image[3].classList.add('image-none');
    image[3].classList.remove('image-visible');

    headingP[2].classList.remove('text-none');
    headingP[2].classList.add('text-right');
    headingP[0].classList.add('text-none');
    headingP[0].classList.remove('text-visible');
    headingP[1].classList.add('text-none');
    headingP[1].classList.remove('text-visible');
    headingP[3].classList.add('text-none');
    headingP[3].classList.remove('text-visible');

    contentP[2].classList.remove('text-none');
    contentP[2].classList.add('text-right');
    contentP[0].classList.add('text-none');
    contentP[0].classList.remove('text-visible');
    contentP[1].classList.add('text-none');
    contentP[1].classList.remove('text-visible');
    contentP[3].classList.add('text-none');
    contentP[3].classList.remove('text-visible');

var thisTimeout = setTimeout(function() {
    image[2].classList.remove('image-right');
    image[2].classList.add('image-visible');
    headingP[2].classList.remove('text-right');
    headingP[2].classList.add('text-visible');
    contentP[2].classList.remove('text-right');
    contentP[2].classList.add('text-visible');
}, 50);
    currentSlide = 2;
  }
  else if(index==3){
    image[3].classList.remove('image-none');
    image[3].classList.add('image-right');
    image[0].classList.add('image-none');
    image[0].classList.remove('image-visible');
    image[2].classList.add('image-none');
    image[2].classList.remove('image-visible');
    image[1].classList.add('image-none');
    image[1].classList.remove('image-visible');

    headingP[3].classList.remove('text-none');
    headingP[3].classList.add('text-right');
    headingP[0].classList.add('text-none');
    headingP[0].classList.remove('text-visible');
    headingP[2].classList.add('text-none');
    headingP[2].classList.remove('text-visible');
    headingP[1].classList.add('text-none');
    headingP[1].classList.remove('text-visible');

    contentP[3].classList.remove('text-none');
    contentP[3].classList.add('text-right');
    contentP[0].classList.add('text-none');
    contentP[0].classList.remove('text-visible');
    contentP[2].classList.add('text-none');
    contentP[2].classList.remove('text-visible');
    contentP[1].classList.add('text-none');
    contentP[1].classList.remove('text-visible');

var thisTimeout = setTimeout(function() {
    image[3].classList.remove('image-right');
    image[3].classList.add('image-visible');
    headingP[3].classList.remove('text-right');
    headingP[3].classList.add('text-visible');
    contentP[3].classList.remove('text-right');
    contentP[3].classList.add('text-visible');
}, 50);
    currentSlide = 3;
 
var thisTimeout = setTimeout(function() {
   
}, 50);
    currentSlide = 4;
  }
  else if(index==0){
    image[0].classList.remove('image-none');
    image[0].classList.add('image-right');
    image[1].classList.add('image-none');
    image[1].classList.remove('image-visible');
    image[2].classList.add('image-none');
    image[2].classList.remove('image-visible');
    image[3].classList.add('image-none');
    image[3].classList.remove('image-visible');

    headingP[0].classList.remove('text-none');
    headingP[0].classList.add('text-right');
    headingP[1].classList.add('text-none');
    headingP[1].classList.remove('text-visible');
    headingP[2].classList.add('text-none');
    headingP[2].classList.remove('text-visible');
    headingP[3].classList.add('text-none');
    headingP[3].classList.remove('text-visible');

    contentP[0].classList.remove('text-none');
    contentP[0].classList.add('text-right');
    contentP[1].classList.add('text-none');
    contentP[1].classList.remove('text-visible');
    contentP[2].classList.add('text-none');
    contentP[2].classList.remove('text-visible');
    contentP[3].classList.add('text-none');
    contentP[3].classList.remove('text-visible');

var thisTimeout = setTimeout(function() {
    image[0].classList.remove('image-right');
    image[0].classList.add('image-visible');
    headingP[0].classList.remove('text-right');
    headingP[0].classList.add('text-visible');
    contentP[0].classList.remove('text-right');
    contentP[0].classList.add('text-visible');
}, 50);
    currentSlide = 0;
}
}
function clickHandler(index) {
  dotsChange(index);
  setTimeout(function() {
    slider(index);
  }, 1);
}
let myInterval;
function myStop() {
  clearInterval(myInterval);
}
let isHovered = false;

for(let i=0; i<image.length; i++){
document.getElementsByClassName('image')[i].addEventListener("mouseover", mouseOver);
document.getElementsByClassName('image')[i].addEventListener("mouseout", mouseOut);
document.getElementsByClassName('left-content')[i].addEventListener("mouseover", mouseOver);
document.getElementsByClassName('left-content')[i].addEventListener("mouseout", mouseOut);
//document.getElementsByClassName('img-dots')[i].addEventListener("mouseover", mouseOver);
//document.getElementsByClassName('img-dots')[i].addEventListener("mouseout", mouseOut);
}
document.getElementsByClassName('buttom-right')[0].addEventListener("mouseover", mouseOver);
document.getElementsByClassName('buttom-right')[0].addEventListener("mouseout", mouseOut);


function mouseOver() {
  isHovered = true;
  myStop();
console.log('mouse Over');
}
function mouseOut() {
  isHovered = false;
  autoSlide();
console.log('mouse Out');
}
function autoSlide() {
  if (isHovered) {
    return;
  }
   let currentIndex = currentSlide;
   myInterval = setInterval(() => {
   currentIndex = (currentIndex + 1) % image.length;
   clickHandler(currentIndex);
  }, 5000);
}
for (let i = 0; i < dots.length; i++) {
  dots[i].addEventListener("click", function() {
    clickHandler(i);
  });
}