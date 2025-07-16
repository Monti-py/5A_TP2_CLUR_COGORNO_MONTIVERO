let clientsId = 1;
class Clients {

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
    compraVentaDeDolares(cantidad_moneda_origen, id_caja_emisor, id_caja_receptor) {
        const receptor = clients[findClientBySavingsBankId(id_caja_receptor)];
        const caja_emisor = this.savingsBanks[findSavingsBanksIndexBySavingsBanksId(id_caja_emisor)];
        const caja_receptor = receptor.savingsBanks[findSavingsBanksIndexBySavingsBanksId(id_caja_receptor)];
        if (caja_emisor.currency === caja_receptor.currency) {
            return 0
        } else if (caja_emisor.extraerDinero(cantidad_moneda_origen)) {
            if (caja_emisor.currency === "ARS") {
                let conversion = cantidad_moneda_origen / VALOR_DOLAR_OCIFIAL
                caja_receptor.depositarDinero(conversion)
            } else {
                let conversion = VALOR_DOLAR_OCIFIAL * cantidad_moneda_origen
                caja_receptor.depositarDinero(conversion)
            }
        } else {
            return 0
        }

        //extraerDinero(cantidad_moneda_origen)
        //habria que linkear de alguna manera (asumo que con los id) para saber de quien es esta caja de ahorros y en que currency esta
        //let monedaDestino = cantidadMonedaOrigen * la const global del valor del dolar
        //o si es dolares la moneda origen hacemods let mondeDestino = cantidadMonedaOrigen / la const global del valor del dolar
        //y despues hacemos depositarDinero(monedaDestino)
        //
    }
}

const clients = [] //crear 4
clients.push(new Clients(45415066, "pepe", "papadopulus", "hernan"))
clients.push(new Clients(45824885, "tronco", "juan", "firme"))
clients.push(new Clients(12522546, "flash", "felipe", "bochornoso"))
clients.push(new Clients(30303456, "balatro", "putito", "clorudo"))