import { Col, Container, Row } from 'react-bootstrap'
import Particle from '../../pages/Particle'
import Type from '../../pages/Home/Type'
import homeLogo from "../../assets/logo.png";

const FirstPresentation = () => {
  return (
    <Container fluid className="home-section" id="home">
    <Particle />
    <Container className="home-content">
      <Row>
        <Col md={7} className="home-header">
          <h1 style={{ paddingBottom: 15 }} className="heading">
            BIENVENUE CHEZ{" "} SOIN<strong className="main-name">ALPIN</strong><span className="wave" role="img" aria-labelledby="wave">👋🏻👨‍⚕️ </span>
            <div style={{ paddingBottom: 80, textAlign: "left", fontSize: 22 }}>
              <Type />
            </div>
          </h1>
        </Col>

        <Col md={5} style={{ paddingBottom: 20, display: "flex", justifyContent: 'center' }}>
          <img src={homeLogo} alt="home pic" className="img-fluid" style={{ maxHeight: "450px" }}/>
        </Col>
      </Row>
    </Container>
  </Container>
  )
}

export default FirstPresentation;