import { useContext } from 'react'
import {React,useState} from 'react'
import UserContext from '../Context/UserContext'

export default function OptionBtn({
  isSelected,
  correct_option,
  value,
  selected_option,
  handleOptionClick,
}) {
  const {submit} = useContext(UserContext)
  return (
    <button className={`option-btn ${isSelected && !submit ? "selectedButton" : ""}`}
    onClick={!submit ? handleOptionClick : undefined} dangerouslySetInnerHTML={{ __html: value }}></button>
  )
}
