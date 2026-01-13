const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API de Prueba Node.js',
      version: '1.0.0',
      description: 'Documentación de mi primera API en Node.js',
    },
  },
  apis: ['./index.js'],
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

/**
 * @swagger
 * /:
 *   get:
 *     summary: Verifica que la API esté funcionando
 *     responses:
 *       200:
 *         description: API funcionando correctamente
 */
app.get('/', (req, res) => {
  res.json({ message: 'API funcionando correctamente 🚀' });
});

/**
 * @swagger
 * /api/saludo:
 *   get:
 *     summary: Devuelve un saludo simple
 *     responses:
 *       200:
 *         description: Saludo desde la API
 */
app.get('/api/saludo', (req, res) => {
  res.json({ saludo: 'Hola desde mi primera API en Node.js 😄' });
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
