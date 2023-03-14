let Client = require('node-rest-client').Client;
// Establecer los parámetros de búsqueda
const apiKey = "a274795b1dad3df8d54018c4c1b41763";
const searchTerm = "Diclofenaco";
const contentType = 1; // Imágenes
const resultsPerPage = 10;


let clienteRest = new Client();

//url ejemplo Simeticona 92 HIDROXIDO DE ALUMIMIO + SIMETICONA X 360 ML SUSP COASPHARMA 
//https://www.flickr.com/photos/196437233@N02/52339421311/in/photolist-2mQyn7v-K59Gyt-r8LMTb-2mCC5qJ-2mmMcBS-2nK4dtH
clienteRest.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&text=${searchTerm}&content_type=${contentType}&per_page=${resultsPerPage}&format=json&nojsoncallback=1`, function(datos, respuesta) {
    console.log(datos);

    console.log();

    datos.photos.photo.forEach((foto) => {
        console.log(foto);
    });
});