/**
 * Busca el indice en el array "clientes" y devuelve la poscicion en el mismo
 * @param {int} id_client 
 * @returns poscicion del cliente en el array
*/
function findClientByClientId(id_client){
    for(let i = 0; i < clients.length; i++){
        if(clients[i].id === id_client){
            return i;
        }
    }
    return -1
}

/**
 * Recibe el id de un cliente y devuelve un array con todas sus cajas de ahorro
 * @param {int} id_client 
 * @returns @param {Array} cajas_de_ahorro_del_cliente
*/
function findClientSavingBankByClientId(id_client){
  const client_index = findClientByClientId(id_client);
  const banks = []
  for(let i=0;i<clients[client_index].savingsBanks.length;i++){
    banks.push(clients[client_index].savingsBanks[i])
  }
  return banks
}

/**
 * Recibe el id de un cliente y devuelve un array con todas sus tarjetas de debito
 * asociadas a sus cajas de ahorro
 * @param {int} id_client 
 * @returns @param {Array} debit_cards_del_cliente
*/
function findClientDebitCardsByClientId(id_client){
    const debit_cards = []
    const client_index = findClientByClientId(id_client)
    const client_banks = findClientSavingBankByClientId(id_client)
    for(let i = 0;i<client_banks.length;i++){
        debit_cards[i] = []
        if(clients[client_index].savingsBanks[i].debitCards.length>0){
            for(let j = 0;j<clients[client_index].savingsBanks[i].debitCards.length;j++){
                console.log("pepe")
                debit_cards[i].push(clients[client_index].savingsBanks[i].debitCards[j])
            }
        }
    }
    return debit_cards
}

/*function encontrarDebitCardPorId(idBuscado) {
  for (const cliente of clients) {
    for (const cuenta of cliente.savingsBanks) {
      for (const tarjeta of cuenta.debitCards) {
        if (tarjeta.id === idBuscado) {
          return tarjeta;
        }
      }
    }
  }
  return null; // No se encontró la tarjeta
}*/


/** 
 * Bysca una tarjeta de debito por su id y devuelve el objeto tarjeta
 * @param {int} id_client 
 * @returns @param {int} client_index
*/
function findDebitCardByDebitCardId(id_debit_card) {
  let found_card = null;

  for (let i = 0; i < clients.length; i++) {
    const client_banks = clients[i].savingsBanks;
    for (let j = 0; j < client_banks.length; j++) {
      const debit_cards = client_banks[j].debitCards;
      for (let k = 0; k < debit_cards.length; k++) {
        if (debit_cards[k].id === id_debit_card) {
          found_card = debit_cards[k];
        }
      }
    }
  }
  return found_card;
}
  
/**
  * Busca las tarjetas de credito asociadas a un cliente por su id
 * @param {int} id_client 
 * @returns @param {Array} credit_cards
*/
function findCreditCardsByClientId(id_client) {
  const credit_cards = [];
  const client_index = findClientByClientId(id_client);

  if (client_index !== -1 && clients[client_index].creditCards.length > 0) {
    for (let i = 0; i < clients[client_index].creditCards.length; i++) {
      credit_cards.push(clients[client_index].creditCards[i]);
    }
  }
  return credit_cards;
}


  