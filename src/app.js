// Importar express
const express = require('express');
//Importar cors
const cors = require('cors');
//ejecutar express como la app principal del backend
const app = express();
//se le indica a la app cual sera el puerto para el backend
app.set('port', process.env.PORT || 4000);
//se le indica a la app el tipo de erramientas que usara
app.use(cors());
app.use(express.json());




// WARNING: RUTAS - lista de rutas que la api reconocera
app.use('/api/country', require('./routes/country'));


module.exports = app;
