import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import AttachFileIcon from '@mui/icons-material/AttachFile'
import './ResumeButton.css'

const ResumeButton = () => {
  const [size, setSize] = useState(window.innerWidth)
  const [isXS, setIsXS] = useState(true)

  const updateWidth = _ => {
    setSize(window.innerWidth)
  }

  useEffect(() => {

    window.addEventListener("resize", updateWidth)

    if (size > 375) {
      console.log('in large')
      setIsXS(false)
    }
    else if (size <= 375) {
      console.log('in xs')
      setIsXS(true)
    }

    return () => window.removeEventListener("resize", updateWidth)

  }, [size])

  const handleResumeClick = event => {
    event.preventDefault()
    window.location = './resume'
  }

  return(
    <>
      <Link to="/resume">
        <button className="resumeBtn">{isXS ? <AttachFileIcon /> : 'Resume'}</button>
      </Link>
    </>
  )
}

export default ResumeButton
