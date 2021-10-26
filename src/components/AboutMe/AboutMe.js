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

const aboutMeText = `Hi, my name is Steven.  I have been coding since 2013 when I took my first C++ class, and have been learning different tech on my own ever since.  I am a recent graduate of UC Irvine's Full Stack Development Bootcamp focused on the Mern Stack, where I was team lead on all three projects leading weekly sprints which culminated into a final project.`

const aboutMeContinued = `Prior to diving into Software Development full time I was in the finance industry where I saw an immediate need to re-invent the way we approach business with technology.  My passion lies in making outdated process new, clean, and effeciant with modern tools and technologies.`

const AboutMe = () => {
  return (
    <Box className="aboutMeContainer" sx={{ width: '100%' }}>
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
            <img src={headshot} className="headshot" alt="headshot" />
            <Grid
              container
              direction="row"
              justifyContent="space-evenly"
              alignItems="center"
              rowSpacing={2}
              columnSpacing={2}
              className="siteLinksContainer"
            >
            <Grid item xs={6}>
              <Item>
                <svg
                viewBox="0 0 1024 1024"
                fill="currentColor"
                height="50px"
                width="50px"
                className="githubIcon"
                >
                  <path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0138.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z" />
                </svg>
              </Item>
            </Grid>
            <Grid item xs={6}>
              <Item>
                              <svg
                viewBox="0 0 1024 1024"
                fill="currentColor"
                height="50px"
                width="50px"
                className="linkedinIcon"
              >
                <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM349.3 793.7H230.6V411.9h118.7v381.8zm-59.3-434a68.8 68.8 0 1168.8-68.8c-.1 38-30.9 68.8-68.8 68.8zm503.7 434H675.1V608c0-44.3-.8-101.2-61.7-101.2-61.7 0-71.2 48.2-71.2 98v188.9H423.7V411.9h113.8v52.2h1.6c15.8-30 54.5-61.7 112.3-61.7 120.2 0 142.3 79.1 142.3 181.9v209.4z" />
              </svg>
              </Item>
            </Grid>
          </Grid>
          </Item>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Item className="aboutMeArea">
            <h1 className="aboutMeTitle">About Me</h1>
            <p className="aboutMeText">{aboutMeText}</p>
            <p className="aboutMeText">{aboutMeContinued}</p>
          </Item>
        </Grid>
      </Grid>
    </Box>
  )
}

export default AboutMe
