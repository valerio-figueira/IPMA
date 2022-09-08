export default class Postagens{
    constructor(){

    }
    static getPostagens(){
        return [
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
    };
    
    static displayPostagens() {
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
}