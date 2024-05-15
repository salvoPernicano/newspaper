# Progetto Recupero Titoli Notizie

### Descrizione
Il progetto è un'applicazione web che recupera e visualizza i titoli delle notizie da un sito web di notizie tramite web scraping. Utilizza Node.js per creare un server che esegue il web scraping utilizzando le librerie Axios e Cheerio, e fornisce i dati recuperati attraverso una API RESTful. L'applicazione client è implementata utilizzando HTML, CSS e JavaScript per recuperare i dati dall'API e visualizzare i titoli delle notizie.

### Dipendenze
+ Node.js
+ Express.js
+ Axios
+ Cheerio

## Installazione
1. Assicurati di avere Node.js installato sul tuo sistema.
2. Clona il repository del progetto
3. Naviga nella directory del progetto
4. Installa le dipendenze del server eseguendo il comando: npm install

### Utilizzo
Avvia il server configurato sulla porta 8000,eseguendo il comando: npm run start

Apri il file HTML su browser, usando ad esempio un estensione come Liveserver.

L'applicazione mostrerà i titoli delle notizie recuperate dal sito web di notizie.

### Struttura del Codice
index.js: Il file principale del server Node.js che gestisce il recupero dei dati tramite web scraping e fornisce un'API RESTful per i client, usiamo la lireria Cheerio per recuperare il codice HTML del sito da cui desideriamo estrapolare le notizie e selezioniamo i tag da cui estrapolare il contenuto e i link che ci interessano

index.html: Il file HTML che contiene la struttura dell'applicazione client e la sezione di script JS che  gestisce il recupero dei dati dall'API e la visualizzazione dei titoli delle notizie nell'applicazione client.

styles.css: Il file CSS che contiene lo stile dell'applicazione client.



