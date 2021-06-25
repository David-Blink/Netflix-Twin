import React, { useEffect, useState } from 'react'
import "./Nav.css"

function Nav() {

    const [show, handleShow] = useState(false);


    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 100) {
                handleShow(true);
            } else handleShow(false);
        })
        return () =>{
            window.removeEventListener("scroll")    
        }
    }, [])
    
    return (
        <div className = {`nav ${ show && "nav__black" }`}>

            <img className = "nav__logo"
                src={process.env.PUBLIC_URL + "/banner.png"}
                alt="Netflix Logo"
            />

            <img className = "nav__avtar"
                src={process.env.PUBLIC_URL + "/user.png"}
                alt="Netflix Logo"
                title="Profile"
            />
            
        </div>
    )
}

export default Nav
