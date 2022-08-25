import Legislacao from "./Legislacao.js";
import Postagens from "./Postagens.js";
import Licitacoes from "./Licitacoes.js";

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


function displaySlides(slides) {
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
    document.querySelector(".main-column").innerHTML += `
        <!-- The dots/circles -->
        <br>
        <div style="text-align:center">
            <span class="dot"></span>
            <span class="dot"></span>
            <span class="dot"></span>
        </div>
    `;
}

function displayPostagens() {
    const content = document.querySelector(".content-column");
    const html = Postagens.getPostagens().map(postagem => {
        return `
            <article class="post">
                <a href="${postagem.url}" class="h1-anchor" rel="next">
                    <h1>${postagem.name}</h1>
                </a>
                <img src="${postagem.img}" alt="${postagem.name}">
                <p>${postagem.description}</p>
                <a href="${postagem.url}" class="read-more">Continue Lendo...</a>
            </article>
        `
    }).join("");
    content.innerHTML = html;
};

const path = location.pathname;

if(path.match("/index.html")){
    //GET HTML OF THE CAROUSEL
    displaySlides(slides);
    //GET HTML CONTENT
    displayPostagens();

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

} else if(path.match("/legislacao.html")){
    
    const page = document.querySelector(".page");  
    let table = document.querySelectorAll(".legislacao");

    function getLeiDeCriacao(){
        const html = Legislacao.getLeis().map(lei => {
            return `
                <tr>
                    <td>${lei.name}</td>
                    <td><a href="${lei.url}" target="_blank">📁</a></td>
                </tr>
            `;
        }).join("");
        table[0].innerHTML += html;
    }
    function getLeis1992A2020(){        
        const html = Legislacao.getLeis1992A2020().map(lei => {
            return `
                <tr>
                    <td>${lei.name}</td>
                    <td><a href="${lei.url}" target="_blank">📁</a></td>
                </tr>
            `;
        }).join("");
        table[1].innerHTML += html;
    }
    function getParagraphs(){
        const paragraphs = Legislacao.getParagraphs().map(paragraph => {
            return `
            <p><a href="${paragraph.url}" target="_blank">${paragraph.name}</a>${paragraph.description}</p>
            `;
        }).join("");
        page.innerHTML += paragraphs;
    }

    getLeiDeCriacao()
    getLeis1992A2020();
    getParagraphs();

} else if(path.match("/licitacoes.html")){
    const page = document.querySelector(".page");

    function getLicitacoes(){
        const table = document.querySelector(".page table")
        const html = Licitacoes.getLicitacoes().map(licitacao => {
            return `
            <tr>
                <td>${licitacao.processo}</td>
                <td>${licitacao.modalidade}</td>
                <td>${licitacao.objeto}</td>
                <td>${licitacao.status}</td>
                <td><a href="${licitacao.url}" target="_blank">📁</a></td>
            </tr>
            `;
        }).join("");
        table.innerHTML = html;
    }

    getLicitacoes();

} else if(path.match("/diretoria.html")){
    const page = document.querySelector(".page");
    page.innerHTML = `
    <h1>DIRETORIA</h1>
    <ul>
        <li>Coordenador Diretor: Jesio Silva Machado</li>
        <li>Contador: Cláudio José de Paula</li>
        <li>Jurídico: Dr. Paulo Henrique S. Oliveira</li>
    </ul>
    <h2>Atendimento</h2>
    <ul>
        <li>Lorena Pereira Mamede</li>
        <li>Nayara Ferreira Gonçalves Mamede</li>
    </ul>
    <h2>Conselho de Assistência à Saúde</h2>
    <ul>
        <li>Jésio Silva Machado – Presidente</li>
        <li>Paulo Henrique Souza Oliveira – Vice – Presidente</li>
        <li>Monica Aparecida Sandim – Secretária</li>
        <li>Silvana Diniz Parreira Alvim – Tesoureira</li>
    </ul>
    <h2>Membros</h2>
    <ul>
        <li>Angélica Reis Mamede</li>
        <li>Carlos Antônio Cabral</li>
        <li>Denilton Cesar Nogueira</li>
        <li>Rosana Aparecida Fontes</li>
        <li>Vanusa Domingues Parreira Menezes</li>
    </ul>
    <h2>Suplentes</h2>
    <ul>
        <li>Joana Darc Aparecida de Oliveira</li>
        <li>Luciene Aparecida Moura</li>
    </ul>
    <h2>Conselho Deliberativo</h2>
    <ul>
        <li>Evelyn de Freitas Moura</li>
        <li>Jairo Mamede Bittencourt</li>
        <li>Rachel Domingues Parreira</li>
        <li>Silvana Diniz Parreira Alvim</li>
        <li>Vanusa Domingues Parreira Menezes</li>
    </ul>
    <h2>Conselho Fiscal</h2>
    <ul>
        <li>Luciene Aparecida Moura Vieira</li>
        <li>Monalissa da Silva Sandim</li>
        <li>Paulo Henrique Sousa Oliveira</li>
    </ul>
    <h2>Suplentes</h2>
    <ul>
        <li>Carlos Antônio da Silva Cabral</li>
        <li>Denilton Cesar Nogueira</li>
        <li>Mônica Aparecida Sandim</li>
    </ul>
    `;
} else if(path.match("/contato.html")){
    const phones = [
        {phone: "(34) 3283-3102"},
        {phone: "(34) 99658-2717"},
    ]
    const emails = [
        {email: "ipmamonte@hotmail.com"},
        {email: "jesiosilva@hotmail.com"}
    ]
    const addresses = [
        {
            address: "Rua Amélia Rezende de Oliveira, N°. 40 - CNPJ 03.650.395/0001-66",
            city: "Monte Alegre de Minas - Estado de Minas Gerais"
        }
    ];
    const page = document.querySelector(".page");

    const phoneTag = document.querySelector("#phone");
    const emailTag = document.querySelector("#email");
    const addressTag = document.querySelector("#address");

    phoneTag.innerHTML += phones.map(phone => {
        return `
            <li>${phone.phone}</li>
        `;
    }).join("");
    emailTag.innerHTML += emails.map(email => {
        return `
            <li>${email.email}</li>
        `;
    }).join("");
    addressTag.innerHTML += addresses.map(address => {
        return `
        <li>${address.address}</li>
        <li>${address.city}</li>
        `;
    }).join("");

    page.innerHTML += `
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d943.8491212610531!2d-48.87909927084252!3d-18.869483999200426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94a3f1dfb6d47bc3%3A0xa96ef4695d2b2ec6!2sR.+Am%C3%A9lia+R+Oliveira%2C+40%2C+Monte+Alegre+de+Minas+-+MG%2C+38420-000!5e0!3m2!1spt-BR!2sbr!4v1476916163798" width="100%" height="250" frameborder="0" style="border:0" allowfullscreen class="map-location"></iframe>
    `;
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