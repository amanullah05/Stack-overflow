import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './Auth.css';
import icon from '../../assets/stack overflow icon.png';
import AboutAuth from './AboutAuth';
import { signup, login } from '../../actions/auth';

function Auth() {
  const [isSignup, setisSignup] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSwitch = () => {
    setisSignup(!isSignup);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignup) {
      if (!email && !password) {
        alert('Enter email and password');
      }
      if (!name) {
        alert('Enter a name to continue');
      }
      dispatch(signup({ name, email, password }));
    } else {
      dispatch(login({ email, password }, navigate));
    }
  };

  return (
    <section className="auth-section">
      {isSignup && <AboutAuth />}
      <div className="auth-container1">
        {!isSignup && <img src={icon} alt="stack overflow" className="login-logo" />}

        <form onSubmit={handleSubmit}>
          {isSignup && (
            <label htmlFor="name">
              <h4>Display Name</h4>
              <input
                type="text"
                name="name"
                id="name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </label>
          )}
          <label htmlFor="email">
            <h4>Email</h4>
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              autoComplete='on'
              onChange={(e) => {
                setEmail(e.target.value);
                
              }}
            />
          </label>
          <label htmlFor="password">
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <h4>Password</h4>
              {!isSignup && <h4 style={{ color: '#007ac6', fontSize: '13px' }}>Forgot password?</h4>}
            </div>
            <input
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            {!isSignup && (
              <p style={{ color: '#666767', fontSize: '13px' }}>
                Password must contain at least eight <br />
                characters, including at least 1 letter and 1 <br /> Number.
              </p>
            )}
            {isSignup && (
              <label htmlFor="check">
                <br />
                <input type="checkbox" name="check" id="check" autoComplete='on' />
                <p style={{ fontSize: '13px' }}>
                  opt-in to receive occasional <br /> product updates, user research invitations, <br />
                  company announcements, and digests.
                </p>
              </label>
            )}
          </label>
          <button type="submit" className="auth-btn">
            {isSignup ? 'Sign up' : 'Log in '}
          </button>
          {isSignup && (
            <p style={{ color: '#666767', fontSize: '13px' }}>
              By clicking "Sign up", you agree to our <span style={{ color: '#007ac6' }}>terms of <br /> services</span>,
              <span style={{ color: '#007ac6' }}>Privacy policy </span> and
              <span style={{ color: '#007ac6' }}>cookie policy</span>
            </p>
          )}
        </form>
        <p>
          {isSignup ? 'Already have an account ?' : "Don't have an account"}
          <button type="button" className="handle-switch-btn" onClick={handleSwitch}>
            {isSignup ? 'Log in' : 'Sign up'}
          </button>
        </p>
      </div>
    </section>
  );
}

export default Auth;
