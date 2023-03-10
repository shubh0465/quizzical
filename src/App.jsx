import axios from 'axios'
import { nanoid } from 'nanoid'
import { useState, useEffect } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

import './App.css'
import AllQuestions from './Components/AllQuestions'
import Intro from './Components/Intro'
import UserState from './Context/UserState'

function App() {
  return (
    <>
      <UserState>
        <Router>
          <Routes>
            <Route path="/" element={<Intro />}></Route>
            <Route path='/quiz' element={<AllQuestions />}></Route>
          </Routes>
        </Router>
      </UserState>
    </>
  )
}

export default App
