import React from "react"
import { Toast, ToastBody, ToastHeader, Table } from 'reactstrap'




class DetalhesPedido extends React.Component{

    render(){
    let id = this.props.match.params.id;
    return(
        <div className="concertandobugs">
        <div className="container">
            <h1 style={{color:"black"}}>Detalhes do pedido</h1>
            <div className="toast-box row">
                <div classname="col toast">
                <Toast>
                    <ToastHeader>
                        Pedido #{id}
                    </ToastHeader>
                    <ToastBody>
                        <p style={{color:"black"}}> 
                        <b>Nome do comprador:</b> Rodrigo <br></br>
                        <b>Endereço:</b> Rua sei lá o que <br></br>
                        <b>Cidade:</b> São Paulo <br></br>
                        <b>Estado:</b> São Paulo <br></br>
                        <b>País:</b> Brasil <br></br>
                        <b>Status do Pagamento:</b> <span style={{color:'green'}}>Pago</span><br></br>
                        <b>Status de entrega:</b> Enviado <br></br>
                        <b>Código de rastreio:</b> 18654561864 (jadLog) <br></br>
                        </p>
                    </ToastBody>
                </Toast>
                </div>
                <div classname="col">
                <Table>
                <thead>
                    <tr>
                    <th>Lista de Produtos</th>
                    <th></th>
                    <th></th>
                    </tr>
                </thead>   
                <tbody>
                    <tr>
                        <td>Óculos de sol sei lá o que</td>
                        <td>1x</td>
                        <td>R$ 2000</td>
                    </tr>
                    <tr>
                        <td>Óculos de grau sei lá o que</td>
                        <td>1x</td>
                        <td>R$ 2000</td>
                    </tr>
                    <tr>
                        <td>Óculos bacana sei lá o que</td>
                        <td>1x</td>
                        <td>R$ 2000</td>
                    </tr>
                    <tr>
                        <th>Total:</th>
                        <td></td>
                        <td>R$ 6000</td>
                    </tr>
                    
                </tbody>
                </Table>
                </div>
            </div>
        </div></div>
    )
        }
            }

export default DetalhesPedido