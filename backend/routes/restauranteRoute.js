module.exports = (app) => {
    const restaurante = require('../controllers/restauranteController')
    
    //Cadastrar produto
    app.post('/api/post', restaurante.create);

    //Deletar produto
    app.delete('/api/post/:id',restaurante.delete);

    //Resgatar todos produtos produto
    app.get('/api/post',restaurante.findAll);

    //Resgatar produto pelo id
    app.get('/api/post/find/:url',restaurante.findURL);

    app.get('/api/post/:id',restaurante.findID);
    
    //Atualizar dados produto
    app.put('/api/post/:id',restaurante.update);


}