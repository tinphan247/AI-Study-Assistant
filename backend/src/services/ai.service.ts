// Mock AI Service since OpenAI requires an API Key
// In production, instantiate OpenAI using the API key

export const aiService = {
  summarize: async (text: string): Promise<string> => {
    // const response = await openai.chat.completions.create({ ... })
    // For now, we mock the response to test the API flow
    return `[Mock Summary] Here is a robust summary of the provided text: "${text.substring(0, 50)}..."`;
  },

  chat: async (context: string, question: string): Promise<string> => {
    return `[Mock Chat] You asked: "${question}". Based on the context, here is the answer.`;
  },

  generateQuiz: async (text: string): Promise<string> => {
    const mockQuiz = [
      {
        question: "What is the main topic of the text?",
        options: ["Option A", "Option B", "Option C", "Option D"],
        answer: "Option A"
      }
    ];
    return JSON.stringify(mockQuiz);
  }
};
