import React, {useState, useEffect} from 'react';
import Button from '@mui/material/Button';

import '../css/Card.css'

function StreamCard (props) {
    const {parkCode} = props
    

    const webStreamUrl =
    `https://developer.nps.gov/api/v1/webcams?parkCode=${parkCode}&api_key=D855RRWRdxxbOPhPBfKd8HQfj4rt0kBtFCNKqNVa`;

    const parkUrl =
    'https://developer.nps.gov/api/v1/parks?parkCode=${parkCode}&api_key=D855RRWRdxxbOPhPBfKd8HQfj4rt0kBtFCNKqNVa';


    // State variables
    const [showStream, setShowStream] = useState(false);
    const [parkData, setParkData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [streamData, setStreamData] = useState([]);

    const fetchData = async () =>{
        const streamData = await fetch(webStreamUrl);
        const parkData = await fetch(parkUrl);

        const streamInfo = await streamData.json();
        const parkInfo = await parkData.json();
        setLoading(false);
        setStreamData(streamInfo.data);
        setParkData(parkInfo.data);
    }

     // Initially renders component once to fetch API data
     useEffect(() =>{
        fetchData();
    }, [parkCode]);

    if(loading)
    {
        <p className="card-loading">Currently fetching stream...</p>
    }
    // Defualt state: if user does not click Show stream
    // Display the following
    else if
    (!showStream){
        return(
            <div className="park-card">
                <h2 class="card-name">{parkData[0].fullName}</h2>
                
                <Button color="success" variant="contained"
                    onClick={() => setShowStream(!showStream)}>Show stream</Button>
            </div>
        )
    }
    // Iff user clicks Show Stream but there is no available stream
    // Display the following
    else if(showStream && streamData.length === 0){
        <div className="park-card">
            <h2 class="card-name">{parkData[0].fullName}</h2>
            <p className="card-loading">There are no streams available</p>
        </div>
        
    }else{
        return(
            <div className="park-card">
                <h2 class="card-name">{parkData[0].fullName}</h2>
                <div>
                    {streamData.map((img) =>{
                        return img.images.map((item) =>{
                            return(
                                <img
                                    class="card-img"
                                    src={item.url}
                                    alt=''
                                />
                            );
                        });
                    })}
                </div>
                <Button color="success" variant="contained"
                    onClick={() => setShowStream(!showStream)}>Close stream</Button>
            </div>
        )
    }
};
export default StreamCard;