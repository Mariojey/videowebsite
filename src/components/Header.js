import React, { useEffect, useState } from 'react';
import './Header.css';
import Navbar from './Navbar';
import movies from '../data/movies'

function Header() {

    const [actives, setActives] = useState([
        true,
        false,
        false,
        false,
        false,
        false
    ])

    const [backgroundStyle, setBackgroundStyle] = useState("backgroundSlider background0")

    const [movie, setMovie] = useState(movies[0])

    const handleClick = (event) => {
        setMovie(movies[event.target.id])
        let activeTable = [false, false, false, false, false, false]
        activeTable[event.target.id] = true
        setActives(activeTable)
        setBackgroundStyle(`backgroundSlider background${event.target.id}`)
        
    }
  return (
    <div className="containerHeader">
       <Navbar />
        <div className={backgroundStyle}>
            <div className="title">
                <h1 className='headerText'>{movie.title}</h1>
                <p className='description'>{movie.description}</p>
                <button className='button'>Read More</button>
            </div>
            <div className="pagination">
                <div onClick={handleClick} id="0" className={`circle ${actives[0] ? 'active' : ''}`}></div>
                <div onClick={handleClick} id="1" className={`circle ${actives[1] ? 'active' : ''}`}></div>
                <div onClick={handleClick} id="2" className={`circle ${actives[2] ? 'active' : ''}`}></div>
                <div onClick={handleClick} id="3" className={`circle ${actives[3] ? 'active' : ''}`}></div>
                <div onClick={handleClick} id="4" className={`circle ${actives[4] ? 'active' : ''}`}></div>
                <div onClick={handleClick} id="5" className={`circle ${actives[5] ? 'active' : ''}`}></div>
            </div>
        </div>

    </div>
  );
}

export default Header;
