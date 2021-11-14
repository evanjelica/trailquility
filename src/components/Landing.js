import React, {VFC} from 'react';
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
                    <p>Powered by the National Park Service API. Trailquility let's you search up National Parks across the country!</p>
                </div>
            </div>
        </div>
    </div>

    )
};