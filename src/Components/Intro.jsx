import React from 'react'
import {Link} from 'react-router-dom'

export default function Intro() {
  return (
    <div className='intro-page-container'>
        <h1 className='title-heading'>Quizzical</h1>
        <p className='description'>Test your skills here</p>
        <Link to="/questions"><button className='btn'>Start Quiz</button></Link>
    </div>
  )
}
