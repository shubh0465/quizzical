import React from 'react'
import { useContext } from 'react'
import {Link} from 'react-router-dom'
import UserContext from '../Context/UserContext'

export default function Intro() {
  const {handleResetClick} = useContext(UserContext)
  return (
    <div className='intro-page-container'>
        <h1 className='title-heading'>Quizzical</h1>
        <p className='description'>Test your skills here</p>
        <Link to="/quiz" onClick={handleResetClick}><button className='btn'>Start Quiz</button></Link>
    </div>
  )
}
