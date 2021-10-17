import NavBar from '../../components/NavBar/NavBar'
import AboutMe from '../../components/AboutMe/AboutMe'
import ClassTimeline from '../../components/ClassTimeline/ClassTimeline'
import ContactMe from '../../components/ContactMe/ContactMe'
// import Approach from '../../components/Approach/Approach'
// import problemSolvingImg from '../../images/problem-solving.jpeg'
// import Landing from '../../components/Landing/Landing'

// const approaches = [
//   {
//     name: 'Problem Solving',
//     description: 'Problem solving approach.',
//     img: {problemSolvingImg}
//   },
//   {
//     name: 'Comment First',
//     description: 'Comment first approach.',
//     img: { problemSolvingImg }
//   },
//   {
//     name: 'debugging',
//     description: 'Debugging approach.',
//     img: { problemSolvingImg }
//   }
// ]

const Home = () => {
  return(
    <>
      <NavBar />
      <AboutMe />
      <ClassTimeline />
      <ContactMe />
      {/* {approaches.map(approach => <Approach approach={approach}/>)} */}
      {/* <Landing /> */}
    </>
  )
}

export default Home
