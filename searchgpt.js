let Client = require('node-rest-client').Client;

// Establecer los parámetros de búsqueda
const apiKey = "TU_CLAVE_DE_API";
const searchTerm = "flores";
const contentType = 1; // Imágenes
const resultsPerPage = 10;

// Construir la URL de búsqueda
const searchUrl = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&text=${searchTerm}&content_type=${contentType}&per_page=${resultsPerPage}&format=json&nojsoncallback=1`;

// Hacer la solicitud de búsqueda
fetch(searchUrl)
  .then(response => response.json())
  .then(data => {
    // Procesar los resultados
    const photos = data.photos.photo;
    photos.forEach(photo => {
      const imageUrl = `https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_q.jpg`;
      const title = photo.title;
      // Mostrar la imagen en el sitio web o aplicación
    });
  })
  .catch(error => {
    console.error(error);
  });
