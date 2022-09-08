export default class Pensao{
    constructor(){

    }
    static getHtml(){
        return document.querySelector(".page").innerHTML = `
        <h1>PENSÃO</h1>
        <h2>Benefícios</h2>
        <button type="button" class="folder">Pensão por morte do servidor</button>
            <div class="folder_content">
                <p>Documentação necessária do servidor, comum a todos os processos.</p>
                <ul>
                    <li>Cédula de identidade (RG e CPF) do servidor falecido;</li>
                    <li>Atestado de óbito do servidor falecido;</li>
                    <li>Último contracheque do servidor falecido;</li>
                    <li>Fotocópia da cédula de identidade dos filhos maiores de 18 anos;</li>
                    <li>Fotocópia da cédula de identidade e CPF dos filhos menores de 18 anos.</li>
                </ul>
            </div>
        <h2>Documentação dos beneficiários, conforme o caso:</h2>
        <button type="button" class="folder">Cônjuge</button>
            <div class="folder_content">
                <ol>
                    <li>Cédula de identidade (RG e CPF);</li>
                    <li>Certidão de casamento (atualizada dos últimos 6 meses);</li>
                    <li>Comprovante de endereço atualizado (conta de água, luz ou telefone).</li>
                </ol>
            </div>
        <button type="button" class="folder">Cônjuge divorciado ou separado judicialmente credor de pensão alimentícia</button>
            <div class="folder_content">
               <ol>
                <li>Cédula de identidade (RG e CPF);</li>
                <li>Certidão de casamento (atualizada dos últimos 6 meses);</li>
                <li>Comprovante de endereço atualizado (contas de telefone, luz ou água);</li>
                <li>RG dos filhos menores do servidor;</li>
                <li>Termo de separação judicial ou divórcio.</li>
               </ol>
            </div>
        <button type="button" class="folder">Companheiro (a)</button>
            <div class="folder_content">
                <ol>
                    <li>Cédula de identidade (RG e CPF);</li>
                    <li>Certidão de casamento ou de nascimento do (a) convivente (atualizada, dos últimos 6 meses);</li>
                    <li>Certidão de casamento ou de nascimento do (a) servidor (a) falecido (a) (atualizada dos últimos meses);</li>
                    <li>Comprovante de endereço atualizado (conta de água, luz ou telefone).</li>
                </ol>
            </div>
        <button type="button" class="folder">Filho menor</button>
            <div class="folder_content">
                <ol>
                    <li>Cédula de identidade (RG e CPF);</li>
                    <li>Cédula de identidade (RG e CPF) do responsável (pai, mãe ou tutor);</li>
                    <li>Comprovante de residência atualizado em nome do responsável: pai, mãe ou tutor (conta de luz, água ou telefone).</li>
                </ol>
                <p>Em caso de menor sob guarda ou tutela, exige-se o Termo de Guarda ou Tutela.</p>
            </div>
        <button type="button" class="folder">Filho inválido / incapaz</button>
            <div class="folder_content">
                <ol>
                    <li>Cédula de identidade (RG e CPF);</li>
                    <li>Cédula de identidade (RG e CPF) do curador ou responsável (pai ou mãe);</li>
                    <li>Comprovante de residência atualizado em nome do responsável (pai, mãe ou curador): conta de luz, água ou telefone.</li>
                </ol>
                <p>Em caso de existência de curador, exige-se o Termo de Curatela.</p>
            </div>
        <button type="button" class="folder">Como proceder</button>
            <div class="folder_content">
                <p>Dirigir-se ao IPMA - Instituto de Previdência dos Servidores do Município de Monte Alegre de Minas.</p>
                <p>Em caso de existência de procurador, exige-se o RG e CPF do procurador, além da Procuração Pública (emitida pelo cartório).</p>
            </div>
        `;
    };
};