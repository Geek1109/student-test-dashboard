import { useState } from "react";
import allQuestions from "../data/questions";

export default function Test({ testId, onSubmit }) {
  const questions = allQuestions[testId] || [];

  const [answers, setAnswers] = useState({});

  const handleSubmit = () => {
    let correct = 0;

    questions.forEach((q, index) => {
      if (answers[index] === q.a) {
        correct++;
      }
    });

    const score = correct * 10;
    onSubmit(score);


    onSubmit(score);
  };

  return (
    <div className="full-page">
      <h2>Test {testId}</h2>

      {questions.map((q, index) => (
        <div key={index} className="question">
          <p>{q.q}</p>

          {q.o.map(option => (
            <label key={option} style={{ display: "block" }}>
              <input
                type="radio"
                name={`q-${index}`}
                value={option}
                onChange={() =>
                  setAnswers({ ...answers, [index]: option })
                }
              />
              {option}
            </label>
          ))}
        </div>
      ))}

      <button onClick={handleSubmit}>Submit Test</button>
    </div>
  );
}
