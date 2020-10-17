import React from 'react';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import positionService from '../services/positionService';
import MenuIcon from '@material-ui/icons/Menu';

export function Navbar(props) {

    const [isScrolled, setIsScrolled] = useState(false)
    const [isOpen, setIsOpen] = useState(false)


    useEffect(() => {
        window.addEventListener("scroll", (event) => {
            let scroll = +window.scrollY;
            if (scroll > 0) {
                setIsScrolled(true)
            }
            else setIsScrolled(false)
        });
    }, [isOpen])

    function toggleMenu() {
        setIsOpen(!isOpen);
    }



    function scrollToTareget(target) {
        let pos = 0
        if (target) pos = positionService.query()[target] - 72
        window.scrollTo(0, pos)
    }

    function getScrollClass() {
        return isScrolled ? 'scrolled' : ''
    }

    function getMenuClass() {
        return isOpen ? 'open' : 'close';
    }

    function mobileMenuClick(tartget) {
        scrollToTareget(tartget);
        toggleMenu();
    }



    return (
        <header className={`navbar flex space-between ${getScrollClass()}`} onScroll={() => { console.log("sdasd"); }}>

            <div onClick={toggleMenu} className={`blackPage ${getMenuClass()}`}></div>

            <ul className='flex '>
                <li className='logo' onClick={() => scrollToTareget(0)}><Link to="/">Or Damari</Link></li>
                <li className="onlyDesktop" onClick={() => { scrollToTareget('specialties') }}><Link to="/">Exprience</Link></li>
                <li className="onlyDesktop" onClick={() => scrollToTareget('protfolio')}><Link to="/">Protfolio</Link></li>
                <li className="onlyDesktop" onClick={() => scrollToTareget('about')}><Link to="/">About</Link></li>
            </ul>

            <ul className="onlyMobile">
                <li className="logo">
                    <MenuIcon onClick={toggleMenu} />
                </li>
            </ul>

            <ul className={`second-list ${getMenuClass()}`}>
                <li className="onlyMobile" onClick={() => mobileMenuClick('specialties')}><Link to="/">Exprience</Link></li>
                <li className="onlyMobile" onClick={() => mobileMenuClick('protfolio')}><Link to="/">Protfolio</Link></li>
                <li className="onlyMobile" onClick={() => mobileMenuClick('about')}><Link to="/">About</Link></li>
                <li onClick={() => scrollToTareget('contact')}><Link to="/">Contact</Link></li>
            </ul>

        </header>
    )

}
