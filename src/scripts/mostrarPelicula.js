export async function mostrarPelicula(fetchData, URL_IMAGE, id) {
    try {
        const pelicula = await fetchData(`/movie/${id}?language=es-ES`);

        // Mostrar imagen en el DOM
        const section1 = document.getElementById('section1');
        const article = document.createElement('article');
        const img = document.createElement('img');

        img.style.borderRadius = '0.5rem';
        img.src = `${URL_IMAGE}${pelicula.poster_path}`;
        img.alt = pelicula.title || 'Póster de la película';

        section1.appendChild(article);
        article.appendChild(img);

    } catch (error) {
        console.error('Error en la operación:', error.message);
    }
}