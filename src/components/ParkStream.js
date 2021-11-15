import React, {useState, useEffect} from 'react';
import Header from './Header';
import StreamCard from './StreamCard';

import '../css/MainStyle.css';

//const parkUrl = `https://developer.nps.gov/api/v1/parks?limit=496&api_key=D855RRWRdxxbOPhPBfKd8HQfj4rt0kBtFCNKqNVa`;
//const webcamUrl = `https://developer.nps.gov/api/v1/webcams?api_key=D855RRWRdxxbOPhPBfKd8HQfj4rt0kBtFCNKqNVa`;

export default function ParkStream(props){
    const { streamList } = props;

    // State variables
    const [loading, setLoading] = useState(true);
   // const [parkList, setParkList] = useState([]);

   const fetchData = async () =>{

    setLoading(false);
   }

    // Initially renders component once to fetch API data
    useEffect(() =>{
        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
   /*
    const getParksAndStreams = async () => {
        const parksRes = await fetch(parkUrl);
        let parks = await parksRes.json();
        if (!parks || !parks.data) console.error('No data was found');
        parks = parks.data
    }
*/

    return(
        <div className="video-background">

            <video autoPlay="autoplay" loop="loop" muted id="video">
                <source src="/video/videoBackground.mp4" type="video/mp4"></source>
            </video>
    
            <div className="overlay">
                <div className="header">
                    <Header/>

                    <div className="card-grid">
                        {loading?
                            <p className="card-loading">Fetching stream...please wait...</p>
                            :
                        streamList && streamList.map((item) =>{
                            return(
                                <StreamCard
                                    key={item}
                                    parkCode={item}
                                />
                            );
                        })}
                    </div> 

                </div>
            </div>
        </div>
    )
};