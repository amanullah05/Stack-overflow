import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000' });

API.interceptors.request.use((req) => {
    if (localStorage.getItem('Profile')) {
      req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem('Profile')).token}`;
    }
    return req;
  });

export const login = (authData) => API.post('/user/login', authData);
export const signup = (authData) => API.post('/user/signup', authData);

export const postQuestion = (questionData) => API.post('/questions/ask', questionData);
export const getAllQuestions = () => API.get('/questions/get');
export const deleteQuestion = (id) => API.delete(`/questions/delete/${id}`);


export const voteQuestion = (id, value, userId) => API.patch(`/questions/vote/${id}`, { value, userId });



export const postAnswer = (id, noOfAnswers, answerBody, userAnswered) => API.patch(`/answer/post/${id}`, { noOfAnswers, answerBody, userAnswered });

export const fetchAllUsers =()=> API.get('/user/getAllUsers');

export const updateProfile =(id, updateData) => API.patch(`/user/update/${id}`,updateData)


