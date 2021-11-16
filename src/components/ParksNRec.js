import React, {useEffect, useState} from 'react';
import Header from './Header';
import Activities from './Activities';
import ParkCard from './ParkCard';

import '../css/MainStyle.css';

// Key used to access all of the parks from the API
const API_KEY = process.env.REACT_APP_NPS_API_KEY
const url = `https://developer.nps.gov/api/v1/parks?limit=496&api_key=${API_KEY}`;

export default function ParksNRec(){

    // State variables
    const [activitySelection, setActivitySelection] = useState([]);
    const [parkList, setParkList] = useState([]);
    const [loading, setLoading] = useState(true);

     // Initially renders component once to fetch API data
    useEffect(() => {
        fetchData()
    }, [])

    // Fetches the API data
    const fetchData = async () =>{
        const data = await fetch(url);
        const info = await data.json();
        setParkList(info);
        setLoading(false);
    }
    
    // Adds activities chosen by the user to a list
    const selectedActivity = (name) => {
        if(activitySelection.includes(name)){
            setActivitySelection([...activitySelection, name]);
        }
    };

    // Filters list of parks based on user's chosen activities
    const filterActivities = (id) => {
        setParkList({
            ...parkList,
            data: parkList.data.filter((park) =>
            park.activities.map((parkItem) => parkItem.id === id).includes(true))
        })
    }

    // Clears activity selection
    const clear = () => {
        setLoading(true)
        fetchData();
        setActivitySelection([]);
    }

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

                    <p className="glass-font">National parks are nature's bounty of activities!
                    <br/>Looking for a specific activity but not sure which park has it?
                    <br/>Select one or more of the following activities to filter through the options!</p>

                    {/* Lists out all activities for user to choose from*/}
                    <Activities
                        key={parkList.id}
                        addSelection={selectedActivity}
                        clear={clear}
                        filter={filterActivities}
                        activitySelection={activitySelection}
                    />
                    <br/>
                    <br/>

                    {/* Renders all of the parks below in card format*/}
                    <div className="card-grid">
                            {/* If array is empty, print the loading string,
                                otherwise, display cards of parks*/}
                            {loading?
                            <p className="card-loading">Fetching data...please wait...</p>
                            :
                            parkList.data.map((data, idx) =>{
                                return(
                                    <ParkCard
                                    data={data} key={idx} />
                                    )
                                })}
                    </div>
                    
                </div>
            </div>
        </div>    
    </div>
    )
    
};