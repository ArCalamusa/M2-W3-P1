/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Scrivi una funzione chiamata "area" che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

const area = function (l1, l2) { //crea funzione chiamata area
    return l1 * l2;
}

const areaResult = area(3, 4);
console.log(areaResult);

/* ESERCIZIO 2
 Scrivi una funzione chiamata "crazySum" che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma di quei due valori, ma se il loro valore è lo stesso allora deve ritornare la loro somma moltiplicata per 3.
*/

function crazySum(numInt1, numInt2) {

    if (numInt1 === numInt2) {
        return (numInt1 + numInt2) * 3;
    } else {
        return numInt1 + numInt2;
    }
}

console.log(crazySum(4, 4));
console.log(crazySum(5, 4));

/* ESERCIZIO 3
 Scrivi una funzione chiamata "crazyDiff" che calcola la differenza assoluta tra un numero fornito e 19.
 Se il valore calcolato è più grande di 19, la funzione deve tornare tale risultato moltiplicato per 3.
*/

const crazyDiff = function (num) {
    if (num > 19) {
        return Math.abs((num - 19) * 3);
    } else {
        return Math.abs(num - 19);
    }
}
console.log(crazyDiff(45));

/* ESERCIZIO 4
 Scrivi una funzione chiamata "boundary", che accetta un numero intero come parametro e ritorna true se tale parametro è incluso tra 20 e 100 (incluso) o se è esattamente uguale a 400.
*/

function boundary(numIntero) {
    let numero = parseInt(numIntero);
    if ((numero > 20 && numero < 100)) || (numero === 400)) {
            return true;
        } else {
            return false;
        }
    }

console.log(boundary(300));

/* ESERCIZIO 5
 Scrivi una funzione chiamata "codify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "code" all'inizio della stringa fornita e ritornare il risultato, ma se la stringa fornita comincia proprio con "code" allora deve ritornarla senza modifiche.
*/

const codify2 = function (str) {
    if (str.startsWith('code')) {
        // utilizzato per controllare se la stringa utilizza un determinato prefisso o
        // una stringa true nel caso la utilizzi false in caso contrario
        return str;
    } else {
        return 'code' + str;
    }
}
console.log(codify2('codes'));

/* ESERCIZIO 6
 Scrivi una funzione chiamata "check3and7" la quale accetta un numero intero positivo come parametro.
 La funzione deve controllare che tale parametro sia un multiplo di 3 o di 7, e in tal caso tornare true; altrimenti deve tornare false.
 SUGGERIMENTO: operatore modulo
*/

function check3and7(int) {
    int = Math.abs(parseInt(int));
  }
  
  const check3and7 = function(m) {
    if(m >= 0 && (m%3 === 0 || m%7 === 0)) {
      return true;
    } else {
      return false;
    }
  }

/* ESERCIZIO 7
 Scrivi una funzione chiamata "reverseString", che accetta una stringa come parametro e la ritorna invertita (es.: EPICODE => EDOCIPE).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 8
 Scrivi una funzione chiamata "upperFirst", che accetta una stringa come parametro e la ritorna rendendo maiuscola ogni lettera iniziale di ogni parola.*/

const upperFirstPhrase = function (str) {

    let words = str.split(' ') //divide la riga in un array di parole
    let finalString = [] //dichiara un array vuoto utilizzare per memorizzare parola con prime lettere minuscole
    for (let i = 0; i < words.length; i++) { //ciclo for
        let firstChar = words[i].charAt(0)
        console.log(firstChar)
        let uppercaseChar = firstChar.toUpperCase() //converte la lettera estratta in maiusc
        let cutString = words[i].slice(1) //taglia la prima lettera della parola corrente, ne prende una fetta
        let finalWord = uppercaseChar + cutString //unisce la maiuscola con la parola tagliata per ottenere la parola con la prima lettera maiusc
        finalString.push(finalWord) //aggiunge la parola con la prima lettera maiusc
    }
    console.log(finalString.join(''))
}
upperFirstPhrase('hello world')

//alternativa
console.log("esercizio 8")
function upperFirst(str1) {
    const wordArray = str1.split(" ");
    for (let i = 0; i < wordArray.length; i++) {
        let currentWord = wordArray[i]
        wordArray[i] = currentWord.replace(
            currentWord[0],
            currentWord[0].toUpperCase()
        );
    }
    return wordArray.join(" ");
}

/* ESERCIZIO 9
 Scrivi una funzione chiamata "cutString", che accetta una stringa come parametro e la ritorna senza il primo e l'ultimo carattere.*/

const cutString = function (str) {
    return str.slice(1, str.length - 1)
}
console.log(cutString("epicode"));

/* ESERCIZIO 10
 Scrivi una funzione chiamata "giveMeRandom", che accetta come parametro un numero chiamato n e ritorna un array contenente n numeri random contenuti tra 0 e 10.*/

const giveMeRandom = function (n) {
    const arr = [];
    for (let i = 0; i <= n; i++) {
        arr.push(Math.floor(Math.random() * 10))
    }
    return arr;
}
console.log(giveMeRandom(5));
