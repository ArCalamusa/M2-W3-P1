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

/* EXTRA 4
 Nel tuo sito e-commerce hai un array di oggetti chiamato shoppingCart. Ognuno di questi oggetti ha un prezzo, un nome, un id e la quantità da spedire.
 Crea una funzione chiamata "maxShoppingCart" che riceve l'array shoppingCart e ritorna l'oggetto più costoso in esso contenuto.
*/

const maxShoppingCart = function (cart) {
    let mostExpensiveItem = cart[0]
    for (let i = 1; i < cart.length; i++) {
        if (cart[i].price > mostExpensiveItem.price) {
            mostExpensiveItem = cart[i]
        }
    }
    return mostExpensiveItem
}

console.log(maxShoppingCart(shoppingCart))

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

const loopUntil = function (n) {
    let counter = 0
    while (counter !== 3) {
        let random = Math.floor(Math.random() * 10)
        console.log(random)
        if (random > n) {
            counter++
        } else {
            counter = 0
        }
    }
}
console.log(loopUntil(8));

/* EXTRA 7
 Crea una funzione chiamata "average" che riceve un array come parametro e ritorna la media aritmetica dei numeri in esso contenuti. La funzione salta automaticamente qualsiasi valore non numerico all'interno dell'array.*/

function average(arr) {
    let somma = 0;
    let count = 0;
    for(let i = 0; i < arr.length; i++) {
        if(typeof arr[i] === "number") {
            somma += arr[i];
            count++;
        }
    }
    let media = somma / count;
    return media;
}
console.log(average([2, 5, 8, "ciao", "wow", 9]));

/* EXTRA 8
 Scrivi una funzione chiamata "longest" che ricerca la stringa più lunga all'interno del parametro ricevuto (un array di stringhe).*/

const longest = function (arr) {
    let longestString = arr[0]
    for (let i = 1; i < arr.length; i++) {
        if (arr[i].length > longestString.length) {
            longestString = arr[i]
        }
    }
    return longestString
}

console.log(longest(['strive', 'school', 'developer', 'student']))

/* EXTRA 9
 Scrivi una funzione per creare un filtro anti spam molto semplice per una casella email. La funzione riceve una stringa come parametro, "emailContent", e ritorna un boolean.
 La funzione deve tornare true se emailContent NON contiene le parole "SPAM" o "SCAM".
*/

console.log("Extra 9")

const emailContent1 = "this is a scam";
const emailContent2 = "this is a safe email";

const filter = function (emailContent) {
    const bannedWords = ["SPAM", "SCAM"]
    for (word of bannedWords) {
        if (emailContent.toLowerCase().includes(word.toLowerCase())) {
            return false;
        }
    }
    return true;
}
console.log(filter(emailContent1));
console.log(filter(emailContent2));

/* EXTRA 10
 Scrivi una funzione che riceve come parametro una data e ritorna il numero di giorni passati ad oggi.
*/

const data = function (selectDate) {
    let today = new Date()
    let diffDate = today - selectDate
    return Math.floor(diffDate / (1000 * 60 * 60 * 24))
}
console.log(data(new Date("2011-05-30")))

/* EXTRA 11
 Scrivi una funzione chiamata "matrixGenerator" che riceve come parametri due interi, "x" e "y".
 La funzione deve tornare una matrice di x volte y, e ogni valore deve rappresentare l'indice dell'elemento.
 Es.: x = 3, y = 2
 ["00","01","02"
 "10","11","12"]*/

const matrixGenerator = function (x, y) {
    let matrix = []
    for (let i = 0; i < y; i++) {
        for (let j = 0; j < x; j++) {
            matrix.push(i.toString() + j.toString())

        }
    }
    let carrPerRow = matrix.length / y
    for (let z = 0; z < y; z++) {
        console.log(matrix.slice(z * carrPerRow, (z + 1) * carrPerRow))
    }
}
console.log(matrixGenerator(3, 4))
