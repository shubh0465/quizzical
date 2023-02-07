import React from 'react'

export default function Question(props) {
    
  return (
    <div className='container'>
        <h4 className='question'>{props.question}</h4>
        <div className='options'>

        </div>
        <div className='line'></div>
    </div>
  )
}
