import type { Request, Response } from 'express';
import { aiService } from '../services/ai.service.js';

export const summarizeText = async (req: Request, res: Response): Promise<void> => {
  try {
    const { text } = req.body;
    if (!text) {
      res.status(400).json({ error: 'Text is required for summarization' });
      return;
    }
    
    // Call AI service
    const summary = await aiService.summarize(text); 
    res.status(200).json({ data: summary });
  } catch (error) {
    console.error('Summarize error:', error);
    res.status(500).json({ error: 'Failed to generate summary' });
  }
};

export const chatWithDocument = async (req: Request, res: Response): Promise<void> => {
  try {
    const { question, context } = req.body;
    if (!question || !context) {
      res.status(400).json({ error: 'Question and context are required' });
      return;
    }
    
    const answer = await aiService.chat(context, question);
    res.status(200).json({ data: answer });
  } catch (error) {
    console.error('Chat error:', error);
    res.status(500).json({ error: 'Failed to generate answer' });
  }
};

export const generateQuiz = async (req: Request, res: Response): Promise<void> => {
  try {
    const { text } = req.body;
    if (!text) {
      res.status(400).json({ error: 'Text is required for quiz generation' });
      return;
    }
    
    const quiz = await aiService.generateQuiz(text);
    res.status(200).json({ data: JSON.parse(quiz) }); // Parse stringified JSON from OpenAI
  } catch (error) {
    console.error('Quiz error:', error);
    res.status(500).json({ error: 'Failed to generate quiz' });
  }
};
