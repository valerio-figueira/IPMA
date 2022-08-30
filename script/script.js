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
CAROUSEL
*/
if(document.querySelector(".slideshow-container")){
    let index = 1;
    const dots = document.querySelectorAll(".dot");
    const prev = document.querySelector(".prev");
    const next = document.querySelector(".next");

    displaySlides(index);

    prev.addEventListener("click", () => displaySlides(--index))
    next.addEventListener("click", () => displaySlides(++index))    

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
    openNav()
});

function openNav() {
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





//Desdobrar itens da div oculta
const folder = document.getElementsByClassName("folder");
let i;

for (i = 0; i < folder.length; i++) {
    folder[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.className === "file" || content.className === "file subfolders") {
      content.className += " open";
      content.style.maxHeight = "3000px";
      content.style.paddingBottom = "20px";
      content.style.transition += "0.5s";
    } else {
      content.className = "file subfolders";
      content.style.maxHeight = "0";
      content.style.paddingBottom = "0px";
    }
  });
}