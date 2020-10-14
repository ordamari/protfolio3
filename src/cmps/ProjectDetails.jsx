import React from 'react';
import { useEffect, useRef, useState } from 'react';
import projectService from '../services/projectService';



export function ProjectDetails(props) {

    const proj = projectService.getById(props.match.params.id)
    return (
        <div className='project-details-container main-container'>
            <h1><a href={proj.url}>{proj.title}</a> </h1>
            <div className='project-details'>
                <img src={proj.imgUrl} alt="" />
                <div className="info">

                    <h4><span>Descriptaion:</span>  {proj.description}</h4>
                    <h4><span>Technologies:</span>  {proj.technologies.join(', ')}</h4>
                    <a href={proj.url}>Click  me to app</a>
                </div>
            </div>
        </div>
    )

}