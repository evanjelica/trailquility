import React, {useState} from 'react';
import Button from '@mui/material/Button';

import '../css/Card.css'

const ParkCard = (props) =>{
    
    const { data } = props

    // State variables
    const [moreParkInfo, setMoreParkInfo] = useState(false);

    // Defualt state: if user does not click Learn More!
    // Display the following
    if(!moreParkInfo){
        return (
            <div className="park-card">
                <h2 className="card-name">{data.fullName}</h2>
                <p className="card-designation">{data.designation}</p>
                <img className="card-img" 
                src={data.images[0].url} alt=''/>
                <p className="card-states">State(s): {data.states}</p>
                <p className="card-subtitle">Description</p>
                <p className="card-description">{data.description}</p>

                <Button color="success" variant="contained"
                    onClick={() => setMoreParkInfo(!moreParkInfo)}>Learn more!</Button>
            </div>
        );
    // If user clicks Learn More!
    // Expand card to display more information under the default
    }else{
        return(
            <div className="park-card">
                <h2 class="card-name">{data.fullName}</h2>
                <p className="card-designation">{data.designation}</p>
                <img className="card-img" 
                src={data.images[0].url} alt=''/>
                <p className="card-states">State(s): {data.states}</p>
                <p className="card-subtitle">Description</p>
                <p className="card-description">{data.description}</p>
                
                {/* Additional info shown after clikcing Learn More */}
                <a className="card-link" href={data.url} target="_blank" rel="noreferrer">Park Website</a>
                <br/>
                <p className="card-subtitle">Latitude and Longitude</p>
                <p className="card-description">{data.latLong}</p>
                <p className="card-subtitle">Where is it?</p>
                <p className="card-description">{data.directionsInfo}</p>
                <a className="card-link" href={data.directionsUrl}>Link to park directions</a>
                <br/>
                <br/>
                <Button color="success" variant="contained"
                    onClick={() => setMoreParkInfo(!moreParkInfo)}>See Less</Button>
            </div>
        ); 
    }
};
export default ParkCard;