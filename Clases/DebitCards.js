let debitCardIds = 1;

class DebitCard extends Cards{
    constructor(provider, securityCode, displayedName) {
        super(provider, securityCode, displayedName)
        this.id = debitCardIds;
        this.number = cardNumbers;
        debitCardIds++;
        cardNumbers++;
    }
}

clients[0].savingsBanks[0].debitCards.push(new DebitCard("Visa", 123, "pepito"));
clients[0].savingsBanks[1].debitCards.push(new DebitCard("MasterCard", 456, "pepito")); 

clients[1].savingsBanks[0].debitCards.push(new DebitCard("Visa", 789, "john"));
clients[1].savingsBanks[1].debitCards.push(new DebitCard("MasterCard", 321, "john"));

clients[2].savingsBanks[0].debitCards.push(new DebitCard("Godicard", 654, "primo.de.pepito"));
clients[2].savingsBanks[1].debitCards.push(new DebitCard("Visa", 987, "primo.de.pepito"));

clients[3].savingsBanks[0].debitCards.push(new DebitCard("Godicard", 147, "Jorge"));