export default class OdontoCompany{
    constructor() {
    }
    static getHtml(){
        return document.querySelector(".page").innerHTML = `
        <h1>ODONTO COMPANY</h1>
        <h2>Informações do Plano</h2>
        <img src="../imgs/pexels-cedric-fauntleroy-4269937.jpg" alt="consultório-odontológico">
        <p>O convênio é disponível a todos os funcionários públicos: ativos, aposentados, pensionistas e dependentes.</p>

        <p>Valores e serviços prestados:</p>

        <p>Valor do Contrato de Prestação de Serviços Odontológicos praticado pela clínica aos funcionários e dependentes é de <strong>R$ 19,90</strong> (dezenove e noventa) reais, pagamento mensal por pessoa.</p>

        <p>Tratamentos realizados pelo convênio:</p>
        <ul>
            <li>Profilaxia (limpeza);</li>
            <li>Raspagem Simples;</li>
            <li>Restauração em resina (obturações);</li>
            <li>Extrações (exceto 3º molar, siso);</li>
            <li>Tratamento endodôntico (canal), exceto pino e coroa;</li>
            <li>Raios-X: Panorâmico e Periapical.</li>
        </ul>

        <p>Para os demais tratamentos não coberto (não inclusos anteriormente), será concedido descontos de <strong>10% do valor da tabela praticada pela Odonto Company</strong> Monte Alegre de Minas, e a possibilidade de parcelamento descontado em folha.</p>

        <p>Também inclui a instalação e manutenção de aparelhos ortodônticos, sem custo para a tradicional "pasta de documentação": raios-X, panorâmica, etc., com valor mensal de <strong>R$ 49,90</strong> (quarenta e nova reais e noventa centavos).</p>

        <p>Para aderir ao convênio, deve-se comparecer à clínica Odonto Company, localizada na Av. 16 de Setembro, ao lado do Banco Bradesco, e também ao Instituto de Previdência Municipal de Monte Alegre de Minas.</p>

        <p>Telefone de Contato da Clínica:</p>
        <ul id="phone">
            <li>(34) 3283-2675</li>
        </ul>
        <p>Telefone de Contato do Instituto:</p>
        <ul id="phone">
            <li>(34) 3283-3102</li>
        </ul>
        `
    }
}