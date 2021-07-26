import './header.css'
import logob from '../img/logoupgrade.png'

export default (props)=>{
    return(
        <div id={props.id}>
            <nav class="navbar navbar-expand-lg navbar-dark bg-azul">
  <div class="container-fluid">
    <div className="logoh">
    <a class="navbar-brand" href="#"><img src={logob} className="logoHeader"></img></a></div>
    <div className="logoh2">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse Header-l" id="navbarNavDropdown">
      <ul class="navbar-nav Header-l">
        <li class="nav-item navls">
          <a class="nav-link active navls" aria-current="page" href="#"><h5>HOME</h5></a>
        </li>
     
        <li class="nav-item navls">
          <a class="nav-link" href="#"><h5>CONTATO</h5></a>
        </li>
   
      </ul>
    </div></div>
  </div>
</nav>
        </div>
    )
}