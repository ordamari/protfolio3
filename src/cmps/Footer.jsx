import React from 'react';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MailIcon from '@material-ui/icons/Mail';
import FacebookIcon from '@material-ui/icons/Facebook';
import positionService from '../services/positionService';
import SystemUpdateAltIcon from '@material-ui/icons/SystemUpdateAlt';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import cv from '../assets/files/cv.docx'
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';

export function Footer(props) {
    const myRef = useRef(null)

    useEffect(() => {
        const pos = myRef.current.offsetTop
        positionService.setNewPos('contact', pos)
    }, [])

    function scrollToTareget(target) {
        let pos = 0
        if (target) pos = positionService.query()[target] - 72
        window.scrollTo(0, pos)
    }

    return (
        <div ref={myRef} className="main-container bgclr1">
            <footer>
                <div className="social">
                    <a title="My github pages page" href="https://github.com/ordamari"><GitHubIcon /></a>
                    <a title="My linkedin pages page" href="https://www.linkedin.com/in/or-damari-8534561b3/"><LinkedInIcon /></a>
                    <a title="Messege me" href="https://wa.me/972503990939" aria-hidden="true"><WhatsAppIcon /></a>
                    {/* <a title="Dowloand my cv" href={cv}><SystemUpdateAltIcon /></a> */}
                    <a className="onlyMobile" title="Send me mail" href="mailto:ordamari971@gmail.com"><MailIcon /></a>
                </div>
                <div onClick={scrollToTareget} className="arrow">
                    <ArrowUpwardIcon/>
                </div>
                <h3 className='onlyDesktop' title="Send me mail" ><a href="mailto:ordamari971@gmail.com">ordamari971@gmail.com</a></h3>


            </footer>
        </div>
    )

}