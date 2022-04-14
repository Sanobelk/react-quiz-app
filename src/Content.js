import React from "react";
import {Question} from "./Question.js";
import {Answers} from "./Answers.js";
import {SubmitClear} from "./SubmitClear.js";

function Content(props){
    const [questionNum, setQuestionNum] = React.useState(0);
    const [question, setQuestion] = React.useState(props.array[questionNum].question);
    const [answers, setAnswers] = React.useState(props.array[questionNum].answer);

    function handleSubmit(){
        setQuestionNum(prev => {
            let x = prev+1;
            setQuestion(props.array[x].question);
            setAnswers(props.array[x].answer);
            return x;
        });
    }

    console.log(questionNum);

    return(
        <div className="content-container">
            <h2>QUESTION # {questionNum +1}</h2>
            <div>
                <Question question={question}/>
                <Answers answers={answers} />
                <button onClick={handleSubmit}>Submit</button>
                <button>Clear</button>
            </div>
        </div>
    )
}

export {Content}