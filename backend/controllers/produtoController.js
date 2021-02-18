
const Produto = require('../schema/produtoSchema')

//Cadastrar produto
exports.create = (req,res) => {
    Produto.create(req.body)
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
    Produto.find({cardapio: req.params.url})
.then(produto => {
        res.send(produto);
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
    Produto.find(req.params.id)
    .then(produto => {
        if(!produto) {
            return res.status(404).send({
                message: "Não há produto com ID " + req.params.id
            
        })
    }
        res.send(produto)
    0})
    .catch(err => {
        return res.status(500).send({
            message: err.message || "Erro ao encontrar produto"
        })
    })
}

//Deletar Produto
exports.delete = (req,res) => {
    Produto.findByIdAndDelete(req.params.id)
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
    Produto.findByIdAndUpdate(req.params.id, req.body)
    .then(produto => {
        res.send("Produto atualizado com sucesso")
    })
    .catch(err => {
        return res.status(500).send({
            message: err.message
        })
    })
}

//Diminuir do estoque
exports.decrement = (req,res) => {
    Produto.findByIdAndUpdate(req.params.id,{ $inc: { qtd: -1 } })
    .then ( counter => {
        res.send("Valor decrementado")
    })
}