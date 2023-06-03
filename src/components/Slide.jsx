import React from "react";
import './Slide.css'

function Slide({props}){

    return(
        <div className={(props.styles).toString()}>

            <div className="slideContent">
                <p>{props.data.title}</p>
                <button className="playBtn">Play</button>
            </div>
        </div>
        
    )

}


export default Slide