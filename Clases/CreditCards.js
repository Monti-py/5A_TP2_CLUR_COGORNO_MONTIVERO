let creditCardIds = 1;

class CreditCard extends Cards{
    /**
     * 
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
    //Esto no es la realidad, es por simplificar
    //Si el cliente usa el pago mínimo o paga menos del total
    //Vamos a modificar este valor
    //Si solo pagaron totales = balance * interes (1) = balance
    //Si hicieron algún pago menor = balance * interes (1,algo)
}
clients[1].creditCards.push(new CreditCard("Godibank",772,"papadopulus hernan"))
clients[1].creditCards.push(new CreditCard("Godibank",773,"papadopulus hernan"))