import NavBar from '../../components/NavBar/NavBar'
import PageTitle from '../../components/PageTitle/PageTitle'
import ProjectList from '../../components/ProjectList/ProjectList'
import ContactMe from '../../components/ContactMe/ContactMe'

const Projects = () => {
  return(
    <>
      <NavBar />
      <PageTitle title="Projects" />
      <ProjectList />
      <ContactMe />
    </>
  )
}

export default Projects
