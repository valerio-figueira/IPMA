import Slides from "./Slides.js";
import Legislacao from "./Legislacao.js";
import Postagens from "./Postagens.js";
import Licitacoes from "./Licitacoes.js";
import Diretoria from "./Diretoria.js";
import Contato from "./Contato.js";

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
    let navbar = document.getElementById("mobile");
    let mobileIcon = document.getElementsByClassName("icon")[0];
        if (navbar.className === "navbar") {
                navbar.className += " responsive";
                mobileIcon.className += " active";
        } else {
                navbar.className = "navbar";
                mobileIcon.className = "icon";
    }
}





//CURRENT PATH NAME
const path = location.pathname;

if(path.match("/index.html")){

    Slides.getSlides();
    Postagens.displayPostagens();

} else if(path.match("/legislacao.html")){

    Legislacao.getLegislacao();

} else if(path.match("/licitacoes.html")){

    Licitacoes.getLicitacoesHtml();

} else if(path.match("/diretoria.html")){

    Diretoria.getDiretoriaHtml();

} else if(path.match("/contato.html")){

    Contato.getContato();

}

//CONVÊNIOS SECTIONS
if(path.match("/convenios/unimed.html")){
    
} else if(path.match("/convenios/uniodonto.html")){

} else if(path.match("/convenios/odontocompany.html")){

}



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
            }
        });
    }
}
