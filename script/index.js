import { Acupuntura } from './guiamedico/Acupuntura.js';
import { AlergiaEImunologia } from './guiamedico/AlergiaEImunologia.js';
import { Anestesiologia } from './guiamedico/Anestesiologia.js';
import { Angiologia } from './guiamedico/Angiologia.js';
import { Audiometria } from './guiamedico/Audiometria.js';
import { Cardiologia } from './guiamedico/Cardiologia.js';
import { CirurgiaAparelhoDigestivo } from './guiamedico/CirurgiaAparelhoDigestivo.js';
import { CirurgiaGeral } from './guiamedico/CirurgiaGeral.js';
import { CirurgiaCardioVascular } from './guiamedico/CirurgiaCardioVascular.js';
import { CirurgiaCranioMaxiloFacial } from './guiamedico/CirurgiaCranioMaxiloFacial.js';
import { CirurgiaDaMao } from './guiamedico/CirurgiaDaMao.js';
import { CirurgiaDeCabecaEPescoco } from './guiamedico/CirurgiaDeCabecaEPescoco.js';
import { CirurgiaOncologica } from './guiamedico/CirurgiaOncologica.js';
import { CirurgiaPediatrica } from './guiamedico/CirurgiaPediatrica.js';
import { CirurgiaPlastica } from './guiamedico/CirurgiaPlastica.js';
import { CirurgiaVascular } from './guiamedico/CirurgiaVascular.js';
import { CirurgiaVideoLaparoscopica } from './guiamedico/CirurgiaVideoLaparoscopica.js';


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
    let slider = {
        hero: document.querySelectorAll(".slide"),
        dots: document.querySelectorAll(".dot"),
        prev: document.querySelector(".prev"),
        next: document.querySelector(".next"),
        hover: document.querySelector(".slideshow-container"),
        interval: 10000,
        autorun: true,
        timer: undefined,
        idle: false,
        index: 0
    };
    
    displaySlider(slider);
    addEvents(slider);
};



function addEvents(slider){
    slider.prev.addEventListener('click', () => {
        slider.autorun = false;
        changeSlide('prev', slider);        
    });

    slider.next.addEventListener('click', () => {
        slider.autorun = false;
        changeSlide('next', slider);        
    });

    slider.dots.forEach((dot, i) => {
        dot.addEventListener('click', () => {
            slider.autorun = false;
            slider.index = i;
            displaySlider(slider);
        });
    });

    slider.hover.addEventListener('mouseenter', () => {
        slider.autorun = false;
        slider.idle = true;
        displaySlider(slider);
    });

    slider.hover.addEventListener('mouseleave', () => {
        slider.autorun = false;
        slider.idle = false;
        displaySlider(slider);
    });
}

function changeSlide(direction, slider){
    if(direction.match('prev')){
        slider.index--;
        displaySlider(slider)
    } else if(direction.match('next')){
        slider.index++;
        displaySlider(slider)
    }
}

function displaySlider(slider){
    if(slider.autorun){
        slider.timer = setTimeout(() => changeSlide('next', slider), slider.interval);
    } else{
        clearTimeout(slider.timer)
        if(!slider.idle){
            slider.timer = setTimeout(() => changeSlide('next', slider), slider.interval);
            slider.autorun = true;
        }
    }

    if(slider.index < 0){
        slider.index = slider.hero.length - 1;
    } else if(slider.index > slider.hero.length - 1){
        slider.index = 0;
    }

    for(let slide of slider.hero){
        slide.style.display = 'none'
    }

    for(let dot of slider.dots){
        if(dot.matches('.active')){
            dot.classList.remove('active');
        }
    }

    slider.hero[slider.index].style.display = 'block';
    slider.dots[slider.index].classList.add('active');
}


/*
MOBILE NAV
*/
document.querySelector("#mobile")
.addEventListener("click", () => {
    openAndCloseNav();
});
document.querySelector("nav.navbar .close-nav")
.addEventListener("click", () => {
    openAndCloseNav();
})

function openAndCloseNav() {
    const navbar = document.querySelector(".navbar");
    const mobileIcon = document.querySelector("#mobile");
        if (!navbar.matches(".responsive")) {
            navbar.classList.add("responsive");
            mobileIcon.classList.add("active");
        } else {
            navbar.classList.remove("responsive");
            mobileIcon.classList.remove("active");
        };
};





// Desdobrar itens da div oculta
const folders = document.querySelectorAll(".folder");
for (const folder of folders) {
    folder.addEventListener("click", function() {
    this.classList.toggle("active");

    const content = this.nextElementSibling;
    if (content.className === "folder_content") {
        content.classList.add("open");
        content.style.maxHeight = "3000px";
        content.style.paddingBottom = "20px";
        content.style.transition = "0.5s";
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
    const categories = {
        Acupuntura,
        AlergiaEImunologia,
        Anestesiologia,
        Angiologia,
        Audiometria,
        Cardiologia,
        CirurgiaAparelhoDigestivo,
        CirurgiaGeral,
        CirurgiaCardioVascular,
        CirurgiaCranioMaxiloFacial,
        CirurgiaDaMao,
        CirurgiaDeCabecaEPescoco,
        CirurgiaOncologica,
        CirurgiaPediatrica,
        CirurgiaPlastica,
        CirurgiaVascular,
        CirurgiaVideoLaparoscopica
    };

    selectionTag.addEventListener('change', () => {
        if(!(selectionTag.value === "")){
            Object.keys(categories).forEach(category => {
                if(selectionTag.value.match(category)){
                    renderSelectedCategory(categories[category]);
                };
            });
        } else{
            document.querySelector('.table-head').innerHTML = '';
            document.querySelector('.rendered-section').innerHTML = '';
        }        
    });
    searchByName();
};

function renderSelectedCategory(medicos){
    if(medicos.length === 0){
        document.querySelector('.medicos table')
        .innerHTML = `<h3>Não encontrado...</h3>`;
    } else{
        document.querySelector('.medicos table')
        .innerHTML = `
        <thead class="table-head"></thead>
        <tbody class="rendered-section"></tbody>
        `;

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
                <td>${medico.nome.toLowerCase()}</td>
                <td>${medico.especialidade.toLowerCase()}</td>
                <td>${medico.endereço.toLowerCase()}</td>
                <td>${medico.bairro.toLowerCase()}</td>
                <td>${medico.telefone.toLowerCase()}</td>
            </tr>
            `;
        }).join('');
    };
};

function searchByName(){
    const input = document.querySelector('#search-input');
    const medicos = [...Acupuntura, ...AlergiaEImunologia, ...Anestesiologia, ...Angiologia, ...Audiometria, ...Cardiologia, ...CirurgiaAparelhoDigestivo, ...CirurgiaGeral, ...CirurgiaCardioVascular, ...CirurgiaCranioMaxiloFacial, ...CirurgiaDaMao, ...CirurgiaDeCabecaEPescoco, ...CirurgiaOncologica, ...CirurgiaPediatrica, ...CirurgiaPlastica, ...CirurgiaVascular, ...CirurgiaVideoLaparoscopica];

    input.addEventListener('keyup', (e) => {
        const lowerCaseInput = e.target.value.toLowerCase();
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