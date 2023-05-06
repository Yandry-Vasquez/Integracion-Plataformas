// Un equipo puede ser manejado varias veces

const { Schema, model } = require('mongoose')

const DisenadorSchema = new Schema(
    {
        ID: { type: String },

        NOMBRE: { type: String },
        
        EXPERIENCIA: { type: String },
    },
    {
        versionKey: false
        
    }
)

module.exports = model('coleccionEquipo', DisenadorSchema)