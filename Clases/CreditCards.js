let creditCardIds = 1;

class CreditCard extends Cards{
    /**
     * @param {string} provider  
     * @param {Int16Array} securityCode 
     * @param {string} displayedName 
     * @param {date} closeDate 
     * @param {date} expiresBalanceDate 
     */
    constructor(provider, securityCode, displayedName, closeDate, expiresBalanceDate) {
        super(provider, securityCode, displayedName)
        this.id = creditCardIds;
        this.number = cardNumbers;
        creditCardIds++;
        cardNumbers++;
        this.balance = 0;
        this.interest = 1;
        this.closeDate = closeDate;
        this.expiresBalanceDate = expiresBalanceDate;
    }
    registerMovement(monto,tercero,fecha,cuotas){
        this.balance += monto;
        console.log(this.expireDate)
        if(this.expireDate < fecha){
            this.movements.push(new Movements(tercero,monto,cuotas));
            return 1
        } else {
            return 0
        }
    }
    //Esto no es la realidad, es por simplificar
    //Si el cliente usa el pago mínimo o paga menos del total
    //Vamos a modificar este valor
    //Si solo pagaron totales = balance * interes (1) = balance
    //Si hicieron algún pago menor = balance * interes (1,algo)
}
clients[0].creditCards.push(new CreditCard("Visa", 101, "pepito", new Date(2025, 6, 10), new Date(2025, 6, 15))); //2 movimientos
clients[0].creditCards.push(new CreditCard("MasterCard", 102, "pepito", new Date(2025, 7, 10), new Date(2025, 7, 25))); // 0 movimientos
clients[1].creditCards.push(new CreditCard("Godibank", 772, "papadopulus hernan", new Date(2025, 5, 10), new Date(2025, 6, 1)));  // 0 movimientos
clients[1].creditCards.push(new CreditCard("Godibank", 773, "papadopulus hernan", new Date(2025, 7, 10), new Date(2025, 7, 20))); // 2 movimientos
clients[2].creditCards.push(new CreditCard("BancoPlatita", 999, "primo.de.pepito", new Date(2025, 6, 10), new Date(2025, 6, 30)));
clients[2].creditCards.push(new CreditCard("Nubank", 1000, "primo.de.pepito", new Date(2024, 11, 10), new Date(2025, 0, 10))); // 0 movimientos