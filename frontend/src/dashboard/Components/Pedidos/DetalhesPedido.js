import React from "react"
import { Toast, ToastBody, ToastHeader, Table } from 'reactstrap'
import axios from 'axios'


const backendURL= process.env.REACT_APP_API_URL
class DetalhesPedido extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            id : this.props.match.params.id
        }
    }
 
    componentDidMount(){
        axios.get(backendURL+'/api/cliente/'+this.state.id).then(res=>this.setState(res.data))
    }
    render(){

    return(
        <div className="concertandobugs">
        <div className="container">
            <h1 style={{color:"black"}}>Detalhes do pedido</h1>
            <div className="toast-box row">
                <div classname="col toast">
                <Toast>
                    <ToastHeader>
                        {/* Pedido #{id} */}
                    </ToastHeader>
                    <ToastBody>
                        <p style={{color:"black"}}> 
                        <b>Nome:</b> {this.state.nome} <br></br>
                        <b>email:</b> {this.state.email} <br></br>
                        <b>Número:</b> {this.state.numero} <br></br>
                        <b>Mensagem:</b> {this.state.mensagem} <br></br>
                 <br></br>
                        </p>
                    </ToastBody>
                </Toast>
                </div>
   
            </div>
        </div></div>
    )
        }
            }

export default DetalhesPedido