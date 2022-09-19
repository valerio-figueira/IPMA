export default class Footer{
    constructor(){

    }
    static getHtml(){
        return `
        <div>
            <p class="copyright"></p>
            <p>Desenvolvido por <a href="" target="_blank" rel="external" class="creator_link"> Valerio Figueira</a></p>
        </div>
        <a class="scrolltop fa fa-caret-up" href="#header"></a>
        `;
    }
}