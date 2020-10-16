import React from 'react';
import { useEffect, useRef, useState } from 'react';
import { About } from '../cmps/About';
import { Protfolio } from '../cmps/Protfolio';
import { Specialities } from '../cmps/Specialities';
import projectService from '../services/projectService';
import positionService from '../services/positionService';


export function Home(props) {

    const projects = projectService.query();

    function scrollToTareget(target) {
        let pos = 0
        if (target) pos = positionService.query()[target] - 72
        window.scrollTo(0, pos)
    }


    return (
        <section className='home'>
            <div className='main-img'>
                <div className='main-info'>
                    <h2>Hi, I'm Or Damari.</h2>
                    <h1>Full Stack Web Developer</h1>
                    <button onClick={()=>scrollToTareget('specialties')}>Show more</button>
                </div>
            </div>
            <Specialities />
            <Protfolio projects={projects} />
            <About />

        </section>
    )

}