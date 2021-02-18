import React from "react"
// import {Line} from 'react-chartjs-2'

const data = {
    labels: ['01/08', '02/08', '03/08', '04/08', '05/08', '06/08', '07/08'],
    datasets: [
      {
        label: 'Vendas',
        fill: true,
        lineTension: 0.1,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: []
      }
    ]
  };


const Graph = () => {
    return(
        <div>
            {/* <Line 
                height={400}
                width={200}
                data={data} 
                options={{
                    responsive: true,
                    maintainAspectRatio: false                
                }}
            /> */}
        </div>
        
    )
};

export default Graph