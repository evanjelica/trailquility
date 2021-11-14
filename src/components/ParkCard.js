import React, {useState} from 'react';
import Button from '@mui/material/Button';

import '../css/ParkCard.css'

const ParkCard = (props) =>{
    
    const { data, addToParkList } = props

    // State variables
    const [moreParkInfo, setMoreParkInfo] = useState(false);

    // Defualt state: if user does not click Learn More!
    if(!moreParkInfo){
        return (
            <div className="park-card">
                <h2 class="card-name">{data.fullName}</h2>
                <p class="card-designation">{data.designation}</p>
                {console.log(data)}
                <img class="card-img" 
                src={data.images[0].url} alt=''/>
                <p class="card-subtitle">Description</p>
                <p class="card-description">{data.description}</p>

                <Button  color="success" variant="contained"
                onClick={() => setMoreParkInfo(!moreParkInfo)}>Learn more!</Button>
            </div>
        );
    // If user clicks Learn More!
    }else{
        return(
            <div className="park-card">
                <h2 class="card-name">{data.fullName}</h2>
                <p class="card-description">{data.designation}</p>
                <img class="card-img" 
                src={data.images[0].url} alt=''/>
                <p class="card-subtitle">Description</p>
                <p class="card-description">{data.description}</p>
                <p class="card-subtitle">Operating Hours</p>
                <p class="card-description">{data.operatingHours}</p>
                <p class="card-subtitle">Contacts</p>
                <p class="card-description">{data.contacts}</p>
                <p class="card-subtitle">Park Website</p>
                <p class="card-description">{data.url}</p>

                <Button  color="success" variant="contained"
                    onClick={() => setMoreParkInfo(!moreParkInfo)}>See Less</Button>
            </div>
        ); 
    }
};
export default ParkCard;