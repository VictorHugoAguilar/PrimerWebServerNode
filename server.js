const express = require('express')
const app = express()
const color = require('colors');
const colors = require('colors/safe');

const hbs = require('hbs');
// importamos las funciones que tenemos en los helperss
require('./hbs/helpers');

const port = process.env.PORT || 3000;


// creando un middleware
app.use(express.static(__dirname + '/public'));

// registramos el partials
hbs.registerPartials(__dirname + '/views/partials');

// express HBS engine
app.set('view engine', 'hbs');


app.get('/', (req, res) => {

    res.render('home', {
        nombre: '@VictorHugo',
    });

})

app.get('/about', (req, res) => {

    res.render('about', {
        nombre: '@VictorHugo',
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

app.listen(port, () => {
    const date = new Date();
    console.log(colors.yellow('Iniciado desde ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds() + ':' + date.getMilliseconds()))
    console.log(`Escuchando peticiones por el puerto ${port}`.bgCyan);
});