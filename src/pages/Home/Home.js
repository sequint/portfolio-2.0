import NavBar from '../../components/NavBar/NavBar'
import AboutMe from '../../components/AboutMe/AboutMe'
import ClassTimeline from '../../components/ClassTimeline/ClassTimeline'
import ContactMe from '../../components/ContactMe/ContactMe'
import SkillList from '../../components/SkillList/SkillList'
import ProjectList from '../../components/ProjectList/ProjectList'

const Home = () => {
  return(
    <>
      <NavBar />
      <AboutMe />
      <ClassTimeline />
      <SkillList />
      <ProjectList />
      <ContactMe />
    </>
  )
}

export default Home
