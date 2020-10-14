import React from 'react';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';



export function ProjectPreview({ proj }) {
    const { imgUrl, title, createAt, technologies } = proj
    return (
        <div className='project-preview'>
        <Link to={`/${proj.id}`}>
            <img src={imgUrl} alt="proj img" />
            <h5>{title}</h5>
            <h5>Create at: {createAt}</h5>
            <p>Technologies: {technologies.join(', ')}</p>
        </Link>
        </div>
    )

}