import LineChart from "./components/LineChart";
import PieChart from "./components/PieChart";
import ChartBuilder from "./ChartBuilder";
import "./App.css";
import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [chartBuilder, setChartBuilder] = useState({});
  const [dropdownOption, setDropdownOption] = useState(1);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:5000/flask/hello")
      .then((response) => {
        let res = response.data.message;
        let builder = new ChartBuilder();

        builder
          .setData({
            labels: res.map((data) => data.year),
            datasets: [
              {
                label: "Users Gained ",
                data: res.map((data) => data.userGain),
                backgroundColor: [
                  "rgba(75,192,192,1)",
                  "#ecf0f1",
                  "#f0331a",
                  "#f3ba2f",
                  "#2a71d0",
                ],
                borderColor: "black",
                borderWidth: 2,
              },
            ],
          })
          .setTitle("This is a test")
          .setShowTitle(true)
          .setChartType("Bar")
          .setShowLegend(true)
          .build();
        setChartBuilder(builder);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div className="App">
      <h3>Select a graph:</h3>
      <select
        name="options" className="graph-dropdown"
        onChange={(event) => setDropdownOption(event.target.value)}
      >
        <option value="1">Line</option>
        <option value="2">Pie</option>
      </select>
      {chartBuilder.data != null && dropdownOption == 1 && (
        <LineChart builder={chartBuilder} />
      )}
      {chartBuilder.data != null && dropdownOption == 2 && (
        <PieChart builder={chartBuilder} />
      )}
    </div>
  );
}

export default App;
