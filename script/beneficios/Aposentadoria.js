export default class Aposentadoria{
    constructor(){

    }
    static getHtml(){
        return document.querySelector(".page").innerHTML = `
        <h1>Aposentadoria</h1>
        <button type="button" class="folder">Aposentadoria por Invalidez Permanente</button>
            <div class="folder_content">
                <p>Esta aposentadoria é devida a todos os servidores públicos que forem considerados incapazes definitivamente para o cargo público. A incapacidade é verificada por uma junta médica especializada da Prefeitura Municipal de Monte Alegre de Minas. Esta regra tem como fundamento legal o art. 40, § 1°, I, da Constituição Federal com redação dada pela EC n° 41/03.</p>
                <p>Integral:</p>
                <p>Art. 13.  O segurado, quando acometido de tuberculose ativa, alienação mental, neoplasia maligna, cegueira, hanseníase, paralisia irreversível e incapacitante, cardiopatia grave, doença de Parkinson, espondiloartose anquilosante, nefropatia grave, estado avançado de doença de Paget ( osteíte deformante), síndrome da deficiência imunológica adquirida- AIDS, contaminação por radiação ( com base em conclusão da medicina especializada) ou quando vítima de acidente do trabalho ou moléstia profissional que o invalide para o serviço, terá direito à aposentadoria integral.</p>
                <p>Parcial:</p>
                <p>Art.14. Para fins do disposto no § 21 do art. 40 da Constituição Federal e no §    2 º do art. 48 desta Lei Complementar, considera-se doença incapacitante: sarcoidose; doença de Hansen; tumores malignos; hemopatias graves; doenças graves e invalidantes do sistema nervoso central e periférico e dos órgãos dos sentidos; cardiopatias reumatismais crônicas graves; hipertensão arterial maligna; cardiopatias isquêmicas graves; cardiomiopatias graves; aciedentes vasculares cerebrais com acentuadas limitações; vasculopatias periféricas graves; doença pulmonar crônica obstrutiva grave; hepatopatias graves; nefropatias crônicas graves, doenças difusas do tecido conectivo; espondilite anquilosante e artroses graves invalidantes.</p>
            </div>
        <button type="button" class="folder">Aposentadoria Compulsória (75 anos)</button>
        <div class="folder_content">
            <p>Esta aposentadoria é devida a todos os servidores públicos atingiram o limite máximo de idade, 75 anos, previsto na Constituição Federal de 1988. Nessa hipótese não há requisito algum, basta que o servidor complete 75 anos de idade. O benefício será concedido a partir do mês que o servidor completou 75 anos de idade, com proventos proporcionais ao tempo de contribuição. Ainda, nesta regra não há distinção entre homem, mulher e professor.</p>
            <p>Esta regra tem como fundamento legal o art. 40, § 1°, I, da Constituição Federal com redação dada pela EC n° 41/03.</p>
        </div>
        <button type="button" class="folder">Aposentadoria Voluntária por Idade</button>
            <div class="folder_content">
                <p>Requisitos necessários para se aposentar:</p>
                <ol>
                    <li>Homem</li>
                    <ul type="square">
                        <li>65 anos de idade;</li>
                        <li>10 anos de serviço público;</li>
                        <li>05 anos de efetivo exercício no c argo em que se dará a aposentadoria.</li>
                    </ul>
                    <li>Mulher</li>
                    <ul type="square">
                        <li>60 anos de idade;</li>
                        <li>10 anos de serviço público;</li>
                        <li>05 anos de efetivo exercício no cargo em que se dará a aposentadoria.</li>
                    </ul>
                </ol>
                <p>Esta regra tem como fundamento legal o art. 40, § 1°, III, alínea “b” da Constituição Federal.</p>
            </div>
        <button type="button" class="folder">Aposentadoria Especial - Professor</button>
            <div class="folder_content">
                <p>Os professores do ensino infantil, fundamental e médio que exerçam atividades de magistério em instituição de ensino, tem direito a aposentadoria especial, desde que cumpra os seguintes requisitos:</p>
                <ol>
                    <li>Homem</li>
                    <ul type="square">
                        <li>55 anos de idade;</li>
                        <li>30 anos de contribuição;</li>
                        <li>10 anos de serviço público;</li>
                        <li>05 anos de efetivo exercício no cargo em que se dará a aposentadoria.</li>
                    </ul>
                    <li>Mulher</li>
                    <ul type="square">
                        <li>50 anos de idade;</li>
                        <li>25 anos de contribuição;</li>
                        <li>10 anos de serviço público;</li>
                        <li>05 anos de efetivo exercício no cargo em que se dará a aposentadoria.</li>
                    </ul>
                </ol>
            </div>
        <button type="button" class="folder">Aposentadoria Voluntária por Tempo de Contribuição</button>
            <div class="folder_content">
                <p>Requisitos necessários para se aposentar:</p>
                <ol>
                    <li>Homem</li>
                    <ul type="square">
                        <li>60 anos de idade;</li>
                        <li>35 anos de contribuição;</li>
                        <li>10 anos de serviço público;</li>
                        <li>05 anos de efetivo exercício no cargo em que se dará a aposentadoria.</li>
                    </ul>
                    <li>Mulher</li>
                    <ul type="square">
                        <li>55 anos de idade;</li>
                        <li>30 anos de contribuição;</li>
                        <li>10 anos de serviço público;</li>
                        <li>05 anos de efetivo exercício no cargo em que se dará a aposentadoria.</li>
                    </ul>
                </ol>
                <p>Esta regra tem como fundamento legal o art. 40, § 1°, III, alínea “a” da Constituição Federal.</p>
            </div>
        `;
    };
};