import {React,useState,useEffect} from 'react'
import axios from 'axios'
import Question from './Question'
import { nanoid } from 'nanoid'

export default function AllQuestions() {

  const [questionsData, setQuestionsData] = useState([])

  useEffect(() => {
      axios.get("https://opentdb.com/api.php?amount=5&type=multiple")
      .then((res) => setQuestionsData(res.data.results.map(item=>{
        return {...item,id:nanoid()}
      })))
  }, [])

  const questionElement =questionsData.map((item)=>{
    return <Question key={item.id} question={item.question} optionArray={[...item.incorrect_answers,item.correct_answer]}/>
  })
  
  return (
    <div className='questions-container'>
        {questionElement}
        <button>Check Answers</button>
    </div>
  )
}
