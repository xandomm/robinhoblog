import React from "react"
import {Button} from 'reactstrap'
import {Link} from 'react-router-dom'
var backendURL= process.env.REACT_APP_API_URL
class DetalhesProduto extends React.Component{



    constructor(props){
        super(props)
        this.state = {
            id: this.props.match.params.id,
            isLoading:true,
            ProdutoData: {}
        }
    }

    componentDidMount(){
        fetch(backendURL+"/api/post/"+this.state.id).then(
            produtos => produtos.json()
            )
        .then(data => {
            this.setState({
                ProdutoData: data,
                isLoading: false
            })
        })
        .catch(err => console.log(err))

    }

    render(){
        return(
            <div className="concertandobugs">
        <div style={{marginBottom:"15px"}} className="container">
            <h1 style={{color: "black"}}>Detalhes do Produto</h1>
            <div className="row">
                <div className="col-sm">
                    <img style={{width:"250px"}} alt='' src={process.env.PUBLIC_URL+"/uploads/"+this.state.id+".png"}></img>
                </div>
            </div>
            <div className="row">
                <div className="col-sm">
                    <h3 style={{color:"black"}}>Nome do produto:</h3>
                    <p style={{color: "black",fontSize:"25px"}}>{this.state.ProdutoData.nome}</p>
                </div>
                <div className="col-sm">
                    <h3 style={{color:"black"}}>Referência do produto:</h3>
                    <p style={{color: "black",fontSize:"25px"}}>{this.state.ProdutoData.ref}</p>
                </div>
                <div className="col-sm">
                    <h3 style={{color:"black"}}>Valor do produto:</h3>
                    <p style={{color: "black",fontSize:"25px"}}>R$ {this.state.ProdutoData.valor}</p>
                </div>
            </div>
                <div className="row">
                    <div className="col-sm">
                        <h3 style={{color: "black"}}>Descrição do Produto</h3>
                        <p style={{color:"black",fontSize:"25px"}}>{this.state.ProdutoData.desc}</p>
                    </div>
                    <div className="col-sm">
                        <h3 style={{color: "black"}}>Categoria</h3>
                        <p style={{color:"black",fontSize:"25px"}}>{this.state.ProdutoData.categoria}</p>
                    </div>
                    <div className="col-sm">
                        <h3 style={{color: "black"}}>Quantidade em estoque</h3>
                        <p style={{color:"black",fontSize:"25px"}}>{this.state.ProdutoData.qtd}</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm">
                        <Button className="btn btn-color" tag={Link} to={"/editarProduto/" + this.state.id }> ✎ Editar</Button>
                    </div>
                </div>  
        </div >
 </div>
           )
    }
}

export default DetalhesProduto