import React, {useState, useEffect} from 'react';
import Header from './Header';
import StreamCard from './StreamCard';

import '../css/MainStyle.css';

// Key used to access all of the parks from the API
const API_KEY = process.env.REACT_APP_NPS_API_KEY
const webStreamUrl = `https://developer.nps.gov/api/v1/webcams?parkCode=&api_key=${API_KEY}`;

export default function ParkStream(){

    // State variables
    const [loading, setLoading] = useState(true);
    const [streamList, setStreamList] = useState([]);

     // Fetches the API data
    const fetchData = async () =>{
        const data = await fetch(webStreamUrl);
        const info = await data.json();
        setStreamList(info);
        setLoading(false);
    }

    // Initially renders component once to fetch API data
    useEffect(() =>{
        fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return(
        <div className="video-background">
            
            {/* Displays video background */}
            <video autoPlay="autoplay" loop="loop" muted id="video">
                <source src="/video/videoBackground.mp4" type="video/mp4"></source>
            </video>

            {/* Div that allows things to overlay on top of the video */}
            <div className="overlay">
                <div className="header">
                    <Header/>
                
                    <div className="glass-container">
                        <p className="glass-font-stream">Below is a list of non-streaming images collected from the park webcams!
                        <br/>Do note that some of them won't have an image available for viewing</p>
                    </div>

                    <br/>

                    {/* Renders park cards in grid format */}
                    <div className="card-grid-list">

                        {/* If information or API is not working, print the loading string
                            Otherwise display the cards */}
                       {loading?
                            <p className="card-loading">Fetching images...please wait...</p>
                            :
                        streamList.data.map((data) =>{
                            return(
                                <StreamCard
                                    data={data}
                                />
                            );
                        })}

                    </div> 

                </div>
            </div>
        </div>
    )
};