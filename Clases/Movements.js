let movementsId = 1;

class Movements{
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

console.log("a")
// Movimientos de cuentas bancarias (SavingsBanks)
clients[0].savingsBanks[0].movements.push(new Movements("YPF", 4000));       // Pepito
clients[0].savingsBanks[1].movements.push(new Movements("Amazon", 120));    // Pepito en USD

clients[1].savingsBanks[0].movements.push(new Movements("McDonald's", 3500)); // John ARS
clients[1].savingsBanks[1].movements.push(new Movements("Netflix", 1500));    // John USD

clients[2].savingsBanks[0].movements.push(new Movements("Frávega", 85000));   // Primo Pepito ARS
clients[2].savingsBanks[1].movements.push(new Movements("Tata Consultancy", 1000000)); // INR

clients[3].savingsBanks[0].movements.push(new Movements("Panadería Don Pan", 1500));  // Jorge

// Movimientos de tarjetas de débito
clients[0].savingsBanks[0].debitCards[0].movements.push(new Movements("Garbarino", 30000)); // Pepito Visa
clients[0].savingsBanks[1].debitCards[0].movements.push(new Movements("Spotify", 1200));    // Pepito MasterCard

clients[1].savingsBanks[0].debitCards[0].movements.push(new Movements("Starbucks", 900));  // John Visa
clients[1].savingsBanks[1].debitCards[0].movements.push(new Movements("AliExpress", 400)); // John MasterCard

clients[2].savingsBanks[0].debitCards[0].movements.push(new Movements("Farmacity", 3000)); // Primo Pepito Godicard
clients[2].savingsBanks[1].debitCards[0].movements.push(new Movements("Flipkart", 100000)); // Primo Pepito Visa

clients[3].savingsBanks[0].debitCards[0].movements.push(new Movements("Pizzería Napoli", 2800)); // Jorge Godicard

clients[0].creditCards[0].movements.push(new Movements("MercadoLibre", 120000, 6));
clients[0].creditCards[0].movements.push(new Movements("Netflix", 1500, 1));

clients[1].creditCards[1].movements.push(new Movements("PedidosYa", 4000, 1));
clients[1].creditCards[1].movements.push(new Movements("Compumundo", 150000, 12));

clients[2].creditCards[0].movements.push(new Movements("Flipkart", 300000, 10));
clients[2].creditCards[0].movements.push(new Movements("Spotify", 1200, 1));