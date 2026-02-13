import { useState } from "react";

function QuestionBox() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const handleAsk = () => {
    if (question.trim() === "") {
      setAnswer("Please enter a question.");
      return;
    }

    // Dummy AI response (for now)
    setAnswer(
      "Based on the data, sales were highest in March and declined in April."
    );
  };

  return (
    <div className="card">
      <h3>Ask a Question</h3>

      <input
        type="text"
        placeholder="Ask a question about the data"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
      />

      <button onClick={handleAsk}>Ask</button>

      {answer && (
        <p style={{ marginTop: "15px" }}>
          <strong>Answer:</strong> {answer}
        </p>
      )}
    </div>
  );
}

export default QuestionBox;
