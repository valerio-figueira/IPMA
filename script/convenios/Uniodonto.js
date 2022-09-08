export default class Uniodonto{
    constructor() {
    }
    static getHtml(){
        return document.querySelector(".page").innerHTML = `
        <h1>UNIODONTO</h1>
        <img src="../imgs/pexels-anna-shvets-3845653.jpg" alt="consultório-odontológico">
        <p>A Uniodonto Uberlândia é uma Cooperativa de prestação de serviços odontológicos parte integrante do Sistema Uniodonto Brasil, com mais de 130 singulares, cerca de 22 mil cirurgiões-dentistas cooperados e mais de 3 milhões beneficiários em todo o território nacional.</p>
        <p>Hoje, a Uniodonto Regional conta com mais de 450 cirurgiões dentistas Cooperados e mais de 95 mil beneficiários, ou seja, deu certo. E este mérito foi conseguido através de muito trabalho de todos os que fazem parte da Cooperativa e que lutam por este ideal.</p>
        <p>Sua grande característica é garantir ao beneficiário da Cooperativa esteja ele em qualquer cidade do país que possua um Cooperado, um atendimento de qualidade.</p>
        <p>Guiada pelos valores da Cooperação, Segurança, Ética, Excelência, Credibilidade e Responsabilidade, a Uniodonto Regional busca oferecer serviços de qualidade e com preços acessíveis, a fim de propiciar a saúde bucal e o bem-estar para um número cada vez maior de pessoas. Essas são as premissas da Uniodonto que norteiam a nossa missão e visão.</p>
        <p>A Uniodonto Uberlândia recebeu pelo 12º ano consecutivo, o prêmio TOP OF MIND, realizado pelo Jornal Correio e o 1º lugar em Cooperativas Odontológicas de Minas Gerais (Publicação no anuário do Cooperativismo Mineiro - Ano 2006 e 2007).</p>
        <p>Missão: <q>Ser referência na assistência Odontológica, visando a satisfação de nossos beneficiários, cooperados, colaboradores e parceiros.</q></p>

        <button type="button" class="folder">Aos conveniados do plano</button>
            <div class="folder_content">
                <p>Tenha mais informações acessando o aplicativo:</p>

                <p>Passo a passo para o seu primeiro acesso ao app:</p>

                <ol type="1">
                    <li>Acesse a Play Store e pesquise por "Uniodonto Uberlândia";</li>
                    <li>Faça o download gratuito do APP Carteirinha;</li>
                    <li>Em seu primeiro acesso ao app:</li>
                    <ul type="square">
                        <li>Digite o CPF do titular;</li>
                        <li>Digite a data de nascimento do titular;</li>
                        <li>Digite o nome da mãe do titular;</li>
                        <li>Crie uma senha com letras, números e caracteres especiais (ex. @nome123);</li>
                        <li>Confirme a senha;</li>
                        <li>Clique em "Cadastrar".</li>
                    </ul>
                </ol>
            </div>
        
        <button type="button" class="folder">Informações do Plano</button>
            <div class="folder_content">
                <p>Os servidores públicos municipais efetivos, aposentados ou pensionistas que quiserem podem aderir ao plano odontológico que tem uma taxa mensal de R$ 21,00 ao mês para cada dependente incluído no plano.</p>
                <p>Para se cadastrar no plano, basta que se compareça à sede do IPMA com os documentos pessoais.</p>
            </div>

        <button type="button" class="folder">Telefones:</button>
        <div class="folder_content">
            <p>Central de Vendas: (34) 3228-8118 | (34) 3235-8385</p>
            <p>Clínica 24H (URGÊNCIA): (34) 3228-7660</p>
        </div>
        `
    }
}