export default class Unimed{
    constructor() {
    }
    static getHtml(){
        return document.querySelector(".page").innerHTML = `
        <h1>UNIMED</h1>
        <button type="button" class="folder">Telefones Unimed</button>
            <div class="folder_content">
                <div class="margin-fix">
                    <p>SAC/Informações: 0800 940 6800</p>
                </div>
            </div>

        <button type="button" class="folder">Reajuste da Mensalidade Unimed - 2022</button>
            <div class="folder_content">
                <p>Novos valores do plano de saúde Unimed/Uberlândia, a partir de Julho de 2022.</p>

                <p>Aumento nas mensalidades de <strong>7%</strong> para todas as faixas salariais.</p>

                <p>Exames e consultas permanecerão os mesmos valores.</p>

                <ul>
                    <li>Exames de até R$ 30,00 reais terão <strong>co-participação de R$ 5,00 reais;</strong></li>
                    <li>Exames de R$ 31,00 à R$ 60,00, <strong>coparticipação de R$ 15,00;</strong></li>
                    <li>Exames acima de R$ 61,00, <strong>coparticipação de R$ 25,00.</strong></li>
                    <li>Consultas: <strong>R$ 32,50.</strong></li>
                </ul>

                <p>Aos funcionários efetivos que possuem 02 (dois) cargos, o desconto será no cargo de maior valor, e quando o titular e o dependente são detentores de cargos, o desconto será no cargo de maior  valor (RESOLUÇÃO 001/2014).</p>

                <p>Benefícios dos segurados já inclusos no valor da mensalidade:</p>
                <ol>
                    <li>Seguro de vida;</li>
                    <li>Auxílio-funeral;</li>
                    <li>Benefício família para os dependentes, no caso de falecimento do segurado titular no prazo de 05 anos após o óbito, sem cobrança de mensalidade.</li>
                </ol>
            </div>

        <h2>Listagem de todos os Funcionários Públicos de Monte Alegre que têm Convênio Unimed:</h2>
        <button type="button" class="folder">Apartamento</button>
        <div class="folder_content">
            <p>Em desenvolvimento.</p>
        </div>
        <button type="button" class="folder">Enfermaria</button>
        <div class="folder_content">
            <p>Em desenvolvimento.</p>
        </div>

       
        <div class="flex-center">
            <a href="https://www.unimeduberlandia.coop.br/" rel="external" target="_blank"><img src="../imgs/unimed.svg" alt="unimed" id="unimed-logo"></a>
            <p class="font-fix"><a href="https://www.unimeduberlandia.coop.br/" target="_blank" rel="external">www.unimeduberlandia.coop.br</a></p>
        </div>    
        `
    }
}