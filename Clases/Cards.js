let cardNumbers = 1000000000000000; // 16 dígitos de ejemplo

class Cards {
        /**
     * @param {string} provider - Compañía proveedora de la tarjeta (Visa, MasterCard, etc.)
     * @param {number} securityCode - Código de seguridad (CVV)
     * @param {string} displayedName - Nombre que aparece en la tarjeta
     */
    constructor(provider, securityCode, displayedName){
        this.displayedName = displayedName;
        this.provider = provider
        this.emitionDate = new Date()
        this.expireDate = this.emitionDate.getFullYear() + 5;
        this.securityCode = securityCode
        this.movements = []
    }
}
