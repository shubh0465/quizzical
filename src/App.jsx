import axios from 'axios'
import { useState, useEffect } from 'react'
import 
{
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

import './App.css'
import Intro from './Components/Intro'

function App() {
  const [que, setQue] = useState([])

  useEffect(() => {
    axios.get("https://opentdb.com/api.php?amount=5")
      .then((res) => setQue(res.data))
  }, [])

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Intro />}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
