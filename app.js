const http = require('http');

// creamos el servidor para escuchar peticiones
http.createServer((req, res) => {

        res.writeHead(200, { 'Content-Type': 'application/json' })

        let salida = {
            nombre: 'Victor',
            edad: 34,
            url: req.url
        }

        res.write(JSON.stringify(salida));

        res.write('\nHola mundo desde el primner servidor');
        res.end();
    })
    .listen(8080);

console.log('Escuchando el puerto 8080');