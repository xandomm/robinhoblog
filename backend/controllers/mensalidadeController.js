module.exports = (app) => {
//5031433215406351
    const axios = require('axios')
    const bodyParser = require('body-parser');
    const mercadopago = require('mercadopago');
    const addMonths = require('@jsbits/add-months')
    var expires;
    var g =Date.now();
    var catalogo={
      _id: '',
      nome: '',
      telefone: '',
      endereco: '',
      valeRefeicao: '',
      abertura: '',
      fechamen: '',
      desc:'',
      cidade:'',
      frete:'',
      estado:'',
      CEP:'',
      url:'',
      img: '',
      expires: ''
    }
    var parcelas = 1;
    
    
    // Set the mercadopago credentials
    mercadopago.configurations.setAccessToken('TEST-4728085858733444-112314-13e5e33da0e94fa2fe99e74c98451622-443219219');
    
    // Attach the body-parser
    app.use(bodyParser.urlencoded({ extended: false }));
    var backendURL= 'https://facilita.link/api'
    app.post('/pay', function (req, res) {
    
    
    
    
    
    
      axios.get(backendURL+'/api/restaurante/'+ req.body.id)
      .then(res => {
          console.log(res.data);
          catalogo = res.data;
     
      })
      console.log(`Parameters receive ${JSON.stringify(req.body)}`);
      var planos= req.body.plano;
      var preco;
      var meses;
      switch (planos) {
        case 'plano1':
          preco = 39.90;
          meses = 3;
          break;
        case 'plano2':
          preco = 358.8;
          meses = 6;
          break;
      
    
        default:
          console.log("Irreconhecivel " + planos + ".");
      }
      //5031433215406351
      // Creating payment payload
      const paymentData = {
     
            transaction_amount: Number(preco),
            token: req.body.token,
            description: req.body.plano,
            installments: parcelas,
            payment_method_id: req.body.paymentMethodId,
            issuer_id: req.body.issuer,
            payer: {
              email: req.body.email,
              identification: {
                type: req.body.docType,
                number: req.body.docNumber,
              },
            },
      };
    
      // Do payment
      mercadopago.payment.save(paymentData).then((payment) => {
        catalogo = { 
          _id:req.body.id,
          nome:catalogo.nome,
          telefone:catalogo.telefone,
          endereco:catalogo.endereco,
          valeRefeicao:catalogo.valeRefeicao,
          abertura: catalogo.abertura,
          fechamen: catalogo.fechamen,
          desc:catalogo.desc,
          cidade:catalogo.cidade,
          frete:catalogo.frete,
          estado:catalogo.estado,
          CEP:catalogo.CEP,
          url:catalogo.url,
          img: catalogo.id,
          expires: addMonths(new Date(), meses, true)
        },
        
        axios.put(backendURL+'/api/restaurante/'+req.body.id,{
          
            _id:req.body.id,
            nome:catalogo.nome,
            telefone:catalogo.telefone,
            endereco:catalogo.endereco,
            valeRefeicao:catalogo.valeRefeicao,
            abertura: catalogo.abertura,
            fechamen: catalogo.fechamen,
            desc:catalogo.desc,
            cidade:catalogo.cidade,
            frete:catalogo.frete,
            estado:catalogo.estado,
            CEP:catalogo.CEP,
            url:catalogo.url,
            img: catalogo.id,
            expires: addMonths(new Date(), meses, true)
          }
      )
        
        console.log('Payment done!');
        res.send('Pagamento concluido com sucesso! clique aqui! <br> <a href="https://facilita.link/dashboard"> Feito</a>')
      
      }).catch(function (error) {
        console.log(`There was an error making the payment ${error.message}`);
        res.status(500).send({
          message: error.message
        });
      });
      res.location='/dashboard'
    });
    
    
    }
    //4235647728025682	
    // }curl -X POST  -H "Content-Type: application/json"  -H 'Authorization: Bearer TEST-1922384788759927-100402-4002afcffda4c9a735b8b62869240180-443219219'  "https://api.mercadopago.com/users/test_user"  -d '{"https://lojasfacil.com:5000/pay":"MLB"}'
    