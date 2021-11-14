import React from 'react';
import Button from '@mui/material/Button';
import Header from './Header';
import Activity from './Activity';
import ParkCard from './ParkCard';

import '../css/MainStyle.css';

export default function ParksNRec(){
    return(
    <div className="video-background">

        <video autoPlay="autoplay" loop="loop" muted id="video">
            <source src="/video/videoBackground.mp4" type="video/mp4"></source>
        </video>

        <div className="overlay">
            <div className="header">

                <Header/>
                
                <div className="glass-container">
                    <p className="glass-font">National parks are nature's bounty of activities! Select one or more of the following activities</p>

                    <a href="/activities">
                        <Button  color="success" variant="contained">Find some parks!</Button>
                    </a>

                </div>
            </div>
        </div>

        
    </div>
    )
};