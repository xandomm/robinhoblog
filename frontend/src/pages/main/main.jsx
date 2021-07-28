import React, { useEffect } from "react";
import Header from '../../components/header'
import ECO from '../../img/logoupgrade.png'
import './main.css'
import Paper from '@material-ui/core/Paper';
import RobinhoProfile from '../../img/RobsonProfile.jpeg'
import { makeStyles } from '@material-ui/core/styles';
import Medias from './medias';
import Blog from '../blog/blog'
import AOS from 'aos'
import Forme from '../contato/form'
import "aos/dist/aos.css";
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

  // eslint-disable-next-line import/no-anonymous-default-export
  export default (_props)=>{
   
      useEffect(() => {
        AOS.init({
          duration : 2000
        });
        AOS.refresh();
      }, []);
    const classes = useStyles();
    return(<div className="bodyform">
        <Header/>
<div className="apresentacao">
<div className="segundalogo" ><div  className={[classes.root, 'alinhar']}>
          <br/>
        
        <h1 className="glow"> Por que posso fazer a diferença no seu empreendimento?</h1>
        <h4>

        Atuo a mais de 5 anos no marketing como consultor estratégico e na criação de conteúdo como fotos, vídeos, filmes etc.

Investi nesses últimos anos em cursos e pós graduação das universidades mais renomadas no marketing do Brasil e exterior como: FGV, PUC Pr., Barça Universitas Hub da Espanha, etc...

        </h4>
     
  

   
 
   

</div> </div>
    <div className="primeiralogo">
    <div class="card primeiralogo1 text-white">
    <img src={RobinhoProfile}/>
  <div class="card-img-overlay">
    <h5 class="card-title">Robson Rosa</h5>
  
  </div>
</div>
  
      </div>

</div>

<div className="parte2">
<div className="carta-servicos">
 
      <h1>Faça o upgrade!</h1>

</div>
<div className="carta-servicos2">
<div data-aos="fade-right"><h3 className="direita">Trabalhos pontuais ou consultoria com acompanhamento permanente onde ajudamos a implantar todas as idéias.</h3> </div>
<div data-aos="fade-left" ><h3 className="esqueda">Gerenciamento de rede social e criação de conteúdo.</h3></div>
<div data-aos="fade-right"><h3 className="direita">Ensinamos e criamos o material necessário para você "se virar" nas redes sociais e o melhor, COM RESULTADO!</h3> </div>
<div data-aos="fade-left" ><h3 className="esqueda">Branding: Estratégias para valorização, humanização e reconhecimento da marca. </h3></div>
<div data-aos="fade-right"><h3 className="direita">Consultoria em Estratégias de Marketing comercial ao pessoal.</h3> </div>
<div data-aos="fade-left" ><h3 className="esqueda">Criação e elaboração de metas, eventos e promoções.</h3></div>
<div data-aos="fade-right"><h3 className="direita">Desenvolvimento do Marketing direto e pessoal através das pessoas que fazem parte da organização em prol do crescimento de toda organização. </h3> </div>
<div data-aos="fade-left" ><h3 className="esqueda">Marketing Digital. Fotos, ensaios, filmes e cobertura de eventos, estratégias de rede social e páginas web, conteúdos em geral.</h3></div>
{/* <div data-aos="fade-right"><h1 className="direita">Mentoria</h1> </div>
<div data-aos="fade-left" ><h1 className="esqueda">Training</h1></div> */}
    
</div>
<Forme/>
<h1 className="carta-servicos">Confira algum dos nossos trabalhos</h1>
<Blog id_="music"/>
</div>

<Medias/>

   
    </div>)
}