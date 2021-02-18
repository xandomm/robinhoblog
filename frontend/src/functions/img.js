import './img.css'





const backendURL= process.env.REACT_APP_API_URL
export default (props)=>{
    var txt = props.url
    var foto = txt.substring(0, props.url.length - 1)
    
    
    
    return(<div>
        <img src={`${backendURL}/static/${foto}.png`} className={props.Nome}/>
    </div>)
}