import React from 'react';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MailIcon from '@material-ui/icons/Mail';
import FacebookIcon from '@material-ui/icons/Facebook';
import positionService from '../services/positionService';
import SystemUpdateAltIcon from '@material-ui/icons/SystemUpdateAlt';
import cv from '../assets/files/cv.docx'

export function Footer(props) {
    const myRef = useRef(null)

    useEffect(() => {
        const pos = myRef.current.offsetTop
        positionService.setNewPos('contact',pos)
        console.log(pos);
    }, [])

    return (
        <div ref={myRef} className="main-container bgclr1">
            <footer>
                <div className="social">
                    <a href="https://github.com/ordamari"><GitHubIcon /></a>
                    <a href="https://www.linkedin.com/in/or-damari-8534561b3/"><LinkedInIcon /></a>
                    <a href=""><FacebookIcon /></a>
                    <a href={cv}><SystemUpdateAltIcon /></a>
                </div>
                <h3>ordamari971@gmail.com</h3>


            </footer>
        </div>
    )

}