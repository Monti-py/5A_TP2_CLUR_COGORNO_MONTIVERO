let savingsBanksId = 1;
//Es un número único de 22 dígitos que identifica la cuenta
let cbuCounter = 1000000000000000000000;

class SavingsBanks {
    /**
     * 
     * @param {string} currency 
     * @param {string} alias 
     * @param {int} limit 
     */
    //Ponemos el límite como último parámetro para no tener que ingresarlo si está en USD.
    //Pero si le pasamos 0 no hay problema.
    constructor(currency, alias, limit) {
        this.id = savingsBanksId;
        this.cbu = cbuCounter;
        cbuCounter++;
        savingsBanksId++;
        this.currency = currency;
        this.balance = 0;
        if (currency == "ARS") {
            this.limit = limit;
            this.overdraft = 0;
        }
        this.debitCards = [];
        this.movements = [];
        this.alias = alias;
    }
    /**
     * la funcion recibe el monto que un cliente quiere retirar de su caja de ahorro y devuelve un boleano dependiendo si puede o no puede
     * @param {int} monto_a_retirar 
     * @returns {boolean} si se puede hacer la transaccion
     */
    extraerDinero(monto_a_retirar) {
        if (this.currency !== "ARS") {
            if (monto_a_retirar > this.balance) {
                return 0
            } else {
                this.balance -= monto_a_retirar
                return 1
            }
        } else {
            if (monto_a_retirar < this.balance) {
                this.balance -= monto_a_retirar
                return 1
            } else if (this.balance + this.limit - this.overdraft > monto_a_retirar) {
                this.overdraft += monto_a_retirar - this.balance
                this.balance = 0
                return 1
            } else {
                return 0
            }
        }
    }
    /**
     * pepe
     * @param {*} dinero_a_agregar 
     * @returns 
     */
    depositarDinero(dinero_a_agregar) {
        if (this.currency !== "ARS") {
            this.balance += dinero_a_agregar
            return this.balance
        } else {
            if (this.overdraft > 0) {
                this.overdraft -= dinero_a_agregar
                if (this.overdraft < 0) {
                    this.balance -= this.overdraft
                    return this.balance
                } else
                    return -1
            } else {
                this.balance += dinero_a_agregar
                return this.balance
            }
        }
    }
    registerMovement(monto, tercero, fecha) {
        try {
            this.movements.push(new Movements(tercero, monto));
            return 1
        } catch (error) {
            return 0
        }
    }
    
}
clients[0].savingsBanks.push(new SavingsBanks("ARS", "pepito", 100000))
clients[0].savingsBanks.push(new SavingsBanks("USD", "pepito"))
clients[1].savingsBanks.push(new SavingsBanks("ARS", "john", 1000))
clients[1].savingsBanks.push(new SavingsBanks("USD", "john"))
clients[2].savingsBanks.push(new SavingsBanks("ARS", "primo.de.pepito", 20000))
clients[2].savingsBanks.push(new SavingsBanks("ARS", "primo.de.pepito", 10000000))
clients[3].savingsBanks.push(new SavingsBanks("ARS", "Jorge", 500))