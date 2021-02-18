const dbConfig = require('./backend/config/dbConfig')
const mongoose = require('mongoose')
const https = require('https');
const fs = require('fs');

// const { userRouter } = require('./backend/routes/index');
//const privateKey = fs.readFileSync('/etc/letsencrypt/live/lojasfacil.com/privkey.pem', 'utf8');
//const certificate = fs.readFileSync('/etc/letsencrypt/live/lojasfacil.com/cert.pem', 'utf8');
//const ca = fs.readFileSync('/etc/letsencrypt/live/lojasfacil.com/chain.pem', 'utf8');

//const credentials = {
//  key: privateKey,
//  cert: certificate,
//  ca: ca
//};



mongoose.Promise = global.Promise;

mongoose.connect(dbConfig.url,{
  useNewUrlParser: true,
  useUnifiedTopology: true 
}).then( () => {
  console.log("Conectado ao banco de dados")
}).catch(err =>{
  console.log("Erro ao conectar com o banco de dados" +err)
  process.exit();
});

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const app = express();
const port = process.env.PORT || 5000;


app.use(cors())

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// require('./backend/routes/produtoRoute')(app);
require('./backend/routes/restauranteRoute')(app);
 require('./backend/routes/cadastroRoute')(app);
//  require('./backend/routes/authRoute.js')(app);
//  require('./backend/routes/pedidoRoute')(app);
//  require('./backend/controllers/PaymentController')(app);
//  require('./backend/controllers/mensalidadeController')(app);
 require('./backend/routes/uploadRoute')(app);
//  app.use('/api', userRouter);
// // require('./api/routes/pedidoRoutes.js')(app);
app.use('/static', express.static('./backend/uploads'))
// require('./backend/controllers/mensalidadeController')(app);
// const httpsServer = https.createServer(credentials, app);

app.listen(5000, () => console.log(`Listening on port ${port}`));