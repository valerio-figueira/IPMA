import Header from "./partials/header.js";
import Footer from "./partials/footer.js";

//HEADER AND FOOTER HTML
document.querySelector("header").innerHTML = Header.getHtml();
document.querySelector("footer").innerHTML = Footer.getHtml();


/*COPYRIGHT DATE*/
let year = new Date().getFullYear();
const copyright = document.querySelector(".copyright");

copyright.textContent = `Direitos Autorais \u00A9 ${year} - IPMA`;



/*
PORTFOLIUM LINK IN WEBSITE FOOTER
*/
addLink();
function addLink(){
    let link = document.querySelector("footer .creator_link");

    link.addEventListener('mouseenter', () => {
        link.setAttribute("href", "https://valerio-figueira.github.io/portfolio/");

        link.className = "fa fa-external-link-square";
        link.style.fontSize = "normal";
        link.style.transition = "font-size 0.5s";
    
        link.addEventListener("mouseleave", function(){
            link.style.fontSize = "normal";
            link.style.fontWeight = "normal";
            link.className = null;
        });
    })
}


/*
CAROUSEL
*/
if(document.querySelector(".slideshow-container")){
    let index = 1;
    const dots = document.querySelectorAll(".dot");
    const prev = document.querySelector(".prev");
    const next = document.querySelector(".next");

    displaySlides(index);

    prev.addEventListener("click", () => displaySlides(--index));
    next.addEventListener("click", () => displaySlides(++index));

    dots[0].addEventListener("click", () => displaySlides(index = 1));
    dots[1].addEventListener("click", () => displaySlides(index = 2));
    dots[2].addEventListener("click", () => displaySlides(index = 3));

    function displaySlides(indexPosition){
        const slides = document.querySelectorAll(".slide");        

        if(indexPosition > slides.length){
            indexPosition = 1;
        } else if(indexPosition < 1){
            indexPosition = slides.length;
        }

        for(const slide of slides){
            slide.style.display = "none";
        }

        for(const dot of dots){
            dot.classList.remove("active");
        }

        slides[indexPosition - 1].style.display = "block";
        dots[indexPosition - 1].classList.add("active");
        return index = indexPosition;
    }
}



/*
MOBILE NAV
*/
document.querySelector(".navbar .icon").addEventListener("click", () => {
    openNav();
});

function openNav() {
    const navbar = document.querySelector(".navbar");
    const mobileIcon = document.querySelector(".navbar .icon");
        if (navbar.className === "navbar") {
            navbar.classList.add("responsive");
            mobileIcon.classList.add("active");
        } else {
            navbar.classList.remove("responsive");
            mobileIcon.classList.remove("active");
        }
}





//Desdobrar itens da div oculta
const folders = document.querySelectorAll(".folder");
for (const folder of folders) {
    folder.addEventListener("click", function() {
    this.classList.toggle("active");

    const content = this.nextElementSibling;
    if (content.className === "folder_content") {
        content.classList.add("open");
        content.style.maxHeight = "3000px";
        content.style.paddingBottom = "20px";
        content.style.transition += "0.5s";
    } else {
        content.classList.remove("open");
        content.style.maxHeight = "0";
        content.style.paddingBottom = "0px";
    }
    });
}


/*ADD ACTIVE CLASS IN NAVBAR ANCHORs*/
const currentPath = window.location.href;
console.log(currentPath)
document.querySelectorAll(".navbar a").forEach(link => {    
    if(currentPath.match(link.getAttribute("href"))){
        link.classList.add("active");
    }
});


