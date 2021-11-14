import React, {useState, useEffect} from 'react';
import Header from './Header';

import '../css/MainStyle.css';

export default function ParkStream(){
    return(
        <div className="video-background">

            <video autoPlay="autoplay" loop="loop" muted id="video">
                <source src="/video/videoBackground.mp4" type="video/mp4"></source>
            </video>
    
            <div className="overlay">
                <div className="header">
                    <Header/>


                </div>
            </div>
        </div>
    )
};