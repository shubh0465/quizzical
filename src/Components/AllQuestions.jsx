import {React,useState,useEffect} from 'react'
import axios from 'axios'
import Question from './Question'
import { nanoid } from 'nanoid'

export default function AllQuestions({queData}) {
  const questionElement =queData.map((item,index)=>{
    return <Question key={index} question={item.question}/>
  })
  return (
    <div className='questions-container'>
        {questionElement}
    </div>
  )
}
