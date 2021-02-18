const mongoose = require('mongoose');


const restauranteSchema = mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        auto: true
    },
    img: String,
    nome: String,
    titulo: String,
    subtitulo: String,
    texto: String,
    link: String,
    url: String
}, {
    timestamps: true
});

module.exports = mongoose.model('restaurante', restauranteSchema);