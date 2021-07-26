import React from "react"
import { Table} from "reactstrap";
import PedidoComponent from './PedidoComponent'
const backendURL= process.env.REACT_APP_API_URL

class Pedidos extends React.Component{

    constructor() {
        super()
        this.state = {
            isLoading:true,
            PedidoData: [],
            
        }
    }

    componentDidMount(){
        fetch(backendURL+"/api/cliente").then(
            pedidos => pedidos.json()
            )
        .then(data => {
            this.setState({
                PedidoData: [data],
                isLoading: false
            })
            console.log(this.state
                )
        })
        .catch(err => console.log(err))

    }

    render(){
        const pedidoComponents = (this.state.PedidoData.length) ? this.state.PedidoData[0].map(pedido => <PedidoComponent  key = {pedido.id} nome={pedido.nome} id = {pedido._id} valor= {pedido.numero} />) : <h2 style={{textAlign:"center"}}>A lista de pedidos está vazia</h2>;
        const loading = this.state.isLoading ? <h5>Carregando...</h5> : pedidoComponents
        return(
            <div className="concertandobugs">
            <div className="container">
                <h1 style={{color:"black"}}>Pedidos</h1>
                <div className="row flex-column-reverse">
                <div className="col-sm flex-column-reverse">
                <Table>
                    <thead>
                    <tr>
                      <th>Código</th>
                      <th>Nome</th>
                      <th>Número</th>
                      <th></th>{console.log(this.state.PedidoData)}
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