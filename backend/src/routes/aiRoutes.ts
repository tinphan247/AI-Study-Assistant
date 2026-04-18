import { Router } from 'express';
import { summarizeText, chatWithDocument, generateQuiz } from '../controllers/aiController.js';

const router = Router();

// Define routes
router.post('/summarize', summarizeText);
router.post('/chat', chatWithDocument);
router.post('/quiz', generateQuiz);

export default router;
