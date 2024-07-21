import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/so-logo.png';
import search from '../../assets/searchicon.svg';
import Avatar from '../Avatar/Avatar';
import { decode } from 'punycode';
import './navbar.css';
import { setCurrentUser } from '../../actions/currentUser';

function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const User = useSelector((state) => state.currentUserReducer);

  useEffect(() => {
    const token =User?.token
    if(token){
      const decodedToken = decode(token)
      if(decodedToken.exp * 1000 < new Date().getTime()){
        handleLogout()
      }
    }
    dispatch(setCurrentUser(JSON.parse(localStorage.getItem('Profile'))));
  }, [dispatch]);

  const handleLogout = () => {
    localStorage.removeItem('Profile');
    dispatch(setCurrentUser(null));
    navigate('/');
  };

  return (
    <nav className='main-nav'>
      <div className='navbar'>
        <Link to='/' className='nav-item nav-logo'>
          <img src={logo} alt="logo" width="140px" />
        </Link>
        <Link to='/' className='nav-item nav-btn'>About</Link>
        <Link to='/' className='nav-item nav-btn'>Products</Link>
        <Link to='/' className='nav-item nav-btn'>For Teams</Link>
        <form className='search-form'>
          <input type="text" placeholder='Search...' className='search-box' />
          <img src={search} alt="search" width="18" className='search-icon' />
        </form>
        {User === null ? (
          <Link to='/Auth' className='nav-item nav-links'>Log in</Link>
        ) : (
          <>
            <Avatar backgroundColor='#009dff' px='12px' py='7px' borderRadius='50%' color='white'>
              <Link to={`/Users/${User?.result?._id}`} style={{ color: "white", textDecoration: 'none' }}>{User.result.name.charAt(0).toUpperCase()}</Link>
            </Avatar>
            <button className='nav-item nav-links' onClick={handleLogout}>Log out</button>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
