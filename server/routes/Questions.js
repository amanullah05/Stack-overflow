import express from 'express';
import { askQuestion, getAllQuestions, deleteQuestion, voteQuestion } from '../controllers/Questions.js';
import auth from '../middleware/auth.js'
const router = express.Router();

router.post('/ask', auth,askQuestion);
router.get('/get', getAllQuestions);
router.delete('/delete/:id',auth, deleteQuestion); // Use DELETE method here
router.patch('/vote/:id', auth,voteQuestion); // Define vote route

export default router;
