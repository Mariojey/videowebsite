import React, { useState } from "react";
import './Section.css';
import movies from "../data/movies";
import Movie from "./Movie";

function Section(){


    const [display, setDisplay] = useState(movies[0])

    return(
        <div className="contaierSection">
            <div className="leftList">
                <p>Recomended for you</p>
                <div className="movieList">

                    <Movie props={movies[0]}/>
                    <Movie props={movies[1]}/>
                    <Movie props={movies[2]}/>
                    <Movie props={movies[3]}/>
                    <Movie props={movies[4]}/>
                    <Movie props={movies[5]}/>

                </div>
            </div>
            <div className="rightBox">
                <img src={`/photos/${display.backgroundImage}`} alt="Main Theme Image" />
            </div>
        </div>
    )
}

export default Section