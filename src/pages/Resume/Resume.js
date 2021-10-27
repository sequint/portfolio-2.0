import NavBar from "../../components/NavBar/NavBar"
import resume from '../../assets/resume.pdf'
import './Resume.css'

const Resume = () => {
  return(
    <>
      <NavBar />
      <div>
        <embed src={resume} className="resumePDF" width="100%" height="100%" title="resume"></embed>
      </div>
    </>
  )
}

export default Resume
