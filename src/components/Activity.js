import React from 'react';
import Button from '@mui/material/Button';

export default function Activity(props){
  
  const { activity, filter, addSelection } = props
  
  //Displays each activity as its own individual button.
  //Content within the button depends on what is passed in to it
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
