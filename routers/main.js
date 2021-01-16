/*CONSTANTES para acceder a EXPRESS ROUTER*/
const express = require ('express');
const router = express.Router();

/*CONSTANTE para acceder a los controladores que van a mostrar las VIEWS */
const controllers = require ('../controllers/mainController');

/*RUTA para mostrar los VIEW PRINCIPALES (controllers contiene todas los path principales a mostrar "home, about, etc")*/
router.get('/', controllers.home);

module.exports = router;