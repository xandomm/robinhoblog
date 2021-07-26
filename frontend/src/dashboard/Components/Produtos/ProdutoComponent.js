import React from 'react'
import {Button} from 'reactstrap'
import DeletarProduto from './DeletarProduto'
import {Link} from 'react-router-dom'
class ProdutoComponent extends React.Component {

            render(){
            return( 
                   <tr>
                        <th>{this.props.id}</th>
                        <td>{this.props.nome}</td>
               
                        <td>< Button tag = {Link} id="detalhes" to ={"/detalhesProduto/"+this.props.id}>Detalhes</Button></td>
                        <td ><DeletarProduto id = {this.props.id} /></td>
                    </tr>
                   )
                }
            }
                

export default ProdutoComponent