import React, { useState } from "react";
import './SliderPresentation.css';

function SliderPresentation({data}) {
    const [active, setActives] = useState([
        true,
        false,
        false,
        false,
        false
    ])

    let stylesValue = `containerSliderPresentation background${data[0].classSuffix}0`


    const [dataSlide, setDataSlide] = useState(data[0])

    const [styles, setStyles] = useState(stylesValue)

    const handleClick = (event) => {
        let stylesToSet = `containerSliderPresentation background${data[0].classSuffix}${event.target.id}`
        let activeTable = [
            false,
            false,
            false,
            false,
            false
        ]
        activeTable[event.target.id] = true
        setActives(activeTable)
        setStyles(stylesToSet)
        setDataSlide(data[event.target.id])
    }

    return(
        <div className={styles}>
            <div className="divPagination">
                <div onClick={handleClick} id="0" className={`paginationDivItem background0000 ${active[0] ? 'activeDiv': ''}`}></div>
                <div onClick={handleClick} id="1" className={`paginationDivItem background0001 ${active[0] ? 'activeDiv': ''}`}></div>
                <div onClick={handleClick} id="2" className={`paginationDivItem background0002 ${active[0] ? 'activeDiv': ''}`}></div>
                <div onClick={handleClick} id="3" className={`paginationDivItem background0003 ${active[0] ? 'activeDiv': ''}`}></div>
                <div onClick={handleClick} id="4" className={`paginationDivItem background0004 ${active[0] ? 'activeDiv': ''}`}></div>
            </div>
            <div className="sliderPresentationTextContentContainer">
            <div className="sliderPresentationTextContent">
                <h2>{dataSlide.title}</h2>
                <button className="presButtonRed">Watch</button>
            </div>
            </div>
        </div>
    )
}

export default SliderPresentation