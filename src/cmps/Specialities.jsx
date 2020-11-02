import React from 'react';
import { useEffect, useRef, useState } from 'react';
import { FaReact, FaNodeJs, FaCss3Alt, FaLaptopCode } from 'react-icons/fa';
import positionService from '../services/positionService';
// import { FaReact } from 'react-icons/fa';

import { FaVuejs, FaAngular, FaNode } from 'react-icons/fa';
import { SiJavascript, AiFillHtml5, DiSass, SiJquery, DiJavascript, SiMongodb, SiMysql, SiFirebase, AiFillGithub, SiHeroku } from 'react-icons/all';
import { Check } from '@material-ui/icons';

export function Specialities(props) {


    const [choosen, setChoosen] = useState('frameworks');

    function checkChoosen(name) {
        return name === choosen ? 'choosen' : '';
    }


    const myRef = useRef(null)

    useEffect(() => {
        const pos = myRef.current.offsetTop
        positionService.setNewPos('specialties', pos)
    }, [])


    return (
        <section ref={myRef} className='main-container specialties' >

            {/* <h1>EXPERIENCE</h1>
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
                    <p>Working with nodeJS, MongoDB, rest API and WebSocket.</p>
                </li>
                <li>
                    <div className="svg-container">
                        <FaCss3Alt />
                    </div>
                    <h4>Design</h4>
                    <p>Working with Libraries such as Material UI and chartjs, design app using css and sass, with some experience in UX UI and responsive apps.</p>
                </li>
            </ul> */}

            <ul className='flex main-list'>
                <li className={`main-titles ${checkChoosen('frameworks')}`} onClick={() => { setChoosen('frameworks') }}>
                    <h2>Frameworks</h2>
                    <ul>
                        <li>
                            <FaReact />
                        </li>
                        <li>
                            <FaVuejs />
                        </li>
                        <li>
                            <FaAngular />
                        </li>
                        <li>
                            <SiJquery />
                        </li>
                    </ul>
                </li>
                <li className={`main-titles ${checkChoosen('languages')}`} onClick={() => { setChoosen('languages') }}>
                    <h2>Languages</h2>
                    <ul>
                        <li>
                            <FaNode />

                        </li>
                        <li>
                            <DiJavascript />
                        </li>
                        <li>
                            <AiFillHtml5 />
                        </li>
                        <li>
                            <FaCss3Alt />
                        </li>
                        <li>
                            <DiSass />
                        </li>
                    </ul>
                </li>
                <li className={`main-titles ${checkChoosen('services')}`} onClick={() => { setChoosen('services') }}>
                    <h2>Services</h2>
                    <ul>
                        <li>
                            <SiMongodb />
                        </li>
                        {/* <li>
                            <SiMysql />
                        </li> */}
                        <li>
                            <SiFirebase />
                        </li>
                        <li>
                            <AiFillGithub />
                        </li>
                        <li>
                            <SiHeroku />
                        </li>
                    </ul>
                </li>
            </ul>

        </section>
    )

}