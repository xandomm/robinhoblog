import React from 'react';
import {Form,FormGroup,Input,Button} from 'reactstrap'
require('../login.css')


class Login extends React.Component{

    constructor(){
        super()
        this.state={
            user:"",
            pwd:"",
            incorrect:null
        }
        this.authenticate=this.authenticate.bind(this)
        this.handleChange=this.handleChange.bind(this)
    }

    handleChange(event){
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]:value
        });

        console.log(value)
    }
    
    authenticate(event){
        event.preventDefault();
        if(this.state.user === 'admin' && this.state.pwd === '123'){
            const secretCode = "lkqklosncploqkluleqklmoctnc"
            sessionStorage.setItem('secretCode', secretCode);
            console.log(secretCode)
            window.location.reload()

        }
        else{
            this.setState({
                user:"",
                pwd:"",
                incorrect:'Usuário ou senha incorreto'
            })
        }
    }

    render(){
        return (
            <div className="row justify-content-center h-100">
    <div id='loginBox' className="col-sm  my-auto" style={{textAlign:'center',padding:'20px', maxWidth:'500px', backgroundColor: 'white'}}>
   <h1 style={{fontSize:'30px'}}>Dashboard </h1>
   <p>{this.state.incorrect}</p>
   <Form onSubmit={this.authenticate} method="post">
    <FormGroup>
        <Input type="text" name="user" value={this.state.user} id="userForm" placeholder="Usuário" onChange={this.handleChange}/>
    </FormGroup>
    <FormGroup>
        <Input type="password" name="pwd" value={this.state.pwd} id="pwdForm" placeholder="Senha" onChange={this.handleChange}/>
    </FormGroup>
    
    <Button
         
    id="login">Logar</Button>
    </Form>
</div>
</div>)
    }
}

export default Login