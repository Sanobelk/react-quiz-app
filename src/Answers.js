import React from "react";

function Answers(props){


    return(
        <div className="answers-container">
            <button onClick={props.handleClick}>{props.answers[0]}</button>
            <button onClick={props.handleClick}>{props.answers[1]}</button>
            <button onClick={props.handleClick}>{props.answers[2]}</button>
            <button onClick={props.handleClick}>{props.answers[3]}</button>
        </div>
    )
}

export {Answers}
