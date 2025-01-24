window.addEventListener('DOMContentLoaded', async () => {
    // Configuración de constantes
    const API_KEY = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNzdiMThhN2YxMTUwZGYzNGY0YzQ3NDdkOGJkMTg0NCIsIm5iZiI6MTczNDAzNDYyOS4wNDQ5OTk4LCJzdWIiOiI2NzViNDRjNWNjZjRkZjk2NjgyMzBhZDgiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.pa8D48FgWZ14A1gekc9Ik9c-O1qu5GyBSQ6-Kcvyqrk';
    const BASE_URL = 'https://api.themoviedb.org/3';
    const URL_IMAGE = 'https://image.tmdb.org/t/p/w300';

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: API_KEY,
        },
    };

    // Función para realizar solicitudes
    async function fetchData(endpoint) {
        const response = await fetch(`${BASE_URL}${endpoint}`, options);
        if (!response.ok) {
            throw new Error(`Error en la solicitud: ${response.status} ${response.statusText}`);
        }
        return response.json();
    }

    // Función principal
    try {
        // Obtener datos de la película
        const pelicula = await fetchData('/movie/105?language=es-ES');
        console.log('Datos de la película:', pelicula);

        // Mostrar imagen en el DOM
        const main = document.querySelector('main');
        const imagen = document.createElement('img');
        imagen.src = `${URL_IMAGE}${pelicula.poster_path}`;
        imagen.alt = pelicula.title || 'Póster de la película';
        main.appendChild(imagen);
    } catch (error) {
        console.error('Error en la operación:', error.message);
    }
});
