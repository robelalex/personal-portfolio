import React from 'react';
import { useHistory } from 'react-router-dom'; 

export default function ProjectItem({ name, image, id }) { 
    const history = useHistory(); 
    
    return (
        <div 
            className='ProjectItem' 
            onClick={() => { history.push("/project/" + id); }} 
        >
            <div style={{ backgroundImage: `url(${image})` }} className="bgImage" />
            
            <h1>{name}</h1> 
        </div>
    );
}