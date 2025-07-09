let savingsBanksId = 1;
//Es un número único de 22 dígitos que identifica la cuenta
let cbuCounter = 1000000000000000000000;

class SavingsBanks{
    /**
     * 
     * @param {string} currency 
     * @param {string} alias 
     * @param {int} limit 
     */
    //Ponemos el límite como último parámetro para no tener que ingresarlo si está en USD.
    //Pero si le pasamos 0 no hay problema.
    constructor(currency, alias, limit){
        this.id = savingsBanksId;
        this.cbu = cbuCounter;
        cbuCounter++;
        savingsBanksId++;
        this.currency = currency;
        this.balance = 0;
        if(currency == "ARS") {
            this.limit = limit;
            this.overdraft = 0;
        }
        this.debitCards = [];
        this.movements = [];
        this.alias = alias;
    }
}
clients[0].savingsBanks.push(new SavingsBanks("ARS","pepito",1000000))
clients[0].savingsBanks.push(new SavingsBanks("USD","pepito",1000000))
clients[1].savingsBanks.push(new SavingsBanks("ARS","john",10000))
clients[1].savingsBanks.push(new SavingsBanks("USD","john",100000))
clients[2].savingsBanks.push(new SavingsBanks("ARS","primo.de.pepito",10000000))
clients[2].savingsBanks.push(new SavingsBanks("INR","primo.de.pepito",100000000))
clients[3].savingsBanks.push(new SavingsBanks("ARS","Jorge",100000))