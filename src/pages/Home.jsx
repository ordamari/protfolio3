import React from 'react';
import { useEffect, useRef, useState } from 'react';
import { About } from '../cmps/About';
import { Protfolio } from '../cmps/Protfolio';
import { Specialities } from '../cmps/Specialities';
import projectService from '../services/projectService';


export function Home(props) {

    const projects = projectService.query();


    return (
        <section className='home'>
            <div className='main-img'>
                <div className='main-info'>
                    <h2>Hi, I'm Or.</h2>
                    <h1>Full Stack Web Developer</h1>
                </div>
            </div>
            <Specialities />
            <Protfolio projects={projects}/>
            <About/>

        </section>
    )

}