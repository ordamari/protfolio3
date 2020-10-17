import React from 'react';
import { useEffect, useRef, useState } from 'react';
import { ProjectPreview } from './ProjectPreview';
import positionService from '../services/positionService';



export function Protfolio({projects}) {

    const myRef = useRef(null)

    useEffect(() => {
        const pos = myRef.current.offsetTop
        positionService.setNewPos('protfolio',pos)
    }, [])

    return (
        <section ref={myRef} className='main-container protfolio'>
            <h1>PORTFOLIO</h1>
            <ul>
                {projects && projects.map((proj,idx)=><ProjectPreview key={idx} proj={proj} />)}
            </ul>
            
        </section>
    )

}