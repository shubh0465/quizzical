import axios from 'axios'
import { useState, useEffect } from 'react'
import {
BrowserRouter as Router,
Routes,
Route
} from 'react-router-dom'

import './App.css'
import AllQuestions from './Components/AllQuestions'
import Intro from './Components/Intro'

function App() {
  const [queData, setQueData] = useState([])

  useEffect(() => {
    axios.get("https://opentdb.com/api.php?amount=5&type=multiple")
      .then((res) => setQueData(res.data.results))
  }, [])

  console.log(queData)

  return (
    <>
      <Router>
        <Routes>
          <Route  path="/" element={<Intro />}></Route>
          <Route  path='/quiz' element={<AllQuestions queData={queData}/>}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
