import ResultChart from "./ResultChart";

export default function Dashboard({ tests, student }) {
  // solved & unsolved
  const solvedTests = tests.filter(t => t.solved);
  const unsolvedCount = tests.length - solvedTests.length;

  const averagePercentage =
    solvedTests.length === 0
      ? 0
      : Math.round(
          (solvedTests.reduce((sum, t) => sum + t.score, 0) /
            (solvedTests.length * 50)) * 100
        );

  return (
    <div className="full-page">
      <h2>{student.name}'s Dashboard</h2>

      <div style={{ marginBottom: "20px" }}>
        <p><strong>Solved:</strong> {solvedTests.length}</p>
        <p><strong>Unsolved:</strong> {unsolvedCount}</p>
        <p>
          <strong>Average Percentage:</strong> {averagePercentage}%
        </p>
      </div>

      {/* charts */}
      <ResultChart tests={tests} />
    </div>
  );
}
