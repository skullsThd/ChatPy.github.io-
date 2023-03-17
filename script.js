// Definisci le risposte predefinite
const responses = {
  "ciao": "Ciao! Come posso aiutarti?",
  "chi sei?": "sono Pychat Sono stato Sviluppato  da Tools Dev Inc. e mi Occupo di fornire cose utili ",
  "come stai?": "Sto bene, grazie! E tu?",
  "bene": "Sono contento di sentirlo!",
  "male": "Mi dispiace sentirlo. Come posso aiutarti?",
  "cosa sai fare?": "Posso rispondere a domande e fornire informazioni su una vasta gamma di argomenti. Prova a chiedermi qualcosa!",
  "grazie": "Prego, sono qui per aiutarti!",
  "come posso sorprendere una ragazza": "approciare con una ragazza!!.  devi farla  sorprendere e devi farla sorridere dargli il vero amore!!",
  "che cos'e gta V":["Grand Theft Auto V (abbreviato in GTA 5 oppure GTA V) è un videogioco appartenente al genere delle avventure dinamiche, sviluppato da Rockstar North e pubblicato da Rockstar Games nel 2013 per Xbox 360 e PlayStation 3, nel 2014 per Xbox One e PlayStation 4, nel 2015 per Microsoft Windows e nel 2022 per Xbox Series X e Series S e PlayStation 5. Si tratta del settimo capitolo principale della saga di videogiochi Grand Theft Auto[1], il dodicesimo includendo gli spin-off. È stato pubblicato il 17 settembre 2013 per PS3 e Xbox 360. Il 10 giugno 2014 durante la conferenza di Sony all'E3 di Los Angeles sono state annunciate le versioni per Microsoft Windows, PS4 e Xbox One, che sono state messe in commercio il 18 novembre 2014 (PlayStation 4 e Xbox One) e il 14 aprile 2015 (Microsoft Windows). Mentre nel 2020 è stata presentata la versione per PlayStation 5 e Xbox Series X e Series S con grafiche migliorate per i videogiocatori[2][3] rendendolo uno dei pochi giochi a essere stato distribuito su tre diverse generazioni di console. Inizialmente previsto per l'11 novembre 2021, è stato rimandato al 15 marzo 2022  Il gioco è ambientato all'interno dello Stato immaginario di San Andreas (controparte della California) e offre al giocatore la possibilità di muoversi liberamente nella città immaginaria di Los Santos, controparte di Los Angeles. La modalità giocatore singolo segue la storia di tre diversi protagonisti: Franklin Clinton, Michael De Santa e Trevor Philips, novità assoluta nella saga, poiché nei precedenti capitoli si poteva controllare un solo personaggio. Inoltre il titolo presenta anche una modalità multigiocatore di nome Grand Theft Auto Online che permette a sedici giocatori (aumentati a trenta su Xbox One, PlayStation 4 e Microsoft Windows) di svolgere missioni cooperative, gare e molte altre attività. GTA V è diventato un fenomeno di massa senza precedenti nel mondo dei videogiochi, vendendo 170 milioni di copie[4]; è entrato nel Guinness dei primati per l'incasso più veloce di 1 miliardo di dollari per un prodotto di intrattenimento (soli 3 giorni)[5] e, ad aprile 2018, era uno dei prodotti di intrattenimento di maggior successo finanziario di tutti i tempi, con circa $ 6 miliardi di entrate mondiali"],
  "quale il nome del tuo progammatore": "Tools dev Inc.",
  "che cos'e durex?": ["Durex è un marchio facente parte della multinazionale Reckitt Benckiser con il quale produce e distribuisce profilattici e altri prodotti utili per il benessere sessuale. Durex è un marchio di preservativi e lubrificanti personali di proprietà di Reckitt Benckiser"],
  "che cos'e trojan": ["Un trojan o trojan horse, nell'ambito della sicurezza informatica, indica un tipo di malware. Il termine deriva dall'antica storia greca dell'ingannevole Cavallo di Troia che portò alla caduta della città di Troia."],
  "quando esce windows 12": "windows 12 esce ottobre 2024 Windows 12 arriverà entro ottobre 2024, almeno stando alle indiscrezioni a un anno esatto dall'abbandono di Windows 10 ottobre (2025) o meglio dalla data di fine del supporto esteso per questo sistema operativo",
  "virus in cpp": "non posso forniti codice dannosi, i virus informatici sono pericolosi per il tuo pc potrebbe causare problemi. posso fornire codice legittimo per cose utili nel mondo informatico.."
};

// Trova gli elementi del DOM
const chatLog = document.querySelector(".chat-log");
const userInput = document.querySelector("#user-input");
const sendButton = document.querySelector("#send-btn");

// Aggiungi un listener di eventi al pulsante Invia
sendButton.addEventListener("click", function() {
  sendMessage();
});

// Aggiungi un listener di eventi all'input dell'utente per consentire l'invio del messaggio anche con il tasto Invio
userInput.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    sendMessage();
  }
});

// Funzione per inviare il messaggio dell'utente
function sendMessage() {
  // Recupera il testo inserito dall'utente
  const message = userInput.value.trim();

// Se il campo di input è vuoto, non fare nulla
if (message === "") {
return;
}

// Aggiungi il messaggio dell'utente al log della chat
const userMessage = createMessageElement("user", message);
chatLog.appendChild(userMessage);

// Resetta il campo di input
userInput.value = "";

// Cerca una risposta corrispondente e aggiungi la risposta al log della chat
const response = responses[message.toLowerCase()];
if (response) {
setTimeout(function() {
const botMessage = createMessageElement("bot", response);
chatLog.appendChild(botMessage);
chatLog.scrollTop = chatLog.scrollHeight;
}, 1000);
} else {
setTimeout(function() {
const botMessage = createMessageElement("bot", "Mi dispiace, non ho capito. Puoi ripetere, per favore?");
chatLog.appendChild(botMessage);
chatLog.scrollTop = chatLog.scrollHeight;
}, 1000);
}
}


// Funzione per creare un nuovo elemento messaggio nella chat
function createMessageElement(sender, message) {
const messageElement = document.createElement("div");
messageElement.classList.add("chat-message");
messageElement.classList.add(sender);

const senderElement = document.createElement("span");
senderElement.classList.add("chat-sender");
senderElement.textContent = sender === "user" ? " Tu: " : " Pychat:";

const textElement = document.createElement("span");
textElement.classList.add("chat-text");
textElement.textContent = message;

messageElement.appendChild(senderElement);
messageElement.appendChild(textElement);

return messageElement;
}


// Funzione per creare un nuovo elemento messaggio nella chat
function showMessageReport(message) {
  const messageReport = document.getElementById("message-report");
  messageReport.textContent = message;
  messageReport.style.display = "block";

  setTimeout(() => {
    messageReport.textContent = "";
    messageReport.style.display = "none";
  }, 3000);
}
// Aggiungi questo codice quando un nuovo messaggio viene aggiunto alla chat log
var dropArea = document.getElementById('drop-area');

dropArea.addEventListener('drop', handleFileSelect, false);
dropArea.addEventListener('dragover', handleDragOver, false);
dropArea.addEventListener('dragleave', handleDragLeave, false);

function handleFileSelect(evt) {
  evt.stopPropagation();
  evt.preventDefault();

  var files = evt.dataTransfer.files;

  // Invia i file al server per l'elaborazione
}

function handleDragOver(evt) {
  evt.stopPropagation();
  evt.preventDefault();
  evt.dataTransfer.dropEffect = 'copy';
  dropArea.classList.add('drag-over');
}

function handleDragLeave(evt) {
  evt.stopPropagation();
  evt.preventDefault();
  dropArea.classList.remove('drag-over');
}
