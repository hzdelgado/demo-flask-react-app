import React from "react";
import { Pie } from "react-chartjs-2";

function PieChart({ builder }) {
  return (
    <div className="chart-container">
      <h2 style={{ textAlign: "center" }}>Pie Chart</h2>
      <Pie
        data={builder.data}
        options={{
          plugins: {
            title: {
              display: builder.showTitle,
              text: builder.title
            },
          }
        }}
      />
    </div>
  );
}
export default PieChart;