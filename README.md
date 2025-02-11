MILESTONE 1
- Mettiamo su un nuovo progetto React aiutandoci con Vite
- Ripuliamo come sempre l’app da file e codice di esempio non necessari
- Installiamo il necessario: React Router, Axios e Bootstrap (se volete utilizzarlo)

MILESTONE 2
- Creiamo un layout di base per la nostra applicazione ed impostiamo le rotte per le diverse pagine.
- Creiamo 2 pagine:
    - La home, in cui mostreremo la lista dei film
    - La pagina di dettaglio di un singolo film

MILESTONE 3
- Configuriamo l’app di backend (repo `webapp-express`) a ricevere chiamate dalla nostra applicazione React, installando e impostando il middleware **CORS**
- Proviamo quindi ad effettuare una chiamata Ajax dalla home del progetto React, per ottenere la lista dei film

MILESTONE 4
- In ultimo, effettuiamo una chiamata AJAX dalla pagina di dettaglio per ottenere il dettaglio di un singolo film, comprese le sue recensioni

### Bonus
- Stampare le stelline del voto utilizzando un componente dedicato
- Gestire l’errore 404 in caso di libro non presente reindirizzando alla pagina 404

A partire dal lavoro individuale di stamattina dedichiamo la giornata ad aggiungere alla webapp i form.
Prima di fare il form per la creazione del nuovo film termata i passaggi dei giorni passati,
Cose da ricordate per l’uploda dell’immagine tramite API

Lato beckend:
- installare multer npm i multer
- aggiungere il middlevare (che allego ATTENZIONE AL PERCORSO)
- nel router importarlo ‘iniettare’ il middleware nella rotta store ex router.post('/', upload.single('image'), bookController.store)
- nel controller gestire i dati in ingresso delle req e il nome del file con req.file.filename

Lato frontend
- creare la nuova rotta per il form di creazione
- creare il componente della nuova pagina che contiene il form
- il campo input che si occupa dell’immagine deve essere di tipo file e non ha il value
- l’handler che gestisce il formData alla chiave “image” dovrà associare il valore e.target.files[0]
- per l’invio del form creare un’istanza FormData (const dataToSend = new FormData();)
- a questa istanza, ciclando con un for/in il nostro fromData faremo l’append delle chiavi/valore del nostro form
- l’headers della chiamata axios deve essere 'Content-Type': 'multipart/form-data'