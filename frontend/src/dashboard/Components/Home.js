import React from "react"
import Graph from "./Graph"

function Home(){
    return(
    <div className="concertandobugs">
        <div className="container">
            <h1 style={{color:"black"}}>Resumo de Vendas</h1>
            <Graph />
        </div>
        </div>
    )
};

export default Home