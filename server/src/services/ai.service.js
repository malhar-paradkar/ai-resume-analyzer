import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export const generateAIAnalytics = async (resumeText, jobText) => {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = `
        You are an ATS resume evaluation engine. Analyze the resume against the job description. Return:
        1. Overall match percentage (0-100)
        2. Key strengths
        3. Missing skills
        4. Suggestions for improvement

        Resume: ${resumeText}

        Job Description: ${jobText}

    `;

    const result = await model.generateContent(prompt);
    const response = result.response;

    return response.text();
};