import { React, useState, useEffect, useContext } from 'react'
import Question from './Question'
import UserContext from "../Context/UserContext"
import Loader from './Loader';
import Result from './Result';

export default function AllQuestions() {
  const { start, isLoading, fetchData, questionsData, submit } = useContext(UserContext)

  useEffect(() => {
    fetchData();
  }, [start])
  const questionElement = questionsData.map((item, index) => {
    return <Question key={item.id} question={item.question} options={item.options} quesId={item.id} correct_option={item.correct_option} selected_option={item.selected_option} num={index + 1} />
  })

  return (
    isLoading ? <Loader /> :
      <div className='questions-container'>
        {questionElement}
        <Result />
      </div>
  )
}
