// Esercizi aggiuntivi

/* EXTRA 1
 Scrivi una funzione chiamata "checkArray", che riceve come parametro un array di numeri random (creati con giveMeRandom)
 e stampa in console, per ogni oggetto, true/false a seconda che il numero sia più grande di 5 o no.
 La funzione deve infine tornare la somma di solamente i numeri che sono risultati maggiori di 5.
*/

function checkArray(arr) {
    var somma = 0;

    for (let element of arr) {
        if (element > 5) {
            somma += element;
            console.log("true");
        } else {
            console.log("false");
        }
    }
    return somma;
}

function giveMeRandom() {
    let arr = [];

    for (var i = 0; i < Math.floor(Math.random() * 10); i++) {
        arr[i] = Math.floor(Math.random() * 10);
    }
    console.log(arr);
    return arr;
}

console.log(checkArray(giveMeRandom()));

/* EXTRA 2
 Nel tuo sito e-commerce hai un array di oggetti chiamato shoppingCart. Ognuno di questi oggetti ha un prezzo, un nome, un id e la quantità da spedire.
 Crea una funzione chiamata "shoppingCartTotal" che calcola il totale dovuto al negozio.
*/

const totalShoppingCart = [
    {
        id: 321,
        name: 'bluetooth',
        price: 100,
        quantitaty: 2
    }, {
        id: 123,
        name: 'laptop',
        price: 1000,
        quantitaty: 2
    }, {
        id: 213,
        name: 'USB drive',
        price: 20,
        quantitaty: 5
    }
]

const shoppingCartTotal = function () {

    let totale = 0
    for (let i = 0; i < shoppingCart.length; i++) {
        totale = totale + shoppingCart[i].price * shoppingCart[i].quantitaty;
        // oppure: totale += (shoppingCart[i].price * shoppingCart[i].quantity)
    }
    return totale
}
console.log(shoppingCartTotal());

/* EXTRA 3
 Nel tuo sito e-commerce hai un array di oggetti chiamato shoppingCart. Ognuno di questi oggetti ha un prezzo, un nome, un id e la quantità da spedire.
 Crea una funzione chiamata "addToShoppingCart" che riceve un nuovo oggetto, lo aggiunge allo shoppingCart e ritorna il numero totale degli oggetti in esso contenuti.
*/

const newItem = {
    id: 132,
    name: 'Wireless Keyboard',
    price: 30,
    quantity: 2
}
const addToShoppingCart = function (itemToAdd) {
    const newLength = shoppingCart.push(itemToAdd)
    return newLength
}
console.log(addToShoppingCart(newItem))

//extra 4

const maxShoppingCart = function (cart) {
    let item = cart[0]
    for (let i = 1; i < cart.length; i++) {
        if (cart[i].price > item.price) {
            item = cart[i]
        }

    }
    return item
}

console.log(maxShoppingCart(shoppingCart));

/* EXTRA 4
 Nel tuo sito e-commerce hai un array di oggetti chiamato shoppingCart. Ognuno di questi oggetti ha un prezzo, un nome, un id e la quantità da spedire.
 Crea una funzione chiamata "maxShoppingCart" che riceve l'array shoppingCart e ritorna l'oggetto più costoso in esso contenuto.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 5
 Nel tuo sito e-commerce hai un array di oggetti chiamato shoppingCart. Ognuno di questi oggetti ha un prezzo, un nome, un id e la quantità da spedire.
 Crea una funzione chiamata "latestShoppingCart" che riceve l'array shoppingCart e ritorna l'ultimo oggetto in esso contenuto.
*/

const latestShoppingCart = function (m) {
    if (m >= 0 && (m % 3 === 0 || m % 7 === 0)) {
        return true;
    } else {
        return false;
    }
}

/* EXTRA 6
 Crea una funzione chiamata "loopUntil" che riceve come parametro un intero "x" compreso tra 0 e 9.
 La funzione mostra in console un numero casuale tra 0 e 9 finchè il numero estratto è maggiore di x per 3 volte di fila.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 7
 Crea una funzione chiamata "average" che riceve un array come parametro e ritorna la media aritmetica dei numeri in esso contenuti.
 La funzione salta automaticamente qualsiasi valore non numerico all'interno dell'array.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 8
 Scrivi una funzione chiamata "longest" che ricerca la stringa più lunga all'interno del parametro ricevuto (un array di stringhe).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 9
 Scrivi una funzione per creare un filtro anti spam molto semplice per una casella email. La funzione riceve una stringa come parametro, "emailContent", e ritorna un boolean.
 La funzione deve tornare true se emailContent NON contiene le parole "SPAM" o "SCAM".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 10
 Scrivi una funzione che riceve come parametro una data e ritorna il numero di giorni passati ad oggi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 11
 Scrivi una funzione chiamata "matrixGenerator" che riceve come parametri due interi, "x" e "y".
 La funzione deve tornare una matrice di x volte y, e ogni valore deve rappresentare l'indice dell'elemento.
 Es.: x = 3, y = 2
 ["00","01","02"
 "10","11","12"]
*/

/* SCRIVI QUI LA TUA RISPOSTA */
