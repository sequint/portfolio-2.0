import { useState } from 'react'
import ImageList from '@mui/material/ImageList'
import ImageListItem from '@mui/material/ImageListItem'
import ImageListItemBar from '@mui/material/ImageListItemBar'
import IconButton from '@mui/material/IconButton'
import GitHubIcon from '@mui/icons-material/GitHub'
import LanguageIcon from '@mui/icons-material/Language'
import SeeMoreBtn from '../SeeMoreBtn/SeeMoreBtn'
import pubImg from '../../images/project-screenshots/PUB-icon.png'
import binTreeImg from '../../images/project-screenshots/binary-tree-icon.png'
import joferImg from '../../images/project-screenshots/JOFER.png'
import './ProjectList.css'

const projects = [
  {
    img: joferImg,
    title: 'Jofer',
    author: '#React.js #Node.js #MongoDB',
    featured: true,
    gitHubLink: 'https://github.com/sequint/Jofer',
    deployedSite: 'https://jofer.herokuapp.com',
    description: `An app that allows users to create and manage projects that they are working on, while tracking other projects that they like.`
  },
  {
    img: pubImg,
    title: 'PUB',
    author: '#Node.js #FullStack',
    gitHubLink: 'https://github.com/sequint/pub',
    deployedSite: 'https://pure-brook-86019.herokuapp.com/',
    description: `Stands for 'Project Hub'. This app allow you to create and update progress on projects you are working on. It also allows other users to track and comment on your projects to help you out!`
  },
  {
    img: binTreeImg,
    title: 'C++ Binary Tree',
    author: '#C++ #search #memory-allocation',
    gitHubLink: 'https://github.com/sequint/int-binary-tree',
    deployedSite: 'https://github.com/sequint/int-binary-tree',
    description: `C++ console app that can add/delete numbers from a binary tree, get leaf numbers on the tree, and return the trees height or width.`
  }
]

const ProjectList = () => {
  const [ hover, setHover ] = useState(false)

  return(
    <div className="projectContainer">
      <h1 className="projectsTitle">Project Highlights</h1>
      <SeeMoreBtn path="projects" />
      <ImageList ImageList className="imgListContainer" cols={1} >
        {
          projects.map(project => (
            <ImageListItem
              key={project.img}
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
            >
              <img
                src={`${project.img}?w=248&fit=crop&auto=format`}
                srcSet={`${project.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={project.title}
                loading="lazy"
                className="projImg"
              />
              {hover ? <ImageListItemBar className="descArea" title={project.description}></ImageListItemBar> : <></>}
              <ImageListItemBar
                title={project.title}
                subtitle={project.author}
                actionIcon={
                  <IconButton
                    className="linkIcon"
                    sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                    aria-label={`info about ${project.title}`}
                  >
                    <a className="noDecor linkIcon" href={project.deployedSite} target="_blank" rel="noreferrer">
                      <LanguageIcon className="linkIcon" sx={{ fill: 'white' }} />
                    </a>
                    <a className="noDecor" href={project.gitHubLink} target="_blank" rel="noreferrer">
                      <GitHubIcon className="linkIcon" sx={{ fill: 'white' }} />
                    </a>
                  </IconButton>
                }
              />
            </ImageListItem>
          ))
        }
      </ImageList >
    </div>
  )
}

export default ProjectList
