export default class Diretoria{
    constructor(){

    }
    static getDiretoria(){
        return ["Jesio Silva Machado","Cláudio José de Paula","Dr. Paulo Henrique S. Oliveira","Lorena Pereira Mamede","Nayara Ferreira Gonçalves Mamede","Mônica Aparecida Sandim","Silvana Diniz Parreira Alvim","Angélica Reis Mamede","Carlos Antônio Cabral","Denilton Cesar Nogueira","Rosana Aparecida Fontes","Vanusa Domingues Parreira Menezes","Joana Darc Aparecida de Oliveira","Luciene Aparecida Moura","Evelyn de Freitas Moura","Jairo Mamede Bittencourt","Rachel Domingues Parreira","Silvana Diniz Parreira Alvim","Vanusa Domingues Parreira Menezes","Luciene Aparecida Moura Vieira","Monalissa da Silva Sandim","Carlos Antônio da Silva Cabral","Denilton Cesar Nogueira"];
    };


    static getDiretoriaHtml(){
        const page = document.querySelector(".page");

        function getName(stringName){
            return Diretoria.getDiretoria().find(index => index.match(stringName));
        }
        
        page.innerHTML = `
        <h1>DIRETORIA</h1>
        <ul>
            <li>Coordenador Diretor: ${getName("Jesio")}</li>
            <li>Contador: ${getName("Cláudio")}</li>
            <li>Jurídico: ${getName("Paulo Henrique")}</li>
        </ul>
        <h2>Atendimento</h2>
        <ul>
            <li>${getName("Lorena")}</li>
            <li>${getName("Nayara")}</li>
        </ul>
        <h2>Conselho de Assistência à Saúde</h2>
        <ul>
            <li>${getName("Jesio")} - Presidente</li>
            <li>${getName("Paulo Henrique")} - Vice Presidente</li>
            <li>${getName("Mônica")} - Secretária</li>
            <li>${getName("Silvana")} - Tesoureira</li>
        </ul>
        <h2>Membros</h2>
        <ul>
            <li>${getName("Angélica")}</li>
            <li>${getName("Carlos Antônio")}</li>
            <li>${getName("Denilton")}</li>
            <li>${getName("Rosana")}</li>
            <li>${getName("Vanusa")}</li>
        </ul>
        <h2>Suplentes</h2>
        <ul>
            <li>${getName("Joana Darc")}</li>
            <li>${getName("Luciene")}</li>
        </ul>
        <h2>Conselho Deliberativo</h2>
        <ul>
            <li>${getName("Evelyn")}</li>
            <li>${getName("Jairo")}</li>
            <li>${getName("Rachel")}</li>
            <li>${getName("Silvana")}</li>
            <li>${getName("Vanusa")}</li>
        </ul>
        <h2>Conselho Fiscal</h2>
        <ul>
            <li>${getName("Luciene")}</li>
            <li>${getName("Monalissa")}</li>
            <li>${getName("Paulo Henrique")}</li>
        </ul>
        <h2>Suplentes</h2>
        <ul>
            <li>${getName("Carlos Antônio")}</li>
            <li>${getName("Denilton")}</li>
            <li>${getName("Mônica")}</li>
        </ul>
        `;
    };
};