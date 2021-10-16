import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import headshot from '../../images/headshot.jpeg'
import './AboutMe.css'

const aboutMeText = 'Full Stack Engineer leveraging 7 years of experience within the finance industry to work with a high performing team developing modern apps that disrupt the status quo and are easy to use. Known to be an independent problem solver and leader in fast-paced environments, with a history of leading teams to develop engaging applications.'

const AboutMe = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <img src={headshot} class="headshot" alt="headshot" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <h1>About Me</h1>
          <p className="aboutMeText">{aboutMeText}</p>
        </Grid>
      </Grid>
    </Box>
  )
}

export default AboutMe
