//Importa desde Mongoose el sistema de esquemas y modelos
const {Schema, model} = require('mongoose');


//sub esquema
//const departamentSchema = new Schema({
//  departamentname: {
//    type: String,
//    required: true,
//    trim: true, // NOTE: elimina los espacios en el string
//    unique: true // NOTE: verifica que no exista ningun otro registro igual
//  }
//});



//se crea el esquema para este modelo
const countrySchema = new Schema({
  countryname: {
    type: String,
    required: true,
    trim: true, // NOTE: elimina los espacios en el string
    unique: true // NOTE: verifica que no exista ningun otro registro igual
  },
  population: Number,
  //departament: [departamentSchema]
});
//Se exporta el modelo para ser usado en el controlador
module.exports = model('Country', countrySchema)
