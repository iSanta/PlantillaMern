//Importar Mongoose
const mongoose = require('mongoose');
//se asigna la uri que alojara la base de datos, para una conexion no local, se debe asignar uri, user y pass
const URI = process.env.MONGODB_URI ? process.env.MONGODB_URI : 'mongodb://localhost/databasetest';

//conectar a la base de datos usando Mongoose
mongoose.connect(URI, {
  useNewUrlParser: true,
  useCreateIndex: true
})

//realiza una prueba de conexion
const connection = mongoose.connection;


//cuando la conexion sea exitosa, manda un mensaje en la consola
connection.once('open', () => {
  console.log('conectado a la DB');
})
