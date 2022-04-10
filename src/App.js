import React from "react";
import {Content} from "./Content.js";
import {questionsarray} from "./questionsdata";

function App(){
    const contentArray = questionsarray.map(q => q);
    return(
        <div className="app-container">
            <Content array={contentArray}/>
        </div>
    )
}

export {App}