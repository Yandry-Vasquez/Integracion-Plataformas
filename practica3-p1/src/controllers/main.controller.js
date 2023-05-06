const DisenadorSchema = require('../models/disenador.model')



const crearEquipos = async (req, res) => {
    
    const Disenador =  [
        { "ID": "001", "NOMBRE": "Jose Macias", "EXPERIENCIA": "ALTA " },
        { "ID": "002", "NOMBRE": "Yandri Zambrano", "EXPERIENCIA": "MEDIA " },
    ]

    await ModeloEquipo.insertMany(equipo)
    return res.status(201).json({msg: 'Datos guardados'})
}


module.exports = { crearEquipos }