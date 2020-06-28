const countryCtrl = {};
//Importar el modelo para este controlador
const countryModel = require('../models/CountryModel');

// WARNING: aqui se colocan todos lo metodos que consultara la api
countryCtrl.createCountry = async (req,res) => {
  //se almacena la informacion que se nos envia desde el frontend
  const {countryname, population} = req.body;
  //con la informacionde llega del frontend se crea el esquema del modelo
  const newCountry = new countryModel({
    countryname: countryname,
    population: population
  })
  await newCountry.save();
  res.json({"message": "Registro creado"})
};


//se exporta todo el controlador para ser usado en la ruta
module.exports = countryCtrl;
