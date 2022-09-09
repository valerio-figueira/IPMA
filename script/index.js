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
});
link.addEventListener("mouseleave", function(){
    link.style.fontSize = "normal";
    link.style.fontWeight = "normal";
    link.className = null;
});






//CURRENT PATH NAME
const path = location.pathname;


if(path.match("/index.html")){

    getHeader("./");
    getNav("./");
    Slides.getSlides();
    Postagens.displayPostagens();
    getLoginForm();

} else if(path.match("/legislacao.html")){

    getHeader("./");
    getNav("./");
    Legislacao.getHtml();
    getLoginForm();
    

} else if(path.match("/licitacoes.html")){

    getHeader("./");
    getNav("./");
    Licitacoes.getHtml();
    getLoginForm();

} else if(path.match("/diretoria.html")){

    getHeader("./");
    getNav("./");
    Diretoria.getHtml();
    getLoginForm();

} else if(path.match("/contato.html")){

    getHeader("./");
    getNav("./");
    Contato.getHtml();
    getLoginForm();

} else if(path.match("/login.html")){
    getHeader("./");
    getNav("./");
}

//CONVÊNIOS
if(path.match("/convenios/unimed.html")){

    getHeader("../");
    getNav("../");
    Unimed.getHtml();
    getLoginForm();
    pullAllElement(".dropdown")[0].classList.add("active");

} else if(path.match("/convenios/uniodonto.html")){

    getHeader("../");
    getNav("../");
    Uniodonto.getHtml();
    getLoginForm();
    pullAllElement(".dropdown")[0].classList.add("active");

} else if(path.match("/convenios/odontocompany.html")){

    getHeader("../");
    getNav("../");
    OdontoCompany.getHtml();
    getLoginForm();
    pullAllElement(".dropdown")[0].classList.add("active");

};


//BENEFÍCIOS
if(path.match("/beneficios/aposentadoria.html")){

    getHeader("../");
    getNav("../");
    Aposentadoria.getHtml();
    getLoginForm();
    pullAllElement(".dropdown")[1].classList.add("active");

} else if(path.match("/beneficios/dependentes.html")){

    getHeader("../");
    getNav("../");
    Dependentes.getHtml();
    getLoginForm();
    pullAllElement(".dropdown")[1].classList.add("active");

} else if(path.match("/beneficios/pensao.html")){

    getHeader("../");
    getNav("../");
    Pensao.getHtml();
    getLoginForm();
    pullAllElement(".dropdown")[1].classList.add("active");

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



/*LOGIN IN SIDECOLUMN*/
function getLoginForm(){
    document.querySelector(".holerite").innerHTML = `
    <h1>Holerite</h1>
    <div class="login-form">
        <form class="form-signin" method="POST" name="WFRLogon" action="https://aspprevweb.com.br:8097/logon.do"  target="_blank" >
          <input name="dataConnection" type="hidden" value="MonteAlegreDeMinas" />
          <p style="text-align: left;"><input name="sys" type="hidden" value="AUT" />
          <label for="inputCPF" class="sr-only"></label>
          <input type="text" id="cpf" name="user" class="form-control" placeholder="Digite o CPF" required>
          <label for="inputPassword" class="sr-only"></label>
          <input type="password" name="password" class="form-control" placeholder="Digite a Senha" required>
          <button class="button" type="submit">Acessar</button>
        </form>
    </div>
    `;
};


function getNav(path){
    document.querySelector(".navbar").innerHTML = `
    <a href="${path}index.html" class="fa fa-home" id="home"></a>
    <a href="${path}login.html" class="login">Login</a>
    <a href="${path}legislacao.html">Legislação</a>
    <div class="dropdown">
      <div class="dropbtn">Convênios
        <div class="arrow">&#9698;</div>
      </div>
      <div class="dropdown-content">
        <a href="${path}convenios/unimed.html">Unimed</a>
        <a href="${path}convenios/uniodonto.html">Uniodonto</a>
        <a href="${path}convenios/odontocompany.html">Odonto Company</a>
      </div>
    </div>
    <div class="dropdown">
        <div class="dropbtn">Benefícios
          <div class="arrow">&#9698;</div>
        </div>
        <div class="dropdown-content">
          <a href="${path}beneficios/pensao.html">Pensão</a>
          <a href="${path}beneficios/aposentadoria.html">Aposentadoria</a>
          <a href="${path}beneficios/dependentes.html">Dependentes</a>
        </div>
      </div>
    <a href="${path}licitacoes.html">Licitações</a>
    <a href="${path}diretoria.html">Diretoria</a>
    <a href="${path}contato.html">Contato</a>
    <a class="icon">
        <span class="fa fa-bars"></span>
    </a>
    `;
    
    /*
    MOBILE NAV
    */
    document.querySelector(".navbar .icon").addEventListener("click", () => {
        const navbar = document.querySelector(".navbar");
        const mobileIcon = document.querySelector(".navbar .icon");
        if (navbar.className === "navbar") {
            navbar.classList.add("responsive");
            mobileIcon.classList.add("active");
        } else {
            navbar.classList.remove("responsive");
            mobileIcon.classList.remove("active");
        }
    });
};

function getHeader(path){
    document.querySelector("header").innerHTML = `
        <a href="index.html" target="_self">
            <img src="${path}imgs/brasão.png" alt="brasão" class="brasão">
        </a>
        <a href="${path}index.html" target="_self">
            <h1>IPMA</h1>
        </a>
        <a href="${path}index.html" target="_self">
            <p>Instituto de Previdência Municipal de Monte Alegre de Minas</p>
        </a>
    `;
}

function pullElement(element){
    return document.querySelector(element);
}
function pullAllElement(element){
    return document.querySelectorAll(element);
}