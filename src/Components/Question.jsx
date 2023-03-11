import { nanoid } from 'nanoid';
import { useContext } from 'react';
import {React,useEffect,useState} from 'react'
import UserContext from '../Context/UserContext';
import OptionBtn from './OptionBtn';

export default function Question(props) {
  
  const {handleOptionClick,score}= useContext(UserContext)

  const optionElement = props.options.map((option)=>{
    return <OptionBtn key={option.optionId} value={option.value} isSelected={option.isSelected} correct_option={props.correct_option}
    selected_option={props.selected_option} handleOptionClick={()=>handleOptionClick(props.quesId, option.optionId, option.value)}/>
  })

  return (
    <div className='container'>
      <h4 className='question' dangerouslySetInnerHTML={{ __html: "Q"+props.num+". "+props.question }} />
      <div className='options'>
        {optionElement}
      </div>
      <div className='line'></div>
    </div>
  )
}
