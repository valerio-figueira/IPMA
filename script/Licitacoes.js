export default class Licitacoes{
    constructor(){

    }
    static getLicitacoes(){
        return [
            {
                processo: "Nº 001/2021",
                modalidade: "Nº 001/2021",
                objeto: "Contratação de empresa especializada em tecnologia da informação, para cessão de direito de uso (locação) de software com sistemas de gestão pública para o IPMA.",
                status: "Concluído",
                url: "licitacoes/pregao-presencial-nº001-2021.pdf"
            },
            {
                processo: "Nº 002/2018",
                modalidade: "Nº 002/2018",
                objeto: "Aquisição de veículo 0km, destinado à atender as atividades do Instituto de Previdência Municipal de Monte Alegre de Minas - Conclusão.",
                status: "Concluído",
                url: "licitacoes/conclusao_pregao_002_2018.pdf"
            },
            {
                processo: "Nº 002/2018",
                modalidade: "Nº 002/2018",
                objeto: "Aquisição de veículo 0km, destinado à atender as atividades do Instituto de Previdência Municipal de Monte Alegre de Minas - Edital.",
                status: "Concluído",
                url: "licitacoes/09-Edital-PR-002-2018-corrigido.pdf"
            },
            {
                processo: "Nº 001/2018",
                modalidade: "Nº 001/2018",
                objeto: "Aquisição de veículo 0km, destinado à atender as atividades do Instituto de Previdência Municipal de Monte Alegre de Minas - Conclusão.",
                status: "Concluído",
                url: "licitacoes/PUBLICACAO-FINAL-PREGAO-01-18-10-05-18-1.pdf"
            },
            {
                processo: "Nº 001/2018",
                modalidade: "Nº 001/2018",
                objeto: "Aquisição de veículo 0km, destinado à atender as atividades do Instituto de Previdência Municipal de Monte Alegre de Minas - Edital.",
                status: "Concluído",
                url: "licitacoes/09-Edital-PR-001-2018.pdf"
            },
            {
                processo: "N° 001/2017",
                modalidade: "N° 001/2017",
                objeto: "Contratação de empresa especializada em tecnologia da informação, para cessão de direito de uso (locação) de software com sistemas de gestão pública para o IPMA.",
                status: "Concluído",
                url: "licitacoes/pregao-presencial-nº001-2017.pdf"
            }
        ];
    };

    static getHtml(){
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
        table.innerHTML += html;
    }
};