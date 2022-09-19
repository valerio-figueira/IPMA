export default class Header{
    constructor(){

    }
    static getHtml(){
        return `
        <a href="index.html" target="_self">
            <img src="imgs/brasão.png" alt="brasão" class="brasão">
        </a>
        <a href="index.html" target="_self">
            <h1>IPMA</h1>
        </a>
        <a href="index.html" target="_self">
            <p>Instituto de Previdência Municipal de Monte Alegre de Minas</p>
        </a>
        `;
    }
}