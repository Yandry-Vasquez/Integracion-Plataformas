const { crearEquipos, crearPiezas } = require('../controllers/main.controller')

const router = require('express').Router()

router.get('/', (req, res) => res.send('Hola Mundo'))


router.post('/api/v1/manejo', crearManejo)
router.get('/api/v1/manejos', listraManejos)

module.exports = router