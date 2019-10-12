const hbs = require('hbs');

// creando un helper que es una funcion que se ejecuta cuando el template lo requiere
// ejemplo creamos un helper que nos devuelve el anio actual
hbs.registerHelper('getAnio', () => {
    return new Date().getFullYear()
});

// creamos otro helper que transforma en capitalice
hbs.registerHelper('capitalizar', (texto) => {
    let palabras = texto.split(' ');
    palabras.forEach((palabra, idx) => {
        palabras[idx] = palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();
    });
    return palabras.join(' ');
});