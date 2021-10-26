import NavBar from '../../components/NavBar/NavBar'
import AboutMe from '../../components/AboutMe/AboutMe'
import ClassTimeline from '../../components/ClassTimeline/ClassTimeline'
import ContactMe from '../../components/ContactMe/ContactMe'
import PageTitle from '../../components/PageTitle/PageTitle'
import SkillList from '../../components/SkillList/SkillList'
import ProjectList from '../../components/ProjectList/ProjectList'
// import Landing from '../../components/Landing/Landing'

const Home = () => {
  return(
    <>
      <NavBar />
      <AboutMe />
      <ClassTimeline />
      <SkillList />
      <PageTitle title="Projects" />
      <ProjectList />
      <ContactMe />
      {/* <Landing /> */}
    </>
  )
}

export default Home
