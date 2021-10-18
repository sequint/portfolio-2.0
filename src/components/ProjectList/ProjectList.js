import ImageList from '@mui/material/ImageList'
import ImageListItem from '@mui/material/ImageListItem'
import ImageListItemBar from '@mui/material/ImageListItemBar'
import IconButton from '@mui/material/IconButton'
import InfoIcon from '@mui/icons-material/Info'
import pubImg from '../../images/project-screenshots/PUB-icon.png'
import sessionImg from '../../images/project-screenshots/session-icon.png'
import binaryTreeImg from '../../images/project-screenshots/binary-tree-icon.png'

const itemData = [
  {
    img: pubImg,
    title: 'Breakfast',
    author: '@bkristastucchio',
    featured: true,
  },
  {
    img: sessionImg,
    title: 'Burger',
    author: '@rollelflex_graphy726',
  },
  {
    img: binaryTreeImg,
    title: 'Camera',
    author: '@helloimnik',
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
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=248&fit=crop&auto=format`}
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
            <ImageListItemBar
              title={item.title}
              subtitle={item.author}
              actionIcon={
                <IconButton
                  sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                  aria-label={`info about ${item.title}`}
                >
                  <InfoIcon />
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
