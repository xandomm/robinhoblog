const mongoose = require('mongoose')


const cadastroSchema = mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        auto: true
    },
    nome: String,
    numero: Number,
    sobrenome: String ,
    email: String
    
    
}, {
    timestamps: true
});

module.exports = mongoose.model('cadastro', cadastroSchema)