const express = require('express');
const swaggerJsdoc = require('swagger-jsdoc');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

/* ======================
   SWAGGER CONFIG
====================== */
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

/* ======================
   SWAGGER ENDPOINTS
====================== */

// Swagger UI (HTML usando CDN)
app.get('/api-docs', (req, res) => {
  res.send(`
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8" />
  <title>Swagger UI</title>
  <link
    rel="stylesheet"
    href="https://unpkg.com/swagger-ui-dist/swagger-ui.css"
  />
</head>
<body>
  <div id="swagger-ui"></div>

  <script src="https://unpkg.com/swagger-ui-dist/swagger-ui-bundle.js"></script>
  <script src="https://unpkg.com/swagger-ui-dist/swagger-ui-standalone-preset.js"></script>

  <script>
    window.onload = () => {
      SwaggerUIBundle({
        url: '/swagger.json',
        dom_id: '#swagger-ui',
        presets: [
          SwaggerUIBundle.presets.apis,
          SwaggerUIStandalonePreset
        ],
        layout: "StandaloneLayout"
      });
    };
  </script>
</body>
</html>
  `);
});

// Swagger JSON
app.get('/swagger.json', (req, res) => {
  res.json(swaggerSpec);
});

/* ======================
   API ENDPOINTS
====================== */

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
  res.json({
    message: 'API funcionando correctamente !Vamoooo conoooooo!'
  });
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
  res.json({
    saludo:
      'Hola desde mi primera API en Node.js 😄 creo que este es el metodo Loren'
  });
});

/* ======================
   SERVER
====================== */
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
