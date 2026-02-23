import OpenAI from "openai";

const openai = new OpenAI({
  baseURL: "https://openrouter.ai/api/v1",
  apiKey: process.env.OPENROUTER_API_KEY
});

export const generateAIAnalysis = async (resumeText, jobText) => {
  const prompt = `
You are an ATS resume evaluator.

Return ONLY raw JSON.
Do NOT use markdown.
Do NOT wrap in backticks.
Do NOT add explanations.

Format exactly:

{
  "overallScore": number,
  "strengths": [string],
  "missingSkills": [string],
  "suggestions": [string]
}

Resume:
${resumeText}

Job Description:
${jobText}
`;

  try {
    const completion = await openai.chat.completions.create({
      model: "mistralai/mistral-7b-instruct",
      messages: [
        { role: "system", content: "Respond ONLY with raw JSON." },
        { role: "user", content: prompt }
      ],
      temperature: 0.2
    });

    let text = completion.choices?.[0]?.message?.content || "";

    // 🔥 Clean possible markdown wrappers
    text = text
      .replace(/```json/gi, "")
      .replace(/```/g, "")
      .trim();

    // 🔥 Extract JSON block if extra text is returned
    const jsonMatch = text.match(/\{[\s\S]*\}/);

    if (!jsonMatch) {
      throw new Error("No valid JSON found in AI response");
    }

    const parsed = JSON.parse(jsonMatch[0]);

    // 🔥 Basic schema validation (production safety)
    return {
      overallScore: Number(parsed.overallScore) || 0,
      strengths: Array.isArray(parsed.strengths) ? parsed.strengths : [],
      missingSkills: Array.isArray(parsed.missingSkills) ? parsed.missingSkills : [],
      suggestions: Array.isArray(parsed.suggestions) ? parsed.suggestions : []
    };

  } catch (error) {
    console.error("AI Analysis Error:", error.message);

    // 🔥 Fail-safe fallback so backend never crashes
    return {
      overallScore: 0,
      strengths: [],
      missingSkills: [],
      suggestions: ["AI analysis temporarily unavailable"]
    };
  }
};