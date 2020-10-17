import React from 'react';
import { useEffect, useRef, useState } from 'react';
import projectService from '../services/projectService';



export function ProjectDetails(props) {

    useEffect(() => {
        window.scrollTo(0,0)
    }, [])

    const proj = projectService.getById(props.match.params.id)
    return (
        <div className='project-details-container main-container'>
            <div className="mt72">
                <a className="title" href={proj.url}>{proj.title}</a>
                <div className='project-details'>
                    <img src={proj.imgUrl} alt="" />
                    <div className="info">

                        <h4><span>Descriptaion:</span>  {proj.description}</h4>
                        <h4><span>Technologies:</span>  {proj.technologies.join(', ')}</h4>
                    </div>
                        <a href={proj.url}>Click  me to app</a>
                        
                </div>
            </div>
        </div>
    )

}