var express = require('express');
var index = require('./rutas/index');
var usuarios = require('./rutas/usuarios');
var app = express();
app.use(express.static("public"));
app.set('views', './public/vistas')
app.set('view engine', 'pug');
app.use('/', index);
app.use('/usuarios', usuarios);

app.listen(8080, function () {
    console.log("Servidor corriendo");
});