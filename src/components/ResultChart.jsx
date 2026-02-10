import { Bar, Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
} from "chart.js";

ChartJS.register(
  ArcElement,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
);

export default function ResultChart({ tests }) {
  const solved = tests.filter(t => t.solved).length;
  const unsolved = tests.length - solved;

  return (
    <div className="chart-row">
      {/* Doughnut */}
      <div className="chart-box">
        <h3>Solved vs Unsolved</h3>
        <Doughnut
          data={{
            labels: ["Solved", "Unsolved"],
            datasets: [
              {
                data: [solved, unsolved],
                backgroundColor: ["#22c55e", "#ef4444"]
              }
            ]
          }}
        />
      </div>

      {/* Bar */}
      <div className="chart-box">
        <h3>Scores per Test</h3>
<Bar
  data={{
    labels: tests.map(t => t.name),
    datasets: [
      {
        label: "Marks",
        data: tests.map(t => t.score), // marks
        backgroundColor: "#6366f1"
      }
    ]
  }}
  options={{
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        min: 0,
        max: 50,
        ticks: {
          stepSize: 10
        },
        title: {
          display: true,
          text: "Marks (out of 50)"
        }
      }
    }
  }}
/>
      </div>
    </div>
  );
}
