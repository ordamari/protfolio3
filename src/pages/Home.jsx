import React from 'react';
import { useEffect, useRef, useState } from 'react';
import { About } from '../cmps/About';
import { Protfolio } from '../cmps/Protfolio';
import { Specialities } from '../cmps/Specialities';
import projectService from '../services/projectService';
import positionService from '../services/positionService';
import eventBus from '../services/event-bus-service'



export function Home(props) {

    const [txt, setTxt] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    var str = 'FullStack Web Developer';
    var interval = '';
    var unsubscribe  = null;

    const projects = projectService.query();

    function scrollToTareget(target) {
        let pos = 0
        if (target) pos = positionService.query()[target] - 72
        window.scrollTo(0, pos)
    }

    useEffect(() => {
        interval = setInterval(() => {
            if (txt !== str) setTxt((prevText => prevText + str.charAt(prevText.length)))
        }, 200);

        unsubscribe = eventBus.on('toggle-is-open', (data) => {
            setIsOpen(!data)
        })

        return ()=>{
            clearInterval(interval)
            unsubscribe=null
        }



    }, [])

    useEffect(() => {
       if(txt===str) setTimeout(() => {
           setTxt('');
       }, 1000);
    }, [txt]);


    function closeWhenOpen(){
        return isOpen? 'hide':''
    }






    return (
        <section className='home'>
            <div className='main-img'>
                <div className={`main-info ${closeWhenOpen()}`}>
                    <h2>Hi, I'm Or Damari.</h2>
                    <h1>{txt}<span>|</span></h1>
                    {/* <h1>Full Stack Web Developer</h1> */}
                    <button  onClick={() => scrollToTareget('specialties')}>Show more</button>
                </div>
            </div>
            <Specialities />
            <Protfolio projects={projects} />
            <About />

        </section>
    )

}