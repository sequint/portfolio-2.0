import NavBar from "../../components/NavBar/NavBar"
import sadFace from '../../images/sad-face.png'
import resumePDF from '../../assets/resume'
import './Resume.css'

const Resume = () => {
  return(
    <>
      <NavBar />
      <embed src={resumePDF} className="resumePDF" type="application/pdf" width="100%" height="100%" title="resume"></embed>
      <img src={sadFace} alt="sad face" className="sadFace" />
    </>
  )
}

export default Resume
