import React, {useState, useEffect} from 'react';
import Header from './Header';
import ParkCard from './ParkCard';

import '../css/MainStyle.css';

// Key used to access all of the parks from the API
const API_KEY = process.env.REACT_APP_NPS_API_KEY
const url =`https://developer.nps.gov/api/v1/parks?limit=496&api_key=${API_KEY}`;

export default function Parks(){

    // State variables
    const [loading,setLoading] = useState(true);
    const [parkList, setParkList] = useState([]);

    // Fetches the API data
    const fetchData = async () =>{
        const data = await fetch(url);
        const info = await data.json();
        setParkList(info);
        setLoading(false);
    }

    // Initially renders component once to fetch API data
    useEffect(() =>{
        fetchData();
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

                    {/* Renders park cards in grid format */}
                    <div className="card-grid-list">

                        {/* If information or API is not working, print the loading string
                        Otherwise display the cards */}
                        {loading?
                        <p className="card-loading">Fetching data...please wait...</p>
                        :
                        parkList.data.map((data) =>{
                            return(
                                <ParkCard
                                    data={data}
                                />
                            )
                        })}
                    </div>

                </div>
            </div>
        </div>
    )
};