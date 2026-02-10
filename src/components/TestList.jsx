const TestList = ({ tests, onStartTest }) => {
  return (
    <>
      <h2>Available Tests</h2>

      <table className="result-table">
        <thead>
          <tr>
            <th>Test</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {tests.map(t => (
            <tr key={t.id}>
              <td>{t.name}</td>
              <td>{t.solved ? "Solved" : "Unsolved"}</td>
              <td>
                {t.solved ? (
                  "Completed"
                ) : (
                  <button onClick={() => onStartTest(t.id)}>
                    Start
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default TestList;
