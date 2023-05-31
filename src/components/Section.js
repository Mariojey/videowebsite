import React, { useState } from "react";
import './Section.css';
import Movie from "./Movie";

import Slider from "react-slick";

import recommended from "../data/recommended";

function Section() {

    /*
    const recommendedMovies = recommended.map((movie) => {
        return <Movie key={movie.id} props={movie}/>
    })
    */

    let settings = {
        dots: true,
          infinite: false,
          speed: 500,
          slidesToShow: 4,
          slidesToScroll: 4,
          initialSlide: 0,
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
        };
    

    return (
        <div className="containerSection">
                <p>Recomended for you</p>
                <div className="movieList">

                    <Slider {...settings}>
                        <Movie props={recommended[0]}/>
                        <Movie props={recommended[1]}/>
                        <Movie props={recommended[2]}/>
                        <Movie props={recommended[3]}/>
                    </Slider>

                </div>
        </div>
    )
}

export default Section