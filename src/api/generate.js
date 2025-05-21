// api/generate.js
import OpenAI from "openai";

// יצירת מופע של OpenAI עם מפתח מהסביבה
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export default async function handler(req, res) {
  // קבלת בקשות מסוג POST בלבד
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { prompt } = req.body;

  // בדיקה אם קיים מפתח API
  if (!process.env.OPENAI_API_KEY) {
    return res.status(500).json({ error: "Missing OpenAI API Key" });
  }

  // בדיקה אם נשלח prompt
  if (!prompt || prompt.trim() === "") {
    return res.status(400).json({ error: "Missing prompt in request body" });
  }

  try {
    // קריאה ל־OpenAI
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: prompt }],
    });

    // החזרת התוצאה
    res.status(200).json({ result: completion.choices[0].message.content });
  } catch (err) {
    console.error("OpenAI Error:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
