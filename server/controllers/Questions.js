import Questions from '../models/Questions.js';
import mongoose from 'mongoose';

export const askQuestion = async (req, res) => {
    const postQuestionData = req.body;
    const postQuestion = new Questions(postQuestionData);
    try {
        await postQuestion.save();
        res.status(200).json("Posted a question successfully");
    } catch (error) {
        console.log(error);
        res.status(409).json("Couldn't post a new question.");
    }
};

export const getAllQuestions = async (req, res) => {
    try {
        const questionList = await Questions.find();
        res.status(200).json(questionList);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

export const deleteQuestion = async (req, res) => {
    const { id } = req.params; // Extracting question ID from request parameters

    try {
        const question = await Questions.findByIdAndRemove(id); // Finding and deleting question by ID
        if (!question) {
            return res.status(404).json({ message: 'Question not found' }); // Sending error response if question doesn't exist
        }
        res.status(200).json({ message: 'Question deleted successfully' }); // Sending success response if deletion is successful
    } catch (error) {
        res.status(500).json({ message: error.message }); // Sending error response if deletion fails
    }
};

export const voteQuestion = async (req, res) => {
    const { id: _id } = req.params;
    const { value, userId } = req.body;

    if (!mongoose.Types.ObjectId.isValid(_id)) {
        return res.status(404).send('Question unavailable...');
    }

    try {
        const question = await Questions.findById(_id);
        const upIndex = question.upVote.findIndex((id) => id === String(userId));
        const downIndex = question.downVote.findIndex((id) => id === String(userId));

        if (value === 'upVote') {
            if (downIndex !== -1) {
                question.downVote = question.downVote.filter((id) => id !== String(userId));
            }
            if (upIndex === -1) {
                question.upVote.push(userId);
            } else {
                question.upVote = question.upVote.filter((id) => id !== String(userId));
            }
        }

        if (value === 'downVote') {
            if (upIndex !== -1) {
                question.upVoteVote = question.upVote.filter((id) => id !== String(userId));
            }
            if (downIndex === -1) {
                question.downVote.push(userId);
            } else {
                question.downVote = question.downVote.filter((id) => id !== String(userId));
            }
        }
        await Questions.findByIdAndUpdate(_id, question)
        res.status(200).json({message: "voted successfully..."})
    }catch (error){
        res.status(404).json({messege: "id not found"})
    }
}
