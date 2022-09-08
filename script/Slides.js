export default class Slides{
    constructor(){

    }
    static getSlides(){
        const slideshow = document.querySelector(".slideshow-container");

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
    
        /*
        CAROUSEL CODE
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
    };
}