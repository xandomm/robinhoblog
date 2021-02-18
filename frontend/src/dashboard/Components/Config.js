import React from "react"
import { Switch } from "@material-ui/core"
import { withStyles } from "@material-ui/core/styles"



const CustomSwitch = withStyles({
    switchBase: {
      color: '#4bc0c0',
      '&$checked': {
        color: '#4bc0c0',
      },
      '&$checked + $track': {
        backgroundColor: '#4bc0c0',
      },
    },
    checked: {},
    track: {},
  })(Switch);

class Config extends React.Component{

  constructor(){
    super()
    this.state = {
      checked: false
    }
    this.HandleChange = this.HandleChange.bind(this);
  }

  HandleChange(){
    if (!this.state.checked){
    document.getElementById("pagestyle").setAttribute("href", "../darktheme.css");
    this.setState({
      checked: true
    })
    }
    else {
      document.getElementById("pagestyle").setAttribute("href", "../index.css");
      this.setState({
        checked: false
    })
    }
  }

    render(){
        return(
            <div className="container">
                <h1 style={{marginBottom:"50px",color:"black"}}>Configurações</h1>
                <div className='row'>
                    <div className="col">
                        <h3 style={{color:"black"}}>Modo escuro?</h3>
                        <CustomSwitch checked={this.state.checked} onClick={this.HandleChange} />
                    </div>
                </div>
            </div>
        )
    }
}

export default Config