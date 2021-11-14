import React from 'react';
import Button from '@mui/material/Button';

import '../css/Landing.css';


export default function Landing(){
    return(
    <div className="video-background">

        <video autoPlay="autoplay" loop="loop" muted id="video">
            <source src="/video/videoBackground.mp4" type="video/mp4"></source>
        </video>

        <div className="overlay">
            <div className="header">

                <h1>trailquility.</h1>

                <div className="glass-container">
                    <p className="glass-font">Powered by the National Park Service API. Trailquility let's you search up National Parks across the country!</p>
                    <Button  color="success" variant="contained">Find parks near you!</Button>
                </div>
            </div>

            <div className="footer">
                <p>Entry for Capital One Software Engineering Summit 2021</p>
                <p>Built with React by <a href="https://evanjelica.github.io/" target="_blank">Anjelica Avorque</a></p>
            </div>
        </div>
        
    </div>
    )
};