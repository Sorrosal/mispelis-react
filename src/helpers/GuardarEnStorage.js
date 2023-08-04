export const GuardarEnStorage = (clave, elemento) => {

    // Conseguir los elementos que ya tenemos en localstorage
    let elements = JSON.parse(localStorage.getItem(clave));

    // Comprobar si es un array
    if (Array.isArray(elements)) {

        // Añadir elemento nuevo al array
        elements.push(elemento);

    } else {
        // Crear array con el nuevo elemento
        elements = [elemento]
    }

    // Guardar en localstorage
    localStorage.setItem(clave, JSON.stringify(elements));

    //Devolver objeto
    return elemento;
}