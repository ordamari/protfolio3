import React from 'react';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import positionService from '../services/positionService';

export function Navbar(props) {

    const [isScrolled, setIsScrolled] = useState(false)
    

    useEffect(() => {
        window.addEventListener("scroll", (event) => {
            let scroll = +window.scrollY;
            if (scroll > 0) {
                setIsScrolled(true)
            }
            else setIsScrolled(false)
        });
    }, [])

    function scrollToTareget(target){
        let pos=0
        if(target) pos=positionService.query()[target]-60
        window.scrollTo(0,pos)
    }


    
    function getScrollClass() {
        return isScrolled ? 'scrolled' : ''
    }

    return (
        <header className={`navbar flex space-between ${getScrollClass()}`} onScroll={() => { console.log("sdasd"); }}>

                <ul className='flex '>
                    <li className='logo' onClick={()=>scrollToTareget(0)}>Or Damari</li>
                    <li onClick={()=>scrollToTareget('specialties')}>Specialties</li>
                    <li onClick={()=>scrollToTareget('protfolio')}>Protfolio</li>
                    <li onClick={()=>scrollToTareget('about')}>About</li>
                </ul>
                
                <ul>
                    <li onClick={()=>scrollToTareget('contact')}>Contact</li>
                </ul>

        </header>
    )

}
