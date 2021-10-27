import NavBar from "../../components/NavBar/NavBar"
import resume from '../../assets/resume.pdf'
import './Resume.css'

const Resume = () => {
  return(
    <div className="resumePageContainer">
      <NavBar />
      <iframe src={resume} width="100%" height="100%" className="resumePDF" title="resume" allow="autoplay"></iframe>
    </div>
  )
}

export default Resume
