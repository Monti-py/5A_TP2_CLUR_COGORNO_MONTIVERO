const VALOR_DOLAR_OFICIAL_COMPRA = 1225;
const VALOR_DOLAR_OFICIAL_VENTA = 1275;


// async function cargarDolar() {
//   try {
//     const response = await fetch('https://dolarapi.com/v1/dolares/oficial', {
//       method: "GET",
//       headers:{"Content-Type": "application/json"}
//     });
//     if (!response.ok) {
//       Error("Error en la solicitud: ");
//     }
//     let data = await response.json();
//     const VALOR_DOLAR_OFICIAL_COMPRA = data.compra;
//     const VALOR_DOLAR_OFICIAL_VENTA = data.venta;

//     console.log("Valor de compra:", VALOR_DOLAR_OFICIAL_COMPRA);
//     console.log("Valor de venta:", VALOR_DOLAR_OFICIAL_VENTA);
//   } catch (error) {
//     console.error("No se pudo obtener el valor del dolar", error);
//   }
// };

// cargarDolar ()

// cargarDolar ()
/**
 * Busca el indice en el array "clientes" y devuelve la poscicion en el mismo
 * @param {int} id_client 
 * @returns poscicion del cliente en el array
*/
function findClientIndexByClientId(id_client) {
  for (let i = 0; i < clients.length; i++) {
    if (clients[i].id === id_client) {
      return i;
    }
  }
  return 0
}

/**
 * Recibe el id de un cliente y devuelve un array con todas sus cajas de ahorro
 * @param {int} id_client 
 * @returns @param {Array} cajas_de_ahorro_del_cliente
*/
function findClientSavingBanksByClientId(id_client) {
  const client_index = findClientIndexByClientId(id_client);
  const banks = []
  for (let i = 0; i < clients[client_index].savingsBanks.length; i++) {
    banks.push(clients[client_index].savingsBanks[i])
  }
  return banks
}


/**
 * Recide el id de una caja de ahorro y devuelve la poscicion en el array savingBanks de esa misma caja
 * @param {int} id_savings_banks 
 * @returns 
 */
function findClientIndexBySavingsBankId(id_savings_banks) {
  for (let i = 0; i < clients.length; i++) {
    for (let j = 0; i < clients[i].savingsBanks.length; j++) {
      if (clients[i].savingsBanks[j].id === id_savings_banks)
        return i
    }
  }
  return 0
}

function findSavingsBanksIndexBySavingsBanksId(id_savings_banks) {
  for (let i = 0; i < clients.length; i++) {
    for (let j = 0; j < clients[i].savingsBanks.length; j++) {
      if (clients[i].savingsBanks[j].id === id_savings_banks) {
        return j
      }
    }
  }
  return 0
}
/**
 * Recibe el id de un cliente y devuelve un array con todas sus tarjetas de debito
 * asociadas a sus cajas de ahorro
 * @param {int} id_client 
 * @returns @param {Array} debit_cards_del_cliente
*/
function findClientDebitCardsByClientId(id_client) {
  const debit_cards = []
  const client_index = findClientIndexByClientId(id_client)
  const client_banks = findClientSavingBanksByClientId(id_client)
  for (let i = 0; i < client_banks.length; i++) {
    debit_cards[i] = []
    if (clients[client_index].savingsBanks[i].debitCards.length > 0) {
      for (let j = 0; j < clients[client_index].savingsBanks[i].debitCards.length; j++) {
        console.log("pepe")
        debit_cards[i].push(clients[client_index].savingsBanks[i].debitCards[j])
      }
    }
  }
  return debit_cards
}


/** 
 * Bysca una tarjeta de debito por su id y devuelve el objeto tarjeta
 * @param {int} id_client 
 * @returns @param {int} client_index
*/
function findDebitCardByDebitCardId(id_debit_card) {
  let found_card;

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
  const client_index = findClientIndexByClientId(id_client);

  if (client_index !== -1 && clients[client_index].creditCards.length > 0) {
    for (let i = 0; i < clients[client_index].creditCards.length; i++) {
      credit_cards.push(clients[client_index].creditCards[i]);
    }
  }
  return credit_cards;
}


function findCreditCardByCreditCardId(id_credit_card) {
  let credit_cards;
  for (let i = 0; i < clients.length; i++) {
    if (clients[i].creditCards.length != 0) {
      for (let j = 0; j < clients[i].creditCards.length; j++) {
        if (clients[i].creditCards[j].id === id_credit_card) {
          credit_cards = clients[i].creditCards[j]
          return credit_cards
        }
      }
    }
  }
  return 0
}

function findSavingsBankMovementsBySavingsBankId(id_savings_banks) {
  let movements;
  for (let i = 0; i < clients.length; i++) {
    for (let j = 0; j < clients[i].savingsBanks.length; j++) {
      if (clients[i].savingsBanks[j].id === id_savings_banks) {
        movements = clients[i].savingsBanks[j].movements
        return movements
      }
    }
  }
  return 0
}

function findDebitCardMovementsByDebitCardId(id_debit_card) {
  let movements;
  for (let i = 0; i < clients.length; i++) {
    for (let j = 0; j < clients[i].savingsBanks.length; j++) {
      for (let k = 0; k < clients[i].savingsBanks[j].debitCards.length; k++) {
        if (clients[i].savingsBanks[j].debitCards[k].id === id_debit_card) {
          movements = clients[i].savingsBanks[j].debitCards[k].movements
          return movements
        }
      }
    }
  }
  return 0
}

function findCreditCardMovementsByCreditCardId(id_credit_card) {
  let movements;
  for (let i = 0; i < clients.length; i++) {
    for (let j = 0; j < clients[i].creditCards.length; j++) {
      if (clients[i].creditCards[j].id === id_credit_card) {
        movements = clients[i].creditCards[j].movements
        return movements
      }
    }
  }
  return 0
}
function transferirDinero(monto, id_cuenta_origen, id_cuenta_destino) {
  const ORIGEN = clients[findClientIndexBySavingsBankId(id_cuenta_origen)];
  const DESTINO = clients[findClientIndexBySavingsBankId(id_cuenta_destino)];
  if (ORIGEN.currency !== DESTINO.currency) {
    return -1;
  } else {
    if (ORIGEN.extraerDinero(monto)) {
      DESTINO.depositarDinero(monto);
      return 1;
    } else {
      return 0;
    }
  }
}