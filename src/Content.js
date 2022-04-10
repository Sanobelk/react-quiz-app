import React from "react";
import {Question} from "./Question.js";
import {Answers} from "./Answers.js";
import {SubmitClear} from "./SubmitClear.js";

function Content(props){
    
    const [question, setQuestion] = React.useState(props.array[0].question);
    const [answers, setAnswers] = React.useState(props.array[0].answer);
    return(
        <div className="content-container">
            <h2>QUESTION # 1</h2>
            <div>
                <Question question={question}/>
                <Answers answers={answers} />
                <SubmitClear />
            </div>
        </div>
    )
}

export {Content}