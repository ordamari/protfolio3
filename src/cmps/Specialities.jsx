import React from 'react';
import { useEffect, useRef, useState } from 'react';
import { FaReact, FaNodeJs, FaCss3Alt, FaLaptopCode } from 'react-icons/fa';
import positionService from '../services/positionService';
// import { FaReact } from 'react-icons/fa';

import { FaVuejs, FaAngular, FaNode } from 'react-icons/fa';
import { SiJavascript, AiFillHtml5, DiSass, SiJquery, DiJavascript, SiMongodb, SiMysql, SiFirebase, AiFillGithub, SiHeroku } from 'react-icons/all';
import { Check } from '@material-ui/icons';
import  reactIcon  from '../assets/img/react.png'
import  vueIcon  from '../assets/img/vue.png'
import  angularIcon  from '../assets/img/angular.png'
import  jqueryIcon  from '../assets/img/jquery.png'
import  nodejsIcon  from '../assets/img/nodejs.png'
import  jsIcon  from '../assets/img/js.png'
import  htmlIcon  from '../assets/img/html.png'
import  cssIcon  from '../assets/img/css.png'
import  sassIcon  from '../assets/img/sass.png'
import  mdbIcon  from '../assets/img/mdb.png'
import  firebaseIcon  from '../assets/img/firebase.png'
import  githubIcon  from '../assets/img/github.png'
import  herokuIcon  from '../assets/img/heroku.png'

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
            <ul className='flex main-list'>
                <li className={`main-titles ${checkChoosen('frameworks')}`} onClick={() => { setChoosen('frameworks') }}>
                    <h2>Frameworks</h2>
                    <ul>
                        <li>
                            <img src={reactIcon} alt=""/>
                        </li>
                        <li>
                            <img src={vueIcon} alt=""/>
                        </li>
                        <li>
                            <img src={angularIcon} alt=""/>
                        </li>
                        <li>
                            <img src={jqueryIcon} alt=""/>
                        </li>
                    </ul>
                </li>
                <li className={`main-titles ${checkChoosen('languages')}`} onClick={() => { setChoosen('languages') }}>
                    <h2>Languages</h2>
                    <ul>
                        <li>
                            <img src={nodejsIcon} alt=""/>
                        </li>
                        <li>
                            <img src={jsIcon} alt=""/>
                        </li>
                        <li>
                            <img src={htmlIcon} alt=""/>
                        </li>
                        <li>
                            <img src={cssIcon} alt=""/>
                        </li>
                        <li>
                            <img src={sassIcon} alt=""/>
                        </li>
                    </ul>
                </li>
                <li className={`main-titles ${checkChoosen('services')}`} onClick={() => { setChoosen('services') }}>
                    <h2>Services</h2>
                    <ul>
                        <li>
                            <img src={mdbIcon} alt=""/>
                        </li>
                        {/* <li>
                            <SiMysql />
                        </li> */}
                        <li>
                        <img src={firebaseIcon} alt=""/>
                        </li>
                        <li>
                        <img src={githubIcon} alt=""/>
                        </li>
                        <li>
                        <img src={herokuIcon} alt=""/>
                        </li>
                    </ul>
                </li>
            </ul>

        </section>
    )

}