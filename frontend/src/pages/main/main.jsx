import Header from '../../components/header'
import ECO from '../../img/logoupgrade.png'
import './main.css'
import Paper from '@material-ui/core/Paper';

import { makeStyles } from '@material-ui/core/styles';
import Medias from './medias';
import Blog from '../blog/blog'
const useStyles = makeStyles((theme) => ({
    root: {
      backgroundColor: 'black',
      '& > *': {
        right: 10,
        margin: theme.spacing(0),
        marginRight: theme.spacing(1),
        width: '100%',
        height: '100%',
        
      },
    },
  }));
export default (props)=>{
    const classes = useStyles();
    return(<div>
        <Header/>
<div className="apresentacao">
<div className="segundalogo" ><div  className={[classes.root, 'alinhar']}>
        
        
        <br/>
        
        <h1 className="glow"> PORQUE O CARA DEVE PARAR A VIDA DELE PRA VER SEU SITE</h1>
        <p>coloque infos ou nao se quiser, <br/>de preferencia ate encher aqui.<br/> bla<br/>mais um pouco
        

        </p>
     
  
   <button  className="butao"> <h2>NAVEGUE PRA OUTRO LUGAR</h2> </button>
   
 
   
   <div>

   </div>
</div> </div>
    <div className="primeiralogo"><img src={ECO}></img></div>

</div>

<div className="parte2">

<Blog id_="music"/>
</div>

<Medias/>

   
    </div>)
}