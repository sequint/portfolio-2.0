import NavBar from "../../components/NavBar/NavBar"
// import resume from '../../assets/resume.pdf'
import './Resume.css'

const Resume = () => {
  return(
    <div className="resumePageContainer">
      <NavBar />
      <div className="resumePDF">
        <embed src="https://drive.google.com/file/d/1A-tr3On9p74ALBTIYh_DQC__yvqADgqM/preview" width="100%" height="100%" title="resume"></embed>
      </div>
    </div>
  )
}

export default Resume
