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
// Movimientos de cuentas bancarias (SavingsBanks)
clients[0].savingsBanks[0].movements.push(new Movement("YPF", 4000));       // Pepito
clients[0].savingsBanks[1].movements.push(new Movement("Amazon", 120));    // Pepito en USD

clients[1].savingsBanks[0].movements.push(new Movement("McDonald's", 3500)); // John ARS
clients[1].savingsBanks[1].movements.push(new Movement("Netflix", 1500));    // John USD

clients[2].savingsBanks[0].movements.push(new Movement("Frávega", 85000));   // Primo Pepito ARS
clients[2].savingsBanks[1].movements.push(new Movement("Tata Consultancy", 1000000)); // INR

clients[3].savingsBanks[0].movements.push(new Movement("Panadería Don Pan", 1500));  // Jorge

// Movimientos de tarjetas de débito
clients[0].savingsBanks[0].debitCards[0].movements.push(new Movement("Garbarino", 30000)); // Pepito Visa
clients[0].savingsBanks[1].debitCards[0].movements.push(new Movement("Spotify", 1200));    // Pepito MasterCard

clients[1].savingsBanks[0].debitCards[0].movements.push(new Movement("Starbucks", 900));  // John Visa
clients[1].savingsBanks[1].debitCards[0].movements.push(new Movement("AliExpress", 400)); // John MasterCard

clients[2].savingsBanks[0].debitCards[0].movements.push(new Movement("Farmacity", 3000)); // Primo Pepito Godicard
clients[2].savingsBanks[1].debitCards[0].movements.push(new Movement("Flipkart", 100000)); // Primo Pepito Visa

clients[3].savingsBanks[0].debitCards[0].movements.push(new Movement("Pizzería Napoli", 2800)); // Jorge Godicard

// Movimientos de tarjetas de crédito (con cuotas)
clients[1].creditCards[0].movements.push(new Movement("Compumundo", 150000, 6)); // Hernán
clients[1].creditCards[1].movements.push(new Movement("Carrefour", 20000, 1));   // Hernán
