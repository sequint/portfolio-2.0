import Timeline from '@mui/lab/Timeline'
import TimelineItem from '@mui/lab/TimelineItem'
import TimelineSeparator from '@mui/lab/TimelineSeparator'
import TimelineConnector from '@mui/lab/TimelineConnector'
import TimelineContent from '@mui/lab/TimelineContent'
import TimelineDot from '@mui/lab/TimelineDot'
import ClassCard from '../ClassCard/ClassCard'
import './ClassTimeline.css'

const classes = [
  {
    year: 2021,
    title: 'Full Stack Bootcamp',
    description: 'Learned to develop full stack progress web applications focused on MERN Stack development. Was team lead on three projects culminating in a final fully deployed commercial use application.'
  },
  {
    year: 2020,
    title: 'Data Structures',
    description: 'Learned basic data structures in C++ language ranging from linked lists, ques, and stacks to binary trees using nodes to search and sort. Was a top performer in the class, recieving an A+ on all projects, and leading the design of a final binary tree design.'
  },
  {
    year: 2013,
    title: 'Intro to Programming: C++',
    description: 'Learned basic functional and object oriented programming in the C++ language. Top performer in the class creating functional console applications with a focus on effecient memory allocation and reusable code.'
  }
]

const ClassTimeline = () => {
  return(
    <div className="classesContainer">
      <h1 className="timelineTitle">Programming Courses</h1>
      <Timeline>
        {classes.map(oneClass => {
          return(
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                {oneClass.year}
                <br/><br/>
                <ClassCard classTitle={oneClass.title} classDescription={oneClass.description} />
                <br /><br />
              </TimelineContent>
            </TimelineItem>
          )
        })}
      </Timeline>
    </div>
  )
}

export default ClassTimeline
