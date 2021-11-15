import React, {useEffect, useState} from 'react';
import Button from '@mui/material/Button';
import Activity from './Activity';

import '../css/MainStyle.css';

const API_KEY = process.env.REACT_APP_NPS_API_KEY
// Key used to access all of the parks from the API
const url =
  `https://developer.nps.gov/api/v1/activities?api_key=${API_KEY}`;


export default function Activities({filter, selection, addSelection, clear}){

    // State variables
    const [activityData, setActivityData] = useState([]);

    // Fetches the API data
    const fetchData = async () =>{
        const data = await fetch(url);
        const info = await data.json();
        setActivityData(info);
    }

    // Initially renders component once to fetch API data
    useEffect(() =>{
        fetchData();
    }, []);

    return(
        <div>
            <Button  color="warning" variant="contained" onClick={clear}>Clear</Button>
                        
                        {/* Lists out all activities for user to choose from*/}
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

                        <p>You have currently selected:</p>
                        {selection && selection.map((selected) => {
                            return <p>{selected}</p>
                        })}

        </div>
    )
};