import React from "react"
import Footer from "./Footer"
import Header from "./Header"
import Home from "./Home"
import Pedidos from "./Pedidos/Pedidos"
import Produtos from "./Produtos/Produtos"
import NovoProduto from "./Produtos/NovoProduto"
import DetalhesProduto from "./Produtos/DetalhesProduto"
import DetalhesPedido from "./Pedidos/DetalhesPedido"
import EditarProduto from "./Produtos/EditarProduto"
import {BrowserRouter, Switch, Route} from "react-router-dom";
require('../index.css');

class App extends React.Component{

    render(){
    return(
        <BrowserRouter>
        <div>
        <Header />
        <Switch>
            <Route exact path={"/"} component={Home} />
            <Route exact path={"/pedidos"} component={Pedidos} />
            <Route exact path={"/produtos"} component={Produtos} />
            <Route path={"/detalhesProduto/:id"} component = { DetalhesProduto } />
            <Route path={"/novoProduto/"} component = { NovoProduto } />
            <Route path={"/editarProduto/:id"} component = { EditarProduto } />
            <Route path={"/detalhesPedido/:id"} component = { DetalhesPedido } />
        </Switch>
        <Footer />
        </div>
        </BrowserRouter>
    )}
}

export default App