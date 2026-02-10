import { useState } from "react";

const StudentForm = ({ onStart }) => {
  const [name, setName] = useState("");
  const [id, setId] = useState("");

  const handleSubmit = () => {
    if (!name.trim()) {
      alert("Student name is mandatory");
      return;
    }
    onStart({ name, id });
  };

  return (
    <div className="login-page">
      <div className="login-box">
        <h2>Student Login</h2>

        <div className="form-group">
          <label>Student Name *</label>
          <input
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Student ID (optional)</label>
          <input
            value={id}
            onChange={e => setId(e.target.value)}
          />
        </div>

        <button onClick={handleSubmit}>Start</button>
      </div>
    </div>
  );
};

export default StudentForm;
