import React from "react";
import './Section.css';
import Slider from "./Slider";
import SliderPresentation from "./SliderPresentation";

import recommended from "../data/recommended";
import popular from "../data/popular";
import mostWatched from "../data/mostWatched";

function Section() {

   return (
    <div className="containerSection">
      <h4>Recommended for you</h4>
      <Slider data={recommended} />
      <h4>Popular</h4>
      <Slider data={popular} />
      <SliderPresentation data={mostWatched}/>
    </div>
   )

}

export default Section