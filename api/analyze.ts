import { GoogleGenAI, Type } from '@google/genai';

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }
  try {
    const { imageBase64, mimeType } = req.body;
    if (!imageBase64 || !mimeType) {
      return res.status(400).json({ error: 'Image data missing' });
    }
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      throw new Error('API Key not configured');
    }
    const ai = new GoogleGenAI({ apiKey });
    const imagePart = {
      inlineData: {  imageBase64, mimeType },
    };
    const textPart = {
      text: `Analyse cette image de planning. Extrais les informations selon le schéma.`,
    };
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: { parts: [imagePart, textPart] },
      config: {
        responseMimeType: 'application/json',
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              date: { type: Type.STRING },
              mission: { type: Type.STRING },
              location: { type: Type.STRING },
              start: { type: Type.STRING },
              end: { type: Type.STRING },
            },
          },
        },
      },
    });
    const jsonData = JSON.parse(response.text);
    return res.status(200).json(jsonData);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Error in AI analysis' });
  }
}
