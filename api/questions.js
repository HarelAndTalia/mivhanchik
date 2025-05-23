export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { text } = req.body;

  if (!text) {
    return res.status(400).json({ message: 'Missing text in request body' });
  }

  const apiKey = process.env.OPENAI_API_KEY;

  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [
          {
            role: 'system',
            content: 'אתה מחולל שאלות חכם. קבל טקסט וכתוב 4 שאלות עליו לפי רמות חשיבה עולות: איתור מידע, הבנה, השוואה, הערכה. אל תסביר, רק תכתוב את השאלות ברשימה.',
          },
          {
            role: 'user',
            content: text,
          }
        ],
        temperature: 0.7,
      }),
    });

    const data = await response.json();
    const content = data.choices?.[0]?.message?.content;

    if (!content) {
      return res.status(500).json({ message: 'No content received from OpenAI.' });
    }

    res.status(200).json({ questions: content });

  } catch (error) {
    console.error('Error contacting OpenAI:', error);
    res.status(500).json({ message: 'Something went wrong with OpenAI request.' });
  }
}
