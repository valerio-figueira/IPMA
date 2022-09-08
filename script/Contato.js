export default class Contato{
    constructor() {
    }

    static getHtml(){

        const phones = [
            {phone: "(34) 3283-3102"},
            {phone: "(34) 99658-2717"},
        ]
        const emails = [
            {email: "ipmamonte@hotmail.com"},
            {email: "jesiosilva@hotmail.com"}
        ]
        const addresses = [
            {
                address: "Rua Amélia Rezende de Oliveira, N°. 40 - CNPJ 03.650.395/0001-66",
                city: "Monte Alegre de Minas - Estado de Minas Gerais"
            }
        ];

        const page = document.querySelector(".page");

        const phoneTag = document.querySelector("#phone");
        const emailTag = document.querySelector("#email");
        const addressTag = document.querySelector("#address");
    
        phoneTag.innerHTML += phones.map(phone => {
            return `
                <li>${phone.phone}</li>
            `;
        }).join("");
        emailTag.innerHTML += emails.map(email => {
            return `
                <li>${email.email}</li>
            `;
        }).join("");
        addressTag.innerHTML += addresses.map(address => {
            return `
            <li>${address.address}</li>
            <li>${address.city}</li>
            `;
        }).join("");
    
        page.innerHTML += `
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d943.8491212610531!2d-48.87909927084252!3d-18.869483999200426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94a3f1dfb6d47bc3%3A0xa96ef4695d2b2ec6!2sR.+Am%C3%A9lia+R+Oliveira%2C+40%2C+Monte+Alegre+de+Minas+-+MG%2C+38420-000!5e0!3m2!1spt-BR!2sbr!4v1476916163798" width="100%" height="250" frameborder="0" style="border:0" allowfullscreen class="map-location"></iframe>
        `;
    };
};