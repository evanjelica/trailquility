import React, {useEffect, useState} from 'react';
import Button from '@mui/material/Button';
import Header from './Header';
import Activity from './Activity';
import ParkCard from './ParkCard';

import '../css/MainStyle.css';


const url =
  'https://developer.nps.gov/api/v1/activities?api_key=D855RRWRdxxbOPhPBfKd8HQfj4rt0kBtFCNKqNVa';


export default function Activities({filter, selection, addSelection, clear}){

    // State variables
    const [activityData, setActivityData] = useState([]);
    const [activitySelection, setActivitySelection] = useState([]);
    const [parkList, setParkList] = useState([]);
    const [loading, setLoading] = useState([]);

    // Fetches the API data
    const fetchData = async () =>{
        const data = await fetch(url);
        const info = await data.json();
        setActivityData(info);
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
        setParkList((parkList) => {
            return parkList.filter(
                (park) =>
                park.activities.map((parkItem) => parkItem.id ===id)
                .includes(true) === true
            );
        });
    }

    // Clears activity selection
    const reset = () => {
        fetchData();
        setActivitySelection([]);
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
                
                <div className="glass-container-2">
                    <p className="glass-font">National parks are nature's bounty of activities! Select one or more of the following activities</p>

                    <Button  color="success" variant="contained" onClick={clear}>Clear</Button>
                        
                        {/* Lists out all activities for use to choose from*/}
                        <p> 
                            {activityData.data && activityData.data.map((activity) => {
                                return(
                                    <Activity
                                        key={activity.id}
                                        addSelection={addSelection}
                                        filter={filter}
                                        activity={activity}
                                    />
                                );
                            })}
                        </p>


                        <div className="card-grid">
                            {loading?
                            <h1></h1>
                            :
                            parkList.data.map((data) =>{
                                return(
                                    <ParkCard
                                        data={data}/>
                                )
                            })}

                        </div>



                       

                </div>
            </div>
        </div>

    </div>
    )
};