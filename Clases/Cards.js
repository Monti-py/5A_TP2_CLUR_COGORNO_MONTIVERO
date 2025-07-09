let cardNumbers = 1000000000000000; // 16 dígitos de ejemplo

class Cards {
    constructor(provider, securityCode, displayedName){
        this.displayedName = displayedName;
        this.provider = provider
        this.emitionDate = new Date()
        this.expireDate = this.emitionDate.getFullYear() + 5;
        this.securityCode = securityCode
        this.movements = []
    }
}
