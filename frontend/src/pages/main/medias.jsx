import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';


import LinkedInIcon from '@material-ui/icons/LinkedIn';


import './main.css'


export default ()=>{
    return(<div className="mediaSocial">
         <a href="https://www.instagram.com/upgrade.robsonrosa/"><InstagramIcon style={{ fontSize: 50,  color: "white" }}/></a>
        <FacebookIcon style={{ fontSize: 50 ,  color: "white"}}/>
        <LinkedInIcon style={{ fontSize: 50,  color: "white" }}/>

    </div>)
}