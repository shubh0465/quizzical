import React, { useContext } from 'react'
import UserContext from '../Context/UserContext'

export default function Result() {
  const submit = useContext(UserContext).submit;
  const handleSubmit = useContext(UserContext).handleSubmit;;

  return (
    <div>
        {
           <button className='btn' onClick={handleSubmit}>Check Answers</button>
        }
    </div>
  )
}
