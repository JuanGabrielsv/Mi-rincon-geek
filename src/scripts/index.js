function obtenerPelicula(id) {

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNzdiMThhN2YxMTUwZGYzNGY0YzQ3NDdkOGJkMTg0NCIsIm5iZiI6MTczNDAzNDYyOS4wNDQ5OTk4LCJzdWIiOiI2NzViNDRjNWNjZjRkZjk2NjgyMzBhZDgiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.pa8D48FgWZ14A1gekc9Ik9c-O1qu5GyBSQ6-Kcvyqrk'
        }
    };

    fetch('https://api.themoviedb.org/3/authentication', options)
        .then(res => res.json())
        .then(res => console.log(res))
        .catch(err => console.error(err));

    fetch(`https://api.themoviedb.org/3/movie/${id}?language=es-ES`, options)
        .then(pelicula => pelicula.json())
        .catch(err => console.error(err));

}

function inicioPrograma() {
    const ma = document.getElementById('contenedor-pelis');

    console.log(obtenerPelicula(105))

}
window.addEventListener('DOMContentLoaded', inicioPrograma());