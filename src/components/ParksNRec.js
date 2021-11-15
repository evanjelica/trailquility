import React, {useEffect, useState} from 'react';
import Button from '@mui/material/Button';
import Header from './Header';
import Activities from './Activities';
import ParkCard from './ParkCard';

import '../css/MainStyle.css';

const url =
  'https://developer.nps.gov/api/v1/parks?limit=496&api_key=D855RRWRdxxbOPhPBfKd8HQfj4rt0kBtFCNKqNVa';

export default function ParksNRec(){

    // State variables
    const [activitySelection, setActivitySelection] = useState([]);
    const [parkList, setParkList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [activityFilter,setActivityFilter] = useState([]);


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

    const filterActivityList = (id) =>{
        setActivityFilter({
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

        <video autoPlay="autoplay" loop="loop" muted id="video">
            <source src="/video/videoBackground.mp4" type="video/mp4"></source>
        </video>

        <div className="overlay">
            <div className="header">

                <Header/>
                
                <div className="glass-container">
                    <p className="glass-font">National parks are nature's bounty of activities!
                    <br/>Looking for a specific activity to do at the parks?
                    Select one or more of the following activities</p>

                    {/* Lists out all activities for user to choose from*/}
                    <Activities
                        key={parkList.id}
                        addSelection={selectedActivity}
                        clear={clear}
                        filter={filterActivities}
                        activitySelection={activitySelection}
                    />

                    <div className="card-grid">
                            {loading?
                            <p className="card-loading">Currently fetching data...</p>
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