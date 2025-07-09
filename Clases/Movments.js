let movementsId = 1;

class Movement{
    constructor(thirdPartyName, amount, cuotes) {
        this.id = movementsId;
        movementsId++;
        this.date = new Date();
        this.thirdPartyName = thirdPartyName;
        this.amount = amount;
        if(cuotes >= 1)
            this.cuotes = cuotes;
    }
}

//Caso gasto de débito
new Movement("COTO", 1000);
//Caso gasto de crédito
new Movement("CompraGamer", 200000, 3);