if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js')
    .then(() => console.log("Service Worker geregistreerd!"))
    .catch(err => console.log("Registratie mislukt:", err));
}