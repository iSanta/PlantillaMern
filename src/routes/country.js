//Importa el sistema de rutas de express
const { Router } = require('express');
//Se crea un objeto que sera el enrutador
const router = Router();
//se importan los metodos que se usaran desde el controlador
const {createCountry} = require("../controllers/CountryController");


router.route('/')
  //.get()
  .post(createCountry)
  //.delete();
  //.patch();

//router.route('/:id')
  //.get();
  //.post();
  //.delete();
  //.patch();

module.exports = router;
