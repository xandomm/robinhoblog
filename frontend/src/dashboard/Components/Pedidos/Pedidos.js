import React from "react"
import { Table} from "reactstrap";
import PedidoComponent from './PedidoComponent'


class Pedidos extends React.Component{

    constructor() {
        super()
        this.state = {
            isLoading:true,
            PedidoData: []
        }
    }

    componentDidMount(){
        fetch("http://casadaslaceiras.store:5000/api/pedido").then(
            pedidos => pedidos.json()
            )
        .then(data => {
            this.setState({
                PedidoData: [data],
                isLoading: false
            })
        })
        .catch(err => console.log(err))

    }

    render(){
        const pedidoComponents = (!this.state.PedidoData && this.state.PedidoData.length) ? this.state.PedidoData.map(pedido => <PedidoComponent  key = {pedido._id} nome={pedido.nome} id = {pedido._id} valor= {pedido.valor} />) : <h2 style={{textAlign:"center"}}>A lista de pedidos está vazia</h2>;
        const loading = this.state.isLoading ? <h5>Carregando...</h5> : pedidoComponents
        return(
            <div className="concertandobugs">
            <div className="container">
                <h1 style={{color:"black"}}>Pedidos</h1>
                <div className="row">
                <div className="col-sm">
                <Table>
                    <thead>
                    <tr>
                      <th>Código do Pedido</th>
                      <th>Cliente</th>
                      <th>Valor</th>
                      <th></th>
                    </tr>
                    </thead>
                    <tbody>
                        {loading}
                    </tbody>
                </Table>
                </div>
                </div>
            </div>
            </div>
        )
    };
    }

export default Pedidos