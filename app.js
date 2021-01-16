/*CONSTANTES EXPRESS*/
const express = require('express');
const app = express();

/*CONSTANTES para acceder a los ROUTES de las paginas principales*/
const routersMain = require ('./routers/main');

/*CONSTANTES PATH estaticos PUBLIC*/
const path = require ('path');
const publicPath = path.resolve (__dirname, './public');

/*INICIO SERVIDOR*/
app.listen(3000, () => {
    console.log("andando en el puerto 3000");
});

/*USO de los PATH estaticos*/
app.use (express.static(publicPath))

/*USO de los PATH dinamicos*/
app.use('/', routersMain);