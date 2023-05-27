import React, { useEffect, useState } from "react";
import './Navbar.css'
function Navbar() {
    const [sticky, setSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setSticky(window.scrollY > 200);
            console.log(window.scrollY);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll)
    })


    return(
        <nav className={`${sticky ? "sticky": ""}`}>
            <div className="logo">

            </div>
            <div className="navList">
                <ul>
                    <a href="#home" className="navLink">
                        <li className="navItem">Home</li>
                        <span className="border"></span>
                    </a>
                    <a href="#home" className="navLink">
                        <li className="navItem">Movies</li>
                        <span className="border"></span>

                    </a>
                    <a href="#home" className="navLink">
                        <li className="navItem">Search</li>
                        <span className="border"></span>

                    </a>
                    <a href="#home" className="navLink">
                        <li className="navItem">Contact</li>
                        <span className="border"></span>

                    </a>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar