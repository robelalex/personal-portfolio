import React from 'react'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import EmailIcon from '@material-ui/icons/Email'
import GithubIcon from '@material-ui/icons/GitHub'
import "../styles/Home.css"

function Home(){
    return(
        <div className='home'>
            <div className='about'>
                <img 
                    src="/robel.jpg" 
                    alt="Robel - Software Engineer" 
                    className="profile-image"
                />
                
                <h2>Hi, My name is Robel</h2>
                
                <div className='prompt'>
                    <p>
                        A software engineering student at Jimma University.
                    </p>
                    
                    <div className="social-icons">
                        <a 
                            href="https://www.linkedin.com/in/robel-alemayehu-978951329?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BGAmKK1vjQZSrbP2AkFzTXw%3D%3D" 
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            <LinkedInIcon />
                        </a>
                        
                        <a href="mailto:robelalex95@gmail.com">
                            <EmailIcon />
                        </a>
                        
                        <a 
                            href="https://github.com/robelalex" 
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            <GithubIcon />
                        </a>
                    </div>
                </div>
            </div>
            
            <div className='skills'>
                <h1>Skills</h1>
                
                <ol className='list'>
                    <li className='item'>
                        <h2>Front-End</h2>
                        <span>ReactJS, HTML, CSS</span>
                    </li>
                    
                    <li className='item'>
                        <h2>Back-End</h2>
                        <span>NodeJS, MySQL, PostgreSQL, PHP</span>
                    </li>
                    
                    <li className='item'>
                        <h2>Languages</h2>
                        <span>JavaScript, Java, Python, C++</span>
                    </li>
                </ol>
            </div>
        </div>
    )
}

export default Home