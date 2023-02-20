import {React,useState} from 'react'

export default function OptionBtn(props) {
  const styleButton = {
    backgroundColor: props.isSelected?"#D6DBF5":"",
  }

  return (
    <button className='option-btn' onClick={props.ButtonClickHandler} style={styleButton}>{props.option}</button>
  )
}
