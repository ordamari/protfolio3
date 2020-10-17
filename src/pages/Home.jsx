import React from 'react';
import { useEffect, useRef, useState } from 'react';
import { About } from '../cmps/About';
import { Protfolio } from '../cmps/Protfolio';
import { Specialities } from '../cmps/Specialities';
import projectService from '../services/projectService';
import positionService from '../services/positionService';


export function Home(props) {

    const [txt, setTxt] = useState('');
    const [currTxt, setCurrTxt] = useState(1);
    var str1 = 'FullStack Web Developer';
    var str2 = 'Front End Web Developer';
    var interval = '';

    const projects = projectService.query();

    function scrollToTareget(target) {
        let pos = 0
        if (target) pos = positionService.query()[target] - 72
        window.scrollTo(0, pos)
    }

    useEffect(() => {
        interval = setInterval(() => {
            if (currTxt === 1) {
                if (txt !== str1) setTxt((prevText => prevText + str1.charAt(prevText.length)))
            } else {
                if (txt !== str2) setTxt(txt + str2.charAt(txt.length))
            }

        }, 200)

        return (clearInterval(interval))


    }, [])

    useEffect(() => {
        if (txt === str1) {
            setCurrTxt(2);
            setTxt('')
        } else if (txt === str2) {
            setCurrTxt(1);
            setTxt('')
        }
    }, [txt])



    return (
        <section className='home'>
            <div className='main-img'>
                <div className='main-info'>
                    <h2>Hi, I'm Or Damari.</h2>
                    <h1>Full Stack Web Developer</h1>
                    <button onClick={() => scrollToTareget('specialties')}>Show more</button>
                </div>
            </div>
            <Specialities />
            <Protfolio projects={projects} />
            <About />

        </section>
    )

}