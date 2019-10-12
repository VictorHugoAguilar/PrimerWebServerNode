const express = require('express')
const app = express()
const color = require('colors');

// creando un middleware
app.use(express.static(__dirname + '/public'));

// express HBS engine
app.set('view engine', 'hbs');

app.get('/', (req, res) => {

    res.render('home', {
        nombre: '@VictorHugo',
        anio: new Date().getFullYear()
    });

})

/*
app.get('/', (req, res) => {

    let salida = {
        nombre: 'Victor',
        edad: 34,
        url: req.url
    }

    res.send(salida)
        // res.send('<html> <body> <h1> Hola Victor </h1></body> </html>')

    // res.send('Hola mundo desde servidor express')
})
*/

app.listen(3000, () => {
    console.log('Escuchando peticiones por el puerto 3000'.bgCyan)
});