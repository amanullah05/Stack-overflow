const questionsReducer = (state = { data: [] }, action) => {
  switch (action.type) {
    case 'POST_QUESTION':
      return { ...state, data: [...state.data, action.payload] };
    case 'FETCH_ALL_QUESTIONS':
      return { ...state, data: action.payload };
    case 'POST_ANSWER':
      return { ...state, data: state.data.map(question => question._id === action.payload._id ? action.payload : question) };
      case 'VOTE_QUESTION':
        return { ...state, data: action.payload };
    default:
      return state;
  }
};


export default questionsReducer;

