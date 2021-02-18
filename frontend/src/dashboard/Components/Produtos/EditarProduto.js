import React from 'react'
import {Form,FormGroup,Label,Input, Button} from 'reactstrap'

class NovoProduto extends React.Component {

    constructor(props){
        super(props)
        this.state= {
            id: this.props.match.params.id,
            nome: null,
            desc: null,
            ref:null,
            categoria: null,
            valor: 0,
            qtd: null,
            img: null,
            img_link:null
            
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleFileChange = this.handleFileChange.bind(this);
        this.cadastrarProduto = this.cadastrarProduto.bind(this);
    }

    componentDidMount(){
        fetch("http://casadaslaceiras.store:5000/api/produto/"+this.state.id).then(
            produtos => produtos.json()
            )
        .then(data => {
            this.setState({
                nome:data.nome,
                desc:data.desc,
                ref:data.ref,
                categoria:data.categoria,
                valor:data.valor,
                qtd:data.qtd

            })
        })
        .catch(err => console.log(err))

    }
 
    cadastrarProduto(){
        var res = window.confirm("Tem certeza que deseja alterar este produto?")
        if (res === true) { 
        const files = this.state.img
        if(files !== null){
        const formData = new FormData()
        formData.append('file',files)
        fetch('http://191.252.177.239//api/upload/del/'+this.state.id,{
            method:"DELETE"
        });
        fetch('http://casadaslaceiras.store:5000/api/upload/'+this.state.id,{
            method:"POST",
            body:formData
        }).then( this.setState({
            img_link: this.state.id+'.png'
        }))
            }
        var data = { 
            _id: this.state.id,
            nome: this.state.nome,
            desc: this.state.desc,
            ref: this.state.ref,
            categoria: this.state.categoria,
            valor: this.state.valor,
            qtd: this.state.qtd,
            img: this.state.img_link,
        }

        data = JSON.stringify(data)
        console.log(data)
        fetch('http://casadaslaceiras.store:5000/api/produto/'+this.state.id,{
            method:"PUT",
            headers: {'Content-Type': 'application/json'},
            body:data
        }).then(alert('Produto alterado com sucesso'))
        .catch(err => alert(err))
        window.location.href = "/Produtos";
    }

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

        console.log(value)
    }

    render(){
        console.log(this.state.id)
        return(
            <div className="concertandobugs">
            <div className="container">
                <h1 style={{color: "black"}}>Editar Produto</h1>
                <Form id="form">
                    <FormGroup >
                        <Label style={{color:"black"}} for="nomeProduto">Nome do Produto</Label>
                        <Input value={this.state.nome} type="text" name="nome" id="nomeProduto" onChange={this.handleChange}/>
                        
                        <Label style={{color:"black"}} for="descProduto">Descrição do produto</Label>
                        <Input value={this.state.desc} type="text" name="desc" id="descProduto " onChange={this.handleChange}/>
                        
                        <Label style={{color:"black"}} for="refProduto">Referência do produto</Label>
                        <Input value={this.state.ref} type="text" name="ref" id="refProduto" onChange={this.handleChange}/>
                        
                        <Label style={{color:"black"}} for="categoriaProduto">Categoria do produto</Label>
                        <Input value={this.state.categoria} type="text" name="categoria" id="categoriaProduto" onChange={this.handleChange}/>

                        <Label style={{color:"black"}} for="valorProduto">Valor do produto</Label>
                        <Input value={this.state.valor} type="number" step="0.01" name="valor" min="0.01" id="valorProduto" onChange={this.handleChange}/>

                        <Label style={{color:"black"}} for="qtdProduto">Quantidade em estoque</Label>
                        <Input value={this.state.qtd} type="number" step="1" name="qtd" min="1" id="qtdProduto" onChange={this.handleChange}/>

                        <Label style={{color:"black"}} for="imgProduto">Fazer upload da imagem</Label>
                        <Input style={{color:"black"}} type="file" name="img" id="imgProduto" onChange={this.handleFileChange}/>
 
                    </FormGroup>  
                </Form>
                <Button onClick={this.cadastrarProduto}className="btn btn-success" id="produtoSubmit">Confirmar Alterações</Button>
            </div></div>
        )
    }
}

export default NovoProduto