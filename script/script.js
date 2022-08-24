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





const postagens = [
    {
        name: "Prova de Vida",
        description: "A Prova de Vida é uma exigência do Instituto Municipal de Previdência de Monte Alegre de Minas e deve ser feita todo ano por quem recebe um ou mais benefícios do IPMA. Atenção! Quem não faz a prova de vida, tem o benefício bloqueado. O objetivo desse procedimento é dar mais segurança ao cidadão, evitando fraudes e pagamento de benefícios indevidos.",
        img: "imgs/kleymenov-11374476.jpg",
        url: "postagens/prova-de-vida.html",
    },
    {
        name: "1ª Parcela do Décimo Terceiro - 2022",
        description: "Devido aos efeitos da crise financeira ocorrida pela pandemia Covid-19, o Instituto Municipal de Monte Alegre de Minas irá antecipar o décimo terceiro salário de aposentados e pensionistas.",
        img: "imgs/pexels-andrea-piacquadio-3779770.jpg",
        url: "postagens/primeira-parcela-decimo-terceiro.html",
    },
    {
        name: "Carteira do Idoso",
        description: "A carteira do Idoso ou de identificação dos segurados (aposentados e pensionistas), traz informações de identificação, o tipo e o número do  seu benefício.",
        img: "imgs/pexels-cojanu-alexandru-7389961.jpg",
        url: "postagens/carteira-do-aposentado.html",
    },
];

const slides = [
    {
        name: "Prova de Vida - 2022",
        description: "O Instituto de Previdência Municipal de Monte Alegre de Minas informa aos aposentados e pensionistas que já está sendo feita a prova de vida na sede do IPMA.",
        img: "imgs/pexels-daria-obymaha-1684916.jpg",
        url: "postagens/prova-de-vida-2022.html",
    },
    {
        name: "Odonto Company",
        description: "Conheça nosso convênio odontológico, em parceria com a Odonto Company, para os funcionários públicos, ativos ou aposentados, pensionistas e dependentes, de Monte Alegre de Minas.",
        img: "imgs/pexels-karolina-grabowska-6627313.jpg",
        url: "convenios/odontocompany.html",
    },
    {
        name: "",
        description: "",
        img: "imgs/slide3.png",
        url: "#",
    },
];


function getSlides(slides) {
    const slideshow = document.querySelector(".slideshow-container");
    const html = slides.map(slide => {
        return `
            <div class="slide fade">
                <div class="numbertext">${""}</div>
                <img src="${slide.img}">
                <div class="text"><a href="${slide.url}" rel="next">${slide.description}</a>
                </div>
            </div>
        `;        
    }).join("");

    slideshow.innerHTML = html;
    slideshow.innerHTML += `
        <a class="prev">&#10094;</a>
        <a class="next">&#10095;</a>
    `;
}

const path = location.pathname;

if(path.match("/index.html")){
    getSlides(slides);

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
    let slides = document.getElementsByClassName("slide");
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

}


function displayPostagens(postagens) {
    const html = postagens.map(postagem => {
        return `
            <article class="post">
                <a href="${postagem.url}" class="h1-anchor" rel="next">
                    <h1>${postagem.name}</h1>
                </a>
                <img src="${postagem.url}" alt="${postagem.name}">
                <p${postagem.description}></p>
                <a href="${postagem.url}" class="read-more">Continue Lendo...</a>
            </article>
        `
    }).join("");
};





/*

            <article class="post">
                <a href="" class="h1-anchor" rel="next">
                    <h1></h1>
                </a>
                <img src="" alt="">
                <p></p>
                <a href="" class="read-more">Continue Lendo...</a>
            </article>

*/