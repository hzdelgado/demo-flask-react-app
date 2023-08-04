import React from "react";
import { Line } from "react-chartjs-2";
import { CategoryScale } from "chart.js";
import Chart from "chart.js/auto";
Chart.register(CategoryScale);
function LineChart({ builder }) {
  return (
    <div className="chart-container">
      <h2 style={{ textAlign: "center" }}>Line Chart</h2>
      <Line
        data={builder.data}
        options={{
          plugins: {
            title: {
              display: builder.showTitle,
              text: builder.title
            },
            legend: {
              display: builder.showLegend
            }
          }
        }}
      />
    </div>
  );
}

export default LineChart;