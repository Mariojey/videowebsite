import React from "react";
import './Movie.css'

function Movie(props){
    console.log(props);
    <div className="containerMovie">
        <img src={`/photos/${props.backgroundImage}`} alt="Main theme photo" />
        <h4>{props.title}</h4>
    </div>

}

export default Movie