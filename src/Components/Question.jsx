import { nanoid } from 'nanoid';
import {React,useEffect,useState} from 'react'
import OptionBtn from './OptionBtn';

export default function Question(props) {
  const optionArray = props.optionArray

  useEffect(()=>{
    function shuffle(arr) {
      for (var i = arr.length - 1; i >= 1; i -= 1) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
    shuffle(optionArray)
  },[])

  const optionArraywithId = optionArray.map((option)=>{
    return {
      value: option,
      id : nanoid(),
      isSelected: false
    }
  })
  
  const [selected, setSelected] = useState(optionArraywithId)

  function ButtonClickHandler(id){
    setSelected((oldArray)=>{
      return oldArray.map((item)=>{
        return {...item,
        isSelected: id===item.id ? !item.isSelected : false
        }
      })
    })  
  }

  const optionElement = selected.map((option)=>{
    return <OptionBtn key={option.id} option={option.value} isSelected={option.isSelected} ButtonClickHandler={()=>ButtonClickHandler(option.id)}/>
  })

  return (
    <div className='container'>
      <h4 className='question' dangerouslySetInnerHTML={{ __html: props.question }} />
      <div className='options'>
        {optionElement}
      </div>
      <div className='line'></div>
    </div>
  )
}
