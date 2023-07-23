import { convertDate } from "./convertDate"

export const settingChartData = (setChartData, prices1, prices2) => {
            if(prices2){
              setChartData({
                labels: prices1.map((price)=> convertDate(price[0]) ),
                datasets: [
                  {
                    label:"crypto1",                    
                    data: prices1.map((price)=> price[1] ),
                    borderColor: "#3a80e9",
                    borderWidth: 2, //graph line
                    fill: false, //you will have background color
                    // backgroundColor: "rgba(58, 128, 233, 0.1)",
                    tension:0.25, //give curve edges to graph line
                    pointRadius:2.5, //on every point circle will be avilable 
                    yAxisID: "crypto1",
                    
                  },

                  {
                    label:"crypto2",
                    data: prices2.map((price)=> price[1] ),
                    borderColor: "#61c96f",
                    borderWidth: 2, //graph line
                    fill: false, //you will have background color
                    // backgroundColor: "rgba(58, 128, 233, 0.1)",
                    tension:0.25, //give curve edges to graph line
                    pointRadius:2.5, //on every point circle will be avilable 
                    yAxisID: "crypto2",
                  },
                ],
            })
            }
            else{
              setChartData({
                labels: prices1.map((price)=> convertDate(price[0]) ),
                datasets: [
                  {
                    
                    data: prices1.map((price)=> price[1] ),
                    borderColor: "#3a80e9",
                    borderWidth: 2, //graph line
                    fill: true, //you will have background color
                    backgroundColor: "rgba(58, 128, 233, 0.1)",
                    tension:0.25, //give curve edges to graph line
                    pointRadius:2.5, //on every point circle will be avilable 
                    yAxisID: "crypto1",
                  },
                ],
            })
            }
 
}


