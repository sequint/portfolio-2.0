import { useState } from 'react'
import logo from '../../images/portfolio-logo.png'
import './Landing.css'

// Array for titles to display on the landing component.
const titles = [
  'Steven Quintana',
  'Software Engineer',
  'Full Stack Developer',
  'React Developer',
  'Problem Solver',
  'Learner',
  'Surfer'
]

const Landing = () => {
  // Set state for the title.
  const [ indexState, setIndexState ] = useState({
    titleIndex: 0
  })

  // Set next title variable equal to the titles array at the state index.
  let nextTitle = titles[indexState.titleIndex]

  return(
    <div className="landing-container">
      <img 
        src={logo}
        className="landing-logo"
        alt="Steven Quintana logo"
      />
      <h1 className="landing-title">{nextTitle}</h1>
    </div>
  )
}

export default Landing
