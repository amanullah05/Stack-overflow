import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './Pages/Home/Home'
import Auth from '././Pages/Auth/Auth'
import Questions from './Pages/Questions/Questions'
import AskQuestion from './Pages/AskQuestion/AskQuestion'
import DisplayQuestion from './Pages/AskQuestion/DisplayQuestion'
import Tags from './Pages/Tags/Tags'
import Users from './Pages/Users/Users'
import UserProfile from './Pages/UserProfile/UserProfile'
function AllRoutes() {
  return (
    <div>
      <Routes>
      <Route path='/' element={<Home></Home>} ></Route>
      <Route path='/Auth' element={<Auth></Auth>}></Route>
      <Route path='/Questions' element={<Questions></Questions>}></Route>
      <Route path='/AskQuestion' element={<AskQuestion></AskQuestion>}></Route>
      <Route path='/Questions/:id' element={<DisplayQuestion></DisplayQuestion>}></Route>
      <Route path='/Tags' element ={< Tags />} />
      <Route path = '/Users' element ={< Users />} />
      <Route path='/Users/:id' element={<UserProfile /> } />
      </Routes>
    </div>

  )
}
export default AllRoutes
