import React from 'react'
import { Line } from 'react-chartjs-2'
import { Chart as ChartJS } from 'chart.js/auto';//Don't get rid of this
import { convertNumber } from '../../../functions/convertNumber';

function LineChart({chartData, priceType, multiAxis}){
    const options = {
        plugins:{
            legend:{
                display: multiAxis ? true : false,
                //when there will be 2 charts then we will show legend else not
            },
        },
        responsive: true,

        //this is alow us to hover
        interaction:{
            mode:"index",
            intersect: false,
        },
        scales: {
            crypto1: {
                type:"linear",
                display: true,
                position: "left",

                ticks: {
                    //Include a dollar sign in the ticks
                    callback: function(value, index, ticks){
                        if(priceType == "prices"){
                        //toLocaleString(); this will add coma and dot in value
                        return "$" + value.toLocaleString(); 
                        }
                        else{
                            return "$" + convertNumber(value);
                        }
                    },
                },
            },

            crypto2: {
                type:"linear",
                display: true,
                position: "right",

                ticks: {
                    //Include a dollar sign in the ticks
                    callback: function(value, index, ticks){
                        if(priceType == "prices"){
                        //toLocaleString(); this will add coma and dot in value
                        return "$" + value.toLocaleString(); 
                        }
                        else{
                            return "$" + convertNumber(value);
                        }
                    },
                },
            },
        }
    };
//chartData is a data which we pass it's containt both arrays x and y axis
    return <Line data = {chartData} options={options}/>;
}

export default LineChart

