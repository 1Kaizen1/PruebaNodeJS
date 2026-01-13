const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para leer JSON
app.use(express.json());

// ENDPOINT 1
app.get('/', (req, res) => {
  res.json({
    message: 'API funcionando correctamente 🚀'
  });
});

// ENDPOINT 2
app.get('/api/saludo', (req, res) => {
  res.json({
    saludo: 'Hola desde mi primera API en Node.js 😄'
  });
});

// Arrancar servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
