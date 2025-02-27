import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './AskQuestion.css';
import { askQuestion } from '../../actions/question'; // Import the correct action creator

const AskQuestion = () => {
  const [questionTitle, setQuestionTitle] = useState('');
  const [questionBody, setQuestionBody] = useState('');
  const [questionTags, setQuestionTags] = useState('');

  const dispatch = useDispatch();
  const User = useSelector((state) => state.currentUserReducer);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (User) {
      dispatch(askQuestion({ 
        questionTitle, 
        questionBody, 
        questionTags, 
        userPosted: User.result.name 
      }, navigate));
    } else {
      navigate('/Auth');
    }
  };

  const handleEnter = (e) => {
    if (e.key === 'Enter') {
      setQuestionBody(questionBody + '\n');
    }
  };
  return (
    <div className="ask-question">
      <div className="ask-ques-container">
        <h1>Ask a public question</h1>
        <form onSubmit={handleSubmit}>
          <div className="ask-form-container">
            <label htmlFor="ask-que-title">
              <h4>Title</h4>
              <p>Be specific and imagine you're asking a question to another person</p>
              <input
                type="text"
                id="ask-que-title"
                onChange={(e) => setQuestionTitle(e.target.value)}
                placeholder="e.g. Is there an R function for finding the index of an element in a vector?"
                required
              />
            </label>

            <label htmlFor="ask-que-body">
              <h4>Body</h4>
              <p>Include all the information someone would need to answer your question</p>
              <textarea
                id="ask-que-body"
                onChange={(e) => setQuestionBody(e.target.value)}
                cols="30"
                rows="10"
                onKeyDown={handleEnter}
                required
              ></textarea>
            </label>

            <label htmlFor="ask-que-tags">
              <h4>Tags</h4>
              <p>Add up to 5 tags to describe what your question is about</p>
              <input
                type="text"
                id="ask-que-tags"
                onChange={(e) => setQuestionTags(e.target.value.split(' '))}
                placeholder="e.g. (xml typescript wordpress)"
                required
              />
            </label>
          </div>
          
          <input type="submit" value="Review your question" className="review-btn" />
        </form>
      </div>
    </div>
  );
};

export default AskQuestion;
