import {React,useState,useEffect} from 'react'
import axios from 'axios'
import Question from './Question'
import { nanoid } from 'nanoid'

export default function AllQuestions({queData}) {

  const questionElement =queData.map((item)=>{
    return <Question key={nanoid()} question={item.question} optionArray={[...item.incorrect_answers,item.correct_answer]}/>
  })
  
  return (
    <div className='questions-container'>
        {questionElement}
    </div>
  )
}
