import React from "react";

function Answers(props){
    return(
        <div className="answers-container">
            <button>{props.answers[0]}</button>
            <button>{props.answers[1]}</button>
            <button>{props.answers[2]}</button>
            <button>{props.answers[3]}</button>
        </div>
    )
}

export {Answers}