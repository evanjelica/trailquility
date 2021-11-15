import React from 'react';

import '../css/MainStyle.css';

export default function TheView(){
    return(

        <div className="video-background">

            <video autoPlay="autoplay" loop="loop" muted id="video">
                <source src="/video/videoBackground.mp4" type="video/mp4"></source>
            </video>

            <div className="footer-bonus">
                    <p>I like the view too.</p>
                    <p>It's from <a className="p-bonus" href="https://www.pexels.com/video/tall-waterfall-5738272/" 
                    target="_blank" rel="noreferrer">this cool site.</a></p>
                    <a className="link-bonus" href="/" >Click here to go back</a>
            </div>
        </div>
    )
};