import React from "react"
import { Table, Button,InputGroup,Input } from "reactstrap"
import ProdutoComponent from "./ProdutoComponent"
import { Link } from "react-router-dom"
var backendURL= process.env.REACT_APP_API_URL
class Produtos extends React.Component {
    
    constructor() {
        super()
        this.state = {
            isLoading:true,
            ProdutoData: []
        }
    }

    componentDidMount(){
        fetch(backendURL+"/api/post").then(
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
        const produtoComponents = (this.state.ProdutoData && this.state.ProdutoData.length) ? this.state.ProdutoData.map(produto => <ProdutoComponent  key = {produto._id} nome={produto.nome} id = {produto._id} valor= {produto.valor} />) : <h2 style={{textAlign:"center"}}>A lista de produtos está vazia</h2>;
        const loading = this.state.isLoading ? <h5>Carregando...</h5> : produtoComponents 
        return(
            <div className="concertandobugs">
            <div className="container">
            <h1 style={{color:"black"}}>Textos</h1>
                <div className="form-group">
                <InputGroup>
                    <Input type="query" name='query' id="query" placeholder="Buscar produto"></Input>
                    <Button id="detalhes">Procurar</Button>
                    </InputGroup>
                </div>
                <div className="buttonsProduct">
                    <Button className="btn" color="success" tag={Link} to='/novoProduto' id="addProduct">Novo texto</Button>
                </div>
            <Table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                       
                        <th></th>
                        <th>Deletar?</th>
                    </tr>
                </thead>
                <tbody>
                    {loading}
                </tbody>
            </Table>
        
        </div></div>
        )
        }

    }

export default Produtos