import NavBar from "../../components/NavBar/NavBar"
import './Resume.css'

const Resume = () => {
  return(
    <div className="resumePageContainer">
      <NavBar />
      <iframe src="https://drive.google.com/file/d/1A-tr3On9p74ALBTIYh_DQC__yvqADgqM/preview" width="100%" height="100%" className="resumePDF" title="resume" allow="autoplay"></iframe>
    </div>
  )
}

export default Resume
