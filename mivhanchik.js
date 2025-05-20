export default function Mivhanchik() {
  return (
    <div style={{ maxWidth: '700px', margin: '0 auto', padding: '2rem' }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold' }}>מבחנצ'יק</h1>
      <p>ברוכים הבאים למבחנצ'יק – הכלי החינמי שמסכם שיעורים, מייצר שאלות, ומכין לכם מבחן – בלחיצת כפתור.</p>
      <label style={{ display: 'block', marginTop: '1.5rem' }}>הדביקו כאן את טקסט השיעור שלכם:</label>
      <textarea style={{ width: '100%', height: '200px', marginTop: '0.5rem' }} placeholder="הדביקו כאן שיעור, סיכום, או כל טקסט אחר..."></textarea>
      <button style={{ marginTop: '1rem', padding: '0.5rem 1rem', backgroundColor: '#2563eb', color: 'white', border: 'none', borderRadius: '4px' }}>
        צור סיכום ומבחן
      </button>
      <div style={{ marginTop: '2rem' }}>
        <h2>📄 סיכום חצי מובנה:</h2>
        <div style={{ backgroundColor: '#f3f4f6', padding: '1rem', borderRadius: '4px' }}>
          כאן יופיע הסיכום החצי מובנה עם שאלות פתוחות, השמטות ורווחים למילוי.
        </div>
        <h2 style={{ marginTop: '1.5rem' }}>🧠 שאלות למבחן:</h2>
        <ul style={{ backgroundColor: '#f3f4f6', padding: '1rem', borderRadius: '4px' }}>
          <li>שאלת איתור מידע...</li>
          <li>שאלת הבנה...</li>
          <li>שאלת השוואה...</li>
          <li>שאלת סינתזה / הערכה...</li>
        </ul>
        <h2 style={{ marginTop: '1.5rem' }}>📝 טופס מבחן:</h2>
        <div style={{ backgroundColor: '#f3f4f6', padding: '1rem', borderRadius: '4px' }}>
          כאן יופיע קישור לטופס Google Forms (או הדמיה של מבחן).
        </div>
      </div>
    </div>
  );
}
