import React from "react";
import questions from "../data/questions";
import ResultChart from "./ResultChart";

const Result = ({ answers, student }) => {
  let correct = 0;

  questions.forEach((q) => {
    if (answers[q.id] === q.correctAnswer) correct++;
  });

  const total = questions.length;
  const wrong = total - correct;
  const percentage = Math.round((correct / total) * 100);
  const status = percentage >= 50 ? "Pass" : "Fail";

  return (
    <div className="container">
      <h2>Student Assessment Dashboard</h2>

      {/* Result summary table */}
      <table className="result-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Score (%)</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{student.name}</td>
            <td>{percentage}</td>
            <td className={status === "Pass" ? "pass" : "fail"}>
              {status}
            </td>
          </tr>
        </tbody>
      </table>

      {/* Charts */}
      <ResultChart
        correct={correct}
        wrong={wrong}
        percentage={percentage}
      />
    </div>
  );
};

export default Result;
