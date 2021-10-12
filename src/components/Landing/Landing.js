import logo from '../../images/portfolio-logo.png'
import './Landing.css'

const Landing = () => {
  return(
    <div className="landing-container">
      <img 
        src={logo}
        className="landing-logo"
        alt="Steven Quintana logo"
      />
      <h1 className="landing-title">Steven Quintana</h1>
    </div>
  )
}

export default Landing
