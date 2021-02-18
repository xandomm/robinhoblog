
const pedido = require('../schema/pedidoSchema')

//Cadastrar produto
exports.create = (req,res) => {
    pedido.create(req.body)
    .then(produtos => {
        res.send("Produto cadastrado com sucesso")
    })
    .catch(err => {
        return res.status(500).send({
            message: err.message || "Erro ao cadastrar produto"
        })
    })
}
//Achar todos produtos
exports.findAll = (req,res) => {
    pedido.find({cardapio: req.params.url})
.then(pedido => {
        res.send(pedido);
    })
.catch(err => {
    res.status(500).send({
        message: err.message || "Erro ao resgatar produtos"
    })
}) 
}
//Upload Image
exports.uploadImg = (req,res) => {
    
}



//Achar produto pelo ID
exports.findID = (req,res) => {
    pedido.find({_id: req.params.id})
    .then(pedido => {
        if(!pedido) {
            return res.status(404).send({
                message: "Não há produto com ID " + req.params.id
            
        })
    }
        res.send(pedido)
    0})
    .catch(err => {
        return res.status(500).send({
            message: err.message || "Erro ao encontrar produto"
        })
    })
}

//Deletar Produto
exports.delete = (req,res) => {
   pedido.findByIdAndDelete(req.params.id)
    .then(produto => {
        if(!produto) {
            return res.status(404).send({
                message: "Não há produto com ID " + req.params.nome
            })
        }
        res.send({message: "Produto deletado com sucesso"})
    })
    .catch(err => {
        return res.status(500).send({
            message: err.message || "Erro ao deleter produto"
        })
    })
}
//Atualizar dados do produtos
exports.update = (req,res) => {
    pedido.findByIdAndUpdate(req.params.id, req.body)
    .then(pedido => {
        res.send("Produto atualizado com sucesso")
    })
    .catch(err => {
        return res.status(500).send({
            message: err.message
        })
    })
}


