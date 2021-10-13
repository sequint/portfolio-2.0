import { useState, useEffect } from 'react'
import logo from '../../images/portfolio-logo.png'
import './Landing.css'

const Landing = () => {
  const [ index, setIndex ] = useState(0)

  // Array for titles to display on the landing component.
  const titles = [
    <h1 className="landing-title">Steven Quintana</h1>,
    <h1 className="landing-title">Software Engineer</h1>,
    <h1 className="landing-title">Full Stack Developer</h1>,
    <h1 className="landing-title">React Developer</h1>,
    <h1 className="landing-title">Problem Solver</h1>,
    <h1 className="landing-title">Surfer</h1>
  ]

  useEffect(() => {
    setTimeout(() => {
      setIndex(index < titles.length - 1 ? index + 1 : 0)
    }, 3000)
  }, [index])

  return(
    <div className="landingContainer">
      <img
        src={logo}
        alt="site logo"
        className="bigLogo"
        position="center"
      />
      {titles[index]}
    </div>
  )
}

export default Landing
