import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import UserContext from '../Context/UserContext'

export default function Result() {
  const { handleSubmitClick, handleResetClick, submit, score } = useContext(UserContext);
  const navigate = useNavigate()
  return (
    <div className='result'>
      {submit ? (
        <span className="result-description">
          You scored {score}/5 correct answers
        </span>
      ) : (
        ""
      )}
      <button className='btn' onClick={!submit ? handleSubmitClick : () => {navigate("/");}}>{!submit ? "Check Answers" : "Play Again"}</button>
    </div>
  )
}
