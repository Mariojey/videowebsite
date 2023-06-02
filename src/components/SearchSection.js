import React, { useState } from "react";
import './SearchSection.css'
import SearchBar from "./SearchBar";
import SearchResultList from "./SearchResultList";
import video from "../assets/movie.mp4";

function SearchSection(){
    const [results, setResults] = useState([])

    return(

        <div id="search" className="searchSectionContainer">
                <video src={video} className="video" autoPlay loop muted poster="cinema.jpg" />

                <SearchBar setResults={setResults} />
                {results && results.length > 0 && <SearchResultList results={results} />}
        </div>
    )

}

export default SearchSection