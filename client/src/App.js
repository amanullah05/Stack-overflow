import {Route, BrowserRouter as Router } from 'react-router-dom'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Navbar from './components/Navbar/Navbar'
import './App.css' 
import AllRoutes from './AllRoutes'
import { fetchAllQuestions } from './actions/question'
import { fetchAllUsers } from './actions/users'

function App() {

  const dispatch = useDispatch()
  useEffect (()=> {
    dispatch(fetchAllQuestions())
    dispatch(fetchAllUsers())
  }, [dispatch])
 

  return (
    <div className='App'>
      <Router>
      <Navbar />
      <AllRoutes>
        <Route></Route>
      </AllRoutes> 
      </Router>
    </div>
  )
}

export default App
