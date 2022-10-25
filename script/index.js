import { Acupuntura } from './guiamedico/Acupuntura.js';
import { AlergiaEImunologia } from './guiamedico/AlergiaEImunologia.js';
import { Anestesiologia } from './guiamedico/Anestesiologia.js';
import { Angiologia } from './guiamedico/Angiologia.js';
import { Audiometria } from './guiamedico/Audiometria.js';
import { Cardiologia } from './guiamedico/Cardiologia.js';
import { CirurgiaAparelhoDigestivo } from './guiamedico/CirurgiaAparelhoDigestivo.js';
import { CirurgiaGeral } from './guiamedico/CirurgiaGeral.js';

/*COPYRIGHT DATE*/
let year = new Date().getFullYear();
const copyright = document.querySelector(".copyright");

copyright.textContent = `Direitos Autorais \u00A9 ${year} - IPMA`;



/*
PORTFOLIUM LINK IN WEBSITE FOOTER
*/
setLinkInFooter();
function setLinkInFooter(){
    let link = document.querySelector("footer div a");

    link.addEventListener("mouseenter", function(){
        link.setAttribute("href", "https://valerio-figueira.github.io/portfolio/");

        link.className = "fa fa-external-link-square";
        link.style.fontSize = "normal";
        link.style.transition = "font-size 0.5s";
    })

    link.addEventListener("mouseleave", function(){
        link.style.fontSize = "normal";
        link.style.fontWeight = "normal";
        link.className = null;
    });
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
        };
};





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
};


/*ADD ACTIVE CLASS IN NAVBAR ANCHORs*/
const currentPath = window.location.href;
console.log(currentPath)
document.querySelectorAll(".navbar a").forEach(link => {
    if(currentPath.match(link.getAttribute("href"))){
        link.classList.add("active");
        if(currentPath.match('/convenios')){
            document.querySelectorAll('.dropbtn')[0].classList.add('active');
        } else if(currentPath.match('/beneficios')){
            document.querySelectorAll('.dropbtn')[1].classList.add('active');
        };
    };
});


/*UNIMED SECTION*/
const selectionTag = document.querySelector('#search-unimed')
if(selectionTag){
    searchDoctors()
}

function searchDoctors(){
    ;
    const categories = {
        Acupuntura : Acupuntura,
        AlergiaEImunologia: AlergiaEImunologia,
        Anestesiologia: Anestesiologia,
        Angiologia: Angiologia,
        Audiometria: Audiometria,
        Cardiologia: Cardiologia,
        CirurgiaAparelhoDigestivo: CirurgiaAparelhoDigestivo,
        CirurgiaGeral: CirurgiaGeral,
    };

    selectionTag.addEventListener('change', () => {
        Object.keys(categories).forEach(category => {
            if(selectionTag.value.match(category)){
                renderSelectedCategory(categories[category]);
            };
        });
    });
    searchByName();
};

function renderSelectedCategory(medicos){
    console.log(medicos)
    document.querySelector('.table-head')
    .innerHTML = `
        <tr>
            <th>Médico</th>
            <th>Especialidade</th>
            <th>Endereço</th>
            <th>Bairro</th>
            <th>Telefone</th>
        </tr>
    `;

    document.querySelector('.rendered-section')
    .innerHTML = medicos.map(medico => {
        return `
        <tr>
            <td>${medico.nome.toUpperCase()}</td>
            <td>${medico.especialidade}</td>
            <td>${medico.endereço}</td>
            <td>${medico.bairro}</td>
            <td>${medico.telefone}</td>
        </tr>
        `;
    }).join('');
};

function searchByName(){
    const input = document.querySelector('#search-input');
    const medicos = [...Acupuntura, ...AlergiaEImunologia, ...Anestesiologia, ...Angiologia, ...Audiometria, ...Cardiologia, ...CirurgiaAparelhoDigestivo, ...CirurgiaGeral];

    input.addEventListener('keyup', (e) => {
        const lowerCaseInput = e.target.value;
        const filteredMedicos = medicos.filter(medico => {            
            const lowerCaseName = medico.nome.toLowerCase();
            return lowerCaseName.includes(lowerCaseInput);
        });
        renderSelectedCategory(filteredMedicos);
        if(lowerCaseInput === ''){
            document.querySelector('.table-head').innerHTML = '';
            document.querySelector('.rendered-section').innerHTML = '';
        };
    });
};






/*LOGIN IN SIDEBAR*/
const login = document.querySelector('.holerite');
if(login){
    getLoginForm();
};
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