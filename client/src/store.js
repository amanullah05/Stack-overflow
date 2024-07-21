import { configureStore } from '@reduxjs/toolkit';
import {thunk} from 'redux-thunk';
import rootReducer from './reducers'; // Make sure this is the correct path to your combined reducers

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export default store;
