# Relazione sul progetto "Shopping Cart" - Capolavoro

## Introduzione

Il presente documento descrive in modo approfondito il progetto "Shopping Cart", sviluppato durante il percorso scolastico. Il progetto ha lo scopo di realizzare un'applicazione web completa per la gestione di un carrello, simulando le funzionalità di un piccolo e-commerce. Il lavoro integra competenze acquisite nei linguaggi di programmazione, nello sviluppo front-end e back-end, nell'interazione con database NoSQL (MongoDB) e nell'utilizzo di framework moderni come Angular e Node.js.

## Obiettivi del progetto

* Realizzare una piattaforma web che consenta agli utenti di visualizzare un elenco di prodotti e aggiungerli o rimuoverli da un carrello.
* Garantire il salvataggio persistente dei dati tramite un database MongoDB.
* Consentire la comunicazione tra front-end e back-end tramite chiamate HTTP RESTful.
* Mostrare in tempo reale la quantità di articoli nel carrello e riflettere dinamicamente eventuali modifiche.

## Tecnologie utilizzate

* **Angular**: utilizzato per la parte front-end. Grazie ai suoi componenti modulari e al data-binding, ha permesso la creazione di un'interfaccia utente dinamica e reattiva.
* **Node.js e Express.js**: utilizzati per creare il server back-end. Express ha facilitato la gestione delle rotte HTTP e delle richieste asincrone.
* **MongoDB**: database NoSQL utilizzato per salvare i dati dei prodotti e del carrello.
* **Mongoose**: libreria ODM per facilitare l'interazione con MongoDB e definire modelli di dati.
* **TypeScript**: linguaggio fortemente tipizzato utilizzato sia nel front-end Angular che nel back-end Node.js, per una maggiore robustezza del codice.
* **Postman**: utilizzato durante lo sviluppo per testare le API.
* **Visual Studio Code**: editor utilizzato per scrivere il codice sia lato front-end che back-end.

## Struttura del progetto

### 1. Front-end (cartella `src`)

* Componenti principali: `prodotti`, `carrello`, `navbar`.
* Servizi: `cart.service.ts` e `prodotti.service.ts` per gestire le chiamate HTTP al backend.
* Routing configurato in `app.routes.ts` per navigare tra i componenti.
* Interfaccia utente semplice e intuitiva, con un contatore accanto all'icona del carrello che si aggiorna dinamicamente.

### 2. Back-end (cartella `src-backend`)

* File principale: `server.js`, che gestisce la connessione a MongoDB e le rotte API.
* Modelli Mongoose per `Product` e `CartItem`.
* Rotte REST per:

  * ottenere i prodotti (`GET /api/prodotti`)
  * aggiungere un prodotto al carrello (`POST /api/carrello`)
  * rimuovere un prodotto dal carrello (`DELETE /api/carrello/:id`)
  * ottenere tutti i prodotti del carrello (`GET /api/carrello`)

## Funzionalità implementate

* Visualizzazione dinamica dei prodotti.
* Aggiunta di un prodotto al carrello tramite il pulsante "Aggiungi al carrello" dalla pagina "Prodotti".
* Rimozione di un prodotto dal carrello tramite il pulsante "Rimuovi dal carrello" dalla pagina "Carrello".
* Aggiornamento istantaneo del numero di articoli nel carrello.
* Persistenza dei dati tra refresh e riavvio dell'applicazione, grazie al salvataggio in MongoDB.

## Struttura della base dati MongoDB

Il database utilizzato si chiama `shopping_cart` e contiene due collezioni principali:

### 1. prodotti

Contiene tutti i prodotti disponibili all'acquisto. Ogni documento ha la seguente struttura:

```json
{
  "_id": ObjectId,
  "id": Number,
  "nome": String,
  "prezzo": Number
}
```

### 2. carrello

Contiene i prodotti aggiunti al carrello. Ogni documento è simile a quelli della collezione prodotti ma salvato separatamente, per consentire operazioni indipendenti.

## Query utilizzate per l'interazione con MongoDB

Nel progetto sono state utilizzate le seguenti operazioni CRUD tramite Mongoose:

* `Product.find()` - per ottenere tutti i prodotti disponibili.
* `new CartItem(req.body).save()` - per aggiungere un prodotto al carrello.
* `CartItem.findByIdAndDelete(req.params.id)` - per rimuovere un prodotto dal carrello.
* `CartItem.find()` - per recuperare il contenuto attuale del carrello.

## Conclusione e riflessioni personali

Questo progetto ha rappresentato una sfida concreta e stimolante. Mi ha permesso di mettere in pratica concetti fondamentali dell'informatica moderna, dalla programmazione asincrona all'integrazione tra front-end e back-end. Ho imparato a risolvere problemi legati all'aggiornamento dinamico dei dati e alla gestione persistente degli stessi, maturando consapevolezza sulle reali esigenze di un'applicazione web.

La realizzazione di un carrello web, seppur semplice, è stata utile per capire come si costruisce un'app concreta, e sono soddisfatto del risultato finale. Ritengo che questo lavoro rappresenti a pieno le competenze acquisite nel mio percorso scolastico ed è per questo che lo propongo come Capolavoro.


*Studente: Simone Salvatore Giustiziero*
