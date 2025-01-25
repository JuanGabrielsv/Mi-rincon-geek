import { fetchData } from "./fetchData.js";
import { mostrarPelicula } from "./mostrarPelicula.js";
import { URL_IMAGE } from "./constantes.js";

window.addEventListener('DOMContentLoaded', async () => {

    await mostrarPelicula(fetchData, URL_IMAGE, 105);
    await mostrarPelicula(fetchData, URL_IMAGE, 8358);
    await mostrarPelicula(fetchData, URL_IMAGE, 847);
    await mostrarPelicula(fetchData, URL_IMAGE, 9340);
    await mostrarPelicula(fetchData, URL_IMAGE, 11216);
    await mostrarPelicula(fetchData, URL_IMAGE, 637);
    await mostrarPelicula(fetchData, URL_IMAGE, 424);
    await mostrarPelicula(fetchData, URL_IMAGE, 273248);
    await mostrarPelicula(fetchData, URL_IMAGE, 157336);
    await mostrarPelicula(fetchData, URL_IMAGE, 120);
    await mostrarPelicula(fetchData, URL_IMAGE, 87);
    await mostrarPelicula(fetchData, URL_IMAGE, 497);

});

