// Selezione degli elementi HTML
const loginForm = document.querySelector('#login-form');
const loginBtn = document.querySelector('#login-btn');
const signupForm = document.querySelector('#signup-form');
const signupBtn = document.querySelector('#signup-btn');
const logoutBtn = document.querySelector('#logout-btn');
const userGreeting = document.querySelector('#user-greeting');
const userInput = document.querySelector('#user-input');
const chatLog = document.querySelector('.chat-log');

// Gestore di eventi per il login
loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = loginForm.email.value;
  const password = loginForm.password.value;
  // Qui inserire la logica per verificare l'autenticazione
  // Se l'autenticazione è corretta, impostare l'utente come connesso
  // e visualizzare il saluto dell'utente
  userGreeting.innerText = `Benvenuto, ${email}!`;
});

// Gestore di eventi per la registrazione
signupForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = signupForm.email.value;
  const password = signupForm.password.value;
  // Qui inserire la logica per la registrazione
  // Se la registrazione è andata a buon fine, impostare l'utente come connesso
  // e visualizzare il saluto dell'utente
  userGreeting.innerText = `Benvenuto, ${email}!`;
});

// Gestore di eventi per il logout
logoutBtn.addEventListener('click', (e) => {
  e.preventDefault();
  // Qui inserire la logica per il logout
  // Rimuovere l'utente dalla sessione e reimpostare l'interfaccia
  userGreeting.innerText = '';
  userInput.disabled = true;
  chatLog.innerHTML = '';
});

// Disabilita l'input dell'utente se l'utente non è connesso
userInput.disabled = true;

// Gestore di eventi per il click sul pulsante di accesso
loginBtn.addEventListener('click', (e) => {
  e.preventDefault();
  loginForm.style.display = 'block';
  signupForm.style.display = 'none';
});

// Gestore di eventi per il click sul pulsante di registrazione
signupBtn.addEventListener('click', (e) => {
  e.preventDefault();
  loginForm.style.display = 'none';
  signupForm.style.display = 'block';
});
