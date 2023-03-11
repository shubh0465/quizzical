import React from 'react'
import { useContext } from 'react'
import {Link} from 'react-router-dom'
import UserContext from '../Context/UserContext'

export default function Intro(props) {
  const handleStart = useContext(UserContext).handleStart;
  return (
    <div className='intro-page-container'>
        <h1 className='title-heading'>Quizzical</h1>
        <p className='description'>Test your skills here</p>
        <Link to="/quiz"><button className='btn' onClick={handleStart}>Start Quiz</button></Link>
    </div>
  )
}
