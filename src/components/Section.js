import React from "react";
import './Section.css';
import Slider from "./Slider";

import recommended from "../data/recommended";

function Section() {

   return (
    <div className="containerSection">
      <h4>Recommended for you</h4>
      <Slider data={recommended} />
    </div>
   )

}

export default Section