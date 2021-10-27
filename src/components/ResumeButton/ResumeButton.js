import { useState, useEffect } from 'react'
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
      <button className="resumeBtn" onClick={handleResumeClick}>{isXS ? <AttachFileIcon /> : 'Resume'}</button>
    </>
  )
}

export default ResumeButton
