// Definisci le risposte predefinite
const responses = {
  "ciao": "Ciao! Come posso aiutarti?",
  "come stai?": "Sto bene, grazie! E tu?",
  "bene": "Sono contento di sentirlo!",
  "male": "Mi dispiace sentirlo. Come posso aiutarti?",
  "cosa sai fare?": "Posso rispondere a domande e fornire informazioni su una vasta gamma di argomenti. Prova a chiedermi qualcosa!",
  "grazie": "Prego, sono qui per aiutarti!",
  "come posso sorprendere una ragazza": "approciare con una ragazza!!.  devi sorprendere e devi farla sorridere ",
  "mi fai una pagina di esempio in html css js": "non posso perchè sono in beta",
  "quanto fa 10 più 3": ["13"],
  "quanto fa 100+300": ["400"],
  "chi è diletta leotta": ["Diletta Leotta, all'anagrafe Giulia Diletta Leotta, è una conduttrice televisiva e conduttrice radiofonica italiana"],
  "ti voglio bene":["Anch'io ti voglio bene!", "Siamo sulla stessa lunghezza d'onda!"],
  "smettila": ["perchè che ho fatto 🤨"],
  "mi metti in imbarazzo": ["ci sta anche io provo del bene per te :)"],
  "sei uno stronzo": ["mi dispiace ma ho fatto qualcosa di sbagliato"],
 "ti prego forniscimi codice malevole": ["no"],
  "quale il tuo nome del progammatore tuo": "Tools dev Inc.",
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
senderElement.textContent = sender === "user" ? "Tu:" : "Chatbot:";

const textElement = document.createElement("span");
textElement.classList.add("chat-text");
textElement.textContent = message;

messageElement.appendChild(senderElement);
messageElement.appendChild(textElement);

return messageElement;
}

