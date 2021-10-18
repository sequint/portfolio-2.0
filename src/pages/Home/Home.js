import NavBar from '../../components/NavBar/NavBar'
import AboutMe from '../../components/AboutMe/AboutMe'
import ClassTimeline from '../../components/ClassTimeline/ClassTimeline'
import ContactMe from '../../components/ContactMe/ContactMe'
// import Landing from '../../components/Landing/Landing'

const Home = () => {
  return(
    <>
      <NavBar />
      <AboutMe />
      <ClassTimeline />
      <ContactMe />
      {/* <Landing /> */}
    </>
  )
}

export default Home
