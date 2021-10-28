import { Link } from 'react-router-dom'
import './ResumeButton.css'

const ResumeButton = () => {
  return(
    <>
      <Link to="/resume">
        <button className="resumeBtn">Resume</button>
      </Link>
    </>
  )
}

export default ResumeButton
