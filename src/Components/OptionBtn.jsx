import {React,useState} from 'react'

export default function OptionBtn(props) {
  const [style, setStyle] = useState(false)

  const styleButton = {
    backgroundColor: style?"#D6DBF5":"",
    border: style ? 0:""
  }

  function ButtonClickHandler(){
    setStyle((oldState)=>{
        return !oldState
    })
  }

  return (
    <button className='option-btn' onClick={ButtonClickHandler} style={styleButton}>{props.option}</button>
  )
}
