import React from "react";

function Question(props){
    console.log(props);
    return(
        <div className="question-container">
            <h3>{props.question}</h3>
        </div>
    )
}

export {Question}