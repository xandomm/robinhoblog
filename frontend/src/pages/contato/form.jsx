
import {useState} from 'react'
import axios from 'axios'
import './form.css'

var backendURL= process.env.REACT_APP_API_URL

export default ()=>{
       
    const [user, setUser] = useState({
        nome: "",
    numero: null,
    
    email: "",
    mensagem: ""
    })

    const handleOnChange = event => {
        const { name, value } = event.target;
        setUser({ ...user, [name]: value });
      };
    
    const onSubmit = ()=> {
        const data= JSON.stringify(user);
 
        axios.post(backendURL+'/api/cadastro', user, {headers: { 'Content-Type': 'application/json'}})
        .then(res=>{
        window.alert('Em breve entraremos em contato contigo!')
        setUser({
            nome: "",
        numero: null,
        
        email: "",
        mensagem: ""
        })  
        }        ).catch((err) => {
            console.log("AXIOS ERROR: ", err);
          })
    }
    console.log(user)
    
    return(<div>
        <div class="container contact-form">
            <div class="contact-image">
                {/* <img src="https://image.ibb.co/kUagtU/rocket_contact.png" alt="rocket_contact"/> */}
            </div>
            <form >
                <h3>Fale conosco!</h3>
               <div class="row">
                    <div class="col-md-6">
                        <div class="form-group">
                            <input type="text" name="nome" class="form-control" placeholder="Nome*"  required onChange={handleOnChange} value={user.nome}/>
                        </div>
                        <div class="form-group">
                            <input type="text" name="email" class="form-control" placeholder="Email *" required onChange={handleOnChange} value={user.email} />
                        </div>
                        <div class="form-group">
                            <input type="text" name="numero" class="form-control" placeholder="Número" required onChange={handleOnChange} value={user.numero} />
                        </div>
                       
                        <div class="form-group">
                            <textarea name="mensagem" class="form-control" placeholder="Digite sua mensagem!" required onChange={handleOnChange} value={user.mensagem} style={{width: '100%', height: '150px'}}></textarea>
                        </div>
                  
                        <div class="form-group enviar">
                            <input type="submit" name="btnSubmit" onClick={onSubmit} class="btnContact" value="Enviar" />
                        </div>
                    </div>
                    <div class="col-md-6">
                            <textarea name="mensagem" class="form-control" placeholder="Digite sua mensagem!" required onChange={handleOnChange} value={user.mensagem} style={{width: '100%', height: '150px'}}></textarea>
                        </div>
                </div>

            </form>
<br/>

</div>
    </div>)
}