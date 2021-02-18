import Header from "../../components/header"

import {useState} from 'react'
import axios from 'axios'

import Card from './card'
import './blog.css'
import { useEffect } from "react"





const backendURL= process.env.REACT_APP_API_URL
export default (props)=>{

const [dados, setDados] = useState([])
const [load,setLoad] = useState(false)
const lis =dados.map((dos)=>{
        
        return( 
        <Card id={dos._id} title={dos.titulo} url={dos.url} criado={dos.createdAt} url={dos.url} subtitle={dos.subtitulo}/>
        )
    }
    
    )
console.log(dados)
function cardList(){

if (load === false){
 
    axios.get(backendURL+'/api/post').then(
        res=>{
            setDados(res.data);
            setLoad(true);
   
        }
)
}
}
console.log(dados)

    return(
        <div>
            <Header id={props.id_}/>
<div className="cardname">
{cardList()}
{lis}



</div>
        </div>
    )
}