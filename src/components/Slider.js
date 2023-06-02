import { useState } from "react"
import React from "react"
import Slide from "./Slide"
import './Slider.css'

function Slider({data}) {
    const [actives, setActives] = useState([
        true,
        false
    ])

    let dataArray = [
        data[0],
        data[1],
        data[2]
    ]

    let stylesArray = [
        ['containerSlide background00'],
        ['containerSlide background01'],
        ['containerSlide background02']
    ]
    const [slides, setSlides] = useState(dataArray)
    
    const [styles, setStyles] = useState(stylesArray)

    const handleClick = (event) => {
        let arrayToSet = []
        event.target.id == 0 ? arrayToSet = [data[0], data[1], data[2]] : arrayToSet = [data[3], data[4], data[5]]
        let activeTable = [false, false]
        activeTable[event.target.id] = true
        setActives(activeTable)
        let stylesArrayToSet = [
            [`containerSlide background0${3*event.target.id}`],
            [`containerSlide background0${3*event.target.id + 1}`],
            [`containerSlide background0${3*event.target.id + 2}`]
        ]
        setStyles(stylesArrayToSet)
        setSlides(arrayToSet)
        console.log(actives);
        console.log(styles);
        console.log(event.target.id);
    }
    


    return(
        <div className="containerSlider">
            <div className="listSlides">
                <Slide props={{styles: styles[0], data: slides[0]}}/>
                <Slide props={{styles: styles[1], data: slides[1]}}/>
                <Slide props={{styles: styles[2], data: slides[2]}}/>
            </div>
            <div className="pagination">
                <div onClick={handleClick} id="0" className={`circle ${actives[0] ? 'active' : ''}`}></div>
                <div onClick={handleClick} id="1" className={`circle ${actives[1] ? 'active' : ''}`}></div>
            </div>
        </div>
    )

}

export default Slider