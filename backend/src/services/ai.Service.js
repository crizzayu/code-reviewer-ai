const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GEMINI_KEY);
const model = genAI.getGenerativeModel({ 
    model: "gemini-2.0-flash", 
    systemInstruction: `
    
  you are an expert in codeing and you have a given code ,analyze it and give the best reveiw 
  to understand as you are explaing it to the begginer in perfect number of lines and make it interesting.
    Explain error , why it happens and how to resolve it and give possible solutions.
    `
});


async function generateContent(prompt) {
    const result = await model.generateContent(prompt)
    const response = await result.response; 
    return result.response.text();
}

module.exports = generateContent