import { BASE_URL } from "./constantes.js";
import { options } from "./constantes.js";

// Función para realizar solicitudes
export async function fetchData(endpoint) {

    const response = await fetch(`${BASE_URL}${endpoint}`, options);
    if (!response.ok) {
        throw new Error(`Error en la solicitud: ${response.status} ${response.statusText}`);
    }
    return response.json();
}