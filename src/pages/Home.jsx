import React from 'react';
import { useEffect, useRef, useState } from 'react';
import { About } from '../cmps/About';
import { Protfolio } from '../cmps/Protfolio';
import { Specialities } from '../cmps/Specialities';
import projectService from '../services/projectService';
import positionService from '../services/positionService';


export function Home(props) {

    const [txt, setTxt] = useState('');
    var str = 'FullStack Web Developer';
    var interval = '';

    const projects = projectService.query();

    function scrollToTareget(target) {
        let pos = 0
        if (target) pos = positionService.query()[target] - 72
        window.scrollTo(0, pos)
    }

    useEffect(() => {
        interval = setInterval(() => {
            if (txt !== str) setTxt((prevText => prevText + str.charAt(prevText.length)))
        }, 200)

        return ()=>{
            clearInterval(interval)
        }



    }, [])

    useEffect(() => {
       if(txt===str) setTimeout(() => {
           setTxt('');
       }, 1000);


    }, [txt])






    return (
        <section className='home'>
            <div className='main-img'>
                <div className='main-info'>
                    <h2>Hi, I'm Or Damari.</h2>
                    <h1>{txt}<span>|</span></h1>
                    {/* <h1>Full Stack Web Developer</h1> */}
                    <button className='onlyDesktop' onClick={() => scrollToTareget('specialties')}>Show more</button>
                </div>
            </div>
            <Specialities />
            <Protfolio projects={projects} />
            <About />

        </section>
    )

}