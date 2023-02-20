import { React, useState, useEffect} from "react";
import UserContext from "./UserContext";
import { nanoid } from 'nanoid'
import axios from 'axios'

export default function UserState(props) {
    const [questionsData, setQuestionsData] = useState([])

    useEffect(() => {
        axios.get("https://opentdb.com/api.php?amount=5&type=multiple")
            .then((res) => setQuestionsData(res.data.results.map(item => {
                return { ...item, id: nanoid() }
            })))
    }, [])

    return (
        <UserContext.Provider value={{questionsData}}>
            {props.children}
        </UserContext.Provider>
    )
}