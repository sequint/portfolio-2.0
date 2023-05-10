import NavBar from "../../components/NavBar/NavBar"
import sadFace from '../../images/sad-face.png'
import './Resume.css'

const Resume = () => {
  return(
    <>
      <NavBar />
      <embed src="https://drive.google.com/drive/u/0/search?ths=true&q=steven%27s%20resu" className="resumePDF" type="application/pdf" width="100%" height="100%" title="resume"></embed>
      <img src={sadFace} alt="sad face" className="sadFace" />
    </>
  )
}

export default Resume
