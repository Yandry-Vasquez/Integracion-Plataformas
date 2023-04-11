const mongoose = require('mongoose');
const { Schema } = mongoose;

const DisenadorSchema = new Schema({
    id: { type: String, required: true },
    nombre: { type: String, required: true },
    experiencia: { type: String, required: true },   
});

module.exports = mongoose.model("disenador", DisenadorSchema);



