// Mòdul que crea un servidor HTTP amb Express.js
const express = require('express');
const app = express();

// Port d'escolta del servidor
const port = 3000;

// Ruta principal
app.get('/', (req, res) => {
  res.send('Hola món! Aquest és el meu primer servidor Node.js');
});

// Inici del servidor: Express 5 passa l'error d'inici al callback.
app.listen(port, (error) => {
  if (error) {
    console.error('No s\'ha pogut iniciar el servidor:', error.message);
    return;
  }

  console.log(`Servidor en funcionament a http://localhost:${port}`);
});