import React from "react";
import {Question} from "./Question.js";
import {Answers} from "./Answers.js";

function Content(props){
    const obj = [...props.array];
    const [count, setCount] = React.useState(1);
    const [questionNum, setQuestionNum] = React.useState(obj[0].num); //set to 1 because question starts with 1, not 0.
    const [question, setQuestion] = React.useState(obj[0].question);
    const [answers, setAnswers] = React.useState(obj[0].answer);
    const [corrAns, setCorrAns] = React.useState(obj[0].correct);
    const [quizOver, setQuizOver] = React.useState(false);
    const [numberOfCorr, setNumberOfCorr] = React.useState(0);

    console.log(numberOfCorr);
    function handleClick(event){
        let x = obj[count-1].answer[obj[count-1].correct]
            if(count < obj.length){
            setCount(prev => prev+1);
            setQuestionNum(obj[count].num);
            setQuestion(obj[count].question);
            setAnswers(obj[count].answer);
            setCorrAns(obj[count].correct)
            }
            if(event.target.textContent == x ){
                alert('you got it');
                setNumberOfCorr(prev => prev+1);
            }else{
                alert('baaap wrong');
            }

            if(questionNum == obj.length){
                alert('woop woop');
                setQuizOver(true);
            }
            
    }

    return(
        <div className="content-container">
            {!quizOver ? <div>
            <h2>QUESTION # {questionNum}</h2>
             <div>
                <Question question={question}/>
                <Answers answers={answers} handleClick={handleClick}/>
            </div>
            </div>
            :
            <h1>You got {numberOfCorr} out of {obj.length}</h1>
            }


        </div>
    )
}

export {Content}