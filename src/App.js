import { useState } from "react";
import StudentForm from "./components/StudentForm";
import TestList from "./components/TestList";
import Test from "./components/Test";
import Dashboard from "./components/Dashboard";
import testsData from "./data/tests";
import "./App.css";

function App() {
  const [student, setStudent] = useState(null);
  const [tests, setTests] = useState(testsData);
  const [activeTestId, setActiveTestId] = useState(null);
  const [view, setView] = useState("tests");

  const handleTestSubmit = (percentage) => {
    setTests(prev =>
      prev.map(t =>
        t.id === activeTestId
          ? { ...t, solved: true, score: percentage }
          : t
      )
    );
    setActiveTestId(null);
    setView("tests");
  };

  if (!student) {
    return <StudentForm onStart={setStudent} />;
  }

  if (activeTestId !== null) {
    return (
      <Test
        testId={activeTestId}
        onSubmit={handleTestSubmit}
      />
    );
  }

  return (
    <div className="full-page">
      <div className="nav">
        <button onClick={() => setView("tests")}>Available Tests</button>
        <button onClick={() => setView("dashboard")}>Dashboard</button>
      </div>

      {view === "tests" && (
        <TestList tests={tests} onStartTest={setActiveTestId} />
      )}

      {view === "dashboard" && (
        <Dashboard tests={tests} student={student} />
      )}
    </div>
  );
}

export default App;
