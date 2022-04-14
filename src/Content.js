import React from "react";
import {Question} from "./Question.js";
import {Answers} from "./Answers.js";

function Content(props){
    const obj = [...props.array];
    const [count, setCount] = React.useState(1);
    const [questionNum, setQuestionNum] = React.useState(obj[0].num); //set to 1 because question starts with 1, not 0.
    const [question, setQuestion] = React.useState(obj[0].question);
    const [answers, setAnswers] = React.useState(obj[0].answer);

    console.log(`QuestionNum : ${questionNum}
    Question: ${question}
    Answers: ${answers}`)

    function handleClick(){
            if(count < obj.length){
            setCount(prev => prev+1);
            setQuestionNum(obj[count].num);
            setQuestion(obj[count].question);
            setAnswers(obj[count].answer);
            }
    }

    return(
        <div className="content-container">
            <h2>QUESTION # {questionNum}</h2>
            <div>
                <Question question={question}/>
                <Answers answers={answers} handleClick={handleClick}/>
            </div>
        </div>
    )
}

export {Content}