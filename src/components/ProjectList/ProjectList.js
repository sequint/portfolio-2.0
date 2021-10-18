import ImageList from '@mui/material/ImageList'
import ImageListItem from '@mui/material/ImageListItem'
import ImageListItemBar from '@mui/material/ImageListItemBar'
import IconButton from '@mui/material/IconButton'
import GitHubIcon from '@mui/icons-material/GitHub'
import LanguageIcon from '@mui/icons-material/Language'
import pubImg from '../../images/project-screenshots/PUB-icon.png'
import sessionImg from '../../images/project-screenshots/session-icon.png'
import binaryTreeImg from '../../images/project-screenshots/binary-tree-icon.png'
import './ProjectList.css'

const projects = [
  {
    img: pubImg,
    title: 'PUB',
    author: '#Node.js #FullStack',
    featured: true,
    gitHubLink: 'https://github.com/sequint/pub',
    deployedSite: 'https://pure-brook-86019.herokuapp.com/',
    description: `Stands for 'Project Hub'. This app allow you to create and update progress on projects you are working on. It also allows other users to track and comment on your projects to help you out!`
  },
  {
    img: sessionImg,
    title: 'Session',
    author: '#API #VanillaJS',
    gitHubLink: 'https://github.com/sequint/pub',
    deployedSite: 'https://pure-brook-86019.herokuapp.com/',
    description: `Stands for 'Project Hub'. This app allow you to create and update progress on projects you are working on. It also allows other users to track and comment on your projects to help you out!`
  },
  {
    img: binaryTreeImg,
    title: 'Binary Tree',
    author: '#C++',
    gitHubLink: 'https://github.com/sequint/pub',
    deployedSite: 'https://pure-brook-86019.herokuapp.com/',
    description: `Stands for 'Project Hub'. This app allow you to create and update progress on projects you are working on. It also allows other users to track and comment on your projects to help you out!`
  }
]

const ProjectList = () => {
  return(
    <>
      <ImageList
        className="projects"
        sx={{ width: 300, height: 600, margin: '20px auto 0px auto' }}
        rows={1}
        cols={1}
      >
        {projects.map((project) => (
          <ImageListItem key={project.img}>
            <img
              src={`${project.img}?w=248&fit=crop&auto=format`}
              srcSet={`${project.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={project.title}
              loading="lazy"
            />
            <ImageListItemBar
              title={project.title}
              subtitle={project.author}
              actionIcon={
                <IconButton
                  sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                  aria-label={`info about ${project.title}`}
                >
                  <a className="noDecor" href={project.deployedSite} target="_blank">
                    <LanguageIcon sx={{ fill: 'white' }}/>
                  </a>
                  <a className="noDecor" href={project.gitHubLink} target="_blank">
                    <GitHubIcon sx={{ fill: 'white' }} />
                  </a>
                </IconButton>
              }
            />
          </ImageListItem>
        ))}
      </ImageList>
    </>
  )
}

export default ProjectList