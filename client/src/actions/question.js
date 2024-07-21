import * as api from '../api';

// Action type constants
const POST_QUESTION = 'POST_QUESTION';
const FETCH_ALL_QUESTIONS = 'FETCH_ALL_QUESTIONS';
const POST_ANSWER = 'POST_ANSWER';
const DELETE_QUESTION = 'DELETE_QUESTION';

export const askQuestion = (questionData, navigate) => async (dispatch) => {
    try {
        const { data } = await api.postQuestion(questionData);
        dispatch({ type: POST_QUESTION, payload: data });
        dispatch(fetchAllQuestions());
        navigate('/');
    } catch (error) {
        console.error('Error posting question:', error);
    }
};

export const fetchAllQuestions = () => async (dispatch) => {
    try {
        const { data } = await api.getAllQuestions();
        dispatch({ type: FETCH_ALL_QUESTIONS, payload: data });
    } catch (error) {
        console.error('Error fetching all questions:', error);
    }
};

export const postAnswer = (answerData) => async (dispatch) => {
    try {
        const { id, noOfAnswers, answerBody, userAnswered } = answerData;
        const { data } = await api.postAnswer(id, noOfAnswers, answerBody, userAnswered);
        dispatch({ type: POST_ANSWER, payload: data });
        dispatch(fetchAllQuestions());
    } catch (error) {
        console.error('Error posting answer:', error);
    }
};

export const deleteQuestion = (id, navigate) => async (dispatch) => {
    try {
        await api.deleteQuestion(id); // Call to API to delete question
        dispatch({ type: DELETE_QUESTION, payload: id }); // Dispatch action to handle local state update if necessary
        dispatch(fetchAllQuestions()); // Fetch all questions after deleting question to update the list
        navigate('/'); // Navigate to home page after successfully deleting question
    } catch (error) {
        console.error('Error deleting question:', error); // Log any errors that occur during deletion
    }
};


export const voteQuestion = (id, value, userId) => async (dispatch) => {
    try {
        const { data } = await api.voteQuestion(id, value, userId);
        dispatch({ type: 'VOTE_QUESTION', payload: data });
    } catch (error) {
        console.error('Error voting on question:', error);
    }
};

