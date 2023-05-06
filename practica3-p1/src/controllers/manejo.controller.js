const ModeloManejo = require('../models/manejo')


const crearManejo = async (req, res) => {
    try {
        const { ...data } = req.body
        const guia = await ModeloManejo.create(data)
        return res.status(201).json(guia)   
    } catch (err) {
        return res.status(500).json(err.message)
    }
}

const listraManejos = async (req, res) => {
    const data = await ModeloManejo.find().populate('ID')

    if(data.length >= 1) return res.status(200).json(data)

    return res.status(200).json({message: 'Data not found'})
}

module.exports = {
    crearManejo, listraManejos
}