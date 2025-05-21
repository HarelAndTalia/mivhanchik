import { useState } from "react";

export default function Mivhanchik() {
  const [inputText, setInputText] = useState("");
  const [questions, setQuestions] = useState([]);

  const generateQuestions = () => {
    if (!inputText.trim()) return;

    // סימולציה של יצירת שאלות מתוך הטקסט (שאלות דמה לדוגמה)
    const sampleQuestions = [
      { level: "איתור מידע", q: "מה הם הנושאים המרכזיים המוזכרים בטקסט?" },
      { level: "הבנה", q: "כיצד משפיע הנושא המרכזי על החברה או על הפרט?" },
      { level: "השוואה", q: "השווה בין שני רעיונות או תופעות המופיעים בטקסט." },
      { level: "הערכה", q: "מה דעתך על הפתרונות שהוצעו בטקסט? נמק." },
    ];

    setQuestions(sampleQuestions);
  };

  return (
    <div style={{ maxWidth: '700px', margin: '0 auto', padding: '2rem' }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold' }}>מבחנצ'יק</h1>
      <p>כלי אוטומטי ליצירת שאלות מהמורה שלך – לפי רמות חשיבה.</p>

      <label style={{ display: 'block', marginTop: '1rem' }}>
        הדביקו כאן את טקסט השיעור:
      </label>
      <textarea
        style={{ width: '100%', height: '150px', marginTop: '0.5rem' }}
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="כתבו או הדביקו את הטקסט כאן..."
      ></textarea>

      <button
        onClick={generateQuestions}
        style={{
          marginTop: '1rem',
          padding: '0.5rem 1rem',
          backgroundColor: '#2563eb',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
        }}
      >
        הפק שאלות
      </button>

      {questions.length > 0 && (
        <div style={{ marginTop: '2rem' }}>
          <h2>🧠 שאלות לפי רמות חשיבה:</h2>
          <ul style={{ padding: 0, listStyleType: 'none' }}>
            {questions.map((q, idx) => (
              <li
                key={idx}
                style={{
                  backgroundColor: '#f3f4f6',
                  padding: '1rem',
                  borderRadius: '6px',
                  marginBottom: '1rem',
                }}
              >
                <strong>{q.level}:</strong> {q.q}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
