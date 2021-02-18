import Header from "../../components/header"

import axios from 'axios'

import Image from '../../functions/img'

import CircularProgress from '@material-ui/core/CircularProgress';
import React, {useEffect, useState} from 'react'
import moment from 'moment'

import './artigo.css'

import Parser from 'html-react-parser';



var backendURL = process.env.REACT_APP_API_URL

export default (props)=>{

    const [open, setOpen] = React.useState(false)
    const [txt, setTxt] = useState('')
      const [load, setLoad] = useState(false);
      const [error, setError] = useState('');

  const [post, setPost] = useState([])
  
  
      const [dados, setDados]=useState([])
      const [dados1, setDados1]=useState({ })
      const [categorias1, ShowCategorias1]=useState()
      // const []
      useEffect(() => {
          axios.get(`${backendURL}/api/post/find/${props.match.params.url}`)
              .then(res => {
                  
                setPost(res.data);
                  setLoad(true);
  
              })
              .catch(err => {
                  setError(err.message);
                  setLoad(true)
              })
      }, []);
      var postObject;
if(load){
    var postObject = post[0]
    console.log(postObject)
}
console.log(post)








function Carregado(){
    if(postObject != undefined){
        const formatDate = moment(postObject.createdAt).locale('pt-br').format('DD/MM/YYYY')
        return(<div
            className="tituloesub">
    <div class="card text-center bg-azuli">

       
         <div class="card-body">
             <h2 >{postObject.titulo}</h2>
             <p class="card-text">{postObject.subtitulo}</p>
          
         </div>
         <div class="card-footer text-muted">
             {formatDate}
         </div>
         </div>
         <div className='txtArtigo'>
{Parser(postObject.texto)}
         </div>
         </div>)}
         else {
             return( <CircularProgress />)
         }
}
    return(
        <div className="geral">
            <Header/>

            <div>

                       <Image url={props.match.params.url} Nome="ImgArtigo" />
                       {Carregado()}
            </div>
        </div>
    )

}