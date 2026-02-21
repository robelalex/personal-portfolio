import React from 'react'
import '../styles/Experience.css'
import { VerticalTimeline, VerticalTimelineElement, } from 'react-vertical-timeline-component'
import "react-vertical-timeline-component/style.min.css"
import SchoolIcon from '@material-ui/icons/School'

function Education(){
    return(
        <div className='experience'>
            <VerticalTimeline lineColor='#3e497a'>
            <VerticalTimelineElement className='vertical-timeline-element-education' 
                 date='2023 - Present' 
                    iconStyle={{background: "#3e497a",color: "#fff" }} 
                      icon={<SchoolIcon />}>
              <h3 className='vertical-timeline-element-title'> Jimma University, Ethiopia</h3>
            <p>Currently Attending</p>
            </VerticalTimelineElement>

            <VerticalTimelineElement className='vertical-timeline-element-education' 
                 date='2020 - 2022' 
                    iconStyle={{background: "#3e497a",color: "#fff" }} 
                      icon={<SchoolIcon />}>
              <h3 className='vertical-timeline-element-title'>My Jimma Preparatory School, Jimma, Oromia</h3>
            <p>High School EUEE</p>
            </VerticalTimelineElement>

            <VerticalTimelineElement className='vertical-timeline-element-education' 
                 date='2018 - 2020' 
                    iconStyle={{background: "#3e497a",color: "#fff" }} 
                      icon={<SchoolIcon />}>
              <h3 className='vertical-timeline-element-title'>My Seto Semero Secondary School, Jimma, Oromia</h3>
            <p>High School </p>
            </VerticalTimelineElement>

          <VerticalTimelineElement className='vertical-timeline-element-education' 
                 date='2010 - 2018' 
                    iconStyle={{background: "#3e497a",color: "#fff" }} 
                      icon={<SchoolIcon />}>
              <h3 className='vertical-timeline-element-title'>My Dle Fre Elementary School, Jimma, Oromia</h3>
            <p>Elementary Certificate</p>
            </VerticalTimelineElement>
            </VerticalTimeline></div>
    )
}

export default Education