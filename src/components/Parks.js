import React, {useState, useEffect} from 'react';
import Header from './Header';
import ParkCard from './ParkCard';

import '../css/MainStyle.css';

const url =
  'https://developer.nps.gov/api/v1/parks?limit=496&api_key=D855RRWRdxxbOPhPBfKd8HQfj4rt0kBtFCNKqNVa';

export default function Parks(){

    // State variables
    const [isLoading,setLoading] = useState(true);
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