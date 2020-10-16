import React from 'react';
import { useEffect, useRef, useState } from 'react';
import { FaReact, FaNodeJs, FaCss3Alt, FaLaptopCode } from 'react-icons/fa';
import positionService from '../services/positionService';


export function Specialities(props) {


    const myRef = useRef(null)

    useEffect(() => {
        const pos = myRef.current.offsetTop
        positionService.setNewPos('specialties',pos)
        console.log(pos);
    }, [])


    return (
        <section ref={myRef} className='main-container specialties'>

            <h1>EXPERIENCE</h1>
            <ul>
                <li>
                    <div className="svg-container">
                        <FaLaptopCode />
                    </div>
                    <h4>Front End</h4>
                    <p>Experience with HTML, CSS and JS. Working with React,Vue and Angular and use the most popular technologies.</p>
                </li>
                <li>
                    <div className="svg-container">
                        <FaNodeJs />
                    </div>
                    <h4>Back End</h4>
                    <p>Working with nodeJS, MongoDB, rest API and WebSocket with</p>
                </li>
                <li>
                    <div className="svg-container">
                        <FaCss3Alt />
                    </div>
                    <h4>Design</h4>
                    <p>Working with libarys such as Material UI and chartjs, design app using css and sass, with some experience in UX UI and responsive apps</p>
                </li>
            </ul>

        </section>
    )

}