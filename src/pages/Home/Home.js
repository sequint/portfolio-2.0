import NavBar from '../../components/NavBar/NavBar'
import AboutMe from '../../components/AboutMe/AboutMe'
import './Home.css'

const Home = () => {
  return(
    <>
      <div className="nav-bio-container">
        <NavBar />
        <AboutMe />
      </div>
    </>
  )
}

export default Home
