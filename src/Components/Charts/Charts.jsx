import React, { useState, useEffect } from 'react';
import './Charts.css';
import { Line} from "react-chartjs-2";


const Charts = () => {
    
    const [dailyData, setDailyData] = useState([]);

    useEffect(()=>{
        // const fetchAPI = async () =>{
        //     setDailyData(await fetchDailyData());
        //     console.log(fetchDailyData());
            
        // }
        // fetchAPI();
        fetch('https://covid19.mathdro.id/api/daily')
  .then(response => response.json())
  .then(json => {
    setDailyData(json);
    
    
  });

    },[]);
    const dateReader = date =>new Date(date).toDateString();
    const lineChart = ( 
        dailyData.length
        ?(
            <Line
            data={{
                labels: dailyData.map(date =>dateReader(date.reportDate)),
                datasets: [{
                    data: dailyData.map(confirmed=>confirmed.confirmed.total),
                    label: 'Infected',
                    borderColor: '#3333ff',
                    fill: true,
                },{
                    data: dailyData.map(death =>death.deaths.total),
                    label: 'Deaths',
                    borderColor: 'red',
                    backgroundColor: 'rgba(255, 0, 0, 0.3)',
                    fill: true,
                }],
            }}
            />) : null
    )
    return (
        <div className="container">
            {lineChart}
        </div>
    );
};

export default Charts;