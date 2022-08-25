export default class Contato{
    constructor(phones, emails, addresses) {
        phones = [
            {
                phone: "(34) 3283-3102"
            },
            {
                phone: "(34) 99658-2717"
            }
        ];
        emails = [
            {
                email: "ipmamonte@hotmail.com",
            },
            {
                email: "jesiosilva@hotmail.com"
            }
        ];
        addresses = [
            {
                address: "Rua Amélia Rezende de Oliveira, N°. 40 - CNPJ 03.650.395/0001-66",
                city: "Monte Alegre de Minas - Estado de Minas Gerais"
            }
        ];
        return phones;
    }    
}