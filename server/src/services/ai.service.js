import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export const generateAIAnalytics = async (resumeText, jobText) => {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = `
        You are an ATS system. Return ONLY valid JSON in this exact format:

        {
            "overallScore": number,
            "strengths": [string],
            "missingSkills": [string],
            "suggestions": [string]
        }

        Resume: ${resumeText}

        Job Description: ${jobText}

    `;

    const result = await model.generateContent(prompt);
    const response = result.response.text();

    try {
        return JSON.parse(response);
    }   catch (err) {
        console.error("AI JSON parse failed: ", response);
        throw new Error("AI response parsing failed");
    }
};