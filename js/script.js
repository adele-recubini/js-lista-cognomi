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
// il sort mette in ordine alfabetico l array ed è da inserire dopo averlo aggiunto
listaCognomi.sort();

// lo voglio vedere stampato sull html utilizzo l inner
output.innerHTML=listaCognomi



// creo un ciclo for che vada a stamparmi tutti i cognomi come fossero una lista in innerHTML
var contenutoPrecedente;

for (i = 0; i < listaCognomi.length; i++ ){

contenutoPrecedente = output.innerHTML;
output.innerHTML = contenutoPrecedente + '<li>' + listaCognomi[i] + '</li>';

}
// indexof per vedere la posizione umana della lista in cui il nuovo utente si trova
var outputDue = document.getElementById('posizione');
var posizioneUtente = listaCognomi.indexOf(cognome) + 1;
outputDue.innerHTML = 'la sua posizione è:' + posizioneUtente ;



// alternativa
// output.innerHTML + = '<li>' + listaCognomi[i] + '</li>'
