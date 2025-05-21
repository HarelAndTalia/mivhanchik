import { useState } from "react";

function App() {
  const [text, setText] = useState("");
  const [result, setResult] = useState("");
  const [error, setError] = useState("");

  async function handleGenerate() {
    try {
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt: text }),
      });

      const data = await res.json();

      if (res.ok) {
        setResult(data.result);
        setError("");
      } else {
        setError("שגיאה: " + data.error);
        setResult("");
      }
    } catch (err) {
      setError("שגיאה: " + err.message);
      setResult("");
    }
  }

  return (
    <div>
      <h1>ברוכים הבאים למבחנצ'יק 🐛</h1>
      <textarea
        rows="10"
        cols="50"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="הדבק כאן את הטקסט..."
      />
      <br />
      <button onClick={handleGenerate}>הפק שאלות</button>

      {error && <p style={{ color: "red" }}>{error}</p>}
      {result && (
        <div>
          <h2>שאלות שהופקו:</h2>
          <pre>{result}</pre>
        </div>
      )}
    </div>
  );
}

export default App;
