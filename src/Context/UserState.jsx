import { React, useState, useEffect } from "react";
import UserContext from "./UserContext";
import { nanoid } from 'nanoid'
import axios from 'axios'

export default function UserState(props) {
    const [questionsData, setQuestionsData] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [submit, setSubmit] = useState(false)
    const [score, setScore] = useState(0)

    function getOptionsArray(arr) {
        const options = arr.map((option) => {
            return {
                optionId: nanoid(),
                value: option,
                isSelected: false,
            };
        });
        for (let i = options.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [options[i], options[j]] = [options[j], options[i]];
        }
        return options;
    }

    const fetchData = async () => {
        const result = await axios("https://opentdb.com/api.php?amount=5&type=multiple")
        setQuestionsData(result.data.results.map(item => {
            return {
                id: nanoid(),
                question: item.question,
                options: getOptionsArray([
                    ...item.incorrect_answers,
                    item.correct_answer,
                ]),
                correct_option: item.correct_answer,
                selected_option: "",
            }
        }))
        setIsLoading(false)
    }

    function handleOptionClick(quesId, optionId, value) {
        setQuestionsData((prevState) => {
            return prevState.map((question) => {
                return quesId !== question.id ? { ...question }
                    : {
                        ...question,
                        selected_option: value,
                        options: question.options.map((option) => {
                            return option.optionId === optionId ?
                                { ...option, isSelected: !option.isSelected }
                                : { ...option, isSelected: false }
                        })
                    }
            })
        })
    }

    function handleSubmitClick() {
        setSubmit(true);
        setQuestionsData((prev) => {
            return prev.map((question) => {
                if (question.selected_option === question.correct_option) {
                    setScore((prev) => prev + 1);
                }
                return {
                    ...question,
                    option: question.options.map((option) => ({
                        ...option.options,
                        isSelected: "false",
                    })),
                };
            });
        });
    }

    function handleResetClick() {
        setSubmit(false);
        setScore(0);
        setIsLoading(true)
    }

    return (
        <UserContext.Provider value={{isLoading, fetchData, questionsData, handleOptionClick, submit, handleSubmitClick, handleResetClick,score }}>
            {props.children}
        </UserContext.Provider>
    )
}