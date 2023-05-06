const mongoose = require('mongoose')

module.exports.connection = async () => {
    await mongoose.set("strictQuery", false).connect(process.env.MONGO_URI)
    console.log('Conexion exitosa con la base de datos')
}