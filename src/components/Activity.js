import React from 'react';
import Button from '@mui/material/Button';

//Displays as its own indivisual button. Content within the button depends on what is passwd on to it
export default function Activity(props){

    const { activity, filter, addSelection } = props
    
    return(
        <Button  color="success" variant="contained"
        onClick={() => {
            filter(activity.id);
            addSelection(activity);
          }}> 
            {activity.name}
          </Button>
    )
};
