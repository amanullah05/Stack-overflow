import React from 'react';
import { Link } from 'react-router-dom';
import Avatar from '../../components/Avatar/Avatar';

const DisplayAnswer = ({ question, handleShare }) => {
    return (
        <div>
            {question.answer && question.answer.map((ans) => (
                <div key={ans._id} className="display-ans-container">
                    <div className="display-votes-ans">
                        <p>{ans.upVotes - ans.downVotes}</p>
                    </div>
                    <div className="display-ans-body">
                        <p>{ans.answerBody}</p>
                        <div className="question-actions-user">
                            <div>
                                <button onClick={() => handleShare()}>Share</button>
                            </div>
                            <div>
                                <p>answered {ans.answeredOn}</p>
                                <Link to={`/Users/${ans.userId}`} className="user-link" style={{ color: '#0086d8' }}>
                                    <Avatar backgroundColor="green" px='8px' py='5px'>
                                        {ans.userAnswered.charAt(0).toUpperCase()}
                                    </Avatar>
                                    <div>{ans.userAnswered}</div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default DisplayAnswer;
