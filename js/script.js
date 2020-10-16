// // JSnack 1
//   L’utente inserisce due numeri in successione, con due prompt.
//   Il software stampa il maggiore.

var numero1 = parseInt( prompt('Inserisci un numero qualsiasi') );

var numero2 = parseInt( prompt('Inserisci un numero qualsiasi diverso da quello indicato in precedenza') );

if (numero1 > numero2) {
    document.getElementById('snack1').innerHTML = 'La prima cifra inserita che corrisponde al numero ' + numero1 + ' è maggiore della seconda che corrisponde al numero ' + numero2;
}

if (numero1 < numero2) {
    document.getElementById('snack1').innerHTML = 'La prima cifra inserita che corrisponde al numero ' + numero1 + ' è minore della seconda che corrisponde al numero ' + numero2;
}

else {
    document.getElementById('snack1').innerHTML = 'I dati inseriti non sono validi, riprovare'
}



// // JSnack 2
// L’utente inserisce due parole in successione, con due prompt.
// Il software stampa una stringa contenente prima la parola più corta, uno spazio e poi la parola più lunga.

var parola1 = prompt('Inserisci una parola qualsiasi');

var parola2 = prompt('Inserisci una parola qualsiasi diverso da quello indicato in precedenza');

if (parola1.length > parola2.length) {
    document.getElementById('snack2').innerHTML = 'La prima parola inserita ovvero ' + parola1 + ' contiene più caratteri della seconda ovvero ' + parola2;
}

else if (parola1.length < parola2.length) {
    document.getElementById('snack2').innerHTML = 'La seconda parola inserita ovvero ' + parola2 + ' contiene più caratteri della prima ovvero ' + parola1;
}

else{
    document.getElementById('snack2').innerHTML = 'Le due parole inserite sono hanno un identico numero di caratteri'
}



// //JSnack 3
// Il software deve chiedere per 5 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.
// Esegui questo programma con il for.

var somma = 0;

for (i = 0; i <= 4; i++) {
    var number = parseInt( prompt('Inserire un numero') );
    somma = somma + number;
}

document.getElementById('snack3').innerHTML = 'La somma dei numeri inseriti è: ' + somma;



// //JSnack 4
//  Crea un array vuoto.
//  Chiedi per 6 volte all’utente di inserire un numero
//  Se è dispari inseriscilo nell’array

var arrayDispari = [];

for (i = 0; i <= 5; i++) {
    var number = parseInt( prompt('Inserire un numero') );

    if (number % 2 != 0) {
        arrayDispari.push(number); 
    }
}

document.getElementById('snack4').innerHTML = 'tra i numeri digitati quelli dispari sono: ' + arrayDispari;



// //JSnack 4
//  In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby (Paolo, Fabio, Lorenzo)
//  Chiedi all’utente il suo nome
//  Comunicagli se può partecipare o no alla festa.

var invitati = ['paolo', 'fabio', 'lorenzo'];

var nome = prompt('Inserisci il tuo nome per verificare di essere in lista').toLowerCase();

var nomeLista = false;

for (var i = 0; i < invitati.length; i++) {
    var names = invitati[i];

    if (nome == names) {
        nomeLista = true;
    }
}

if (nomeLista == true) {
    document.getElementById('snack5').innerHTML = 'Il nome ' + nome + ' risulta il lista, buon divertimento!';
}

else {
    document.getElementById('snack5').innerHTML = 'Il nome ' + nome + ' non risulta il lista, ricontrollare';
}







