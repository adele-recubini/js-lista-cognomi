// Chiedere all’utente il cognome
// inserirlo in un array con altri cognomi: ‘Bianchi’, ‘Rossi’, ‘Duzioni’, ‘Balsano’, ‘Verdi’
// stampa la lista ordinata alfabeticamente [ul, li]
// solo dopo, scrivi anche la posizione "umana" della lista in cui il nuovo utente si trova

// genero la domanda all utente
var cognome = prompt('qual\è il tuo cognome?')
// creo l array con i cognomi dati
var listaCognomi =['Bianchi' , 'Rossi' , 'Duzioni' , 'Balsano' , 'Verdi'];
// creo la variabile da inserire nell html
var output = document.getElementById('lista');
// aggiungo il nuovo cognome nella lista con push
listaCognomi.push(cognome);
// lo voglio vedere stampato sull html utilizzo l inner
output.innerHTML=listaCognomi

// creo un ciclo for che vada a stamparmi tutti i cognomi come fossero una lista in innerHTML, e con sort dovrebbe metterli in ordine albabetico

var contenutoPrecedente;

for (i = 0; i < listaCognomi.length; i++ ){

contenutoPrecedente = output.innerHTML;
output.innerHTML = contenutoPrecedente + '<li>' + listaCognomi[i] + '</li>';



}

// output.innerHTML + = '<li>' + listaCognomi[i] + '</li>'
