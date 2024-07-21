import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { postAnswer, deleteQuestion, voteQuestion } from '../../actions/question';

import upvote from '../../assets/caret-up-solid.svg';
import downvote from '../../assets/sort-down-solid.svg';
import './Questions.css';
import RightSidebar from '../../components/RightSidebar/RightSidebar';
import Avatar from '../../components/Avatar/Avatar';
import DisplayAnswer from './DisplayAnswer';

const QuestionsDetails = () => {
    const { id } = useParams();
    const questionsList = useSelector((state) => state.questionsReducers);
    console.log(questionsList);
    
    const [answer, setAnswer] = useState('');
    const [render, setRender] = useState(false); // State to force re-render
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const User = useSelector((state) => state.currentUserReducer);
    const location = useLocation();
    const url = 'http://localhost:3000';

    const handlePostAns = (e, answerLength) => {
        e.preventDefault();
        if (User === null) {
            alert('Login or Signup to answer a question');
            navigate('/Auth');
        } else {
            if (answer === '') {
                alert('Enter an answer before submitting');
            } else {
                dispatch(postAnswer({ id, noOfAnswers: answerLength + 1, answerBody: answer, userAnswered: User.result.name }));
                setAnswer('');
            }
        }
    };

    const handleShare = () => {
        alert('Copied URL: ' + url + location.pathname);
    };

    const handleDelete = () => {
        dispatch(deleteQuestion(id, navigate));
    };

    const handleUpVote = () => {
        dispatch(voteQuestion(id, 'upVote', User.result._id));
        setRender(!render); // Force re-render
    };

    const handleDownVote = () => {
        dispatch(voteQuestion(id, 'downVote', User.result._id));
        setRender(!render); // Force re-render
    };

    return (
        <div className='question-details-page'>
            <div className='main-content'>
                {questionsList.data === null ? (
                    <h1>Loading...</h1>
                ) : Array.isArray(questionsList.data) && questionsList.data.length === 0 ? (
                    <h1>No questions found...</h1>
                ) : (
                    Array.isArray(questionsList.data) && questionsList.data.filter((question) => question._id === id).map((question) => (
                        <div key={question._id}>
                            <section className='question-details-container'>
                                <h1>{question.questionTitle}</h1>
                                <div className='question-details-container-2'>
                                    <div className='question-votes'>
                                        <img src={upvote} alt="upvote" width='18' onClick={handleUpVote} />
                                        <p>{(question.upVote?.length || 0) - (question.downVote?.length || 0)}</p>
                                        <img src={downvote} alt="downvote" width='18' onClick={handleDownVote} />
                                    </div>
                                    <div style={{ width: "100%" }}>
                                        <p className='question-body'>{question.questionBody}</p>
                                        <div className='question-details-tags'>
                                            {question.questionTags.map((tag) => (
                                                <p key={tag}>{tag}</p>
                                            ))}
                                        </div>
                                        <div className='question-actions-user'>
                                            <div>
                                                <CopyToClipboard text={url + location.pathname} onCopy={handleShare}>
                                                    <button type='button'>Share</button>
                                                </CopyToClipboard>
                                                {User?.result?._id === question?.userId && (
                                                    <button type='button' onClick={handleDelete}>Delete</button>
                                                )}
                                            </div>
                                            <div>
                                                <p>asked {question.askedOn}</p>
                                                <Link to={`/Users/${question.userId}`} className='user-link' style={{ color: '#0086d8' }}>
                                                    <Avatar backgroundColor="orange" px='8px' py='5px'>
                                                        {question.userPosted.charAt(0).toUpperCase()}
                                                    </Avatar>
                                                    <div>{question.userPosted}</div>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            {question.noOfAnswers !== 0 && (
                                <section>
                                    <h3>{question.noOfAnswers} Answers</h3>
                                    <DisplayAnswer question={question} handleShare={handleShare} />
                                </section>
                            )}
                            <section className='post-ans-container'>
                                <h3>Your Answer</h3>
                                <form onSubmit={(e) => handlePostAns(e, question.answer ? question.answer.length : 0)}>
                                    <textarea 
                                        cols="30" 
                                        rows="10" 
                                        value={answer}
                                        onChange={(e) => setAnswer(e.target.value)}
                                    ></textarea>
                                    <input type="submit" className='post-ans-btn' value='Post Your Answer' />
                                </form>
                                <p>Browse other questions tagged
                                    {question.questionTags.map((tag) => (
                                        <Link to='/Tags' key={tag} className='ans-tags'> {tag} </Link>
                                    ))} or
                                    <Link to='/AskQuestion' style={{ textDecoration: "none", color: "#009dff" }}> ask your own question.</Link>
                                </p>
                            </section>
                        </div>
                    ))
                )}
            </div>
            <RightSidebar />
        </div>
    );
}

export default QuestionsDetails;
