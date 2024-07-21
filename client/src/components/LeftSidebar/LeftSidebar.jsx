import React from 'react'
import './LeftSidebar.css'
import {NavLink} from 'react-router-dom' 

function LeftSidebar() {
  return (
    <div className='left-sidebar'>
      <nav className='side-nav'>
       <NavLink to='/' className='side-nav-links' activeclassName='active' style={{paddingLeft:"40px"}}>
              <p><b>Home</b></p>
        </NavLink>  
        <div className='side-nav-div'>
          <div><p><b>PUBLIC</b></p></div>
          <NavLink to='/Questions' className='side-nav-links' activeclassName='active' style={{paddingLeft:"40px"}} >
            <p > Questions </p>
          </NavLink>
          <NavLink to='/Tags' className='side-nav-links' activeclassName='active' style={{paddingLeft:"40px"}} >
            <p>Tags</p>
          </NavLink>
          <NavLink to='/Users' className='side-nav-links' activeclassName='active' style={{paddingLeft:"40px"}} >
            <p>Users</p>
          </NavLink>
        </div>
      </nav>


    </div>
  )
}

export default LeftSidebar
