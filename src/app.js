const express = require('express');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    mensaje: 'Aplicación CI/CD funcionando correctamente',
    estado: 'OK',
  });
});

const PORT = process.env.PORT || 4000;

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en puerto ${PORT}`);
  });
}

module.exports = app;