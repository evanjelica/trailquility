import React from 'react';
import '../css/MainStyle.css';
import Button from '@mui/material/Button';

 

export default function Header(){
    return(
        <div>
            <div className="header">
                <a href="/">
                    <h1>trailquility.</h1>
                </a>
                <ul>
                    <a href="/activities">
                        <Button  color="secondary" variant="contained">Filter Parks by Activities</Button>
                    </a>
                </ul>
                <ul>
                    <a href="/parks">
                        <Button  color="secondary" variant="contained">List of all Parks</Button>
                    </a>
                </ul>
                <ul>
                    <a href="/streams">
                        <Button  color="secondary" variant="contained">Watch a Park Stream</Button>
                    </a>
                </ul>
                <ul>
                    <a href="/the-view">
                        <Button  color="secondary" variant="contained">Enjoy the view</Button>
                    </a>
                </ul>
          </div>
            
        </div>
    )
};