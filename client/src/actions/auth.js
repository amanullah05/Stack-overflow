import { login as loginAPI, signup as signupAPI } from '../api';
import * as currentUser from './currentUser';
export const login = (authData, navigate) => async (dispatch) => {
  try {
    const { data } = await loginAPI(authData);
    dispatch({ type: 'AUTH', data });
    dispatch(currentUser.setCurrentUser(JSON.parse(localStorage.getItem('Profile'))))
    navigate('/');
  } catch (error) {
    console.error("Login error:", error);
  }
};

export const signup = (authData) => async (dispatch) => {
  try {
    const { data } = await signupAPI(authData);
    dispatch({ type: 'AUTH', data });
    dispatch(currentUser.setCurrentUser(JSON.parse(localStorage.getItem('Profile'))))
  } catch (error) {
    console.error("Signup error:", error);
  }
};
