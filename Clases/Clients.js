let clientsId = 1;

class Clients{
    /**
     * 
     * @param {int} dni
     * @param {string} password 
     * @param {string} name 
     * @param {string} lastName 
     */
    constructor(dni, password, name, lastName) {
        this.id = clientsId;
        clientsId++;
        this.dni = dni;
        this.password = password;
        this.name = name;
        this.lastName = lastName;
        this.savingsBanks = [];
        // un cliente siempre debe tener una caja de ahoro
        this.creditCards = [];
    }
}

const clients = [] //crear 4ç
clients.push(new Clients(45415066, "pepe","papadopulus","hernan"))
clients.push(new Clients(45824885, "tronco", "juan", "firme"))
clients.push(new Clients(12522546, "flash","felipe","bochornoso" ))
clients.push(new Clients(30303456, "balatro","putito","clorudo"))