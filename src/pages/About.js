import React from 'react'
import "../styles/About.css"

function About() {
  return (
    <div className="about">
      <div className="aboutTitle">
        <h1> About Me</h1>
      </div>
      <div className="aboutSection">
        <div className="aboutLeft">
          <p>
            Hello! I'm <span className="highlightGreen">Robel Alemayehu</span>, 
            an intermediate full-stack developer with strong foundation in web 
            technologies. I have hands-on experience building projects with 
            <span className="highlightGreen"> HTML, CSS, JavaScript, and PHP</span>, 
            and I'm currently expanding my skills in modern frameworks like 
            <span className="highlightGreen"> React.js and Node.js</span>.
          </p>
          <p>
            My portfolio includes practical projects like a District Management System, 
            an Embedded Traffic Light Controller, and a Java Scientific Calculator - 
            demonstrating my ability to work across different technology stacks and 
            solve real-world problems.
          </p>
          <p>
            While I'm more experienced in front-end development, I'm comfortable 
            working on full-stack applications and eager to deepen my back-end 
            expertise. I enjoy creating user-friendly interfaces and learning 
            new technologies to improve my craft.
          </p>
          <p>
            I'm passionate about web development and excited to take on new 
            challenges where I can contribute and grow as a developer.
          </p>
        </div>
        <div className="aboutRight">
          <div className="imgContainer">
            <img src="/rob.png" alt="Profile" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About