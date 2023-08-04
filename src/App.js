import { BarChart } from "./components/BarChart";
import LineChart from "./components/LineChart";
import PieChart from "./components/PieChart";
import { ChartBuilder } from "./ChartBuilder";
import "./App.css";
import React, {useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [chartBuilder, setChartBuilder] = useState({});

  useEffect(() => {
    axios
      .get("http://127.0.0.1:5000/flask/hello")
      .then((response) => {
console.log(response);
        let chartBuilder = new ChartBuilder();
        
        chartBuilder.setData({

          
          labels: response.data.message.map((data) => data.year), 
          datasets: [
            {
              label: "Users Gained ",
              data: response.data.map((data) => data.userGain),
              backgroundColor: [
                "rgba(75,192,192,1)",
                "#ecf0f1",
                "#f0331a",
                "#f3ba2f",
                "#2a71d0"
              ],
              borderColor: "black",
              borderWidth: 2
            }
          ]
        }).setTitle("This is a test").setShowTitle(true).setChartType("Bar").setShowLegend(true).build();
        setChartBuilder(chartBuilder);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="App">
      <BarChart builder={chartBuilder} />
      <LineChart builder={chartBuilder} />
      <PieChart builder={chartBuilder} />
    </div>
  );
}

export default App;
