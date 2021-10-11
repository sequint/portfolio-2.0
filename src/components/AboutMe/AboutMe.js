import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import headshot from '../../images/headshot.jpeg'
import './AboutMe.css'

const AboutMe = () => {
  return(
    <>
      <Container fluid="md" className="text-center">
        <Row>
          <Col>
            <img
              src={headshot}
              alt="Steven Quintana headshot"
              className="headshot"
            />
          </Col>
          <Col>2 of 2</Col>
        </Row>
      </Container>
    </>
  )
}

export default AboutMe
