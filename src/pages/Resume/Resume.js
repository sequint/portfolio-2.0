import NavBar from "../../components/NavBar/NavBar"
// import resume from '../../assets/resume.pdf'
import './Resume.css'

const Resume = () => {
  return(
    <>
      <NavBar />

      {/* <embed src="https://drive.google.com/file/d/1A-tr3On9p74ALBTIYh_DQC__yvqADgqM/view?usp=sharing" className="resumePDF" type="application/pdf" width="100%" height="100%" title="resume"></embed> */}
      <iframe src="https://drive.google.com/file/d/1A-tr3On9p74ALBTIYh_DQC__yvqADgqM/preview" width="900" height="700" title="resume" allow="autoplay"></iframe>

    </>
  )
}

export default Resume
