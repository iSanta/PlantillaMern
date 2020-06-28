//Importar dotenv
require('dotenv').config();
//Importa el archivo app.js
const app = require('./app');
//Importar la base de datos
require('./database');

//funcion que inicia el backend
async function main(){
  await app.listen(app.get('port')); //Se inicializa el servidor
  console.log("server en ", app.get('port'));
}


main();
