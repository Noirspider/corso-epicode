/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* i principali datatype in JavaScript sono 
  - Numeri    : questi sono i numeri che già conosci e che conti usando le dita, 1,2,3. 
  - Stringhe  : questo qui invece sono le parole tipo mamma, papà, mi piace il gelato.
  - booleani  : questo è come l'interruttore della luce, luce c'è luce non c'è.  
  - null      : e questo invece non c'è. Avvolto da un alone di mistero, esiste ma non esiste. 
  - undefined : ti ricordi quelle scatole blu di biscotti dalla nonna? beh undefined è come quelle scatole, potrebbero essere biscotti o potrebbero essere i fili per cucine, lo scopriremo solo aprendole.
  - oggetto   : è come la cesta dei tuoi giochi, dentro puoi metterci quello che vuoi, puoi fare la cesta dei super eroi, quella delle barbie, quella delle macchinine. 
   */

/* ESERCIZIO 2
Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

var name = 'Gianluca';
const NAME = 'Gianluca';
console.log(name);

/* ESERCIZIO 3
Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

let num1 = 12;
let num2 = 20;

let somma = num1 + num2;

console.log("La somma di 12 e 20 è: " + somma);

/* ESERCIZIO 4
Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

var x = 12;
console.log(x);

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

var name = 'Grillo';
//const NAME = 'Grillo';
console.log('il dato di name è:' + name);
//console.log('il dato di name è:' + NAME);
// se tolgo il commento da const NAME la console mi restituirà un errore perchè sto provando a cambiare il dato ad una costante che per natura non può subire variazioni

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

let sottr = 4 - x;
console.log(sottr);

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

let name1 = 'john';
let name2 = 'John';

let confronto1 = name1 == name2;
console.log(confronto1);
let name2min = name2.toLocaleLowerCase();
let confronto2 = name1 == name2min;
console.log(confronto2);