import './ResumeButton.css'

const ResumeButton = () => {

  const handleResumeClick = event => {
    event.preventDefault()
    window.location = './resume'
  }

  return(
    <>
      <button className="resumeBtn" onClick={handleResumeClick}>Resume</button>
    </>
  )
}

export default ResumeButton
