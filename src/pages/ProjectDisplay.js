import React from 'react';
import { useParams } from "react-router-dom";
import { projectList } from '../helpers/ProjectList'; 
import GitHubIcon from '@material-ui/icons/GitHub'; 
import '../styles/ProjectDisplay.css';

export default function ProjectDisplay() {
    const { id } = useParams(); 
    
    const project = projectList[parseInt(id)]; 

   
    if (!project) {
        return <div>Project Not Found!</div>;
    }

    return (
        <div className='project'>
            <h1>{project.name}</h1>
            <img src={project.image} alt={project.name}/>
            
            
            <p>
                <b>Skills:</b> {project.skills} 
            </p> 
            
           
            <a 
                href={project.githubLink} 
                target="_blank" 
                rel="noopener noreferrer" 
                className='github-link'
            >
                <GitHubIcon fontSize='large' />
            </a>
        </div>
    );
}