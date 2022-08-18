/*COPYRIGHT DATE*/
let year = new Date().getFullYear();
let copyright = document.querySelector(".copyright");

copyright.textContent = `Direitos Autorais \u00A9 ${year} - IPMA`;



/*
PORTFOLIUM LINK IN WEBSITE FOOTER
*/
function addLink(){ 
    let link = document.querySelector("footer div a");

    link.setAttribute("href", "https://valerio-figueira.github.io/portfolio/");

    link.className = "fa fa-external-link-square";
    link.style.fontSize = "normal";
    link.style.transition = "font-size 0.5s";

    link.addEventListener("mouseleave", function(){
        link.style.fontSize = "normal";
        link.style.fontWeight = "normal";
        link.className = null;
    })
}


/*
SLIDE
*/
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
showSlides(slideIndex += n);
}

let dot = document.querySelectorAll(".dot");
dot[0].addEventListener("click", () => currentSlide(1));
dot[1].addEventListener("click", () => currentSlide(2));
dot[2].addEventListener("click", () => currentSlide(3));

let prev = document.querySelector(".slideshow-container .prev");
let next = document.querySelector(".slideshow-container .next");
prev.addEventListener("click", () => plusSlides(-1));
next.addEventListener("click", () => plusSlides(1));



// Thumbnail image controls
function currentSlide(n) {
showSlides(slideIndex = n);
}

function showSlides(n) {
let i;
let slides = document.getElementsByClassName("slides");
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



/*
MOBILE NAV
*/
function showList() {
    let x = document.getElementById("mobile");
    let y = document.getElementsByClassName("icon")[0];
        if (x.className === "navbar") {
                x.className += " responsive";
                y.className += " active";
        } else {
                x.className = "navbar";
                y.className = "icon";
        }
}


