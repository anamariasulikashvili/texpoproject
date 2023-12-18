//სქროლი ჰედერში
function scrolll(){
  var left = document.querySelector(".scroll-texts");
  left.scrollBy(-350,0);
   }
   function scrollr(){
  var left = document.querySelector(".scroll-texts");
  left.scrollBy(350,0);
   }

   //სლაიდერი
   let slideIndex = 1;
   showSlides(slideIndex);
   
   function plusSlides(n) {
     showSlides(slideIndex += n);
   }
   
   function currentSlide(n) {
     showSlides(slideIndex = n);
   }
   
   function showSlides(n) {
     let i;
     let slides = document.getElementsByClassName("mySlides");
     let dots = document.getElementsByClassName("dot");
     if (n > slides.length) {slideIndex = 1}    
     if (n < 1) {slideIndex = slides.length}
     for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
     }
     for (i = 0; i < dots.length; i++) {
       dots[i].className = dots[i].className.replace(" active", "");
     }
     slides[slideIndex-1].style.display = "block";  
     dots[slideIndex-1].className += " active";
   }

    //ბურგერ მენიუ რესპონსივში
   const menu = document.querySelector('.menu');
   const list = document.querySelector('.right-header');
   let accordion = document.querySelector(".main-accordion")
    menu.addEventListener('click', () => {
     list.classList.toggle('active');
     menu.classList.toggle('active');
     accordion.classList.toggle('active');
      signIn.style.display="none";
      registrationInput.style.display="none";
   });


  //სერჩ ბარი
   const button2 = document.querySelector('.searchbutton');
   const searchBar = document.querySelector('.input');
   const searchBarr = document.querySelector('.input1');
   const list2 = document.querySelector('.right-header');
   let accordion2 = document.querySelector(".main-accordion")
   button2.addEventListener('click', () => {
     searchBar.classList.toggle('visible');
     searchBarr.classList.toggle('visible');
   });
   

let counter = 0;
let icons = ["photos/x.png", "photos/search.png"];
change = function(){
    document.getElementById("changeIcon").src=icons[counter];
    counter++;
    if(counter>=icons.length){
        counter=0;
    }
};

//ექაუნთზე შესვლა
let enterIcon = document.querySelector(".enter");
let signIn = document.querySelector(".sign-in1");
let xIcon=document.querySelector(".x-icon")
enterIcon.onclick = ()=>{
  signIn.style.display="flex";
}
xIcon.onclick = () =>{
  signIn.style.display="none";
}


let registrationButton = document.querySelector(".registration")
let registrationInput = document.querySelector(".sign-in2")
let xIcon2=document.querySelector(".x-icon2")

registrationButton.onclick = () =>{
  registrationInput.style.display = "flex";
  signIn.style.display="none";
}
xIcon2.onclick = () =>{
  registrationInput.style.display="none";
}

let authorization2Button = document.querySelector(".authorization2")
authorization2Button.onclick = () =>{
  registrationInput.style.display = "none";
  signIn.style.display="flex";
}


var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
acc[i].addEventListener("click", function() {

var panel = this.nextElementSibling;
if (panel.style.maxHeight){
  panel.style.maxHeight = null;
} else {
  let active = document.querySelectorAll(".accordion-container .accordion.active");
  for(let j = 0; j < active.length; j++){
    active[j].classList.remove("active");
    active[j].nextElementSibling.style.maxHeight = null;
  }
  this.classList.toggle("active");
  panel.style.maxHeight = panel.scrollHeight + "px";
}
});
}


//dropdown მენიუ
let button = document.querySelector(".dropdownbtn");
let categories = document.querySelector(".categories")
button.addEventListener("click", myFunction);
function myFunction() {
    if (categories.style.display !== "none") {
        categories.style.display = "none";
        button.style.transform = "rotate(0)";
      } else {
        categories.style.display = "block";
        button.style.transform = "rotate(3.142rad)";
      }
}

