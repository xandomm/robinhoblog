import React from 'react'
import {Form,FormGroup,Label,Input, Button} from 'reactstrap'
import ReactDOM from 'react-dom';

import { Editor } from '@tinymce/tinymce-react';
import Texto from './text'
import Parser from 'html-react-parser';
var backendURL= process.env.REACT_APP_API_URL





const str = 'ÁÉÍÓÚáéíóúâêîôûàèìòùÇç/.,~!@#$%&_-12345';
class NovoProduto extends React.Component {

    constructor(){
        super()
        this.state= {
            img: null,
            nome: null,
            titulo: null,
            subtitulo: null,
            texto: '<p> escreva aqui </p>',
            link: null,
            url: null ,
            
            
        };
       
        this.handleChange = this.handleChange.bind(this);
        this.handleFileChange = this.handleFileChange.bind(this);
        this.cadastrarProduto = this.cadastrarProduto.bind(this);
    }
    handleEditorChange = (texto) => {
        this.setState({texto})
        console.log(this.state.texto)
      }
    componentDidMount(){
        fetch(backendURL+'/api/post').then(
            res => res.json()
            ).then(
                data => this.setState({
                    id: data+1
                })
            )
            }
 
    cadastrarProduto(){
        const files = this.state.img
        const formData = new FormData()
        formData.append('file',files)
        fetch(backendURL+'/api/upload/'+this.state.url,{
            method:"POST",
            body:formData
        }).then( this.setState({
            img: this.state.url +'.png'
        }), window.alert(this.state.img))
        var data = { 
            img: this.state.img,
            nome: this.state.nome,
            titulo: this.state.titulo,
            subtitulo: this.state.subtitulo,
            texto: this.state.texto,
            link: this.state.link,
            url: this.state.nome.normalize('NFD').replace(/([\u0300-\u036f]|[^0-9a-zA-Z])/g, ''),
            img: this.state.img_link
        }

        data = JSON.stringify(data)
        console.log(data)
        fetch(backendURL+'/api/post',{
            method:"POST",
            headers: {'Content-Type': 'application/json'},
            body:data
        }).then(alert('Produto Cadastro'))
        .catch(err => alert(err))
        window.location.href = "/Produtos";

        fetch(backendURL+'/api/counter/inc/productid',{
        method:"PUT"})

    }
     
    handleFileChange(event){
        const files = event.target.files[0]
        this.setState({
            img: files
        })
    }

    handleChange(event){
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]:value
        });
        if (name == 'nome' && this.state.nome!=null){
            this.setState({url: this.state.nome.normalize('NFD').replace(/([\u0300-\u036f]|[^0-9a-zA-Z])/g, '')})
        }
    }

    render(){
        

        return(
            <div className="concertandobugs">
            <div className="container">
                <h1 style={{color: "black"}}>Cadastrar texto</h1>
                <Form id="form">
                    <FormGroup >
                 

                        
                    <Label style={{color:"black"}} for="nomeProduto">NOME</Label>

<Input value={this.state.nome} type="text" name="nome" id="nomeProduto" onChange={this.handleChange}/>
<br/>

                        <Label style={{color:"black"}} for="nomeProduto">TÍTULO</Label>

                        <Input value={this.state.titulo} type="text" name="titulo" id="nomeProduto" onChange={this.handleChange}/>
                        <br/>
                        <Label style={{color:"black"}} for="refProduto">SUBTÍTULO</Label>
                        <Input value={this.state.subtitulo} type="text" name="subtitulo" id="refProduto" onChange={this.handleChange}/>
                        <br/>
                        {console.log(this.state)}
                        <Editor
        initialValue={this.state.texto}
        apiKey="4sln0v4mod2utgq086s7kegv8r57lp82t6dg90qbt6ditgit"
        init={{
       
          menubar: false,
          plugins: [
            'advlist autolink lists link image charmap print preview anchor',
            'searchreplace visualblocks code fullscreen',
            'insertdatetime media table paste code help wordcount'
          ],
          toolbar:
            'undo redo | formatselect | bold italic backcolor | \
            alignleft aligncenter alignright alignjustify | \
            bullist numlist outdent indent | removeformat | help'
        }}
        onEditorChange={this.handleEditorChange}
      />
     {Parser(this.state.texto)}
 
                        
                     
                        <Label style={{color:"black"}} for="imgProduto">Fazer upload da imagem</Label>
                        <Input style={{color:"black"}} type="file" name="img" id="imgProduto" onChange={this.handleFileChange}/>
 
                    </FormGroup>  
                </Form>
                <Button onClick={this.cadastrarProduto}className="btn buttons" id="produtoSubmit">Cadastrar Texto</Button>
            </div>
            </div>
        )
    }
}

export default NovoProduto