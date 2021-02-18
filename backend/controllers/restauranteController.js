const Restaurante = require('../schema/restauranteSchema')

//Cadastrar Restaurante

exports.create = (req,res) => {

    Restaurante.create(req.body)

    .then(restaurante => {

        res.send("Restaurante cadastrado com sucesso")

    })

    .catch(err => {

        return res.status(500).send({

            message: err.message || "Erro ao cadastrar Restaurante"

        })

    })

}

//Achar todos produtos

exports.findAll = (req,res) => {

    Restaurante.find()

    .then(restaurante => {

        res.send(restaurante);

    })

    .catch(err => {

        res.status(500).send({

            message: err.message || "Erro ao resgatar restaurante"

        })

    }) 

}
exports.findURL = (req,res) => {
    Restaurante.find({url: req.params.url})
.then(restaurante => {
        res.send(restaurante);
    })
.catch(err => {
    res.status(500).send({
        message: err.message || "Erro ao resgatar restaurante"
    })
}) 
}

//Upload Image

exports.uploadImg = (req,res) => {

}

//Achar produto pelo ID

exports.findID = (req,res) => {

    Restaurante.findById(req.params.id)

    .then(restaurante => {

        if(!restaurante) {

            return res.status(404).send({

                message: "Não há restaurante com ID " + req.params.id

        })
    }
    
    res.send(restaurante)
    
    0})
    
    .catch(err => {
    
        return res.status(500).send({
    
            message: err.message || "Erro ao encontrar restaurante"
    
        })
    
    })

}

//Deletar Produto

exports.delete = (req,res) => {

    Restaurante.findByIdAndDelete(req.params.id)

    .then(restaurante => {

        if(!restaurante) {

            return res.status(404).send({

                message: "Não há restaurante com ID " + req.params.id

            })

        }

        res.send({message: "Restaurante deletado com sucesso"})

    })

    .catch(err => {

        return res.status(500).send({

            message: err.message || "Erro ao deletar restaurante"

        })

    })

}

//Atualizar dados do produtos

exports.update = (req,res) => {
    console.log(req.body)
    Restaurante.findByIdAndUpdate({ _id: req.params.id }, { '$set': req.body })
    .then(restaurante => {

        res.send("Restaurante atualizado com sucesso" +restaurante)

    })    .catch(err => {

        return res.status(500).send({

            message: err.message

        })

    })

}