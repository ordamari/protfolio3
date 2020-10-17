import React from 'react';
import { useEffect, useRef, useState } from 'react';
import { FaReact, FaNodeJs, FaCss3Alt } from 'react-icons/fa';
import positionService from '../services/positionService';



export function About(props) {


    const myRef = useRef(null)

    useEffect(() => {
        const pos = myRef.current.offsetTop
        positionService.setNewPos('about',pos)
    }, [])
    
    return (
        <div ref={myRef} className='main-container bgclr5'>

            <section className='about main-container'>
                <div className='img-container'>
                <img src="https://res.cloudinary.com/dif8yy3on/image/upload/v1601990007/zbwzo5eu6yobm25qdwg1.jpg" alt="" />
                    <h2>Or Damari</h2>
                </div>
                <div className="summary">
                    <h4>Hi, I'm a Full-Stack / Frontend  Web Developer with knowledge and experience writing single-page-applications Using the latest WEB technologies such as Node.js, Vue.js, Vuex, React.js and Angular</h4>
                    <h4>A team player, hard worker, focusing on problem solving and detailed orientation, self-learner responsible, and adapt quickly to new environments</h4>
                </div>
            </section>
        </div>
    )

}