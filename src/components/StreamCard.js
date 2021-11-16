import React, {useState} from 'react';
import Button from '@mui/material/Button';

import '../css/Card.css'

const StreamCard = (props)=>{

    const { data } = props
    
    // State variables
    const [showStream, setShowStream] = useState(false);

    // Defualt state: if user does not click Show Stream
    if(!showStream){
        return(
            <div>
                <div className="park-card">
                    <h3 className="card-name">{data.title}</h3>

                    <Button color="success" variant="contained"
                        onClick={() => setShowStream(!showStream)}>Show Stream</Button>                     
                </div>
            </div>
        );
    }
    //If user clicks Show Stream and image IS NOT available
    if( (data.images.length === 0 || data.images[0] === undefined) && showStream){
        return(
            <div className="park-card">
                    <h2 className="card-name">{data.title}</h2>

                    {/* Additional info shown after clicking Show Stream */}
                    <h4>Stream not available</h4>

                    <Button color="success" variant="contained"
                        onClick={() => setShowStream(!showStream)}>Close Stream</Button>    
            </div>                 
        ) 
    }
    //If user clicks Show Stream and image IS available
    else{
        return(
                <div className="park-card">
                    <h2 className="card-name">{data.title}</h2>

                    {/* Additional info shown after clicking Show Stream */}
                    <img className="card-img" 
                    src={data.images[0].url} alt=''/>
                    <p className="card-description">{data.description}</p>

                    <Button color="success" variant="contained"
                        onClick={() => setShowStream(!showStream)}>Close Stream</Button>                     
                </div>
        )
    }

}
export default StreamCard;