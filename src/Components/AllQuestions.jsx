import {React,useState,useEffect,useContext} from 'react'
import Question from './Question'
import UserContext from "../Context/UserContext"

export default function AllQuestions() {
  const questionsData = useContext(UserContext).questionsData;

  const questionElement =questionsData.map((item)=>{
    return <Question key={item.id} question={item.question} optionArray={[...item.incorrect_answers,item.correct_answer]}/>
  })
  
  return (
    <div className='questions-container'>
        {questionElement}
        <button className='btn'>Check Answers</button>
    </div>
  )
}
