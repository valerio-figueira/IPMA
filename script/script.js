import Slides from "./Slides.js";
import Legislacao from "./Legislacao.js";
import Postagens from "./Postagens.js";
import Licitacoes from "./Licitacoes.js";
import Diretoria from "./Diretoria.js";
import Contato from "./Contato.js";
import Unimed from "./convenios/Unimed.js";
import Uniodonto from "./convenios/Uniodonto.js";
import OdontoCompany from "./convenios/OdontoCompany.js";
import Aposentadoria from "./beneficios/Aposentadoria.js";
import Dependentes from "./beneficios/Dependentes.js";
import Pensao from "./beneficios/Pensao.js";


/*COPYRIGHT DATE*/
let year = new Date().getFullYear();
let copyright = document.querySelector(".copyright");

copyright.textContent = `Direitos Autorais \u00A9 ${year} - IPMA`;



/*
PORTFOLIUM LINK IN WEBSITE FOOTER
*/
let link = document.querySelector("footer div a");

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
});




/*
MOBILE NAV
*/
document.querySelector(".navbar .icon").addEventListener("click", () => {
    openNav()
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





//CURRENT PATH NAME
const path = location.pathname;


if(path.match("/index.html")){

    Slides.getSlides();
    Postagens.displayPostagens();

} else if(path.match("/legislacao.html")){

    Legislacao.getHtml();

} else if(path.match("/licitacoes.html")){

    Licitacoes.getHtml();

} else if(path.match("/diretoria.html")){

    Diretoria.getHtml();

} else if(path.match("/contato.html")){

    Contato.getHtml();

};

//CONVÊNIOS
if(path.match("/convenios/unimed.html")){

    Unimed.getHtml();

} else if(path.match("/convenios/uniodonto.html")){

    Uniodonto.getHtml();

} else if(path.match("/convenios/odontocompany.html")){

    OdontoCompany.getHtml();

};


//BENEFÍCIOS
if(path.match("/beneficios/aposentadoria.html")){

    Aposentadoria.getHtml();

} else if(path.match("/beneficios/dependentes.html")){

    Dependentes.getHtml();

} else if(path.match("/beneficios/pensao.html")){

    Pensao.getHtml();

};



openFolder();
function openFolder(){
    //Desdobrar itens da div oculta
    const folders = document.getElementsByClassName("folder");
    for (let folder of folders) {
        folder.addEventListener("click", function() {
            this.classList.toggle("active");
            const content = this.nextElementSibling;
                if (content.className === "folder_content") {
                    content.classList.add("open")
                    content.style.maxHeight = "3000px";
                    content.style.paddingBottom = "20px";
                    content.style.transition += "0.5s";
                } else {
                    content.classList.remove("open");
                    content.style.maxHeight = "0";
                    content.style.paddingBottom = "0px";
            };
        });
    };
};


/*ADD ACTIVE CLASS IN NAVBAR ANCHORS*/
const currentPath = window.location.href;
document.querySelectorAll(".navbar a").forEach(anchor => {
    if(currentPath.match(anchor.getAttribute("href"))){
        console.log("Success")
        anchor.classList.add("active");
    };
});
