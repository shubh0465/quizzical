import { React, useState, useEffect} from "react";
import UserContext from "./UserContext";
import { nanoid } from 'nanoid'
import axios from 'axios'

export default function UserState(props) {
    const [start, setStart] = useState(false)
    const [questionsData, setQuestionsData] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const fetchData = async () =>{
        const result = await axios("https://opentdb.com/api.php?amount=5&type=multiple")
        console.log(result.data)
        setQuestionsData(result.data.results.map(item=>{
            return{...item, id : nanoid()}
        }))
        setIsLoading(false)
        // axios.get("https://opentdb.com/api.php?amount=5&type=multiple")
        //     .then((res) => setQuestionsData(res.data.results.map(item => {
        //         return { ...item, id: nanoid()}
        //     })))
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <UserContext.Provider value={{questionsData,start,isLoading}}>
            {props.children}
        </UserContext.Provider>
    )
}