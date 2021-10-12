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
    </div>
  )
}

export default Landing
