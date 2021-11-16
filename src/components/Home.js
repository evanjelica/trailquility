import React from 'react';
import Button from '@mui/material/Button';

import '../css/MainStyle.css';

export default function Home(){
    return(
        <div className="video-background">

            {/* Displays video background */}
            <video autoPlay="autoplay" loop="loop" muted id="video">
                <source src="/video/videoBackground.mp4" type="video/mp4"></source>
            </video>

            {/* Div that allows things to overlay on top of the video */}
            <div className="overlay">
                <div className="header">

                    <h1>trailquility.</h1>
                    <h5>experience tranquility on nature's trails.</h5>

                    <div className="glass-container">
                        <p className="glass-font">Powered by the National Park Service API, 
                        <br/> Trailquility let's you search up National Parks across America!</p>

                        <a href="/parks">
                            <Button  color="success" variant="contained">Find some parks!</Button>
                        </a>

                    </div>
                </div>
            </div>

            <div className="footer">
                    <p>Entry for Capital One Software Engineering Summit 2021</p>
                    <p>Built with React by <a href="https://evanjelica.github.io/" target="_blank" rel="noreferrer">Anjelica Avorque</a></p>
            </div>
            
        </div>
    )
};