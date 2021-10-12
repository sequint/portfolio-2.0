import { useState, useEffect } from 'react'
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

  useEffect(() => {
    let currentIndex = indexState.titleIndex
    setInterval(() => {
      currentIndex === 6 ? setIndexState({ titleIndex: 0 }) : setIndexState({ titleIndex: currentIndex + 1 })
    }, 3000)
  })

  // Set next title variable equal to the titles array at the state index.
  let nextTitle = ''
  nextTitle = titles[indexState.titleIndex]

  const displayNextTitle = _ => {
    return titles[index]
  }

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
