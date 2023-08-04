import { Bar } from "react-chartjs-2";
export const BarChart = ({ builder }) => {
  return (
    <div className="chart-container">
      <h2 style={{ textAlign: "center" }}>Bar Chart</h2>
      <Bar
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
};