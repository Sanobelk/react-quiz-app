import React from "react"

function SubmitClear(){
    return(
    <div>
        <div className="submitButtons">
            <button>Submit</button>
            <button>Clear</button>
        </div>
        <p className="errorText" >*You must choose an answer to submit.</p>
    </div>
    )
}

export {SubmitClear}