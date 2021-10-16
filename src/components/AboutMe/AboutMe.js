import * as React from 'react'
import { styled } from '@mui/material/styles'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'
import headshot from '../../images/headshot.jpeg'
import './AboutMe.css'

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2
}))

const aboutMeText = 'Full Stack Engineer leveraging 7 years of experience within the finance industry to work with a high performing team developing modern apps that disrupt the status quo and are easy to use. Known to be an independent problem solver and leader in fast-paced environments, with a history of leading teams to develop engaging applications.'

const AboutMe = () => {
  return (
    <Box sx={{ width: '100%' }}>
      <Grid
        container
        direction="row"
        justifyContent="space-evenly"
        alignItems="center"
        rowSpacing={2}
        columnSpacing={{xs: 1, sm: 30}}
      >
        <Grid item xs={12} sm={6}>
          <Item>
            <img src={headshot} class="headshot" alt="headshot" />
          </Item>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Item className="aboutMeArea">
            <h1 className="aboutMeTitle">About Me</h1>
            <p className="aboutMeText">{aboutMeText}</p>
          </Item>
        </Grid>
      </Grid>
    </Box>
  )
}

export default AboutMe
