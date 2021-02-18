import React from 'react'
import {Button} from 'reactstrap'
import {Link} from 'react-router-dom'
class PedidoComponent extends React.Component {

            render(){
            return( 
                <tr>
                <th scope="row">{this.props.id}</th>
                <td>{this.props.nome}</td>
                <td>{this.props.valor}</td>
                <td><Button tag={Link} id="detalhes" to={'/detalhesPedido/'+this.props.id}>Detalhes</Button></td>
            </tr>
                   )
                }
            }
                

export default PedidoComponent