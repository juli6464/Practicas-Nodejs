//Acceder a Contenido JSON a través de una API RESTful con Node.js

let Client = require('node-rest-client').Client;

let client = new Client();

client.get('https://randomuser.me/api/?results=5', function(datos, respuesta){
    console.log(datos);

    console.log();

    console.log(JSON.stringify(datos));
});