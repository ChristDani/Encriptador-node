const express = require('express');
const morgan = require('morgan');
const path = require('path');

const app = express();

// router
const HomeRoutes = require('./public/routes/home');

app.use('/public', express.static(path.join(__dirname, 'public/static'))); // con esto es el ejs

app.set('case sensitive routing', true); // es una variable predefinida por express que nos ayuda a reconocer las rutas conforme a su nombre, con sensivilidad de caracteres.
app.set('serverName', 'Challenge ONE: Principiante en programación'); // con el metodo "set" creamos una variable que querramos usar más tarde con el metodo "get"
app.set('port', 3000);

// configuramos la ubicacion de la carpeta views
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'public/view'));

// middlewares
app.use(express.json());
app.use(morgan('dev'));

// routes
app.use(HomeRoutes);


app.listen(app.get('port'),()=>{console.log(`Servidor ${app.get('serverName')} activo en el puerto: ${app.get('port')}`);}); 